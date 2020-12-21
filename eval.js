document.addEventListener('keypress', (e)=> {
    if (e.key === 'Enter') {
        sommeDesEntiersEval();
    }
})

var sommeDesEntiers = 0;

function sommeDesEntiersEval() {
    
    var nS = +document.querySelector('#btn').value;
    sommeDesEntiers =  (nS*(nS+1))/2
    
    document.querySelector('.resultatSomme').innerHTML = 'Le résultat des '+nS+ ' premiers entiers est  ' + sommeDesEntiers;
} 


function monteeEnPuissance() {
    var x1 = +document.querySelector('#x1').value;
    var y1 = +document.querySelector('#y1').value;
    document.querySelector('.monteeEnPuissance').innerHTML=
    'Le résultat de ' + x1 + ' puissance ' + y1 + ' est ' + Math.pow(x1,y1);
}

document.addEventListener('keypress', (e)=> {
    if (e.key === 'Enter') {
        leDixVingt();
    }
})

var nombreEssais=0;

function leDixVingt() {
   
    var dix = +document.querySelector('#dix').value;
    document.querySelector('.messageErreur').textContent = '';
    if (dix < 10 || dix > 20) {
        
        if (dix<10) {
            document.querySelector('.messageErreur').textContent = 'Plus grand !!';
            document.querySelector('.messageErreur').style.color = 'red';
            nombreEssais++
        }
        else{
            document.querySelector('.messageErreur').textContent = 'Plus petit !!';
            document.querySelector('.messageErreur').style.color = 'blue';
            nombreEssais++
        }
        console.log(nombreEssais)
        
        document.querySelector('#dix').value=''

    }
    else{
        document.querySelector('.messageErreur').textContent= 'Le resultat correspond ! Vous avez effectué '
     + nombreEssais + ' essais !';
     document.querySelector('.messageErreur').style.color = 'black';
    }
    
}