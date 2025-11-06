export default function Companies() {
  return (
    <div className="w-screen py-6 overflow-hidden">
      <div className="flex items-center overflow-hidden">
        {/* Scrolling container */}
        <div className="flex animate-scroll whitespace-nowrap select-none">
          {[
            '/companies/Clip path group.png',
            '/companies/CNN_Business_logo-1.svg fill.png',
            '/companies/NASDAQ_Logo-1.svg fill.png',
            '/companies/The_Seattle_Times_logo-1.svg.png',
            '/companies/U.S._News__World_Report_logo-1.svg fill.png',
            '/companies/USA_Today_2020-01-29-1.svg fill.png',
            '/companies/Yahoo_Finance_logo-1.svg.png',
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
            '/companies/Clip path group.png',
            '/companies/CNN_Business_logo-1.svg fill.png',
            '/companies/NASDAQ_Logo-1.svg fill.png',
            '/companies/The_Seattle_Times_logo-1.svg.png',
            '/companies/U.S._News__World_Report_logo-1.svg fill.png',
            '/companies/USA_Today_2020-01-29-1.svg fill.png',
            '/companies/Yahoo_Finance_logo-1.svg.png',
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
