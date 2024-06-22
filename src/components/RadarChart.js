import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

// Container for the radar chart
const ChartContainer = styled.div`
  text-align: center;
`;

// Color palette for radar chart
const colors = ['#8884d8'];

const RadarChartComponent = ({ data }) => {
  return (
    <ChartContainer>
      <h2>Humidity Trends</h2>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart outerRadius={150} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="date" />
          <PolarRadiusAxis angle={30} domain={[0, 'auto']} />
          <Radar name="Humidity" dataKey="humidity" stroke={colors[0]} fill={colors[0]} fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
      <ColorLegend>
        {colors.map((color, index) => (
          <ColorIndicator key={`indicator-${index}`} color={color}>
            Humidity {/* Replace with actual label from data if available */}
          </ColorIndicator>
        ))}
      </ColorLegend>
    </ChartContainer>
  );
};

// Styled components for color legend
const ColorLegend = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const ColorIndicator = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;

  &:before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: ${props => props.color};
    margin-right: 5px;
    border-radius: 50%;
  }
`;

export default RadarChartComponent;
