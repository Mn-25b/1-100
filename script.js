const uknNum = parseInt(Math.floor(Math.random() * 100) + 1)// рандомное число

let domS = 0 // начло для счетчика

let $btnCheck = document.getElementById('btn')//кнопка


const arrayText = ['вы угадали загаданное число-',
    'вы вели большое число-',
    'вы вели маленькое числ-',
    'вы не вели число'
]// варианты 

//начало процесса
$btnCheck.addEventListener('click', checkValue)
function checkValue() {
    countClick()
    let $writeNum = document.getElementById('number-write').value;
    $writeNum = parseInt($writeNum)
    let writeNumClear = document.getElementById('number-write').value = ''
    
    checkNum($writeNum)
}

//добовляет елемент на страницу
function names(ind, wr) {
    let numTry = `попытка ${domS}:`
    let u = `${numTry} ${arrayText[ind]} ${wr}`

    const $block__right = document.querySelector('.block__right')
    const elem = document.createElement("div");
    let elemText = document.createTextNode(u);
    elem.appendChild(elemText);
    if (ind == 0) {
        $block__right.appendChild(elem).classList.add('red')
    } else if (ind == 3) {
        $block__right.appendChild(elem).classList.add('green')
    }else{
        $block__right.appendChild(elem)
    }
    
}

//проверяет введенное число с загаданым
function checkNum($writeNum) {
    if ($writeNum == uknNum) {
        names(0, $writeNum)
    } else if ($writeNum >= uknNum) {
        names(1, $writeNum)
    } else if ($writeNum <= uknNum) {
        names(2, $writeNum)
    }else {
        names(3, $writeNum)
    }
}

//считывает сколько раз кликнули по кнопке
function countClick() {
    if ($btnCheck) {
        domS += 1
    }
}



