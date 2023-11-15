window.onload = function(){

	check_input_email();	
	email_and_pass_corrected();
	check_pass_and_email_on_correct();
	check_repeat_pass();
	
}






function close_form_price() {
	var close_button = document.getElementsByClassName('exit-button-form');
	for(let i = 0; i < close_button.length; i++){

		close_button[i].onclick = function() {
			document.getElementById('main-form-price').style.display = 'none';
			document.getElementById('box-fon-form-wedding').style.display = 'none';
			document.getElementById('box-fon-form-family').style.display = 'none';
		}
	}	
}

function open_form_price() {

	// wedding
	var open_button_wedding = document.getElementById('input_button_open_form_wedding');

		open_button_wedding.onclick = function() {
			document.getElementById('main-form-price').style.display = 'block';
			document.getElementById('box-fon-form-wedding').style.display = 'block';
		}

	// family 
	var open_button_family = document.getElementById('input_button_open_form_family');

		open_button_family.onclick = function() {
			document.getElementById('main-form-price').style.display = 'block';
			document.getElementById('box-fon-form-family').style.display = 'block';
		}
}


function logreg_open() {
	var open_button = document.getElementsByClassName('logreg_btn');
	for(let i = 0; i < open_button.length; i++){

		open_button[i].onclick = function() {

			var input_email_value = document.getElementById('register-email-text-input');
			var input_pass_value = document.getElementById('register-password-text-input');
			var input_button_reg = document.getElementById('button_register');
			var input_repeat_pass_value = document.getElementById('register-repeat-password-text-input');
			var login_input = document.getElementById('login-text-input');
			var pass_input = document.getElementById('password-text-input');	

			document.getElementById('logreg-main-form-id').style.display = 'block';
			document.getElementById('register-form-box').style.display = 'none';
			document.getElementById('login-form-box').style.display = 'block';

			document.getElementById('register-sucsess-form-box').style.display = 'none';

			input_email_value.value = '';
			input_email_value.style.border = '';
			input_email_value.style.background = '#efefef';
			input_email_value.placeholder = '';

			input_pass_value.value = '';
			input_pass_value.style.border = '';
			input_pass_value.style.background = '#efefef';
			input_pass_value.placeholder = '';

			input_repeat_pass_value.value = '';
			input_repeat_pass_value.style.border = '';
			input_repeat_pass_value.style.background = '#efefef';
			input_repeat_pass_value.placeholder = '';

			input_button_reg.value = 'Зарегистрироваться';
			input_button_reg.style.border = '1px solid gray';
			input_button_reg.style.background = '#efefef';
			input_button_reg.placeholder = '';

			login_input.style.border = 'none';
			pass_input.style.border = 'none';
			login_input.placeholder = '';
			pass_input.placeholder = '';
		}
	}	
}

function close_form_logreg() {
	var close_button = document.getElementsByClassName('exit-button-form-logreg');
	for(let i = 0; i < close_button.length; i++){

		close_button[i].onclick = function() {

			var input_email_value = document.getElementById('register-email-text-input');
			var input_pass_value = document.getElementById('register-password-text-input');
			var input_button_reg = document.getElementById('button_register');
			var input_repeat_pass_value = document.getElementById('register-repeat-password-text-input');	
			var login_input = document.getElementById('login-text-input');
			var pass_input = document.getElementById('password-text-input');

			document.getElementById('logreg-main-form-id').style.display = 'none';
			document.getElementById('logreg-form-box').style.display = 'block';

			document.getElementById('register-email-text-input').value = '';
			document.getElementById('register-password-text-input').value = '';

			document.getElementById('login-text-input').value = '';
			document.getElementById('password-text-input').value = '';

			document.getElementById('register-sucsess-form-box').style.display = 'none';

			input_email_value.value = '';
			input_email_value.style.border = '';
			input_email_value.style.background = '#efefef';
			input_email_value.placeholder = '';

			input_pass_value.value = '';
			input_pass_value.style.border = '';
			input_pass_value.style.background = '#efefef';
			input_pass_value.placeholder = '';

			input_repeat_pass_value.value = '';
			input_repeat_pass_value.style.border = '';
			input_repeat_pass_value.style.background = '#efefef';
			input_repeat_pass_value.placeholder = '';

			input_button_reg.value = 'Зарегистрироваться';
			input_button_reg.style.border = '1px solid gray';
			input_button_reg.style.background = '#efefef';
			input_button_reg.placeholder = '';

			login_input.style.border = 'none';
			pass_input.style.border = 'none';
			login_input.placeholder = '';
			pass_input.placeholder = '';
		}
	}	
}

