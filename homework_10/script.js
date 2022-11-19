'use strict';

console.log('-----------');
console.log('Пункт No1:');
console.log('-----------');

// код для выполнения пункта 1

let response = fetch('https://reqres.in/api/users?per_page=9007199254740991')

    .then(promise => promise.json())

    .then(base => {

        console.log('-----------');
        console.log('Пункт No2:');
        console.log('-----------');

        // код для выполнения пункта 2

        for (let i = 0; i < base.data.length; i++) {
            console.log(base.data[i]['last_name']);
        };

        console.log('-----------');
        console.log('Пункт No3:');
        console.log('-----------');

        // код для выполнения пункта 3

        for (let i = 0; i < base.data.length; i++) {
            if (base.data[i]['last_name'][0] == 'F') {
                base['data'][i]['last_name']
                console.log('avatar:', base.data[i]['avatar']);
                console.log('email:', base.data[i]['email']);
                console.log('first_name:', base.data[i]['first_name']);
                console.log('id:', base.data[i]['id']);
                console.log('last_name:', base.data[i]['last_name']);
            };
        };

        console.log('-----------');
        console.log('Пункт No4:');
        console.log('-----------');

        // код для выполнения пункта 4

        let objectFirstNameLastNameOnly = [];
        for (let i = 0; i < base.data.length; i++) {
            objectFirstNameLastNameOnly.push(Object.values(base.data[i]).slice(2, 4));
        };

        let arrayFirstNameLastNameOnly = [];
        for (let i = base.data.length - 1; i >= 0; i--) {
            arrayFirstNameLastNameOnly = Object.values(base.data[i]).slice(2, 4).concat(arrayFirstNameLastNameOnly);
        };

        for (let i = 0; i < arrayFirstNameLastNameOnly.length; i += 2)
            arrayFirstNameLastNameOnly[i] = arrayFirstNameLastNameOnly[i] + ' ';
        for (let i = 1; i < arrayFirstNameLastNameOnly.length; i += 2) {
            if (i === arrayFirstNameLastNameOnly.length - 1) {
                arrayFirstNameLastNameOnly[i] = arrayFirstNameLastNameOnly[i] + '.';
            } else {
                arrayFirstNameLastNameOnly[i] = arrayFirstNameLastNameOnly[i] + ', ';
            }
        }

        const ourBaseContents = arrayFirstNameLastNameOnly.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        }, 'Наша база содержит данные следующих пользователей: ');
        console.log(ourBaseContents);

        console.log('-----------');
        console.log('Пункт No5:');
        console.log('-----------');

        // код для выполнения пункта 5

        let userKeys = Object.keys(base.data[0]);
        for (let i = 0; i < userKeys.length; i++)
        console.log(userKeys[i]);

    })