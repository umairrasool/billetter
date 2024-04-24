const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+(?:\d *){6,14}\d$/;

function validMail(email) {
    return emailPattern.test(email)
}

function validNumber(number){
    return phonePattern.test(number)
}

function lagreKunde() {
    const film = $("#film").val();
    const antall = $("#antall").val();
    const fornavn = $("#fornavn").val();
    const etternavn = $("#etternavn").val();
    const telefon = $("#telefon").val();
    const epost = $("#epost").val();

    // Validering
    if (film && antall > 0 && fornavn && etternavn && validNumber(telefon) && validMail(epost)) {
        const billett = {
            film: film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefon: telefon,
            epost: epost,
        }

        const url = "/lagreKunde";
        $.post(url, billett, function () {
            window.location.href = 'index.html';
        });
    } else {
        // Gi en feilmelding eller annen feedback til brukeren om at valideringen mislyktes
        alert('Vennligst sjekk at du har valgt en film, antall er mer enn 0 og at du bruker riktig format.\n' +
            'Format for telefon: "+1 1234567890"\n' +
            'Format for epost: hvaSomHelst@hvasomhelst.minstTotegnfraA-Z"');
    }
};