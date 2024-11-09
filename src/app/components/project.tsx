import Image from "next/image"
import Link from "next/link"
export default function Project() {
    return (
        <div>
        
            <div className=" w-full h-full bg-slate-950 flex  flex-col items-center justify-center ">
                <div className="w-full h-full flex pt-24 pb-20 items-center text-center justify-center ">
                    <h1 className="text-7xl w-full mt-32 text-slate-500 font-extrabold">MY <span className="text-7xl  text-orange-500 font-extrabold">PROJECTS</span></h1>
                </div>
                <div className="w-full h-full gap-16 flex-col items-center flex pt-32 bg-slate-950">

                    <h2 className="text-3xl mt-20   text-orange-500 font-bold">AMAZON CLONE USING HTML & CSS</h2>
                    <a href="https://github.com/ZakheerAli/Amazon-Clone-HTML---CSS.git" target="_blank" className="text-xl text-center w-full text-slate-500 font-bold"> CLICK HERE TO SEE MY PROJECT</a>
                    <div className=" w-1/2 h-1/3 bg-white">
                        <Link href="https://github.com/ZakheerAli/Amazon-Clone-HTML---CSS.git" target="_blank"> <img src="/capture1.PNG" className="w-full h-full" alt="" /></Link>

                    </div>
                    <h2 className="text-3xl mt-10   text-orange-500 font-bold">TIC TAC TOE GAME USING HTML,CSS & JS</h2>
                    <a href="https://github.com/ZakheerAli/Tic-Tac-Toe-Game.git" target="_blank" className="text-xl text-center w-full text-slate-500 font-bold"> CLICK HERE TO SEE MY PROJECT</a>
                    <div className=" w-1/2  h-1/3 bg-blue-500">
                    <Link href=" https://github.com/ZakheerAli/Tic-Tac-Toe-Game.git" target="_blank"> <img src="/capture2.PNG" className="w-full h-full" alt="" /></Link>
                    </div>
                    <h2 className="text-3xl mt-5   text-orange-500 font-bold">FINAL ASSIGNMENT USING HTML & CSS </h2>
                    <a href="https://github.com/ZakheerAli/Final_HTML-CSS-Assignment.git" target="_blank" className="text-xl text-center w-full text-slate-500 font-bold"> CLICK HERE TO SEE MY PROJECT</a>
                    <div className=" w-1/2  h-1/3 bg-yellow-500">
                    <Link href="https://github.com/ZakheerAli/Final_HTML-CSS-Assignment.git" target="_blank"> <img src="/capture3.PNG" className="w-full h-full" alt="" /></Link>
                    </div>
                    <h2 className="text-3xl mt-10   text-orange-500 font-bold">STATIC RESUME USING HTML , CSS & TYPESCRIPT</h2>
                    <a href="https://github.com/ZakheerAli/Milestone-1-Responsive-Static-Resume.git" target="_blank" className="text-xl text-center w-full text-slate-500 font-bold"> CLICK HERE TO SEE MY PROJECT</a>
                    <div className=" w-1/2  h-1/3 bg-purple-500">
                    <Link href="https://github.com/ZakheerAli/Milestone-1-Responsive-Static-Resume.git" target="_blank"> <img src="/capture4.PNG" className="w-full h-full" alt="" /></Link></div>

                </div>

            </div>
        </div>
    )
}