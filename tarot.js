var tarotList = [
    {
        cardname:"Baka"
        ,filename:"major0"
    },
    {
        cardname:"Magician"
        ,filename:"major1"
    },
    {
        cardname:"High Purriestess"
        ,filename:"major2"
    },
    {
        cardname:"Empurress"
        ,filename:"major3"
    },
    {
        cardname:"Empurror"
        ,filename:"major4"
    },
    {
        cardname:"Hierophant"
        ,filename:"major5"
    },
    {
        cardname:"Lovers"
        ,filename:"major6"
    },
    {
        cardname:"Chariot"
        ,filename:"major7"
    },
    {
        cardname:"Strength"
        ,filename:"major8"
    },
    {
        cardname:"Hermit"
        ,filename:"major9"
    },
    {
        cardname:"Wheel of Fortune"
        ,filename:"major10"
    },
    {
        cardname:"Justice"
        ,filename:"major11"
    },
    {
        cardname:"Hanged"
        ,filename:"major12"
    },
    {
        cardname:"Death"
        ,filename:"major13"
    },
    {
        cardname:"Temperance"
        ,filename:"major14"
    },
    {
        cardname:"Devil"
        ,filename:"major15"
    },
    {
        cardname:"Tower"
        ,filename:"major16"
    },
    {
        cardname:"Star"
        ,filename:"major17"
    },
    {
        cardname:"Moon"
        ,filename:"major18"
    },
    {
        cardname:"Sun"
        ,filename:"major19"
    },
    {
        cardname:"Judgement"
        ,filename:"major20"
    },
    {
        cardname:"World"
        ,filename:"major21"
    },
    {
        cardname:"Ace of Cups"
        ,filename:"cups1"
    },
    {
        cardname:"II of Cups"
        ,filename:"cups2"
    },
    {
        cardname:"III of Cups"
        ,filename:"cups3"
    },
    {
        cardname:"IV of Cups"
        ,filename:"cups4"
    },
    {
        cardname:"V of Cups"
        ,filename:"cups5"
    },
    {
        cardname:"VI of Cups"
        ,filename:"cups6"
    },
    {
        cardname:"VII of Cups"
        ,filename:"cups7"
    },
    {
        cardname:"VIII of Cups"
        ,filename:"cups8"
    },
    {
        cardname:"IX of Cups"
        ,filename:"cups9"
    },
    {
        cardname:"X of Cups"
        ,filename:"cups10"
    },
    {
        cardname:"Page of Cups"
        ,filename:"cups11"
    },
    {
        cardname:"Knight of Cups"
        ,filename:"cups12"
    },
    {
        cardname:"Queen of Cups"
        ,filename:"cups13"
    },
    {
        cardname:"King of Cups"
        ,filename:"cups14"
    },
    {
        cardname:"Ace of Swords"
        ,filename:"sword1"
    },
    {
        cardname:"II of Swords"
        ,filename:"sword2"
    },
    {
        cardname:"III of Swords"
        ,filename:"sword3"
    },
    {
        cardname:"IV of Swords"
        ,filename:"sword4"
    },
    {
        cardname:"V of Swords"
        ,filename:"sword5"
    },
    {
        cardname:"VI of Swords"
        ,filename:"sword6"
    },
    {
        cardname:"VII of Swords"
        ,filename:"sword7"
    },
    {
        cardname:"VIII of Swords"
        ,filename:"sword8"
    },
    {
        cardname:"IX of Swords"
        ,filename:"sword9"
    },
    {
        cardname:"X of Swords"
        ,filename:"sword10"
    },
    {
        cardname:"Page of Swords"
        ,filename:"sword11"
    },
    {
        cardname:"Knight of Swords"
        ,filename:"sword12"
    },
    {
        cardname:"Queen of Swords"
        ,filename:"sword13"
    },
    {
        cardname:"King of Swords"
        ,filename:"sword14"
    },
    {
        cardname:"Ace of Pentacles"
        ,filename:"pentacles1"
    },
    {
        cardname:"II of Pentacles"
        ,filename:"pentacles2"
    },
    {
        cardname:"III of Pentacles"
        ,filename:"pentacles3"
    },
    {
        cardname:"IV of Pentacles"
        ,filename:"pentacles4"
    },
    {
        cardname:"V of Pentacles"
        ,filename:"pentacles5"
    },
    {
        cardname:"VI of Pentacles"
        ,filename:"pentacles6"
    },
    {
        cardname:"pentacles7"
        ,filename:"VII of Pentacles"
    },
    {
        cardname:"VIII of Pentacles"
        ,filename:"pentacles8"
    },
    {
        cardname:"IX of Pentacles"
        ,filename:"pentacles9"
    },
    {
        cardname:"X of Pentacles"
        ,filename:"pentacles10"
    },
    {
        cardname:"Page of Pentacles"
        ,filename:"pentacles11"
    },
    {
        cardname:"Knight of Pentacles"
        ,filename:"pentacles12"
    },
    {
        cardname:"Queen of Pentacles"
        ,filename:"pentacles13"
    },
    {
        cardname:"King of Pentacles"
        ,filename:"pentacles14"
    },
    {
        cardname:"Ace of Wands"
        ,filename:"wands1"
    },
    {
        cardname:"II of Wands"
        ,filename:"wands2"
    },
    {
        cardname:"III of Wands"
        ,filename:"wands3"
    },
    {
        cardname:"IV of Wands"
        ,filename:"wands4"
    },
    {
        cardname:"V of Wands"
        ,filename:"wands5"
    },
    {
        cardname:"VI of Wands"
        ,filename:"wands6"
    },
    {
        cardname:"VII of Wands"
        ,filename:"wands7"
    },
    {
        cardname:"VIII of Wands"
        ,filename:"wands8"
    },
    {
        cardname:"IX of Wands"
        ,filename:"wands9"
    },
    {
        cardname:"X of Wands"
        ,filename:"wands10"
    },
    {
        cardname:"Page of Wands"
        ,filename:"wands11"
    },
    {
        cardname:"Knight of Wands"
        ,filename:"wands12"
    },
    {
        cardname:"Queen of Wands"
        ,filename:"wands13"
    },
    {
        cardname:"King of Wands"
        ,filename:"wands14"
    },
];

