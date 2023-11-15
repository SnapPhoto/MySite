
	let namesAr = [];	
	let passAr = [];
	let emailsAr = [];
	let account_status = 0;
	let name;
	let pass;
	let email;


// проверка данных перед добавлением нового пользователя

function check_pass_and_email_on_correct() {

	// проверка данных логина и пароля при вводе

	var input_email_value = document.getElementById('register-email-text-input');
	var input_pass_value = document.getElementById('register-password-text-input');
	var input_repeat_pass_value = document.getElementById('register-repeat-password-text-input');	
	var input_button_reg = document.getElementById('button_register');

	var input_email_value = document.getElementById('register-email-text-input');
	var input_pass_value = document.getElementById('register-password-text-input');
	
	var mailru = '@mail.ru';
	var gmailcom = '@gmail.com';

	if ( (input_email_value.value.trim(mailru) == mailru)) {
		false_email();
		}
	if ( (input_email_value.value.trim(gmailcom) == gmailcom) ) {
		false_email();
	}
 	
 	
	
	// проверка ввода пароля
	if ( (input_pass_value.value.trim() !== '') && (input_pass_value.value.length > 8) && ((input_pass_value.value.includes(' ')) == false) ) {
		
		input_pass_value.style.border = '2px solid lightgreen';
		input_pass_value.placeholder = '';
	}
	else{
		input_pass_value.style.border = '2px solid #fa6565' ;
		input_pass_value.placeholder = 'короткий пароль';

		check_data();
	}

	//проверка ввода повтора пароля
	if ( (input_pass_value.value.trim() !== '') && (input_pass_value.value.length > 8) && ((input_pass_value.value.includes(' ')) == false) && (input_pass_value.value.trim() == input_repeat_pass_value.value.trim()) ) {

		input_repeat_pass_value.style.border = '2px solid lightgreen';
		input_repeat_pass_value.placeholder = '';
	}
	else{
		input_repeat_pass_value.style.border = '2px solid #fa6565' ;
		input_repeat_pass_value.placeholder = 'Пароли не совпадают';

		check_data();
	}



	// удаление пробелов в пароле
	if (input_pass_value.value.includes(' ') == true) {
		input_pass_value.value = (input_pass_value.value.trim(' ').replace(' ', ''));
	}

	if (input_repeat_pass_value.value.includes(' ') == true) {
		input_repeat_pass_value.value = (input_repeat_pass_value.value.trim(' ').replace(' ', ''));
	}
}

function check_input_email() {

	// главная функция проверки логина на наличие в массиве

	var input_email_value = document.getElementById('register-email-text-input');
	var input_pass_value = document.getElementById('register-password-text-input');
	var input_repeat_pass_value = document.getElementById('register-repeat-password-text-input');	
	var input_button_reg = document.getElementById('button_register');

	var input_email_value = document.getElementById('register-email-text-input');
	var input_pass_value = document.getElementById('register-password-text-input');
	
	var mailru = '@mail.ru';
	var gmailcom = '@gmail.com';


 		// проверка формы ввода input @mail.ru
		if ( (((input_email_value.value.includes('@mail.ru')) && (input_email_value.value.includes('@gmail.com'))) !== true) && ((input_email_value.value.trim('@mail.ru') !== '@gmail.com')||(input_email_value.value.trim('@gmail.com') !== '@mail.ru')) ) {

			if ( (input_email_value.value.trim('@mail.ru') !== '') && ((input_email_value.value.includes('@mail.ru'))) && (input_email_value.value.length > 1) ) {

				if ( (input_email_value.value.trim() !== mailru) || (input_email_value.length > 8) ) {


					// проверка по массиву с логинами

					if ( emailsAr.includes(input_email_value.value.trim()) == false ) {
						input_email_value.value = (input_email_value.value.replace('@mail.ru','') + mailru); 
						true_email();
						// @mail.ru
					}
					else {
						check_data();
						false_email();
					}
				}
			}

			// проверка формы ввода input @gmail.com
			if ( (input_email_value.value.trim('@gmail.com') !== '') && ((input_email_value.value.includes('@gmail.com'))) ) {

				if ( (input_email_value.value.trim() !== gmailcom) || (input_email_value.length > 8) ) {


					// проверка по массиву с логинами

					if ( emailsAr.includes(input_email_value.value.trim()) == false ) {
						input_email_value.value = (input_email_value.value.replace('@gmail.com','') + gmailcom); 
						true_email();
						// @gmail.com
					}
					else {
						check_data();
						false_email();
					}
				}	
			}
		}
		else {
			false_email();

			check_data();
		}
		if ( ((input_email_value.value.includes('@mail.ru')) || ((input_email_value.value.includes('@gmail.com')))) == false ) {
			false_email();

			check_data();
		}
}

