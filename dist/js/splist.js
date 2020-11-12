$.post(" http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
    img: "images/sp1.jpg",
    name: "风行牛奶纯牛奶 200ml*12盒",
    price: 28.80,
    uid: 44124
}, data => {
    console.log(data);
});