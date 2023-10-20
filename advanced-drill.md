配列に格納された3つの数値の合計を出力する

ただし、同じ数値が2つ以上含まれている場合、その数値は合計する要素に含めない

lone_sum([1, 2, 3]) → 6

lone_sum([3, 2, 3]) → 2

lone_sum([3, 3, 3]) → 0



def lone_sum(ary)

    # 配列から、重複しない要素のみ取り出す  

    uniq_nums = []--------------lone_sumの[]のこと？

    ary.each do |num|
      count = 0       ----------ここまででまずaryの中の数字を取り出す?

          ary.each do |i|

              if num == i
 
                count += 1

              end---------------ここまででダブりの数字があった場合の対応を書く?aryに入っている数字をiに変換？もし、numが3でiが3ならカウントは1となる式？

          end

          if count < 2

                uniq_nums << num

           end------------------ここまででダブりの数字が上記までのメソッドで二つもない（一つだけ）の場合の対応を書く?

    end


    # uniq_nums配列内の合計

    sum = 0

    uniq_nums.each do |unique_num|

      sum += unique_num

    end

    puts sum

end
