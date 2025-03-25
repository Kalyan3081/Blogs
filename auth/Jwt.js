import jwt from "jsonwebtoken";
const SECRET_KEY = process.env.JWT_SECRET_KEY

export function generateToken(user) {
    return jwt.sign(
        { userId: user._id },
        SECRET_KEY, { expiresIn: "1yr" }
    )
}

