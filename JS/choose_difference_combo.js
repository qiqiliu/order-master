/**
 * Created by grass on 16-2-25.
 */
window.onload=function() {
    get_different_combo();
}
function choose_combo(name,price){
    localStorage.setItem("combo",name);
    localStorage.setItem("price",price);
}
var all=[{name:'KFC',combo_name:['田园脆鸡堡', '黄金咖喱猪排饭', '意式肉酱肉丸饭', '老北京鸡肉卷', '劲脆鸡腿堡'],
    combo_price:['10.00', '23.50', '16.00', '14.00', '15.00']},{name:'7-11',combo_name:
    ['半荤半素','红烧排骨盖饭','鱼香肉丝盖饭套餐','西红柿打卤面','京酱肉丝盖饭套餐'],
    combo_price:['11.50','19.50','15.00','10.00','16.00']},{name:'成都小吃',combo_name:
    ['钟水饺','九尺板鸭','肥肠粉','双椒兔丁面','刘氏太安鱼'],combo_price:['16.00','45.00','16.50','18.00','25.00']}];
function get_different_combo() {
    var restraurant_name=localStorage.getItem("restraurant");
    var restraurant=[];
    var restraurant_price=[];
    for(i=0;i<all.length;i++){
        if(restraurant_name==all[i].name) {
            restraurant = all[i].combo_name;
            restraurant_price = all[i].combo_price;
        }
    }
    for (i = 0; i < restraurant.length; i++) {
        var combo = restraurant[i];
        var price = restraurant_price[i];
        var restraurant_combo_list = '<ul class="list-style-2">' + '<li>' +
            "<a href='help_to_order.html' onclick = choose_combo('" + combo + "','" + price + "')>" +
            '<h3>' + restraurant[i] + '</h3><p>' + '￥' + restraurant_price[i] + '</p></a></li>' + '</ul>';
        document.getElementById("order_list").innerHTML += restraurant_combo_list;
    }
}