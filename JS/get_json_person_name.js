/**
 * Created by grass on 16-3-25.
 */
function Person() {
    var localstore_all_person;
    var list = ({
        name: localstore_all_person = JSON.parse(localStorage.getItem("all-person")),
        init: function () {
            return this.name;
        }
    }).init();
    this.all = list;
}