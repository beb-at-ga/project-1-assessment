let currentSum = 0;

let buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (event) {
    let operand = document.getElementById('operand');
    (buttons[i].id === 'plus') ? currentSum += +operand.value : currentSum -= +operand.value;
    operand.value = null;

    let sum = document.getElementById('sum');
    (currentSum < 0) ? sum.className = 'negative': sum.className = 'positive';
    sum.innerText = currentSum;
  });
}

