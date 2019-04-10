var templates = new Map();
templates.set("human", {
    hp:"10",
    str:"10",
    mr:"10",
    coldblood:false
});
templates.set("ulm", {
    hp:"13",//12-16
    str:"12",//11-13
    mr:"8",
    def:"11",
    //mor:11-14
    ap:"13",
    coldblood:false
});
templates.set("colossi", {
    hp:"20",//18-22
    str:"14",//13-15
    mr:"17",//13-17
    size:"3",
    mor:"14",//13-15
    att:"11",//9-12
    ap:"14",
    holy:true,
    coldblood:false
    //maxage 285-365
})
templates.set("abysian", {
    hp:"20",
    str:"13",
    mr:"12",
    ap:"11",
    fireres:"25",
    maxage:"35",
    coldblood:false
});
templates.set("caelian", {
    hp:"9",
    str:"9",
    mr:"12",
    coldres:"5",
    flying:true,
    coldblood:false
});
templates.set("ctis", {
    hp:"11",//10-14
    mr:"12",//12-18
    poisonres:"7",
    coldblood:true
});
templates.set("satyr", {
    hp:"12",//12-16
    str:"11",//11-12
    mr:"13",//
    mor:"9",//9-12
    ap:"14",
    mapmove:"18",
    stealthy:"40",//40-65
    female:false,
    undisciplined:true,
    forestsurvival:true,
    heal:true,
    coldblood:false
});
templates.set("dryad", {
    hp:"11",
    mr:"16",
    def:"12",
    stealthy:"65",
    awe:"4",
    female:true,
    holy:true,
    forestsurvival:true,
    heal:true,
    seduce:true,
    coldblood:false
});
templates.set("centaur", {
    hp:"20",//18-23
    str:"13",//12-14
    mr:"14",//13-15
    stealthy:"40",
    size:"3",
    mor:"12",//11-15
    prec:"12",
    ap:"31",//30-32
    forestsurvival:true,
    heal:true,
    coldblood:false
});
templates.set("harpy", {
    hp:"7",
    str:"8",
    mr:"11",
    ap:"4",
    att:"8",
    prec:"8",
    stealthy:"40",
    //10 leardership
    //4 ap

    female:true,
    forestsurvival:true,
    heal:true,
    flying:true,
    coldblood:false


});
templates.set("mino", {
    hp:"25",
    str:"16",
    mr:"11",
    prec:"8",
    coldblood:false
});
templates.set("paleone", {
    hp:"18",//18-22
    str:"12",//12-13
    mr:"12",//12-15
    size:"3",
    prec:"7",
    def:"7",//7-9
    att:"8",//7-8
    eyes:"1",
    maxage:"400",//starting age 82-110
    darkvision:"100",
    amphibian:true,
    coldblood:true,
    neednoteat:true
});
templates.set("oldpaleone", {
    hp:"42",//40-44
    str:"19",//18-20
    mr:"13",//13-18
    size:"4",
    prec:"7",
    ap:"14",
    def:"8",//8-10
    att:"9",//8-10
    eyes:"1",
    maxage:"400",//starting age 220-385
    darkvision:"100",
    amphibian:true,
    coldblood:true,
    neednoteat:true
});
templates.set("firbolg",{
    hp:"13",
    str:"11",
    mr:"13",
    prec:"12",
    coldblood:false
});
templates.set("tuatha",{
    hp:"14",
    str:"13",
    mr:"14",
    mor:"14",
    ap:"13",
    att:"13",
    darkvision:"50",
    stealthy:"65",
    maxage:"300",//age 120
    illusion:true,
    forestsurvival:true,
    coldblood:false
})
templates.set("van",{
    hp:"13",
    str:"11",
    mr:"14",
    prec:"12",
    stealthy:"40",
    illusion:true,
    coldblood:false
});
templates.set("jotun",{
    hp:"30",
    str:"20",
    mr:"12",
    size:"4",
    cr:"15",
    coldblood:false
});
templates.set("markata",{
    hp:"5",
    str:"5",
    mr:"7",
    mor:"7",
    size:"1",
    prec:"8",
    forestsurvival:true,
    animal:true,
    coldblood:false
});
templates.set("atavi",{
    mor:"8",
    forestsurvival:true,
    animal:true,
    coldblood:false
});
templates.set("bandar",{
    hp:"18",
    str:"15",
    mr:"8",
    att:"9",
    prec:"9",
    forestsurvival:true,
    animal:true,
    coldblood:false
});
templates.set("whiteone",{
    hp:"9",
    str:"9",
    mr:"14",
    att:"7",
    prec:"8",
    reincarnation:"50",
    maxage:"60",
    forestsurvival:true,
    animal:true,
    holy:true,
    coldblood:false
    //leadership is 10
    //age si 36
});
templates.set("naga",{
    hp:"18",
    str:"12",
    mr:"13",
    mor:"12",
    prot:"5",
    poisonres:"10",
    //magic leadership 10
    //encumberance 4
    maxage:"300",
    //current age 180
    holy:true,
    magicbeing:true,
    coldblood:true,
    swampsurvival:true,
    spiritsight:true
});
templates.set("tengu",{
    hp:"13",
    str:"11",
    mr:"14",
    mor:"13",
    att:"13",
    def:"14",
    prec:"12",
    holy:true,
    flying:true,
    stormimmune:true,
    mountainsurvival:true,
    coldblood:false

    //16 16 14 13  = 59 / 4 = 10
});
//Bakemono
templates.set("bakemono", {
    hp:"9",
    str:"9",
    mr:"9",
    mor:"9",
    dv:"50",
    stealthy:"40",
    undisciplined:true,
    forestsurvival:true,
    mountainsurvival:true//base cost +7
})
templates.set("altantian",{
    hp:"12",
    str:"11",
    prec:"8",
    dv:"50",
    maxage:"500",
    amphibian:true,
    coldblood:false
});
templates.set("shambler", {
    hp:"22",
    str:"15",
    size:"3",
    mor:"11",
    prec:"8",
    dv:"50",
    maxage:"500",
    older:"143",
    amphibian:true,
    coldblood:false
});
templates.set("merman", {
    mr:"12",
    mor:"11",
    amphibian:true,
    naga:true,
    coldblood:false
});
templates.set("triton", {
    mr:"11",
    mor:"11",
    aquatic:true,
    coldblood:false
});


