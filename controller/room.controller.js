import Room from '../models/room.model'

/** GET: http://localhost:3000/api/room */
export async function getAllRooms(req, res){
    try {
        const rooms = await Room.find({})
        return res.status(200).json({ success: true, data: rooms })
    } catch (error) {
        return res.status(400).json({ error })
    }
}

/** POST: http://localhost:3000/api/room */
export async function createRoom(req, res){
    try {
        
        const len = await (await Room.find({})).length;

        const defaultRoom = {
            name : `Room ${len + 1}`,
            messages: []
        }

        const chat = await Room.create(defaultRoom);
        return res.status(200).json({ success: true, data: chat })

    } catch (error) {
        return res.status(400).json({ error })
    }
}

/** GET: http://localhost:3000/api/room/id */
export async function getRoom(req, res){
    try {
        const { id } = req.query;
        
        if(!id) return res.status(400).json({ error : "No chat id present...!"});
        
        const room = await Room.findById(id).populate('messages')
        
        if(!room) return res.status(400).json({ error : "No room Found...!"})

        return res.status(200).json({ success : true, data: room });

    } catch (error) {
        return res.status(400).json({ error })
    }
}


/** DELETE: http://localhost:3000/api/room/id */
export async function deleteRoom(req, res){
    try {
        const { id } = req.query;
        if(!id) return res.status(400).json({ error : "No chat id present...!"})

        await Room.findByIdAndDelete(id);
        return res.status(200).json({ success : true , deleted: id })

    } catch (error) {
        return res.status(400).json({ error })
    }
}