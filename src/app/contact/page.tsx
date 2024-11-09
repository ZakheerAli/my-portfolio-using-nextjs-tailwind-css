import Navbar from "../components/navbar"
import Image from "next/image"
import Link from "next/link";
export default function Contact(){
 return(
    <div>
        <Navbar/>
        <div className="w-full h-screen flex flex-col items-center justify-center pt-40">
            <h1 className="text-7xl font-extrabold text-zinc-500">CONTACT <span className="text-7xl font-extrabold text-orange-500">US</span></h1>
            <p className="text-lg mt-5   text-slate-500 font-bold text-center">"I'm always open to new opportunities, collaborations, and exciting projects. Whether you have a question, a project idea, or just want to say hi, feel free to reach out!"</p>
            <div className=" w-full flex items-center justify-center gap-10 pt-20 text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-yellow-200">
               <img src="/gmail.png" alt="G-mail" />
                </div>
                <div>
                    <h1 className="text-3xl font-extrabold  text-red-600">Email Address</h1>
                    <a  className="text-base  text-zinc-500" href="https://mail.google.com/mail/u/0/#inbox" target="_blank">zakheerali@gmail.com</a>
                </div>
                <div className="w-20 h-20 flex items-center justify-center bg-yellow-200">
               <img src="/github.png" alt="GitHub" />
                </div>
                <div>
                    <h1 className="text-3xl font-extrabold  text-black">GitHub Account</h1>
                    <a  className="text-base  text-zinc-500" href="https://github.com/ZakheerAli"  target="_blank">https://github.com/ZakheerAli</a>
                </div>
            </div>
            <div className=" w-full flex items-center justify-center gap-10 pt-20 text-center">
                <div className="w-20 h-20 flex items-center justify-center">
               <img src="/linkedin-.webp" alt="LinkedIn" />
                </div>
                <div>
                    <h1 className="text-3xl font-extrabold  text-blue-500">LinkedIn Account</h1>
                    <a  className="text-base  text-zinc-500" href="www.linkedin.com/in/zakheer-ali-57a8a1335" target="_blank">www.linkedin.com/in/zakheerali</a>
                </div>
                <div className="w-20 h-20 flex items-center justify-center bg-yellow-200">
               <img src="/whatsapp.png" alt="Whatsapp" />
                </div>
                <div>
                    <h1 className="text-3xl font-extrabold  text-green-500">Whatsapp Number</h1>
                    <a  className="text-base  text-zinc-500" href="">+92 301-1061774</a>
                </div>
            </div>
        </div>
    </div>
 )   
}