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
}

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

    getSingleValue("#damage");

    if(!isRitual){

        getSingleValue("#nextspell", "-1");
        //todo nextingeo
        pushTo.push("#effect " + grabSelectedValue("ritualeffect"));
    }else{

        grabSelectedValue("combateffect");
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