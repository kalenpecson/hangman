function startGameEasy(){
    var randomwordseasy=["relax","cane","pure","chin","bare","tune","peak","try","van","harsh","quit","sport","model","table","bill","beach","lover","tank","car","seal","bow","pony","waist","habit","fool","tempt","tidy","smile","cast","agony","bond","theme","watch","wrist","gate"];
    var randomwordnumber= Math.floor(Math.random()*randomwordseasy.length);
    var selectedword=randomwordseasy[randomwordnumber];
    var wordtoguess="";
    for(var i=0;i<selectedword.length; i++){
        wordtoguess+="_ ";
    }
    document.getElementById("Word").innerHTML=wordtoguess;

}
function startGameMedium(){
    setUpLetters();
    var randomwordmedium=["slogan","bomber"
        "rabbit"
        "family"
        "tumour"
        "Sunday"
        "father"
        "harass"
        "vision"
        "suburb"
        "master"
        "module"
        "summit"
        "agenda"
        "reason"
        "cherry"
        "marble"
        "finish"
        ,"church","cancel","spider","stroke","rhythm","embark"];
    var randomwordnumber= Math.floor(Math.random()*randomwordmedium.length);
    var selectedword=randomwordmedium[randomwordnumber];
    var wordtoguess="";
    for(var i=0;i<selectedword.length; i++){
        wordtoguess+="_ ";
    }
    document.getElementById("Word").innerHTML=wordtoguess;

}


function startGameHard(){
    setUpLetters();
    var randomwordhard=["pressure","perforate","executrix","harmony","inspector","challenge","applied","disagreement","partner","offense","testify","aviation","population","environment","excavate","proposal","feather","demonstration","correspond","humanity","auditon","cooperation","familiar","exception","terminal","finance","nonsense","arrange","paragraph","parameter","prospect","jealous","gallery","emotion","photography"];
    var randomwordnumber= Math.floor(Math.random()*randomwordhard.length);
    var selectedword=randomwordhard[randomwordnumber];
    var wordtoguess="";
    for(var i=0;i<selectedword.length; i++){
        wordtoguess+="_ ";
    }
    document.getElementById("Word").innerHTML=wordtoguess;

}



function setUpLetters(){
    var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    for(var i=0; i<26; i++){
        var letter= alphabet[i];
        document.getElementById("letters").innerText+= "<option value="+ letter +">"+ letter+ "</option>";
    }
}

function setUpWord(){

}

function rightorwrong(){
    var guess= document.getElementById("Letter").value;

}