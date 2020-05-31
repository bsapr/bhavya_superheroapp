

var searchbox =  document.getElementById("searchbox");
var searchbutton =document.getElementById("searchbutton");

var favouritebutton =document.getElementById("favourite");
var  super_id=null;


//function for heart buttom
   function heartButtonClick(x,name,imageurl) {
    x.classList.toggle("favourite_red");
    if(localStorage.getItem(name)!='null')
    {
    	localStorage.setItem(name, imageurl);
    }
    else
    {
    	console.log("removing from localStorage" ,name);
    	localStorage.removeItem(name);
    }
    }

  

//function for maintaining the id of selected superhero
function profilefunc(id)
{
	localStorage.setItem("superhero_id", id);	
	console.log("in profile func value of selected id is ",id);
};
console.log(searchbox.value);

function clickfunction()
{
	console.log("in button click");
var searchvalue = searchbox.value;
var superherourl  = "https://superheroapi.com/api.php/3128626267200501/search/"+searchvalue;
	ajaxfunc(superherourl);
}


// var searchvalue = searchbox.value;

//function to triger the function chain for ajax call on change of search input
searchbox.onkeyup = function inputfunc()
{
console.log(searchbox.value);
var searchvalue = searchbox.value; 
var superherourl  = "https://superheroapi.com/api.php/3128626267200501/search/"+searchvalue;
console.log("in searchbox call",superherourl);

myfunc(superherourl);
}

function myfunc(superherourl)
{
   
	console.log("ajax is calling");
	console.log(superherourl);
	ajaxfunc(superherourl);
}

function ajaxfunc(superherourl){
	var xHttp=new XMLHttpRequest();
	//var superherourl  = "https://superheroapi.com/api.php/3128626267200501/search/"+searchvalue;
	console.log("in ajax function call",superherourl);
	xHttp.open("GET",superherourl);
	xHttp.send();
	$('#main_div').empty();
	xHttp.onload=function(){
		var data=JSON.parse(xHttp.response);
		// console.log(parse);

		   let superhero =  data.results;

//         console.log(courses.length);
//        $('#main_div').empty();

document.getElementById("main_div").innerHTML="";
        for(let i=0;i<superhero.length;i++)
        {

        	let superherodata  = superhero[i];

            // $('#main_div').append(
            document.getElementById("main_div").insertAdjacentHTML("afterbegin", 	
			`<div class="superhero_card">
				<a onclick='profilefunc(${superherodata.id})'   href="superprofile.html" >
				<div class="super_image"><img src="${superherodata.image.url}"></div></a>
				<div class="card_details">
					<div class="name"><p>${superherodata.name}</p></div>
					 <div id="favourite" onclick="heartButtonClick(this,'${superherodata.name}','${superherodata.image.url}')"><i  class="fa far fa-heart"></i></div>	

				</div>
			</div>`	
            	);
              
        }
       
	}
}	


