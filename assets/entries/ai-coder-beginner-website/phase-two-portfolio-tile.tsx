import React, { useEffect, useRef } from 'react';

const PortfolioTile = ({ 
  title, 
  summary, 
  imageUrl, 
  tags, 
  link 
}) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const rect = imageRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const offset = scrollPosition * 0.4; // Adjust this value to control parallax speed
      
      // Only apply transform when element is in viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        imageRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image Container with Parallax */}
      <div className="relative h-96 overflow-hidden">
        <div 
          ref={imageRef}
          className="absolute h-120 w-full" 
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'translateY(0)',
            transition: 'transform 0.1s linear'
          }}
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 p-6 bg-white">
        <h3 className="mb-3 text-xl font-bold text-gray-900">
          {title}
        </h3>
        
        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-medium text-white rounded-full"
              style={{ backgroundColor: tag.color }}
            >
              {tag.name}
            </span>
          ))}
        </div>

        <p className="mb-4 text-gray-600">
          {summary}
        </p>

        {/* Link wrapper - entire card is clickable */}
        <a 
          href={link} 
          className="absolute inset-0 z-20"
          aria-label={`View ${title} project`}
        >
          <span className="sr-only">View project</span>
        </a>
      </div>
    </div>
  );
};

// Example usage component
const ExampleTile = () => {
  const sampleData = {
    title: "Astrofluenced Project",
    summary: "A comprehensive design system incorporating modern scrolling effects and dynamic content presentation.",
    imageUrl: "/api/placeholder/1200/800",
    tags: [
      { name: "UX Design", color: "#2563eb" },
      { name: "Frontend", color: "#7c3aed" }
    ],
    link: "/projects/astrofluenced"
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <PortfolioTile {...sampleData} />
    </div>
  );
};

export default ExampleTile;
