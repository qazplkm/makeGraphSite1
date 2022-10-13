let 그래프타입들={

  선그래프 :{
  //차트설정
  type: "line",
  //차트데이터
  data: {
      labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      ],
      datasets: [
      {
          label: "My First dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [0, 100, 50, 200, 2000, 30, 45],
      },
      ],
      // datasets 이 부분을 조작하시면 차트 아이템의 제목, 배경색, 테두리색, 데이터값을 각각 수정하실 수 있습니다.
  },
  options: {
    scales: {
      yAxes: [{
          display: true,
          ticks: {
              suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
              // OR //
              beginAtZero: true   // minimum value will be 0.
          }
      }]
    }
  },
  },

  바그래프 :
  {
      type: 'bar',
      data: {
          labels: [
              'a1',
              'b1',
              'c1',
              'd1',
              'e1',
              'f1',
              'g1',
              
          ],
          datasets: [{
              label: 'My First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
              ],
              borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
              ],
              borderWidth: 1
          }]
      },
      
      options: {
      // scales: {
      //     y: {
      //     beginAtZero: true
      //     }
      // }
        scales: {
          yAxes: [{
              display: true,
              ticks: {
                  suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                  // OR //
                  beginAtZero: true   // minimum value will be 0.
              }
          }]
        }
      },
  },

  도넛그래프 : {
    type: 'doughnut',
    data: {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    },
  },

  파이그래프 : {
    type: 'pie',
    data: {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    },
  },

  폴라그래프 : {
    type: 'polarArea',
    data: {
      labels: [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)'
        ]
      }]
    },
    options: {}
  },


}
export default 그래프타입들;