import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    phase: 'Phase 1\nStart',
    weeklyBlogs: 89,
    weeklyPromos: 180,
    automationLevel: 40,
  },
  {
    phase: 'Phase 1\nOptimized',
    weeklyBlogs: 89,
    weeklyPromos: 220,
    automationLevel: 65,
  },
  {
    phase: 'Phase 2\nStart',
    weeklyBlogs: 89,
    weeklyPromos: 280,
    automationLevel: 75,
    videoContent: 15,
  },
  {
    phase: 'Phase 2\nOptimized',
    weeklyBlogs: 89,
    weeklyPromos: 310,
    automationLevel: 85,
    videoContent: 45,
  },
  {
    phase: 'Phase 3\nStart',
    weeklyBlogs: 89,
    weeklyPromos: 350,
    automationLevel: 90,
    videoContent: 60,
    podcastContent: 10,
  },
  {
    phase: 'Phase 3\nPeak',
    weeklyBlogs: 89,
    weeklyPromos: 400,
    automationLevel: 95,
    videoContent: 75,
    podcastContent: 40,
  },
];

const ScalingMetrics = () => {
  return (
    <Card className="w-full bg-white p-6">
      <CardContent className="min-h-[32rem]"> {/* Using min-h instead of h */}
          <ResponsiveContainer width="100%" height={600}>
            <LineChart 
              data={data} 
              margin={{ top: 5, right: 30, left: 20, bottom: 100 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis 
                dataKey="phase" 
                angle={-45}
                textAnchor="end"
                height={80}
                interval={0}
              />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend 
                verticalAlign="bottom" 
                height={80}
                wrapperStyle={{ 
                  paddingTop: "64px",  // Increased to 4rem (64px)
                  marginBottom: "20px"
                }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="weeklyBlogs"
                name="Weekly Blogs"
                stroke="#1E2E46"
                strokeWidth={2}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="weeklyPromos"
                name="Weekly Promos"
                stroke="#54b0af"
                strokeWidth={2}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="automationLevel"
                name="Automation Level %"
                stroke="#7a8b69"
                strokeWidth={2}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="videoContent"
                name="Video Content"
                stroke="#E85021"
                strokeWidth={2}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="podcastContent"
                name="Podcast Content"
                stroke="#408A8F"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ScalingMetrics;