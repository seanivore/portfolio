const data = {
  labels: ['Phase 1: Setup', 'Phase 2: Creation', 'Phase 3: Optimization'],
  datasets: [{
    label: 'Development Workflow',
    data: [
      {
        x: 0,
        y: 4,
        items: [
          'Master template creation',
          'Modular CSS architecture',
          'Asset management system',
          'Documentation standards'
        ]
      },
      {
        x: 1,
        y: 4,
        items: [
          'Template duplication',
          'Content integration',
          'Asset preparation',
          'Quality assurance'
        ]
      },
      {
        x: 2,
        y: 4,
        items: [
          'Requirement documentation',
          'AI delegation procedures',
          'Review and refinement',
          'Continuous improvement'
        ]
      }
    ],
    backgroundColor: [
      '#408A8F', // Phase 1 - tag-tech color
      '#E85021', // Phase 2 - tag-strategy color
      '#7a8b69'  // Phase 3 - tag-ai color
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
      text: 'Portfolio Development Workflow',
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
