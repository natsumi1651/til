# 関数式のこと  
関数式と、これまで学んできた関数宣言の違いは記述様式にあります。これまで学んできたJavaScriptの関数宣言であれば、function 関数名(引数){ ~ }となります。
一方で、関数式の場合は、function(引数){}という無名の関数を変数に定義または代入して関数を定義する、という記述になります。  

// 関数宣言  
function 関数名( 引数 ){  
  // 関数内の処理  
}  

// 関数式  
変数 = function( 引数 ){  
  // 関数内の処理  
}  

hello() 

const hello = function(){  
  console.log('hello')  
}
これだとエラーになってしまうので以下に修正。  

hello()  

function hello(){  
  console.log('hello')  
}

無名関数  
無名関数は、関数名なしで関数を定義することができます。より簡潔なコードが記述できるというメリットがあります。  
const hello = function(){  
  console.log('hello')  
}  

functionの後ろに名前がない状態。  
