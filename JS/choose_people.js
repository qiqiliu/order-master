/**
 * Created by grass on 16-2-24.
 */
window.onload = function(){
    get_all_person()
}
var all_person=['赵大','钱二','张三','李四','王五','刘六'];
function choose_people(name){
    localStorage.setItem("person",name);
}
/*<script>
document.getElementById("well").innerHTML=localStorage.setItem("person");
</script>*/
function get_all_person() {
    for (i = 0; i < all_person.length; i++) {
        var name = all_person[i];
        var all_person_list = '<ul class="list-style-2">'+'<li>' +
            "<a href='help_to_order.html' onclick = choose_people('" + name + "')>"+
            '<h3>' + all_person[i] + '</h3></a></li></ul>';
        document.getElementById("wrapper").innerHTML += all_person_list;

    }
}