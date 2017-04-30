var players =[];

//routes.hml dropdown
$.getJSON("../api/routes/", function(result) {
          var options = $("#options");
          //don't forget error handling!
          
          
          $.each(result, function(item){
          for(var i=0;i<result.length;i++)
                {
                 
                 options.append($("<option />").val(this.game[i].team_played).text(this.game[i].team_played));
                 
                // options.append($("<option />").val(this.game[i].team_played).text(this.game[i].team_played));
                 }
                 });
          players = result;
          });


/*
//heatmap iframe for routes.html
$(document).ready(function () {
                  $("#options").on("change", function () {
                                     var pageurl = 'https://fusiontables.google.com/embedviz?q=select+col1%2C+col2+from+1jpVJUCRhNA4XulIIeYLCDqzKgzrOpklxBeUSvaWm+limit+1000&amp;viz=HEATMAP&amp;h=true&amp;lat=52.24674127646503&amp;lng=-6.730332373333001&amp;t=3&amp;z=18&amp;l=col1&amp;y=2&amp;tmplt=2&amp;hmd=true&amp;hmg=%2366ff0000%2C%2393ff00ff%2C%23c1ff00ff%2C%23eeff00ff%2C%23f4e300ff%2C%23f4e300ff%2C%23f9c600ff%2C%23ffaa00ff%2C%23ff7100ff%2C%23ff3900ff%2C%23ff0000ff&amp;hmo=1&amp;hmr=41&amp;hmw=0&amp;hml=TWO_COL_LAT_LNG';
                                     $("#heatFrame").attr("src", pageurl);
                                     });
                  });

*/

/*//speed iframe for routes.html
$(document).ready(function () {
                  $("#options").on("change", function () {
                                   var pageurl = 'https://fusiontables.google.com/embedviz?containerId=googft-gviz-canvas&amp;q=select+col1%2C+col5+from+1mIB46ZZU4KyuMoXeg0kRz1QjNWG_Z1xCNIvjE0OH+order+by+col1+asc&amp;viz=GVIZ&amp;t=AREA&amp;rmax=250&amp;uiversion=2&amp;gco_forceIFrame=true&amp;gco_hasLabelsColumn=true&amp;width=1000&amp;height=400';
                                   $("#speedFrame").attr("src", pageurl);
                                   });
                  });*/

$(document).ready(function () {
                  $("#popButton").on("click", function (){
                                     $.getJSON("../api/routes/", function(result) {
                                     
                                     
                                  //   var plName = $(this).val();
                                     var routeName = $("#routeName");
                                     var routeOpp = $("#routeOpp");
                                     var routeDistance = $("#routeDistance");
                                     var routePace = $("#routePace");
                                     var routePosition = $("#routePosition");
                                               
                                var routeTimePlay = $("#routeTimePlay");
                                               var routeAvSpeed = $("#routeAvSpeed");
                                               var routeMax = $("#routeMax");
                                             
                                var routeCalories = $("#routeCalories");
                                               var routeHydrate = $("#routeHydrate");
                                     console.log($('option:selected',this).index());
                                     //console.log(plName);
                                     routeName.empty();
                                      routeOpp.empty();
                                     routeDistance.empty();
                                     routePace.empty();
                                     routePosition.empty();
                                               
                                               routeTimePlay.empty();
                                               routeAvSpeed.empty();
                                               routeMax.empty();
                                               routeCalories.empty();
                                               routeHydrate.empty();
                                     
                                     
                                     
                                     $.each(result, function(item) {
                                            
                                            
                                            routeName.append($("<td />").val(this.name).text(this.name));
                                            
                                            
                                            for(var i=0;i<result.length;i++){
                                            
                                            routeOpp.append($("<td />").attr('align',"center").val(this.game[i].team_played).text(this.game[i].team_played));
                                            routeTimePlay.append($("<td />").val(this.game[i].time_in_play).text(this.game[i].time_in_play));
                                              routeDistance.append($("<td />").val(this.game[i].distance).text(this.game[i].distance));
                                            routePosition.append($("<td />").val(this.game[i].position).text(this.game[i].position));
                                            routePace.append($("<td />").val(this.game[i].pace).text(this.game[i].pace));
                                            
                                            
                                            routeAvSpeed.append($("<td />").val(this.game[i].average_speed).text(this.game[i].average_speed));
                                            routeMax.append($("<td />").val(this.game[i].max_speed).text(this.game[i].max_speed));
                                            routeCalories.append($("<td />").val(this.game[i].calories).text(this.game[i].calories));
                                            routeHydrate.append($("<td />").val(this.game[i].hydration).text(this.game[i].hydration));
                                            
                                           // console.log(routeOpp);
                                            }
                                            
                                            });
                                     
                                               })})
                  })
