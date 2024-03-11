import Image from "next/image";

export default function Home() {
    return (
        <>
            <main className="flex justify-center items-center h-screen font-Lexend">
                <section
                    className="font-Lexend bg-cover bg-center w-[900px] h-[520px] rounded-lg"
                    style={{backgroundImage: "url('/assets/Ubuntu_bg.jpg')"}}
                >
                    <header className="flex bg-[#eae8e8] h-[34px] rounded-t-lg border-b border-b-[#323131] shadow-xl">
                        <div className="flex items-center ml-2 space-x-2">
                            <div className="w-4 h-4 rounded-full bg-red-500"></div>
                            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                            <div className="w-4 h-4 rounded-full bg-green-500"></div>
                        </div>
                        <h1 className="flex-1 text-xs text-gray-800 flex items-center justify-center">
                            🏠 RahulB/terminal-portfolio
                        </h1>
                    </header>

                    {/* Content inside the centered div, if any */}
                </section>
            </main>
        </>
    );
}
