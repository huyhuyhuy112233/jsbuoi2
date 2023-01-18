/*
    B1: viết hàm
    B2: định nghĩa nội dung hàm khi click
    B3: gắn tên hàm vào onclick của nút cần click
*/


function thayDoiNoiDung() {
    var theH1 = document.getElementById('fs-3');
    theH1.innerHTML = 'Đã thay đổi nội dung văn bản';
    var theP = document.getElementById('txtNoiDung');
    theP.innerHTML = 'Nội dung sau khi thay đổi';
}

// ví dụ 2: Demo change css style
function changeColor () {
    var tagHome = document.getElementById('home');
    // thay đổi style.color 
    // tagHome.style.color = 'red';
    //  đối với thuộc tính css có 2 từ trở lên --> viết hoa từ thứ 2 chữ cái đầu tiên 
    // tagHome.style.fontSize = '132px';
    // thay đổi class
    tagHome.className = 'fa fa-home big-home shadow-lg'
}

/*
 Chuyển đổi style trong css và js 
 css                    js
 font-weight        fontWeight
 background-color   backgroundColor
 margin-top         marginTop
*/

function xuLy() {
    // debugger;
    var tagName = document.getElementById('tieuDe');
    tagName.style.opacity = '0';
    var tagText = document.getElementById('noiDung');
    tagText.innerHTML = 'CyberSoft FondEnd';
    tagText.style.background='red';
    tagText.style.borderRadius = '50%';
    tagText.style.textAlign = 'center';
    tagText.style.fontSize = '100px';
}


// ví dụ 4
/*
    BIẾN TOÀN CỤC:
    biến ở scope cao hơn sẽ sử dụng được trong scope thấp hơn
    biến scope thấp hơn sẽ không sử dụng được ở scope cao hơn 
*/ 
 // global scope
 var theImg = document.getElementById('imgDen');
 var btnTatDen = document.getElementById('btnTatDen');
var btnBatDen = document.getElementById('btnBatDen');
    function batDen() {
        theImg.src = "./img/anh2.gif";
        // Thay đổi sytle bật tắt đèn
        btnBatDen.className ='btn btn-success';
        btnTatDen.className ='';
    }
    function tatDen() {
        theImg.src = "./img/anh1.gif";
        btnTatDen.className ='btn btn-success';
        btnBatDen.className ='';
    }

// bài tập 5:
function dangNhap() {
    // lấy thông tin input
    // input taiKhoan, matKhau
    var taiKhoan = document.getElementById('Tài Khoản').value;
    var matKhau = document.getElementById('Mật Khẩu').value;
    

    // truy xuất đến thẻ thông báo
    var divThongBao = document.getElementById('thongBao');
    divThongBao.innerHTML = taiKhoan + ' - ' + matKhau;
    divThongBao.className = 'bg-success text-white p-3 mt-2'
}

// bài tập 6
function tinhTienTip() {
    // input : tổng tiền, soPhanTram, soNhanVien
    var tongtien = document.getElementById('tongtien').value;
    var phanTramTip = document.getElementById('phanTramtip').value;
    var soNhanVien = document.getElementById('soNhanVien').value;

    // output: tiền tip 
    var tienTip=0;

    //process:
    tienTip = tongtien*phanTramTip/100/soNhanVien;

    document.getElementById('tienTipMoiNhanVien').innerHTML = tienTip.toFixed(2);
}






