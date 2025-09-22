import Image from "next/image";

export default function Home() {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <h1>Cloud Computing Ex. 2</h1>
                <Image
                    aria-hidden
                    src="https://statcdn.fandango.com/MPX/image/NBCU_Fandango/79/250/thumb_AC3E8332-BDAE-4BCC-88E6-7885FF452732.jpg"
                    alt="gosling"
                    width={960}
                    height={540}
                />
                <p>Cloud computing is OSSM!</p>
            </main>
        </div>
    );
}
