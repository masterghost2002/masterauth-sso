"use client"
import axios from "axios"
import { useState } from "react"
import {redirect, useSearchParams} from 'next/navigation';
export default function Page() {
  const search = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const next = search.get('next');
  const handleLogin = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try {
      const res = await axios.post('/api/login', {email, password});
      if(next)
      window.location.assign(next)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div
      className="flex flex-col gap-2 p-5 border-2 rounded-md"
    >
      <form 
        className="flex flex-col gap-5 justify-center"
        onSubmit={(e)=>handleLogin(e)}
      >
        <div
          className="flex flex-col"
        >
          <label
            className="font-bold"
          >
            Email
          </label>
          <input
            className="p-1 rounded-md bg-slate-100 text-black"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div
          className="flex flex-col"
        > 
          <label
            className="font-bold"
          >
            Password
          </label>
          <input
            className="p-1 rounded-md bg-slate-100 text-black"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 rounded-md p-2"
          type="submit"
        >
          Signin
        </button>
      </form>

    </div>
  )

}