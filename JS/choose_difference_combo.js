/**
 * Created by grass on 16-2-25.
 */
window.onload=function() {
    get_restraurant_combo_list();
};
function choose_combo(name,price){
    localStorage.setItem("combo",name);
    localStorage.setItem("price",price);
}
function get_restraurant_combo_list () {
    var arrage_combo_name = (new Restraurant()).restraurant_combo();
    _.map(arrage_combo_name, function (combo) {
        var restraurant_combo_list = get_list_string(combo);
        document.getElementById("order_list").innerHTML += restraurant_combo_list;})
}
function get_list_string(combo){
    var string_list='<ul class="list-style-2"><li>'+"<a href='help_to_order.html' onclick = choose_combo('";
    var string_bound="','";
    var string_style="')>"+'<h3>';
    var string_price='</h3><p>'+'￥';
    var string_end_label= '</p></a></li>' + '</ul>';
    var string_restraurant_name=string_list+combo.combo_name+string_bound+ combo.combo_price+string_style+combo.combo_name
        +string_price+combo.combo_price+string_end_label;
    return string_restraurant_name;
}