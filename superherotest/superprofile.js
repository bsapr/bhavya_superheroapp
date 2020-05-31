console.log("super id is ",localStorage.getItem("superhero_id"));
var characterid= localStorage.getItem("superhero_id");
	var superheroname = document.querySelector(".user-data h2");


window.addEventListener('load', (event) => {
  console.log('superuser page is fully loaded');

profile_ajaxfunc();


});



function profile_ajaxfunc()
{
   		var xHttp=new XMLHttpRequest();
	var superherourl  = 'https://superheroapi.com/api.php/3128626267200501/'+characterid;
	console.log("in ajax function call",superherourl);
	xHttp.open("GET",superherourl);
	xHttp.send();
	
	xHttp.onload=function(){
		var data=JSON.parse(xHttp.response);
		// console.log(parse);

		   let superhero =  data;

//         console.log(courses.length);
        $('#main_div').empty();
        console.log("full name is ",superhero)
        	//$('.user-data').empty();
        	document.getElementsByClassName('user-data')[0].innerHTML="";


        	//setting image of superhero
 		   //$('.user-image').empty();
 		   document.getElementsByClassName('user-image')[0].innerHTML="";

          // $('.user-image').append(
			document.getElementsByClassName('user-image')[0].insertAdjacentHTML("afterbegin",
           	`
           	<img src="${superhero.image.url}">
           	`
           	);


            //setting the superhero basic details	

           // $('.user-data').append(
            document.getElementsByClassName('user-data')[0].insertAdjacentHTML("afterbegin", 	
			`<div class="user-data">
					<h2>${superhero.biography['full-name']}</h2>
					<span class="post-label">${superhero['name']}</span>
					<span class="post-label">${superhero.biography.aliases[0]}</span>
					<p>First Appearance <strong>${superhero.biography['first-appearance']}</strong><br>
					<i class="fa fa-map-marker" aria-hidden="true"></i> ${superhero.biography['place-of-birth']}
					</p>
				</div>`	
            	);
              
			//Setting appearance details

//			$('.skill-box').empty();
			document.getElementsByClassName('skill-box')[0].innerHTML="";

         //   $('.skill-box').append(
            	document.getElementsByClassName('skill-box')[0].insertAdjacentHTML("afterbegin",
            	`
            	<ul>
						<li><strong>Appearance:</strong></li>
						<li>Gender ${superhero.appearance.gender}<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></li>
						<li>Eye Color ${superhero.appearance['eye-color']}<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></li>
						<li>Hair Color ${superhero.appearance['hair-color']} <i class="fa fa-star" aria-hidden="true"></i></li>
					  </ul>	
            	`


            	)



			//Setting description details

			var relatives = (superhero.connections.relatives).substring(1,60);
			//$('.desc').empty();
			document.getElementsByClassName('desc')[0].innerHTML="";
            //$('.desc').append(
            document.getElementsByClassName('desc')[0].insertAdjacentHTML("afterbegin",
            	`
            	<p>Occupation : ${superhero.work.occupation}</p>
            	<p>Group Affiliation : ${superhero.connections['group-affiliation']}</p>
            	`);

            //Setting powerstat details

            //$('.detail-box').empty();
          	  document.getElementsByClassName('detail-box')[0].innerHTML="";
         //   $('.detail-box').append(
           document.getElementsByClassName('detail-box')[0].insertAdjacentHTML("afterbegin",
            	`
            	<p>Superhero's Power Stats</p>
						<ul class="ul-first">
							<li> Intelligence</li>
							<li>Strength</li>
							<li>Speed</li>
							<li>power</li>
						</ul>
						<ul class="ul-second">
							<li>${superhero.powerstats.intelligence}</li>
							<li>${superhero.powerstats.strength}</li>
							<li>${superhero.powerstats.speed}</li>
							<li>${superhero.powerstats.durability}</li>
						</ul>
            	`

            	);

	}
}
