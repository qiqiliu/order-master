/**
 * Created by grass on 16-2-29.
 */

window.onload = function() {
    get_json_and_render_page();
}
function get_json_and_render_page() {
    $.getJSON('../JSON/order-master.json', function (data) {
        var all_person = (data.person_name);
        get_no_person_list(all_person);
        var new_object=get_object_person_name();
        var new_order_person = get_arrage_order_person(all_person,new_object);
        get_order_list_black(all_person,new_order_person);
        get_order_list_red(all_person,new_order_person);
        get_order_information(all_person,new_order_person);
        var no_order_person = get_no_order_person_arrage(all_person);
        var no_order_person=get_no_order_person_arrage_two(all_person);
        var no_order_person_object= get_no_order_person_object(no_order_person);
        var new_arrage = get_no_order_person(no_order_person_object,all_person);
        get_no_order_person_list(new_arrage);
    });
}
function get_no_person_list(all_person){
    if (localStorage.getItem("order") == null) {
        document.getElementById("number-order").innerHTML = '0人已定';
        document.getElementById("not-order").innerHTML = all_person.length + '人未定';
        document.getElementById("order-black").innerHTML = '0人已定,' + all_person.length + '人未定,总计:0元';
        for (i = 0; i < all_person.length; i++) {
            var all_people = '<ul class="list-style-2">' + '<li><br><h3>' + all_person[i] + '</h3><br></li>';
            document.getElementById("no-order-list").innerHTML += all_people;
        }
    }
}
function get_object_person_name() {
    if (localStorage.getItem("order") != null) {
        var new_object = {};
        for (j = 0; j < JSON.parse(localStorage.getItem("order")).length; j++) {
            if (!new_object[JSON.parse(localStorage.getItem("order"))[j].person]) {
                new_object[JSON.parse(localStorage.getItem("order"))[j].person] = 1;
            }
        }
    }
    return new_object;
}
function get_arrage_order_person(all_person,new_object){
    if (localStorage.getItem("order") != null) {
        var new_order_person = [];
        for (i = 0; i < all_person.length; i++){
            if (new_object[all_person[i]]){
                new_order_person.push(all_person[i]);
            }
        }
    }
    return new_order_person;
}
function get_order_list_black(all_person,new_order_person) {
    if (localStorage.getItem("order") != null) {
        for (i = 0; i < JSON.parse(localStorage.getItem("order")).length; i++) {
            if (JSON.parse(localStorage.getItem("order"))[i].price < 12) {
                var list = '<ul class="list-style-2">' + '<li>' + '<h3>' + JSON.parse(localStorage.getItem("order"))[i].person
                    + '</h3>' + '<p>' + JSON.parse(localStorage.getItem("order"))[i].restraurant + ' ' +
                    JSON.parse(localStorage.getItem("order"))[i].combo + '</p>' + '<span class="order-list-right">' +
                    '<span class="order-amount">' + '￥' + JSON.parse(localStorage.getItem("order"))[i].price + '</span>' +
                    '</span>' + '</li>' + '</ul>';
                document.getElementById("list-order").innerHTML += list;
            }
        }
    }
}
function get_order_list_red(all_person,new_order_person){
    if (localStorage.getItem("order") != null) {
        for (i = 0; i < JSON.parse(localStorage.getItem("order")).length; i++) {
            if (JSON.parse(localStorage.getItem("order"))[i].price >12) {
                var list = '<ul class="list-style-2">' + '<li>' + '<h3>' + JSON.parse(localStorage.getItem("order"))[i].person
                   + '</h3>' + '<p>' + JSON.parse(localStorage.getItem("order"))[i].restraurant + ' ' +
                   JSON.parse(localStorage.getItem("order"))[i].combo + '</p>' + '<span class="order-list-right">' +
                   '<span class="order-amount-one">' + '￥' + JSON.parse(localStorage.getItem("order"))[i].price + '</span>' +
                   '</span>' + '</li>' + '</ul>';
                document.getElementById("list-order").innerHTML += list;
           }
       }
   }
}
function get_order_information(all_person,new_order_person) {
    if (localStorage.getItem("order") != null) {
        var sum = 0;
        for (i = 0; i < JSON.parse(localStorage.getItem("order")).length; i++) {
            sum += JSON.parse(JSON.parse(localStorage.getItem("order"))[i].price);
        }
        document.getElementById("number-order").innerHTML = new_order_person.length + '人已定';
        document.getElementById("not-order").innerHTML = (all_person.length - new_order_person.length) + '人未定';
        document.getElementById("order-black").innerHTML = ( new_order_person.length ) + '人已定,' +
            (all_person.length - new_order_person.length) + '人未定，总计：' + sum + '元';
    }
}
function get_no_order_person_arrage(all_person) {
    if (localStorage.getItem("order") == null) {
       var no_order_person = all_person;
    }
    return no_order_person;
}
function get_no_order_person_arrage_two(all_person){
    if(localStorage.getItem("order")!=null){
        var no_order_person = [];
        for (i = 0; i < JSON.parse(localStorage.getItem("order")).length; i++) {
             no_order_person.push(JSON.parse(localStorage.getItem("order"))[i].person);
        }
    }
    return no_order_person;
}
function get_no_order_person_object(no_order_person) {
    var no_order_person_object = {};
    for (i = 0; i < no_order_person.length; i++) {
        if (!no_order_person_object[no_order_person[i]]) {
            no_order_person_object[no_order_person[i]] = 1;
        }
    }
    return no_order_person_object;
}
function get_no_order_person(no_order_person_object,all_person) {
    var new_arrage = [];
    for (i = 0; i < all_person.length; i++) {
        if (!no_order_person_object[all_person[i]]) {
            new_arrage.push(all_person[i]);
        }
    }
    return new_arrage;
}
function get_no_order_person_list(new_arrage){
    for (i = 0; i < new_arrage.length; i++) {
        var not_order = '<ul class="list-style-2">' + '<li><br><h3>' + new_arrage[i] + '</h3><br></li>';
        document.getElementById("no-order-list").innerHTML += not_order;
    }
}
