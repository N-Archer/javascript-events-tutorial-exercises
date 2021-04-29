window.calculateSumListener = () => {
	let firstNum = document.querySelector("#firstNumber");
	let secNum = document.querySelector("#secondNumber");

	let sum = parseInt(firstNum.value) + parseInt(secNum.value);
	// console.log(sum);
	document.querySelector("#resultNumber").value = sum;
};
