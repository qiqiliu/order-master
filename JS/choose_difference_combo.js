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
        var object = get_restraurant_information (all);
        get_difference_combo (object);});
}
function get_restraurant_information (all) {
    var restraurant_name = localStorage.getItem("restraurant");
    var order_restraurant = _.filter(all, function (restraurants){return restraurant_name == restraurants.name;});
    var restraurant = _.map(order_restraurant, function (name){return name.combo_name;})[0];
    var restraurant_price = _.map(order_restraurant, function (price){return price.combo_price; })[0];
    var object_restraurant = {one: restraurant, two: restraurant_price};
    return object_restraurant;
}
function get_difference_combo (object_restraurant) {
    var restraurant=object_restraurant.one;
    var restraurant_price=object_restraurant.two;
    for (i = 0; i < restraurant.length; i++){
        var combo = restraurant[i];
        var price = restraurant_price[i];
        var restraurant_combo_list = '<ul class="list-style-2">' + '<li>' +
            "<a href='help_to_order.html' onclick = choose_combo('" + combo + "','" + price + "')>" +
            '<h3>' + restraurant[i] + '</h3><p>' + '￥' + restraurant_price[i] + '</p></a></li>' + '</ul>';
        document.getElementById("order_list").innerHTML += restraurant_combo_list;
    }
}
