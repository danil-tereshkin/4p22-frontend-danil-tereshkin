'use strict';

const fibonacci = function () {
    let a = 0;
    let b = 1;
    let fibo;
    document.getElementById('button').addEventListener('click', function helperFunction1() {
        const helperFunction2 = function() {
            switch (a) {
                case 0:
                    console.log(a);
                    break;
                case 1:
                    console.log(a);
                    break;
                default:
                    console.log(fibo);
            }
            fibo = a + b;
            a = b;
            b = fibo;
        }
        helperFunction2();
    })
}

fibonacci();