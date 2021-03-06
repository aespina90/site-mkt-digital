/*
	Util.JS
	Último update: 01/01/2017
*/
toastr.options = {
	  "closeButton": false,
	  "debug": false,
	  "newestOnTop": true,
	  "progressBar": true,
	  "positionClass": "toast-bottom-center",
	  "preventDuplicates": false,
	  "onclick": null,
	  "showDuration": "300",
	  "hideDuration": "1000",
	  "timeOut": "3000",
	  "extendedTimeOut": "1000",
	  "showEasing": "swing",
	  "hideEasing": "linear",
	  "showMethod": "fadeIn",
	  "hideMethod": "fadeOut"
}

function getEnderecoServidor() {
    //var storage = window.localStorage;
    //var value = storage.getItem(key); // Pass a key name to get its value.
    //storage.setItem(key, value) // Pass a key name and its value to add or update that key.
    //storage.removeItem(key) // Pass a key name to remove that key from storage.
    var storage = window.localStorage;
    var enderecoServidor = storage.getItem("endereco-servidor"); // Pass a key name to get its value.
    return enderecoServidor;
}

function setEnderecoServidor(enderecoServidor) {
    var storage = window.localStorage;
    storage.setItem("endereco-servidor", enderecoServidor);
}
function guardarUsuario(usuario){
    var storage = window.localStorage;
    storage.setItem("usuario", JSON.stringify(usuario));
}
function getUsuario(){
    var storage = window.localStorage;
    var usuario = JSON.parse(storage.getItem("usuario")); // Pass a key name to get its value.
    return usuario;
}
function myToast(tipo, mensagem) {
	if(tipo == "success") {
		toastr.success(mensagem);
	} else if(tipo == "warning") {
		toastr.warning(mensagem);
	} else if(tipo == "info") {
		toastr.info(mensagem);
	} else if(tipo == "error") {
		toastr.error(mensagem);
	}
}

function myToastNoHide(tipo, mensagem) {
	myToast(tipo, mensagem);
}

function toastSuccess(mensagem) {
    myToast("success", mensagem);
}

function toastInfo(mensagem) {
    myToast("info", mensagem);
}

function toastInfoNoHide(mensagem) {
    myToastNoHide("info", mensagem);
}

function toastError(mensagem) {
    myToast("error", mensagem);
}

function toastWarning(mensagem) {
    myToast("warning", mensagem);
}

function validarCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g,'');

    if(cnpj == '') return false;

    if (cnpj.length != 14)
        return false;

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;

    // Valida DVs
    tamanho = cnpj.length - 2;
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
          return false;

    return true;

}

function servidorGZCloud(cnpj){
    return cnpj+".gzcloud.com.br";
}

function enderecoFormatado(){
    var endereco = getEnderecoServidor();
    if(validarCNPJ(endereco)){
        return endereco+".gzcloud.com.br";
    }else{
        return endereco;
    }
}

function obterDiasSemana(tipo){
	if(tipo == "cp") { // CP = RETORNA DIAS COMPLETO
		return ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
	} else if(tipo == "sc") { // SC = RETORNA DIAS SUPER CURTO
		return ["D", "S", "T", "Q", "Q", "S", "S"];
	} else if(tipo == "ct") { // CT = RETORNA DIAS CURTO
		return ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
	}
}

function obterNomeMeses(tipo){
	if(tipo == 'cp') {
		return ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
	} else if(tipo == 'ct') {
		return ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
	}
}

function guardarMeta(meta){
    var storage = window.localStorage;
    storage.setItem("meta", JSON.stringify(meta));
}

function obterMeta(){
    var storage = window.localStorage;
    var meta = JSON.parse(storage.getItem("meta"));
    return meta;
}

function guardarInicializacao(loja, tipo){
    var storage = window.localStorage;
    storage.setItem("loja-init", JSON.stringify(loja));
	storage.setItem("tipo-init", JSON.stringify(tipo));
}

function obterInicializacao(obj){
    var storage = window.localStorage;
	if(obj == "loja"){
		return JSON.parse(storage.getItem("loja-init"));
	} else if(obj == "tipo"){
	    return JSON.parse(storage.getItem("tipo-init"));
	}
}

function obterDataAtual(){
	var data = new Date();
	return String(("0" + data.getDate()).slice(-2)) + "/" + ("0" + (data.getMonth() + 1)).slice(-2) + "/" + String(data.getFullYear());
}

function obterDias(quantidade){
	return moment().subtract('days', quantidade).format('DD/MM/YYYY');
}

function valorEmReais(valor){
	return valor.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
}

function checarVazio(valor){
    return !valor || !/[^\s]+/.test(valor);
}

function checarNegativo(valor){
	if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58)
      || e.keyCode == 8)) {
        return false;
    }
}

$(function(){
	$("#txt-servidor").text(enderecoFormatado());
});

function guardarComanda(com){
    var storage = window.localStorage;
    storage.setItem("comanda", JSON.stringify(com));
}

function obterComanda(){
    var storage = window.localStorage;
	return JSON.parse(storage.getItem("comanda"));
}

function sleep(milliseconds) {
	  var start = new Date().getTime();
	  for (var i = 0; i < 1e7; i++) {
	    if ((new Date().getTime() - start) > milliseconds){
	      break;
	    }
	  }
	}