function checkValue(valueName, objectValue, reserveValue){
    if(objectValue === null){
        document.getElementById(valueName).value = reserveValue;
    }else{
        document.getElementById(valueName).value = objectValue;
    }
}

function checkBoolian(valueName, objectValue, reserveValueName){
    if(objectValue === null){
        document.getElementById(valueName).checked = false;
        if(reserveValueName){
            document.getElementById(reserveValueName).checked = true;
        }
    }else{
        document.getElementById(valueName).checked = objectValue;
        if(reserveValueName){
            document.getElementById(reserveValueName).checked = !objectValue;
        }
    }
}

function checkBoolianUnobtrusive(valueName, objectValue){
    if(objectValue !== null){
        document.getElementById(valueName).checked = objectValue;

    }
}

function applyTemplate(templateName){
    let o = templates.get(templateName);

    checkValue("#hp", o.hp, "10");
    checkValue("#str", o.str, "10");
    checkValue("#mr", o.mr, "10");
    checkValue("#prec", o.prec, "10");
    checkValue("#fireres", o.fireres, "0");
    checkValue("#coldres", o.coldres, "0");
    checkValue("#poisonres", o.poisonres, "0");
    checkValue("#darkvision", o.darkvision, "0");
    checkValue("#stealthy", o.stealthy, "0");
    checkValue("#maxage", o.maxage, "50");
    checkValue("#eyes", o.eyes, "2");
    checkValue("#reincarnation", o.reincarnation, "0");

    checkBoolian("#flying", o.flying);
    checkBoolian("#stormimmune", o.stormimmune);

    checkBoolian("#illusion", o.illusion);
    checkBoolian("#undisciplined", o.undisciplined);
    checkBoolian("#forestsurvival", o.forestsurvival);
    checkBoolian("#mountainsurvival", o.mountainsurvival);
    checkBoolian("#swampsurvival", o.swampsurvival);

    checkBoolian("#animal", o.animal);
    checkBoolian("#coldblood", o.coldblood);

    checkBoolian("#aquatic", o.aquatic, "#nounderwater");
    checkBoolian("#amphibian", o.amphibian, "#nounderwater");
    checkBoolian("#magicbeing", o.magicbeing);
    checkBoolian("#neednoteat", o.neednoteat);

    checkBoolianUnobtrusive("#female", o.female);
    checkBoolianUnobtrusive("#holy", o.holy);


    /*
    if (o.hp){
        document.getElementById("#hp").value = o.hp;
    }else{
        document.getElementById("#hp").value = "10";
    }
    if (o.str){
        document.getElementById("#str").value = o.str;
    }else{
        document.getElementById("#str").value = "10";
    }
    if (o.mr){
        document.getElementById("#mr").value = o.mr;
    }else{
        document.getElementById("#mr").value = "10";
    }
    if(o.prec){
        document.getElementById("#prec").value = o.prec;
    }else{

    }
    */
}

