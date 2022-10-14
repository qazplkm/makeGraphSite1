import 그래프타입들 from './graphTypes.js'

// 1, 변수들

    // 외부 그래프데이터를 가져와서 object식으로 된 각그래프를 변경하기 위한 변수
    let 그래프형태 = 그래프타입들.선그래프;    

    // 그래프 인풋창 여닫기
    // -그래프인풋창은 아니지만 그걸 열기위한 div
    let topWrap = document.querySelector(".top-wrap");
    // -인풋창 container
    let dataContainer = document.querySelector(".data-container");
    // -인풋창container 닫기위한 변수 인풋창 아래에 위치함
    let dataContainerFoot = document.querySelector(".data-container-foot");

    // 인풋들
    // -그래프인풋창투명도컨트롤러
    let opacityControl = document.getElementById('opacity-control');
    // -그래프크기입력창
    let graphSize = document.getElementById("graph-size");
    // -그래프refresh 버튼
    let changeGraphBtn = document.getElementById("change-graph-btn");
    // -그래프모양을 정하고 적용하는 버튼
    let 그래프모양선택버튼 = document.getElementById('GraphFormTypeBtn'); // ##위 그래프refresh 버튼과 역활이 중복됨
    // -그래프모양 선택하는 인풋
    let 선택된그래프모양 = document.getElementById('GraphFormType');

    
    // 그래프 항목수 변경
    let selectGraphArticle = document.getElementById('select-graph-article');
    // 그래프데이터 항목들의 변수들 저장할곳
    let listArticles = [];
    // 그래프데이터 값들의 변수들 저장할곳
    let listValues = [];
    // 그래프데이터 색상들의 변수들 저장할곳
    let listColors = [];

    let 그래프전체색깔 = document.getElementById('one-color');
    
    let graphDataList = document.getElementById('graph-data-list');
    // 그래프canvas container
    let chartContainer = document.querySelector('.chart-container');
    // 그래프canvas
    let graph = document.querySelector("#myChart");
    let myChart = document.querySelector('#myChart'); // ##중복발생

    //스샷버튼
    let screenShot = document.getElementById("screenShot");   
    

    // 그래프모양 필수생성키(변수외형)
    var ctx = document.getElementById("myChart").getContext("2d");
    var newChart = new Chart(ctx, 그래프형태);    

// 2, 함수들(따로 이름이 정의된 함수)    

    function 데이터리스트생성시비우기(){
        그래프형태.data.labels =[];
        그래프형태.data.datasets[0].data =[];
        graphDataList.innerHTML = ``;
        listArticles = [];
        listValues = [];
        listColors = [];
    }

    // 그래프 항목수 변경이 되면 변경된 갯수에 맞게 항목수와 데이터를 임시로 만들어서 넣어준다
    function 보통그래프일때항목수데이터리스트생성및임시변수설정(){        
        데이터리스트생성시비우기()
        for(let i=0;i<parseInt(selectGraphArticle.value);i++){
            그래프형태.data.labels[i] = `항목${i}`
            그래프형태.data.datasets[0].data[i] = (i*10)+(10*(i%3)+10)
            let 리스트모양 = `<tr>
                <td>
                <input id="inputArticle${i}" type="text">
                </td>   
                <td>
                <input id="inputValue${i}" type="number">
                </td>       
                <td>
                <input id="inputColor${i}" type="color">
                </td>              
            </tr>`
            graphDataList.insertAdjacentHTML('beforeend',리스트모양);
            eval(`let inputArticle${i} = document.getElementById('inputArticle${i}')`);
            eval(`let inputValue${i} = document.getElementById('inputValue${i}')`);
            eval(`let inputColor${i} = document.getElementById('inputColor${i}')`);
            eval(`listArticles[${i}] = inputArticle${i}`);
            eval(`listValues[${i}] = inputValue${i}`);
            eval(`listColors[${i}] = inputColor${i}`);
        }        
    }

    function 선그래프일때항목수데이터리스트생성및임시변수설정(){        
        데이터리스트생성시비우기()
        for(let i=0;i<parseInt(selectGraphArticle.value);i++){
            그래프형태.data.labels[i] = `항목${i}`
            그래프형태.data.datasets[0].data[i] = (i*10)+(10*(i%3)+10)
            let 리스트모양 = `<tr>
                <td>
                <input id="inputArticle${i}" type="text">
                </td>   
                <td>
                <input id="inputValue${i}" type="number">
                </td>       
                <td>
                <p class="show-selected-color"></p>
                </td>              
            </tr>`
            graphDataList.insertAdjacentHTML('beforeend',리스트모양);
            eval(`let inputArticle${i} = document.getElementById('inputArticle${i}')`);
            eval(`let inputValue${i} = document.getElementById('inputValue${i}')`);
            
            eval(`listArticles[${i}] = inputArticle${i}`);
            eval(`listValues[${i}] = inputValue${i}`);
            
        }        
    }

    // 입력된 그래프 사이즈를 변경을 일정범위 안에서만 할수있게 제한하고 승인직전까지 진행함
    function 그래프사이즈조정(){
        if(parseFloat(graphSize.value)/100 > 0 && parseFloat(graphSize.value)/100 <= 1){
          chartContainer.style.transform = `scale(${parseFloat(graphSize.value)/100})`;
        }else{
          alert('0 초과 100이하의 숫자 사이에서 입력하세요.')
        }
    }

    // 스크린샷 찍는 함수 (퍼온거라 잘 모름)
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

    function 차트창다시만들기(){
        chartContainer.innerHTML = `<canvas id="myChart"></canvas>`;
        ctx = document.getElementById("myChart").getContext("2d");
    }

    function 차트에데이터넣기(){
        newChart = new Chart(ctx, 그래프형태); 
        newChart.data.labels = 그래프형태.data.labels;
        newChart.data.datasets[0].data = 그래프형태.data.datasets[0].data
    }


