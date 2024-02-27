var inputElement = document.getElementById('inputNumber')
var button100 = document.getElementById('button100')
var button500 = document.getElementById('button500')
var button1000 = document.getElementById('button1000')
var buttonMono = document.getElementById('button-mono')
var buttonGpay = document.getElementById('button-gpay')
var btnAnotherBank = document.getElementById('another-bank')
var resultMoney = document.getElementById('accumulated-money')
var dollarIcon = document.getElementById('dollar')
var nameDonater = document.getElementById('name-donater')
var comments = document.getElementById('comments')
var numberCard = document.getElementById('number-card')
var mounth = document.getElementById('mounth')
var day = document.getElementById('day')
var cvv2 = document.getElementById('cvv2')

button100.addEventListener('click', function () {
  addMoney(100)
})

button500.addEventListener('click', function () {
  addMoney(500)
})

button1000.addEventListener('click', function () {
  addMoney(1000)
})

buttonMono.addEventListener('click', function () {
  displayMoney()
  console.log(
    `Користувач: ${nameDonater.value};\nКоментар: ${comments.value};\nСума донату: ${inputElement.value} грн.`
  )
})

buttonGpay.addEventListener('click', function () {
  displayMoney()
  console.log(
    `Користувач: ${nameDonater.value};\nКоментар: ${comments.value};\nСума донату: ${inputElement.value} грн.`
  )
})

btnAnotherBank.addEventListener('click', function () {
  displayMoney()
  console.log(
    `Користувач: ${nameDonater.value};\nКоментар: ${comments.value};\nНомер картки: ${numberCard.value};\nДані картки в форматі мм/рр/cvv2: ${mounth.value}/${day.value}/${cvv2.value};\nСума донату: ${inputElement.value} грн.`
  )
})

//кнопки (100, 500, 1000)
function addMoney(value) {
  var number = parseInt(inputElement.value)
  var newNumb = number + value
  inputElement.value = newNumb
  inputElement.style.color = 'black'
  dollarIcon.style.color = 'black'
}

//вивести результат в накопичено
function displayMoney() {
  var nowMoney = parseInt(inputElement.value)
  var futureMoney = parseInt(resultMoney.textContent)
  if (isNaN(futureMoney)) {
    futureMoney = 0
  }
  if (nowMoney > 10 && nowMoney < 29999) {
    var res = nowMoney + futureMoney
  } else {
    var res = futureMoney
  }
  resultMoney.textContent = res + ' ₴'
}

//відкрити вкладку з іншої картки, глянути завтра в jQuerry
document.getElementById('toggleButton').addEventListener('click', function () {
  var element = document.getElementById('hiddenElement')
  var elementTwo = document.getElementById('toggleButton')
  var elementThree = document.getElementById('hideHr')
  if (element.style.display === 'none') {
    element.style.display = 'block'
    elementTwo.style.display = 'none'
    elementThree.style.display = 'none'
  } else {
    element.style.display = 'none'
  }
})

//додаємо повідомлення що значення менше 10 і більше 29999
function changeColor() {
  var errorValue = document.getElementById('error-value')
  var btnDonate = document.getElementById('btn-donate')
  var value = parseInt(inputElement.value)

  if (value < 10 || value > 29999) {
    inputElement.style.color = '#d984a9'
    dollarIcon.style.color = '#d984a9'
    errorValue.style.display = 'flex'
    btnDonate.style.marginTop = '10px'
  } else {
    inputElement.style.color = 'black'
    dollarIcon.style.color = 'black'
    errorValue.style.display = 'none'
    btnDonate.style.marginTop = '25px'
  }
}
