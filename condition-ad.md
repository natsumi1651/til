# 倍数条件が苦手なので確認。

正の整数を入力します。その整数が、10の倍数（10,20,30...）からの差が2以内であるときはTrue
それ以外はFalseと出力するメソッドを作りましょう。　　

near_ten(12)→True　　　　

near_ten(17)→False　　　　

near_ten(19)→True　　　　


def near_ten(num)　　

  quotient = num % 10  まず、１０で割ってみて余る数字であるということを書く＝１０の倍数　　
  
  if quotient <= 2 || quotient >= 8　　　その設定で、もしあまりの数字の差が２位ない、つまり、１０の倍数のプラス２もしくはマイナス２で収まる数字の場合、trueと表示させる。　　
  
    puts "True"　　
    
  else　　
  
    puts "False"　　そうでない場合は、false　　
    
  end　　
  
end　　


## 〇〇のs倍数系☞ 『該当する数字　％　その倍数』
