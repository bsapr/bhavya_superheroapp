

favouritesAjaxFunc();





function favouritesAjaxFunc(superherourl){
	
	$('#main_div').empty();
	

	


//         console.log(courses.length);
        $('#main_div').empty();

        for(const superherodata in localStorage)
        {

        
        	

        	if(superherodata=='69' || superherodata=='69' || superherodata=='length' || superherodata=='key' || superherodata=='getItem' || superherodata=='setItem' || superherodata=='removeItem' || superherodata=='clear' || superherodata=='superhero_id' )
            {

            }
            else
            {console.log("localstorage key ",superherodata);

            	  // $('#main_div').append
            	 document.getElementById("main_div").insertAdjacentHTML("afterbegin",  

			`<div class="superhero_card">
				<div class="super_image"><img src="${localStorage[superherodata]}"></div>
				<div class="card_details">
					<div class="name"><p>${superherodata}</p></div>

				</div>
			</div>`	
            	);	
            }

          
              
        }
       
	}