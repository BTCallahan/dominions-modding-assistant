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