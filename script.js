var numberofincorrect= 0;
var displayedletters="";
var randomword="";
var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var guessedletters=[];
var inputletter= "";

function playGame(){
    numberofincorrect=0;
    guessedletters=[];
    document.getElementById("Word").innerHTML="";
    var abc= document.getElementById("myCanvas");
    var abctx= abc.getContext('2d');
    abctx.clearRect(0, 0,300,400);
    document.getElementById("guessedletters").innerHTML="Guessed Letters: ";
    setuphangman ();
    alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    displayedletters="";
    randomword="";
    setUpLetters();
    var randomwordseasy=["relax","cane","pure","chin","bare","tune","peak","try","van","harsh","quit","sport","model","table","bill","beach","lover","tank","car","seal","bow","pony","waist","habit","fool","tempt","tidy","smile","cast","agony","bond","theme","watch","wrist","gate"];
    var randomwordmedium=["slogan","bomber","rabbit","family","tumour","Sunday","father","harass","vision","suburb","master","module","summit","agenda","reason","cherry","marble","finish","church","cancel","spider","stroke","rhythm","embark"];
    var randomwordhard=["pressure","perforate","executrix","harmony","inspector","challenge","applied","disagreement","partner","offense","testify","aviation","population","environment","excavate","proposal","feather","demonstration","correspond","humanity","auditon","cooperation","familiar","exception","terminal","finance","nonsense","arrange","paragraph","parameter","prospect","jealous","gallery","emotion","photography"];
    var chosendifficulty= document.getElementById("newgame").value;
    var randomnumber= Math.floor(Math.random()*randomwordhard.length);

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
    console.log(randomword);
    for(var i=0;i<randomword.length; i++){
        displayedletters+="_ ";
    }
    document.getElementById("Word").innerHTML=displayedletters;
}


function setUpLetters(inputted){
    if(alphabet.indexOf(inputted)>-1){
        alphabet.splice((alphabet.indexOf(inputted)),1);
    }
    for(var i=0; i<26; i++){
        var letter = alphabet[i];
        document.getElementById("letters").innerHTML += "<option value=" + letter + ">" + letter + "</option>";
    }
}

function checkLetter(){
    var r="";
    inputletter = document.getElementById("letters").value;
    guessedletters.push(inputletter);
    console.log(guessedletters);
    for (var i=0; i<randomword.length; i++){
        if(guessedletters.indexOf(randomword[i])> -1){
            r += (randomword[i]+" ");
        }else{
            r+= "_ ";
        }
    }
    if ((randomword.indexOf(inputletter)== -1) ){
        numberofincorrect+=1;
        drawhangman(numberofincorrect);
    }
    var copyr= r.replace(/ /g,"");
    console.log(copyr);
    if (randomword==copyr){
        var e = document.getElementById("myCanvas");
        var etx = e.getContext("2d");
        etx.font = "30px Arial";
        etx.fillStyle="#FF00FF";
        etx.fillText("You Won!!",75,385);
    }
    document.getElementById("guessedletters").innerHTML+=inputletter+ " ";
    console.log(alphabet);
    document.getElementById("letters").innerHTML= null;
    setUpLetters(inputletter);
    document.getElementById("Word").innerHTML= r;

}

function setuphangman(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(35,350);
    ctx.lineTo(250,350);
    ctx.lineWidth=10;
    ctx.stroke();
    ctx.moveTo(75,350);
    ctx.lineTo(75,50);
    ctx.stroke();
    ctx.moveTo(75,50);
    ctx.lineTo(225,50);
    ctx.stroke();
    ctx.moveTo(35,350);
    ctx.lineTo(75,300);
    ctx.stroke();

}

function drawline(x1,y1,x2,y2){
    var g = document.getElementById("myCanvas");
    var gtx = g.getContext("2d");
    gtx.lineWidth = 1;
    gtx.moveTo(x1, y1);
    gtx.lineTo(x2, y2);
    gtx.stroke();
}
function drawcircle(x,y,r){
    var d = document.getElementById("myCanvas");
    var dtx = d.getContext("2d");
    dtx.beginPath();
    dtx.arc(x,y,r,0,2*Math.PI);
    dtx.stroke();
}

function drawhangman(x) {

    if (x >= 1) {
        drawline(200,50,200,100);
    }
    if (x >= 2) {
        drawcircle(200,135,35);
    }
    if(x>=3){
        drawline(200,170,200,250);
    }
    if(x>=4){
        drawline(200,250,175,300);
    }
    if(x>=5){
        drawline(200,250,225,300);
    }
    if(x>=6){
        drawline(200,180,175,225);
    }
    if(x>=7){
        drawline(200,180,225,225);
    }
    if(x>=8){
       drawcircle(210,125,5);
    }
    if(x>=9){
        drawcircle(190,125,5);
    }
    if(x>=10){
        drawcircle (203,135,2);
        drawcircle(197,135,2);
    }
    if(x>=11){
        var a=document.getElementById("myCanvas");
        var atx=a.getContext("2d");
        atx.beginPath();
        atx.arc(200,160,15,Math.PI,2*Math.PI);
        atx.stroke();
        var e = document.getElementById("myCanvas");
        var etx = e.getContext("2d");
        etx.font = "30px Arial";
        etx.fillStyle="#FF0000";
        etx.fillText("You Lose",75,385);
    }
}