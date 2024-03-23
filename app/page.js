import DirArrow from "./_components/DirArrow";
import Navbar from "./_components/Navbar";
import TodayDate from "./_components/TodayDate";
import Welcome from "./_components/Welcome";

export default function Home() {
    return (
        <>
            <main className="flex justify-center items-center h-screen font-Lexend">
                <section
                    className="font-Lexend bg-cover bg-center w-[900px] h-[520px] rounded-lg border border-white"
                    // style={{
                    //     backgroundImage: "url('/assets/Ubuntu_bg.jpg')",
                    //     opacity: "01", // Adjust the opacity value as needed (0 to 1)
                    // }}
                >
                    {/* this is the top header and designed similar to mac os terminal */}
                    <Navbar />

                    <div className="overflow-y-auto h-[480px]">
                        <TodayDate />
                        <div className="p-2 pt-0">
                            <DirArrow />
                            {/* <Welcome /> */}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
