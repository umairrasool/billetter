package com.example.billeter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import java.util.List;

@RestController
public class KundeController {

    @Autowired
    KundeRepository rep;

    @PostMapping("/lagreKunde")
    public void lagreKunde(Kunde kunde){
        rep.lagreKunde(kunde);
    }

    @GetMapping("/hentKunder")
    public List<Kunde> hentAlle(){

        List<Kunde> kunder = rep.hentAlleKunder();
        kunder = kunder.stream()
                .sorted(Comparator.comparing(Kunde::getEtternavn))
                .collect(Collectors.toList());
        return kunder;
    }

    @GetMapping("/hentEnKunde")
    public Kunde hentEnKunde(int id){
        return rep.hentEnKunde(id);
    }

    @PostMapping("/endreEnKunde")
    public void endreEnKunde(Kunde kunde){
        rep.endreEnKunde(kunde);
    }

    @GetMapping("/slettEnKunde")
    public void slettEnKunde(int id){
        rep.slettEnKunde(id);
    }

    @GetMapping("/slettAlleKunder")
    public void slettAlle(){
        rep.slettAlleKunder();
    }
}