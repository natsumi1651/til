# sliceの応用 
## slice.抜き出す対象物(どこを起点とするか, いくつ分抜き出すか)


対象の文字列から末尾にある2文字を取得すること  
取得した2文字を3回繰り返して出力すること  

def extra_end(str) 
  right2 = str.slice(- 2, 2) ここでは-2というのは後ろから二番目を指す、2は二つ分を刺している。　これでhelloなら　loだけが取り出される。
  puts right2 * 3 
end  

extra_end('Hello') → 'lololo'  
extra_end('ab') → 'ababab'  
extra_end('Hi') → 'HiHiHi'  
