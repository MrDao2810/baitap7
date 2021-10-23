function giaiPT() {
    let a = parseInt(document.getElementById('numa').value, 15);
    let b = parseInt(document.getElementById('numb').value, 15);
    let c = parseInt(document.getElementById('numc').value, 15);
    let m ;
    m = b * b - 4 * a * c;
    let x1, x2, x;
    let text;
    if (m < 0) {
        text = 'Phương trình vô nghiệm';
    } else {
        if (m == 0) {
            x = -b / (2 * a);
            text = 'PT có nghiệm' +" " + x ;
        } else {
            x1 = (-b + Math.sqrt(m)) / (2 * a);
            x2 = (-b - Math.sqrt(m)) / (2 * a);
            text = 'x1 = ' + x1.toFixed(2) + ' và ' + 'x2 = ' + x2.toFixed(2);
        }
    }
    document.getElementById('ketQua').value = text;
}


function chungminh() {
    var n = parseInt(document.getElementById('nguyena').value, 10);
    var nt  = 0,
        text2;
    var i = 1;
    if (n > 1) {
        for (i = 1; i <= n; i++) {
            if (n % i == 0) {
                nt ++;
            }
        }
        if (nt == 2) {
            text2 = 'So ' + n + ' la so Nguyen To';
        } else {
            text2 = 'So ' + n + ' Khong Phai la so Nguyen To';
        }
    } else {
        text2 = 'So ' + n + ' Khong Phai la so Nguyen To ';
    }
    document.getElementById('ketQua1').value = text2;
}