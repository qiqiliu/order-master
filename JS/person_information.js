/**
 * Created by grass on 16-3-25.
 */
function Person() {
    var arrage_person = ({
        localstorage_all_person:JSON.parse(localStorage.getItem("all-person")),
        init: function () {
            return this.localstorage_all_person;
        }
    }).init();
    this.arrage_person_info = arrage_person;
}
Person.get_person_json = function(){
    $.getJSON('../JSON/person_information.json', function (data) {
        localStorage.setItem("all-person",JSON.stringify(data.person_name));});
};
Person.get_current_person = function (){
    return localStorage.getItem("person");
};
Person.get_order_list = function () {
    return localStorage.getItem("order");
};