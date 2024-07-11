function sendToWhatsapp() {
    let number = "+542213641259";

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    var url = "https://wa.me/" + number + "?text=" +
              "Nombre: " + name + "%0a" +
              "Email: " + email + "%0a" +
              "Asunto: " + subject + "%0a" +
              "Mensaje: " + message + "%0a%0a";
    window.open(url, '_blank').focus();
  }