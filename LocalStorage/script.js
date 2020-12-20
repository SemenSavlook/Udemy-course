'use strict';

const checkbox = document.querySelector('#checkbox'),
			form = document.querySelector('form'),
			change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
	checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
	localStorage.setItem('isChecked', true);
});

if (localStorage.getItem('bg') === 'changed') {
	localStorage.removeItem('bg');
	form.style.backgroundColor = 'red';
}

change.addEventListener('click', () => {
	if (localStorage.getItem('bg') === 'changed') {
		localStorage.removeItem('bg');
		form.style.backgroundColor = '#fff';
	} else {
		localStorage.setItem('bg', 'changed');
		form.style.backgroundColor = 'red';
	}
});

const person = {
	name: 'Alex',
	age: 25
};

const serializedPersone = JSON.stringify(person);
localStorage.setItem('alex', serializedPersone);

// console.log(JSON.parse(localStorage.getItem('alex')));

// string.search();
// string.match();
// string.replace();
// string.test();
