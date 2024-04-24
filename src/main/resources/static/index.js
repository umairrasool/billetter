$(function(){
    hentAlleKunder();
});

function hentAlleKunder() {
    $.get( "/hentKunder", function( kunder ) {
        formaterKunder(kunder);
    });
};

function formaterKunder(kunder){
    var ut = "<table class='table table-striped'>" +
        "<tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>Epost</th>" +
        "</tr>";
    for(let i in kunder) {
        ut += "<tr>" +
            "<td>"+ kunder[i].film +"</td>"+
            "<td>"+ kunder[i].antall +"</td>"+
            "<td>"+ kunder[i].fornavn +"</td>"+
            "<td>"+ kunder[i].etternavn +"</td>"+
            "<td>"+ kunder[i].telefon +"</td>"+
            "<td>"+ kunder[i].epost +"</td>"+
            "<td> <a class='btn btn-primary' href='endreKunde.html?id=" + kunder[i].id + "'>Endre</a></td>"+
            "<td> <button class='btn btn-danger' onclick='slettEnKunde("+kunder[i].id+")'>Slett</button></td>"+
            "</tr>";
    }
    $("#kundene").html(ut);
}

function slettEnKunde(id) {
    const url = "/slettEnKunde?id="+id;
    $.get( url, function() {
        window.location.href = 'index.html';
    });
};

function slettKundene() {
    $.get( "/slettAlleKunder", function() {
        window.location.href = 'index.html';
    });
};