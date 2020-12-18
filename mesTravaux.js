// TP1
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        controle();
    }
});

function controle() {
    var age = document.getElementById("age").value;

    if (age < 18) {
        document.querySelector('.result').innerHTML = ("Programme réservé aux personnes majeures");
        document.querySelector("#age").value = "";
    } else if (age < 27) {
        document.querySelector('.result').innerHTML = ("Vous avez un statut jeune");
        document.querySelector("#age").value = "";
    } else if (age < 66) {
        document.querySelector('.result').innerHTML = ("Vous avez un statut adulte");
        document.querySelector("#age").value = "";
    } else {
        document.querySelector('.result').innerHTML = ("Programme réservé aux personnes non retraité");
        document.querySelector("#age").value = "";
    }

}

// TP2

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sommes();
    }
});

var arr = [];
var somme = 0;
var moyenne = 0;
var nbSaisis = 0;

function sommes() {
    var saisie = document.querySelector("#nombre").value;

    if (saisie != 0) {
        arr.push(Number(saisie));
        nbSaisis++;
        somme += arr[arr.length - 1];
        moyenne = somme / nbSaisis;
        document.querySelector("#nombre").value = "";
        document.querySelector('.valeurs').innerHTML = arr;
    }
    else {
        document.querySelector('.result').innerHTML =

            "Nombre le plus petit : " + Math.min.apply(Math, arr) + "<br>" +
            "Nombre le plus grand : " + Math.max.apply(Math, arr) + "<br>" +
            "Somme : " + somme + "<br>" +
            "Moyenne : " + moyenne;
    }

}

//TP3

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        restart();
    }
});

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        controle3();
    }
});

function restart() {
    if (document.querySelector('#answer').value == "oui") {
        document.location.reload();
    }
    else {
        document.querySelector('.rep').innerHTML = ("Merci au revoir !")
        document.querySelector("#answer").value = "";
    }
}


function controle3() {
    var age3 = document.getElementById("age3").value;

    if (age3 < 18 || age3 > 65) {
        document.querySelector('.again').innerHTML = ("Erreur ! " + "<br>" + "Programme réservé aux personnes majeures et non-retraités" + "<br>" + "Voulez-vous recommencer ?" + "<br>"
            + "<input type='text' id='answer'> " + " (oui ou non)" + "<br>" +
            "<input type='button' value ='Envoyer' id='again' onclick ='restart()'>");
        document.querySelector("#age3").value = "";

    } else if (age3 < 27) {
        document.querySelector('.again').innerHTML = ("Vous avez un statut jeune");
        document.querySelector("#age3").value = "";
    } else {
        document.querySelector('.again').innerHTML = ("Vous avez un statut adulte");
        document.querySelector("#age3").value = "";
    }

}

// TP4

var table = "<table border='1'>"

function tables(lines, cols) {
    for (var index = 1; index < lines; index++) {
        table += "<tr>";
        for (var j = 1; j < cols; j++) {
            table = table + "<td>" + index * j + "</td>";
        }

    } table += "</tr>";
    return table;
}

function drawing() {
    tables(11, 11);
    document.querySelector('.draw').innerHTML = table;
}

//TP5

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        controle5();
    }
});

function controle5() {
    var nombre = document.querySelector("#nbr").value;
    var F = 1;
    for (var i = 1; i < nombre - 1; i++) {
        F = F * (nombre - i);
    }
    document.querySelector('.factor').innerHTML = ("La factorielle de " + nombre + " est " + nombre * F);

}

//TP6
function controle6() {
    var imp = 1;

    for (var index = 1; index < 21; index++) {
        var v = document.querySelector('.imp').innerHTML += (imp + " est le " + index + "ème nombre impair" + "<br>");
        imp += 2
    }
}


//TP7


function controle7() {
    var L1 = document.querySelector("#L1").value;
    var L2 = document.querySelector("#L2").value;

    document.querySelector('.hypo').innerHTML = ("La longueur de l'hypothénuse est " + Math.sqrt(Math.pow(L1, 2) + Math.pow(L2, 2)));

}

//TP8

var ensMots = ['proverbes','amour','amitie','patience','informatique','indulgence','intervertebraux','receptionniste','fragmentation','zebre','moutons','chiens','octroyer','vampire','fantome','miroirs','comprimer','mathematiques','visiter','zigouiller','histoire','americains','comptables','administration','camions','famille','enfants','adresse','irrevocable','imprimante','mythique','corona','invention','pantalon','initial','anatomie','ordinateur', 'sauvage', 'bootstrap','zygomatique','accrocher', 'javascript', 'ecran', 'formations', 'touches', 'cadre', 'cigarettes', 'baignoire', 'peluche', 'couverture', 'porte', 'placard', 'enceinte', 'programmation'];

var motCache = ensMots[(Math.floor(Math.random() * ensMots.length))];

var nbEssais = 10;

var lettresJouees =[];

var motCrypte = "";
for (var i = 0; i < (motCache.length); i++) {
    motCrypte += "*";
}

document.querySelector('.lependu2').innerHTML = motCrypte;

function rejouer() {
    let rejouer = document.createElement('button')
    rejouer.innerText ='Rejouer'
    rejouer.addEventListener('click', (e) => document.location.reload())
    document.querySelector('.rejouer2').append(rejouer)
}

function lettresaisie(caractere) {
    
    var lettreSaisie = document.querySelector('#'+caractere).value.toLowerCase();

    if (motCache.match(lettreSaisie)) {
        for (var j = 0; j < (motCache.length); j++) {
            if (lettreSaisie == motCache.substr(j, 1)) {
                motCrypte = motCrypte.substr(0, j) + motCache.substr(j, 1) + motCrypte.substr(j + 1, motCache.length);
            }

        }

    }
    else {
        lettresJouees.push(lettreSaisie);
        nbEssais--;
    }

    switch (nbEssais) {
        case 10:
            document.querySelector('.image2').innerHTML = '';
            break;
        case 9:
            document.querySelector('.image2').innerHTML = '<img src="images/image1.png">';
            break;
        case 8:
            document.querySelector('.image2').innerHTML = '<img src="images/image2.png">';
            break;
        case 7:
            document.querySelector('.image2').innerHTML = '<img src="images/image3.png">';
            break;
        case 6:
            document.querySelector('.image2').innerHTML = '<img src="images/image4.png">';
            break;
        case 5:
            document.querySelector('.image2').innerHTML = '<img src="images/image5.png">';
            break;
        case 4:
            document.querySelector('.image2').innerHTML = '<img src="images/image6.png">';
            break;
        case 3:
            document.querySelector('.image2').innerHTML = '<img src="images/image7.png">';
            break;
        case 2:
            document.querySelector('.image2').innerHTML = '<img src="images/image8.png">';
            break;
        case 1:
            document.querySelector('.image2').innerHTML = '<img src="images/image9.png">';
            break;

        default:
            document.querySelector('.image2').innerHTML = '<img src="images/image10.png">';
            setTimeout(function () { alert('Vous avez perdu ...\nle mot était : ' + motCache) }, 300);
            rejouer();
    }
    if (motCrypte == motCache) {
        alert('vous avez gagné ! '+ motCache + ' '+ 'était bien le mot à chercher');
        rejouer();
        
    }
    
    document.querySelector('.lependu2').innerHTML = motCrypte;
    document.querySelector('.essais2').innerHTML = lettresJouees;
}

//TP eval





