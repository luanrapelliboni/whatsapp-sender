function startConversation() {
    const URL = 'https://api.whatsapp.com/send?1=pt_BR&phone=55';
    var phone =  document.getElementById('phone').value;
    console.log(phone.length);
    if (phone.length == 15)
        window.open(URL + ('' + phone).replace(/\D/g, ''));
    else 
        alert('phone must be typed!');
}

$(document).ready(function(){
    $('.phone').mask('(00) 00000-0000');
});