/**
 * Created by grass on 16-2-25.
 */
function get_localstore_restraurant(){
    var current_restraurant =localStorage.getItem("restraurant");
    return current_restraurant;
}
function Restraurant () {
    var localstore_info_restraurant;
    var list = ({
        name: localstore_info_restraurant = JSON.parse(localStorage.getItem("info-restraurant")),
        init: function () {
            return this.name;
        }
    }).init();
    this.all = list;
}
Restraurant.prototype.restraurant_name = function restraurant_name() {
    var arrage_name = [];
    _.map(this.all, function (restraurant) { return arrage_name.push(restraurant.name);});
    return arrage_name;
};
Restraurant.prototype.restraurant_combo = function restraurant_combo() {
    var current_restraurant = get_localstore_restraurant();
    var order_restraurant = _.filter(this.all, function (restraurant) {
        return current_restraurant == restraurant.name; });
    var arrage_combo = order_restraurant[0].combo;
    return arrage_combo;
};