/**
 * Project name(项目名称)：JS_do_while
 * File name(文件名): test2
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/2
 * Time(创建时间)： 20:56
 * Version(版本): 1.0
 * Description(描述)： 无
 */

document.write("<br>")

var i = 1;
var sum = 0;
do
{
    sum += i;
    i++;
}
while (i <= 100);
document.write("1 + 2 + 3 + ... + 98 + 99 + 100 = " + sum)