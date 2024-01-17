function check1(){
    for(let i=1; i<=10; i++){
        console.log("i : ", i)
        if(i==5){
            break;
        }
    }
}

function check2(){
    let i = 1;
    while(true){
        console.log("i : ", i++);
        if(i > 10){
            break;
        }
    }
}

function check3(){
    for(let i=1; i<=20; i++){
        if(i % 3 == 0){
            continue;
        }
        console.log("i : ", i);
    }
}

function check4(){
    for(let i = 1; i <= 30; i++){
        if(i % 2 == 1 || i % 10 == 0){
            continue;
        }
        console.log("i : ", i);
    }
}

function check5(){
    for(let i = 1; i <= 5; i++){
        let str = "";
        for(let j = 0; j <= 9; j++){
            if(j !=0 && j % 4 == 0){
                continue;
            }
            str += j + " ";
        }
        console.log(str);
        if(i == 3){
            break;
        } 
    }
}

function startGame(){
    // 1에서 100사이 난수
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    // 입력한 횟수
    let count = 0;
    // prompt
    let str = "1 ~ 100 사이의 숫자를 입력해주세요.";
    while(true){
        let input = prompt(str);
        if(input == null){
            alert("게임을 포기하셨습니다.");
            return;
        }
        else if(isNaN(input)){
            alert("숫자만 입력 가능합니다");
        }
        else if(parseInt(input) > 100 || parseInt(input) <= 0){
            alert("1부터 100까지의 숫자만 입력해주세요");
        }
        else if(parseInt(input) < randomNumber){
            alert("Up!");
            count++;
        }
        else if(parseInt(input) > randomNumber){
            alert("Down!");
            count++;
        }
        else{
            count++
            alert("정답입니다! 시도 횟수 : " + count);
            return;
        }  
    }
}
