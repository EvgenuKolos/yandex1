var j = 0;
var i = 1;
var main_block = document.getElementById("main_block")
var items = setInterval(function(){
	j++;
	main_block.insertAdjacentHTML('beforeend', '<div class="block_for_achive animated bounceIn"><div class="number_block animated bounceIn">'+ j +'</div><img class="achive_img animated bounceIn" src="img/a'+ i +'.png "></div>');
	i++;
	if(j == 10)clearInterval(items);
	if( i == 6 ){
		i = 1;
	}
}, 400);