var counter = (function(){

	// Приватные переменные
	var _number;

	// Проверка, целое ли число
	var _isInteger = function(x) {
		return (x ^ 0) === x;
	}

	// Приватные методы
	var setValue = function(x) {
			if(_isInteger(x)) {
				_number = x;
			} else {
				console.log("Вы ввели нецелое число.");
			}
	}

	// Увеличение счетчика на 1
	var increaseCounter = function(){
		_number++;
	}

	// Уменьшение счетчика на 1
	var decreaseCounter = function(){
		_number--;
	}

	// Вывод значения счетчика в консоль
	var printCounter = function(){
		console.log(_number);
	}

	// возвращение значений
	return {
		setValue,
		increaseCounter,
		decreaseCounter,
		printCounter
	}

}());

counter.setValue(10);
counter.printCounter(); // 10

counter.setValue(4.2); // Вы ввели нецелое число

counter.setValue(54);
counter.printCounter(); // 54


counter.increaseCounter(); // 55
counter.increaseCounter(); // 56
counter.increaseCounter(); // 57
counter.printCounter(); // 57

counter.decreaseCounter(); // 56
counter.printCounter(); // 56
