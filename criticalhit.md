##critical hit

process.stdin.resume();
process.stdin.setEncoding('utf8');
var hit = parseInt(Math.random() *10) + 1;
if (hit < 6){
    console.log(`スライムに、${hit}のダメージを与えた！`);
}else{
     console.log(`クリティカルヒット！スライムに、100のダメージを与えた！`);
}
