function hoverTitleOption() {
	var length = arguments.length;
	for (var i = 0; i < length; i++) {
		if (i + 1 == length) {
			arguments[i].style.top = "0px";
		} else {
			arguments[i].style.display = "block";
		}
	}
}

function hoverNotTitleOption() {
	var length = arguments.length;
	for (var i = 0; i < length; i++) {
		if (i + 1 == length) {
			arguments[i].style.top = "-4px";
		} else {
			arguments[i].style.display = "none";
		}
	}
}

function languageHover(root) {
	console.log("hover")
	root.style.height = "150px";
}

function languageHoverOut(root) {
	console.log("hoverOut")
	root.style.height = "90px";
}

// 鼠标移进去
function videoPlayback(img, imgPlayBtn, imgPlayLogo, video) {
	console.log("hover了")
	video.play();
	imgPlayBtn.style.display = "none";
	imgPlayLogo.style.display = "none";
	img.style.display = "none";
}

//鼠标离开
function videoStopped(video, imgPlayBtn, imgPlayLogo, img) {
	console.log("hover移出去了")
	video.pause();
	imgPlayBtn.style.display = "inline";
	imgPlayLogo.style.display = "inline";
	img.style.display = "inline";
}


function setScrollBackgroundColorChange(label,img) {
	var scrollFunc = function(e) {
		e = e || window.event;
		if (e.wheelDelta) { //第一步：先判断浏览器IE，谷歌滑轮事件 
			if (document.documentElement.scrollTop >= 500) {
				label.style.background = "rgba(0, 0, 0, 1)";
				img.style.display = "inline";
			} else {
				label.style.background = "rgba(0, 0, 0, 0.26)";
				img.style.display = "none";
			}
		} else if (e.detail) { //Firefox滑轮事件 
			if (document.documentElement.scrollTop >= 500) {
				label.style.background = "rgba(0, 0, 0, 1)";
				img.style.display = "inline";
			} else {
				label.style.background = "rgba(0, 0, 0, 0.26)";
				img.style.display = "none";
			}
		}
	}
	//给页面绑定滑轮滚动事件 
	if (document.addEventListener) { //firefox 
		document.addEventListener('DOMMouseScroll', scrollFunc, true);
	}
	//滚动滑轮触发scrollFunc方法 //ie 谷歌 
	window.onmousewheel = document.onmousewheel = scrollFunc;
}

//   页面动画滚动到顶部.
function pageScroll(label,img) {
	//把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
	window.scrollBy(0, -100);
	//延时递归调用，模拟滚动向上效果
	scrolldelay = setTimeout('pageScroll()', 10);
	//获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
	var sTop = document.documentElement.scrollTop + document.body.scrollTop;
	//判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
	if (sTop == 0) clearTimeout(scrolldelay);
	if(label!=null){
		label.style.background = "rgba(0, 0, 0, 0.26)";
	}
	if(img!=null){
		img.style.display = "none";
	}
}


function setbackTopHiden(img) {
	var scrollFunc = function(e) {
		e = e || window.event;
		console.log('开始滚动');
		if (e.wheelDelta) { //第一步：先判断浏览器IE，谷歌滑轮事件 
			if (document.documentElement.scrollTop >= 500) {
				img.style.display = "inline";
			} else {
				img.style.display = "none";
			}
		} else if (e.detail) { //Firefox滑轮事件 
			if (document.documentElement.scrollTop >= 500) {
				img.style.display = "inline";
			} else {
				img.style.display = "none";
			}
		}
	}
	//给页面绑定滑轮滚动事件 
	if (document.addEventListener) { //firefox 
		document.addEventListener('DOMMouseScroll', scrollFunc, true);
	}
	//滚动滑轮触发scrollFunc方法 //ie 谷歌 
	window.onmousewheel = document.onmousewheel = scrollFunc;
}