function stealthCheck(){

    let stealthy = Number(document.getElementById("#stealthy").value) > 0;
    enableOrDisable(stealthy, "reqStealth", "");
    let assassin = document.getElementById("#assassin");

    if (stealthy){
        //is stealth is greater then 0, enable assassin element
        assassin.disabled = false;
        // if assassin element is checked, enable all elements with the class reqAssassin
        enableOrDisable(assassin.checked, "reqAssassin", "");

    }else{
        assassin.disabled = true;
        enableOrDisable(true, "", "reqAssassin");
    }
}

function copyBodyData(){
    let bt = document.getElementById("bodytemplate");

    let hands = "2";
    let heads = "1";
    let body = true;
    let feet = true;
    let misc = "2";

    switch (bt.value) {
        case "#humanoid":
            break;
        case "#naga":
        case "#mountedhumanoid":
            feet = false;
            break;
        case "#lizard":
            hands = "0";
            body = false;
            feet = false;
            break;
        case "#bird":
        case "#snake":
        case "#quadruped":
            head = "0";
            hands = "0";
            body = false;
            feet = false;
            break;
        case "#djinn":
            feet = false;
            body = false;
            break;
        case "#troglodyte":
            heads = "0";
            break;
        default:
            break;
    }

    document.getElementById("num-hands").value = hands;
    document.getElementById("num-heads").value = heads;
    document.getElementById("has-body").checked = body;
    document.getElementById("has-feet").checked = feet;
    document.getElementById("num-misc").value = misc;

}

function trampleCheck(){
    let canTrample = document.getElementById("#trample").checked;

    let trampswallow = document.getElementById("#trampswallow");

    trampswallow.disabled = !canTrample;

    enableOrDisable(canTrample && trampswallow.checked, "dige", "");
}

function calcWoundfend(){
    let woundfend = parseInt(document.getElementById("#woundfend").value);
    if (woundfend == 0){
        return "0%";
    }else{
        
        return String(1 / (woundfend + 1)) + "%";
    }
}

function checkPriest(){

    let priestSkill = document.getElementById("#magiclevel 8").value;

    if(priestSkill != "0"){
        document.getElementById("#holy").checked = true;
        document.getElementById("#elegist").disabled = false;
        document.getElementById('#inquisitor').disabled = false;
    }else{
        document.getElementById("#elegist").disabled = true;
        document.getElementById('#inquisitor').disabled = true;
    }
}

function setAsScout(){

    //document.getElementById("#noleader").checked = true;
    document.getElementById("leadership").value = "#noleader";

    document.getElementById("#command").value = "0";

    document.getElementById("magicleadership").value = "#nomagicleader";
    document.getElementById("#magiccommand").value = "0";

    document.getElementById("undeadleadership").value = "#noundeadleader";
    document.getElementById("#undcommand").value = "0";

    let stealthy = document.getElementById("#stealthy");

    if (Number(stealthy.value) < 10){
        stealthy.value = "10";
    }
}

window.addEventListener("DOMContentLoaded", function(event){
    enableOrDisable(document.getElementById('bodytype').value==='#miscshape', 'bpnum', '');
});

