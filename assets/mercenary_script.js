function atLeastOneEara(elementId){

    
    let checkedEras = document.getElementsByClassName("era");
    checkedEras.array.forEach(element => {
        element.checked
    });
    if(checkedEras.length < 1){
        document.getElementById(elementId).checked = true;
    }
}


function createMercenary(){
    setText();

    checkIfElementIsChecked("#clearmercs");

    getSingleValue("#name");

    checkIfAnyElementIsChecked("level", "", true);

    getSingleValue("#com");

    getSingleValue("#unit");

    getMultipleValues("rate", "0", true);

    checkIfAnyElementIsChecked("randequip", "", true);

    getMultipleValues("#item", "", true);

    let checkedEras = Array.from(document.getElementsByClassName("era"));
    let total = 0;

    checkedEras.forEach(element => {
        if(element.checked){
            total+= Number(element.value);
        }
    });

    pushTo.push("#eramask " + total);

}