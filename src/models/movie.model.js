import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    img: {
        type: String,
    },
    sorting: {
        type: String,
        required: true
    },
    show: {
        id: {
            type: String,
            unique: true,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        cost:{
            type: Number,
            required: true,
        },
    },
})

export default mongoose.model('Movie', movieSchema);