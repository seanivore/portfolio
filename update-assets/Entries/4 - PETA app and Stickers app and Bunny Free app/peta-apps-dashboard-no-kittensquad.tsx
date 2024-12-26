import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AppPortfolio = () => {
  return (
    <div className="w-full space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>PETA Apps Portfolio Impact</CardTitle>
        </CardHeader>
        <CardContent>
          {/* App Impact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* PETA Main App */}
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">PETA App</h3>
              <div className="space-y-3">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-green-700">1M+</p>
                  <p className="text-sm text-green-600">Total Downloads</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-700">22%</p>
                  <p className="text-sm text-blue-600">MoM Conversion Increase</p>
                </div>
                <div className="mt-4">
                  <p className="font-medium">★ 4.8/5</p>
                  <p className="text-sm text-gray-600">1.5K Ratings</p>
                </div>
                <p className="text-sm mt-2">Multi-millions of actions taken through platform</p>
              </div>
            </Card>

            {/* Animal Rights Stickers */}
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">Animal Rights Stickers</h3>
              <div className="space-y-3">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-purple-700">#198</p>
                  <p className="text-sm text-purple-600">in Animals & Nature Category</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="font-medium">iMessage Integration</p>
                  <p className="text-sm text-indigo-600">Cross-platform engagement</p>
                </div>
                <div className="mt-4">
                  <p className="font-medium">★ 4.5/5</p>
                  <p className="text-sm text-gray-600">High User Satisfaction</p>
                </div>
              </div>
            </Card>

            {/* Bunny Free */}
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">Bunny Free</h3>
              <div className="space-y-3">
                <div className="bg-rose-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-rose-700">33.7%</p>
                  <p className="text-sm text-rose-600">MoM Return User Increase</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-amber-700">12%</p>
                  <p className="text-sm text-amber-600">Page View Increase</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-lg font-bold text-teal-700">4,000+</p>
                  <p className="text-sm text-teal-600">Companies in Database</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Role Impact */}
          <Card className="mt-8 p-6">
            <h3 className="font-bold text-lg mb-4">Cross-App Strategic Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700">Project Leadership</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Led remote team coordination across marketing & development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Managed app store optimization & content strategy
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Drove conversion optimization & user retention initiatives
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700">Content & Quality</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Oversaw content strategy and creative direction
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Managed stakeholder communication & compliance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Led user experience improvements & feature updates
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppPortfolio;