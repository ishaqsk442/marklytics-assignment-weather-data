import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#cccccc" /> {/* Adds a grid to the chart */}
        <XAxis dataKey="date" stroke="#333" /> {/* X-axis representing dates */}
        <YAxis stroke="#333" /> {/* Y-axis for precipitation values */}
        <Tooltip /> {/* Tooltip on hover */}
        <Legend /> {/* Chart legend */}
        <Bar dataKey="precipitation" fill="#82ca9d" /> {/* Bar for precipitation data */}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
