let inputElement = document.getElementById('inputNumber'),
  resultMoney = document.getElementById('accumulated-money'),
  dollarIcon = document.getElementById('dollar');
const button100 = document.getElementById('button100'),
  button500 = document.getElementById('button500'),
  button1000 = document.getElementById('button1000'),
  buttonMono = document.getElementById('button-mono'),
  buttonGpay = document.getElementById('button-gpay'),
  btnAnotherBank = document.getElementById('another-bank'),
  nameDonater = document.getElementById('name-donater'),
  comments = document.getElementById('comments'),
  numberCard = document.getElementById('number-card'),
  mounth = document.getElementById('mounth'),
  day = document.getElementById('day'),
  cvv2 = document.getElementById('cvv2');

button100.addEventListener('click', function () {
  addMoney(100);
});

button500.addEventListener('click', function () {
  addMoney(500);
});

button1000.addEventListener('click', function () {
  addMoney(1000);
});

buttonMono.addEventListener('click', function () {
  displayMoney()
  console.log(
    `Користувач: ${nameDonater.value};\nКоментар: ${comments.value};\nСума донату: ${inputElement.value} грн.`
  );
});

buttonGpay.addEventListener('click', function () {
  displayMoney();
  console.log(
    `Користувач: ${nameDonater.value};\nКоментар: ${comments.value};\nСума донату: ${inputElement.value} грн.`
  );
});

btnAnotherBank.addEventListener('click', function () {
  displayMoney();
  console.log(
    `Користувач: ${nameDonater.value};\nКоментар: ${comments.value};\nНомер картки: ${numberCard.value};\nДані картки в форматі мм/рр/cvv2: ${mounth.value}/${day.value}/${cvv2.value};\nСума донату: ${inputElement.value} грн.`
  );
});

//кнопки (100, 500, 1000)
function addMoney(value) {
  let number = parseInt(inputElement.value),
    newNumb = number + value;
  inputElement.value = newNumb;
  inputElement.style.color = 'black';
  dollarIcon.style.color = 'black';
}

//вивести результат в накопичено
function displayMoney() {
  let nowMoney = parseInt(inputElement.value),
    futureMoney = parseInt(resultMoney.textContent),
    res;
  if (isNaN(futureMoney)) {
    futureMoney = 0;
  }
  if (nowMoney > 10 && nowMoney < 29999) {
      res = nowMoney + futureMoney;
  } else {
      res = futureMoney;
  }
  resultMoney.textContent = res + ' ₴';
}

//відкрити вкладку з іншої картки, глянути завтра в jQuerry
document.getElementById('toggleButton').addEventListener('click', function () {
  let element = document.getElementById('hiddenElement'),
    elementTwo = document.getElementById('toggleButton'),
    elementThree = document.getElementById('hideHr');
  if (element.style.display === 'none') {
    element.style.display = 'block';
    elementTwo.style.display = 'none';
    elementThree.style.display = 'none';
  } else {
    element.style.display = 'none';
  }
});

//додаємо повідомлення що значення менше 10 і більше 29999
function changeColor() {
  let errorValue = document.getElementById('error-value'),
    btnDonate = document.getElementById('btn-donate'),
    value = parseInt(inputElement.value);

  if (value < 10 || value > 29999) {
    inputElement.style.color = '#d984a9';
    dollarIcon.style.color = '#d984a9';
    errorValue.style.display = 'flex';
    btnDonate.style.marginTop = '10px';
  } else {
    inputElement.style.color = 'black';
    dollarIcon.style.color = 'black';
    errorValue.style.display = 'none';
    btnDonate.style.marginTop = '25px';
  }
}
