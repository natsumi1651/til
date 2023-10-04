#7-20の間に王蟲が鳴いたら、NGと出すには。  
def  parrot_trouble(talking, hour)
  if talking && ( hour < 7 || 20 < hour)
    puts "OK"
  else
    puts "NG"
end

　## 一番限定的な条件だけを書いて、残りを全てNGとする方がコード的にはまとまっていてよいか。
