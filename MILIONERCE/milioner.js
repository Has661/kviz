let pitanjeNaslov = document.getElementById("naslovPitanje");
let pocniIgru = document.getElementById("pocniIgru");
let uputstvaIgre = document.getElementById("uputstvo");
let oProjektu = document.getElementById("projekatInfo");
let pitanja = document.getElementById("containerPitanja");

let listaOdgovora=0;

let listaPitanja=0;

let daLiJeTacan=0;



let listaOdgovora1 = [[],["4","9","16","25"],
                        ["0","2","4","3"],
                        ["Zmaja od Bosne 32-33","Džemala Bijedića 32-33","Zmaja od Bosne 33-35","Džemala Bijedića 33-35"],
                        ["4 i 5","3 i 4","1 i 2","4 i 4"],
                        ["Adis Alihodžić","Elmedin Selmanović","Senada Kalabušić","Sead Delalić"],
                        ["EUNVI","EUNSA","UNICEF","UEFA"],
                        ["Programiranje 2","Statitstika","Web Programiranje 2","Programiranje 1"],
                        ["Samir Đug","Elvedin Hasović","Nusret Drešković","Esmir Pilav"],
                        ["033-122-122","032-723-723","033-723-723","033-327-327"],
                        ["9:00-11:00","8:00-10:00","24/7","11:00-13:00"],
                        ["33","42","24","57"],
                        ["1959.","1960.","1961.","1962."],
                        ["u julu","u januaru","u augustu","u junu"],
                        ["Preko 90","preko 100","Preko 60","Preko 80"],
                        ["Sviđa","Da","Naravno","Logično"]];
                        
                        
let listaPitanja1=["",  "Koliko iznosi površina kvadrata ako je dužina stranice kvadrata jednaka broju odsjeka na PMF-u?",
                        "Na odsjeku za matematičke i kompjuterske nauke, koliko ciklusa ima(uključujući i stručni studij)?",
                        "Koja je tačna adresa Prirodno-matematičkog fakulteta u Sarajevu?",
                        "Koliko predmeta se nalazi na Stručnom studiju(IT) na prvoj i drugoj godini studija?",
                        "Profesor/ica kojeg predmeta prvog semestra prve godine IT studija je zapravo počeo/la raditi kao profesor/ica od ove(23./24.) akademske godine?",
                        "Koja je skraćenica univerziteta kojem pripada PMF?",
                        "Koji predmet na stručnom studiju(IT) nosi najviše ECTS bodova pored završnog projekta?",
                        "Kako se zove dekan Prirodno-matematičkog fakulteta u Sarajevu?",
                        "Koji je broj Prirodno-matematičkog fakulteta u Sarajevu?",
                        "Koje je radno vrijeme za rad sa studentima/strankama studenstke službe PMF-a?",
                        "Koliko ukupno studijskih programa trenutno ima Prirodno-matematički fakultet?",
                        "Koje godine je osnovan Prirodno-matematički fakultet u Sarajevu?",
                        "U kojem je mjesecu 2022. godine naziv Odsjek za matematiku promijenjen u Odsjek za matematičke i kompjuterske nauke?",
                        "Koliko studenata je bilo upisano na stručni studij kada je isti počeo sa radom akademske 2018./19. godine?",
                        "Sviđa li vam se ovaj kviz?"];


let daLiJeTacan1 =[[],[false, false, false, true],
                    [false, false, true, false],
                    [false, false, true, false],
                    [true, false, false, false],
                    [false, false, false, true],
                    [false, true, false, false],
                    [true, false, false, false],
                    [false, false, true, false],
                    [false, false, true, false],
                    [false, false, false, true],
                    [false, true, false, false],
                    [false, true, false, false],
                    [true, false, false, false],
                    [false, false, false, true],
                    [true, true, true, true]];


