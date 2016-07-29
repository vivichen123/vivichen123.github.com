


//特殊字符：\ ^ $ . * + ? () [] {} |
//字面量创建
var a = /^\(abc\)/.test('abc');
console.log(a)

var reg1 = new RegExp("\\*","g");
reg1.test('*');

//RegExp对象的静态属性 
/*
$1...$9 如果它(们)存在，是匹配到的子串 
$_ 参见input 
$* 参见multiline 
$& 参见lastMatch 
$+ 参见lastParen 
$` 参见leftContext 
$'' 参见rightContext 

input 被匹配的串 
multiline 是否所有的表达式进行多行匹配(bool型) 
lastMatch  最后匹配的字符
lastParen 最后一个括号括起来的子串 
leftContext 最近一次匹配以左的子串 
rightContext 最近一次匹配以右的子串
*/

//实例属性
/*
global 是否在整个串中匹配(bool型) 
ignoreCase 匹配时是否忽略大小写(bool型) 
source 正则表达式模式 
lastIndex 最后一次匹配的索引 
multiline 是否进行多行匹配(bool型) 
*/

//方法
/*
compile 正则表达式比较 
exec 执行查找 
test 进行匹配 
*/


// . 匹配出换行符之外的任意字符
// 字符分类转义 
// \f \n \r \t \v
// \cA - \cZ 控制字符， Unicode转义字符 \u0000-\uFFFF 
// 十六进制字符转义 \x00 - \xFF 
// 字符分类转义
// \d 任意数字  \D任意非数字 \w 字母数字字符 \W非字母数字字符 \s 匹配空白字符 \S 匹配非空白字符
// \0      空字符("") 
// \b      退格符(BackSpace) 

// 原子：字符类 ［ABC］［^abc］
// 有三个字符不是原字符 \ ] -, 可以匹配非转义的－，但必须是［ 后的第一个字符
// \b ： 在字符分类外，匹配单词边界，在字符分类内，匹配退格控制字符
/[\\]/.test('\\')

/[\\]/.test('\\')

/[a-b]/.test('-') //false

/[a-]/.test('-') //true

/[a\]]/.test(']') //true

//分组
// （abc） 捕获分组  （？：） 非捕获分组  \1 \2 反向引用


/(abc)/.exec('abc')  //["abc", "abc"]
/(?:abc)/.exec('abc')  //["abc"]

/^(a+)-\1$/.test('a-a')  //true
/^(?:a+)-\1$/.test('a-a')  //false

/<([^>])+>[^<]*<\/\1>/.test('<a>')

/^<([^>])+>([^<]*<\/\1>)?$/.test('<a></a>')

// 量词
// ?, *, +, {n}, {n, m}, {n, }  后加？变成非贪婪匹配ßß、
//用贪婪量词进行匹配时，它首先会将整会字符串当成一个匹配，如果匹配的话就退出，如果不匹配，就截去最后一个字符进行匹配，如果不匹配，继续将最后一个字符截去进行匹配，直到有匹配为止。直到现在我们遇到的量词都是贪婪量词 
"<a><strong>".match(/^<(.*)>/);  //贪婪匹配 ["<a><strong>", "a><strong"]
//用惰性量词进行匹配时，它首先将第一个字符当成一个匹配，如果成功则退出，如果失败，则测试前两个字符，依些增加，直到遇到合适的匹配为止
"<a><strong>".match(/^<(.*?)>/);  //非贪婪匹配["<a>", "a"]
//支配量词，只尝试匹配整个字符串
//"<a><strong>".match(/^<(.*＋)>/)

//断言 ^ $ \b \B (?=abc) (?!abc)
/\babc\b/.test('abc') //true

/\Babc\B/.test('abc')

// 正向肯定断言
///abc(?=de)/.exec('abcdef')  //["abc"]
//// 正向否定断言
/abc(?!de)/.exec('abcdef')  //null

//正向前瞻  
var forward = /([a-z]+(?=\d))/i;  
//我们要匹配后面跟一个数字的单词，然后将单词返回，而不要返回数字  
var str1 = "abc every1 abc";  
console.log(forward.test(str1));//true  
console.log(RegExp.$1);//every  
console.log(forward.lastIndex);//使用前瞻的好处是,前瞻的内容(?=\d)并不会当成一次匹配，下次匹配仍从它开始 

//负向前瞻(?!)  
var negativeForward= /([a-z](?!\d))/;i  
//将匹配后面不包含数字的字母,并且不会返回(?!\d)中的内容  
var str2 = "abc1 one";  
console.log(negativeForward.test(str2));  
console.log(RegExp.$1);//one  



//创建正则表达式
//字面量 /zyz/i
//构造函数  new Regexp（’［’）
//字面量在加载是编译， 构造函数在运行时编译 eg: function foo(){/[/}  报错, function foo(){new RexExp('[')}  编译时不会报错

//正则表达式的实例属性
// global, ignoreCase, multiline
// lastIndex


