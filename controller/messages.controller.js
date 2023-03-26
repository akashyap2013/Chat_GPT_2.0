import Message from '../models/message.model';
import Room from '../models/room.model'
import { Configuration, OpenAIApi } from 'openai'
import ENV from '../config.env'

/** GET: http://localhost:3000/api/chat/roomid */
export async function getChat(req, res){
    try {
        
        const { roomid } = req.query;

        if(!roomid) return res.status(400).json({ error : "No room id present...!"});

        const messages = await Message.find({ room : roomid }, { __v: 0, room: 0})

        if(!messages) return res.status(400).json({ error : "No message found...!"});

        return res.status(200).json({ success : true, data: messages })

    } catch (error) {
        return res.status(400).json({ error });
    }
}

/** POST: http://localhost:3000/api/chat/roomid */
export async function createChat(req, res){
    const { roomid } = req.query;
    const { question, answer } = req.body;

    if(!roomid) return res.status(400).json({ error : "No room id present...!"});
    if(!question && !answer) res.status(400).json({ error: "Cannot get data from the user...!"});

    /** get current room */
    const rooms = await Room.findOne({ _id : roomid })

    if(!rooms) return res.status(400).json({ error : "No room found...!"});

    /** CONFIG OPEN AI API */
    const config = new Configuration({
        apiKey: ENV.OPENAI_API_KEY
    })

    const openai = new OpenAIApi(config);

    const completion = await openai.createCompletion({
        model : "text-davinci-003",
        prompt : question,
        temperature : 0.5,
        max_tokens : 100,
        top_p : 1
    })

    /** specify data to the message model */
    const message = new Message({
        question,
        answer : completion.data.choices[0].text,
        room : roomid
    })

    /** save data in the database */
    await message.save();

    /** push message in the room model */
    rooms.messages.push(message._id);

    /** save data in the room model */
    await rooms.save()

    return res.status(200).json({ success : true, data: message })

}


/** DELETE: http://localhost:3000/api/chat/roomid */
/** So, This is the exercise for you */