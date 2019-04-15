const ExplosionEffect = new Set(["10021-10039", "10041-10069", "10101-10119", "10121-10139"])

function explosionEffect(){
    let expValue = grabSelectedValue("#explspr");
    
    let changemiscsprite = document.getElementById("changemiscsprite");
    let miscexplodesprite = document.getElementById("miscexplodesprite");
    let miscValue = Number(miscexplodesprite.value);
    switch (expValue) {
        case "10021-10039":
        miscexplodesprite.disabled = false;
        miscexplodesprite.setAttribute("min", "10021");
        miscexplodesprite.setAttribute("max", "10039");
        if (miscValue < 10021){
            miscexplodesprite.value = "10021";
        }else if(miscValue > 10039){
            miscexplodesprite.value = "10039";
        }
        changemiscsprite.innerText = "Note: This wil produce a few falling colors. Acceptable values are from 10021 to 10039.";
        break;
        case "10041-10069":
        miscexplodesprite.disabled = false;
        miscexplodesprite.setAttribute("min", "10041");
        miscexplodesprite.setAttribute("max", "10069");
        if (miscValue < 10041){
            miscexplodesprite.value = "10041";
        }else if(miscValue > 10069){
            miscexplodesprite.value = "10069";
        }
        changemiscsprite.innerText = "Note: This wil produce rising mists. Acceptable values are from 10041 to 10069.";

        break;
        case "10101-10119":
        miscexplodesprite.disabled = false;
        miscexplodesprite.setAttribute("min", "10101");
        miscexplodesprite.setAttribute("max", "10119");
        if (miscValue < 10101){
            miscexplodesprite.value = "10101";
        }else if(miscValue > 10119){
            miscexplodesprite.value = "10119";
        }
        changemiscsprite.innerText = "Note: This wil produce an explosion. Acceptable values are from 10101 to 10119.";

        break;
        case "10121-10139":
        miscexplodesprite.disabled = false;
        miscexplodesprite.setAttribute("min", "10121");
        miscexplodesprite.setAttribute("max", "10139");
        if (miscValue < 10121){
            miscexplodesprite.value = "10121";
        }else if(miscValue > 10139){
            miscexplodesprite.value = "10139";
        }
        changemiscsprite.innerText = "Note: This wil produce a gass explosion. Acceptable values are from 10121 to 10139.";
        break;
        default:
        miscexplodesprite.disabled = true;
        changemiscsprite.innerText = "";
        break;
    }
}



function checIfPathIsPriest(){

    let path1 = grabSelectedValue("#path 0");
    if (path1.value == "8"){
        document.getElementById("#godpathspell").disabled = false;
    }else{
        document.getElementById("#godpathspell").disabled = true;

    }
}

function checkSchool(){
    //is is possible to have priest spell that is not in the devine school
    let school = grabSelectedValue("#path 0");

    if (school.value == "8"){
        setSelectedValue("#school", "7");
    }
}

function spellcost(){

    let spellcost = document.getElementById("spellcost");

    let spellcostarray = ["Spell Cost: "];
    let fatiguecost = document.getElementById("#fatiguecost");

    let path0 = document.getElementById("#path 0");

    let gemtype = "gem";

    if (path0.value == "4"){
        gemtype = "pearl";
    }else if(path0.value == "-1"){
        gemtype = "blood slave";
    }

    //let spellcosttext = "Spell Cost: ";
    let fat_cost = parseInt(fatiguecost.value);

    let total_gems = String(Math.round(fat_cost / 100.0));

    if(document.getElementById("isritual").checked){
        spellcostarray.push(total_gems + " " + gemtype);

        if(fat_cost < 100 || fat_cost >= 200){
            spellcostarray.push("s");
        }
    }else{
        spellcostarray.push(fatiguecost.value + " fatigue");

        if(fat_cost >= 100){

            spellcostarray.push(" (" + total_gems + " " +  gemtype);

            if(fat_cost >= 200){
                spellcostarray.push("s)");
            }else{
                spellcostarray.push(")");
            }
        }
    }
    spellcost.innerText = spellcostarray.join("");
}