function false_email() {

	// неправильно введён логин

	var input_email_value = document.getElementById('register-email-text-input');
	var input_pass_value = document.getElementById('register-password-text-input');
	var input_repeat_pass_value = document.getElementById('register-repeat-password-text-input');	
	var input_button_reg = document.getElementById('button_register');

	var input_email_value = document.getElementById('register-email-text-input');
	var input_pass_value = document.getElementById('register-password-text-input');
	
	var mailru = '@mail.ru';
	var gmailcom = '@gmail.com';

	input_email_value.style.border = '2px solid #fa6565';
	input_email_value.placeholder = 'неразборчивый логин';
	

}

function true_email() {

	// верно введён логин

	var input_email_value = document.getElementById('register-email-text-input');
	var input_pass_value = document.getElementById('register-password-text-input');
	var input_repeat_pass_value = document.getElementById('register-repeat-password-text-input');	
	var input_button_reg = document.getElementById('button_register');

	var input_email_value = document.getElementById('register-email-text-input');
	var input_pass_value = document.getElementById('register-password-text-input');
	
	var mailru = '@mail.ru';
	var gmailcom = '@gmail.com';

	input_email_value.style.border = '2px solid lightgreen';
	input_email_value.placeholder = '';
	

}

function check_data() {

	// функция обнуления кнопки 'зарегистрироватсья'

	var input_email_value = document.getElementById('register-email-text-input');
	var input_pass_value = document.getElementById('register-password-text-input');
	var input_repeat_pass_value = document.getElementById('register-repeat-password-text-input');	
	var input_button_reg = document.getElementById('button_register');

	var input_email_value = document.getElementById('register-email-text-input');
	var input_pass_value = document.getElementById('register-password-text-input');
	
	var mailru = '@mail.ru';
	var gmailcom = '@gmail.com';

	input_button_reg.value = 'Зарегистрироваться';
	input_button_reg.style.border = '1px solid gray';
	input_button_reg.style.background = '#efefef';
	input_button_reg.placeholder = '';
}
	



function color_check() {

	// проверка стилей логина и пароля

	var input_email_value = document.getElementById('register-email-text-input');
	var input_pass_value = document.getElementById('register-password-text-input');
	var input_button_reg = document.getElementById('button_register');

	var input_email_value = document.getElementById('register-email-text-input');
	var input_pass_value = document.getElementById('register-password-text-input');
	
	var mailru = '@mail.ru';
	var gmailcom = '@gmail.com';


	if ( (input_pass_value.style.border == '2px solid #fa6565') || (input_email_value.style.border == '2px solid #fa6565') ) {
			
		check_data();

	}

}


///////////// геристрация нового пользователя в базе ///////////////

function email_and_pass_corrected() {

	// пароль и логин верно введены - активация кнопки зарегистрироваться

	var input_email_value = document.getElementById('register-email-text-input');
	var input_pass_value = document.getElementById('register-password-text-input');
	var input_repeat_pass_value = document.getElementById('register-repeat-password-text-input');	
	var input_button_reg = document.getElementById('button_register');

	var input_email_value = document.getElementById('register-email-text-input');
	var input_pass_value = document.getElementById('register-password-text-input');
	
	var mailru = '@mail.ru';
	var gmailcom = '@gmail.com';

	if ( (input_pass_value.style.border == '2px solid lightgreen') && (input_email_value.style.border == '2px solid lightgreen') && (input_repeat_pass_value.style.border == '2px solid lightgreen') ) {
		
		input_button_reg.style.border = '2px solid lightgreen';
		input_button_reg.style.opacity = '1';
	}
	else{

		input_button_reg.style.opacity = '0.5';	
	}
	if ( (input_pass_value.style.border == '2px solid #fa6565') ) {
	
		false_email();

	}

}

function check_emails_on_corrected() {

	// проверка ввода логина

	var input_email_value = document.getElementById('register-email-text-input');
	var input_pass_value = document.getElementById('register-password-text-input');
	var input_repeat_pass_value = document.getElementById('register-repeat-password-text-input');	
	var input_button_reg = document.getElementById('button_register');

	var input_email_value = document.getElementById('register-email-text-input');
	var input_pass_value = document.getElementById('register-password-text-input');
	
	var mailru = '@mail.ru';
	var gmailcom = '@gmail.com';


	if ( (input_email_value.value.trim('@mail.ru') == '') || (input_email_value.value.trim('@gmail.com') == '') )  {

		check_data();

	}
}


function keyup_input_email() {

	// проверка символов логина при вводе

	var input_email_value = document.getElementById('register-email-text-input');
	var input_pass_value = document.getElementById('register-password-text-input');
	var input_repeat_pass_value = document.getElementById('register-repeat-password-text-input');	
	var input_button_reg = document.getElementById('button_register');

	var input_email_value = document.getElementById('register-email-text-input');
	var input_pass_value = document.getElementById('register-password-text-input');
	
	var mailru = '@mail.ru';
	var gmailcom = '@gmail.com';

	
	check_data();	
	check_input_email();
	email_and_pass_corrected();

}


