/**
 * Created by grass on 16-3-25.
 */
function Person() {
    var localstorage_all_person;
    var list = ({
        name: localstorage_all_person = JSON.parse(localStorage.getItem("all-person")),
        init: function () {
            return this.name;
        }
    }).init();
    this.all = list;
}
Person.prototype.current_person = function current_person(){
    return localStorage.getItem("person");
};
Person.prototype.order_list = function order_list() {
    return localStorage.getItem("order");
};