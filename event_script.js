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

    getMultipleValues("site_reqs_txt");

    checkIfAnyElementIsChecked("req_mydominion", "#req_mydominion")

    getMultipleValues("scale", "0");

    
}