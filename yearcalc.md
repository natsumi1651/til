## 西暦年から平成年を求める
（令和なのでこれだと平成35年になるけど）
process.stdin.resume();
process.stdin.setEncoding('utf8');
var today = new Date(); //カレンダーを使うことを宣言
var seireki = today.getFullYear(); //今日の年を呼び出す

console.log("西暦"+ seireki+ "年")
var heisei = seireki - 1988;
console.log(heisei)



// 西暦年から昭和年を求める
process.stdin.resume();
process.stdin.setEncoding('utf8');
var seireki = parseInt(Math.random() * 63) + 1926;   +1926するのを忘れないように
process.stdout.write ("西暦" + seireki + "年は");

// 昭和年を計算
var showa = seireki - 1925;
console.log("昭和" + showa + "年です");

![image](https://github.com/natsumi1651/til/assets/138348514/635098cb-e273-4fe1-bdde-3005b880b84c)
