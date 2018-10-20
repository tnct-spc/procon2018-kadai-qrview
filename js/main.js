function getSize(){
	var width = window.innerWidth;
	var height = window.innerHeight;

	if(width <= height){
		return width;
	}else{
		return height;
	}
}