function ritualVsBattle(){
    enableOrDisable(document.getElementById('isritual'), 'ritual', 'battle');

    let isritual = document.getElementById("isritual").checked;
    let fatiguecost = document.getElementById("#fatiguecost");
    let isPriest = grabSelectedValue("#path 0").value == "8";

    //handleFatigueCost
    if (isritual){
        fatiguecost.setAttribute("step", "100");

        if(isPriest){
            fatiguecost.setAttribute("min", "0");
            fatiguecost.setAttribute("max", "0");
            fatiguecost.value = "0";
            //holy gems don't exsiht
        }else{
            fatiguecost.setAttribute("min", "100");
            fatiguecost.setAttribute("max", "3000");
            //requires at least 1 gem
            let val = Number(fatiguecost.value);

            if (val < 100){
                fatiguecost.value = "100";
            }else if(val % 100 != 0){
                let r = val % 100;
                fatiguecost.value = String(Math.round(r / 100.0));
                
            }
        }
    }else{
        fatiguecost.setAttribute("step", "1");

        if(isPriest){
            fatiguecost.setAttribute("min", "0");
            fatiguecost.setAttribute("max", "99");

            if (Number(fatiguecost.value) > 100){
                fatiguecost.value = "99";
            }
        }else{
            fatiguecost.setAttribute("min", "5");
            fatiguecost.setAttribute("max", "1000");

            let val = Number(fatiguecost.value);

            if (val < 5){
                fatiguecost.value = "5";
            }else if(val > 1000){
                fatiguecost.val = "1000";
            }
        }
        enableOrDisable(document.getElementById('per0').checked, '#aoe', '', true);
        enableOrDisable(document.getElementById('combateffect').value=='134', '#maxbounces', '', true)
    }
    
    spellcost();
    specialDamageEffects();
}

function specialDamageEffects(){
    if(document.getElementById("isritual").checked){
       // enableOrDisable(document.getElementById('combateffect').value=='134', '#maxbounces', '', true);
        enableOrDisable(document.getElementById('ritualeffect').value=='10010', 'helpfuleffects', 'dam');
        visibleOrInvisible(document.getElementById('ritualeffect').value=='10010', 'helpfuleffects', '', true);
    
        enableOrDisable(document.getElementById('ritualeffect').value=='10023', 'helpfuleffects2', 'dam');
        visibleOrInvisible(document.getElementById('ritualeffect').value=='10023', 'helpfuleffects2', '', true);
    
        enableOrDisable(document.getElementById('ritualeffect').value=='10011', 'afflictioneffects', 'dam');
        visibleOrInvisible(document.getElementById('ritualeffect').value=='10011', 'afflictioneffects', '', true);
        
        enableOrDisable(document.getElementById('ritualeffect').value=='10500' || 
        document.getElementById('combateffect').value=='600', 'statboost', '');
    }else{
        enableOrDisable(document.getElementById('combateffect').value=='134', '#maxbounces', '', true);
        enableOrDisable(document.getElementById('combateffect').value=='10', 'helpfuleffects', 'dam');
        visibleOrInvisible(document.getElementById('combateffect').value=='10', 'helpfuleffects', '', true);
    
        enableOrDisable(document.getElementById('combateffect').value=='23', 'helpfuleffects2', 'dam');
        visibleOrInvisible(document.getElementById('combateffect').value=='23', 'helpfuleffects2', '', true);
    
        enableOrDisable(document.getElementById('combateffect').value=='11', 'afflictioneffects', 'dam');
        visibleOrInvisible(document.getElementById('combateffect').value=='11', 'afflictioneffects', '', true);
        
        enableOrDisable(document.getElementById('combateffect').value=='500' || 
        document.getElementById('combateffect').value=='600', 'statboost', '');
    }
    

}

