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

function bai24(){
    var a =(document.getElementById('numB24').value);
    a = a.split(",");
    var n = a.length;
    var b = [];
    for(var i =0; i<n; i++)
    {
        let dem = 0;
       for(var j = 1; j <= a[i]; j++)
       {
         if(a[i]%j == 0)
           {
              dem++;
           }
       }
       if(dem == 2)
           {
              b.push(a[i]);
           }
    }
    // console.log(b);
    document.getElementById('ketquaB24').value = b;
}
function bai25(){
    var a =(document.getElementById('numB25').value);
    a = a.split(",");
    var n = a.length;
    var b = [];
    for(let i =0; i<n; i++ )
    {
        b.push(Math.pow(a[i],2));
    }
    document.getElementById('ketquaB25').value = b;

}
function bai26(){
    var a =(document.getElementById('numB26').value);
    a = a.split(",");
    var n = a.length;
    var k = document.getElementById('numB26_2').value;
    var b = [];
    for(let i =0; i<n; i++ )
    {
        if(a[i] == a[i + 1])
        {
            document.getElementById('ketquaB26').value = "Khong dk nhap trung gia tri";
            return;
        }
        else{
            if((parseInt(a[i]) + 1 == k))
            {
                b.push(a[i]);
            }
            else{
                if(parseInt(a[i]) - 1 == k)
                {
                    b.push(a[i]);
                }
            }
        }
    }
    document.getElementById('ketquaB26').value = b;
}
function chuanHoa(chuoi){
   chuoi = chuoi.toLowerCase();
   chuoi = chuoi.split(" ");
   var n = chuoi.length;
   for(var i =0; i<n; i++)
   {
       let chuoiTam = chuoi[i].split("");
       let m = chuoiTam.length;
       chuoiTam[0] = chuoiTam[0].toUpperCase();
       chuoi[i] = chuoiTam.join("");
   }
   chuoi = chuoi.join(" ");
   return chuoi;
}
function bai27(){
    var students = [
        {
            id: "T3HXX1",
            firstName: "NgAN",
            lastName: "duong tHuy"
        },
        {
            id: "T3HXX2",
            firstName: "hA",
            lastName: "do tHi Thu"
        },
        {
            id: "T3HXX5",
            firstName: "miNH",
            lastName: "Nguyen Nhat"
        }
    ];
    var n = students.length;
    var b = [];
    for(let i =0; i<n; i++)
    {            
        students[i].firstName = chuanHoa(students[i].firstName);
        students[i].lastName = chuanHoa(students[i].lastName);
        if((students[i].firstName).search("a") > 0 || (students[i].firstName).search("A") > 0)
        {
            if((students[i].firstName).length >= 3)
            {
                 b.push(students[i]);
            }
        }
    }
    console.log(b);     
}
// bai27()
function bai29(){
    var students = [
        {
            id: "T3HXX1",
            firstName: "Ngan",
            lastName: "Duong Thuy"
        },
        {
            id: "T3HXX2",
            firstName: "Ha",
            lastName: "Do Thi Thu"
        },
        {
            id: "T3HXX5",
            firstName: "Minh",
            lastName: "Nguyen Nhat"
        }
    ]
    console.log("Mang ban dau:");
    console.log(students);
    students = students.sort(function(a, b){
        let x = a.firstName.toLocaleLowerCase();
        let y = b.firstName.toLocaleLowerCase();
        if(x > y)
        { 
            return 1;
        }
        if(x<y)
        {
            return -1;
        }
    })
    console.log("Mang sau khi sap xep:");
    console.log(students);
}
