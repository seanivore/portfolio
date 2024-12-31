import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FBCampaignMetrics = () => {
  // Sample data - we can update with actual metrics
  const campaignData = [
    {
      name: 'Week 1',
      reach: 12000,
      engagement: 240,
      costPerEngagement: 0.003
    },
    {
      name: 'Week 2',
      reach: 15000,
      engagement: 350,
      costPerEngagement: 0.003
    },
    {
      name: 'Week 3',
      reach: 18000,
      engagement: 420,
      costPerEngagement: 0.003
    },
    {
      name: 'Week 4',
      reach: 22000,
      engagement: 510,
      costPerEngagement: 0.003
    }
  ];

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Campaign Performance Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={campaignData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#82ca9d" />
              <YAxis yAxisId="right" orientation="right" stroke="#8884d8" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="reach" fill="#82ca9d" name="Total Reach" />
              <Bar yAxisId="right" dataKey="engagement" fill="#8884d8" name="Engagements" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-lg font-semibold text-blue-900">Campaign Highlights:</p>
          <ul className="mt-2 space-y-2">
            <li>• Average Cost per Engagement: $0.003</li>
            <li>• Consistent Growth in Reach</li>
            <li>• Engagement Rate Above Industry Average</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default FBCampaignMetrics;