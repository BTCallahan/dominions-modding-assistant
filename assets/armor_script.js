function createArmor(){
    let newLine = "\n";
    let isNew = document.getElementById("is-armor-new").checked;

    //var selectedArm = document.getElementById("#selectarmor");
    setText();

    //let returnText = [];

    if (isNew){
      let aName = document.getElementById("a-name");
      let aNumber = document.getElementById("new-a-num");
      pushTo.push("#name \"" + aName.value + "\" + | " + aNumber.value);

    }else{

      getSingleValue("#selectarmor");
    }

    getSingleValue("#type");

    getMultipleValues("baseValues");

    checkIfElementIsChecked("#magicarmor");

    checkIfAnyElementIsChecked("mr-mat", "#normalarmor", true);

    if (isNew){
    }
    pushTo.push("#end");

    return getText();
    //result.innerHTML = tost;
    //debugger;
  }
