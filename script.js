
function playGame(){
    setUpLetters();
    var randomwordseasy=["relax","cane","pure","chin","bare","tune","peak","try","van","harsh","quit","sport","model","table","bill","beach","lover","tank","car","seal","bow","pony","waist","habit","fool","tempt","tidy","smile","cast","agony","bond","theme","watch","wrist","gate"];
    var randomwordmedium=["slogan","bomber","rabbit","family","tumour","Sunday","father","harass","vision","suburb","master","module","summit","agenda","reason","cherry","marble","finish","church","cancel","spider","stroke","rhythm","embark"];
    var randomwordhard=["pressure","perforate","executrix","harmony","inspector","challenge","applied","disagreement","partner","offense","testify","aviation","population","environment","excavate","proposal","feather","demonstration","correspond","humanity","auditon","cooperation","familiar","exception","terminal","finance","nonsense","arrange","paragraph","parameter","prospect","jealous","gallery","emotion","photography"];
    var chosendifficulty= document.getElementById("newgame").value;
    var randomnumber= Math.floor(Math.random()*randomwordhard.length);

    var displayedletters="";
    if (chosendifficulty==1){
        randomword = randomwordseasy[randomnumber];
        document.getElementById("Difficulty").innerHTML= "Current Difficulty: Easy"
    }else if (chosendifficulty ==2){
        randomword = randomwordmedium[randomnumber];
        document.getElementById("Difficulty").innerHTML= "Current Difficulty: Medium"
    }else if(chosendifficulty==3){
        randomword = randomwordhard[randomnumber];
        document.getElementById("Difficulty").innerHTML= "Current Difficulty: Hard"
    }
    for(var i=0;i<randomword.length; i++){
        displayedletters+="_ ";
    }
    document.getElementById("Word").innerHTML=displayedletters;
}

var randomword="";

function setUpLetters(){
    var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    for(var i=0; i<26; i++){
        var letter = alphabet[i];
        document.getElementById("letters").innerHTML += "<option value=" + letter +">"+ letter+ "</option>";
    }
}

function checkLetter(){
    var inputletter=document.getElementById("letters").value;
    var stringrandomword= [randomword];
    if (randomword.)
}

