import { Request, Response } from "express";
import * as Yup from "yup";
import UserModel from "../models/user.model";

type TRegister = {
    fullname: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const registerValidateSchema = Yup.object({
    fullname: Yup.string().required(),
    username: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref('password'), ""],  "Password not match"),
});

export default {
    async register(req: Request, res: Response) {
        const { fullname, username, email, password, confirmPassword } = req.body as unknown as TRegister;

       try {
        await registerValidateSchema.validate({
            fullname, username, email, password, confirmPassword,
        });

        const result = await UserModel.create({
            fullname, username, email, password,
        });

        res.status(200).json({
            message: "Congratulations!",
            // data: {
            //     fullname,
            //     username,
            //     email,
            // },
            data: result,
        });
       } catch (error) {
        const err = error as unknown as Error;
        res.status(400).json({
            message: err.message,
            data: null,
        });
       }
    },
};