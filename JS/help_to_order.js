/**
 * Created by grass on 16-2-25.
 */
window.onload = function(){
    help_to_order();
};
function get_person(){
    document.getElementById("people").innerHTML=  Person.get_current_person();
}
function get_restraurant(){
    document.getElementById("restraurant").innerHTML= Restraurant.get_current_restraurant();
}
function get_combo(){
    document.getElementById("combo").innerHTML=  Restraurant.get_current_restraurant_combo();
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
    var click_storage={person:Person.get_current_person(),restraurant: Restraurant.get_current_restraurant(),
        combo:Restraurant.get_current_restraurant_combo(),price:Restraurant.get_current_restraurant_combo_price()};
    var click_storages=JSON.parse(Person.get_order_list()) || [];
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
function help_to_order ( ) {
    get_person();
    get_restraurant();
    get_combo();
    remove_choose_combo_disabled();
    remove_confirm_disabled();
}