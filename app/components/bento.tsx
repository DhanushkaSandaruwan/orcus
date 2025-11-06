export default function Bento() {
    return (
        <div id="platform"
            className="flex pt-[5px] px-[20px] lg:px-[50px] pb-20 flex-col items-center gap-10 min-w-screen min-h-screen overflow-auto">
            {/* Heading */}
            <p className="text-[#FFF] font-inter text-[56px] font-medium leading-[0.67857em] text-center tracking-[-0.0004em]">
                PLATFORM
            </p>
            <p className="text-[rgba(255,255,255,0.70)] font-montserrat text-xl font-medium leading-[1.25em] w-fit">
                Your AI companion. Anticipates exposure, shuts down risk.
            </p>

            {/* --- First Row --- */}
            <div className="flex items-start justify-center gap-5 w-full max-w-[1280px] flex-wrap">
                {[
                    {
                        title: 'ATTACK SURFACE MAP',
                        text: 'Sees your entire terrain, predicts movement, reveals exposure in real time.',
                        img: '/Group10000083061024x744png.png',
                    },
                    {
                        title: 'REPLAY & DISRUPT',
                        text: 'Recreates live attack behavior, learns from outcomes, cuts disruption time to seconds.',
                        img: '/Group10000083071024x713png.png',
                    },
                    {
                        title: 'ZERO-DAY DISCOVERY',
                        text: 'Uncovers the unknown, reproduces safely, prioritizes what matters.',
                        img: '/Group10000083161024x713png.png',
                    },
                    {
                        title: 'AUTONOMOUS REMEDIATION',
                        text: 'Proposes verified fixes, applies with control, shows before and after certainty.',
                        img: '/Group10000083601024x720png.png',
                    },
                    {
                        title: 'THREAT INTELLIGENCE',
                        text: 'Connects leaks, signals, and intent into a single evolving view that explains every move.',
                        img: '/Group10000083671024x714png.png',
                    },
                    {
                        title: 'IDENTITY CONTROL',
                        text: 'Enforces who can act, where, and when, continuously.',
                        img: '/Group10000083701024x713png.png',
                    },
                ].map((card, i) => (
                    <div
                        key={i}
                        className="flex flex-col justify-between items-start p-[31px] rounded-[20px]
                       border border-[rgba(255,255,255,0.20)] bg-gradient-to-b from-[#2D0A12] to-[#460019]
                       w-full max-w-[400px] h-[450px]"
                    >
                        <div className="flex flex-col items-start gap-[19px]">
                            <p className="text-[#FFF] font-montserrat text-xl font-semibold leading-[1.2em]">
                                {card.title}
                            </p>
                            <p className="text-[rgba(255,255,255,0.70)] font-montserrat text-md font-medium leading-[1.435em]">
                                {card.text}
                            </p>
                        </div>
                        <img
                            src={card.img}
                            className="w-full h-[220px] object-contain"
                            alt={card.title}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
