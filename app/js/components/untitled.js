!function(a){"loading"!=document.readyState?a():document.addEventListener("DOMContentLoaded",a)}(function(){var a=document.querySelector(".gpbanner");a&&null===localStorage.getItem("gstore")&&(a.style.display="block",document.querySelector(".gpbanner .close").addEventListener("click",function(b){a.parentNode.removeChild(a),localStorage.setItem("gstore","true")})),[].forEach.call(document.querySelectorAll(".social-list .details span"),function(a){a.innerText=a.getAttribute("data-val")}),[].forEach.call(document.querySelectorAll(".youtube-trigger"),function(a){var b=document.getElementById(a.getAttribute("data-dialog-id")),c=new YoutubeDialog(b);a.addEventListener("click",function(a){a.preventDefault(),a.stopPropagation(),c.show()})}),[].forEach.call(document.querySelectorAll(".wistia-trigger"),

function(a){
	var b = document.getElementById(a.getAttribute("data-dialog-id")),
	c = new WistiaDialog(b);
	a.addEventListener("click",function(a){
		a.preventDefault(),
		a.stopPropagation(),
		c.show()})});
		var b = document.querySelector(".main-features"),
		c = b.querySelector(".screen"),
		d = [].slice.call(c.querySelectorAll(".slide")),
		e = [].slice.call(b.querySelectorAll(".feature-list a"));
		e.forEach(function(a,b){a.addEventListener("mouseenter",function(b){
			var c = a.getAttribute("data-img"),
			d.forEach(function(a,b){a.classList.remove("active")}),
			e.forEach(function(a,b) {
				a.classList.remove("active")
			});
			var f;(f=function(){
				var a = c.querySelector(".active"), b = a.nextElementSibling;
				if(e.forEach(function(a,b) {
						a.classList.remove("active")}), b&&"img"==b.tagName.toLowerCase()||(b=a.parentNode.firstElementChild),
						"img"==b.tagName.toLowerCase()){var d=b.getAttribute("id");
						
				}
			})()
			
	})
});