let listaPitanja2=["", "Koliko ukupno odsjeka postoji na PMF-u?",
                    "Koliko semestara ima stručni studij PMF-a?",
                    "Koliko obaveznih predmeta isti ima?",
                    "Kolika je dužina trajanja svakog od semestara?",
                    "Ko je šef odsjeka za matematičke i kompjuterske nauke?",
                    "Na kojem spratu PMF-a se nalazi odsjek za matematičke i kompjuterske nauke?",
                    "Ko je profesor predmeta Programiranje 1?",
                    "Nastavite e-mail odsjeka za matematičke i kompjuterske nauke, matematika...",
                    "Koji je stručni naziv koji se stiče po završetku stručnog studija(IT)?",
                    "Koliko najviše nepoloženih predmeta studenti mogu prenijeti na drugu godinu stručnog studija(IT)?",
                    "Koji od predmeta nije na prvoj godini stručnog studija(IT)?",
                    "Koje godine je osnovana biblioteka PMF-a?",
                    "Koji je broj kabineta šefa odsjeka za matematičke i kompjuterske nauke?",
                    "Od koje godine počinje razvoj prirodne i matematičke nauke u BiH?",
                    "Sviđa li vam se ovaj kviz?"];

let listaOdgovora2 = [[],["5","6","10","4"],
                    ["2","9","4","6"],
                    ["7","20","16","11"],
                    ["14 sedmica","15 sedmica","12 sedmica","16 sedmica"],
                    ["Elmedin Selmanović","Adis Alihodžić","Ekrem Jevrić","Zenan Šabanac"],
                    ["Prvom","Drugom","Trećem","Četvrtom"],
                    ["Elmedin Selmanović","Sead Delalić","Dženan Gušić","Safet Isović"],
                    ["@pmfunsa.ba","@gmail.com","@pmf.unsa.ba","@pmf.unsa.com"],
                    ["Master IT-a","Stručni specijalista IT-a","Dekan IT-a","Cristiano Ronaldo IT-a"],
                    ["0","1","2","3"],
                    ["Računarski sistemi","Računarske mreže","Statistika","Baze podataka"],
                    ["1960.","1959.","1961.","1965."],
                    ["411","422","408","400"],
                    ["1872.","1915.","1888.","1777."],
                    ["Sviđa","Da","Naravno","Logično"]];

let daLiJeTacan2=[[],[true, false, false, false],
                [false, false, true, false],
                [false, false, true, false],
                [false, true, false, false],
                [false, false, false, true],
                [false, false, false, true],
                [true, false, false, false],
                [false, false, true, false],
                [false, true, false, false],
                [false, false, true, false],
                [false, false, false, true],
                [true, false, false, false],
                [false, false, true, false],
                [false, false, true, false],
                [true, true, true, true]];


let listaPitanja3=["",  "Koji se od ponuđenih predmeta ne nalazi na prvoj godini stručnog studija(IT)?",
                "Ko je asistent predmeta matematika na prvoj godini stručnog studija(IT)?",
                "Koji se odjsek ne nalazi na PMF-u?",
                "Koji predemet prvog semestra prve godine stručnog studija(IT) nosi manje ECTS bodova od ostalih?",
                "Koji predmet nosi najviše ECTS bodova na drugom semestru prve godine stručnog studija(IT)?",
                "Ko je profesor tih predmeta?",
                "Koji je broj njegovog kabineta?",
                "Nastavite broj PMF-a, 033-723-...",
                "Koliko nastavnog osoblja trenutno broji PMF?",
                "Koje je radno vrijeme biblioteke odsjeka za matematiku?",
                "Koliko studijskih programa trenutno broji PMF?",
                "Unutar kojeg fakulteta se PMF nalazio kao odsjek prije nego što je postao samostalna naučno-nastavna ustanova?",
                "Od akademske 05/06. god. studij na odsjeku za matematiku je organiziran po kojem sistemu?",
                "Koji profesor/ica je imenovan/a za prvog šefa odsjeka za matematičke i kompjuterske nauke?",
                "Sviđa li vam se ovaj kviz?"];

let listaOdgovora3 = [[],["Statistika","Baze podataka","Računarske mreže","Programiranje I"],
                ["Emin Bešo","Adisa Bolić","Mirza Čvorak","Irhad Fejzić"],
                ["za fiziku","za hemiju","za geografiju","za vjeronauku"],
                ["Programiranje I","Računarski sistemi","Web Programiranje I","Matematika"],
                ["Diskretna matematika","Statistika","Programiranje II","Računarske mreže"],
                ["Adis Alihodžić","Sead Delalić","Šaban Šaulić","Elmedin Selmanović"],
                ["437","426","442","439"],
                ["878","333","723","523"],
                ["70","270","115","124"],
                ["9:00-12:00","8:00-11:30","11:00-13:00","7:00-9:00"],
                ["39","42","64","55"],
                ["Filozofskog","ELektrotehničkog","Mašinskog","Građevinskog"],
                ["5+3+2","2+3+2","3+2+3","3+3+2"],
                ["Mladen Deželić","Husnija Kurt","Stjepan Urban","Vera Šnajder"],
                ["Sviđa","Da","Naravno","Logično"]];