window.addEventListener("DOMContentLoaded", function (event) {

    createBitmaskTable("helpfuleffects", "Helpful Effects", 4, ["Bless", "Luck", "Precision", "Air Shield", 
    "Barkskin", "Regenaration", "Tough Armor", "Bezerk", 
    "Pain Transfer", "fire Resistance", "Shock Resistance", "Cold Resistance", 
    "Chill Aura", "Heat Aura", "Sermon of Courage", "Stone skin", 
    "Flying", "Quickness", "Weapons of Sharpness", "Astral Weapons", 
    "Reanimation", "Holy Avenger", "Flaming Arrows", "Magic Resistance", 
    "Magic Resistance", "Body Etheral", "Ironskin", "Communion Master", 
    "Communion Slave", "Enlarge", "Shrink", "?", 
    "?", "?", "?", "?", 
    "Piercing Restance", "Shield blocks 50%", "?", "Liquid Form", 
    "?", "?"]);

    createBitmaskTable("helpfuleffects2", "More Helpful Effects", 4, 
    ["Twist Fate", "Invlurability", "Quickness", "Mossbody",
    "?", "Water Shield", "?", "Strength",
    "Poison Barbs", "?", "?", "Life Drain",
    "Earth Power", "Air Power", "Charge Body", "Fire Shield",
    "Mistform", "Blood Power", "Fire Power", "Water Power", 
    "Nature Power", "Rreanimation", "Twiceborn", "Returning", 
    "Mirror Image", "Unholy Power", "Inner Sun", "Phoenix Pyre",
    "Astrial Shield", "Manikin Regeneration", "Dragon Mastery",
    "?", "?", "?", "Stygian Skin", 
    "Reinvigoration", "?", "Surge of Blood", "Awaken Tattoos"]);

    createBitmaskTable("afflictioneffects", "Afflictions", 4, afflictonList);
});
/*
23 1 -- twist fate
23 2 -- Invlurability
23 4 -- quickness
23 8 -- Mossbody - 100
23 16 -- ?
23 32 -- Water Shield
23 64 -- ?
23 128 -- Strength/Magic power
23 256 -- Poison Barbs - 100000000
23 512 -- ?
23 1024 -- ?
23 2048 -- Life Drain
23 4096 -- Earth Power
23 8192 -- Storm Power
23 16384 -- charge body - 100000000000000
23 32768 -- Fire Shield - 1000000000000000
23 65536 -- Mistform - 10000000000000000
23 131072 -- Hell Power
   1048576
262144
23 262144 -- Fire Power
23 524288 -- water power - 10000000000000000000
23 1048576 -- Nature Power - 100000000000000000000
23 2097152 -- Rreanimation
23 4194304 -- Twiceborn
23 8388608 -- Ritual of Returning
23 16777216 -- Mirror Image - 1000000000000000000000000
23 33554432 -- Unholy Power - 10000000000000000000000000
23 67108864 -- Inner SUn
23 134217728 -- Phoenix Pyre
23 268435456 -- Astrial Shield
23 536870912 -- Manikin Regeneration
23 1073741824 -- Dragon Mastery
23 2147483648 -- ?
23 4294967296 -- ?
23 8589934592 -- ?
23 17179869184 -- Stygian Skin
23 68719476736 -- Reinvigoration
23 137438953472 -- ?
23 274877906944 -- Surge of Blood?
23 549755813888 -- Awaken Tattoos


0	disease
1	curse
3	plague
5	curse of stones
6	entangle
7	rage
8	decay
9	burn
10	asleep
11	rusty armor
12	blind
13	bleed
14	earth grip
16	fire bonds
17	false fetters
18	limp
19	lost eye
20	weakness
21	battle fright
22	mute
23	chest wound
24	crippled
25	feeble minded
26	never healing wound
27	slime
28	frozen
29	webbed
30	arm loss
32	shrinked
34	confused
36	slowed
41	rusty
49	soul slayed
50	soul annihilated

*/



