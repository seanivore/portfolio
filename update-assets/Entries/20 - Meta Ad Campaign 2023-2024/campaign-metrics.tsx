import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Reels Views',
    impressions: 29822,
    engagement: 13819,
    cpm: 1.27,
    costPerEngagement: 0.003
  },
  {
    name: 'Page Growth',
    impressions: 644,
    engagement: 66,
    cpm: 19.98,
    costPerEngagement: 0.31
  },
  {
    name: 'Shopping Ads',
    impressions: 1968,
    engagement: 10,
    cpm: 9.03,
    costPerEngagement: 1.778
  }
];

const campaignHighlights = [
  {
    metric: "Total Impressions",
    value: "33,472"
  },
  {
    metric: "Overall ROI",
    value: "479.44%"
  },
  {
    metric: "Average CPM",
    value: "$3.58"
  },
  {
    metric: "Cost per Engagement",
    value: "$0.009"
  }
];

const MetricsDashboard = () => {
  return (
    <div className="w-full space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>August 2024 Campaign Performance</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {campaignHighlights.map((highlight) => (
              <Card key={highlight.metric} className="p-4">
                <h3 className="text-sm font-semibold text-gray-600">{highlight.metric}</h3>
                <p className="text-2xl font-bold mt-2">{highlight.value}</p>
              </Card>
            ))}
          </div>
          
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar name="Impressions" dataKey="impressions" fill="#8884d8" />
                <Bar name="Engagement" dataKey="engagement" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {data.map((campaign) => (
              <Card key={campaign.name} className="p-4">
                <h3 className="font-bold mb-2">{campaign.name}</h3>
                <div className="space-y-2">
                  <p>CPM: ${campaign.cpm.toFixed(2)}</p>
                  <p>Cost per Engagement: ${campaign.costPerEngagement.toFixed(3)}</p>
                  <p>Total Engagement: {campaign.engagement}</p>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MetricsDashboard;