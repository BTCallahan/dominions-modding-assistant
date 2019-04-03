var wepSet = new Set(["1", "2", "3"]);
var armSet = new Set(["4", "5", "6"])

function isWeaponOrArmor(){

    let itemtype = grabSelectedValue("#type");

    if (wepSet.has(itemtype)){
        document.getElementById("#weapon").disabled = false;
        document.getElementById("#armor").disabled = true;

    }else if (armSet.has(itemtype)){
        document.getElementById("#weapon").disabled = true;
        document.getElementById("#armor").disabled = false;

    }else{
        document.getElementById("#weapon").disabled = true;
        document.getElementById("#weapon").disabled = true;

    }
}

function createItem(){

    //let returnText = [];
    setText();

    checkIfElementIsChecked("#clearallitems");
    let isnew = document.getElementById("is-item-new");

    getSingleValue("#newitem");
    getSingleValue("#name");

    getSingleValue("#selectitem");
    getSingleValue("#clear");

    getSelectedValue("#constlevel");

    getSelectedValue("#mainpath");
    getSingleValue("#mainlevel");

    getSelectedValue("#secondarypath");
    getSingleValue("#secondarylevel");
    //copying
    getSingleValue("#copyitem", "0");
    getSingleValue("#copyspr", "0");
    getSingleValue("#spr", "");

    getSelectedValue("#type");

    getSingleValue("#name", "");
    getSingleValue("#descr", "");

    getSingleValue("#weapon");
    getSingleValue("#armor");

    //todo spell bosters

    if (document.getElementById("#magiclevel1").value != "0"){
        //var magic_path = grabSelectedValue("magicskill1");
        pushTo.push("#magicskill " + grabSelectedValue("magicskill1") + " " + document.getElementById("#magiclevel1").value);
      }

    getSingleValue("#pen", "0");

    getSingleValue("#spell", "");
    getSingleValue("#autospellrepeat", "");

    getSingleValue("#randomspell", "0");
    
    getMultipleValues("attresnum", "0");

    getMultipleValues("reqStealth", "0");

    getMultipleValues("camo", "0");

    checkIfAnyElementIsChecked("attresbool");

    getMultipleValues("resnum", "0");
    checkIfAnyElementIsChecked("resbool");

    getMultipleValues("cursenum", "0");
    checkIfAnyElementIsChecked("cursebool");

    checkIfAnyElementIsChecked("anymount", "#okmount", true);
    checkIfAnyElementIsChecked("anycoldblood", "#okcoldblood", true);
    checkIfAnyElementIsChecked("anydemon", "#okdemon", true);
    checkIfAnyElementIsChecked("anyundead", "#okundead", true);
    checkIfAnyElementIsChecked("anyinanim", "#okinanim", true);
    checkIfAnyElementIsChecked("anyimmobile", "#okimmobile", true);

    getMultipleValues("auranum", "0");

    pushTo.push("#end");

    return getText();
}