import React from 'react';
import { BarChart as RBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts';
import { numberToPersian } from '/src/utils/formatters';

function BarChart({ monthlyIncome, monthlyExpense }) {
  const data = [
    { name: 'درآمد', value: monthlyIncome },
    { name: 'هزینه', value: monthlyExpense },
  ];

  const COLORS = ['#3ebd93', '#ef4e4e'];

  return (
    <ResponsiveContainer width='100%' height={260}>
      <RBarChart data={data} margin={{ top: 10, right: 20, left: 5, bottom: 10 }}>
        <CartesianGrid strokeDasharray='3 3' opacity={0.3} />
        <XAxis dataKey='name' tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} width={40} tickFormatter={value => numberToPersian(value)} />
        <Tooltip contentStyle={{ fontSize: 12 }} formatter={value => numberToPersian(value)} />
        <Bar dataKey='value' radius={[6, 6, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Bar>
      </RBarChart>
    </ResponsiveContainer>
  );
}

export default BarChart;