//方法
//是否存在匹配
RegExp.prototype.test

var reg = /x/g ;
console.log(reg.lastIndex);  // 0

reg.test('_x_x');
console.log(reg.lastIndex);  // 2

reg.test('_x_x');
console.log(reg.lastIndex);  // 4

reg.test('_x_x');  //false


console.log(reg.lastIndex);  // 0

reg.exec('_x_x');  //["x"]
console.log(reg.lastIndex);  // 2

reg.exec('_x_x'); //["x"]
console.log(reg.lastIndex);  // 4

reg.exec('_x_x');  //null

RegExp.prototype.exec

//exec 的属性 
// 数组元素 0 － 匹配结果， 1-n 捕获的分组
var regex = /a(b+)/ ;

var result = regex.exec('_abbb_ab');
//result  ["abbb", "bbb"]
result.index //1
result.input //"_abbb_ab"

// 如果 regex = /a(b+)/g ，可以多次运行regex.exec('_abbb_ab')，如上面的例子，再次运行，得到结果  ［‘ab’， ‘a’］

String.prototype.match

var matchTest = /(\d)+/;
var result1 = "aa11bb22cc33".match(matchTest);
console.log(result1) //["11", "1", index: 2, input: "aa11bb22cc33"]
//result1: ["11", "1"]
result1.index  //2
result1.input  //"aa11bb22cc33"


var matchTest1 = /(\d)+/g;
var result2 = "aa11bb22cc33".match(matchTest1);

// result2 ["11", "22", "33"]
result2.index //undefined
result2.input //"aa11bb22cc33"

String.prototype.replace
//str.replace(search, replacement)
//search 字符串（只能匹配一次）， 正则表达式：可以用g匹配多次
//replacement 字符串或函数

// replace为字符串
// 特殊字符$
// $n 匹配分组， n必须至少为1
// $匹配的子字符串  $`（匹配项前的文本）  $& (完整的匹配项)  $' （匹配项后的文本）
// $$ 插入单个$ 字符

"who is vivi".replace(/^(\w+) is (\w+)$/g, "$2 is $1")
"who is vivi".replace(/^(?:\w+) is (?:\w+)$/g, "$2 is $1")

"axb cxd".replace(/x/g, "[$` ,$&, $']")  //"a[a ,x, b cxd]b c[axb c ,x, d]d"
"axb cxd".replace(/x/g, "[$` ,$&, $']")  //"a[a ,x, b cxd]b c[axb c ,x, d]d"

//当replacement为函数时
"axxb cxxxd".replace(/x/g, "[$` ,$&, $']")

"axxb cxxxd".replace(/(x+)/g, function(completeMatch, g1, offset, inputStr){
	console.log(completeMatch, g1, offset, inputStr);
});

//VM101:2 xx xx 1 axxb cxxxd
//VM101:2 xxx xxx 6 axxb cxxxd

function insertName(str, name){
	return str.replace(/NAME/g, function(completeMatch, offset){
		if(offset === 0 || (offset > 0 && str[offset-1] !== '"')){
			return name;
		}else{
			return completeMatch;
		}
	});
}

insertName('NAME "NAME"', 'Jane');  // 'Jane "NAME"'

function insertName1(str, name){
	var tempPrefix = ' ';
	str = tempPrefix + str;
	str = str.replace(/([^"]NAME)/g, function(completeMatch, prefix){
		return prefix + name;
	});
	return str.slice(tempPrefix.length);
}

//标示／g 的一些问题
// 带有g的正则表达式不能内联
// 无限循环 while(/a/g.test('babaa')) count++;

var regex11 = /a/g;
while(regex11.test('babaa')) count++;

// 带有／g的正则表达式作为参数 ，设置lastIndex 为0， 这种正则表达式不能同时用于多个迭代。
var REGEXP = /"(.*?)"/g;
function extractQuated(str){
	var match;
	var result = [];
	REGEXP.lastIndex = 0;
	while((match = REGEXP.exec(str)) != null){
		result.push(match[1]);
	}
	return result;
}

var regTest = /a(b+(c*))/g;
var string = "abbababbbbbc";

//当匹配失败（后面没有匹配），或lastIndex值大于字符串长度时，再执行exec等方法会将lastIndex设为0(开始位置) 
while(regTest.lastIndex<string.length){
	console.log(regTest.lastIndex);
	console.log(regTest.exec("abbababbbbbc"));
	console.log("First map:" + RegExp.$1 + 
		"\n Second map: " + RegExp.$2 + 
		"\n lastMatch: " + RegExp.lastMatch + 
		"\n lastParen: " + RegExp.lastParen +
		"\n leftContext: " + RegExp.leftContext +
		"\n rightContext: " + RegExp.rightContext)
}

console.log(extractQuated('"hello", "world"'))

"aaab".search("^a+b+$")  //0
"laaab".search("^a+b+$")  //-1
"laaab".search("a+b+$")  //1


//匹配一切
new RegExp("")
/(?:)/
//
var never = /.^/
