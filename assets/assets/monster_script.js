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
        enableOrDisable(true, "", "reqAssassin")
    }
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

    document.getElementById("#noleader").checked = true;
    document.getElementById("#command").value = "0";

    document.getElementById("magicleadership").value = "#nomagicleader";
    document.getElementById("#magiccommand").value = "0";

    document.getElementById("undeadleadership").value = "#noundeadleader";
    document.getElementById("#undcommand").value = "0";

    let stealthy = document.getElementById("#stealthy");

    if (Number(stealthy.value) < 10){
        stealthy.value / "10";
    }
}

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

    getMultipleValues("scaleValues", invalidValue="0");

    checkIfAnyElementIsChecked("aireq");

    getMultipleValues("recreq", "-1");
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

    let weapons = document.getElementsByClassName("#weapon");

    for (let i = 1; i < weapons.lenght; i++){

        if (Number(weapons[i].value) > -1){
            pushTo.push("#weapon " + weapons[i].value);
        }
    }

    let armor = document.getElementsByClassName("#armor");

    for (let i = 1; i < armor.lenght; i++){

        if (Number(armor[i].value) > -1){
            pushTo.push("#armor " + armor[i].value);
        }
    }

    pushTo.push(grabSelectedValue("bodytype"));

    getSingleValue("#startitem",  "-1");
    getSingleValue("#userestricteditem", "0");

    checkIfElementIsChecked("#noitem");

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

    checkIfAnyElementIsChecked("atributes");

    checkIfAnyElementIsChecked("horror", "#nonehorror", true);

    checkIfElementIsChecked("#immobile");

    checkIfAnyElementIsChecked("underwaterMove", "#nounderwater", true);

    checkIfElementIsChecked("#snow");

    let canFly = document.getElementById("#flying").checked;

    if (canFly){
        pushTo.push('#flying\n');

        checkIfElementIsChecked("#stormimmune");
    }

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

    if (startaff > 0){
        pushTo.push("#startaff " + startaff);
        aws = document.getElementsByClassName("aw");
        let total = 0;

        for (let i = 0; i < aws.length; i++){
            if(aws[i].checked){
                total += 2 ** Number(aws[i].value);
            }
        }

        pushTo.push(" " + total);
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

    checkIfAnyElementIsChecked("#transformation",  "standardresult");

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
        pushTo.push("#nametype " + grabSelectedValue("#nametype"));
    }

    checkIfAnyElementIsChecked("leadership",  "#okleader", true);

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
