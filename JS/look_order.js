/**
 * Created by grass on 16-2-29.
 */
window.onload = function() {
    look_order();
};
function get_arrage_order(){
    var arrage_order = JSON.parse( Person.get_order_list()) || [];
    return arrage_order;
}
function get_order_information(all_person) {
    var arrage_order=get_arrage_order();
    var sum = _.reduce( _.map(arrage_order, function (order) {return +order.price}), function (memo, num) {return memo + num;}, 0);
    var arrage_order_remove_same= _.uniq(_.map(arrage_order,function (name){return name.person}));
    document.getElementById("number-order").innerHTML = arrage_order_remove_same.length + '人已定';
    document.getElementById("not-order").innerHTML = (all_person.length - arrage_order_remove_same.length) + '人未定';
    document.getElementById("order-black").innerHTML = ( arrage_order_remove_same.length ) + '人已定,' +
        (all_person.length - arrage_order_remove_same.length) + '人未定，总计：' + sum + '元';
}
function get_order_list_black() {
    var arrage_order=get_arrage_order();
    var arrage_order_person=_.filter(arrage_order,function(order){return order.price<12});
    _.map(arrage_order_person,function(order){
        var object_order= get_string_list(order);
        var list=object_order.black_list;
        document.getElementById("list-order").innerHTML += list; })
}
function get_order_list_red(){
    var arrage_order=get_arrage_order();
    var arrage_other_order_person=_.reject(arrage_order,function(order){return order.price<12});
    _.map(arrage_other_order_person,function(order){
        var object_order= get_string_list(order);
        var list=object_order.red_list;
        document.getElementById("list-order").innerHTML += list; })
}
function get_no_order_person_list(all_person){
    var arrage_order=get_arrage_order();
    var order_name=  _.map(arrage_order,function (order){return order.person});
    var no_order_person = _.difference(all_person,order_name);
    _.map(no_order_person,function(order){
        var object_order = get_string_list(order);
        var not_order = object_order.not_order_list;
        document.getElementById("no-order-list").innerHTML += not_order;})
}
function get_string_list(order){
    var string_list = '<ul class="list-style-2">' + '<li><h3>';
    var string_style= '</h3>' + '<p>';
    var string_blank= " ";
    var string_price_black='</p><span class="order-list-right">'+'<span class="order-amount">' + '￥';
    var string_price_red='</p><span class="order-list-right">'+'<span class="order-amount-one">' + '￥';
    var string_end_label='</span>' + '</span>' + '</li>' + '</ul>';
    var string_not_order_end='</h3></li>';
    var string_order_list_black = string_list+order.person + string_style+order.restraurant+string_blank+order.combo+ string_price_black
        +order.price+ string_end_label;
    var string_order_list_red= string_list+order.person + string_style+order.restraurant+string_blank+order.combo+ string_price_red
        +order.price+ string_end_label;
    var string_not_order_list=string_list+order+string_not_order_end;
    var object_order={ black_list:string_order_list_black,red_list:string_order_list_red,not_order_list:string_not_order_list};
    return object_order;
}
function look_order(){
    var people= new Person();
    var all_person = people.arrage_person_info;
    get_order_list_black();
    get_order_list_red();
    get_order_information(all_person);
    get_no_order_person_list(all_person);
}