

var searchbox =  document.getElementById("searchbox");
console.log(searchbox.value);


searchbox.onchange = function()
{
console.log(searchbox.value);
}

 function myfunc()
{

	console.log("ajax is calling");
	
	ajaxfunc();
}

function ajaxfunc(){
	var xHttp=new XMLHttpRequest();
	xHttp.open("GET","https://superheroapi.com/api.php/3128626267200501/search/batman");
	xHttp.send();
	xHttp.onload=function(){
		var parse=JSON.parse(xHttp.response);
		console.log(parse);
	}
}	


//  function ajaxfunc(){
// $.ajax({

//         url:'https://superheroapi.com/api/3128626267200501/search/batman',
//         method: 'GET',
//       //  data:{deletelist:deletelistarr},
//        dataType: 'jsonp',
//         success: function(response){
//           console.log("success ajax calling")
//         	console.log(response);
//         }
        
        
//         });



//   }      