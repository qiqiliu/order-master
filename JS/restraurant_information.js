/**
 * Created by grass on 16-2-25.
 */
function Restraurant () {
    var arrage_restraurant = ({
        localstorage_info_restraurant:JSON.parse(localStorage.getItem("info-restraurant")),
        init: function () {
            return this.localstorage_info_restraurant;
        }
    }).init();
    this.arrage_restraurant_info = arrage_restraurant;
}
Restraurant.get_restraurant_json= function(){
    $.getJSON('../JSON/restraurant_information.json', function (data) {
        localStorage.setItem("info-restraurant", JSON.stringify(data.restraurants));
    })
};
Restraurant.get_current_restraurant = function () {
    return localStorage.getItem("restraurant");
};
Restraurant.get_current_restraurant_combo= function () {
    return localStorage.getItem("combo");
};
Restraurant.get_current_restraurant_combo_price = function (){
    return localStorage.getItem("price");
};
Restraurant.prototype.restraurant_name = function get_restraurant_name( ) {
    var arrage_name = [];
    _.map(this.arrage_restraurant_info, function (restraurant) { return arrage_name.push(restraurant.name);});
    return arrage_name;
};
Restraurant.prototype.restraurant_combo = function get_restraurant_combo(){
    var current_restraurant =  Restraurant.get_current_restraurant();
    var order_restraurant = _.filter(this.arrage_restraurant_info, function (restraurant) {
        return current_restraurant == restraurant.name;});
    var arrage_combo = order_restraurant[0].combo;
    return arrage_combo;
};