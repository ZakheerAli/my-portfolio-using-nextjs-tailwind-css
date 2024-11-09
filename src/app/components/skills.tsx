export default function Skills(){
    return(
        <div >
            <div className="flex items-center  flex-col h-full justify-center w-full px-20 py-11  bg-white" >
            <h1  className="text-7xl text-orange-500 font-extrabold">SKILLS</h1>
            <div className=" w-full h-full flex items-center px-16 py-16 gap-8 text-center">
                    <div className="w-1/3 flex items-center justify-center rounded-md bg-gray-700">
                        <div className="w-5/6 h-5/6  hover:w-11/12 hover:h-11/12 cursor-pointer bg-slate-500 bo">
                            <img src="/html.png" alt="HTML" />
                        </div>
                    </div>
                    <div className="w-1/3   flex items-center justify-center rounded-md bg-slate-200">
                        <div className="w-5/6 h-5/6  hover:w-11/12 hover:h-11/12 cursor-pointer bg-slate-200 bo">
                            <img src="/css-3.png" alt="CSS 3" /></div>
                    </div>
                    <div className="w-1/3   flex items-center justify-center rounded-md bg-yellow-200">
                        <div className="w-5/6 h-5/6  hover:w-11/12 hover:h-11/12 cursor-pointer bg-slate-100 ">
                            <img src="/js.png" alt="JAVASCRIPT" /></div>
                    </div>
                </div>
                <div className=" w-full flex items-center px-16 py-16 gap-8 text-center mt-24">
                <div className="w-1/3 flex items-center justify-center rounded-md bg-blue-400">
                        <div className="w-5/6 h-5/6  hover:w-11/12 hover:h-11/12 cursor-pointer bg-blue-400 bo">
                            <img src="/typescript.png" alt="TYPESCRIPT" />
                        </div>
                    </div>

                    <div className="w-1/3  flex items-center justify-center rounded-md bg-slate-100">
                    <div className="w-5/6 h-5/6  hover:w-11/12 hover:h-11/12 cursor-pointer bg-white pt-7">
                            <img src="/tail.png" alt="TAILWIND CSS" />
                        </div>
                    </div>
                    <div className="w-1/3 flex items-center justify-center rounded-md ">
                    <div className="w-5/6 h-5/6  hover:w-11/12 hover:h-11/12 cursor-pointer bg-white pt-14">
                            <img src="/nextjs-13.png" alt="NEXTJS" />
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}