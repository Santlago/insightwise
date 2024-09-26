import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function About() {
    return (
        <>
            <Header />
            <main>
                <div className="min-h-screen">
                    <h1 className="text-[#7913EE] font-semibold text-[2rem] text-center mt-[6rem] mb-[4rem]">About Us</h1>
                    <div className="flex justify-center pb-[3rem]">
                        <iframe
                            width="978"
                            height="553"
                            src="https://www.youtube.com/embed/CFcAKTyG8kE"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}