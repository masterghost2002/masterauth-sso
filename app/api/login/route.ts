import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
type user = {
    email:string,
    password:string
}
const users = [
    {
        email:'rakeshdhariwal',
        password:'rakesh'
    },
    {
        email:'rakesh',
        password:'123'
    }
]
export async function POST(req:NextRequest){
    const {email, password} = await req.json();
    const user = users.filter((user:user)=>(user.email === email && user.password === password));
    if(!user){
        return new NextResponse('No user found', {status:404});
    }
    const accessToken = jwt.sign({
        email,
        password
    }, 'rakesh');
    const response = new NextResponse(null, {
        headers:{
            'Set-Cookie':`accessToken=${accessToken}; Max-Age=${90000}; HttpOnly:Secure`
        },
    });
    return response;
}