import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Name"],
    },
    email: {
        type: String,
        required: [true, "Please Enter Email Id"],
        unique: [true, ""]
    },
    mobileNo: {
        type: Number,
        required: [true, "Enter your Mobile Number"]
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "Please enter Gender"]
    },
    course: {
        type: String,
        enum: ["MCA", "BCA", "BSC"],
        required: [true, "Enter your Course"],
    },
    img: {
        type: String,
        required: [true, "Please add Photo"],
    }
});

// schema.set('timestamps', {
//     createdAt: 'crdAt',
//     updatedAt: 'updAt'
// });

export const Employee = mongoose.model("Employee", schema);