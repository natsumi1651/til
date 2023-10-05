# even?メソッド

def count_evens(nums)  
 count = 0  
 nums.each do |num|  
 
 if nums.even?  
  count += 1  
 end  
 puts count
end

count_evens([2, 1, 2, 3, 4]) → 3  
count_evens([2, 2, 0]) → 3  
count_evens([1, 3, 5]) → 0  

まず配列ないのnumを全て出さないといけないので、each.doをする。　　
countを０に設定しておく　　
even?で条件に合うものをcountする

## even?対象の数値が偶数かどうかを判断するメソッド!!
