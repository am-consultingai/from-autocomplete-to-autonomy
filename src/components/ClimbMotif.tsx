interface ClimbMotifProps {
  summitGlow?: boolean;
}

export default function ClimbMotif({ summitGlow = false }: ClimbMotifProps) {
  if (summitGlow) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Soft radial gold/amber glow focused on the high-right (the summit) */}
        <div 
          className="absolute right-0 top-0 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full filter blur-[120px] opacity-25 translate-x-1/4 -translate-y-1/4"
          style={{
            background: "radial-gradient(circle, #2F63FF 0%, rgba(47, 99, 255, 0.1) 60%, transparent 100%)",
          }}
        />
        
        {/* Glowing abstract line climbing up-and-to-the-right */}
        <svg 
          viewBox="0 0 1000 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 right-0 w-full h-[85%] opacity-35"
          preserveAspectRatio="none"
        >
          <g filter="url(#blueGlow)">
            {/* Ground grid fading off */}
            <path d="M 0 540 Q 300 500, 600 350 T 1000 150" stroke="#2F63FF" strokeWidth="1.5" strokeDasharray="3 5" />
            
            {/* Distinct climb ascending paths */}
            <path d="M 0 580 Q 250 520, 500 360 T 1000 80" stroke="#2F63FF" strokeWidth="2.5" />
            <path d="M 0 620 Q 200 550, 450 380 T 1000 120" stroke="#2F63FF" strokeWidth="1" opacity="0.6" />
            
            {/* Grid steps or rungs ascending up to the right */}
            <line x1="200" y1="500" x2="220" y2="460" stroke="#2F63FF" strokeWidth="1.5" />
            <line x1="400" y1="410" x2="420" y2="370" stroke="#2F63FF" strokeWidth="1.5" />
            <line x1="600" y1="310" x2="620" y2="270" stroke="#2F63FF" strokeWidth="1.5" />
            <line x1="800" y1="200" x2="820" y2="160" stroke="#2F63FF" strokeWidth="1.5" />
          </g>
          
          {/* Spark at the highest peak */}
          <circle cx="1000" cy="80" r="4" fill="#FFFFFF" className="animate-ping" />
          <circle cx="1000" cy="80" r="3" fill="#2F63FF" />

          <defs>
            <filter id="blueGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
        </svg>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Light version: Ink subtle ascending lines */}
      <svg 
        viewBox="0 0 1000 600" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 right-0 w-full h-[70%] opacity-[0.06] sm:opacity-[0.08]"
        preserveAspectRatio="none"
      >
        {/* Ascending hills/ladder vector */}
        <path d="M 0 480 Q 300 420, 600 290 T 1000 50" stroke="#0B1E3A" strokeWidth="1.5" />
        <path d="M 0 520 Q 250 450, 550 320 T 1000 90" stroke="#0B1E3A" strokeWidth="2" />
        <path d="M 0 560 Q 200 490, 500 350 T 1000 130" stroke="#0B1E3A" strokeWidth="0.8" strokeDasharray="4 4" />

        {/* Structural rungs guiding the view */}
        <line x1="150" y1="450" x2="160" y2="420" stroke="#0B1E3A" strokeWidth="1" />
        <line x1="350" y1="365" x2="360" y2="335" stroke="#0B1E3A" strokeWidth="1" />
        <line x1="550" y1="280" x2="560" y2="250" stroke="#0B1E3A" strokeWidth="1" />
        <line x1="750" y1="185" x2="760" y2="155" stroke="#0B1E3A" strokeWidth="1" />
        <line x1="950" y1="80" x2="960" y2="50" stroke="#0B1E3A" strokeWidth="1" />
      </svg>
    </div>
  );
}
