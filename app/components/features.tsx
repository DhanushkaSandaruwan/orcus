export default function Features() {
  return (
    <div className="flex py-19 px-[50px] flex-col items-center gap-[41px] border border-[rgba(255,255,255,0.15)] bg-gradient-to-br from-[#FE2C5E] to-[#020103] min-w-screen overflow-auto">
      <button className="cursor-pointer text-nowrap flex flex-col justify-center items-center gap-[31px] w-fit">
        <p className="flex flex-col justify-center text-[#FFF] font-inter text-[56px] font-medium leading-[1.16071em] w-[289px] h-12 text-center tracking-[-0.015em]">
          FAQs
        </p>
      </button>

      {/* FAQ Items */}
      <div className="flex max-w-[1280px] flex-col items-start gap-5 w-full">
        {[
          'What does Outcome AI actually do?',
          'Do I need any technical setup?',
          'Does it run by itself?',
          'How do I get proof for the board?',
          'Will it work with Microsoft/AWS/Google?',
          'Can we roll back any change if needed?',
        ].map((question, i) => (
          <div
            key={i}
            className="flex max-w-[1220px] p-[31px] justify-between items-center rounded-[20px]
                       border border-[rgba(255,255,255,0.15)] bg-[#000] w-full mx-auto"
          >
            <p className="text-[#FFF] font-montserrat text-[22px] font-semibold leading-[1.36em]">
              {question}
            </p>

            <svg
              width="23"
              height="29"
              viewBox="0 0 23 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[23px] h-[29px]"
            >
              <path
                d="M8.91406 8.59375C9.38802 8.08333 9.88021 8.08333 10.3906 8.59375L15.5859 13.7891C16.0599 14.263 16.0781 14.7552 15.6406 15.2656L10.5 20.4062C10.2812 20.625 10.026 20.7344 9.73438 20.7344C9.47917 20.7344 9.24219 20.625 9.02344 20.4062C8.54948 19.8958 8.54948 19.4036 9.02344 18.9297L13.3984 14.5L8.91406 10.0703C8.40365 9.59635 8.40365 9.10417 8.91406 8.59375Z"
                fill="white"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
