import Link from "next/link"
export default function Navbar(){
    return(
        <div>
            <div className="w-full  fixed top-0 bg-slate-950 flex justify-between px-11 py-6 font-sans">
                <div className=" text-3xl  text-orange-500 font-bold cursor-pointer">PORTFOLIO</div>
                <div className="flex gap-8">
                       <Link className=" text-zinc-300 text-xl font-bold hover:border-b-4 hover:border-orange-500" href="/">Home</Link>
                       <Link className=" text-zinc-300  text-xl font-bold hover:border-b-4 hover:border-orange-500" href="/about">About</Link>
                       <Link className=" text-zinc-300  text-xl font-bold hover:border-b-4 hover:border-orange-500" href="/skill">Skill</Link>
                       <Link className=" text-zinc-300  text-xl font-bold hover:border-b-4 hover:border-orange-500" href="/projects">Project</Link>
                       <Link className=" text-zinc-300  text-xl font-bold hover:border-b-4 hover:border-orange-500" href="/contact">Contact</Link>
                </div>
            </div>
        </div>
    )
}