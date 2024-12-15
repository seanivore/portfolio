import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ProjectMetrics = () => {
  const milestones = [
    {
      phase: 'PlayStation Launch',
      downloads: 200000,
      engagement: 45
    },
    {
      phase: 'iOS Release',
      downloads: 400000,
      engagement: 65
    },
    {
      phase: 'Android Launch',
      downloads: 700000,
      engagement: 78
    },
    {
      phase: 'Windows Release',
      downloads: 1000000,
      engagement: 85
    }
  ];

  return (
    <div className="w-full space-y-8 p-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Platform Growth & Engagement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={milestones}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="phase" />
                <YAxis 
                  yAxisId="left"
                  tickFormatter={(value) => `${value / 1000}k`}
                />
                <YAxis 
                  yAxisId="right" 
                  orientation="right"
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip formatter={(value, name) => {
                  if (name === "Total Downloads") return `${value.toLocaleString()}`;
                  return `${value}%`;
                }}/>
                <Legend />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="downloads" 
                  stroke="#8884d8" 
                  name="Total Downloads"
                  strokeWidth={2}
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="engagement" 
                  stroke="#82ca9d" 
                  name="Engagement Score"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold mb-2 text-lg">Key Achievements</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">•</span>
                  Cross-platform expansion to 4 major platforms
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">•</span>
                  20% growth in download rate post-campaign
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">•</span>
                  1M+ total downloads achieved
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">•</span>
                  Maintained 3.4+ App Store rating
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold mb-2 text-lg">Project Management</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Development team liaison
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Content strategy & legal review
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Multi-platform launch coordination
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Ongoing maintenance & updates
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectMetrics;