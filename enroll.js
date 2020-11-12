// var oIn = document.querySelectorAll("input");
// var oBtn = document.querySelector("button");
// var oForm = document.querySelector("button");
// var oSpan = document.querySelectorAll("span");

// oForm.onclick = function() {
//     if (oIn[0].value == "") {
//         oSpan[0].innerHTML = "此处不能为空";
//         return false;
//     }
//     if (oIn[1].value == "") {
//         oSpan[1].innerHTML = "此处不能为空"
//         return false;
//     }
//     if (oIn[2].value != oIn[1].value) {
//         oSpan[2].innerHTML = "输入密码不一致"
//         return false;
//     }
//     return false;

// }
// $(function() {
//     $('.btn').click(function() {
//         $.get("http://jx.xuzhixiang.top/ap/api/reg.php", {
//             username: $('.user').val(),
//             password: $('.psd').val()
//         }, data => {
//             console.log(data);
//             $('.zc').html(data.msg);
//         })
//     })
// })
// $('.btn').click(function() {
//     console.log($("#user").val());
//     let user = $("#user").val();
//     let psw = $("#psw").val();
//     $.get('http://jx.xuzhixiang.top/ap/api/reg.php', {
//         "username": user,
//         "password": psw
//     }, data => {
//         if (data.code == 0) {
//             alert(data.msg)
//         } else {
//             alert(data.msg)
//         }
//     })
// })