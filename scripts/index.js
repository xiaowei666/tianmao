window.onload=function(){
// ================隐藏================
	$('.add').hover(function(){
		$(this).find('.hide').show();
	},function(){
		$(this).find('.hide').hide();
	});
// ================轮播===============
	$('.lunbo').each(function(i){
		$(this).data('index',i);
	});
	var index = 1;
	var lunbo = function(){
		$('.lunbo').hide();
		var el = $('.lunbo')[index];
		$(el).show();
		$('.cut-list').removeClass('red');
    	$($('.cut-list')[index]).addClass('red');
    	$($('.contain1-all')[0]).css({
			background:function(){
					return arr1[index];
				}
		});
		index += 1;
		if( index === $('.lunbo').length ){
			index = 0;
		}
	};
	$('.cut-list').each(function(i){
		$(this).data('index',i);
	});
	$('.cut-list').hover(function(){
		clearInterval(timerId);
		$('.cut-list').removeClass('red');
		$(this).addClass('red');
		var i = $(this).data('index');
		$('.lunbo').hide();
		$( $('.lunbo')[i] ).show();
		$($('.contain1-all')[0]).css({
			background:function(){
					return arr1[i];
				}
		});
		index = i;
	},function(){
		clearInterval(timerId);
		timerId = setInterval(lunbo,1000);
	});
	var timerId = setInterval(lunbo,1000);
// ================精选==============
	var arr=['#E9E9E9','#FFBFE1','#FFF701','#015595','#FFC7D8','#2D6BFC','#FFA800','#DBCBBB','#A115FA','#2490D9','#FFC6D5','#29A6FF','#E4E2E3','#4086FF','#30C4FF','#D8917F'];
	var arr1 = ['#E9E9E9','#DCDCDC','#68CDAD','#EAEAEA','#B90AF9','#607CFF'];
	$('li.jingxuan').each(function(i){
		$(this).data('index',i);
	});
	$('li.jingxuan').hover(function(){
		var i = $(this).data('index');
		$('.hid-jing').stop();
		$(this).find('.hid-jing').show();
		if(i == 0){	
			$('.cut').show();
			clearInterval(timerId);
			$($('.contain1-all')[0]).css({
				background:function(){
						return arr1[$('.cut-list.red').data('index')];
					}
			});
			timerId = setInterval(lunbo,1000);
		}else{
			clearInterval(timerId);
			$($('.cut')[0]).hide();
			$($('.contain1-all')[0]).css({
				background:function(){
						return arr[i];
					}
			});
		}
		$('.right-jpg').hide();
		$($('.right-jpg')[i]).show();
		$('.z-items').hide();
		$($('.z-items')[i]).show();	
	},function(){
		$('.hid-jing').stop();
		$(this).find('.hid-jing').hide();
		if($(this).data('index')==0){
			clearInterval(timerId);
			timerId = setInterval(lunbo,1000);
		}
	});
// ====================小轮播===========================
	var ind = 1;
	var fn1 = function(){
		$('.chuangkou1').css({
			position:'absolute',
			left:function(){
				return -90*ind
			}
		});
		ind += 1;
		if( ind === $('.weiLun').length ){
			ind = 0;
		}
	};
	var timerId1 = setInterval(fn1,2000);
	$('.weiLun').hover(function(){
		clearInterval(timerId1);
	},function(){
		timerId1 = setInterval(fn1,2000);
	});
	$($('.cut-left1')).click(function(){
		var old = $('.chuangkou1').position().left;
		$('.chuangkou1').css({
			position:'absolute',
			left:function(){
				if(old === 0){
					return -180;
				}
				return old + 90;
			}
		});
	});
	$($('.cut-right1')).click(function(){
		var old = $('.chuangkou1').position().left;
		$('.chuangkou1').css({
			position:'absolute',
			left:function(){
				if(old === -180){
					return 0;
				}
				return old - 90;
			}
		});
	});
	var ind2 = 1;
	var fn2 = function(){
		$('.chuangkou2').css({
			position:'absolute',
			left:function(){
				return -90*ind2
			}
		});
		ind2 += 1;
		if( ind2 === $('.weiLun2').length ){
			ind2 = 0;
		}
	};
	var timerId2 = setInterval(fn2,2000);
	$('.weiLun2').hover(function(){
		clearInterval(timerId2);
	},function(){
		timerId2 = setInterval(fn2,2000);
	});
	$($('.cut-left2')).click(function(){
		var old = $('.chuangkou2').position().left;
		$('.chuangkou2').css({
			position:'absolute',
			left:function(){
				if(old === 0){
					return -180;
				}
				return old + 90;
			}
		});
	});
	$($('.cut-right2')).click(function(){
		var old = $('.chuangkou2').position().left;
		$('.chuangkou2').css({
			position:'absolute',
			left:function(){
				if(old === -180){
					return 0;
				}
				return old - 90;
			}
		});
	});
	var ind3 = 1;
	var fn3 = function(){
		$('.chuangkou3').css({
			position:'absolute',
			left:function(){
				return -90*ind3
			}
		});
		ind3 += 1;
		if( ind3 === $('.weiLun3').length ){
			ind3 = 0;
		}
	};
	var timerId3 = setInterval(fn3,2000);
	$('.weiLun3').hover(function(){
		clearInterval(timerId3);
	},function(){
		timerId3 = setInterval(fn3,2000);
	});
	$($('.cut-left3')).click(function(){
		var old = $('.chuangkou3').position().left;
		$('.chuangkou3').css({
			position:'absolute',
			left:function(){
				if(old === 0){
					return -180;
				}
				return old + 90;
			}
		});
	});
	$($('.cut-right3')).click(function(){
		var old = $('.chuangkou3').position().left;
		$('.chuangkou3').css({
			position:'absolute',
			left:function(){
				if(old === -180){
					return 0;
				}
				return old - 90;
			}
		});
	});
	var ind4 = 1;
	var fn4 = function(){
		$('.chuangkou4').css({
			position:'absolute',
			left:function(){
				return -90*ind4
			}
		});
		ind4 += 1;
		if( ind4 === $('.weiLun4').length ){
			ind4 = 0;
		}
	};
	var timerId4 = setInterval(fn4,2000);
	$('.weiLun4').hover(function(){
		clearInterval(timerId4);
	},function(){
		timerId4 = setInterval(fn4,2000);
	});
	$($('.cut-left4')).click(function(){
		var old = $('.chuangkou4').position().left;
		$('.chuangkou4').css({
			position:'absolute',
			left:function(){
				if(old === 0){
					return -180;
				}
				return old + 90;
			}
		});
	});
	$($('.cut-right4')).click(function(){
		var old = $('.chuangkou4').position().left;
		$('.chuangkou4').css({
			position:'absolute',
			left:function(){
				if(old === -180){
					return 0;
				}
				return old - 90;
			}
		});
	});
	var ind5 = 1;
	var fn5 = function(){
		$('.chuangkou5').css({
			position:'absolute',
			left:function(){
				return -90*ind5
			}
		});
		ind5 += 1;
		if( ind5 === $('.weiLun5').length ){
			ind5 = 0;
		}
	};
	var timerId5 = setInterval(fn5,2000);
	$('.weiLun5').hover(function(){
		clearInterval(timerId5);
	},function(){
		timerId5 = setInterval(fn5,2000);
	});
	$($('.cut-left5')).click(function(){
		var old = $('.chuangkou5').position().left;
		$('.chuangkou5').css({
			position:'absolute',
			left:function(){
				if(old === 0){
					return -180;
				}
				return old + 90;
			}
		});
	});
	$($('.cut-right5')).click(function(){
		var old = $('.chuangkou5').position().left;
		$('.chuangkou5').css({
			position:'absolute',
			left:function(){
				if(old === -180){
					return 0;
				}
				return old - 90;
			}
		});
	});
	var ind6 = 1;
	var fn6 = function(){
		$('.chuangkou6').css({
			position:'absolute',
			left:function(){
				return -90*ind6
			}
		});
		ind6 += 1;
		if( ind6 === $('.weiLun6').length ){
			ind6 = 0;
		}
	};
	var timerId6 = setInterval(fn6,2000);
	$('.weiLun6').hover(function(){
		clearInterval(timerId6);
	},function(){
		timerId6 = setInterval(fn6,2000);
	});
	$($('.cut-left6')).click(function(){
		var old = $('.chuangkou6').position().left;
		$('.chuangkou6').css({
			position:'absolute',
			left:function(){
				if(old === 0){
					return -180;
				}
				return old + 90;
			}
		});
	});
	$($('.cut-right6')).click(function(){
		var old = $('.chuangkou6').position().left;
		$('.chuangkou6').css({
			position:'absolute',
			left:function(){
				if(old === -180){
					return 0;
				}
				return old - 90;
			}
		});
	});
// ==================图片轻移================
	$('.smallmoveL').hover(function(){
		$(this).css({
			position:'relative',
			overflow:'hidden'
		});
		$(this).stop();
		$(this).animate({left:-5},200);
	},function(){
		$(this).stop();
		$(this).animate({left:0},200);
	});
// ===============返回顶部===================
	$($('.right-nav-top')[0]).click(function(){
		$({top: $(window).scrollTop()}).animate(
			{top: 0},
			{
				duration: 700,
				step: function(){
					$(window).scrollTop(this.top);
				}
			}
		);
	});
// ===================左fixed====================
	var fixedHtml = ['女装','美护','男装','箱包','户外','数码','家电','母婴','食品','图书','家纺','超市'];
	var iconfont = ['&#x3459;','&#x345c;','&#x346c;','&#x3458;','&#x345a;','&#x3457;','&#x3454;','&#x3456;','&#x3455;','&#x3461;','&#x345e;','&#xf0171;'];
	$('.canHover').each(function(j){
		$(this).data('index',j);
	});
	$('.canHover').hover(function(){
		$(this).stop();
		$(this).css({
			background:'#980000',
			color:'white'
		});
		$(this).html(function(){
			return fixedHtml[$(this).data('index')];
		});
	},function(){
		$(this).stop();
		var j = $(this).data('index'),
			top = $($('.louCeng')[j]).offset().top,
			height = $($('.louCeng')[j]).height();
		if($(window).scrollTop() < top-100 || $(window).scrollTop() > top+height-100){
			$(this).css({
				background:'none',
				color:'#666'
			});
			$(this).html(function(){
				return '<i class="iconfont ">'+iconfont[j]+'</i>';
			});
		}
	});
  	$('.canHover').click(function(){
    	var i = $(this).data('index');
    	var newtop = $( $('.louCeng')[i] ).offset().top - 71;
    	$({top: $(window).scrollTop()}).animate(
      		{top: newtop},
      		{
        		duration: 500,
      			step: function() {
      	  				$(window).scrollTop(this.top);
      				}
      		}
    	);
  	});	
// ====================表头========================
	var ti;
	$(window).scroll(function(){
		if($(window).scrollTop() > 900){
	  		clearTimeout(ti);
	  		ti = setTimeout(function(){
				$('.tmall-nav').show();
				$('.iconfont-list').show();
		  	},500);
		}else{
		  clearTimeout(ti);
		  $('.tmall-nav').hide();
		  $('.iconfont-list').hide();
		}
		var i = $(this).data('index');
  		$('.louCeng').each(function(i){
  			var top = $($('.louCeng')[i]).offset().top;
  			var height = $($('.louCeng')[i]).height();
				if($(window).scrollTop() > top-100 && $(window).scrollTop() < top+height-100){	
		  			$($('.canHover')[i]).css({
		  				background:'#980000',
		  				color:'white'
		  			});
		  			$($('.canHover')[i]).html(function(){
						return fixedHtml[$($('.canHover')[i]).data('index')];
					});
		  		}else{
		  			$($('.canHover')[i]).css({
		  				background:'none',
		  				color:'#666'
		  			});
		  			if( $($('.canHover')[i]).html() === fixedHtml[i]){
		  				$($('.canHover')[i]).html(function(){
							return '<i class="iconfont ">'+iconfont[i]+'</i>';
						});
		  			}
		  		}
  		});
	});
// =============右fixed========================
	$('.rigHover').hover(function(){
    	$('.rigHover').stop();
    	if($(this).find('i').hasClass('spail')){
    		$(this).find('i').css({color:'white'});
    	}
    	$(this).css({background:'#6F0000'});
    	$(this).find('span').show(0,function(){
     		$(this).animate({right:42},200);
    	});
    	$(this).find('.rignavHid').show(0,function(){
     		$(this).animate({right:46},200);
    	});
  	},function(){
    	$('.rigHover').stop();
    	if($(this).find('i').hasClass('spail')){
    		$(this).find('i').css({color:'red'});
    	}
    	$(this).css({background:'rgba(0,0,0,.8)'});
    	$(this).find('span').css({right:20}).hide(0);
    	$(this).find('.rignavHid').css({right:24}).hide(0);
  	});
// ===============选项卡=====================
	$('.zhongtop-left li').each(function(i){
		$(this).data('index',i);
	});
	$('.zhongtop-left li').click(function(){
		var i = $(this).data('index');
		$('.title2-text').css({
			borderBottom:'none',
  			color:'#797979',
  			fontWeight:'normal'
		});
		$($('.title2-text')[i]).css({
			borderBottom:'2px solid black',
  			color:'black',
  			fontWeight:700
		});
		$('.list-img').removeClass('listImg');
		$($('.list-img')[i]).addClass('listImg');
	});
	$('.zhong-jpg').each(function(i){
		$(this).data('index',i);
	});
	$('.zhong-jpg').hover(function(){
		var i = $(this).data('index');
		$($('.zhong-jpg i')[i]).show();
	},function(){
		$('.zhong-jpg i').hide();
	});
	$('.zhongtop-right .huanYi').click(function(){
		var allImg = $('.contain2-list').find('.listImg li img');
		var arr = [];
		$(allImg).each(function(i){
			arr.push($($(allImg)[i]).attr('src'));
		});
		var arr2=[],xiabiao,dict = {};
		while(arr2.length !== 24){
			xiabiao = Math.floor( Math.random()*24 );
			if(!dict[xiabiao]){
				arr2.push( arr[xiabiao] );
				dict[ xiabiao ] = true;
			}
		}
		$(allImg).each(function(i){
			$($(allImg)[i]).attr('src',arr2[i]);
		});
	});
};