import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const UXMetricsTimeline = () => {
  const milestones = [
    {
      phase: 'Initial Release',
      completionRate: 45,
      userSatisfaction: 65
    },
    {
      phase: 'Dialogue Updates',
      completionRate: 58,
      userSatisfaction: 72
    },
    {
      phase: 'Difficulty Rebalance',
      completionRate: 75,
      userSatisfaction: 84
    },
    {
      phase: 'UI Enhancements',
      completionRate: 85,
      userSatisfaction: 88
    }
  ];

  return (
    <div className="w-full space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>UX Improvements Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={milestones}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="phase" />
                <YAxis yAxisId="left" domain={[0, 100]} />
                <YAxis yAxisId="right" orientation="right" domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="completionRate" 
                  stroke="#8884d8" 
                  name="Completion Rate %"
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="userSatisfaction" 
                  stroke="#82ca9d" 
                  name="User Satisfaction Score"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <Card className="p-4">
              <h3 className="font-bold mb-2">Key UX Improvements</h3>
              <ul className="space-y-2">
                <li>• Enhanced game dialogue and educational content</li>
                <li>• Rebalanced difficulty curve for better engagement</li>
                <li>• Improved visual design of game elements</li>
                <li>• 40% increase in overall completion rates</li>
              </ul>
            </Card>
            <Card className="p-4">
              <h3 className="font-bold mb-2">Implementation Strategy</h3>
              <ul className="space-y-2">
                <li>• User feedback analysis and implementation</li>
                <li>• Iterative content refinement</li>
                <li>• Cross-platform UX consistency</li>
                <li>• Continuous player experience monitoring</li>
              </ul>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UXMetricsTimeline;