function createSpell(){

    //let pushTo = [];
    setText();
    
    let isNew = document.getElementById("#newspell").checked;

    if (isNew){
        checkIfElementIsChecked("#newspell");
    }else{
        getSingleValue("#selectspell");
        checkIfElementIsChecked("#clear");
    }

    checkIfElementIsChecked("#clearallspells");
    
    getSingleValue("#copyspell", "0");

    getMultipleValues("namedes", "");

    let isRitual = document.getElementById("isritual");

    let path0 = document.getElementById("#path 0").value;

    let schoolvalue = grabSelectedValue("#school");
    pushTo.push("#school " + schoolvalue);

    getSingleValue("#researchlevel");

    if (schoolvalue != "-1"){

        pushTo.push("#path 0 " + grabSelectedValue("path 0"));
        getSingleValue("#pathlevel 0");

        if(document.getElementById("has2ndpath").checked){
            pushTo.push("#path 1 " + grabSelectedValue("path 1"));
        getSingleValue("#pathlevel 1");
        }
    }

    if(!isRitual){
        getSingleValue("#fatiguecost");

        if(document.getElementById("bigarea").checked){
            let aoe = 0;
            if(document.getElementById("battlepercent").checked){
                aoe += 1000;
            }

            let battlepercent = document.getElementsByClassName("battlepercent");
            let battlepercentvalue = 0;
            for (let i = 0; i < battlepercent.length; i++){
                if (battlepercent[i].checked){
                    battlepercentvalue = Number(battlepercent[i].value);
                    break;
                }
            }

            if(battlepercentvalue === 0){
                aoe += Number( document.getElementById("#aoe").value);
            }else{
                aoe+= battlepercentvalue;
            }

            pushTo.push("#aoe " + aoe);
        }
    }

    let comeffSet = new Set(["10", "11", "23", "10010", "10011", "10023"]);

    if(isRitual){

        getSingleValue("#nextspell", "0");
        //todo nextingeo
        let ritval = grabSelectedValue("ritualeffect");
        if(ritval == "10500" || ritval == "10600"){

            ritval = ritval.substr(0, 3);
            let boostamount = Number( document.getElementById("boostamount").value) - 1;

            if (boostamount > 9){
                ritval+= boostamount;
            }else{
                ritval+= "0" + boostamount;
            }
            pushTo.push("#effect " + ritval);
            pushTo.push("#damage " + document.getElementById("permstat").value);

        }else if(comeffSet.has(ritval)){
            let dam = 0;
            pushTo.push("#effect " + ritval);

            if(ritval == "10010"){
                dam = String( calcBitmask("helpfuleffects"));
            }else if(ritval == "10021"){
                dam = String(calcBitmask("helpfuleffects2"));
            }else if(ritval == "10011"){
                dam = String(calcBitmask("afflictioneffects"));
            }
            pushTo.push("#damage " + dam);

        }else{
            pushTo.push("#effect " + ritval);
            getSingleValue("#damage");
        }

    }else{
        getSingleValue("#nextspell", "0");

        let comeff = grabSelectedValue("combateffect");

        if(comeff == "500" || comeff == "600"){

            comeff = comeff.substr(0, 1);
            let boostamount = Number( document.getElementById("boostamount").value) - 1;

            if (boostamount > 9){
                comeff+= boostamount;
            }else{
                comeff+= "0" + boostamount;
            }
            pushTo.push("#effect " + comeff);
            pushTo.push("#damage " + document.getElementById("permstat").value);

        }else if(comeffSet.has(comeff)){
            let dam = 0;
            pushTo.push("#effect " + comeff);

            if(ritval == "10"){
                dam = String( calcBitmask("helpfuleffects"));
            }else if(ritval == "21"){
                dam = String(calcBitmask("helpfuleffects2"));
            }else if(ritval == "11"){
                dam = String(calcBitmask("afflictioneffects"));
            }
            pushTo.push("#damage " + dam);

        }else{
            pushTo.push("#effect " + comeff);
            getSingleValue("#damage");
        }
    }

    let nreff = Number(document.getElementById("#nreff").value);

    if (document.getElementById("poweffects").checked){
        nreff += 1000;
    }



    pushTo.push("#nreff " + nreff);

    if(!isRitual){

        let range = Number(document.getElementById("#range").value);

        if(document.getElementById("powrange").checked){
            range+= 5000;
        }

        pushTo.push("#range " + range);

        getSingleValue("#precision");

        let explspr = document.getElementById("#explspr");

        if(ExplosionEffect.has(explspr.value)){
            pushTo.push("#explspr " + document.getElementById("miscexplodesprite").value);
        }else{
            pushTo.push("#explspr " + explspr.value);
        }

        let flysp = document.getElementById("flysp");

        if (flysp.value === "sprite"){
            pushTo.push("#flysp " + document.getElementById("partball").value);
        }else{
            pushTo.push("#flysp " + flysp.value);
        }

        if(document.getElementById("customSound").checked){
            getSingleValue("#sample");
        }else{
            getSingleValue("#sound");
        }
    }else{
        getSingleValue("#provrange");

        geoEffect("onlygeosrc");

        geoEffect("nogeosrc");

        geoEffect("onlygeodst");

        geoEffect("nogeodst");

        /*
        let onlygeosrc = Array.from(document.getElementsByClassName("onlygeosrc"));
        
        let onlygeosrcFilter = onlygeosrc.filter(element => element.checked);

        if(onlygeosrcFilter.length > 0){
            let onlygeosrcNumber = onlygeosrcFilter.map(Number(element.value));

            pushTo.push("#onlygeosrc " + onlygeosrcNumber.reduce(addUp));
        }
        
        let nogeosrc = Array.from(document.getElementsByClassName("nogeosrc"));

        let nogeosrcFilter = nogeosrc.filter(element => element.checked);

        if(nogeosrcFilter.length > 0){
            let nogeosrcNumber = nogeosrcFilter.map()
        }
        */

        getSingleValue("#onlyatsite");

        let ritualoptions = document.getElementsByClassName("ritualoptions");

        for (let i = 0; i < ritualoptions.length; i++){
            if(ritualoptions[i].checked){
                pushTo.push(ritualoptions[i].id + " 1");
            }
        }
    }

    //spec
    geoEffect("spec");

    let restricted = document.getElementsByClassName("restricted");

    for(let i = 0; i < restricted.length; i++){
        if(restricted[i].value != "0"){
            pushTo.push("#restricted " + restricted[i].value);
        }
    }

    getSingleValue("#notfornation", "0");

    if(document.getElementById("setcasttime").checked){
        getSingleValue("#casttime");
    }

    if(path0 == "8"){
        pushTo.push("#godpathspell " + grabSelectedValue("#godpathspell"));
    }

    checkIfAnyElementIsChecked("atribbool");

    getSingleValue("#onlymnr", "-1");
    getSingleValue("#maxbounces");

    pushTo.push("#end");

    return getText();
}