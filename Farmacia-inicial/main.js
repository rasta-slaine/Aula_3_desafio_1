
let section = document.getElementById('section');

function novoMed(){

    let nomeMed = document.getElementById('fName');
    let qtdMed = document.getElementById('fQtd');
    let UnidMed = document.getElementById('fUnid');

    if(nomeMed.value == 0 ||qtdMed.value == 0 || UnidMed.value == 0 ){
        alert('Você precisa preencher todos os campos para cadastrar o medicamento')
    }else {
    let nomeMed = document.getElementById('fName').value;
    let qtdMed = document.getElementById('fQtd').value;
    let UnidMed = document.getElementById('fUnid').value;
    section.innerHTML = ` <div class="modal-h">
                          <h2>Novo medicamento adicionado!</h2>  <br>
                          <div class="modal">
                          <p>${nomeMed}<p><br>
                          <p>${qtdMed} unidades disponíveis<p> <br>
                          <p>${UnidMed} reais por unidade<p> <br>
                          </div>
                          <button  class="modal-btn" type="button" onclick="voltar()">Voltar</button>
                          </div> `
}}

function voltar(){
    window.document.location.href="index.html"
}