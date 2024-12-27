import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Traditional',
    'Development': 24.0,  // 3 days
    'Content Coordination': 16.0,  // 2 days
    'Writing': 8.0,  // 1 day
    'Process Strategy': 12.0,  // 1.5 days
  },
  {
    name: 'Template System',
    'Development': 8.0,  // 1 day initial setup
    'Content Coordination': 4.0,  // 0.5 day with templates
    'Writing': 11.0,  // ~1.4 days
    'Process Strategy': 15.0,  // ~1.9 days
  }
];

const TemplateEfficiencyChart = () => {
  const formatHours = (value) => `${value} hrs`;
  
  return (
    <div className="w-full h-96 p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Time Investment: Traditional vs Template Approach</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 40,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={formatHours} />
          <Tooltip 
            formatter={(value) => [`${value} hours`, 'Time']}
            labelFormatter={(label) => `Approach: ${label}`}
          />
          <Legend />
          <Bar dataKey="Development" fill="#E85021" />
          <Bar dataKey="Content Coordination" fill="#408A8F" />
          <Bar dataKey="Writing" fill="#1E2E46" />
          <Bar dataKey="Process Strategy" fill="#808080" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TemplateEfficiencyChart;