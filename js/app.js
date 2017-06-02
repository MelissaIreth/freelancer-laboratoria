/*
 * Archivo principal de JS
 */

 /*MODAL, AGRANDA FOTO, APARECE "X" PARA CERRARLA*/
 (function manin(){
 	var box = Array.from(document.getElementsByClassName("caja"));
 	var modal = document.getElementById("row-modal");
 	var bodyModal, close ,i;

 	box.forEach(function(boxes){
 		boxes.addEventListener("click", function(){
 			modal.innerHTML = "";
 			bodyModal = document.createElement("div");
 			bodyModal.classList.add("body-modal");
 			bodyModal.innerHTML = boxes.innerHTML;
 			modal.appendChild(bodyModal);
 			modal.classList.remove("hide");
 			close = document.createElement("div");
 			close.classList.add("close");
 			i = document.createElement("i");
 			i.classList.add("fa", "fa-times-circle")
 			i.setAttribute("aria-hidden", "true")
 			close.appendChild(i);
 			modal.appendChild(close);
 			close.addEventListener("click", function(){
 				modal.classList.add("hide");
 			});
 		});
 	});
 })();

/*VALIDACION FORMULARIO CON INFORMACION DE ERROR*/

	var send = document.getElementById("send");

	send.addEventListener("click",function(){

	var name = document.getElementById("name").value;
	var mail = document.getElementById("mail"). value;
	var phone = document.getElementById("phone").value;
	var msg = document.getElementById("msg").value;

	if(name == ""){
		document.getElementById("error-name").innerHTML = " * Please enter your name";
 	}else if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(mail))){
 		document.getElementById("error-mail").innerHTML = " * Please enter your Email, correctly";
 	}else if( !(/^\d{9}$/.test(phone)) ){
 		document.getElementById("error-phone").innerHTML = " * You must add your phone number, 9 digits";
 	}else if(msg == ""){
 		document.getElementById("error-msg").innerHTML = " * Leave us a message";
	}else{
		document.getElementById("name").value ="";
		document.getElementById("mail").value = "";
		document.getElementById("phone").value = "";
		document.getElementById("msg").value = "";
		document.getElementById("thanks").innerHTML = "We will contact you soon :)";		
	}	
});

/*EVENTO SCROLL PARA QUE AGREGE LA CLASE CON COLOR DE FONDO A LA SECCION ESPECIFICA
ESTÁN TODAS ALINEADAS A LOS PX CORRESPONDIENTES PERO SÓLO ME RECONOCE LA ULTIMA, 
PUEDEN PROBARLAS POR SEPARADO Y FUNCIONAN :c */

(function scrollP(){

	window.onscroll = function(){
		if (document.body.scrollTop > 500 && document.body.scrollTop < 1400){
			document.getElementById("scrollerP").className = "scrolled";
		}else{
			document.getElementById("scrollerP").className = ""
		}
	}
})();

(function scrollA(){

	window.onscroll = function(){
		if (document.body.scrollTop > 1300 && document.body.scrollTop < 2000){
			document.getElementById("scrollerA").className = "scrolled";
		}else{
			document.getElementById("scrollerA").className = ""
		}
	}

})();

(function scrollC(){

		window.onscroll = function(){
		if (document.body.scrollTop > 1900 && document.body.scrollTop < 2400){
			document.getElementById("scrollerC").className = "scrolled";
		}else{
			document.getElementById("scrollerC").className = ""
		}
	}
})();