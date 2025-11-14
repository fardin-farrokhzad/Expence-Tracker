import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { numberToPersian } from '/src/utils/formatters';

function DoughnutChart({ incomeTotal, expenseTotal }) {
  const data = [
    { name: 'درآمد', value: incomeTotal },
    { name: 'هزینه', value: expenseTotal },
  ];

  const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 25;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill='#444' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central' style={{ fontSize: '12px' }}>
        {`${data[index].name}: ${numberToPersian(data[index].value)}`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width='100%' height='100%' aspect={undefined}>
      <PieChart>
        <Pie data={data} dataKey='value' innerRadius={60} outerRadius={90} paddingAngle={5} label={renderCustomizedLabel} labelLine={false}>
          <Cell key='income' fill='#3ebd93' />
          <Cell key='expense' fill='#ef4e4e' />
        </Pie>
        <Tooltip contentStyle={{ fontSize: '12px' }} formatter={value => numberToPersian(value)} />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default DoughnutChart;
