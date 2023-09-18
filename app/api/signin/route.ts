import { NextRequest, NextResponse } from "next/server";
import {cookies} from 'next/headers';
import jwt  from "jsonwebtoken";
export function GET(req:NextRequest){
    const cookie = cookies();
    const next = req.url?.split('?')[1];
    const url = next.split('=')[1];
    console.log(url);
    
    const accessToken = cookie.get('accessToken')?.value;
    if(!accessToken)
    return NextResponse.redirect(`http://localhost:3000/signin?next=${url}`);
    try {
        const data = jwt.verify(accessToken, 'rakesh');
        return NextResponse.redirect(url);
    } catch (error) {
        console.log(error);
        return NextResponse.redirect(`http://localhost:3000/signin?next=${url}`);
    }
}