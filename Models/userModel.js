import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Enter  userName"],
        unique: [true, "Enter a valid userName"],
    },
    password: { type: String },
});

const userModel = mongoose.model("userModel", userSchema);

export default userModel;