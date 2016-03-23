/**
 * Created by grass on 16-2-25.
 */
window.onload=function() {
    get_json_and_render_page();
}
function choose_combo(name,price){
    localStorage.setItem("combo",name);
    localStorage.setItem("price",price);
}
function get_json_and_render_page(){
    $.getJSON('../JSON/order-master.json',function(data) { var all = (data.restraurants);
        var arrage = get_restraurant_information (all);
        get_difference_combo (arrage);});
}
function get_restraurant_information (all) {
    var restraurant_name = localStorage.getItem("restraurant");
    var order_restraurant = _.filter(all, function (restraurants){return restraurant_name == restraurants.name;});
    var arrage_combo=order_restraurant[0].combo;
    return arrage_combo;
}
function get_difference_combo (arrage_combo) {
    _.map(arrage_combo, function (combo) {
        var restraurant_combo_list = '<ul class="list-style-2">' + '<li>' +
            "<a href='help_to_order.html' onclick = choose_combo('" + combo.combo_name + "','" + combo.combo_price + "')>" +
            '<h3>' + combo.combo_name + '</h3><p>' + '￥' + combo.combo_price + '</p></a></li>' + '</ul>';
        document.getElementById("order_list").innerHTML += restraurant_combo_list;})
}