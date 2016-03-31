/**
 * Created by grass on 16-3-25.
 */
window.onload=function() {
    init_person();
    init_restraurant();
};
function init_person() {
    $.getJSON('../JSON/order-master.json', function (data) {
        localStorage.setItem("all-person",JSON.stringify(data.person_name));});
}
function init_restraurant() {
    $.getJSON('../JSON/order-master.json', function (data) {
        localStorage.setItem("info-restraurant", JSON.stringify(data.restraurants));
    })
}
