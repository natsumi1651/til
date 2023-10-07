# JavaScriptの戻り値

## Rubyでは最後の戻り値が、メソッドの戻り値として処理されていたがjavascriptでは一手間いる。returnをつける

function calc(num1,num2){
  num1*num2
}

const num1 = 3
const num2 = 4
console.log(calc(num1,num2))

これではundefinedになるのでreturnを加える

function calc(num1,num2){
  return num1*num2
}

const num1 = 3
const num2 = 4
console.log(calc(num1,num2))

次回関数式から
