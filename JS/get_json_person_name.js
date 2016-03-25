/**
 * Created by grass on 16-3-25.
 */
function get_json_and_choose_person() {
    $.getJSON('../JSON/order-master.json', function (data) {
        var all_person = (data.person_name);
        get_all_person(all_person);});
}
function get_json_and_render_page() {
    $.getJSON('../JSON/order-master.json', function (data) { var all_person = (data.person_name);
        get_order_list_black();
        get_order_list_red();
        get_order_information(all_person);
        get_no_order_person_list(all_person);});
}