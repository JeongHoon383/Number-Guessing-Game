let computerNum = 0

//숫자가 똑같을때 기회 깍지 말것 + 이미 입력하셨습니다.
//숫자가 똑같은걸 먼저 만들어야됨, 그러면 입력한 숫자를 담아둬야지
let inNum = document.getElementById('user-input')
let btn = document.getElementById('go-btn')
let result = document.getElementById('result')
let reset = document.getElementById('reset')
let saveChances = document.getElementById('chances')
let putNum = []
let chances = 5


btn.addEventListener('click',play) //(이벤트 이름, 함수이름), 함수 이름이 있으면 실행 시켜줘야됨
reset.addEventListener('click',resetBtn)

function ranNum(){
  computerNum = Math.floor(Math.random() *100 + 1)
  console.log(computerNum);
  
  }

function play(){
  let userValue = inNum.value
  if(userValue > 100 || userValue < 1){
    result.textContent = '1부터 100까지 숫자를 입력해주세요'
    return;
  }

  if(putNum.includes(userValue)){
    result.textContent = '이미 입력한 숫자 입니다. 다른 숫자를 입력해 주세요'
    return;
  }

  chances--
  saveChances.innerHTML = `남은기회 : ${chances}번`
  console.log('기회', chances);
  
  if(userValue > computerNum){
    result.innerHTML = 'Down!!'
  }else if(userValue < computerNum){
    result.innerHTML = 'up!!'
  }else{
    result.innerHTML = '맞췄습니다!!'
  }

  putNum.push(userValue)
  console.log(putNum);
  }

  if(chances < 1){
    btn.disabled = true
  }


function resetBtn() {
  ranNum()
  result.innerHTML = ''
  inNum.value = ''
  inNum.focus()
  btn.disabled = false
  chances = 5
  saveChances.textContent = `남은기회 : ${chances}번`
}

ranNum()