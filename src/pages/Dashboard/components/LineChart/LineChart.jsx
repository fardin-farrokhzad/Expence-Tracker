import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function LineChart({ labels, incomeData, expenseData }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext('2d');

    if (chartRef.current) chartRef.current.destroy();

    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'درآمد',
            data: incomeData,
            borderColor: '#3ebd93',
            backgroundColor: '#3ebd9340',
            tension: 0.3,
          },
          {
            label: 'هزینه',
            data: expenseData,
            borderColor: '#ef4e4e',
            backgroundColor: '#ef4e4e40',
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom' } },
        scales: { y: { beginAtZero: true } },
      },
    });

    return () => chartRef.current?.destroy();
  }, [labels, incomeData, expenseData]);

  return <canvas ref={canvasRef}></canvas>;
}

export default LineChart;
