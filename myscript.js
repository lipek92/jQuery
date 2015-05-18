$(document).ready(function (){

	$("#name").validateText( {pattern: /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłóńśźż]*$/} );
	$("#surname").validateText();
	$("#email").validateEmail();
	
	$("#name2").validateText( {pattern: /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłóńśźż]*$/} );
	$("#surname2").validateText();
	$("#email2").validateEmail();
	
	$(".test").validateTest();
	
});
