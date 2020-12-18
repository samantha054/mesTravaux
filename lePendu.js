//TP8

var ensMots = ['proverbes','amour','amitie','patience','informatique','indulgence','intervertebraux','receptionniste','fragmentation','zebre','moutons','chiens','octroyer','vampire','fantome','miroirs','comprimer','mathematiques','visiter','zigouiller','histoire','americains','comptables','administration','camions','famille','enfants','adresse','irrevocable','imprimante','mythique','corona','invention','pantalon','initial','anatomie','ordinateur', 'sauvage', 'bootstrap','zygomatique','accrocher', 'javascript', 'ecran', 'formations', 'touches', 'cadre', 'cigarettes', 'baignoire', 'peluche', 'couverture', 'porte', 'placard', 'enceinte', 'programmation'];

var motCache = ensMots[(Math.floor(Math.random() * ensMots.length))];

var nbEssais = 10;

var lettresJouees =[];

var motCrypte = "";
for (var i = 0; i < (motCache.length); i++) {
    motCrypte += "*";
}

document.querySelector('.lependu').innerHTML = motCrypte;

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        lettres();
    }
});


function rejouer() {
    let rejouer = document.createElement('button')
    rejouer.innerText ='Rejouer'
    rejouer.addEventListener('click', (e) => document.location.reload())
    document.querySelector('.rejouer').append(rejouer)
}

function lettres() {
    const regex = /^[a-z]{1}$/;
    
    var lettreSaisie = document.querySelector('#lettre').value.toLowerCase();

    if ((lettreSaisie.match(regex)) && (motCache.match(lettreSaisie))) {
        for (var j = 0; j < (motCache.length); j++) {
            if (lettreSaisie == motCache.substr(j, 1)) {
                motCrypte = motCrypte.substr(0, j) + motCache.substr(j, 1) + motCrypte.substr(j + 1, motCache.length);
            }

        }
        document.getElementById('novalid').textContent = '';

    }
    else if (lettreSaisie.match(regex)) {
        document.getElementById('novalid').textContent = '';
        lettresJouees.push(lettreSaisie);
        nbEssais--;
    }
    else {
        document.getElementById('novalid').textContent = 'caractere non valide';
        document.getElementById('novalid').style.color = 'red';
    }
    switch (nbEssais) {
        case 10:
            document.querySelector('.image').innerHTML = '';
            break;
        case 9:
            document.querySelector('.image').innerHTML = '<img src="images/image_1.jpg">';
            break;
        case 8:
            document.querySelector('.image').innerHTML = '<img src="images/image_2.jpg">';
            break;
        case 7:
            document.querySelector('.image').innerHTML = '<img src="images/image_3.jpg">';
            break;
        case 6:
            document.querySelector('.image').innerHTML = '<img src="images/image_4.jpg">';
            break;
        case 5:
            document.querySelector('.image').innerHTML = '<img src="images/image_5.jpg">';
            break;
        case 4:
            document.querySelector('.image').innerHTML = '<img src="images/image_6.jpg">';
            break;
        case 3:
            document.querySelector('.image').innerHTML = '<img src="images/image_7.jpg">';
            break;
        case 2:
            document.querySelector('.image').innerHTML = '<img src="images/image_8.jpg">';
            break;
        case 1:
            document.querySelector('.image').innerHTML = '<img src="images/image_9.jpg">';
            break;

        default:
            document.querySelector('.image').innerHTML = '<img src="images/image_10.jpg">';
            setTimeout(function () { alert('Vous avez perdu ...\nle mot était : ' + motCache) }, 300);
            rejouer();

            
    }
    if (motCrypte == motCache) {
        alert('vous avez gagné ! '+ motCache + ' '+ 'était bien le mot à chercher');
        rejouer();
        
    }
    document.querySelector("#lettre").value = "";
    document.querySelector('.lependu').innerHTML = motCrypte;
    document.querySelector('.essais').innerHTML = lettresJouees;
    console.log('lettresaisie', lettresJouees)
    console.log(nbEssais);
}
