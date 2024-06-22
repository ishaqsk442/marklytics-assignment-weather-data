import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';
import styled from 'styled-components';

// Container for the pie chart
const ChartContainer = styled.div`
  text-align: center;
`;

// Color palette for pie segments
const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#d0ed57'];

const data = [
  { name: 'New York', humidity: 70 },
  { name: 'Los Angeles', humidity: 65 },
  { name: 'Chicago', humidity: 72 },
  { name: 'Houston', humidity: 68 },
  { name: 'Phoenix', humidity: 60 },
];

const PieChartComponent = () => {
  return (
    <ChartContainer>
      <h2>Humidity Distribution</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie dataKey="humidity" data={data} cx="50%" cy="50%" outerRadius={60} label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip /> {/* Tooltip on hover */}
          <Legend align="center" layout="horizontal" verticalAlign="bottom" />
        </PieChart>
      </ResponsiveContainer>
     
    </ChartContainer>
  );
};



export default PieChartComponent;