function keyup_input_pass() {

	// проверка символов пароля при вводе

	var input_email_value = document.getElementById('register-email-text-input');
	var input_pass_value = document.getElementById('register-password-text-input');
	var input_repeat_pass_value = document.getElementById('register-repeat-password-text-input');	
	var input_button_reg = document.getElementById('button_register');

	var input_email_value = document.getElementById('register-email-text-input');
	var input_pass_value = document.getElementById('register-password-text-input');
	
	var mailru = '@mail.ru';
	var gmailcom = '@gmail.com';

	check_pass_and_email_on_correct();
	email_and_pass_corrected();
}


function registration() {

	// регистрация нового пользователя в массивы

	var input_email_value = document.getElementById('register-email-text-input');
	var input_pass_value = document.getElementById('register-password-text-input');
	var input_repeat_pass_value = document.getElementById('register-repeat-password-text-input');	
	var input_button_reg = document.getElementById('button_register');

	var input_email_value = document.getElementById('register-email-text-input');
	var input_pass_value = document.getElementById('register-password-text-input');
	
	var mailru = '@mail.ru';
	var gmailcom = '@gmail.com';


	if (input_button_reg.style.opacity == '1') {

		emailsAr.push(input_email_value.value);
		passAr.push(input_pass_value.value);

		input_email_value.value = '';
		input_email_value.style.border = '';
		input_email_value.placeholder = '';

		input_pass_value.value = '';
		input_pass_value.style.border = '';
		input_pass_value.placeholder = '';

		input_repeat_pass_value.value = '';
		input_repeat_pass_value.style.border = '';
		input_repeat_pass_value.placeholder = '';

		input_button_reg.style.opacity = '0.5';
		input_button_reg.style.border = '';

		document.getElementById('register-form-box').style.display = 'none';
		document.getElementById('register-sucsess-form-box').style.display = 'block';

	}
}






/////////////////// вход в аккаунт ////////////////////


function check_login_active() {

	// проверка переменной login_account на active или deactive 

	if(account_status == 1){
		active_account();
	}
	else if(account_status == 0){
		deactive_account();
	}
}

function active_account() {

	let login_button = document.getElementById('button_login');

	let login_input = document.getElementById('login-text-input');
	let pass_input = document.getElementById('password-text-input')

	// есть вход в аккаунт

	document.getElementById('log-reg-button').style.display = 'none';
	document.getElementById('open-account-button').style.display = 'block';
	login_input.style.border = 'none';
	pass_input.style.border = 'none';
	login_input.placeholder = '';
	pass_input.placeholder = '';
	
}

function deactive_account() {

	// нет входа в аккаунт

	document.getElementById('log-reg-button').style.display = 'block';
	document.getElementById('open-account-button').style.display = 'none';

}

function login_check_login_data() {

	// вход в аккаунт с проверкой данных

	let login_button = document.getElementById('button_login');

	let login_input = document.getElementById('login-text-input');
	let pass_input = document.getElementById('password-text-input');

	login_button.onclick = function() {
		if ( ( emailsAr.includes(login_input.value) && (passAr.includes(pass_input.value.trim()) && ( emailsAr.indexOf(login_input.value) === passAr.indexOf(pass_input.value) )))) {
			
			// данные ведены верно!
			// почти всё готово :)
			// осталось немного дописать код
			
			login_input.style.border = 'none';
			pass_input.style.border = 'none';
			login_input.placeholder = '';
			pass_input.placeholder = '';
			email = login_input.value;
			pass = pass_input.value;
			account_status = 1;
			account_panel();
			login_input.value = '';
			pass_input.value = '';

			document.getElementById('logreg-main-form-id').style.display = 'none';

		}

		else if ( ( (emailsAr.includes(login_input.value) == false) || (passAr.includes(pass_input.value.trim()) == false ) || ( emailsAr.indexOf(login_input.value) !== passAr.indexOf(pass_input.value) ) ) ) {
			
			// ошибка! неправильно введены данный при входе в аккаунт!

			login_input.style.border = '2px solid #fa6565';
			login_input.placeholder = 'неразборчивый логин';
			pass_input.style.border = '2px solid #fa6565';
			pass_input.placeholder = 'неверный пароль';
		}
	}
}

function account_panel() {

	// панель аккаунта
	let name_input_account = document.getElementById('name-name-input');
	let email_text_name = document.getElementById('email-account-text-email');
	let pass_text_name = document.getElementById('pass-account-text-pass');

	email_text_name.value = email;
	pass_text_name.value = pass;
	
}

// выход из аккаунта
function leave_account() {
	account_status = 0;
	email_text_name.value = '';
	pass_text_name.value = '';
	pass = '';
	email = '';
}





