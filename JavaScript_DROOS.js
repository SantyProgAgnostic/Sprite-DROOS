window.onload = function()
 {
 	//alert("Hola Sprites");
 var pasos = ["DOWN1wwwimagesplitternet-0-0", "DOWN2wwwimagesplitternet-0-1", "DOWN3wwwimagesplitternet-0-2", "DOWN4wwwimagesplitternet-0-3", "LEFT1wwwimagesplitternet-2-0", "LEFT2wwwimagesplitternet-2-1", "LEFT3wwwimagesplitternet-2-2", "LEFT4wwwimagesplitternet-2-3", "RIGHT1wwwimagesplitternet-1-0", "RIGHT2wwwimagesplitternet-1-1", "RIGHT3wwwimagesplitternet-1-2", "RIGHT4wwwimagesplitternet-1-3", "UP1wwwimagesplitternet-3-0", "UP2wwwimagesplitternet-3-1", "UP3wwwimagesplitternet-3-2", "UP4wwwimagesplitternet-3-3", ];
 var num_caminar = 1;
 var caminar_inversa = 5;
 var caminar = false;
 var cont = 0;
 
 setInterval(function()
 {
 	if(!caminar)
 	{
 		cont++;
 		nom_div("DROOS1").setAttribute("class", "caminar" + pasos[num_caminar - 1]);
 			num_caminar++;
 		if(num_caminar >= 5)
 		{
 				num_caminar = 1;
 		}
 			
 		
 			nom_div("DROOS2").setAttribute("class", "caminar" + pasos[caminar_inversa - 1]);
 			caminar_inversa--;
 				if(caminar_inversa <= 1)
 			{
 				caminar_inversa = 5;
 				
 				}
 				cont = 0;
 			
 		}
 	}, 100);
 	nom_div("boton").addEventListener('click', function(event)
 	{
 		caminar = !caminar;
 		
 	});
 	function nom_div(div)
 	{
 		return document.getElementById(div);
 	}
 }
