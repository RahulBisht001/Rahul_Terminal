import DirArrow from "./_components/DirArrow";
import Navbar from "./_components/Navbar";
import TodayDate from "./_components/TodayDate";
import Welcome from "./_components/Welcome";

export default function Home() {
    return (
        <>
            <main className="flex justify-center items-center h-screen font-Afacad">
                <section className="relative bg-cover bg-center w-[900px] h-[520px] rounded-lg overflow-hidden">
                    {/* Background Image Layer */}
                    <div
                        className="absolute top-0 left-0 w-full h-full rounded-lg opacity-25"
                        style={{
                            backgroundImage: "url('/assets/Ubuntu_bg.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>

                    {/* Content Layer */}
                    <div className="relative z-10">
                        {/* this is the top header and designed similar to macOS terminal */}
                        <Navbar />

                        <div className="overflow-y-auto h-[480px]">
                            <TodayDate />
                            <Welcome />
                            <div className="p-2 pt-0">
                                <DirArrow />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