//////////////////////////////////////////Heat Map Display//////////////////////////////////////////////////////////////////////
$(document).ready(function () {
                  $("#options").on("change", function () {
                                   
                                   
                                   var plHeat = $(this).val();
                                   console.log(plHeat);
								   
                                   if(plHeat=='St Josephs'){
                                      var pageurl_heatmap =
                                   'https://fusiontables.google.com/embedviz?q=select+col1%2C+col2+from+1KFyGPxf7EPj7TCE4CYvhM6sRhKUKXf0nZK3MiSEc+limit+1000&viz=HEATMAP&h=true&lat=52.51295556468331&lng=-6.285923608779967&t=3&z=18&l=col1&y=2&tmplt=2&hmd=true&hmg=%2366ff0000%2C%2393ff00ff%2C%23c1ff00ff%2C%23eeff00ff%2C%23f4e300ff%2C%23f4e300ff%2C%23f9c600ff%2C%23ffaa00ff%2C%23ff7100ff%2C%23ff3900ff%2C%23ff0000ff&hmo=0.97&hmr=40&hmw=0&hml=TWO_COL_LAT_LNG';
                                   }
                                   else if(plHeat=='Wexford Bohs')
                                   {
                                   var pageurl_heatmap='https://fusiontables.google.com/embedviz?q=select+col1%2C+col2+from+1fT8FghZbKUVfAZ1acCF0w7kbDjjecAL9dpUfEFlH+limit+1000&viz=HEATMAP&h=true&lat=52.24674737557057&lng=-6.729541355316087&t=3&z=18&l=col1&y=3&tmplt=3&hmd=true&hmg=%2366ff0000%2C%2393ff00ff%2C%23c1ff00ff%2C%23eeff00ff%2C%23f4e300ff%2C%23f4e300ff%2C%23f9c600ff%2C%23ffaa00ff%2C%23ff7100ff%2C%23ff3900ff%2C%23ff0000ff&hmo=0.8&hmr=20&hmw=0&hml=TWO_COL_LAT_LNG';
                                   }
                                   else if(plHeat=='Gusserane'){
                                   var pageurl_heatmap= 'https://fusiontables.google.com/embedviz?q=select+col1%2C+col2+from+12Ud_cYdKc0i0Crse-IUzKnszlRbzx3NRYYH-Gi5m+limit+1000&viz=HEATMAP&h=true&lat=52.30835098380593&lng=-6.855074118385346&t=3&z=18&l=col1&y=3&tmplt=3&hmd=true&hmg=%2366ff0000%2C%2393ff00ff%2C%23c1ff00ff%2C%23eeff00ff%2C%23f4e300ff%2C%23f4e300ff%2C%23f9c600ff%2C%23ffaa00ff%2C%23ff7100ff%2C%23ff3900ff%2C%23ff0000ff&hmo=0.8&hmr=36&hmw=0&hml=TWO_COL_LAT_LNG';
                                   }
                                   else{console.log('Please select again')}
                                      $("#heatFrame").attr("src", pageurl_heatmap);
                                      });
                  });



/////////////////////////////////////////////////Speed Frame Display/////////////////////////////////////////////////////////////////
$(document).ready(function () {
                  $("#options").on("change", function () {
					  
					  var plSpeed = $(this).val();
					  console.log(plSpeed);
					  
					  if(plSpeed=='St Josephs'){
                                   var pageurl_speed =
                                   'https://fusiontables.google.com/embedviz?containerId=googft-gviz-canvas&q=select+col1%2C+col5+from+12XpkbRZmze1zENT4vP6tAZrCteKuIeUpQ-pUJZWW+order+by+col1+asc&viz=GVIZ&t=AREA&rmax=250&uiversion=2&gco_forceIFrame=true&gco_hasLabelsColumn=true&width=1000&height=400';
					  }
					  else if(plSpeed=='Wexford Bohs'){
						  var pageurl_speed='https://fusiontables.google.com/embedviz?containerId=googft-gviz-canvas&q=select+col1%2C+col5+from+1mIB46ZZU4KyuMoXeg0kRz1QjNWG_Z1xCNIvjE0OH+order+by+col1+asc&viz=GVIZ&t=AREA&rmax=250&uiversion=2&gco_forceIFrame=true&gco_hasLabelsColumn=true&width=1000&height=400';
						  
					  }
					  else if(plSpeed=='Gusserane'){
						  
						  var pageurl_speed='https://fusiontables.google.com/embedviz?containerId=googft-gviz-canvas&q=select+col1%2C+col5+from+1Mt5N7vXYdoGU8cnODpqtJRL6GEIU89W3tlE-fndQ+order+by+col1+asc&viz=GVIZ&t=AREA&rmax=250&uiversion=2&gco_forceIFrame=true&gco_hasLabelsColumn=true&width=1000&height=400';
					  }
                                   $("#speedFrame").attr("src", pageurl_speed);
                                   });
                  });

 //doesn't populate dropdown let along iFrame :{{
/*
$("#options").on("change", function () {

$.getJSON("../api/routes/", function(result) {
          var option = $("#heatFrame");
          //don't forget error handling!
          $.each(result, function(item) {
                 option.append($('<iframe src="https://fusiontables.google.com/embedviz?q=select+col1+from+12Ud_cYdKc0i0Crse-IUzKnszlRbzx3NRYYH-Gi5m&amp;viz=MAP&amp;h=false&amp;lat=52.30831039542026&amp;lng=-6.8545306357837035&amp;t=3&amp;z=18&amp;l=col1&amp;y=2&amp;tmplt=2&amp;hml=TWO_COL_LAT_LNG">''</iframe>'));
                 });
          });
                  })
*/


