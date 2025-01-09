const data = {
  labels: [
    'SERP/SEO Automation',
    'Etsy SERP Automation Tool',
    'On-Task AI Task Management Helper',
    'Personal Shopper SaaS',
    'Astrofluenced Weekly & Podcast',
    'Meditation Buddy',
    'Memoir Assistant/Journal Buddy',
    'Photography Buddy',
    'Poetry Pal',
    'Short Story Muse',
    'Friendly Guide',
    'AI Check-in & Feedback Guide',
    'Creative Teacher/AI Art Classes',
    'Meeting The One',
    'The Timid Chef'
  ],
  datasets: [{
    label: 'Project Complexity',
    data: [
      1, // Easy
      1, // Easy
      1, // Easy
      2, // Moderate
      2, // Moderate
      2, // Moderate
      2, // Moderate
      2, // Moderate
      2, // Moderate
      2, // Moderate
      2, // Moderate
      3, // Complex
      3, // Complex
      3, // Complex
      3  // Complex
    ],
    backgroundColor: [
      '#408A8F', // Easy - using tag-tech color
      '#408A8F',
      '#408A8F',
      '#E85021', // Moderate - using tag-strategy color
      '#E85021',
      '#E85021',
      '#E85021',
      '#E85021',
      '#E85021',
      '#E85021',
      '#E85021',
      '#7a8b69', // Complex - using tag-ai color
      '#7a8b69',
      '#7a8b69',
      '#7a8b69'
    ],
    borderWidth: 1
  }]
};

const options = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'MVP Project Complexity Analysis',
      font: {
        size: 16
      }
    }
  },
  scales: {
    x: {
      beginAtZero: true,
      max: 3,
      ticks: {
        stepSize: 1,
        callback: function(value) {
          return ['', 'Easy', 'Moderate', 'Complex'][value];
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
