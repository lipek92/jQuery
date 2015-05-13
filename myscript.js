$(document).ready(function (){

	$("#name").validateText( {pattern: /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłóńśźż]*$/} );
	$("#surname").validateText();
	$("#email").validateEmail();
	
});