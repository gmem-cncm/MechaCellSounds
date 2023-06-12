inlets = 1
outlets = 4

//============================================================================//
//                          GLOBAL VARIABLES & INIT                           //
//============================================================================//

var inputs = 13;
var outputs = 5;


//============================================================================//
//                                 FUNCTIONS                                  //
//============================================================================//

function crossPatch(x, y, type){
	if(type == 1){
		outlet(1, x);
		outlet(0, y);
	}
	else{
		outlet(1, -1);
		outlet(0, y);
	}
}

function reset(){
	for(var i=0; i<outputs; i++){
		outlet(1, -1);
		outlet(0, i);
	}
}