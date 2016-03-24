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
function get_list_string(name){
    var string_list='<ul class="list-style-2">'+'<li>'+"<a href='help_to_order.html' onclick=choose_restraurant('";
    var string_style="')>"+'<h3>';
    var string_end_label='</h3></a></li></ul>';
    var string_restraurant_name=string_list+name+string_style+name+string_end_label;
    return string_restraurant_name;
}
function get_all_restraurants_list(all_restraurants){
    _.map(all_restraurants,function(name){
        var all_restraurant_list = get_list_string(name);
        document.getElementById("wrapper").innerHTML += all_restraurant_list;})
}
