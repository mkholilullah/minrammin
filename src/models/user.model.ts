import mongoose from "mongoose";

export interface User {
    fullName: string;
    username: string;
    email: string;
    password: string;
    role: string;
    profilePicture: string;
    isActive: string;
    activationCode: string;
}