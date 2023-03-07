import { Schema, model } from 'mongoose'

interface IGuild {
    guildId: string
}



const guildSchema = new Schema<IGuild>({
    guildId: {
        type: String,
        required: true
    }
})

export default model<IGuild>('Guild', guildSchema)