let daLiJeTacan3=[[],[false, true, false, false],
            [true, false, false, false],
            [false, false, false, true],
            [false, true, false, false],
            [false, false, true, false],
            [true, false, false, false],
            [true, false, false, false],
            [false, false, true, false],
            [false, false, false, true],
            [false, true, false, false],
            [false, true, false, false],
            [true, false, false, false],
            [false, false, true, false],
            [false, false, false, true],
            [true, true, true, true]];


let kojaSuPitanja=Math.floor(Math.random()*3)+1;

if (kojaSuPitanja === 1) {
    listaPitanja=listaPitanja1;
    listaOdgovora=listaOdgovora1;
    daLiJeTacan=daLiJeTacan1;
}

else if (kojaSuPitanja === 2) {
    listaPitanja=listaPitanja2;
    listaOdgovora=listaOdgovora2;
    daLiJeTacan=daLiJeTacan2;
}

else if (kojaSuPitanja === 3) {
    listaPitanja=listaPitanja3;
    listaOdgovora=listaOdgovora3;
    daLiJeTacan=daLiJeTacan3;
}

let nagrade=["Zbirku zadataka iz matematike(dobra za potpalu)","Sok od jabuke","Kesu svatovskih bombona","Vaznu","Cenera","Cenera i petaka"];

let vrijednostiNagrada=["0.50","2.50 (Snižen)","5","7","10","15"];

let brojPitanja=1;

