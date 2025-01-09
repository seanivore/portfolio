const data = {
  labels: ['Technical', 'UX', 'Implementation'],
  datasets: [
    {
      label: 'Capability',
      data: [
        {
          x: 'Technical',
          y: 'High',
          v: 90
        },
        {
          x: 'UX',
          y: 'Medium',
          v: 70
        },
        {
          x: 'Implementation',
          y: 'High',
          v: 85
        }
      ],
      backgroundColor: function(context) {
        const value = context.raw.v;
        if (value >= 80) return '#408A8F';  // High - tag-tech color
        if (value >= 60) return '#E85021';  // Medium - tag-strategy color
        return '#7a8b69';                   // Low - tag-ai color
      }
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'AI Tool Evaluation Matrix',
      font: {
        size: 16
      }
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          const value = context.raw.v;
          let level = value >= 80 ? 'High' : value >= 60 ? 'Medium' : 'Low';
          return `${context.raw.x}: ${level} (${value}%)`;
        }
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      ticks: {
        callback: function(value) {
          if (value === 0) return 'Low';
          if (value === 50) return 'Medium';
          if (value === 100) return 'High';
          return '';
        }
      }
    }
  }
};

export default {
  type: 'bar',
  data: data,
  options: options
};
