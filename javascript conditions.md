# if文による条件分岐　else if文

## parseInt(Math.random() * 5) + 1;

process.stdin.resume();
process.stdin.setEncoding('utf8');
var number = parseInt(Math.random() * 5) + 1;
console.log("あなたの順位は" + number + "位です");
// ここにif文を追加する
if (number == 1) {
  console.log("おめでとう！");
} else if (number == 2) {
  console.log("あと少し！");
} else {
  console.log("よくがんばったね");
}

##   process.stdout.write (place + "位入賞圏外");

process.stdin.resume();
process.stdin.setEncoding('utf8');
var place = parseInt(Math.random() * 12) + 1;

// ここにif文を追加する
if (place >= 7){
    process.stdout.write (place + "位入賞圏外");
}else{
    process.stdout.write (place + "位入賞");

}

process.stdin.resume();
process.stdin.setEncoding('utf8');
var omikuji = parseInt(Math.random()*10)+1;
if (omikuji == 1) {
    console.log("大吉")
}else if(omikuji == 2){
    console.log("中吉")
}else if(omikuji <=4){
    console.log("小吉").        3と4の時に小吉と出る条件
}else if(omikuji <= 7){        5/6/7の時に凶が出る条件
    console.log("凶")
}else{
    console.log("大凶")
}
![image](https://github.com/natsumi1651/til/assets/138348514/947aa9a4-1daf-49c4-a1f8-cfc1e9a56203)
