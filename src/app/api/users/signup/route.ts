import { connect } from "@/src/app/dbConfig/dbConfig";
import User from "@/src/models/userModel"
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connect();


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody

        const user = await User.findOne({ email })

        // Check user existance
        if (user) {
            return NextResponse.json({ error: "User Exist" },
                { status: 400 }
            )
        }

        // hash the password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        // Store the new user in the database
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save();

        return NextResponse.json(
            {
                message: "User created successfully",
                user: { id: savedUser._id, username: savedUser.username, email: savedUser.email },
            },
            { status: 201 }
        );

    } catch (error: any) {
        return NextResponse.json({ error: error.message },
            { status: 500 }
        )
    }
}