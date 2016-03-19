/**
 * Created by grass on 16-2-29.
 */
var all_person=['赵大','钱二','张三','李四','王五','刘六'];
window.onload = function() {
    get_order_information();
    var get_order_person= get_not_order_person();
    var object=get_not_order(get_order_person);
    var arrage=get_not_order_array(object);
    get_not_order_people(arrage);
}
function get_order_information() {
    if (localStorage.getItem("order")==null) {
        document.getElementById("number-order").innerHTML ='0人已定';
        document.getElementById("not-order").innerHTML=all_person.length+'人未定';
        document.getElementById("order-black").innerHTML='0人已定,'+all_person.length+'人未定,总计:0元';
        for(i=0;i<all_person.length;i++){
            var all_people = '<ul class="list-style-2">' +'<li><br><h3>'+all_person[i] + '</h3><br></li>';
            document.getElementById("no-order-list").innerHTML += all_people;
        }
    }
    else {
         var new_object = {};
         var new_order_person=[];
         for(j=0;j<JSON.parse(localStorage.getItem("order")).length;j++) {
             if (!new_object[JSON.parse(localStorage.getItem("order"))[j].person]) {
                 new_object[JSON.parse(localStorage.getItem("order"))[j].person] = 1;
             }
         }
         for(i=0;i<all_person.length;i++) {
             if (new_object[all_person[i]]) {
                 new_order_person.push(all_person[i]);
             }
         }
        for (i = 0; i < JSON.parse(localStorage.getItem("order")).length; i++) {
            if(JSON.parse(localStorage.getItem("order"))[i].price<12) {
                var list = '<ul class="list-style-2">' + '<li>' + '<h3>' + JSON.parse(localStorage.getItem("order"))[i].person
                    + '</h3>' + '<p>' + JSON.parse(localStorage.getItem("order"))[i].restraurant + ' ' +
                    JSON.parse(localStorage.getItem("order"))[i].combo + '</p>' + '<span class="order-list-right">' +
                    '<span class="order-amount">' + '￥' + JSON.parse(localStorage.getItem("order"))[i].price + '</span>' +
                    '</span>' + '</li>' + '</ul>';
                document.getElementById("list-order").innerHTML += list;
            }
            else{
                var list = '<ul class="list-style-2">' + '<li>' + '<h3>' + JSON.parse(localStorage.getItem("order"))[i].person
                    + '</h3>' + '<p>' + JSON.parse(localStorage.getItem("order"))[i].restraurant + ' ' +
                    JSON.parse(localStorage.getItem("order"))[i].combo + '</p>' + '<span class="order-list-right">' +
                    '<span class="order-amount-one">' + '￥' + JSON.parse(localStorage.getItem("order"))[i].price + '</span>' +
                    '</span>' + '</li>' + '</ul>';
                document.getElementById("list-order").innerHTML += list;
            }
        }
        var sum=0;
        for(i=0;i<JSON.parse(localStorage.getItem("order")).length;i++){
            sum += JSON.parse(JSON.parse(localStorage.getItem("order"))[i].price);
        }
        document.getElementById("number-order").innerHTML = new_order_person.length + '人已定';
        document.getElementById("not-order").innerHTML= (all_person.length-new_order_person.length)+'人未定';
        document.getElementById ( "order-black" ).innerHTML = ( new_order_person.length ) + '人已定,' +
            (all_person.length - new_order_person.length) + '人未定，总计：' + sum + '元';

    }
}
function get_not_order_person(){
    var order_person=[];
    if(localStorage.getItem("order")==null){
        order_person=all_person;
    }
    else {
        for (i = 0; i < JSON.parse(localStorage.getItem("order")).length; i++) {
            order_person.push(JSON.parse(localStorage.getItem("order"))[i].person);
        }
    }
    return order_person;
}
function get_not_order(order_person){
    var order_person_object={};
    for(i=0;i<order_person.length;i++){
        if(!order_person_object[order_person[i]]){
            order_person_object[order_person[i]]=1;
        }
    }
    return order_person_object;
}
function get_not_order_array(order_person_object){
    var new_arrage=[];
    for(i=0;i<all_person.length;i++){
        if(!order_person_object[all_person[i]]){
            new_arrage.push(all_person[i]);
        }
    }
    return new_arrage;
}
function get_not_order_people(new_arrage){
    for(i=0;i<new_arrage.length;i++){
        var not_order = '<ul class="list-style-2">' +'<li><br><h3>'+new_arrage[i] + '</h3><br></li>';
        document.getElementById("no-order-list").innerHTML += not_order;
    }
}
