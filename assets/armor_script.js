function createArmor(){
    let isNew = document.getElementById("is-armor-new").checked;

    setText();

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

    pushTo.push("#end");

    return getText();
  }
