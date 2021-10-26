console.log("xin Chao");
console.log("1 con ga");
// alert là chức năng của chrome hỗ trợ nên code local không hoạt động
alert("không được rồi");
 // cách khai báo trên js : var , let , cost (hằng số)
 var a = 10;
 a = 20;
 const b = 30;
 b = 50;
//console.log("a");
 // tạo ra 1 ô nhớ : ô nhớ đó đặt tên a => vứt 1 giá trị  = 10  vào ô nhớ đấy 

 // các kiểu dữ  liệu trong js (Number, boolean, string, symbol , object , function, undefine)
 // dễ học , khó control , deep learning



 // câu lệnh điều kiện : >= nếu thì (if else)
 let peoplePrice = 1000000;
 if (peoplePrice >= 1000000000) {
     console.log("người giàu");
 } else {

 }
 let gpaScore = 8;
 if (gpaScore < 5) {
     console.log("học sinh kém");
 } else {
     if (gpaScore >= 5 && gpaScore <8) {
         console.log("học sinh trung bình");
     } else {
        console.log("học sinh giỏi");
     }
 }

 let isHasValue = "2"; // false => !false => true
 // nếu điệu triệu trả về true/false =>thì ! có nghĩa là ngược lại
 // !! : converse giá trị về kiểu boolean .
 if (!isHasValue) {
     console.log("có giá trị");
 }else{
     console.log(!!isHasValue);
 }

 // switch => không viết if else : nếu quá 3 điều kiện .
switch (gpaScore) {
    case 1:
        console.log(gpaScore + "2");
        break;
    case 2:
        console.log(gpaScore + "3");
        break;
    case 3:
        console.log(gpaScore + "4");
        break;
    case 4:
        console.log(gpaScore + "5");
        break;
    default:
        console.log(gpaScore + " " + "6");
        break;
}
// break; => thoát khỏi vòng lặp



// vòng lặp :
// in ra màn hình log 1 , 2 ,3 ,4 ,5 
//console.log("1");
//console.log("2");
//console.log("3");
//console.log("4");
//console.log("5");
// 0,1 ,2 , 3 ,..
for ( let index = 0 ; index < 4; index++){
    console.log(index + 1);
}

// Vòng lặp
// vòng lặp vô hạn


for(let i = 20; i <= 30;) {
    alert(`khoong ổn rồi ${i}`);
}
for (let index = 0 ; index<10; index++){}
//in ra log 10 lần 


let begin = 0;
while (begin < 10){
    console.log("counter", begin);
    begin++;

}
while (condition){
}

// do while : làm trước rồi mới so sánh tác dụng (chưa cần biết đúng sai cứ làm đã rồi so sánh)
// luôn lặp tối thiểu 1 lần
let checkDo = 20;
do {
    console.log(checkDo);
    checkDo++;
} while (checkDo < 10);
--*--
// thoát khỏi vòng lặp break. 
let sum = 0 ;
while (true) {
    let value = +prompt("Enter number");
    if(!value) break;
    sum += value;    
}
alert(sum);
--*--
--*--
// thoát khỏi lần lặp hiện tại continue
// log ra các số lẻ
for (let index = 0; index < 10; index++) {
    if (index % 2 === 0 ) continue ;
        console.log(index);   
}
--*--
