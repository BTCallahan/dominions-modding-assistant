const nl = "\n";

const addUp = (a1, a2) => a1 + a2;

var pushTo = [];

function geoEffect(className){
    let onlygeosrc = Array.from(document.getElementsByClassName(className));
            
    let onlygeosrcFilter = onlygeosrc.filter(element => element.checked);

    if(onlygeosrcFilter.length > 0){
        let onlygeosrcNumber = onlygeosrcFilter.map(element => Number(element.value));

        pushTo.push("#" + className + " " + onlygeosrcNumber.reduce(addUp));
    }
}

function setText(){
    pushTo = [];
}

function getText(){
    return pushTo.join("\n");
}

/**
 * 
 * @param {*} num 
 */
function checkIfIsNUmber(num){
    if(Number.isInteger(num)){
        return "";
    }else{
        return "\"";
    }
}

/*
var $s = $('select');

var optionTop = $s.find('[value="3"]').offset().top;
var selectTop = $s.offset().top;

$s.scrollTop($s.scrollTop() + (optionTop - selectTop));
*/

/**
 * Takes an array and appends the element with the same name to it as long as it 
 * is checked and the elements value is diffrent from the invalidValue parapiter
 * @param {*} elementId 
 * @param {*} invalidValue 
 */
function checkIfElementIsChecked(elementId, invalidValue=""){
    let ele = document.getElementById(elementId);

    if(ele.checked && ele.value != invalidValue){
        pushTo.push(ele.id);
    }
}

function stringVsNumber(s_vs_n){
    
    if(!isNaN(s_vs_n)){
        return "";
    }else{
        return "\"";
    }
}

/**
 * @param {*} className 
 * @param {*} invalidValue 
 * @param {*} isRadioButton 
 */
function checkIfAnyElementIsChecked(className,  invalidValue="", isRadioButton=false){
    let elem = document.getElementsByClassName(className);
    //debugger;
    if (isRadioButton){
        for (let i = 0; i < elem.length; i++){
            if (elem[i].checked){
                if(elem[i].value != invalidValue && !elem[i].disabled){
                    pushTo.push(elem[i].value);
                }
                break;
            }
        }
    }else{
        for (let i = 0; i < elem.length; i++){
            if (elem[i].checked && elem[i].value != invalidValue && !elem[i].disabled){
                pushTo.push(elem[i].value);
            }
        }
    }
}

/**
 * 
 * @param {*} elementId 
 * @param {*} invalidValue 
 */
function getSingleValue(elementId, invalidValue=""){
    let ele = document.getElementById(elementId);

    if (ele.value != invalidValue && !ele.disabled){
        let boundery = stringVsNumber(ele.value);

        pushTo.push(ele.id + " " + boundery + ele.value + boundery);
    }
}

/*
function getMultipleValues(pushTo, className, newLine="\n", border="", invalidValue=""){
  var eles = document.getElementsByClassName(className);

  for (var i =0; i < eles.length; i++){
    if (eles[i].value != invalidValue && !ele[i].disabled){
      pushTo.push(eles[i].id + " " + border + eles[i].value + border + newLine);
    }
  }
}*/

/**
 * 
 * @param {*} className 
 * @param {*} invalidValue 
 */
function getMultipleValues(className, invalidValue="", useClassName=false){
    let eles = document.getElementsByClassName(className);

    if (useClassName){
        for (let i =0; i < eles.length; i++){
            if (eles[i].value != invalidValue && !eles[i].disabled){
                let boundery = stringVsNumber(eles[i].value);

                pushTo.push(className + " " + boundery + eles[i].value + boundery);
            }
        }
    }else{
        for (let i =0; i < eles.length; i++){
            if (eles[i].value != invalidValue && !eles[i].disabled){
                let boundery = stringVsNumber(eles[i].value);

                pushTo.push(eles[i].id + " " + boundery + eles[i].value + boundery);
            }
        }
    }
}

/**
 * 
 * @param {*} condition 
 * @param {*} enableThisClassIfTrue 
 * @param {*} disableThisClassIfTrue 
 */
function enableOrDisable(condition, enableThisClassIfTrue, disableThisClassIfTrue, useId=false){
    if(useId){
        if(condition){
            try {
                document.getElementById(enableThisClassIfTrue).disabled = false;
            } catch (error) {
                
            }
            try {
                document.getElementById(disableThisClassIfTrue).disabled = true;
            } catch (error) {
                
            }
        }else{
            try {
                document.getElementById(enableThisClassIfTrue).disabled = true;
            } catch (error) {
                
            }
            try {
                document.getElementById(disableThisClassIfTrue).disabled = false;
            } catch (error) {
                
            }
        }
    }else{
        if(condition){
            let enableThese = document.getElementsByClassName(enableThisClassIfTrue);
            for(let i = 0; i < enableThese.length; i++){
                enableThese[i].disabled = false;
            }
            let disableThese = document.getElementsByClassName(disableThisClassIfTrue);
            for(let i = 0; i < disableThese.length; i++){
                //let i2 = disableThese[i];
                disableThese[i].disabled = true;
            }
          }else{
            let enableThese = document.getElementsByClassName(enableThisClassIfTrue);
            for(let i = 0; i < enableThese.length; i++){
                enableThese[i].disabled = true;
            }
            let disableThese = document.getElementsByClassName(disableThisClassIfTrue);
            for(let i = 0; i < disableThese.length; i++){
                //let i2 = disableThese[i];
                disableThese[i].disabled = false;
            }
        }
    }
  /*
  if condition is true, then all elements that have the class
  enableThisClassIfTrue will be enabled, and all elements that have the class
  disableThisClassIfTrue will be disabled
  */
}