// 3, 기타작동(addEventListener같은 콜백함수 포함)

    // 인풋창 container 열기
    // 위로 올려진(아래 조금 나온 누를수 있는 그 부분이 dataContainerFoot) 인풋창 container를 아래로 내려서 볼수있게 하는 인풋창 열기 기능 
    dataContainerFoot.addEventListener('click',function(){
        dataContainer.classList.remove('up100');
        topWrap.classList.remove('hide');
        dataContainerFoot.className += ' hide'
        screenShot.className += ' hide'
      })
    // 인풋창 container 닫기  
    // 위에 있는 div를 누르면 내려진 인풋창을 다시 올려서 숨길수 있다.
    topWrap.addEventListener('click',function(){
        topWrap.className += ' hide';
        dataContainer.className += ' up100';
        dataContainerFoot.classList.remove('hide');
        screenShot.classList.remove('hide')
    })

    // 입력할 그래프 항목수 변경
    // 만약 그래프 항목수 변경을 하면 항목수임시변경을 한후 생성된 임시항목과 데이터를 차트에 적용시켜서 보여준다.   
    selectGraphArticle.addEventListener('change',function(e){
      
        //   항목수임시변수설정()
      if(그래프형태 == 그래프타입들.선그래프){
        선그래프일때항목수데이터리스트생성및임시변수설정()
      }else{
        보통그래프일때항목수데이터리스트생성및임시변수설정()
      }
      
      console.log(그래프형태.data.labels)
      console.log(그래프형태.data.datasets[0].data)
      
      차트창다시만들기();
      차트에데이터넣기();
      newChart.update();      
       
    })

    // 버튼을 누르면 정해진 그래프 모양으로 그래프형태를 바뀌고 차트창을 다시보여줌
    그래프모양선택버튼.addEventListener('click',function(){          

        selectGraphArticle.value = '선택';
        if(selectGraphArticle.value == '선택'){
            graphDataList.innerHTML = "";
        }    
        그래프형태 = 그래프타입들[선택된그래프모양.value];

        if(그래프형태 == 그래프타입들.선그래프){
            그래프전체색깔.classList.remove('hide');
        }else{
            그래프전체색깔.className += 'hide';
        }

        chartContainer.innerHTML = `<canvas id="myChart"></canvas>`;
        ctx = document.getElementById("myChart").getContext("2d");
        newChart = new Chart(ctx, 그래프형태);              
    })

    // 인풋창의 투명도를 적용시켜줌
    opacityControl.addEventListener('input',function(e){
        dataContainer.style.opacity = e.target.value/10       
    })

    // 원하는 수치만 입력할때 입력함. 그래프사이즈를 바꾸기 전에  생길수 있는 문제를 처리해줌
    graphSize.addEventListener('input',function(){
        if(graphSize.value == ''){
            alert('숫자만입력하세요')
            graphSize.value = 100;
        }
    })

    // 그래프사이즈를 기준에 맞게 필터로 거른걸 적용시켜줌
    // 인풋적용 시도할 예정
    changeGraphBtn.addEventListener("click", function () {
        if(selectGraphArticle.value == '선택'){
            alert('항목수를 선택하시오')
        }else{
            if(그래프형태 == 그래프타입들.선그래프){
                for(let i=0;i<parseInt(selectGraphArticle.value);i++){
                    newChart.data.labels[i] = listArticles[i].value;
                    newChart.data.datasets[0].data[i] = parseFloat(listValues[i].value);                               
                }
                newChart.data.datasets[0].backgroundColor = 그래프전체색깔.value;
            }else{
                for(let i=0;i<parseInt(selectGraphArticle.value);i++){
                    newChart.data.labels[i] = listArticles[i].value;
                    newChart.data.datasets[0].data[i] = parseFloat(listValues[i].value);
                    newChart.data.datasets[0].backgroundColor[i] = listColors[i].value;                
                }
            }
            // for(let i=0;i<parseInt(selectGraphArticle.value);i++){
            //     newChart.data.labels[i] = listArticles[i].value;
            //     newChart.data.datasets[0].data[i] = parseFloat(listValues[i].value);
            //     newChart.data.datasets[0].backgroundColor[i] = listColors[i].value;                
            // }
            
            그래프사이즈조정(); 
            newChart.update();
        }
                 
    });

    // 스크린샷을 찍어서 저장을 도와줌
    screenShot.addEventListener("click", function () {
        makeDivToImageFile(graph);
    });