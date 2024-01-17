function check1(){
    const arr1 = new Array();
    const arr2 = new Array(3);
    const arr3 = [];
    const arr4 = ["사과", "바나나", "딸기"];
    console.log(arr1, arr2, arr3, arr4);

    // 배열명.length : 배열의 길이(배열에 칸 수 또는 저장된 데이터의 수)
    console.log(arr1.length, arr2.length, arr3.length, arr4.length);

    //배열의 index(색인, 번호)
    // 0부터 시작, 중간에 번호를 생략할 수 없음
    // 마지막 index == 배열 길이 - 1
    // 배열명[index]
    console.log('arr4[0] : ', arr4[0])
    console.log('arr4[1] : ', arr4[1])
    console.log('arr4[2] : ', arr4[2])

    // 배열명[index] = 값;  -> 해당 인덱스에 지정된 값 대입
    arr2[0] = 100;
    arr2[1] = "눈온다";
    arr2[2] = true;
    console.log(arr2)
    /* JS 배열 특징을 이용한 사용법 */
    // 1. 길이 제한이 없다 -> 값을 배열에 원하는 만큼 추가 가능
    arr1[0] = "가";
    arr1[1] = "나";
    arr1[2] = "다";
    arr1[3] = "라";
    console.log(arr1)

    // 2. 원하는 index에 값을 마음대로 추가할 수 있다.
    arr1[5] ="하이";
    console.log(arr1)
}

function check2(){
    // for문을 이용해서 배열 요소 초기화 하기
    // - 배열 요소 : 배열의 각 칸
    // - 초기화 : 변수/배열 요소에 처음으로 값을 대입하는 것

    const arr1 = [];

    arr1[0] = '김밥';
    arr1[1] = '라면';
    arr1[2] = '떡볶이';
    arr1[3] = '볶음밥';

    const arr2 = [];
    for(let i = 0; i <= 3; i++){
        arr2[i] = i * 10;        
    }
    console.log(arr1);
    console.log(arr2);
}

function check3(){
    // 배열에 저장된 값 하나씩 출력하기
    const arr = [10, 20, 50, 100, 500, 1000];
    // i <= arr.length -1 == i < arr.length 
    // -> for문을 이용해서 배열의 모든 요소에 접근하는 방법
    //  -> 순차 접근, 반복 접근
    for(let i = 0; i < arr.length; i++){
        console.log(`arr[${i}] == ${arr[i]}`);
    }
}

function check4(){
    /* for문을 이용해서 배열을 순서대로 초기화 한 후 
    다른 for문을 이용해서 배열 요소를 하나씩 모두 출력
    */
    const arr = new Array(5);
    
    // 1. 배열을 순서대로 초기화
    for(let i = 0; i < arr.length; i++){
        arr[i] = parseInt(prompt(`${i}번째 숫자를 입력`));
    }
    console.log(arr)

    let sum = 0;
    let average = 0;

    // 2. 배열 요소를 하나씩 모두 출력 + sum
    for(let i = 0; i < arr.length; i++){
        console.log(`arr[${i}] : ${arr[i]}`);

        sum += arr[i];
        average = sum / arr.length;
    }
    console.log(sum);
    console.log(average);
}

function selectMenu(){
    const menuResult = document.getElementById('menuResult');

    // 점심 메뉴로 초기화된 배열 생성
    const menus = ["굶기", "김밥", "제육볶음" 
    ,"돈까스", "파스타", "샐러드", "라면"
    ,"햄버거", "순대국밥", "닭갈비"];

    // menus 배열 index 범위 내에서 난수 생성
    const randomNumber = Math.floor(Math.random() * menus.length);
    // 난수 번 째 index 요소 값을 화면에 출력
    menuResult.innerText = menus[randomNumber];
}
// 주문하기 프로그램
/*
    - 주문하기 버튼 클릭 시 prompt를 이용해서
    메뉴명, 수량을 입력 받음

    - 메뉴명 입력 시 취소를 클릭하면 "주문 완료"

    - 수량 입력 시 취소를 클릭하면 해당 메뉴 주문만 취소
 */

            // 입력한 메뉴가 menus 몇 번째 인덱스에 존재하는가?
        // -> 배열 검색
        // for문 이용
        // let index = -1; /* 일치하는 메뉴의 인덱스를 저장할 변수 */
        // for(let i = 0; i < menus.length; i++){
        //     if(selectMenu == menus[i]){
        //         idx = i;
        //         break; //같은 메뉴를 찾으면 더 이상 검색 불필요(성능 개선)
        //     }
        // }

        // 배열명.indexOf(value)
        // -- 배열 내에 value가 존재하는 index 번호를 반환
        // 없다면 -1 반환
function orderFn(){
    const tbody = document.getElementById('tbody');
    const total = document.getElementById('total');
    // 메뉴
    const menus = ["라면", "김밥", "샌드위치", "우동"];
    // 가격
    const prices = [4000, 3000, 5000, 6000];
    // 주문한 메뉴 카운트 하는 배열
    const counts = new Array(menus.length);
    // // 비어있는 칸을 0으로 채움
    // for(let i = 0; i < counts.length; i++){
    //     counts[i] = 0
    // }
    counts.fill(0);
    while(true){
        const selectMenu = prompt("주문할 메뉴명을 입력하세요.");
        if(selectMenu == null){
            alert("주문 완료!");
            break;
        }

        let idx = menus.indexOf(selectMenu);
        if(idx == -1){
            alert('메뉴를 제대로 입력해주세요.')
            continue;
        }

        let input = prompt("수량을 입력해주세요.");
        if(input == null){
            continue;
        }

        if(input.length == 0 || isNaN(parseInt(input))){
            alert("제대로 된 수량을 입력해주세요.")
            continue;
        }

        input = parseInt(input);

        // idx : 선택한 메뉴가 존재하는 idx 번호
        // input : 입력한 수량(int 타입)

        counts[idx] += input;
    }
    // console.log(menus);
    // console.log(prices);
    // console.log(counts);
    tbody.innerHTML = '';
    let sum = 0;
    for(let i = 0; i < counts.length; i++){
        if(counts[i] == 0){
            continue;
        }
        let tr = "<tr>"
        tr += `<td>${menus[i]}</td>`
        tr += `<td>${prices[i]}</td>`
        tr += `<td>${counts[i]}</td>`
        tr += "</tr>"
        tbody.innerHTML += tr;

        //합계 누적하기
        sum += prices[i] * counts[i];
    }
    total.innerHTML = sum;
}

// 2차원 배열
function check5(){
    const arr = [
        [1, 2, 3, 4,],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
    ];
    const arr1 = [100, 200, 300, 400];
    const arr2 = [900, 800, 700, 600];
    arr[3] = arr1;
    arr[4] = arr2;
    console.log(arr);

    // 인덱싱
    console.log(arr[1][3])
}

// 2부터 2씩 증가하는 수를 5행 5열 배열의 모든 요소에 차례대로 대입하고 출력하기
function check6(){
    let count = 2;
    const arr = [];

    for(let row = 0; row <= 4; row++){
        arr[row] = [];
        for(let col = 0; col <=4; col++){
            arr[row][col] = count;
            count += 2;
        }
    }
    // arr.reverse();
    console.log(arr);
    
    for(let row = arr.length -1 ; row >=0 ; row--){
        let str = "";
        for(let col = arr[row].length -1 ; col >= 0 ; col--){
          str += arr[row][col] + " ";
        }
        console.log(str);
    }
}
