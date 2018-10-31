# simulate-scrollbar
simulate beautify scrollbar
# description
A Simulate the beautification of the scroll bar plug-in

# install
npm install simulate-scrollbar
# usage
```
<div style="overflow: hidden; position: relative; height: 350px; width:300px" id="el">
    <div>
      <ul>
        <li>sgfdgdsfg</li>
        <li>sgfdgdsfg</li>
        <li>sgfdgdsfg</li>
        <li>sgfdgdsfg</li>
        <li>sgfdgdsfg</li>
        <li>sgfdgdsfg</li>
        <li>sgfdgdsfg</li>
        <li>sgfdgdsfg</li>
        <li>sgfdgdsfg</li>
        <li>sgfdgdsfg</li>
        <li>sgfdgdsfg</li>
        <li>sgfdgdsfg</li>
        <li>sgfdgdsfg</li>
        <li>sgfdgdsfg</li>
        <li>sgfdgdsfg</li>
        <li>sgfdgdsfg</li>
        <li>sgfdgdsfg</li>
        <li>sgfdgdsfg</li>
        <li>sgfdgdsfg</li>
        <li>sgfdgdsfg</li>
        <li>sgfdgdsfg</li>
        <li>sgfdgdsfg</li>
        <li>sgfdgdsfg</li>
        <li>sgfdgdsfg</li>
        <li>sgfdgdsfg</li>
      </ul>
    </div>
  </div>
const scrollbar = require('simulate-scrollbar')

let scroll = new scrollbar('#el', 10);//通过第一个参数选取dom，第二个参数设置滚动条宽度

 ```
  ## setStyle
// 设置滚动条样式（样式不支持设置高度）
scroll.setStyle({
  block: {
    backgroundColor: '#222',
    borderRadius: '10px',
  },//滑块样式
  groove: {
    backgroundColor: '#aaa',
    borderRadius: '10px',
  }//滚动槽样式
})

 ```
 ## refresh
 if the length of the contents is changed:
 ```
 scroll.refresh()
 ```