function register_form() {
	var register_button = document.getElementById('button_register_account');
	register_button.onclick = function() {

		var input_email_value = document.getElementById('register-email-text-input');
		var input_pass_value = document.getElementById('register-password-text-input');
		var input_button_reg = document.getElementById('button_register');
		var input_repeat_pass_value = document.getElementById('register-repeat-password-text-input');	
		var login_input = document.getElementById('login-text-input');
		var pass_input = document.getElementById('password-text-input');

		document.getElementById('logreg-form-box').style.display = 'none';
		document.getElementById('register-form-box').style.display = 'block';

		document.getElementById('login-text-input').value = '';
		document.getElementById('password-text-input').value = '';

		document.getElementById('register-sucsess-form-box').style.display = 'none';

		input_email_value.value = '';
		input_email_value.style.border = '';
		input_email_value.style.background = '#efefef';
		input_email_value.placeholder = '';

		input_pass_value.value = '';
		input_pass_value.style.border = '';
		input_pass_value.style.background = '#efefef';
		input_pass_value.placeholder = '';

		input_repeat_pass_value.value = '';
		input_repeat_pass_value.style.border = '';
		input_repeat_pass_value.style.background = '#efefef';
		input_repeat_pass_value.placeholder = '';

		input_button_reg.value = 'Зарегистрироваться';
		input_button_reg.style.border = '1px solid gray';
		input_button_reg.style.background = '#efefef';
		input_button_reg.placeholder = '';

		login_input.style.border = 'none';
		pass_input.style.border = 'none';
		login_input.placeholder = '';
		pass_input.placeholder = '';
	}
}

function login_form() {
	var login_button = document.getElementById('button_login_account');
	login_button.onclick = function() {

		var input_email_value = document.getElementById('register-email-text-input');
		var input_pass_value = document.getElementById('register-password-text-input');
		var input_button_reg = document.getElementById('button_register');
		var input_repeat_pass_value = document.getElementById('register-repeat-password-text-input');
		var login_input = document.getElementById('login-text-input');
		var pass_input = document.getElementById('password-text-input');	

		document.getElementById('register-form-box').style.display = 'none';
		document.getElementById('logreg-form-box').style.display = 'block';

		document.getElementById('register-email-text-input').value = '';
		document.getElementById('register-password-text-input').value = '';

		document.getElementById('register-sucsess-form-box').style.display = 'none';

		input_email_value.value = '';
		input_email_value.style.border = '';
		input_email_value.style.background = '#efefef';
		input_email_value.placeholder = '';

		input_pass_value.value = '';
		input_pass_value.style.border = '';
		input_pass_value.style.background = '#efefef';
		input_pass_value.placeholder = '';

		input_repeat_pass_value.value = '';
		input_repeat_pass_value.style.border = '';
		input_repeat_pass_value.style.background = '#efefef';
		input_repeat_pass_value.placeholder = '';

		input_button_reg.value = 'Зарегистрироваться';
		input_button_reg.style.border = '1px solid gray';
		input_button_reg.style.background = '#efefef';
		input_button_reg.placeholder = '';

		login_input.style.border = 'none';
		pass_input.style.border = 'none';
		login_input.placeholder = '';
		pass_input.placeholder = '';
	}
}

function mouse_down_on_button_check_logreg() {
	document.getElementById('button_register').style.background = '#cfcfcf';
}
function mouse_up_on_button_check_logreg() {
	document.getElementById('button_register').style.background = '#efefef';
}

function open_login_panel_close_sucsess_reg() {

	document.getElementById('exit-sucsess-logreg-button').onclick = function() {

		document.getElementById('register-sucsess-form-box').style.display = 'none';
		document.getElementById('logreg-main-form-id').style.display = 'block';
		document.getElementById('logreg-form-box').style.display = 'block';

	}
}


function form_account() {
	// форма аккаунта
	
	var account_button = document.getElementById('button-open-account');
	var listener_account_fon_panel = document.getElementById('form-account-panel-main');

	account_button.onclick = function() {
		document.getElementById('form-account-panel-main').style.display = 'block';
	}
	
}

function close_account_form() {
	// закрытие формы с информацией об аккаунте

	var account_button = document.getElementById('button-open-account');
	var listener_account_fon_panel = document.getElementById('form-account-panel-main');

	listener_account_fon_panel.style.display = 'none';
}







