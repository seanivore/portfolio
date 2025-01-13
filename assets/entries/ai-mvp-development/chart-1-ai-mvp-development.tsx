import React from 'react';

const ProjectAnalysis = () => {
  const projects = [
    { name: 'SERP/SEO Automation', complexity: 'Easy', stars: 1, timeline: '1-2 months', type: 'tech' },
    { name: 'Etsy SERP Automation Tool', complexity: 'Easy', stars: 1, timeline: '1-2 months', type: 'tech' },
    { name: 'On-Task AI Task Management Helper', complexity: 'Easy', stars: 1, timeline: '1-2 months', type: 'tech' },
    { name: 'Personal Shopper SaaS', complexity: 'Moderate', stars: 2, timeline: '2-4 months', type: 'strategy' },
    { name: 'Astrofluenced Weekly & Podcast', complexity: 'Moderate', stars: 2, timeline: '2-4 months', type: 'strategy' },
    { name: 'Meditation Buddy', complexity: 'Moderate', stars: 2, timeline: '2-4 months', type: 'strategy' },
    { name: 'Memoir Assistant/Journal Buddy', complexity: 'Moderate', stars: 2, timeline: '2-4 months', type: 'strategy' },
    { name: 'Photography Buddy', complexity: 'Moderate', stars: 2, timeline: '2-4 months', type: 'strategy' },
    { name: 'Poetry Pal', complexity: 'Moderate', stars: 2, timeline: '2-4 months', type: 'strategy' },
    { name: 'Short Story Muse', complexity: 'Moderate', stars: 2, timeline: '2-4 months', type: 'strategy' },
    { name: 'Friendly Guide', complexity: 'Moderate', stars: 2, timeline: '2-4 months', type: 'strategy' },
    { name: 'AI Check-in & Feedback Guide', complexity: 'Complex', stars: 3, timeline: '4+ months', type: 'ai' },
    { name: 'Creative Teacher/AI Art Classes', complexity: 'Complex', stars: 3, timeline: '4+ months', type: 'ai' },
    { name: 'Meeting The One', complexity: 'Complex', stars: 3, timeline: '4+ months', type: 'ai' },
    { name: 'The Timid Chef', complexity: 'Complex', stars: 3, timeline: '4+ months', type: 'ai' }
  ];

  const getTypeColor = (type) => {
    switch(type) {
      case 'tech': return 'bg-[#408A8F]';
      case 'strategy': return 'bg-[#E85021]';
      case 'ai': return 'bg-[#7a8b69]';
      default: return 'bg-gray-400';
    }
  };

  const getStars = (count) => '⭐'.repeat(count);

  return (
    <div className="space-y-8">
      {/* Chart container div is handled by charts.js */}
      <div data-chart="https://raw.githubusercontent.com/seanivore/portfolio/refs/heads/portfolio-seanivore/assets/entries/ai-mvp-development/chart-1-ai-mvp-development.tsx"
           data-type="bar"
           data-title="MVP Project Complexity Analysis"></div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-2 text-left">Project</th>
              <th className="px-4 py-2 text-left">Complexity</th>
              <th className="px-4 py-2 text-left">Timeline</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${getTypeColor(project.type)}`}></div>
                    {project.name}
                  </div>
                </td>
                <td className="px-4 py-2">
                  <span className="inline-flex items-center">
                    {getStars(project.stars)}
                    <span className="ml-2 text-gray-600">{project.complexity}</span>
                  </span>
                </td>
                <td className="px-4 py-2 text-gray-600">{project.timeline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectAnalysis;