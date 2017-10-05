document.addEventListener('DOMContentLoaded', function() {

let signin = document.querySelector(".signin") //had to define both modal and sign in button , so we could define a function where we display modal on signin->
let modal = document.querySelector(".modal")
let close = document.querySelector(".close")
let submit =document.querySelector(".submit")
let username=document.querySelector("#user")
let password = document.querySelector("#pass")

	signin.addEventListener('click',	function() {
			modal.style.display = 'block'
		})

	close.addEventListener('click', function() {
			modal.style.display = 'none'
		})

	submit.addEventListener('click',function(){


	})

});
