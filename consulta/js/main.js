var dicionario = [{"titulo" : "Escritura pública de Compra e Venda",
				   "prazo" : "30 dias", 
				   "documento": "Escritura",
				   "documento2": "INCRA e ITR (caso rural)"},
			      {"titulo" : "Cédulo de Crédito Rural Pignoratícia",
			       "prazo" : "3 dias", 
			       "documento": "Apenas a cédula"},
			      {"titulo" : "Formal de Partilha",
			       "prazo" : "30 dias", 
			       "documento": "Inicial",
			   	   "documento2": "Negativas Estaduais, Federais e Municipais",
			   	   "documento3": "Guia de ITCD",
			   	   "documento4": "Plano de Partilha",
			   	   "documento5": "Homologação",
			   	   "documento6": "Encerramento",
			   	   "documento7": "INCRA e ITR (caso rural)"},
			   	  {"titulo" : "Contratos de Alienação Fiduciaria",
			   	   "prazo" : "7 dias", 
			       "documento": "Vias do Contrato",
			   	   "documento2": "Negativas da Justiça Estadual, Federal e Municipal"},
			   	  {"titulo" : "Incorporação",
			   	   "prazo" : "30 dias", 
			       "documento": "Memorial de Incorporação",
			   	   "documento2": "Negativas Estaduais, Federais, Municipais, Trabalhista, Criminal, Protesto (período de 10 anos) e Cívil",
			   	   "documento3": "Jogo de Plantas (baixa, alta, elétrica, hidráulica, cortes e fachada)",
			   	   "documento4": "Requerimento de Incorporação",
			   	   "documento5": "Convenção de Condomínio",
			   	   "documento6": "Atestado de Idoniedade Financeira",
			   	   "documento7": "NBR com reconhecimento de firma"},
			   	  {"titulo" : "Penhora",
			   	   "prazo" : "30 dias", 
			       "documento": "Mandado de Registro de Penhora, Termo de Penhora ou Ofício",
			   	   "documento2": "Obrigatório número da Matrícula",
			   	   "documento3": "Obrigatório Valor da Ação"},
			   	  {"titulo" : "Art 828",
			   	   "prazo" : "30 dias", 
			       "documento": "Certidão para fins de Averbação",
			   	   "documento2": "Requerimento contendo o nº da matrícula, assinado pelo autor ou advogado c/ a procuração para representar o autor"},
			   	  {"titulo" : "Carta de Arrematação/Adjudicação",
			   	   "prazo" : "30 dias", 
			       "documento": "Inicial",
			   	   "documento2": "Auto de Arrematação",
			   	   "documento3": "Ata de Leilão (se Carta for referente a contrato de compra e venda)",
			   	   "documento4": "Qualificação do Arrematante/Adjudicante",
			   	   "documento5": "Guia de ITBI, quitada (se morte ITCD)",
			   	   "documento6": "INCRA e ITR (caso rural)",
			   	   "documento7": "Encerramento"},
			   	  {"titulo" : "Integralização de Capital Social", 
			   	   "prazo" : "30 dias",
			       "documento": "Requerimento com firma reconhecida, se casado, cônjuge também tem que assinar",
			   	   "documento2": "Certidão da Junta Comercial Atualizada",
			   	   "documento3": "Se PJ apresentar CND de tributos federais e do INSS",
			   	   "documento4": "Qualificação do Arrematante",
			   	   "documento5": "Guia de ITBI, quitada",
			   	   "documento6": "INCRA e ITR (caso rural)"},
			   	  {"titulo" : "Averbação de Benfeitoria",
			   	   "prazo" : "15 dias (caso PMCMV - 7 dias) ", 
			       "documento": "Certidão Negativa de Debitos - Receita Federal - Referente a obra",
			   	   "documento2": "Requerimento assinado e reconhecida firma",
			   	   "documento3": "Habite-se"},
			   	  {"titulo" : "Desmembramento",
			   	   "prazo" : "30 dias", 
			       "documento": "Mapa aprovado pela prefeitura e assinado pelos confrontantes com reconhecimento de firma em todos que assinaram",
			   	   "documento2": "Requerimento assinado e reconhecida firma",
			   	   "documento3": "Memorial Descritivo",
			   	   "documento4": "ART paga e assinada",
			   	   "documento5": "Termo de Anuência da Metroplan (se urbano)",
			   	   "documento6": "INCRA e ITR (caso rural)"},
			   	  {"titulo" : "Promessa de Compra e Venda",
			   	   "prazo" : "30 dias", 
			       "documento": "Contrato",
			   	   "documento2": "Assinado por todas as parte mais duas testemunhas e reconhecido firma de todos",
			   	   "documento6": "INCRA e ITR (caso rural)"}
			   	   ];

window.onload = function () {
	for (var a = dicionario.length - 1; a >= 0; a--) {
			var para = document.createElement("option");
			var node = document.createTextNode(dicionario[a].titulo);
			para.appendChild(node);
			var element = document.getElementById("dlNomes");
			element.appendChild(para);
	}
}

function DocList(){
	var resBus = $('#busca').val();
	var praOndeVai = document.getElementById("titH2");	
	for(var i = dicionario.length - 1; i >= 0 ;i--){
		var comp = dicionario[i].titulo;
		if (resBus === comp) { 
	 		praOndeVai.innerHTML = dicionario[i].titulo + " - " + dicionario[i].prazo;
	 		$('#tabela').html("<tr><td>" + dicionario[i].documento + "</td></tr>" + 
	 						  "<tr><td>" + dicionario[i].documento2 + "</td></tr>"+ 
	 						  "<tr><td>" + dicionario[i].documento3 + "</td></tr>"+ 
	 						  "<tr><td>" + dicionario[i].documento4 + "</td></tr>"+ 
	 						  "<tr><td>" + dicionario[i].documento5 + "</td></tr>"+ 
	 						  "<tr><td>" + dicionario[i].documento6 + "</td></tr>"+ 
	 						  "<tr><td>" + dicionario[i].documento7 + "</td></tr>");
	 		$('td:contains(undefined)', '#tabela').hide();

		 }
	}		
}

