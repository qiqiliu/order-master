/**
 * Created by grass on 16-2-25.
 */
window.onload=function() {;
    get_all_restraurants_list();
};
function choose_restraurant(name){
   localStorage.setItem("restraurant",name);
}
function get_list_string(name){
    var string_list='<ul class="list-style-2">'+'<li>'+"<a href='help_to_order.html' onclick=choose_restraurant('";
    var string_style="')>"+'<h3>';
    var string_end_label='</h3></a></li></ul>';
    var string_restraurant_name=string_list+name+string_style+name+string_end_label;
    return string_restraurant_name;
}
function get_all_restraurants_list( ){
    var all_restraurants_name = (new Restraurant()).restraurant_name();
    _.map(all_restraurants_name,function(name){
        var all_restraurant_list = get_list_string(name);
        document.getElementById("wrapper").innerHTML += all_restraurant_list;})
}