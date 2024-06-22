import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#cccccc" /> {/* Adds a grid to the chart */}
        <XAxis dataKey="date" stroke="#333" /> {/* X-axis representing dates */}
        <YAxis stroke="#333" /> {/* Y-axis for temperature values */}
        <Tooltip /> {/* Tooltip on hover */}
        <Legend /> {/* Chart legend */}
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" /> {/* Line for temperature data */}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
