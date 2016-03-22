/**
 * Created by grass on 16-2-25.
 */
function choose_restraurant(name){
    localStorage.setItem("restraurant",name);
}
window.onload=function() {
    get_json_and_render_page();
}
function get_json_and_render_page(){
    $.getJSON('../JSON/order-master.json',function(data) { var all = (data.restraurants);
        var all_restraurants= get_all_restraurants(all);
        get_all_restraurants_list(all_restraurants);});
}
function get_all_restraurants(all) {
    var all_restraurants_arrage = [];
    _.map(all,function(restraurant){ all_restraurants_arrage.push(restraurant.name);})
    return all_restraurants_arrage;
}
function get_all_restraurants_list(all_restraurants){
    _.map(all_restraurants,function(name){ var all_restraurant_list = '<ul class="list-style-2">' + '<li>' +
        "<a href='help_to_order.html' onclick=choose_restraurant('" + name + "')>"+'<h3>'+name +'</h3></a></li>'+'</ul>';
        document.getElementById("wrapper").innerHTML += all_restraurant_list;})
}
