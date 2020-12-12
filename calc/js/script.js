'use strict';

const inputKzt = document.querySelector('#rub'),
			inputUsd = document.querySelector('#usd');

inputKzt.addEventListener('input', () => {
	const request = new XMLHttpRequest();

	request.open('GET', 'js/current.json');
	request.setRequestHeader('Content-type', 'application/json; charser=utf-8');
	request.send();

	request.addEventListener('load', () =>{
		if (request.status === 200) {

			const data = JSON.parse(request.response);
			console.log(typeof(inputKzt.value));
			console.log(isNaN(inputKzt.value));
			if (!isNaN(inputKzt.value)) {
				inputUsd.value = (+inputKzt.value / data.current.usd).toFixed(2);
			} else {
				inputUsd.value = 'Error';
			}
		} else {
			inputUsd.value = 'Error';
		}
	});
});

// request.addEventListener('readystatechange', () => {
// 	if (request.readyState === 4 && request.status === 200) {
// 		console.log(request.response);
// 		const data = JSON.parse(request.response);
// 		inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
// 	} else {
// 		inputUsd.value = 'Error';
// 	}
// });