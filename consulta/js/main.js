var dicionario = [{"titulo" : "Escritura pública de Compra e Venda", 
				   "documento": "Apenas a escritura"},
			      {"titulo" : "Escritura pública de Compra e Venda2", 
			       "documento": "teste", 
			       "documento2" : "outro teste"}];

window.onload = function () {
	for (var a = dicionario.length - 1; a >= 0; a--) {
			var para = document.createElement("option");
			var node = document.createTextNode(dicionario[a].titulo);
			para.appendChild(node);
			var element = document.getElementById("dlNomes");
			element.appendChild(para);
	}
}

function teste(){
	var resBus = $('#busca').val();
	var praOndeVai = document.getElementById("titH2");	
	for(var i = dicionario.length - 1; i >= 0 ;i--){
		var comp = dicionario[i].titulo;
		if (resBus === comp) { 
	 		praOndeVai.innerHTML = dicionario[i].titulo;
	 		$('#tabela').html("<tr><td>" + dicionario[i].documento + "</td></tr>" + 
	 						"<tr><td>" + dicionario[i].documento2 + "</td></tr>");

		 }
	}		
}

