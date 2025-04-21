import httpStatus from "http-status";
import { User } from "../models/user.model.js";
import bycript, { hash } from 'bcrypt';
import crypto from "crypto";

//login logic 
const login = async(req, res) => {

    const {username, password} = req.body;

    if(!username || !password) {
        return res.status(400).json({message: "Please Provide Username/Password"})
    }

    try {
        const user = await User.findOne({username});
        if(!user) {
            return res.status(httpStatus.NOT_FOUND).json({message: "user Not Found"})
        }

        if(bycript.compare(password,user.password)) {
            let token = crypto.randomBytes(20).toString("hex");
            user.token = token;
            await user.save();
            return res.status(httpStatus.OK).json({token: token});
        }

    } catch(e) {
        return res.status(500).json({message: `Something went wrong ${e}`});
    }
}

const register = async (req, res) => {
    

    try{
        const {name, username, password} = req.body;
        const existinguser = await User.findOne({ username });
        if(existinguser) {
            return res.status(httpStatus.FOUND).json({message: "User already exists"});
        }

        const hashedPassword = await bycript.hash(password, 10);

        const newUser = new User({
            name: name,
            username: username,
            password: hashedPassword
        });

        await newUser.save();
        res.status(httpStatus.CREATED).json({message: "New User Created"});
    } catch(e) {
        res.json({message: `Something went wrong ${e}`});
    }
}

export {login, register};
