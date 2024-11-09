import Image from "next/image"
import Link from "next/link"
import Navbar from "../components/navbar"
export default function Project() {
    return (
        <div>
            <Navbar />
            <div className=" w-full h-full flex pt-24 pb-20 flex-col items-center justify-center bg-white">
                <div className="w-full h-full flex  items-center text-center justify-center  bg-white">
                    <h1 className="text-7xl w-full mt-40 text-slate-500 font-extrabold">MY <span className="text-7xl  text-orange-500 font-extrabold">PROJECTS</span></h1>
                </div>
                <div className="w-full h-full gap-16 flex-col items-center flex pt-32 bg-white">

                    <h2 className="text-3xl mt-20   text-orange-500 font-bold">AMAZON CLONE USING HTML & CSS</h2>
                    <a href="https://github.com/ZakheerAli/Amazon-Clone-HTML---CSS.git" target="_blank" className="text-xl text-center w-full text-slate-500 font-bold hover:underline-offset-2 hover:font-bold hover:text-blue-500"> CLICK HERE TO SEE MY PROJECT</a>
                    <div className=" w-1/2 h-1/3 bg-white hover:border-2 hover:border-black cursor-pointer">
                        <Link href="https://github.com/ZakheerAli/Amazon-Clone-HTML---CSS.git" target="_blank"> <img src="/capture1.PNG" className="w-full h-full" alt="" /></Link>

                    </div>
                    <h2 className="text-3xl mt-10   text-orange-500 font-bold">TIC TAC TOE GAME USING HTML,CSS & JS</h2>
                    <a href="https://github.com/ZakheerAli/Tic-Tac-Toe-Game.git" target="_blank" className="text-xl text-center w-full text-slate-500 font-bold  hover:text-blue-500"> CLICK HERE TO SEE MY PROJECT</a>
                    <div className=" w-1/2  h-1/3 bg-blue-500 hover:border-2 hover:border-black cursor-pointer">
                    <Link href=" https://github.com/ZakheerAli/Tic-Tac-Toe-Game.git" target="_blank"> <img src="/capture2.PNG" className="w-full h-full" alt="" /></Link>
                    </div>
                    <h2 className="text-3xl mt-10   text-orange-500 font-bold">FINAL ASSIGNMENT USING HTML & CSS </h2>
                    <a href="https://github.com/ZakheerAli/Final_HTML-CSS-Assignment.git" target="_blank" className="text-xl text-center w-full text-slate-500 font-bold  hover:text-blue-500"> CLICK HERE TO SEE MY PROJECT</a>
                    <div className=" w-1/2  h-1/3 hover:border-2 hover:border-black cursor-pointer bg-yellow-500">
                    <Link href="https://github.com/ZakheerAli/Final_HTML-CSS-Assignment.git" target="_blank"> <img src="/capture3.PNG" className="w-full h-full" alt="" /></Link>
                    </div>
                    <h2 className="text-3xl mt-10   text-orange-500 font-bold">STATIC RESUME USING HTML , CSS & TYPESCRIPT</h2>
                    <a href="https://github.com/ZakheerAli/Milestone-1-Responsive-Static-Resume.git" target="_blank" className="text-xl text-center w-full text-slate-500 font-bold  hover:text-blue-500"> CLICK HERE TO SEE MY PROJECT</a>
                    <div className=" w-1/2  h-1/3 hover:border-2 hover:border-black cursor-pointer bg-purple-500">
                    <Link href="https://github.com/ZakheerAli/Milestone-1-Responsive-Static-Resume.git" target="_blank"> <img src="/capture4.PNG" className="w-full h-full" alt="" /></Link></div>

                </div>

            </div>
        </div>
    )
}