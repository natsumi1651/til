##javascriptについて　入門
Node.jsによって使える幅が増えている。Googleマップ、PayPal、ネットフリックス。
テンプレートリテラル：shigt+@。shift+7だと反映されないので注意。　　
// コメントアウト　
Console.logの内容をテキストで改行せず1行で出したい時。
Console.logの代わりにprocess.stdout.write：プロセススタンダードライトを使う。
process.stdin.setEncoding('utf8');
process.stdout.write("<h1>hello world</h1>");
process.stdout.write("<b>こんにちは</b>");
↓
<h1>hello world<h1><b>こんにちは</b>



しかしこれだとブラウザHTMLでは2行のままなので、
Process.stdout.write(-----¥n(バックスラッシュn、コマンドと￥で出る。))
process.stdout.write("<b>こんにちは</b>¥n");
