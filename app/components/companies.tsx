export default function Companies() {
  return (
    <div className="w-screen py-6 overflow-hidden">
      <div className="flex items-center overflow-hidden">
        {/* Scrolling container */}
        <div className="flex animate-scroll whitespace-nowrap select-none">
          {[
            '/next.svg',
            '/next.svg',
            '/next.svg',
            '/next.svg',
            '/next.svg',
            '/next.svg',
            '/next.svg',
            '/next.svg',
          ].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`company-${index}`}
              className="h-16 mx-8 inline-block pointer-events-none"
            />
          ))}

          {/* Duplicate for seamless looping */}
          {[
            '/next.svg',
            '/next.svg',
            '/next.svg',
            '/next.svg',
            '/next.svg',
            '/next.svg',
            '/next.svg',
            '/next.svg',
          ].map((logo, index) => (
            <img
              key={`dup-${index}`}
              src={logo}
              alt={`company-dup-${index}`}
              className="h-16 mx-8 inline-block pointer-events-none"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
