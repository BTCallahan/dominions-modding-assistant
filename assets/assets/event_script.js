function decapop(elementId, paragraphId){

    let elementAmount = Maht.round(Number( document.getElementById(elementId).value) * 0.1);

    let para = document.getElementById(paragraphId);

    para.innerText = String(Math.round(elementAmount * 0.75) * 10) + " to " + String(Math.round(elementAmount * 1.75) * 10);

}
/*
            <option value="0" selected>Always</option>
            <option value="1">Common Bad</option>
            <option value="2">Uncommon Bad</option>
            <option value="5">Always (unlimited)</option>
            <option value="-1">Common Good</option>
            <option value="-2">Uncommon Good</option>
            <option value="10">Always Global</option>
            <option value="11">Common Global</option>
            <option value="12">Uncommon Global</option>
            <option value="13">Always Immediate Global</option>
*/
const isGlobal = new Set(["10", "11", "12", "13"])


function createEvent(){
    setText();

    getSelectedValue("#rarity");

    getMultipleValues("#reqs", "0");

    checkIfAnyElementIsChecked("#req_era", "#req_era 0", true);

    checkIfAnyElementIsChecked("#req_season", "#req_season 0", true);

    getMultipleValues("nations", "0");

    checkIfAnyElementIsChecked("gems");

    getSingleValue("#req_gold", "0");

    checkIfAnyElementIsChecked("req_capital", "req_capital", true);

    checkIfAnyElementIsChecked("req_owncapital", "req_owncapital", true);

    checkIfAnyElementIsChecked("req_capital", "req_capital", true);

    checkIfAnyElementIsChecked("req_capital", "req_capital", true);

    checkIfAnyElementIsChecked("req_capital", "req_capital", true);

    getSelectedValue("req_poptype", "-1");

    checkIfElementIsChecked("req_pop0ok");

    getSelectedValue("popnum", "0");

    checkIfAnyElementIsChecked("req_lab", "#req_lab", true);
    checkIfAnyElementIsChecked("req_temple", "#req_temple", true);
    checkIfAnyElementIsChecked("req_fort", "#req_fort", true);
    checkIfAnyElementIsChecked("req_land", "#req_land", true);
    checkIfAnyElementIsChecked("req_coast", "#req_coast", true);
    checkIfAnyElementIsChecked("req_mountain", "#req_mountain", true);
    checkIfAnyElementIsChecked("req_forest", "#req_forest", true);
    checkIfAnyElementIsChecked("req_farm", "#req_farm", true);
    checkIfAnyElementIsChecked("req_swamp", "#req_swamp", true);
    checkIfAnyElementIsChecked("req_waste", "#req_waste", true);
    checkIfAnyElementIsChecked("req_cave", "#req_cave", true);
    checkIfAnyElementIsChecked("req_freshwater", "#req_freshwater", true);

    getMultipleValues("site_reqs_num", "0");

    //getMultipleValues("site_reqs_txt");

    checkIfAnyElementIsChecked("req_foundsite", "#req_foundsite", true);
    checkIfAnyElementIsChecked("req_hiddensite", "#req_hiddensite", true);
    checkIfAnyElementIsChecked("req_site", "#req_site", true);
    checkIfAnyElementIsChecked("req_nearbysite", "#req_nearbysite", true);
    checkIfAnyElementIsChecked("req_claimedthrone", "#req_claimedthrone", true);
    checkIfAnyElementIsChecked("req_unclaimedthrone", "#req_unclaimedthrone", true);

    checkIfAnyElementIsChecked("req_mydominion", "#req_mydominion")

    getMultipleValues("scale", "0");

    checkIfAnyElementIsChecked("req_commander", "#req_commander", true);

    getMultipleValues("mon_pres", "0");

    checkIfElementIsChecked("#req_humanoidres");
    checkIfElementIsChecked("#req_researcher");

    getSingleValue("#req_preach", "0");

    getMultipleValues("magepaths", "0");

    getSingleValue("#req_targmnr", "0");

    checkIfAnyElementIsChecked("req_targgod", "#req_targgod", true);
    checkIfAnyElementIsChecked("req_targhumanoid", "#req_targhumanoid", true);
    checkIfAnyElementIsChecked("req_targmale", "#req_targmale", true);

    getSelectedValue("#req_targpath1", "-1");
    getSelectedValue("#req_targpath2", "-1");
    getSelectedValue("#req_targpath3", "-1");
    getSelectedValue("#req_targpath4", "-1");

    let aws = document.getElementsByClassName("aw");

    let bitmask = 0;
    let afflictionChecked = false;

    for (let i =1; i < aws.length; i++){

        if(aws[i].checked){
            afflictionChecked = true;
            bitmask+= 2 ** Number(aws[i].value);
        }
    }

    if(afflictionChecked){
        pushTo.push("#req_targaff " + bitmask);
    }

    getSelectedValue("#req_targorder", "-1");

    getMultipleValues("req_item", "0");

    checkIfAnyElementIsChecked("req_targundead", "#req_targundead", true);
    checkIfAnyElementIsChecked("req_targdemon", "#req_targdemon", true);
    checkIfAnyElementIsChecked("req_targanimal", "#req_targanimal", true);
    checkIfAnyElementIsChecked("req_targinanimate", "#req_targinanimate", true);
    checkIfAnyElementIsChecked("req_targmindless", "#req_targmindless", true);
    checkIfAnyElementIsChecked("req_targimmobile", "#req_targimmobile", true);
    checkIfAnyElementIsChecked("req_targmagicbeing", "#req_targmagicbeing", true);

    getSingleValue("#req_targowner", "0");

    checkIfElementIsChecked("#req_targowner");

    getMultipleValues("code", "299");

    getMultipleValues("ench", "0");

    if(document.getElementById("#nationSp").checked){
        pushTo.push("#nation " + document.getElementById("spnation").value);

    }else{
        checkIfAnyElementIsChecked("#nation", "#nation 0", true);
        
    }
    getSingleValue("#nationench");

    let msg = document.getElementById("#msg").value;

    let sitename = document.getElementById("sitename").value;

    if(sitename != ""){

        msg+= " [" + sitename + "]";
    }

    checkIfElementIsChecked("#notext");
    checkIfElementIsChecked("#nolog");

    if(!document.getElementById("itemname").disabled){
        msg += " [" + document.getElementById("itemname").value + "]";
    }

    pushTo.push(msg);
    
    //getSingleValue("#msg");
    getSelectedValue("#magicitem");

    getSingleValue("#gold", "0");
    getSingleValue("#exactgold", "0");
    
    checkIfAnyElementIsChecked("sc_order", "#nochange 0", true);
    checkIfAnyElementIsChecked("sc_prod", "#nochange 1", true);
    checkIfAnyElementIsChecked("sc_temp", "#nochange 2", true);
    checkIfAnyElementIsChecked("sc_grow", "#nochange 3", true);
    checkIfAnyElementIsChecked("sc_luck", "#nochange 4", true);
    checkIfAnyElementIsChecked("sc_magic", "#nochange 5", true);

    //let giveGems = ["#1d3vis", "#1d6vis", "#2d4vis"]
    getSelectedValue("#1d3vis", "-1");
    getSelectedValue("#1d6vis", "-1");
    getSelectedValue("#2d4vis", "-1");
    getSelectedValue("#3d4vis", "-1");
    getSelectedValue("#4d4vis", "-1");

    getSelectedValue("#gemloss", "-1");

    getMultipleValues("provEff", "0");

    pushTo.push("#kill " + String(Math.round(Number(document.getElementById("#kill").value) * 0.1)));
    pushTo.push("#incpop " + String(Math.round(Number(document.getElementById("#incpop").value) * 0.1)));

    getSelectedValue("#fort", "0");

    checkIfAnyElementIsChecked("temple", "temple", true);
    checkIfAnyElementIsChecked("lab", "lab", true);

    checkIfElementIsChecked("#revealsite");

    getMultipleValues("site", "0");

    checkIfAnyElementIsChecked("provbool");
    //monster effects
    getMultipleValues( "monnum", "0");

    let rafl = Array.from(document.getElementsByClassName("rafl")).filter(element => element.checked);

    if(rafl.length > 0){
        let rafltotal = 0;

        for(let i = 0; i < rafl.length; i++){
            rafltotal+= 2 ** Number(ralf[i].value);
        }
        pushTo.push("#researchaff " + rafltotal);
    }

    let cofl = Array.from(document.getElementsByClassName("cofl")).filter(element => element.checked);

    if(cofl.length > 0){
        let cofltotal = 0;

        for(let i = 0; i < cofl.length; i++){
            cofltotal+= 2 ** Number(colf[i].value);
        }
        pushTo.push("#gainaff " + cofltotal);

    }

    checkIfElementIsChecked("#gainmark");

    checkIfAnyElementIsChecked("banished", "#banished0", true);

    getMultipleValues("comnum", "0");
    getMultipleValues("magicboost", "0");

    getSelectedValue("#pathboost", "-1");

    checkIfAnyElementIsChecked("world_sc_order", "#world_nochange 0", true);
    checkIfAnyElementIsChecked("world_sc_prod", "#world_nochange 1", true);
    checkIfAnyElementIsChecked("world_sc_temp", "#world_nochange 2", true);
    checkIfAnyElementIsChecked("world_sc_grow", "#world_nochange 3", true);
    checkIfAnyElementIsChecked("world_sc_luck", "#world_nochange 4", true);
    checkIfAnyElementIsChecked("world_sc_magic", "#world_nochange 5", true);

    getSingleValue("#worldunrest", "0");
    getSingleValue("#worldincdom", "0");

    getSelectedValue("#worldritrebate", "-1");

    checkIfElementIsChecked("#worlddarkness");

    getMultipleValues("unitchance", "0");

    checkIfAnyElementIsChecked("flagland", "#flagland", true);

    getMultipleValues("eventnum", "0");

    let evbit = Array.from(document.getElementsByClassName("evbit")).filter(element => element.checked);

    if(evbit.length > 0){
        let evbm = 0;
        for (let i = 0; i < evbit.length; i++){
            evbm+= Number( evbit[i].value);
        }
        pushTo.push("#order " + evbm);
    }

    getMultipleValues("evcode", "-299");

    checkIfAnyElementIsChecked("purgecalendar", "#purgecalendar", true);
    checkIfAnyElementIsChecked("purgedelayed", "#purgedelayed", true);

    getSingleValue("#id", "-299");

    pushTo.push("#end");

    return getText();    
}