function newVsOld(){

    let isnew = document.getElementById("#newnation").checked;

    enableOrDisable(isnew, "new", "old");

    if (isnew){
        handleAges()
    }else{
        let nationeras = document.getElementsByClassName("nationeras");
        nationeras.forEach(element => {
            element.disabled = true;
        });
    }
}

function handleAges(){
    
    let era = document.getElementsByClassName("#era");
    let nationeras = document.getElementsByClassName("nationeras");
    debugger;
    if(document.getElementById("#newnation").checked){
        if (era["earlyera"].checked){
            nationeras["earlyselect"].disabled = false;
            nationeras["middleselect"].disabled = true;
            nationeras["lateselect"].disabled = true;
        }else if(era["middleera"].checked){
            nationeras["earlyselect"].disabled = true;
            nationeras["middleselect"].disabled = false;
            nationeras["lateselect"].disabled = true;
        }else if(era["lateera"].checked){
            nationeras["earlyselect"].disabled = true;
            nationeras["middleselect"].disabled = true;
            nationeras["lateselect"].disabled = false;
        }else{
            nationeras["earlyselect"].disabled = true;
            nationeras["middleselect"].disabled = true;
            nationeras["lateselect"].disabled = true;
        }
    }
}

function colorChopper(color){
    let red = color.slice(1, 3);
    let green = color.slice(3, 5);
    let blue = color.slice(5, 7);

    let red_num = parseInt(red, 16);
    let green_num = parseInt(green, 16);
    let blue_num = parseInt(blue, 16);

    return red_num + " " + green_num + " " + blue_num;
}

function createNation(){
    setText();

    checkIfElementIsChecked("#newnation");

    let isnew = document.getElementById("#newnation").checked;

    if(!isnew){
        let nationNumber = "0";
        if(document.getElementById("earlyera").checked){
            nationNumber = grabSelectedValue("earlyselect");
        }else if(document.getElementById("middleera").checked){
            nationNumber = grabSelectedValue("middleselect");
        }else if (document.getElementById("lateera").checked){
            nationNumber = grabSelectedValue("lateselect");
        }else{
            //todo
        }
    }else{
        checkIfAnyElementIsChecked("era", "", true);
    }

    getMultipleValues("nationinfo", "");

    let primary_color = document.getElementById("#color").value;

    let secondary_color = document.getElementById("#secondarycolor").value;

    pushTo.push("#color " + colorChopper(primary_color));
    pushTo.push("#secondarycolor " + colorChopper(secondary_color));

    getSingleValue("#flag");

    checkIfElementIsChecked("#disableoldnations");

    checkIfElementIsChecked("#clearsites");

    //Array.from()

    let startsites = Array.from(document.getElementsByClassName("startsites"));

    startsites.forEach(element => {
        if (element.value != ""){
            pushTo.push("#startsite \"" + element.value + "\"");
        }
    });

    let islandsites = Array.from(document.getElementsByClassName("islandsites"));

    islandsites.forEach(element => {
        if(element.value != ""){
            pushTo.push("#islandsite \"" + element.value + "\"");
        }
    });
    
    geoEffect("likesterr");
    geoEffect("hatesterr");

    getSingleValue("#idealcold", "0");

    checkIfAnyElementIsChecked("watervsland", "", true);
    
    getSingleValue("#killcappop", "0");

    getSingleValue("#aiawake", "0");

    checkIfElementIsChecked("#aiholdgod");

    checkIfAnyElementIsChecked("magicnation");

    getSelectedValue("#aimusthavemag", "-1");

    getSingleValue("#aigoodbless", "0");

    checkIfElementIsChecked("#clearrec");

    getMultipleValues("recritables", "");

    let terrainrec = document.getElementsByClassName("terrainrec");

    let terrainrecid = document.getElementsByClassName("terrainrecid");

    for (let i = 0; i < terrainrec.length; i++){
        let terrain = terrainrec[i].options[terrainrec[i].selectedIndex];
        if (terrain.value != "na"){
            pushTo.push("#" + terrain.value + terrainrecid[i].value );
        }
    }

    let terraincom = document.getElementsByClassName("terraincom");

    let terraincomid = document.getElementsByClassName("terraincomid");

    for (let i = 0; i < terraincom.length; i++){
        let terrain = terraincom[i].options[terraincom[i].selectedIndex];
        if (terrain.value != "na"){
            pushTo.push("#" + terrain.value + terraincomid[i].value);
        }
    }

    getMultipleValues("#addrecunit", "0", true);
    getMultipleValues("#addreccom", "0", true);
    getMultipleValues("#uwrec", "0", true);
    getMultipleValues("#uwcom", "0", true);
    getMultipleValues("#landrec", "0", true);
    getMultipleValues("#landcom", "0", true);

    getSingleValue("#merccost", "0");

    getMultipleValues("hero", "0");
    getMultipleValues("multihero", "0");

    getMultipleValues("pd", "0");

    checkIfElementIsChecked("#cleargods");

    getMultipleValues("#addgod", "0", true);
    getMultipleValues("#delgod", "0", true);

    checkIfAnyElementIsChecked("misc");

    getSelectedValue("#likespop", "-1");


    getMultipleValues("#cheapgod20", "0", true);
    getMultipleValues("#cheapgod40", "0", true);

    getMultipleValues("blessbonus", "0");

    getSelectedValue("#fortera");

    getSingleValue("#fortcost", "0");

    getSingleValue("#labcost", "500");
    getSingleValue("#templecost", "400");
    getSingleValue("#forestlabcost", "500");
    getSingleValue("#foresttemplecost", "400");

    getSelectedValue("#templepic");

    getSelectedValue("#templegems", "-1");

    getSelectedValue("#homefort", "0");
    getSelectedValue("#buildfort", "0");
    getSelectedValue("#builduwfort", "0");
    getSelectedValue("#buildcoastfort", "0");

    getSingleValue("#fortunrest", "0");

    checkIfAnyElementIsChecked("dombool");
    getMultipleValues("domnum", "0");

    getMultipleValues("domspread", "0");

    checkIfAnyElementIsChecked("reanim");

    pushTo.push("#end");

    return getText();
    
    
}