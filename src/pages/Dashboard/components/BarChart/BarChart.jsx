import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function BarChart({ monthlyIncome, monthlyExpense }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext('2d');

    if (chartRef.current) chartRef.current.destroy();

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['درآمد ماهانه', 'هزینه ماهانه'],
        datasets: [
          {
            label: 'تومان',
            data: [monthlyIncome, monthlyExpense],
            backgroundColor: ['#3ebd93', '#ef4e4e'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } },
      },
    });

    return () => chartRef.current?.destroy();
  }, [monthlyIncome, monthlyExpense]);

  return <canvas ref={canvasRef}></canvas>;
}

export default BarChart;
