# floorメソッドについて  
## 小数点の切り捨ては、.floorメソッドを使う。  

ECサイトのポイント付与サービスを考えます。  
購入金額が999円以下の場合、3%のポイント  
購入金額が1000円以上の場合、5%のポイント  
このように付与されるポイントを出力するメソッドを作りましょう。  

ただし誕生日の場合はポイントが5倍になります。  
誕生日の場合はtrue, 誕生日でない場合はfalseで表します。  
また、小数点以下をすべてのポイント計算が終わったあとに切り捨てましょう  



calculate_points(500, false) → ポイントは15点です    
calculate_points(2000, false) → ポイントは100点です  
calculate_points(3000, true) → ポイントは750点です   

def calculate_points(amount, is_birthday)  

 if amount <= 999  
    point = amount * 0.03  
  else
    point = amount * 0.05             ここでまずは通常のポイント換算の計算をする。  
  end  

  if is_birthday  
    point = amount * 5　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　誕生日の場合の計算をする。  
  end  

  puts "ポイントは#{point.floor}点です"     floorメソッドは上記の条件の計算全てが終わった後のポイントに対して使う方がスッキリする。（ifのところでやっても良いけどこれだと今回の場合は３回.floorと書かなくてはいけないから。
  
end

