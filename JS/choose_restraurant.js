/**
 * Created by grass on 16-2-25.
 */
function choose_restraurant(name){
    localStorage.setItem("restraurant",name);
}
window.onload=function() {
    get_all_restraurant();
}
function get_all_restraurant() {
    $.getJSON('../JSON/order-master.json',function(data) {
        var all = (data.restraurants);
        var all_restraurants = [];
        for (i = 0; i < all.length; i++) {
            all_restraurants.push(all[i].name);
        }
        for (i = 0; i < all_restraurants.length; i++) {
            var restraurants = all_restraurants[i];
            var all_restraurant_list = '<ul class="list-style-2">' + '<li>' +
                "<a href='help_to_order.html' onclick = choose_restraurant('" + restraurants + "')>" +
                '<h3>' + all_restraurants[i] + '</h3></a></li>' + '</ul>';
            document.getElementById("wrapper").innerHTML += all_restraurant_list;
        }
    });
}
