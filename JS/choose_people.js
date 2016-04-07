/**
 * Created by grass on 16-2-24.
 */
window.onload = function(){
    get_all_person_list();
};
function choose_people(name){
    localStorage.setItem("person",name);
}
function get_list_string(person){
    var string__list= '<ul class="list-style-2">'+'<li>'+"<a href='help_to_order.html'"
        + " onclick = choose_people('" ;
    var string_style="')>"+"<h3>";
    var string_end_label='</h3></a></li></ul>';
    var string_person_list=string__list+person+string_style+person+string_end_label;
    return string_person_list;
}
function get_all_person_list( ){
    var all_person = (new Person()).arrage_person_info;
    _.map(all_person,function(person){
        var all_person_list = get_list_string(person)
        document.getElementById("wrapper").innerHTML += all_person_list;})
}
