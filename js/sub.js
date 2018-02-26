$(function(){
	$(window).htmlWidth(640);
	
	if($('#nav').length>0){
		$('#content').css('height','calc(100% - 1.15rem)');
	}
	if($('#indexTop').length>0 || $('#subTop').length>0){
		$('#content').css('padding-top','0.9rem');
	}
	if($('.carBox').length>0){
		$('#content').css('height','calc(100% - 0.86rem)');
	}

	$('.layerBg').click(function(e){
		if($(e.target).closest('.con').length == 0){
			$(this).removeClass('show');
		}
	})
	
	$('.hint_con').find('.hint_con_close').click(function(e){
		e.preventDefault();
		$('.layerBg').removeClass('show');
	})
	
	$('.carBox .car_bt').click(function(e){
		$('#carList').addClass('show');
	})
	
	$('.car_list_con dl').each(function(){
		var num = $(this).find('.car_list_num input');
		var add = $(this).find('.car_list_num a.add_bt');
		var reduce = $(this).find('.car_list_num a.reduce_bt');
		add.click(function(e){
			e.preventDefault();
			var val = parseInt(num.val());
			val+=1;
			if(val>0){
				reduce.removeClass('noclick');
			}
			num.val(val);
		})
		reduce.click(function(e){
			e.preventDefault();
			var val = parseInt(num.val());
			if(!$(this).hasClass('noclick')){
				if(val>0){
					val-=1;
					if(val==0){
						$(this).addClass('noclick');
					}
					num.val(val);
				}
			}
		})
		$(this).swipeleft(function(){
			$(this).addClass('active');
		})
		$(this).swiperight(function(){
			$(this).removeClass('active');
		})
	})
	
	$('.car_del').click(function(e){
		e.preventDefault();
		$('#car_del_hint').addClass('show');
		$('#carList').removeClass('show');
	})
	
	$('.numBox').each(function(){
		var input_val = $(this).find('li.inputTxt input');
		$(this).find('li.left a').click(function(e){
			e.preventDefault();
			var val = parseInt(input_val.val());
			input_val.val(val+1);
		})
		$(this).find('li.right a').click(function(e){
			e.preventDefault();
			var val = parseInt(input_val.val());
			if(val>0){
				input_val.val(val-1);
			}
		})
		input_val.keyup(function(){
			var val = parseInt(input_val.val());
			$(this).val(val);
			if(isNaN($(this).val()) || $(this).val() == ''){
				$(this).val(0);
			}
		})
	})
	
	function nav_scroll(){
		$('.nav_scroll_x').each(function(){
			var con = $(this).find('ul');
			var num = con.find('li').length;
			var w = con.find('li').width();
			var m_left = parseInt(con.find('li').eq(1).css('margin-left'));
			var p_left = parseInt(con.css('padding-left'));
			var con_w = ((w + m_left) * num) + p_left*2;
			con.width(con_w);
			console.log(w);
			con.css({
				'position':'absolute',
				'left':'0',
				'top':'0',
				'width':con_w
			})
			var n = 0;
			var x = 0;
			con.swiperight(function(){
				if(n<=0){
					return false;
				}
				n--;
				x-=(w+(p_left*2));
				con.css('left',-x)
			})
			con.swipeleft(function(){
				if(n>=(num-4)){
					return false;
				}
				n++;
				x+=(w+(p_left*2));
				con.css('left',-x)
			})
		})
	}
	setTimeout(nav_scroll,1000);
	
	$('.file_bt').each(function(){
		$(this).siblings('input[type=file]').hide();
		$(this).click(function(e){
			e.preventDefault();
			$(this).siblings('input[type=file]').click();
		})
	})
	
})
