//import {checkIfElementIsChecked, checkIfAnyElementIsChecked, getSingleValue, getMultipleValues} from "/checkers_and_getters.js";

function handleIsNew(){
    let isWepNew = document.getElementById("is-wep-new").checked;

    if(isWepNew){
        document.getElementById("#selectweapon").disabled = true;
    }
}

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

function createWeapon(){
    let isWepNew = document.getElementById("is-wep-new").checked;
    //var selectedWep = document.getElementById("#selectweapon");
    //var new_w_num = document.getElementById("#newweapon");
    let hasCustomSound = document.getElementById("w-custom-sound").checked;
    let isNatural = document.getElementById("#natural").checked;
    let isRanged = document.getElementById("is-ranged").checked;
    let damageType = document.getElementById("dam-type");

    setText()

    if (isWepNew){
        getSingleValue("#newweapon");
        getSingleValue("#name");
    }else{
        getSingleValue("#selectweapon");
    }

    getMultipleValues("base-values");

    checkIfElementIsChecked("#twohanded");

    if (hasCustomSound){
        getSingleValue("#sample");
    }else{
      getSingleValue("#sound");
    }

    if (isNatural){
        pushTo.push("#natural");
    }else{
        getSingleValue("#rcost");
    }

    if (isRanged){
        getMultipleValues("rangeammo");
    }

    //pushTo.push(damageType.value);

    let dt = damageType.value;

    if (damageType.value === "#dt_aff"){
        aws = document.getElementsByClassName("aw");

        let total = 0;

        for (let i = 0; i < aws.length; i++){
            if(aws[i].checked){
                total += 2 ** Number(aws[i].value);
            }
        }

        pushTo.push(dt + " " + total);
    }else{
        pushTo.push(dt);
    }

    //get damage qualifiers

    checkIfAnyElementIsChecked("dq");
    checkIfAnyElementIsChecked("armor-effect", "ae-none");
    checkIfAnyElementIsChecked("strength-amount", "", true);
    checkIfAnyElementIsChecked("mr-difficulty", "", true);
    checkIfAnyElementIsChecked('immune');
    checkIfAnyElementIsChecked("w-only-affect",  "#none", true);

    checkIfElementIsChecked("#internal");

    getSingleValue("#aoe", "-1");

    checkIfElementIsChecked("#bonus",  "");

    getSingleValue("#secondaryeffect", "-1");
    getSingleValue("#secondaryeffectalways", "-1");

    checkIfAnyElementIsChecked("mr-mat", "", true);
    checkIfAnyElementIsChecked("otherAtri");

    if (isRanged){
        checkIfElementIsChecked("#range050");
        checkIfElementIsChecked("#range0");
    }else{
        checkIfElementIsChecked("#melee50");
    }

    checkIfAnyElementIsChecked("skipWeapon");
    checkIfAnyElementIsChecked("w-underwater", "", true);

    let explspr = grabSelectedValue("#explspr");

    switch (explspr) {
        case "10021-10039":
        case "10041-10069":
        case "10101-10119":
        case "10121-10139":
            pushTo.push("#explspr " +
                document.getElementById("miscexplodesprite").value
            );
            break;
    
        default:
            pushTo.push("#explspr " + explspr);
            break;
    }

    let flightspr = grabSelectedValue("#flightspr");

    if (flightspr == "sprite"){
        pushTo.push("#flightspr " + document.getElementById("partball").value);
    }else{
        pushTo.push("#flightspr " + flightspr);
    }
    
    if (!isWepNew){
    }
    pushTo.push("#end");

    return getText();
}