function visibleOrInvisible(condition, showThisClassIfTrue, hideThisClassIfTrue, useId=false){
    if(useId){
        if(condition){
            try {
                document.getElementById(showThisClassIfTrue).style.visibility = "block";
            } catch (error) {
                
            }
            try {
                document.getElementById(hideThisClassIfTrue).style.visibility = "hidden";
            } catch (error) {
                
            }
        }else{
            try {
                document.getElementById(showThisClassIfTrue).style.visibility = "hidden";
            } catch (error) {
                
            }
            try {
                document.getElementById(hideThisClassIfTrue).style.visibility = "block";
            } catch (error) {
                
            }
        }
    }else{
        if(condition){
            let enableThese = document.getElementsByClassName(showThisClassIfTrue);
            for(let i = 0; i < enableThese.length; i++){
                enableThese[i].style.visibility = "block";
            }
            let disableThese = document.getElementsByClassName(hideThisClassIfTrue);
            for(let i = 0; i < disableThese.length; i++){
                //let i2 = disableThese[i];
                disableThese[i].style.visibility = "hidden";
            }
          }else{
            let enableThese = document.getElementsByClassName(showThisClassIfTrue);
            for(let i = 0; i < enableThese.length; i++){
                enableThese[i].style.visibility = "hidden";
            }
            let disableThese = document.getElementsByClassName(hideThisClassIfTrue);
            for(let i = 0; i < disableThese.length; i++){
                //let i2 = disableThese[i];
                disableThese[i].style.visibility = "block";
            }
        }
    }
}


function deactivateIfChecked(isThisChecked, deactivateThis, invertFirstCondition=false){
    if(invertFirstCondition && !document.getElementById(isThisChecked).checked){
        document.getElementById(deactivateThis).checked = false;
    }else if(document.getElementById(isThisChecked).checked){
        document.getElementById(deactivateThis).checked = false;
    }
}

function getSelectedValue(elementId, invalidValue=""){
    let select = document.getElementById(elementId);
    if(!select.disabled){
        let v = select.options[select.selectedIndex].value;

        if(v != invalidValue){
            let boundery = stringVsNumber(v);

            pushTo.push(elementId + " " + boundery + v + boundery);
        }
    }
}

/**
 * 
 * @param {*} id 
 */
function grabSelectedValue(id){
    let select = document.getElementById(id);

    let opts = select.options;
    let si = select.selectedIndex;
    return opts[si].value
    //return select.options[select.selectedIndex].value;
}

function setSelectableValue(id, value){
    document.getElementById(id).value = value;
}

function minMax(minId, maxId, reverse = false){

    let minEle = document.getElementById(minId);
    let maxEle = document.getElementById(maxId);

    if(minEle.value != "0" && maxEle.value != "0"){
        if(Number(minEle.value) > Number(maxEle.value)){
            if(reverse){
                maxEle.value = minEle.value;

            }else{
                minEle.value = maxEle.value;

            }
        }
    }
}

function maxMin(minId, maxId){
    let minEle = document.getElementById(minId);
    let maxEle = document.getElementById(maxId);

    if(minEle.value != "0" && maxEle.value != "0"){
        if(Number(minEle.value) > Number(maxEle.value)){
            maxEle.value = minEle.value;
        }
    }

}

function calcBitmask(className){

    let a = Array.from(document.getElementsByClassName(className)).filter(element => element.checked);
    let total = 0
    a.forEach(element => {
        total += 2 ** Number(element.value);
    });
}


function createBitmaskTable(tableID, tableTitle, coloumsPerRow, listOfEffects){

    let tab = document.getElementById(tableID);

    let table_head = document.createElement("thead")

    tab.appendChild(table_head);

    let tr_table_head = document.createElement("tr");

    table_head.appendChild(tr_table_head);

    let th_head = document.createElement("th");

    th_head.innerText = tableTitle;

    let table_body = document.createElement("tbody");

    tab.appendChild(table_body);

    var currentRow;
    let r = 0;
    for (let i =0; i < listOfEffects.length; i++){
        if(r===0){
            currentRow = document.createElement("tr");
            table_body.appendChild(currentRow);
            r++;
        }else if(r===coloumsPerRow){
            r = 0;
        }else{
            r++;
        }
        let currentCell = document.createElement("td");
        currentRow.appendChild(currentCell);

        let input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", "he" + i);
        input.setAttribute("id", "he" + i);
        input.setAttribute("value", String(i));
        input.setAttribute("class", "he");

        currentCell.appendChild(input);

        let label =document.createElement("label");
        label.setAttribute("for", "he" + i);
        label.innerText = listOfEffects[i];
        currentCell.appendChild(label);
    }
}

var afflictonList = ["Disease", "Curse", "?", "Plague", 
"?", "Curse of Stones", "Entangle", "Rage", 
"Decay", "Burn", "Sleep", "Rusty Armor", 
"Blind", "Bleed", "Earth Grip", "?", 
"Fire Bonds", "False Fetters", "Limp", "Lost Eye", 
"Weakness", "Battle Fright", "Mute", "Chest Wound", 
"Crippled", "Feble Minded", "Never Healing Wound", "Slime", 
"Frozen", "Webbed", "Arm Loss", "?", 
"Shrunken", "?", "Confused", "?", 
"Slowed", "?", "?", "?", "?", 
"?", "Rusty", "?", "?", 
"?", "?", "?", "?", 
"?", "Soul Slain", "Soul Annihilated"]

/*
0	disease
1	curse
2
3	plague
4
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
15
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
31
32	shrinked
33
34	confused
35
36	slowed
41	rusty
42
43
44
45
46
47
48
49	soul slayed
50	soul annihilated

*/


