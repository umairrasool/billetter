$(function(){
    // hent kunden med kunde-id fra url og vis denne i skjemaet
    const id = window.location.search.substring(1);
    const url = "/hentEnKunde?"+id;
    console.log(id);
    $.get(url,function(kunde){
        $("#id").val(kunde.id); // må ha med id inn skjemaet, hidden i html
        $("#film").val(kunde.film);
        $("#antall").val(kunde.antall);
        $("#fornavn").val(kunde.fornavn);
        $("#etternavn").val(kunde.etternavn);
        $("#telefon").val(kunde.telefon);
        $("#epost").val(kunde.epost);
    });

});

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+(?:\d *){6,14}\d$/;

function validMail(email) {
    return emailPattern.test(email)
}

function validNumber(number){
    return phonePattern.test(number)
}


function endreKunden() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const film = $("#film").val();
    const antall = $("#antall").val();
    const fornavn = $("#fornavn").val();
    const etternavn = $("#etternavn").val();
    const telefon = $("#telefon").val();
    const epost = $("#epost").val();

    if (film && antall > 0 && fornavn && etternavn && validNumber(telefon) && validMail(epost)) {

        const kunde = {
            id: id,
            film: film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefon: telefon,
            epost: epost
        }
        console.log(kunde);
        $.post("/endreEnKunde", kunde, function () {
            window.location.href = "/index.html"
        });
    } else {
        // Gi en feilmelding eller annen feedback til brukeren om at valideringen mislyktes
        alert('Vennligst sjekk at du har valgt en film, antall er mer enn 0 og at du bruker riktig format.\n' +
            'Format for telefon: "+1 1234567890"\n' +
            'Format for epost: hvaSomHelst@hvasomhelst.minstTotegnfraA-Z"');
    }
}