pocniIgru.addEventListener("click", function () {
    
    
    pitanjeNaslov.textContent="Pitanje "+brojPitanja+ " : "+listaPitanja[brojPitanja];

    pocniIgru.style.display = "none";
    uputstvaIgre.style.display = "none";
    oProjektu.style.display = "none";

    let dzokeri=document.getElementById("dzokeri")

    let pomoc1=document.createElement("button");
    let pomoc2=document.createElement("button");
    let pomoc3=document.createElement("button");

    pomoc1.id="pola"
    pomoc2.id="prijatelj"
    pomoc3.id="publika"


    pomoc1.textContent = "50/50";
    pomoc2.textContent = "Prijatelj";
    pomoc3.textContent = "Publika";


    dzokeri.appendChild(pomoc1);
    dzokeri.appendChild(pomoc2);
    dzokeri.appendChild(pomoc3);

    pomoc1.addEventListener("click", function() {
        let brojac=0;
        for (let i=0; i<4; i++) {
            if (daLiJeTacan[brojPitanja][i] === false) {
                brojac++;
                ponisti=document.getElementById("odgovor"+(i+1).toString());
                ponisti.textContent="";
                if (brojac===2) {pomoc1.style.display="none"; break;}
                    }
        }
    
    })

    pomoc2.addEventListener("click", function() {
        let brojac=0;
        for (let i=0; i<4; i++) {
            if (daLiJeTacan[brojPitanja][i] === false) {
                brojac++
                ponisti=document.getElementById("odgovor"+(i+1).toString())
                ponisti.textContent=""
                if (brojac===3) {pomoc2.style.display="none"; break;}
                    }
        }
    
    })

    pomoc3.addEventListener("click", function() {
        let brojac=0;
        for (let i=0; i<4; i++) {
            if (daLiJeTacan[brojPitanja][i] === false) {
                brojac++
                ponisti=document.getElementById("odgovor"+(i+1).toString())
                ponisti.textContent=""
                if (brojac===3) {pomoc3.style.display="none"; break;}
                    }
        }
    
    })

    for (let i=1; i<=4; i++) {
        let odgovorBtn=document.createElement("button");
        let idOdgovora="odgovor"+i;
        odgovorBtn.id=idOdgovora.toLowerCase();
        odgovorBtn.textContent=listaOdgovora[brojPitanja][i-1];
        odgovorBtn.className="odgovori";
        odgovorBtn.style.height= "80px"
        odgovorBtn.style.width = "300px";
        pitanja.appendChild(odgovorBtn);


        odgovorBtn.addEventListener("click", function() {
            let odabraniOdgovor=i-1;
            if (daLiJeTacan[brojPitanja][odabraniOdgovor]) {
                brojPitanja++;
                if (brojPitanja<=15) {
                    if (brojPitanja === 15){
                        pomoc1.style.display = "none";
                        pomoc2.style.display = "none";
                        pomoc3.style.display = "none";
                    }
                    pitanjeNaslov.textContent="Pitanje "+brojPitanja+ " : "+listaPitanja[brojPitanja];
                    pitanjeNaslov = document.getElementById("naslovPitanje");
                    for (let pomocna=0; pomocna<=3; pomocna++) {
                        let kojiJeBtn=document.getElementById("odgovor"+(pomocna+1).toString());
                        kojiJeBtn.textContent=listaOdgovora[brojPitanja][pomocna];
                    }
                } 
                
                else {
                    pitanjeNaslov.textContent = "ČESTITAMO, VI STE MILIJUNAŠ PMF-a";
                    pitanja.innerHTML="";

                    let ispisBrojaTacnih=document.createElement("h4");
                    ispisBrojaTacnih.className="ispistacnih";
                    ispisBrojaTacnih.textContent="Broj pogođenih pitanja: 15";

                    let osvojiliSte=document.createElement("h4");
                    osvojiliSte.className="osvojiliste";
                    osvojiliSte.textContent="Osvojili ste glavnu nagradu: Luster";

                    let slika=document.createElement("img");
                    slika.src="luster.jpeg";
                    slika.className="luster";
                    slika.style.margin="auto";
                    slika.style.marginTop="2rem";
                    slika.style.marginBottom="2rem";

                    let vrijednost=document.createElement("h4");
                    vrijednost.className="vrijednost";
                    vrijednost.textContent="Vrijednost: Priceless";
                    vrijednost.style.textAlign="center";

                    let milionerce=document.createElement("audio");
                    milionerce.id="milionerce";
                    milionerce.src="milionerce.mp3";
                    milionerce.controls=true;
                    milionerce.style.marginLeft="auto";
                    milionerce.style.marginRight="auto";

                    pitanja.appendChild(ispisBrojaTacnih);
                    pitanja.appendChild(osvojiliSte);
                    pitanja.appendChild(slika);
                    pitanja.appendChild(vrijednost);
                    pitanja.append(milionerce);

                    pomoc1.style.display = "none";
                    pomoc2.style.display = "none";
                    pomoc3.style.display = "none";

                }

                
                
            }

            else {
                pitanja.innerHTML="";

                let ispisBrojaTacnih=document.createElement("h4");
                ispisBrojaTacnih.className="ispistacnih";
                ispisBrojaTacnih.textContent="Broj pogođenih pitanja: ";

                pitanjeNaslov.textContent="Nažalost, odgovor je netačan";
                let osvojiliSte=document.createElement("h4");
                osvojiliSte.className="osvojiliste";
                osvojiliSte.textContent="Osvojili ste: ";

                let vrijednost=document.createElement("h4");
                vrijednost.className="vrijednost";
                vrijednost.textContent="Vrijednost: ";

                let nagrada=document.createElement("img");
                nagrada.className="nagrada";
                nagrada.style.margin="auto";
                nagrada.style.marginTop="2rem";
                nagrada.style.marginBottom="2rem";

                pitanja.appendChild(ispisBrojaTacnih);
                pitanja.appendChild(osvojiliSte);
                pitanja.appendChild(nagrada);
                pitanja.appendChild(vrijednost);

                pomoc1.style.display = "none";
                pomoc2.style.display = "none";
                pomoc3.style.display = "none";

                if (brojPitanja<=2) {
                    if (brojPitanja===1) {
                        ispisBrojaTacnih.textContent="Broj pogođenih pitanja: 0";
                        osvojiliSte.textContent="Osvojili ste: "+"Ništa";
                        vrijednost.textContent="Vrijednost: "+"0"+" KM";
                        pitanja.removeChild(nagrada);
                    }
                    if (brojPitanja===2) {
                        ispisBrojaTacnih.textContent="Broj pogođenih pitanja: 1";
                        osvojiliSte.textContent="Osvojili ste: "+"Ništa";
                        vrijednost.textContent="Vrijednost: "+"0"+" KM";
                        pitanja.removeChild(nagrada);
                    }

                }

                if (brojPitanja>2 && brojPitanja<=4) {
                    let pogodio=brojPitanja-1;
                    ispisBrojaTacnih.textContent="Broj pogođenih pitanja: "+pogodio;
                    osvojiliSte.textContent="Osvojili ste: "+nagrade[0];
                    nagrada.src="zbirka.jpeg";
                    vrijednost.textContent="Vrijednost: "+vrijednostiNagrada[0]+" KM";
                }

                if (brojPitanja>4 && brojPitanja<=6) {
                    let pogodio=brojPitanja-1;
                    ispisBrojaTacnih.textContent="Broj pogođenih pitanja: "+pogodio;
                    osvojiliSte.textContent="Osvojili ste: "+nagrade[1];
                    nagrada.src="sokjabuka.jpeg";
                    vrijednost.textContent="Vrijednost: "+vrijednostiNagrada[1]+" KM";
                }

                if (brojPitanja>6 && brojPitanja<=8) {
                    let pogodio=brojPitanja-1;
                    ispisBrojaTacnih.textContent="Broj pogođenih pitanja: "+pogodio;
                    osvojiliSte.textContent="Osvojili ste: "+nagrade[2];
                    nagrada.src="bombone.jpeg";
                    vrijednost.textContent="Vrijednost: "+vrijednostiNagrada[2]+" KM";
                }

                if (brojPitanja>8 && brojPitanja<=10) {
                    let pogodio=brojPitanja-1;
                    ispisBrojaTacnih.textContent="Broj pogođenih pitanja: "+pogodio;
                    osvojiliSte.textContent="Osvojili ste: "+nagrade[3];
                    nagrada.src="vazna.jpeg";
                    vrijednost.textContent="Vrijednost: "+vrijednostiNagrada[3]+" KM";
                }

                if (brojPitanja>10 && brojPitanja<=12) {
                    let pogodio=brojPitanja-1;
                    ispisBrojaTacnih.textContent="Broj pogođenih pitanja: "+pogodio;
                    osvojiliSte.textContent="Osvojili ste: "+nagrade[4];
                    nagrada.src="10maraka.jpeg";
                    vrijednost.textContent="Vrijednost: "+vrijednostiNagrada[4]+" KM";
                }

                if (brojPitanja>12 && brojPitanja<=14) {
                    let pogodio=brojPitanja-1;
                    ispisBrojaTacnih.textContent="Broj pogođenih pitanja: "+pogodio;
                    osvojiliSte.textContent="Osvojili ste: "+nagrade[5];
                    nagrada.src="15maraka.jpg";
                    vrijednost.textContent="Vrijednost: "+vrijednostiNagrada[5]+" KM";
                }

            }
        })
    }

});



