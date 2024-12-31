import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const AppsDashboard = () => {
  const appsData = [
    {
      name: 'PETA App',
      metrics: [
        {
          title: 'Total Downloads',
          value: '1M+',
          trend: '+20% MoM'
        },
        {
          title: 'User Actions',
          value: 'Multi-million',
          trend: 'Consistent Growth'
        },
        {
          title: 'App Rating',
          value: '4.8',
          trend: '1.5K Reviews'
        },
        {
          title: 'Conversion Rate',
          value: '+22%',
          trend: 'MoM Growth'
        }
      ]
    },
    {
      name: 'Animal Rights Stickers',
      metrics: [
        {
          title: 'Category Rank',
          value: '#198',
          trend: 'Animals & Nature'
        },
        {
          title: 'App Rating',
          value: '4.5',
          trend: 'Strong Reviews'
        }
      ]
    },
    {
      name: 'Bunny Free',
      metrics: [
        {
          title: 'Return Users',
          value: '+33.7%',
          trend: 'MoM Growth'
        },
        {
          title: 'Page Views',
          value: '+12%',
          trend: 'MoM Growth'
        }
      ]
    }
  ];

  return (
    <div className="w-full space-y-8">
      {appsData.map((app, index) => (
        <Card key={index} className="w-full">
          <CardHeader>
            <CardTitle className="text-xl font-bold">{app.name} Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {app.metrics.map((metric, mIndex) => (
                <div key={mIndex} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">{metric.title}</h3>
                  <p className="mt-2 text-3xl font-bold text-blue-600">{metric.value}</p>
                  <p className="mt-1 text-sm text-gray-600">{metric.trend}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AppsDashboard;