window.onload=function() {
    get_all_restraurant();
}
function get_all_restraurant() {
    var all=[];
    $.ajaxSettings.async = false;
    $.getJSON('../JSON/order-master.json', function (data) {
        all = (data.restraurants);
    });
    $.ajaxSettings.async = true;
    return all;
}
function Restraurant (all) {
    this.all = all;
}
Restraurant.prototype.restraurant_name = function restraurant_name() {
    var arrage_name = [];
    _.map(this.all, function (restraurant) {
        arrage_name.push(restraurant.name)
    });

    return arrage_name;
};
Restraurant.prototype.restraurant_combo= function restraurant_combo() {
    var restraurant_name = localStorage.getItem("restraurant");
    var order_restraurant = _.filter(this.all, function (restraurant) { return restraurant_name == restraurant.name;});
    var arrage_combo = order_restraurant[0].combo;
    return arrage_combo;
};
function get_restraurant_list(all){
    var all_restraurants_name= new Restraurant(all);
    var all_restraurants=all_restraurants_name.restraurant_name();
    get_all_restraurants_list(all_restraurants);
}
function get_restraurant_combo_list(all) {
    var restraurants_combo = new Restraurant(all);
    var arrage_combo_name = restraurants_combo.restraurant_combo();
    get_difference_combo(arrage_combo_name);
}