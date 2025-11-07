"use client";
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

const faqData = [
    {
        question: "What does Outcome AI actually do?",
        answer: [
            "It finds exposure, fixes it, and gives you proof.",
            "Technical: Evidence bundle includes before and after, change log, approver, retest output, and a timestamped hash."
        ]
    },
    {
        question: "Do I need any technical setup?",
        answer: [
            "Zero setup to start. Connect and go.",
            "Technical: Guided connection to identity, cloud, and EDR. Read-only baseline with least-privilege scopes."
        ]
    },
    {
        question: "Does it run by itself?",
        answer: [
            "Yes. It handles the work and you stay in control.",
            "Technical: Policy automation with approvals, rollback, and post-fix retest."
        ]
    },
    {
        question: "How do I get proof for the board?",
        answer: [
            "One click and you get a clean proof bundle.",
            "Technical: Signed artifacts with screenshots and logs, change tickets and pull requests, retest, and a SHA-256 manifest."
        ]
    },
    {
        question: "Will it work with Microsoft/AWS/Google?",
        answer: [
            "Yes. It works with your stack.",
            "Technical: Native integrations for Azure and Microsoft 365, AWS, and GCP plus common SIEM, EDR, and ITSM."
        ]
    },
    {
        question: "Can we roll back any change if needed?",
        answer: [
            "Yes. Everything is reversible.",
            "Technical: Transactional changes with one-click rollback, full audit trail, and versioned configs."
        ]
    }
];

export default function MiniFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleIndex = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div
            className="flex flex-col py-19 px-[20px] lg:px-[50px] items-center gap-[41px] border border-[rgba(255,255,255,0.15)] bg-gradient-to-br from-[#FE2C5E] to-[#020103] min-w-screen overflow-auto">
            <button className="cursor-pointer text-nowrap flex flex-col justify-center items-center gap-[31px] w-fit">
                <p className="flex flex-col justify-center text-[#FFF] font-inter text-[56px] font-medium leading-[1.16071em] w-full max-w-[289px] h-12 text-center tracking-[-0.015em]">
                    FAQs
                </p>
            </button>

            {/* FAQ Items */}
            <div className="flex max-w-[1280px] flex-col items-start gap-5 w-full">
                {faqData.map((item, i) => (
                    <div
                        key={i}
                        className="flex flex-col max-w-[1220px] w-full mx-auto border border-[rgba(255,255,255,0.15)] rounded-[20px] overflow-hidden"
                    >
                        {/* Question */}
                        <button
                            className="flex justify-between items-center w-full p-[31px] bg-[#000] cursor-pointer hover:bg-[rgba(255,255,255,0.05)] transition-colors duration-200"
                            onClick={() => toggleIndex(i)}
                        >
                            <p className="text-[#FFF] font-montserrat text-[22px] font-semibold leading-[1.36em]">
                                {item.question}
                            </p>
                            <svg
                                width="23"
                                height="29"
                                viewBox="0 0 23 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={`w-[23px] h-[29px] transition-transform duration-300 ${
                                    openIndex === i ? "rotate-90" : "rotate-0"
                                }`}
                            >
                                <path
                                    d="M8.91406 8.59375C9.38802 8.08333 9.88021 8.08333 10.3906 8.59375L15.5859 13.7891C16.0599 14.263 16.0781 14.7552 15.6406 15.2656L10.5 20.4062C10.2812 20.625 10.026 20.7344 9.73438 20.7344C9.47917 20.7344 9.24219 20.625 9.02344 20.4062C8.54948 19.8958 8.54948 19.4036 9.02344 18.9297L13.3984 14.5L8.91406 10.0703C8.40365 9.59635 8.40365 9.10417 8.91406 8.59375Z"
                                    fill="white"
                                />
                            </svg>
                        </button>

                        {/* Answer with animation */}
                        <AnimatePresence initial={false}>
                            {openIndex === i && (
                                <motion.div
                                    key="content"
                                    initial={{opacity: 0, height: 0}}
                                    animate={{opacity: 1, height: "auto"}}
                                    exit={{opacity: 0, height: 0}}
                                    transition={{duration: 0.3}}
                                    className="flex flex-col gap-1 px-[31px] py-2 bg-[#000] overflow-hidden"
                                >
                                    <p className="text-[#FFF] font-montserrat text-[16px]">
                                        {item.answer[0]}
                                    </p>
                                    <p className="text-gray-400 font-montserrat text-[14px]">
                                        {item.answer[1]}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            {/* CTA link */}
            <div className="mt-4">
                <a href="#"
                   className="hidden m cursor-pointer lg:flex py-[5px] px-[15px] justify-center items-center gap-2 rounded-lg bg-[#FFF]
                    w-[97px] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(254,44,94,0.5)]">
                    <span
                        className="text-[#000] font-inter text-[15px] font-medium leading-[2.06667em] w-fit tracking-[-0.0101em]">See all</span>
                </a>
            </div>
        </div>
    );
}
