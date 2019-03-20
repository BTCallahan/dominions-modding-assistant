const throne = new Set(["11", "12", "13"]);

function isThrone(){
    let rare = grabSelectedValue("#rarity");

    return throne.has(rare);
}

function createSite(){
    //let returnText = [];
    setText();

    let isnew = document.getElementById("isnew").checked;

    getSingleValue("#selectsite");

    getSingleValue("#newsite");

    getSingleValue("#name");

    getSingleValue("#clear");

    //todo bosters

    let loc = document.getElementsByClassName("#loc");

    let ltotal = 0
    for(let i = 0; i < loc.length; i++){
        ltotal += Number(loc[i].value);
    }

    if(ltotal > 0){
        pushTo.push("#loc " + ltotal);
    }

    let gemamount = document.getElementsByClassName("gemamount");
    let gemtype = document.getElementsByClassName("gemtype");

    for(let i = 0; i < gemamount.length; i++){
        if(gemamount[i].value != "0"){
            pushTo.push("#gems " + grabSelectedValue(gemtype[i].id)
            + " " + gemamount[i].value);
        }
    }

    getSingleValue("#level");
    getMultipleValues("#resnum", "0");

    getSingleValue("#gold");

    getSelectedValue("#rarity");

    getMultipleValues("capnum", "0");

    checkIfAnyElementIsChecked("temlab");

    getSelectedValue("#fort", "0");

    getMultipleValues("#com", "0", true);
    getMultipleValues("#mon", "0", true);

    getMultipleValues("summoning", "0");

    checkIfElementIsChecked("#voidgate");

    getSingleValue("#uwwallcom", "0");
    if(document.getElementById("#uwwallunit").value != "0"){
        getSingleValue("#uwwallunit", "0");
        getSingleValue("#uwwallmult");
    }

    let rats = ["scaord", "scapro", "scatemp", "scagro", "scaluck", "scamag"];
    let ratsDefault = ["nochangeorder", "nochangeprod", "nochangetemp", "nochangegro", "nochangeluck", "nochangemag"];

    for(let i = 0; i < rats.length; i++){
        checkIfAnyElementIsChecked(rats[i], ratsDefault[i], true);
    }

    getMultipleValues("magdiscount", "0");

    getMultipleValues("magRange", "0");

    getMultipleValues("special", "0");

    getMultipleValues("thronenum", "0");

    checkIfAnyElementIsChecked("thronebool");

    pushTo.push("#end");

    return getText();
}
