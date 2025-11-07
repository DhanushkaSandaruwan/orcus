export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-0 pb-16 flex flex-col items-center gap-10 relative px-5 sm:px-10 mt-30">
      {/* Top Image Decoration */}
      <div className="relative w-24 h-36">
        <img
          src="/Group-1000008376.svg.png"
          alt="Top Decoration"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full object-contain"
        />
      </div>

      {/* LinkedIn Icon */}
      <div className="flex items-center justify-center">
        <a
          href="https://www.linkedin.com/company/0rcus/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_122_4893)">
              <path
                d="M18.335 18.339H15.67V14.162C15.67 13.166 15.65 11.884 14.28 11.884C12.891 11.884 12.679 12.968 12.679 14.089V18.339H10.013V9.75H12.573V10.92H12.608C12.966 10.246 13.836 9.533 15.136 9.533C17.836 9.533 18.336 11.311 18.336 13.624V18.339H18.335ZM7.003 8.575C6.79956 8.57526 6.59806 8.53537 6.41006 8.45761C6.22207 8.37984 6.05127 8.26574 5.90746 8.12184C5.76365 7.97793 5.64965 7.80706 5.57201 7.61901C5.49437 7.43097 5.4546 7.22944 5.455 7.026C5.4552 6.71983 5.54618 6.4206 5.71644 6.16615C5.8867 5.91169 6.12859 5.71343 6.41153 5.59645C6.69447 5.47947 7.00574 5.44902 7.30598 5.50894C7.60622 5.56886 7.88196 5.71648 8.09831 5.93311C8.31466 6.14974 8.46191 6.42566 8.52145 6.72598C8.58099 7.0263 8.55013 7.33753 8.43278 7.62032C8.31543 7.9031 8.11687 8.14474 7.86219 8.31467C7.60751 8.4846 7.30817 8.5752 7.002 8.575H7.003ZM8.339 18.339H5.666V9.75H8.34V18.339H8.339ZM19.67 3H4.329C3.593 3 3 3.58 3 4.297V19.703C3 20.42 3.594 21 4.328 21H19.666C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3H19.669H19.67Z"
                fill="var(--Labels---Vibrant-Tertiary, #BFBFBF)"
              />
            </g>
            <defs>
              <clipPath id="clip0_122_4893">
                <rect width={24} height={24} fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="text-base font-medium font-['Montserrat']">
          access@0rcus.com
        </div>
        <div className="text-base font-normal font-['Montserrat']">
          © 2025 0rcus Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
