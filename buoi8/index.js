function soNT() {
    document.getElementById("ketQua").value = "";
    let n = document.getElementById('soN').value;

    for (i = 1; i <= n; i++) {
        let dem = 0;
        for (j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                dem++;
                break;
            }
        }
        if (dem == 0 && i != 1) {
            document.getElementById("ketQua").value += i + " ";
        }
        
    }
}
function tinhTong() {
    document.getElementById("ketQua1").value = "";
    let n = Number(document.getElementById('soN1').value);
    document.getElementById("ketQua1").value = (n * (n + 1)) / 2;
}
function tinhTongBP() {
    document.getElementById("ketQua2").value = "";
    let n = Number(document.getElementById('soN2').value);
    let tong = 0;
    for (i = 1; i <= n; i++) {
        tong += i * i;
    }
    document.getElementById("ketQua2").value = tong;
}
function tinhTongLe() {
    document.getElementById("ketQua3").value = "";
    let n = Number(document.getElementById('soN3').value);
    let tong = 0;
    for (i = 1; i <= n; i += 2 ) {
        tong += i;
    }
    document.getElementById("ketQua3").value = tong;
}
function kiemTraSoToanLe() {
    document.getElementById("ketQua4").value = "";
    let n = document.getElementById('soN4').value;
    for (i = 0; i < n.length; i++) {
        if (n[i] % 2 == 0) {
            document.getElementById("ketQua4").value = "NO";
            return;
        }
    }
    document.getElementById("ketQua4").value = "YES";
}


function kiemTraSoDoiXung(){
    var x = (document.getElementById('soN5').value);
    var text1 = x.split("");
    var text2 = text1.reverse();
    var text3 = text2.join("");
    // document.getElementById('ketquaB9').value =text3;
    var check = 1;
    if(x == text3)
    {
        check = 1;
    }
    else{
        check = 0;
    }
    if(check == 1){
        document.getElementById('ketQua5').value = "YES";
    }
    else{
        document.getElementById('ketQua5').value = "NO";
    }
   
}
function bangCuuChuong() {
    for (i = 2; i <= 9; i++) {
        for (j = 1; j <= 10; j++) {
            document.getElementById("ketQua6").value += i + " x " + j + " = " + i * j + '\n';
        }
        document.getElementById("ketQua6").value += "***" + '\n'
    }
}