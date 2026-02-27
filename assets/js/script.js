//MISE EN PLACE D'UNE FONCTION JS QUI RECUPERE LES INFORMAITONS SAISIES PAR L'UTILISATEUR ET LES ENVOIE VERS MON WHATSAPP

document.getElementById('sendWhatsappMessageBtn').addEventListener('click', function(event) {
    event.preventDefault();
    
    const name = document.querySelector('input[placeholder="Votre nom"]').value.trim();
    const email = document.querySelector('input[placeholder="Votre email"]').value.trim();
    const subject = document.querySelector('input[placeholder="Sujet"]').value.trim();
    const message = document.querySelector('textarea[placeholder="Votre message"]').value.trim();

    if (!name || !email || !subject || !message) {
        alert('Veuillez remplir tous les champs du formulaire.');
        return;
    }

    const whatsappNumber = '243835043090';
    const whatsappMessage = `Bonjour Gabriel, je m'appelle ${name}. ${message} (Email: ${email}, Sujet: ${subject})`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, '_blank');
});