function test(){
    const password = prompt("비밀번호를 입력하세요");
    // 확인 버튼 눌렀을 떄는 입력한 문자열이 나옴
    // 취소룰 하면 null이 나옴
    if(password == null){
        alert("취소");
    }else{
        if(password == '1234'){
            alert("비번 맞음");
        }
        else{
            alert("비번 아님");
        }
    }
}

const amount= document.getElementById('amount'); 
const balance = document.getElementById('balance');
let lBalance = 10000;
const password = '1234';

function deposit() {
    bBalance = parseFloat(balance.value);
    if(balance.value == ''){
        alert("값을 입력해주세요");
        return;
    }else if(bBalance < 0){
        alert("음수는 입력할 수 없습니다");
        return;
    }
    lBalance += bBalance
    amount.innerHTML = "잔액 : " + lBalance + "원";
    alert(bBalance + '원이 입금되었습니다.');
    balance.value = '';
}

function withdrawal(){
    bBalance = parseFloat(balance.value);
    const password = prompt("비밀번호를 입력하세요");

    if(password == null){
        alert('출금 취소');
    }
    else if(password == '1234'){
        if(bBalance > lBalance){
            alert("출금 금액이 잔액보다 클 수 없습니다.");
            balance.value = '';
        }
        else if(bBalance == 0){
            alert("0원은 출금할 수 없습니다.");
            balance.value = '';
        }
        else{
            lBalance -= bBalance;
            alert(bBalance + "원이 출금되었습니다. 남은 잔액 : " + lBalance + "원");
            amount.textContent = "잔액 : " + lBalance + "원";
            balance.value = '';
            return;
        }
    }
    else{
        alert("비밀번호가 틀렸습니다.");
    }
}


