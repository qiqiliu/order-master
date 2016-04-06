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
Person.current_person = function (){
    return localStorage.getItem("person");
};
Person.order_list = function () {
    return localStorage.getItem("order");
};