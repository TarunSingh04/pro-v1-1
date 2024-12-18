import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer, // Import ResponsiveContainer
} from "recharts";

const data = [
  {
    labelName: "Overall all",
    previous: 50,
    current: 80,
    amt: 2400,
  },
  {
    labelName: "E-score",
    previous: 60,
    current: 90,
    amt: 2210,
  },
  {
    labelName: "S-score",
    previous: 40,
    current: 50,
    amt: 2290,
  },
  {
    labelName: "G-score",
    previous: 60,
    current: 40,
    amt: 2000,
  },
];

const renderCustomizedLabel = (props: any) => {
  const { x, y, width, value } = props;
  const radius = 10;

  return (
    <g>
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value.split(" ")[1]}
      </text>
    </g>
  );
};

export default function Barmetrics() {
  return (
    <ResponsiveContainer width="100%" height={380}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="labelName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="previous" fill="#57B9FF" minPointSize={5}>
          <LabelList dataKey="labelName" content={renderCustomizedLabel} />
        </Bar>
        <Bar dataKey="current" fill="#1B6FB8" minPointSize={10} />
      </BarChart>
    </ResponsiveContainer>
  );
}
