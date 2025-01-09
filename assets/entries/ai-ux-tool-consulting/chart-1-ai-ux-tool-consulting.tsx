const data = {
  labels: ['Technical Capability', 'User Experience', 'Implementation Impact'],
  datasets: [{
    label: 'Evaluation Workflow',
    data: [
      {
        x: 0,
        y: 3,
        items: [
          'Function completeness',
          'Performance metrics',
          'Integration capabilities',
          'Error handling',
          'Model consistency'
        ]
      },
      {
        x: 1,
        y: 3,
        items: [
          'Interface clarity',
          'Workflow integration',
          'Feedback mechanisms',
          'Learning curve',
          'Accessibility'
        ]
      },
      {
        x: 2,
        y: 3,
        items: [
          'Efficiency gains',
          'Adoption patterns',
          'Integration challenges',
          'Training needs',
          'Resource usage'
        ]
      }
    ],
    backgroundColor: [
      '#408A8F', // tag-tech color
      '#E85021', // tag-strategy color
      '#7a8b69'  // tag-ai color
    ],
    borderWidth: 1
  }]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'y',
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'AI Tool Evaluation Framework',
      font: {
        size: 16
      }
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          const dataPoint = context.dataset.data[context.dataIndex];
          return dataPoint.items;
        }
      }
    }
  },
  scales: {
    x: {
      display: false
    },
    y: {
      grid: {
        display: false
      }
    }
  }
};

export default {
  type: 'bar',
  data: data,
  options: options
};
