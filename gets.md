# getsメソッドの応用

二桁以上の整数を入力すると、十の位と一の位の数字の足し算、十の位と一の位の数字の掛け算をそれぞれ行い、最後に2つの結果を足し合わせて出力するプログラムをRubyで作成してください。  

def addition(a, b)  
a + b  
end  

def multiplication(a,b)  
a * b  
end  



puts "二桁の整数を入力してください"    ☜今回は二桁かどうかのふるい分けはしなくて良い
input = gets.to_i  　　　☜入力内容を取り込む

## X, Y = slice_num(input)  ①取り出したい数字の桁数で割る　ここがまず大事！！slice()の中の数を一個一個取り出せる。今回はこれをXとYとした　  
add_result = addition(X, Y)  ② ①の結果をさらに10で割った、そのあまりが任意の桁の数字
multiple_result = multiplication(X, Y)  
puts "足し算結果と掛け算結果の合計値は#{add_result + multiple_result}です"  
