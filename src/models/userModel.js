import mongoose from "mongoose";
    const userSchema = mongoose.Schema(
        {
            username:{
                type: String,
                required: [true, "Please provide a username"],
                unique: true,
            },
            email:{
                type: String,
                required: [true, "Email is required"],
                unique: true,
            },
            password:{
                type: String,
                required: [true, "Password is Required"]
            },
            isCarified:{
                type: Boolean,
                default: false,
            },
            isAdmin:{
                type: Boolean,
                default: false,
            },
            forgotPasswordToken: String,
            forgotPasswordTokenExpiry: Date,
            verifyToken: String,
            verifyTokenExpiry: Date,
        }
    )
const User = mongoose.models.User || mongoose.model("user", userSchema);
export default User;
