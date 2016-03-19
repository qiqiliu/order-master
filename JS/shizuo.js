/**
 * Created by grass on 16-2-24.
 */
function hrefs(){
    window.onload.href="choose_combo.html";
}
for (var i=0; i<localStorage.getItem("order").length; i++) {
    var key = JSON.parse(localStorage.getItem("order"))[i];
    var item = localStorage.getItem(key);
    var newItem = document.createElement("li");
    newItem.innerHTML =item;
   // itemList.appendChild(newItem);
}