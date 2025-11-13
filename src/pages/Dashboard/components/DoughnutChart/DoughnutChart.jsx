import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function DoughnutChart({ incomeTotal, expenseTotal }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext('2d');

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['درآمد', 'هزینه'],
        datasets: [
          {
            data: [incomeTotal, expenseTotal],
            backgroundColor: ['#3ebd93', '#ef4e4e'],
            borderColor: '#fff',
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom' } },
      },
    });

    return () => chartRef.current?.destroy();
  }, [incomeTotal, expenseTotal]);

  return (
    <div style={{ position: 'relative', height: '100%', width: '100%' }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default DoughnutChart;
