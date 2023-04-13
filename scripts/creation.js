var button = document.querySelector("#button")

document.querySelector('#button').addEventListener('click',function (){
    var url = document.querySelector('#url').value

    //Aqui ele muda o nome do botão, indicando que o qrcode foi gerado
    button.innerText = "QRCode Gerado";

    if(!url){
        alert('Insira um texto ou Link para gerar QRCode');
        //Ele recarrega a página, caso não tiver nada no input
        window.location.reload(true);
        return;
    }

    //Aqui ele define o vazio na div qrcode
    document.querySelector('#qrcode').innerHTML = ''

    //Aqui é a formação da estrutura do qrcode
    var qrcode = new QRCode(document.querySelector('#qrcode'), {
        text: `${url}`,
        width: 200,
        height: 200,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H

    })
})