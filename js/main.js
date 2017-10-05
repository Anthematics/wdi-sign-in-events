document.addEventListener('DOMContentLoaded', function() {

let signin = document.querySelector(".signin") //had to define both modal and sign in button , so we could define a function where we display modal on signin->
let modal = document.querySelector(".modal")
let close = document.querySelector(".close")
let submit =document.querySelector(".submit")
let username=document.querySelector("#user")
let password = document.querySelector("#pass")

username.className = 'error'
password.ClassName = 'error'

	signin.addEventListener('click',	function() {
			modal.style.display = 'block'
		});

	close.addEventListener('click', function() {
			modal.style.display = 'none'
		});

	password.addEventListener('click',function(){
		password.className = 'error'
	});

	username.addEventListener('click',function(){
		username.className = 'error'
	});
});
