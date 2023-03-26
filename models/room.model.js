import { Schema, model, models } from "mongoose";

const RoomSchema = new Schema({
    name : String,
    messages : [{
        type: Schema.Types.ObjectId,
        ref : "Message"
    }]
});

export default models.Room || model('Room', RoomSchema)

