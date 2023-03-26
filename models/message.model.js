import { Schema, model, models } from "mongoose";

const MessageSchema = new Schema({
    question : String,
    answer : String,
    room : {
        type: Schema.Types.ObjectId,
        ref: 'Room'
    }
});

export default models.Message || model('Message', MessageSchema)

