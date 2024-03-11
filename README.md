# ColorConsole
red, green, yellow, blue, magenta, cyan, white のうちどれかを指定すると、consoleの文字色が指定した色になります。  
  
## 使用方法
使用するJSファイル内で、　パッケージを読み込みます。  
```const { setColor, colorStyle } = require('./ColorConsole.js');```  
読み込めたら、以下のようにして使用できます。  
```console.log(setColor("red", "This is test text."));```  
> [!TIP]
> 例では文字列として色を指定していますが、`colorStyle.red`などでも指定することができます。

> [!NOTE]
> Node.js環境ではない場合は、  
> ```import { setColor, colorStyle } from './ColorConsole.js';```  
> で読み込むことができます。

## エラーの解決
**The output text must be a string.**  
このエラーは、コンソールに出力するテキストが文字列でないことを意味します。  
2つめの引数は、文字列である必要があります。  
  
**An unrecognized color has been specified.**  
このエラーは、上記以外の色を指定した場合に発生します。  
red, green, yellow, blue, magenta, cyan, white以外に指定することはできないため、ご注意ください。  
  
**その他バクなどの問い合わせは(https://twitter.com/tacopic007)[https://twitter.com/tacopic007]のDMまでお願いします！**
