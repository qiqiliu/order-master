/**
 * Created by grass on 16-2-25.
 */
window.onload=function() {
    get_different_combo();

}
function choose_combo(name,price){
    localStorage.setItem("combo",name);
    localStorage.setItem("price",price);
}

function get_different_combo() {
    $.getJSON('../JSON/order-master.json',function(data) {
        var all= (data.restraurants);
        var restraurant_name = localStorage.getItem("restraurant");
        var restraurant = [];
        var restraurant_price = [];
        for (i = 0; i < all.length; i++) {
            if (restraurant_name == all[i].name) {
                restraurant = all[i].combo_name;
                restraurant_price = all[i].combo_price;
            }
        }
        for (i = 0; i < restraurant.length; i++) {
            var combo = restraurant[i];
            var price = restraurant_price[i];
            var restraurant_combo_list = '<ul class="list-style-2">' + '<li>' +
                "<a href='help_to_order.html' onclick = choose_combo('" + combo + "','" + price + "')>" +
                '<h3>' + restraurant[i] + '</h3><p>' + '￥' + restraurant_price[i] + '</p></a></li>' + '</ul>';
            document.getElementById("order_list").innerHTML += restraurant_combo_list;
        }
    });
}