tarotRandNum ="";
var tarotRandCard = "";

function tarotCard1(){

    reverseNum = Math.round(Math.random());

    if (reverseNum==0) {

        tarotRandNum = Math.floor(Math.random() * tarotList.length);
        tarotRandCard = "img_tarot/" + tarotList[tarotRandNum].filename + ".png";

        document.getElementById("cardImg1").src = tarotRandCard
        document.getElementById("cardName1").innerHTML = tarotList[tarotRandNum].cardname;
        document.getElementById("cardImg1").onclick = null;
        document.getElementById("cardImg1").style.cursor = "default";

        tarotList.splice(tarotRandNum,1);
    }
    else {
        tarotRandNum = Math.floor(Math.random() * tarotList.length);
        tarotRandCard = "img_tarot/" + tarotList[tarotRandNum].filename + ".png";

        document.getElementById("cardImg1").src = tarotRandCard;
        document.getElementById("cardImg1").style.transform = "rotate(180deg)";
        document.getElementById("cardName1").innerHTML = tarotList[tarotRandNum].cardname + ", Reversed";
        document.getElementById("cardImg1").onclick = null;
        document.getElementById("cardImg1").style.cursor = "default";
        
        tarotList.splice(tarotRandNum,1);

    }
}
function tarotCard2(){

    reverseNum = Math.round(Math.random());

    if (reverseNum==0) {

        tarotRandNum = Math.floor(Math.random() * tarotList.length);
        tarotRandCard = "img_tarot/" + tarotList[tarotRandNum].filename + ".png";

        document.getElementById("cardImg2").src = tarotRandCard
        document.getElementById("cardName2").innerHTML = tarotList[tarotRandNum].cardname;
        document.getElementById("cardImg2").onclick = null;
        document.getElementById("cardImg2").style.cursor = "default";
        
        tarotList.splice(tarotRandNum,1);
    }
    else {
        tarotRandNum = Math.floor(Math.random() * tarotList.length);
        tarotRandCard = "img_tarot/" + tarotList[tarotRandNum].filename + ".png";

        document.getElementById("cardImg2").src = tarotRandCard;
        document.getElementById("cardImg2").style.transform = "rotate(180deg)";
        document.getElementById("cardName2").innerHTML = tarotList[tarotRandNum].cardname + ", Reversed";
        document.getElementById("cardImg2").onclick = null;
        document.getElementById("cardImg2").style.cursor = "default";

        tarotList.splice(tarotRandNum,1);

    }
}
function tarotCard3(){

    reverseNum = Math.round(Math.random());

    if (reverseNum==0) {

        tarotRandNum = Math.floor(Math.random() * tarotList.length);
        tarotRandCard = "img_tarot/" + tarotList[tarotRandNum].filename + ".png";

        document.getElementById("cardImg3").src = tarotRandCard
        document.getElementById("cardName3").innerHTML = tarotList[tarotRandNum].cardname;
        document.getElementById("cardImg3").onclick = null;
        document.getElementById("cardImg3").style.cursor = "default";

        tarotList.splice(tarotRandNum,1);
    }
    else {
        tarotRandNum = Math.floor(Math.random() * tarotList.length);
        tarotRandCard = "img_tarot/" + tarotList[tarotRandNum].filename + ".png";

        document.getElementById("cardImg3").src = tarotRandCard;
        document.getElementById("cardImg3").style.transform = "rotate(180deg)";
        document.getElementById("cardName3").innerHTML = tarotList[tarotRandNum].cardname + ", Reversed";
        document.getElementById("cardImg3").onclick = null;
        document.getElementById("cardImg3").style.cursor = "default";

        tarotList.splice(tarotRandNum,1);

    }
}

/*transform: rotate(180deg);*/