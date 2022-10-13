// ########################## 기존에 index.html에 있던 js파일 지저분해서 물러남 오류대비해서 안지움 
import 그래프타입들 from './graphTypes.js' 

// 입력할 그래프 항목수
let selectGraphArticle = document.getElementById('select-graph-article');
selectGraphArticle.addEventListener('change',function(e){
    console.log(e.target.value)
    console.log(parseInt(selectGraphArticle.value))
    항목수임시변수설정()
    console.log(그래프형태.data.labels)
    console.log(그래프형태.data.datasets[0].data)

    // test
    chartContainer.innerHTML = `<canvas id="myChart"></canvas>`;
    ctx = document.getElementById("myChart").getContext("2d");
    newChart = new Chart(ctx, 그래프형태); 
    newChart.data.labels = 그래프형태.data.labels;
    newChart.data.datasets[0].data = 그래프형태.data.datasets[0].data
    newChart.update();
})

// 그래프타입들 데이터 임시 값
function 항목수임시변수설정(){
    그래프형태.data.labels =[];
    그래프형태.data.datasets[0].data =[];
    for(let i=0;i<parseInt(selectGraphArticle.value);i++){
    그래프형태.data.labels[i] = `항목${i}`
    그래프형태.data.datasets[0].data[i] = (i*10)+(10*(i%3))
    }
}



// 그래프타입들 데이터 변수화
// 그래프형태.data.label
    

    let graph = document.querySelector("#myChart");      
    // 그래프 인풋창 여닫기
    let topWrap = document.querySelector(".top-wrap");
    let dataContainer = document.querySelector(".data-container");
    let dataContainerFoot = document.querySelector(".data-container-foot");
    
    
    dataContainerFoot.addEventListener('click',function(){
    dataContainer.classList.remove('up100');
    topWrap.classList.remove('hide');
    dataContainerFoot.className += ' hide'
    screenShot.className += ' hide'
    })
    
    topWrap.addEventListener('click',function(){
    topWrap.className += ' hide';
    dataContainer.className += ' up100';
    dataContainerFoot.classList.remove('hide');
    screenShot.classList.remove('hide')
    })

    

    // 그래프 형태 선택 및 뒤로가기
    let 그래프형태 = 그래프타입들.선그래프;
    let 그래프모양선택버튼 = document.getElementById('GraphFormTypeBtn');
    let 선택된그래프모양 = document.getElementById('GraphFormType');

    // 그래프 차트
    var ctx = document.getElementById("myChart").getContext("2d");
    var newChart = new Chart(ctx, 그래프형태);

    // 만약 그래프형태를 선택하고 다음버튼을 누르면 그래프형태를 그에 해당하는 그래프변수로 바꿈,
    // 그리고 그래프에 해당되는 변수를 만듬      
    
    그래프모양선택버튼.addEventListener('click',function(){        

    
    그래프형태 = 그래프타입들[선택된그래프모양.value];

    chartContainer.innerHTML = `<canvas id="myChart"></canvas>`;
    var ctx = document.getElementById("myChart").getContext("2d");
    var newChart = new Chart(ctx, 그래프형태);               
    
    })  
    
    // 인풋창 투명도
    let opacityControl = document.getElementById('opacity-control');
    opacityControl.addEventListener('input',function(e){
    dataContainer.style.opacity = e.target.value/10       
    })

    // 그래프데이타 인풋
    // let graphName = document.getElementById("graph-name");
    let graphSize = document.getElementById("graph-size");
    let changeGraphBtn = document.getElementById("change-graph-btn");

    // 숫자입력칸 경고
    // 그래프크기
    let chartContainer = document.querySelector('.chart-container');
    let myChart = document.querySelector('#myChart');
    
    graphSize.addEventListener('input',function(){
    if(graphSize.value == ''){
        alert('숫자만입력하세요')
        graphSize.value = 100;
    }
    })
    

    // 그래프에 데이타 적용
    // 그래프사이즈
    function 그래프사이즈조정(){
        if(parseFloat(graphSize.value)/100 > 0 && parseFloat(graphSize.value)/100 <= 1){
        chartContainer.style.transform = `scale(${parseFloat(graphSize.value)/100})`;
        }else{
        alert('0 초과 100이하의 숫자 사이에서 입력하세요.')
        }
    }
    changeGraphBtn.addEventListener("click", function () {
    // console.log(graphName.value);
    console.log(newChart.data.datasets[0].label);        
    그래프사이즈조정()             
    
    // newChart.data.datasets[0].label = graphName.value;
    newChart.update();
    });
    

    // 스샷버튼
    let screenShot = document.getElementById("screenShot");
    screenShot.addEventListener("click", function () {
    makeDivToImageFile(graph);
    });      

    function saveAs(url, fileName) {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }

    function makeDivToImageFile(graph) {
    html2canvas(graph, {
        allowTaint: true,
        useCORS: true,
        /* 아래 3 속성이 canvas의 크기를 정해준다. */
        width: graph.offsetWidth,
        height: graph.offsetHeight,
        scale: parseFloat(graphSize.value)/100,
    })
        .then(function (canvas) {
        const imageURL = canvas.toDataURL("image/jpeg");
        saveAs(imageURL, "new file.jpg");
        })
        .catch(function (err) {
        console.log(err);
        });
    }
    
