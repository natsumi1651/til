input = [3, 5, 9 ,12, 15, 21, 29, 35, 42, 51, 62, 78, 81, 87, 92, 93]  
input.each_with_index do |item, i|  
  puts "#{item}は#{i}番目です"  
end  


#答え  
def search(target_num, input) #１まずメソッドで囲む  
 
input.each_with_index do |num, index| #配列の数値に対してinput.each_with_indexメソッド使う  
    if num == target_num  #2条件かく   
      puts "#{index + 1}番目にあります" #表示する数字にプラス１したものを出したい  
      return  
    end  
  end  
  puts "その数は含まれていません"  
end
