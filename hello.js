function getAge(year) {
    var currentYear = 2022;
    return currentYear - year;
}

function getGreeting(age, nameAndFamily) {
    var greeting = '';
    console.log(age, nameAndFamily);
    nameAndFamily = nameAndFamily || 'anonymous.';
    if (age < 20) {
        greeting = 'Привет, ' + nameAndFamily + '.';
    } else if (age >= 20 && age < 40) {
        greeting = 'Добрый день, ' + nameAndFamily + '.';
    } else if (age >= 40 && age < 60) {
        greeting = 'Здравствуйте, ' + nameAndFamily + '.';
    } else {
        greeting = 'Добрейший вечерочек, ' + nameAndFamily + '.';
    }
    return greeting;
}

function getSumm(a, b, c) {
    return a + b + c;
}
document.querySelector("#btnHello").addEventListener('click', function() {
    var myName = document.getElementById('Nb1').value;
    var myBirthYear = document.getElementById('Nb2').value;
    document.getElementById('res').innerHTML = (getGreeting(getAge(myBirthYear), myName));
});
document.querySelector("#btnSumm2").addEventListener('click', function() {
    var operand1 = document.getElementById('Nb1').value;
    var operand2 = document.getElementById('Nb2').value;
    document.getElementById('res').innerHTML = ('a + b = ' + getSumm(parseInt(operand1), parseInt(operand2), 0));
});

document.querySelector("#btnRazn").addEventListener('click', function() {
    var operand1 = document.getElementById('Nb1').value;
    var operand2 = document.getElementById('Nb2').value;
    document.getElementById('res').innerHTML = ('a - b = ' + getSumm(parseInt(operand1), -parseInt(operand2), 0));
});

function getMult(a, b) {
    return a * b;
}

document.querySelector("#btnMult").addEventListener('click', function() {
    var operand1 = document.getElementById('Nb1').value;
    var operand2 = document.getElementById('Nb2').value;
    document.getElementById('res').innerHTML = ('a * b = ' + getMult(parseInt(operand1), parseInt(operand2)));
});

document.querySelector("#btnXz").addEventListener('click', function() {
    var operand1 = document.getElementById('Nb1').value;
    var operand2 = document.getElementById('Nb2').value;
    document.getElementById('res').innerHTML = ('a / b = ' + getMult(parseInt(operand1), 1 / parseInt(operand2)));
});
/*
document.querySelector("#btnRepeat").addEventListener('click',function(){
  var operand1 = document.getElementById('Nb1').value;
  var operand2 = document.getElementById('Nb2').value;
  var res = '';
  if(parseInt(operand2)>50){
    res = 'Сам '+operand1 +'('+parseInt(operand2)+')';
  } else {
    for (var i = 0; i < parseInt(operand2); i=i+1) {
      res = res + '<p>' + operand1;
    }
  }
  var sumres = 0;
  var x=prompt("Число?");
  while(x!=''){
    sumres = sumres+parseInt(x);
    x=prompt("Число?");
  }
  document.getElementById('res').innerHTML=sumres;
});
*/