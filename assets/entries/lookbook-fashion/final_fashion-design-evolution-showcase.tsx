import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FashionShowcase = () => {
  const [activeDesign, setActiveDesign] = useState(0);
  
  // Placeholder data - replace with actual design evolution images
  const designs = [
    {
      stage: "Initial Concept",
      description: "Firefly exploration: Multiple variations testing different styles and silhouettes",
      imageUrl: "/api/placeholder/600/400"
    },
    {
      stage: "Refinement",
      description: "Using Generative Fill to adjust details, like traditional fashion sketching",
      imageUrl: "/api/placeholder/600/400"
    },
    {
      stage: "Final Design",
      description: "Polished look aligned with character narrative",
      imageUrl: "/api/placeholder/600/400"
    }
  ];

  const nextDesign = () => {
    setActiveDesign((prev) => (prev + 1) % designs.length);
  };

  const prevDesign = () => {
    setActiveDesign((prev) => (prev - 1 + designs.length) % designs.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card className="relative overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={prevDesign}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">{designs[activeDesign].stage}</h3>
              <p className="text-gray-600">{designs[activeDesign].description}</p>
            </div>
            <button 
              onClick={nextDesign}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <div className="relative h-96 w-full">
            <img
              src={designs[activeDesign].imageUrl}
              alt={designs[activeDesign].stage}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FashionShowcase;
