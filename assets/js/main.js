var navi = document.getElementById("navegadorId");
    	
window.addEventListener("scroll", function(){
	
	if (document.body.scrollTop > 100) {
   	 	navi.classList.add('cambiaNav');
    } else {
    	navi.classList.remove('cambiaNav');
    }
});


var nombre = document.getElementById("nameId");
var email = document.getElementById("emailId");
var telefono = document.getElementById("phoneId");
var mensaje = document.getElementById("messageId");

document.getElementById("contact-button").addEventListener("click", function(val){

		event.preventDefault()

		if(nombre.value.charAt(0) != nombre.value.charAt(0).toUpperCase() || nombre.value == ""){
			
			nombre.classList.add('showInput');
		}else{
			nombre.classList.remove('showInput');
		}

		if(email.value.indexOf("@") == -1){
			email.classList.add('showInput');
		}else{
			email.classList.remove('showInput');
		}

		if(telefono.value == "" || isNaN(telefono.value)){
			telefono.classList.add('showInput');
		}else{
			telefono.classList.remove('showInput');
		}

		if(mensaje.value == ""){
			mensaje.classList.add('showInput');
		}else{
			mensaje.classList.remove('showInput');
		}


		if(nombre.value.charAt(0) == nombre.value.charAt(0).toUpperCase() && nombre.value != ""
			&& email.value.indexOf("@") != -1 && mensaje.value != "" && telefono.value != "" && !isNaN(telefono.value)){
			nombre.value = "";
			email.value = "";
			mensaje.value = "";
			alert("Datos ingresados");
		}

});
/*
console.log(Array.from(document.getElementsByClassName("nuevoInput")).length)
document.getElementById("numberId").addEventListener("focus", function(){
	//si solo hay un input (phone) entonces que cree los demas inputs
	if(Array.from(document.getElementsByClassName("nuevoInput")).length == 1){
		var telefono = document.getElementById("numberId");
		var nombre = document.createElement("input");
		var email = document.createElement("input");
		var city = document.createElement("input");

		nombre.setAttribute("id", "nameId");
		nombre.setAttribute("placeholder", "Name");
		nombre.setAttribute("class", "nuevoInput hideInput");
		email.setAttribute("id", "emailId");
		email.setAttribute("placeholder", "Email");
		email.setAttribute("class", "nuevoInput hideInput");
		city.setAttribute("id", "cityId");
		city.setAttribute("placeholder", "City");
		city.setAttribute("class", "nuevoInput hideInput");

		document.getElementById("inputsId").appendChild(nombre);
		document.getElementById("inputsId").appendChild(email);
		document.getElementById("inputsId").appendChild(city);


		document.getElementById("becomeButtonId").addEventListener("click", function(val){

		if(telefono.value == "" || isNaN(telefono.value)){
			telefono.classList.add('showInput');
		}else{
			telefono.classList.remove('showInput');
		}

		if(nombre.value.charAt(0) != nombre.value.charAt(0).toUpperCase() || nombre.value == ""){
			
			nombre.classList.add('showInput');
		}else{
			nombre.classList.remove('showInput');
		}

		if(email.value.indexOf("@") == -1){
			email.classList.add('showInput');
		}else{
			email.classList.remove('showInput');
		}

		if(city.value.charAt(0) != city.value.charAt(0).toUpperCase() || city.value == ""){
			city.classList.add('showInput');
		}else{
			city.classList.remove('showInput');
		}

		});

	}
});

*/