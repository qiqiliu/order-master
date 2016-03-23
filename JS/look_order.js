/**
 * Created by grass on 16-2-29.
 */
var arrage_order = JSON.parse(localStorage.getItem("order"))||[];
window.onload = function() {
    get_json_and_render_page();
}
function get_json_and_render_page() {
    $.getJSON('../JSON/order-master.json', function (data) { var all_person = (data.person_name);
        get_order_list_black();
        get_order_list_red();
        get_order_information(all_person);
        get_no_order_person_list(all_person);});
}
function get_order_list_black() {
        var arrage_order_person=_.filter(arrage_order,function(order){return order.price<12});
        _.map(arrage_order_person,function(order){ var list = '<ul class="list-style-2">' + '<li>' + '<h3>' +
            order.person + '</h3>' + '<p>' + order.restraurant + ' ' + order.combo + '</p>' + '<span class="order-list-right">' +
            '<span class="order-amount">' + '￥' + order.price + '</span>' + '</span>' + '</li>' + '</ul>';
            document.getElementById("list-order").innerHTML += list; })
}
function get_order_list_red(){
        var arrage_other_order_person=_.reject(arrage_order,function(order){return order.price<12});
        _.map(arrage_other_order_person,function(order){ var list = '<ul class="list-style-2">' + '<li>' + '<h3>' +
            order.person + '</h3>' + '<p>' + order.restraurant + ' ' + order.combo + '</p>' + '<span class="order-list-right">' +
            '<span class="order-amount-one">' + '￥' + order.price + '</span>' + '</span>' + '</li>' + '</ul>';
            document.getElementById("list-order").innerHTML += list; })
}
function get_order_information(all_person) {
    var sum = _.reduce( _.map(arrage_order, function (order) {return +order.price}), function (memo, num) {return memo + num;}, 0);
    var arrage_order_remove_same= _.uniq(_.map(arrage_order,function (name){return name.person}));
    document.getElementById("number-order").innerHTML = arrage_order_remove_same.length + '人已定';
    document.getElementById("not-order").innerHTML = (all_person.length - arrage_order_remove_same.length) + '人未定';
    document.getElementById("order-black").innerHTML = ( arrage_order_remove_same.length ) + '人已定,' +
        (all_person.length - arrage_order_remove_same.length) + '人未定，总计：' + sum + '元';
}
function get_no_order_person_list(all_person){
    var order_name= _.map(arrage_order,function (order){return order.person});
    var no_order_person = _.difference(all_person,order_name);
    _.map(no_order_person,function(name){var not_order = '<ul class="list-style-2">' + '<li><br><h3>' + name+ '</h3><br></li>';
        document.getElementById("no-order-list").innerHTML += not_order;})
}