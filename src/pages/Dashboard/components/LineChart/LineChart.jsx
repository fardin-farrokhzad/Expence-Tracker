import React from 'react';
import { LineChart as RLineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import { numberToPersian } from '/src/utils/formatters';

function LineChart({ labels, incomeData, expenseData }) {
  // Combine data for Recharts
  const data = labels.map((label, idx) => ({
    date: label,
    income: incomeData[idx],
    expense: expenseData[idx],
  }));

  // Map dataKey to Persian labels
  const legendFormatter = value => {
    if (value === 'income') return 'درآمد';
    if (value === 'expense') return 'هزینه';
    return value;
  };

  return (
    <ResponsiveContainer width='100%' height={280}>
      <RLineChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
        <CartesianGrid strokeDasharray='3 3' opacity={0.3} />

        <XAxis dataKey='date' tick={{ fontSize: 11 }} interval='preserveStartEnd' minTickGap={20} axisLine={false} tickLine={false} />

        <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} width={40} tickFormatter={value => numberToPersian(value)} />

        <Tooltip contentStyle={{ fontSize: '12px' }} formatter={value => numberToPersian(value)} />

        <Legend wrapperStyle={{ fontSize: 12 }} formatter={legendFormatter} />

        <Line type='monotone' dataKey='income' stroke='#3ebd93' strokeWidth={2} dot={{ r: 3 }} />
        <Line type='monotone' dataKey='expense' stroke='#ef4e4e' strokeWidth={2} dot={{ r: 3 }} />
      </RLineChart>
    </ResponsiveContainer>
  );
}

export default LineChart;
