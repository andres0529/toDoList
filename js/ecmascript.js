var mensajeTarea = document.querySelector('#agregar input');
var buttonAdd= document.querySelector('#agregar .addTask');
var buttonDelete= document.querySelector('#agregar .deleteTask');
var section = document.getElementById('listaTareas');
var i=0;

buttonAdd.addEventListener('click', ()=>{
	let texto = mensajeTarea.value;
	if (texto!="" ) {

		let nodeLi = document.createElement("LI"); //Creo el nodo LI 
		nodeLi.setAttribute("class","list-group-item"); //Le agrego la clase
		nodeLi.setAttribute("id",i);

		

		let nodeInput = document.createElement("INPUT");//Creo el nodo Input 
		nodeInput.setAttribute("class","form-check-input me-1");//Le agrego la clase
		nodeInput.setAttribute("type","checkbox");//Le agrego la clase
		nodeInput.style.marginLeft = -1+'rem'; //Le agrego estilo  de margen izquierdo al boxchecked

		let nodeSpam = document.createElement('SPAM'); //creo nodo SPAM
		nodeSpam.innerHTML = texto; //Agrego el contenido de la caja dentro del SPAM

		nodeLi.appendChild(nodeInput); //    input--->Li    Agrego el nodo input al nodo padre LI 
		nodeLi.appendChild(nodeSpam);
		section.appendChild(nodeLi); //li ---> UL Agrego el nodo Li al nodo padre UL
		i++;

		mensajeTarea.value = ""; //Borro el contenido la caja de texto
	}
});

document.addEventListener('keypress', (target)=>{
	let texto = mensajeTarea.value;
	// console.log('Tecla: ', target)

	if (target.keyCode == 13){
		if (texto!="" ) {

			let nodeLi = document.createElement("LI"); //Creo el nodo LI 
			nodeLi.setAttribute("class","list-group-item"); //Le agrego la clase
			nodeLi.setAttribute("id",i);

			

			let nodeInput = document.createElement("INPUT");//Creo el nodo Input 
			nodeInput.setAttribute("class","form-check-input me-1");//Le agrego la clase
			nodeInput.setAttribute("type","checkbox");//Le agrego la clase
			nodeInput.style.marginLeft = -1+'rem'; //Le agrego estilo  de margen izquierdo al boxchecked

			let nodeSpam = document.createElement('SPAM'); //creo nodo SPAM
			nodeSpam.innerHTML = texto; //Agrego el contenido de la caja dentro del SPAM

			nodeLi.appendChild(nodeInput); //    input--->Li    Agrego el nodo input al nodo padre LI 
			nodeLi.appendChild(nodeSpam);
			section.appendChild(nodeLi); //li ---> UL Agrego el nodo Li al nodo padre UL
			i++;

			mensajeTarea.value = ""; //Borro el contenido la caja de texto
		}
	}
});




buttonDelete.addEventListener('click', ()=>{
	let lis = document.querySelectorAll('#listaTareas li');

	lis.forEach((li,index)=>{
		if (lis[index].children[0].checked){ //Estando parados en li, revisamos si el hijo 0, tiene en su posición 0, activo checked (0 es el input y 1 es el SPAM)

			lis[index].parentNode.removeChild(li);
		}
	})
});
