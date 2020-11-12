// $(function() {
//     $('.put_btn').click(function() {
//         $.get("http://jx.xuzhixiang.top/ap/api/login.php", {
//             username: $('.user').val(),
//             password: $('.psd').val()
//         }, data => {
//             console.log(data);
//             console.log(data.data.id);
//             if (data.code == 0) {
//                 $('.sp1').html(data.msg);
//             }
//             if (data.code == 1) {
//                 $('.sp1').html(data.msg);
//                 window.location.href = '../html/index.html';
//             } else {
//                 $('.sp2').html('请检查用户名或者密码');
//             }
//             if (data.data.id) {
//                 localStorage.setItem('id', JSON.stringify(data.data.id))
//             }

//         })
//     })
// })
//登录
$('.btn').click(function() {
    let user = $("#user").val();
    let psw = $("#psw").val();
    let url = 'http://jx.xuzhixiang.top/ap/api/login.php'
    $.ajax({
        url: url,
        type: 'get',
        data: {
            username: user,
            password: psw
        },
        success(res) {
            let uid = res.data.id
            if (res.code == 0) {
                alert(res.msg)


            } else {
                alert(res.msg)
                localStorage.setItem("uid", res.data.id);
                localStorage.setItem("username", res.data.username);
                localStorage.setItem("utoken", res.data.token)
                location.href = '../index.html'
            }

        },
        error() {

        }

    })

})