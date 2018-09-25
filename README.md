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

let scroll = new scrollbar('#el', 10);

 ```
 ## refresh
 if the length of the contents is changed:
 ```
 scroll.refresh()
 ```
