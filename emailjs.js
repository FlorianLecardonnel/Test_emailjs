(function() {
    // Initialiser EmailJS avec votre clé publique
    emailjs.init({
        publicKey: "q9bDsNtwc1lhAaIyk",
    });

    window.onload = function() {
        document.getElementById('contact-form').addEventListener('submit', function() {
            // Envoyer les données du formulaire en utilisant EmailJS
            emailjs.sendForm('service_0po5emm', 'template_bw54k9e', this)
                .then(() => {
                    console.log('SUCCÈS !');
                }, (error) => {
                    console.log('ÉCHEC...', error);
                });
        });
    }
})();
