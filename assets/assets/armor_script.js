function createArmor(){
    let isNew = document.getElementById("is-armor-new").checked;

    //var selectedArm = document.getElementById("#selectarmor");
    setText();

    //let returnText = [];

    if (isNew){

        getSingleValue("#newarmor")
        getSingleValue("#name");

    }else{

        getSingleValue("#selectarmor");
    }

    checkIfAnyElementIsChecked("type", "", true);


    //getSingleValue("#type");

    getMultipleValues("baseValues");

    checkIfElementIsChecked("#magicarmor");

    checkIfAnyElementIsChecked("mr-mat", "#normalarmor", true);

    if (isNew){
    }
    pushTo.push("#end");

    return getText();
  }