function createMonster(){

    let isNew = document.getElementById("is-monster-new").checked;

    let newLine = "\n";

    //let returnText = [];
    setText();

    let isgod = document.getElementById("isgod").checked;
    let newmonster = document.getElementById("is-monster-new").checked;
    if (isNew){

        getSingleValue("#name");
        getSingleValue("#newmonster");

        copystats = document.getElementById("#copystats");

        getSingleValue("#copystats", "3499");

    }else{
        getSingleValue("#selectmonster");
    }

    if(!newmonster){
        let clear = document.getElementById("#clear").checked;
        if (clear){
            pushTo.push("#clear");
        }else{
            checkIfAnyElementIsChecked("clearData");
        }
    }

    if(isgod){
        getSingleValue("#pathcost");
        getSingleValue("#startdom");

        if (!isNew){
            let clearrealm = document.getElementById("clearrealm").checked;
            if (clearrealm){

                pushTo.push("#homerealm 0");
            }
        }

        getSingleValue("#homerealm");
    }

    getSingleValue("#fixedname");
    getSingleValue("#spr1");
    getSingleValue("#spr2");

    /*
    returnText.push(returnValue(
        document.getElementById("#speciallook"), newLine, "\"", invalidValue="0"
    ));*/

    getSingleValue("#speciallook", "0");

    //Recruitment Restrictions
    if (!isNew){
        if (!document.getElementById("#slowrec").checked){
            pushTo.push("#noslowrec");
        }else{
            pushTo.push("#slowrec");
        }
    }else{
        checkIfElementIsChecked("#slowrec");
    }

    getMultipleValues("recrestrict", "0");
    //getSingleValue("#reclimit",  "0");
    //getSingleValue("#enchrebate50",  "0");

    checkIfAnyElementIsChecked("reqbuildings");

    getMultipleValues("scaleValues", "0");

    checkIfAnyElementIsChecked("aireq");

    getMultipleValues("recreq", "0");
    // TODO: handle monpresentrec and ownsmonrec done

    //desertion

    checkIfAnyElementIsChecked("desertionbool");
    getMultipleValues("desertionnum", "0");

    getMultipleValues("cost", "0");

    if(document.getElementById("autocalc").checked){
        pushTo.push("#gcost " + (Number(document.getElementById("#gcostaj").value) + 10000));
    }else{
        getSingleValue("#gcost", "0");
    }

    // TODO: handle automatic gold calculation

    checkIfAnyElementIsChecked("atributes");

    let eyes = document.getElementById("#eyes");

    if (eyes.value > 0){
        pushTo.push("#eyes " + eyes.value);
    }else{
        pushTo.push("#blind");
    }

    getSingleValue("#voidsanity", "0");
    /*
    let weapons = document.getElementsByClassName("#weapon");

    for (let i = 1; i < weapons.lenght; i++){

        if (Number(weapons[i].value) > 0){
            pushTo.push("#weapon " + weapons[i].value);
        }
    }*/

    getMultipleValues("#weapon" , "0", true);
    /*
    let armor = document.getElementsByClassName("#armor");

    for (let i = 1; i < armor.lenght; i++){

        if (Number(armor[i].value) > 0){
            pushTo.push("#armor " + armor[i].value);
        }
    }*/

    getMultipleValues("#armor" , "0", true);

    let bt = grabSelectedValue("bodytype");

    pushTo.push(bt);
    

    getSingleValue("#startitem",  "0");
    getSingleValue("#userestricteditem", "0");

    checkIfElementIsChecked("#noitem");

    if(bt==="#miscshape"){
        let itemSlotValues = 0;
        let numHands = document.getElementById("num-hands");
        if (numHands > 0){
            itemSlotValues += (2 ** (numHands + 1)) - 2;
        }
        /*
        0, 1, 2, 3, 4,  5,  6,  7,   8,   9,   10,   11,   12
        1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096
        */
        let numHeads = document.getElementById("num-heads");
    
        for (let i = 1; i <= numHeads; i++){
            itemSlotValues += 2 ** (i + 6);
        }
    
        if (document.getElementById("has-body").checked){
            itemSlotValues += 1024;
        }
    
        if (document.getElementById("has-feet").checked){
            itemSlotValues += 2048;
        }
    
        let numMisc = document.getElementById("num-misc");
        for (let i = 1; i <= numMisc; i++){
            itemSlotValues += 2 ** (i + 11);
        }
    
        if(document.getElementById("only-crowns").checked){
            itemSlotValues += 262144;
        }
    
        if (itemSlotValues == 0){
            itemSlotValues = 1;
        }
    
        pushTo.push("#itemslots " + itemSlotValues );
    
    }

    checkIfAnyElementIsChecked("atributes");

    checkIfAnyElementIsChecked("horror", "#nonehorror", true);

    checkIfElementIsChecked("#immobile");

    checkIfAnyElementIsChecked("underwaterMove", "#nounderwater", true);

    checkIfElementIsChecked("#swimming");

    checkIfElementIsChecked("#snow");
    /*
    let canFly = document.getElementById("#flying").checked;

    if (canFly){
        pushTo.push('#flying\n');

        checkIfElementIsChecked("#stormimmune");
    }*/

    checkIfElementIsChecked("#flying");
    checkIfElementIsChecked("#stormimmune");

    checkIfAnyElementIsChecked("teleport", "#noteleport", true);

    checkIfElementIsChecked("#noriverpass");

    checkIfAnyElementIsChecked("survival");

    if(document.getElementById("sailing").checked){

        pushTo.push("#sailing " + document.getElementById("sailing1").value + " " + document.getElementById("sailing2").value );

        getSingleValue("#farsail", "0");
    }

    getMultipleValues("miscMove", "0");

    checkIfElementIsChecked("#illusion");

    let stealth = document.getElementById("#stealthy").value;

    if (Number(stealth) > 0){

        pushTo.push("#stealthy " + stealth);

        getMultipleValues("reqStealth", "0");

        let isAssassin = document.getElementById("#assassin").checked;

        if (isAssassin){

            pushTo.push("#assassin");

            checkIfElementIsChecked("#scalewalls");

            getSingleValue("#patience", "0");
        }
    }

    getMultipleValues("camo",  "0");

    if(document.getElementById("setStartAge").checked){

        getSingleValue("#startage");
    }

    getSingleValue("#maxage");

    getMultipleValues("miscAge",  "0");

    checkIfAnyElementIsChecked("healing",  "#standardHealing", true);

    getMultipleValues("healthnum",  "0");

    let hpoverflow = document.getElementById("#hpoverflow").checked;

    if(hpoverflow){

        pushTo.push("#hpoverflow\n");
    }else{
        getSingleValue("#hpoverslow",  "0");
    }

    let corpseeater = document.getElementById("#corpseeater").checked;

    if (corpseeater){

        pushTo.push("#corpseeater\n");

        getSingleValue("#deadhp");
    }

    let startaff = Number(document.getElementById("#startaff"));

    let tot = calcBitmask("aw");

    if (startaff > 0 && tot > 0){

        pushTo.push("#startaff " + startaff);
        pushTo.push("#startingaff " + tot);

        /*
        aws = document.getElementsByClassName("aw");
        let total = 0;

        for (let i = 0; i < aws.length; i++){
            if(aws[i].checked){
                total += 2 ** Number(aws[i].value);
            }
        }

        pushTo.push(" " + total);
        */
    }

    getSingleValue("#insane",  "0");

    checkIfAnyElementIsChecked("resbool");

    getMultipleValues("resnum",  "0");

    checkIfAnyElementIsChecked("aurabool");

    getMultipleValues("auranum",  "0");

    getMultipleValues("seasonpow",  "0");
    getMultipleValues("comabilnum",  "0");
    checkIfAnyElementIsChecked("comabilbool");

    let trample = document.getElementById("#trample").checked;

    if (trample){
        pushTo.push("#trample\n");

        let trampswallow = document.getElementById("#trampswallow").checked;

        if(trampswallow){
            pushTo.push("#trampswallow\n");

            getMultipleValues("dige");
        }
    }

    getMultipleValues("noncomnum",  "0");
    checkIfAnyElementIsChecked("noncombool");

    getMultipleValues("shapechange",  "0");
    getMultipleValues("hpshapechange",  "0");

    checkIfAnyElementIsChecked("#transformation",  "#transformation 0");

    let atunmentchance = document.getElementById("atunmentchance");

    if (Number(atunmentchance.value) > 0){
        let atunvalue = grabSelectedValue(attuned);
        if(atunvalue != "na"){
            pushTo.push("#" + atunvalue + "attuned " + atunmentchance.value);
        }
    }

    checkIfElementIsChecked("#cleanshape");

    getSingleValue("#reanimator",  "0");

    getMultipleValues("domsummon",  "0");

    let makemonsters = document.getElementById("makemonsters");
    let makemonstersnum = document.getElementById("makemonstersnum");

    if (Number(makemonsters.value) > 0 && Number(makemonstersnum.value) > 0){

        pushTo.push("#makemonsters" + makemonsters.value + " " + makemonstersnum.value);
    }

    let summonmonsters = document.getElementById("summonmonsters");
    let summonmonstersnum = document.getElementById("summonmonstersnum");
    if (Number(summonmonsters.value) > 0 && Number(summonmonstersnum.value) > 0){

        pushTo.push("#summon" + summonmonsters.value + " " + summonmonstersnum.value);
    }

    let battlesum = document.getElementById("battlesum");
    let battlemonstersnum = document.getElementById("battlemonstersnum");
    if (Number(battlesum.value) > 0 && Number(battlemonstersnum.value) > 0){

        pushTo.push("#battlesum" + battlesum.value + " " + battlemonstersnum.value);
    }

    let batstartsum = document.getElementById("batstartsum");
    let battlestartmonstersnum = document.getElementById("battlestartmonstersnum");
    if (Number(battlesum.value) > 0 && Number(battlestartmonstersnum.value) > 0){

        pushTo.push("#batstartsum" + batstartsum.value + " " + battlestartmonstersnum.value);
    }

    let batdicesum = document.getElementById("batdicesum");
    let battledicemonstersnum = document.getElementById("battledicemonstersnum");
    if (Number(batdicesum.value) > 0 && Number(battledicemonstersnum.value) > 0){

        pushTo.push("#batstartsum" + batdicesum.value + "d6 " + battledicemonstersnum.value);
    }

    getSingleValue("#montag",  "999");

    getMultipleValues("monlord",  "0");

    if (document.getElementById("customnamelist").checked){

        pushTo.push("#nametype " + document.getElementById("customnamelistnum").value);
    }else{
        getSelectedValue("#nametype")
        //pushTo.push("#nametype " + grabSelectedValue("#nametype"));
    }

    //checkIfAnyElementIsChecked("leadership",  "#okleader", true);

    let leadership = grabSelectedValue("leadership");

    if(leadership != "#okleader"){

        pushTo.push(leadership);

    }

    let magicleadership = grabSelectedValue("magicleadership");
    
    if (magicleadership != "#nomagicleader"){
        pushTo.push(magicleadership);
    }

    let undeadleadership = grabSelectedValue("undeadleadership");

    if (undeadleadership != "#noundeadleader"){
        pushTo.push(undeadleadership);
    }

    getMultipleValues("incleadership",  "0");

    checkIfAnyElementIsChecked("almostlivingdead");

    getMultipleValues("moralenum",  "0");

    checkIfAnyElementIsChecked("moralebool");
    
    /*
    if (document.getElementById("#magiclevel1").value != "0"){
        //let magic_path = grabSelectedValue("magicskill1");
        pushTo.push("#magicskill " + grabSelectedValue("magicskill1") + " " + document.getElementById("#magiclevel1").value);
    
        let magiclevel1 = document.getElementById("magiclevel1").value;

    if (magiclevel1 != "0") {
        pushTo.push("#magicskill " + grabSelectedValue("magicskill1") + " " + magiclevel1);
    }
    }*/

    getMultipleValues("magicLevels", "0");

    let magicchance = document.getElementById("magicchance").value;

    if (magicchance != "0"){
        let pathmask = 0;
        let paths = document.getElementsByClassName("mchance1");

        for (let i = 0; i < paths.length; i++){
            pathmask += Number(paths[i].value);
        }

        if (pathmask != 0){
            pushTo.push("#custommagic " + pathmask + " " + magicchance);
        }
    }

    let boostamount1 = document.getElementById("boostamount1").value;

    if(boostamount1 != "0"){
        pushTo.push("#magicboost " + grabSelectedValue("magicboost1") + " " + boostamount1);
    }

    checkIfElementIsChecked("#masterrit");

    getMultipleValues("magRange",  "0");
    getMultipleValues("magres",  "0");

    checkIfAnyElementIsChecked("imm");

    let gemproduced = document.getElementById("gemproduced").value;

    if (gemproduced != "0"){
        let magicgems = grabSelectedValue("magicgems");

        if (magicgems != "8"){

            pushTo.push("#gemprod " + magicgems + " " + gemproduced);
        }
    }

    getMultipleValues("tempgems",  "0");

    getSingleValue("#onebattlespell");

    checkIfAnyElementIsChecked("deathbanish",  "0", true);

    getMultipleValues("escapechance",  "0");
    getMultipleValues("othermagic",  "0");

    checkIfAnyElementIsChecked("miscbool");
    getMultipleValues("miscnum", "0");

    pushTo.push("#end");
    return getText();
}
