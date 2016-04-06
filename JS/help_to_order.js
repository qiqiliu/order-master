/**
 * Created by grass on 16-2-25.
 */
window.onload = function(){
    get_person();
    get_restraurant();
    get_combo();
    remove_choose_combo_disabled();
    remove_confirm_disabled();
};
function get_person(){
    document.getElementById("people").innerHTML=  Person.current_person();
}
function get_restraurant(){
    document.getElementById("restraurant").innerHTML= Restraurant.current_restraurant();
}
function get_combo(){
    document.getElementById("combo").innerHTML=  Restraurant.current_restraurant_combo();
}
function remove_choose_combo_disabled(){
    if(document.getElementById("people").innerHTML!=''&&document.getElementById("restraurant").innerHTML!='') {
        document.getElementById("combos").disabled=false;
    }
}
function remove_confirm_disabled(){
    if(document.getElementById("people").innerHTML!=''&&document.getElementById("restraurant").innerHTML!=''
        &&document.getElementById("combo").innerHTML!=''){
        document.getElementById("person").disabled=false;
    }
}
function get_different_combo(){
    location.href='choose_difference_combo.html';
}
function get_storage_and_return_page_top(){
    var click_storage={person:Person.current_person(),restraurant: Restraurant.current_restraurant(),
        combo:Restraurant.current_restraurant_combo(),price:Restraurant.current_restraurant_combo_price()};
    var click_storages=JSON.parse(localStorage.getItem("order")) || [];
    click_storages.push(click_storage);
    localStorage.setItem("order",JSON.stringify(click_storages));
    localStorage.removeItem("person");localStorage.removeItem("restraurant");localStorage.removeItem("combo");
    localStorage.removeItem("price");
    document.getElementById("people").innerHTML="";
    document.getElementById("restraurant").innerHTML="";
    document.getElementById("combo").innerHTML="";
    document.getElementById("combos").disabled=true;
    document.getElementById("person").disabled=true;
    location.href="#top";
}
