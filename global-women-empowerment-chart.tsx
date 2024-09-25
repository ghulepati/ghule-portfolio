import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const data = [
  { region: 'Global Average', educationAccess: 74, workforceParticipation: 47, politicalRepresentation: 25 },
  { region: 'North America', educationAccess: 96, workforceParticipation: 56, politicalRepresentation: 33 },
  { region: 'Europe', educationAccess: 93, workforceParticipation: 51, politicalRepresentation: 30 },
  { region: 'Asia', educationAccess: 71, workforceParticipation: 44, politicalRepresentation: 20 },
  { region: 'Africa', educationAccess: 58, workforceParticipation: 41, politicalRepresentation: 24 },
];

const GlobalWomenEmpowermentChart = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto my-8">
      <CardHeader>
        <h2 className="text-2xl font-bold text-center">Global Women's Empowerment Indicators</h2>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="region" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="educationAccess" name="Education Access (%)" fill="#8884d8" />
            <Bar dataKey="workforceParticipation" name="Workforce Participation (%)" fill="#82ca9d" />
            <Bar dataKey="politicalRepresentation" name="Political Representation (%)" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-sm text-gray-500 mt-4">
          Note: This chart presents a simplified view of complex global data. 
          Individual experiences may vary significantly based on personal circumstances and local contexts.
        </p>
      </CardContent>
    </Card>
  );
};

export default GlobalWomenEmpowermentChart;
