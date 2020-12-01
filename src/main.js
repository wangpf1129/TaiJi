const html = document.querySelector('#html')
const style = document.querySelector('#style')

let string = `
/* 我是wangpf，
* 一个前端小白
* 接下来我写一个八卦图，注意看好咯！
* 首先我们需要一个div
*/
#div1{
  border: 1px solid red;
  width: 200px;
  height: 200px;
}
/* 接下来我要把div变成一个圆圈
*/
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,.5);
  border: none;
}
/*  八卦太极是阴阳两级
*   乃是一黑一白
*/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%,
   rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 
   100%);
}
/*  阴阳两球乃是魔珠和灵丸所创造 */
#div1::before {
  width: 100px;
  height: 100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background-color: #000;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, 
  rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1)
   100%);
}
#div1::after {
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background-color: #fff;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%,
  rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1)
   100%);

}
/* 大功完成， 你瞧瞧像不像呢！*/


`
let newString = ''

let n = 0

let step = () => {
  setTimeout(() => {
    if (string[n] === '\n') {
      // 如果有回车，就把回车给转换了，不照搬
      newString += '</br>'
    } else if (string[n] === ' ') {
      // 如果有空字符， 就转换为 空格
      newString += '&nbsp;'
    } else {
      // 如果没回车，就照搬里面的字符串
      newString += string[n]
    }
    html.innerHTML = newString
    //为了不影响样式， 所以字符串里面不能有</br>、&nbsp;， 
    style.innerHTML = string.substring(0, n)
    window.scrollTo(0, 99999)
    html.scrollTo(0, 99999)
    if (n < string.length - 1) {
      n += 1
      step()
    }
  }, 10)
}
step()