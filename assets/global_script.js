var mod_intro = "";
var weapons_array = [];
var armors_array = [];
var items_array = [];
var spells_array = [];
var nations_array = [];
var sites_array = [];
var events_array = [];

var mod_text = "";

function storeData(){
    localStorage.setItem("intro", mod_intro);
    localStorage.setItem("weapon", weapons_array);
    localStorage.setItem("armor", armors_array);
    localStorage.setItem("item", items_array);
    localStorage.setItem("spell", spells_array);
    localStorage.setItem("nation", nations_array);
    localStorage.setItem("site", sites_array);
    localStorage.setItem("event", events_array);
    localStorage.setItem("text", mod_text);
}


var ModPart = Object.freeze({
    "INTRO":1,
    "WEAPON":2,
    "ARMOR":3,
    "ITEM":4,
    "SPELL":5,
    "NATION":6,
    "SITE":7,
    "EVENT":8
})

function append(modpart, text){
    switch (modpart) {
        case ModPart.INTRO:
        mod_intro = text;
            break;
        case ModPart.WEAPON:
            weapons_array.push(text);
            break;
        case ModPart.ARMOR:
            armors_array.push(text);
            break;
        case ModPart.ITEM:
            items_array.push(text);
            break;
            case ModPart.SPELL:
            spells_array.push(text);
            break;
            case ModPart.NATION:
            nations_array.push(text);
            break;
            case ModPart.SITE:
            sites_array.push(text);
            break;
            case ModPart.EVENT:
            events_array.push(text);
            break;
        default:
            break;
    }
    let totalt_ar = [mod_intro];

    totalt_ar.concat(weapons_array, armors_array, items_array, spells_array, nations_array, sites_array, events_array);

    mod_text = totalt_ar.join('\n\n\n');
}

function deleteFromMod(modpart, index){
    switch (modpart) {
        case ModPart.WEAPON:
            weapons_array.splice(index, 1);
            break;
        case ModPart.ARMOR:
            armors_array.splice(index, 1);
            break;
        case ModPart.ITEM:
            items_array.splice(index, 1);
            break;
        case ModPart.SPELL:
            spells_array.splice(index, 1);
            break;
        case ModPart.NATION:
            nations_array.splice(index, 1);
            break;
        case ModPart.SITE:
            sites_array.splice(index, 1);
            break;
        case ModPart.EVENT:
            events_array.splice(index, 1);
            break;
        default:
            break;
    }
    let totalt_ar = [mod_intro];

    totalt_ar.concat(weapons_array, armors_array, items_array, spells_array, nations_array, sites_array, events_array);

    mod_text = totalt_ar.join('\n\n\n');

}