uputstvo.addEventListener("click", function () {
    pitanjeNaslov.textContent="Upustva";
    
    pocniIgru.style.display = "none";
    uputstvaIgre.style.display = "none";
    oProjektu.style.display = "none";

    let informacije=document.createElement("p");
    informacije.className="uputstvoinfo";
    informacije.textContent="Od beskonačno mnogo uputstava, i raznih pravila i stavki, obratio bih pažnju na jedno glavno pravilo, a to jeste: Odgovorite tačno na sva pitanja. Sretno :)";


    pitanja.appendChild(informacije);

});

projekatInfo.addEventListener("click", function () {
    pitanjeNaslov.textContent="O projektu";

    pocniIgru.style.display = "none";
    uputstvaIgre.style.display = "none";
    oProjektu.style.display = "none";

    let infoProjekta=document.createElement("p");
    infoProjekta.className="infoprojekta";
    infoProjekta.textContent="Projekat milijunaš pmf-a inspirisan je pravom igrom milijunaš. Sastoji se od 15 pitanja sa po 4 odgovora za svako, od kojih je samo jedan tačan. Cilj same igre jeste odgovoriti tačno na sva pitanja i osvojiti glavnu nagradu. Naravno tu je i pomoć pri odgovaranju na pitanja u vidu džokera: 50/50, pitaj prijatelja i pitaj publiku. Za izradu projekta korišteni su: HTML, CSS i JAVASCRIPT.";

    pitanja.appendChild(infoProjekta);
});
