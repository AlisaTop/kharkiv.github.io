'use strict'; // Строгий режим выполнения скрипта

window.onload = () => { // После загрузки окна
	const email = 'kate.horuzhay@gmail.com'; // Почта получателя

	const lineBreak = '%0D%0A'; // Код перехода на новую строку
	let mailTo = `mailto:${email}?subject=Заявка&body=`;
	const mailLink = document.createElement('a'); // Создаем элемент ссылка <a></a>
	
	$('#callback').submit(function(event) { // Передаем функцию, которая принимает аргумент типа Event (событие)
		event.preventDefault(); // Избежать дефолтного сценария отправки формы

		const $formData = $(this).serializeArray(); // Сериализовать данные формы в массив

		let mailBody = ''; // Объявление переменной отвечающей за содержимое (тело / body) письма
	
		$.each($formData, (index, formField) => { // Проходимся по каждому элементу массива
			mailBody += `${formField.name}: ${formField.value}${lineBreak}`; // Записываем данные поля в тело письма
		});

		mailLink.href = `${mailTo}${mailBody}`; // Записываем получившееся в содержимое атрибута href (ссылку)
	
		mailLink.click(); // Симулируем клик по ссылке (<a href=""></a>)
	});
};