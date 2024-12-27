import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ProjectTimeline = () => {
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
    <div className="w-full space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Kitten Squad Cross-Platform Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={milestones}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="phase" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="downloads" 
                  stroke="#8884d8" 
                  name="Total Downloads"
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="engagement" 
                  stroke="#82ca9d" 
                  name="Engagement Score"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <Card className="p-4">
              <h3 className="font-bold mb-2">Key Achievements</h3>
              <ul className="space-y-2">
                <li>• Cross-platform expansion to 4 major platforms</li>
                <li>• 20% growth in download rate post-campaign</li>
                <li>• 1M+ total downloads achieved</li>
                <li>• Maintained 3.4+ App Store rating</li>
              </ul>
            </Card>
            <Card className="p-4">
              <h3 className="font-bold mb-2">Project Management</h3>
              <ul className="space-y-2">
                <li>• Development team liaison</li>
                <li>• Content strategy & legal review</li>
                <li>• Multi-platform launch coordination</li>
                <li>• Ongoing maintenance & updates</li>
              </ul>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectTimeline;