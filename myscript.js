$(document).ready(function (){

	$("#surname").validateText();
	$("#name").validateText( {pattern: /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłóńśźż]*$/} );

	
});