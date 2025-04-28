import { Schema } from "mongoose";


const meetingSchema = new Schema(
    {
        user_id: {type: String},
        meetingCode: {type: String, required: true},
        date: {type: Date, default: date.now, required: true}
    }
)

const Meeting = mongoose.model("Meeting", meetingSchema);                                      

export { Meeting };
