// e为最外层提供滚动条定位的元素的选择器（position = 'relative'，定高，overflow hidden）；
// 中间层为一个dom用来滚动,包裹滚动槽和滚动滑块
//最内层必须为一个dom元素包裹；
module.exports = function(e, w) {
  // e - Element
  // w - scrollbar width
  if (w == undefined) {
    this.sbw = 5;
  } else {
    this.sbw = w;
  }


  var _this = this;
  this.element = document.querySelector(e);
  this.height = this.element.style.height;
  this.maxHeight = this.element.style.maxHeight;
  this.element.style.position = 'relative';
  this.orgPar = this.element.children[0];
  this.dirtion = 'top';
  this.setOption = function ({dirtion}){
    _this.dirtion = dirtion;
  }
  this.init = function() {
    this.orgPar.style.cssText = `height:100%;overflow-y:auto;overflow-x:hidden;padding-right: ${
      this.sbw + 20
    }px;width:100%;box-sizing:content-box;-moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none; `;
    this.scrollBarHolder = document.createElement("div");//滑动槽
    this.scrollBar = document.createElement("div");//滑块
    this.scrollBarHolder.className = "scrollbot-scrollbar-holder";
    this.showScrollBar = false;
    this.scrollBarHolder.style.cssText = `position:absolute;top:0;right:0px;height:100%;background:#222;width:${this.sbw}px;display:${
      this.showScrollBar ? "block" : "none"
    }`;
    this.scrollBar.className = "scrollbot-scrollbar";
    this.scrollBar.style.cssText = `position:absolute;top:0;right:0;height:20%;background:#666;width:${
      this.sbw
    }px;border-radius:2px`;

    this.scrollBarHolder.appendChild(this.scrollBar);
    this.orgPar.appendChild(this.scrollBarHolder);



    this.scrollBarHolder.onmousedown=function(e){
        let innerHeight = _this.orgPar.children[0].clientHeight, outerHeight = _this.orgPar.clientHeight;
        let topResult = e.offsetY / outerHeight *100;
        _this.orgPar.scrollTop = topResult/(100)*(innerHeight-outerHeight)
    }


    this.scrollBar.onmousedown=function(e){
        e.stopPropagation();
        let innerHeight = _this.orgPar.children[0].clientHeight, outerHeight = _this.orgPar.clientHeight;
        let scrollBarHeight = _this.scrollBar.clientHeight,
        orgParScrollTop = _this.orgPar.scrollTop;
        let y1=e.pageY;
        document.onmousemove=function(e){
            let y2=e.pageY;
            let eltaY=y2-y1;
            let percent = eltaY/(outerHeight-scrollBarHeight);
            _this.orgPar.scrollTop = orgParScrollTop + percent*(innerHeight-outerHeight)
        }
    }
    document.onmouseup=function(e){
        document.onmousemove = null;
    }
  };


  this.orgPar.addEventListener("scroll", function(e) {
    if(!_this.showScrollBar) return;
    let innerHeight = _this.orgPar.children[0].clientHeight, outerHeight = _this.orgPar.clientHeight;
    let scrollBarHeight = _this.scrollBar.clientHeight;
    let percent = _this.orgPar.scrollTop/(innerHeight-outerHeight);//滚动滑块位置百分比
    _this.scrollBar.style.top = percent*100*(outerHeight-scrollBarHeight)/(outerHeight) + "%";//滚动滑块位置

  });

  this.setStyle = function ({block, groove}) {
    for (const key in block) {
      if (block.hasOwnProperty(key) && key !== 'height') {
        _this.scrollBar.style[key] = block[key]
      }
    }
    for (const key in groove) {
      if (groove.hasOwnProperty(key) && key !== 'height') {
        _this.scrollBarHolder.style[key] = groove[key]
      }
    }
  }

  this.refresh = function() {
    if(!_this.height && _this.maxHeight) {
      _this.element.style.height = ''
      _this.element.style.height = _this.element.clientHeight > _this.maxHeight  ? _this.maxHeight + 'px' : _this.element.clientHeight + 'px';
    }
    let innerHeight = _this.orgPar.children[0].clientHeight, outerHeight = _this.orgPar.clientHeight;
    if(innerHeight <= outerHeight){
      _this.showScrollBar = false;
      _this.scrollBarHolder.style.display = `${_this.showScrollBar ? "block" : "none"}`;
      return;
    }
    _this.showScrollBar = true;
    _this.scrollBarHolder.style.display = `${_this.showScrollBar ? "block" : "none"}`;
    let scrollBarHeight = outerHeight/(innerHeight);
    _this.scrollBar.style.height = scrollBarHeight *100 + '%';
    _this.orgPar.scrollTop = _this.dirtion === 'bottom' ? 9999999999 : 0 ;//滚动位置
    // _this.scrollBar.style.top = 0;//滑块
    // _this.scrollBarHolder.style.top = 0;//滑动槽位置

  };

    _this.init();
    _this.refresh()

};
