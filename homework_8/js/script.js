'use strict';

const input1 = document.getElementById('first-operand');
const input2 = document.getElementById('operator');
const input3 = document.getElementById('second-operand');
const calculate = document.getElementById('calculate');

calculate.addEventListener('click', (event) => {
    event.preventDefault();
    const firstOperand = +(input1.value);
    const secondOperand = +(input3.value);
    if (input1.value == '') {
        console.log('Первое число не указано');
    } else {
        if (input2.value != '*' && input2.value != '/' && input2.value != '-' && input2.value != '+') {
            console.log('Программа не поддерживает такую операцию');
        } else {
            if (input3.value == '') {
                console.log('Второе число не указано');
            } else {
                if (firstOperand !== firstOperand || secondOperand !== secondOperand) {
                    console.log('Некорректный ввод чисел');
                } else {
                    if (input2.value == '/' && secondOperand == '0') {
                        console.log('Операция некорректна');
                    } else {
                        switch (input2.value) {
                            case '*':
                                console.log(firstOperand * secondOperand);
                                break;
                            case '/':
                                console.log(firstOperand / secondOperand);
                                break;
                            case '+':
                                console.log(firstOperand + secondOperand);
                                break;
                            case '-':
                                console.log(firstOperand - secondOperand);
                                break;
                            default:
                        }
                    }
                }
            }
        }
    }
});