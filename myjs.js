
	$(document).ready(function()
	{
		
		var _index=0;
		var timer=null;
	//top导航栏
		$(".site-header .nav-top").hover(function(){
			$(this).find(".nav-top2").slideDown(1);
		},function(){
			$(this).find(".nav-top2").slideUp(1);
		});

	//左侧二级导航栏
		$("#flash #leftside-ul .leftside-li").hover(function(){
			_index=$(this).index();
			$(this).find(".leftchild-div-all").slideDown(1);
		},function(){
			$(this).find(".leftchild-div-all").slideUp(1);
		});

	/*轮播图*/
		$("ul.button li").hover(function()
		{
			clearInterval(timer);
			 _index=$(this).index();
			$(this).addClass("hover").siblings("li").removeClass("hover");
			$(".scroll").animate({top:-(_index*460)},10);
		},function(){autoplay()});

		function autoplay()
		{
			timer=setInterval(function(){
			_index++;
			if(_index>5)
				{
					_index=0;
				}
				$("ul.button li").eq(_index).addClass("hover").siblings("li").removeClass("hover");
				$(".scroll").animate({top:-(_index*460)},10);
				
			},3000);
		};
		autoplay();
	});
