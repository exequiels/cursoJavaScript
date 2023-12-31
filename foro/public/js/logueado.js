$(document).ready(function() {
    const identificado = !!localStorage.getItem('userId');
    const responderPost = $('#responderPost td');

    if (identificado) {
        let paraLogueo = `<tr class="p-3"><td class="py-3 px-3">Ya estas logueado..</td></tr>`;
        let paraRegistro = `Si quieres crear otra cuenta, deslogueate primero..`;        
        $('#loguearse').html(paraLogueo);
        $('#registrarse').html(paraRegistro);
    } 

    if (!identificado) {
        let paraPostear = `<tr class="p-3"><td class="py-3 px-3">Logueate antes de postear..</td></tr>`;
        let paraRespuesta = ``;
        $('#postear').html(paraPostear);
        $('#respuesta').html(paraRespuesta);
        responderPost.hide();
    }
    
});