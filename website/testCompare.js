var players = [];

//compare.html first dropdown first line
$.getJSON("../api/routes/", function(result) {
          var options1 = $("#options1");
          var options2 = $("#options2");
          players = result;
          //don't forget error handling!
          $.each(result, function(item) {
                 options1.append($("<option />").val(this.name).text(this.name));
                 
                 
                 });
          $.each(result, function(item) {
                 options2.append($("<option />").val(this.name).text(this.name));
                 
                 });
          players = result;
          });

/*
//compare.html second dropdown frst line
$.getJSON("../api/routes/", function(result) {
          var options2 = $("#options2");
          //don't forget error handling!
          $.each(result, function(item) {
                 options2.append($("<option />").val(this.name).text(this.name));
                 
                 });
          
          });*/
//////////////




//http://stackoverflow.com/questions/29204934/how-to-populate-dependable-drop-down-using-ajax-and-php
$(document).on("change", '#options1', function(e) {
               
               
               
              var  player_name = $(this).val();
               
               var comparename1 = $("#compName1");
               var plGame = document.getElementById("options1")
               console.log(player_name);
               console.log($('option:selected',this).index());
               console.log(plGame);
               comparename1.empty();
               
               /*
               var pl = $.grep(players,function(e){
                               
                               return e.name ==name;
                               
                               })*/
               comparename1.append($("<td />").val(player_name).text(player_name));
               
               var drop2 = $("#options1_2");
 
                   drop2.empty(); // remove old options
               
              drop2.append($("<option></option>").attr("value", '').text('Please Select'));
               
            /*   $.each(window[players], function(index) {
                      $(drop2).append($("<option />").val(this.game.team_played).text(this.game.team_played));
                      });*/
             
               
               $.each(players, function(item) {
                    //  if(item==player_game){
                      for(var i=0;i<players.length;i++){
                      
                      drop2.append($("<option />").val(this.game[i].team_played).text(this.game[i].team_played));
                      
                     // console.log(drop2)
                      
                     // }
                      }
                                                  
                      });
               
                      
               });
/////////////////////////////////////////////////////////


$(document).on("change", '#options2', function(e) {
               var player_name2 = $(this).val();
               console.log(options2);
                console.log($('option:selected',this).index());
               var comparename2 = $("#compName2");
               comparename2.empty();
               
               var pl = $.grep(players,function(e){
                               
                               return e.name ==name;
                               
                               })
               
               comparename2.append($("<td />").val(player_name2).text(player_name2));
               
               var drop3 = $("#options2_2");
               
               drop3.empty(); // remove old options
               
               drop3.append($("<option></option>").attr("value", '').text('Please Select'));
               $.each(players, function(item) {
                      for(var i=0;i<players.length;i++){
                      
                      drop3.append($("<option />").val(this.game[i].team_played).text(this.game[i].team_played));
                      }
                      });
               
               });




/////////////////////////////////////////////////////////
$(document).ready(function () {
$("#options1_2").on("change", function () {
                 
                 var team = $(this).val();
                 //var comparename1 = $("#compName1");
                    var compareOpp = $("#compOpp1");
                
                    var compareDistance = $("#compDistance1");
                    var comparePace = $("#compPace1");
                    var comparePosition = $("#compPosition1");
                    console.log($('option:selected',this).index());
                    console.log(team);
                    
                    var compareTimePlay = $("#compTime1");
                    var compareAvSpeed = $("#compAvSpeed1");
                    var compareMax = $("#compMax1");
                    var compareCalories = $("#compCalories1");
                    var compareHydrate = $("#compHydrate1");
                    
                    compareOpp.empty();
                    compareDistance.empty();
                    comparePace.empty();
                    comparePosition.empty();
                    
                    compareTimePlay.empty();
                    compareAvSpeed.empty();
                    compareMax.empty();
                    compareCalories.empty();
                    compareHydrate.empty();
                  
                  
                  //comparename1.empty();
                    
                   // compareOpp.append($("<td />").val(team).text(team));
                  
                  $.getJSON("../api/routes/", function(result) {
                            
                            
                            $.each(result, function(item) {
                                   
                                   
                                   
                                   
                                   
                                   
                                  for(var i=0;i<result.length;i++){
                                   
                                 
                                
                                   compareOpp.append($("<td />").attr('align',"center").val(this.game[i].team_played).text(this.game[i].team_played));
                                   compareDistance.append($("<td />").val(this.game[i].distance).text(this.game[i].distance));
                                   comparePosition.append($("<td />").val(this.game[i].position).text(this.game[i].position));
                                   comparePace.append($("<td />").val(this.game[i].pace).text(this.game[i].pace));
                                   
                                   compareTimePlay.append($("<td />").val(this.game[i].time_in_play).text(this.game[i].time_in_play));
                                   compareAvSpeed.append($("<td />").val(this.game[i].average_speed).text(this.game[i].average_speed));
                                   compareMax.append($("<td />").val(this.game[i].max_speed).text(this.game[i].max_speed));
                                   compareCalories.append($("<td />").val(this.game[i].calories).text(this.game[i].calories));
                                   compareHydrate.append($("<td />").val(this.game[i].hydration).text(this.game[i].hydration));
                                   
                                   // console.log(routeOpp);
                                   }
                                   
                                   });
                            })
                 }) })

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
$(document).ready(function () {
                  $("#options2_2").on("change", function () {
                                      
                                      var team2 = $(this).val();
                                      //var comparename1 = $("#compName1");
                                      var compareOpp2 = $("#compOpp2");
                                      
                                      var compareDistance2 = $("#compDistance2");
                                      var comparePace2 = $("#compPace2");
                                      var comparePosition2 = $("#compPosition2");
                                      console.log($('option:selected',this).index());
                                      console.log(team2);
                                      
                                      var compareTimePlay2 = $("#compTime2");
                                      var compareAvSpeed2 = $("#compAvSpeed2");
                                      var compareMax2 = $("#compMax2");
                                      var compareCalories2 = $("#compCalories2");
                                      var compareHydrate2 = $("#compHydrate2");
                                      
                                      
                                      
                                      compareOpp2.empty();
                                      compareDistance2.empty();
                                      comparePace2.empty();
                                      comparePosition2.empty();
                                      
                                      compareTimePlay2.empty();
                                      compareAvSpeed2.empty();
                                      compareMax2.empty();
                                      compareCalories2.empty();
                                      compareHydrate2.empty();
                                      
                                      
                                      //comparename1.empty();
                                      
                                      // compareOpp.append($("<td />").val(team).text(team));
                                      
                                      $.getJSON("../api/routes/", function(result) {
                                                
                                                
                                                $.each(result, function(item) {
                                                
                                                       for(var i=0;i<result.length;i++){
                                                       
                                                       
                                                       
                                                       compareOpp2.append($("<td />").attr('align',"center").val(this.game[i].team_played).text(this.game[i].team_played));
                                                       compareDistance2.append($("<td />").val(this.game[i].distance).text(this.game[i].distance));
                                                       comparePosition2.append($("<td />").val(this.game[i].position).text(this.game[i].position));
                                                       comparePace2.append($("<td />").val(this.game[i].pace).text(this.game[i].pace));
                                                       
                                                       compareTimePlay2.append($("<td />").val(this.game[i].time_in_play).text(this.game[i].time_in_play));
                                                       compareAvSpeed2.append($("<td />").val(this.game[i].average_speed).text(this.game[i].average_speed));
                                                       compareMax2.append($("<td />").val(this.game[i].max_speed).text(this.game[i].max_speed));
                                                       compareCalories2.append($("<td />").val(this.game[i].calories).text(this.game[i].calories));
                                                       compareHydrate2.append($("<td />").val(this.game[i].hydration).text(this.game[i].hydration));
                                                       
                                                       // console.log(routeOpp);
                                                       }
                                                       
                                                       });
                                                })
                                      }) })



////////////////////////////heatmap display (left side)/////////////////////////////
$(document).ready(function () {
                  $("#options1_2").on("change", function () {
                                      
                                      
                                      var com1Heat=$(this).val();
                                      console.log(com1Heat);
                                      
                                      if(com1Heat=='St Josephs'){
                                      
                                   var pageurl_heatmap1 = 'https://fusiontables.google.com/embedviz?q=select+col1%2C+col2+from+1B0h4prnGdfhDfyPIyabTJ7VJI0GNhp5LIv5xwoKO+limit+1000&viz=HEATMAP&h=true&lat=52.512892883846554&lng=-6.2862355358772675&t=3&z=18&l=col1&y=3&tmplt=3&hmd=true&hmg=%2366ff0000%2C%2393ff00ff%2C%23c1ff00ff%2C%23eeff00ff%2C%23f4e300ff%2C%23f4e300ff%2C%23f9c600ff%2C%23ffaa00ff%2C%23ff7100ff%2C%23ff3900ff%2C%23ff0000ff&hmo=0.8&hmr=35&hmw=0&hml=TWO_COL_LAT_LNG';
                                      }
                                      else if(com1Heat=='Wexford Bohs'){
                                      
                                      var pageurl_heatmap1='https://fusiontables.google.com/embedviz?q=select+col1%2C+col2+from+1fT8FghZbKUVfAZ1acCF0w7kbDjjecAL9dpUfEFlH+limit+1000&viz=HEATMAP&h=true&lat=52.24674737557057&lng=-6.729541355316087&t=3&z=18&l=col1&y=3&tmplt=3&hmd=true&hmg=%2366ff0000%2C%2393ff00ff%2C%23c1ff00ff%2C%23eeff00ff%2C%23f4e300ff%2C%23f4e300ff%2C%23f9c600ff%2C%23ffaa00ff%2C%23ff7100ff%2C%23ff3900ff%2C%23ff0000ff&hmo=0.8&hmr=20&hmw=0&hml=TWO_COL_LAT_LNG';
                                      }
                                      else if(com1Heat=='Gusserane'){
                                      
                                      var pageurl_heatmap1='https://fusiontables.google.com/embedviz?q=select+col1%2C+col2+from+12Ud_cYdKc0i0Crse-IUzKnszlRbzx3NRYYH-Gi5m+limit+1000&viz=HEATMAP&h=true&lat=52.30835098380593&lng=-6.855074118385346&t=3&z=18&l=col1&y=3&tmplt=3&hmd=true&hmg=%2366ff0000%2C%2393ff00ff%2C%23c1ff00ff%2C%23eeff00ff%2C%23f4e300ff%2C%23f4e300ff%2C%23f9c600ff%2C%23ffaa00ff%2C%23ff7100ff%2C%23ff3900ff%2C%23ff0000ff&hmo=0.8&hmr=36&hmw=0&hml=TWO_COL_LAT_LNG';
                                      
                                      }
                                      
                                   $("#compareHeat1").attr("src", pageurl_heatmap1);
                                   });
                  });

/////////////////////////////speed chart (left hand side)/////////////////////////////

$(document).ready(function () {
                  $("#options1_2").on("change", function () {
                                      
                                      var com1Speed=$(this).val();
                                      console.log(com1Speed);
                                      
                                      if(com1Speed=='St Josephs'){
                                      
                                   var pageurl_speed1 = 'https://fusiontables.google.com/embedviz?containerId=googft-gviz-canvas&q=select+col1%2C+col5+from+12XpkbRZmze1zENT4vP6tAZrCteKuIeUpQ-pUJZWW+order+by+col1+asc&viz=GVIZ&t=AREA&rmax=250&uiversion=2&gco_forceIFrame=true&gco_hasLabelsColumn=true&width=500&height=400';
                                      }
                                      
                                      else if(com1Speed=='Wexford Bohs'){
                                      
                                      var pageurl_speed1='https://fusiontables.google.com/embedviz?containerId=googft-gviz-canvas&q=select+col1%2C+col5+from+1mIB46ZZU4KyuMoXeg0kRz1QjNWG_Z1xCNIvjE0OH+order+by+col1+asc&viz=GVIZ&t=AREA&rmax=250&uiversion=2&gco_forceIFrame=true&gco_hasLabelsColumn=true&width=500&height=400';
                                      }
                                      else if(com1Speed=='Gusserane'){
                                      var pageurl_speed1='https://fusiontables.google.com/embedviz?containerId=googft-gviz-canvas&q=select+col1%2C+col5+from+1Mt5N7vXYdoGU8cnODpqtJRL6GEIU89W3tlE-fndQ+order+by+col1+asc&viz=GVIZ&t=AREA&rmax=250&uiversion=2&gco_forceIFrame=true&gco_hasLabelsColumn=true&width=500&height=400';
                                      }
                                   $("#compareSpeed1").attr("src", pageurl_speed1);
                                   });
                  });



////////////////////////////heatmap display (right side)/////////////////////////////
$(document).ready(function () {
                  $("#options2_2").on("change", function () {
                                      
                                      
                                      var com2Heat=$(this).val();
                                      console.log(com2Heat);
                                      
                                      if(com2Heat=='St Josephs'){
                                      
                                      var pageurl_heatmap2 = 'https://fusiontables.google.com/embedviz?q=select+col1%2C+col2+from+1B0h4prnGdfhDfyPIyabTJ7VJI0GNhp5LIv5xwoKO+limit+1000&viz=HEATMAP&h=true&lat=52.512892883846554&lng=-6.2862355358772675&t=3&z=18&l=col1&y=3&tmplt=3&hmd=true&hmg=%2366ff0000%2C%2393ff00ff%2C%23c1ff00ff%2C%23eeff00ff%2C%23f4e300ff%2C%23f4e300ff%2C%23f9c600ff%2C%23ffaa00ff%2C%23ff7100ff%2C%23ff3900ff%2C%23ff0000ff&hmo=0.8&hmr=35&hmw=0&hml=TWO_COL_LAT_LNG';
                                      }
                                      else if(com2Heat=='Wexford Bohs'){
                                      
                                      var pageurl_heatmap2='https://fusiontables.google.com/embedviz?q=select+col1%2C+col2+from+1fT8FghZbKUVfAZ1acCF0w7kbDjjecAL9dpUfEFlH+limit+1000&viz=HEATMAP&h=true&lat=52.24674737557057&lng=-6.729541355316087&t=3&z=18&l=col1&y=3&tmplt=3&hmd=true&hmg=%2366ff0000%2C%2393ff00ff%2C%23c1ff00ff%2C%23eeff00ff%2C%23f4e300ff%2C%23f4e300ff%2C%23f9c600ff%2C%23ffaa00ff%2C%23ff7100ff%2C%23ff3900ff%2C%23ff0000ff&hmo=0.8&hmr=20&hmw=0&hml=TWO_COL_LAT_LNG';
                                      }
                                      else if(com2Heat=='Gusserane'){
                                      
                                      var pageurl_heatmap2='https://fusiontables.google.com/embedviz?q=select+col1%2C+col2+from+12Ud_cYdKc0i0Crse-IUzKnszlRbzx3NRYYH-Gi5m+limit+1000&viz=HEATMAP&h=true&lat=52.30835098380593&lng=-6.855074118385346&t=3&z=18&l=col1&y=3&tmplt=3&hmd=true&hmg=%2366ff0000%2C%2393ff00ff%2C%23c1ff00ff%2C%23eeff00ff%2C%23f4e300ff%2C%23f4e300ff%2C%23f9c600ff%2C%23ffaa00ff%2C%23ff7100ff%2C%23ff3900ff%2C%23ff0000ff&hmo=0.8&hmr=36&hmw=0&hml=TWO_COL_LAT_LNG';
                                      
                                      }
                                      
                                      $("#compareHeat2").attr("src", pageurl_heatmap2);
                                      });
                  });



/////////////////////////////speed chart (left hand side)/////////////////////////////

$(document).ready(function () {
                  $("#options2_2").on("change", function () {
                                      
                                      var com2Speed=$(this).val();
                                      console.log(com2Speed);
                                      
                                      if(com2Speed=='St Josephs'){
                                      
                                      var pageurl_speed2 = 'https://fusiontables.google.com/embedviz?containerId=googft-gviz-canvas&q=select+col1%2C+col5+from+12XpkbRZmze1zENT4vP6tAZrCteKuIeUpQ-pUJZWW+order+by+col1+asc&viz=GVIZ&t=AREA&rmax=250&uiversion=2&gco_forceIFrame=true&gco_hasLabelsColumn=true&width=500&height=400';
                                      }
                                      
                                      else if(com2Speed=='Wexford Bohs'){
                                      
                                      var pageurl_speed2='https://fusiontables.google.com/embedviz?containerId=googft-gviz-canvas&q=select+col1%2C+col5+from+1mIB46ZZU4KyuMoXeg0kRz1QjNWG_Z1xCNIvjE0OH+order+by+col1+asc&viz=GVIZ&t=AREA&rmax=250&uiversion=2&gco_forceIFrame=true&gco_hasLabelsColumn=true&width=500&height=400';
                                      }
                                      else if(com2Speed=='Gusserane'){
                                      var pageurl_speed2='https://fusiontables.google.com/embedviz?containerId=googft-gviz-canvas&q=select+col1%2C+col5+from+1Mt5N7vXYdoGU8cnODpqtJRL6GEIU89W3tlE-fndQ+order+by+col1+asc&viz=GVIZ&t=AREA&rmax=250&uiversion=2&gco_forceIFrame=true&gco_hasLabelsColumn=true&width=500&height=400';
                                      }
                                      $("#compareSpeed2").attr("src", pageurl_speed2);
                                      });
                  });

/*
$(document).on("change", '#options1', function(e) {
               var options1 = $(this).val();
               console.log(options1);
               
                        var drop2 = $("#options1_2");
                      var drop3 = $("#options2_2");
               
                      drop2.empty(); // remove old options
                      drop2.append($("<option></option>")
                                   .attr("value", '').text('Please Select'));
                      $.each(result, function(item) {
                             drop2.append($("<option />").val(this.game.team_played).text(this.game.team_played));
                             
                             });
               
               
               drop3.empty(); // remove old options
               drop3.append($("<option></option>")
                            .attr("value", '').text('Please Select'));
               $.each(result, function(item) {
                      drop3.append($("<option />").val(this.game.team_played).text(this.game.team_played));
                      
                      });
               
               
                      
                      
               
               
               });

*/
/////////////////////////////////////compare dropdown populate version2///////////////////////
/*
$(document).ready(function($){
                  $("#options1").on("change", function () {
                                    var comparePlayer = $(this).val();
 
                                    $.getJSON("../api/routes/", function(result1) {
 
                                              //don't forget error handling!
                                              $.each(result1, function(item) {
                                                     
                                                     $("#options1_2").empty();
                                                     for(var i=0;i<result.length;i++)
                                                     {
                                                     $("#options1_2").append($("<option />").val(this.game[i].team_played).text(this.game[i].team_played));
                                                     }
                                                     });
                                              });
                                    })
                  })
 
*/
/*
//compare.html second dropdown second line
//////https://css-tricks.com/dynamic-dropdowns/
 $("#options1").change(function() {
 var $dropdown = $(this);
 $.getJSON("../api/routes/", function(result) {
 var key = $dropdown.val();
 var vals = [];
 
 
 var options1_2 = $("#options1_2");
           options1_2.empty();
 //don't forget error handling!
 $.each(result, function(index, item) {
 
 for(var i=0;i<result.length;i++){
 options1_2.append($("<option />").val(this.game.team_played).text(this.game.team_played));
 }
 });
 });
 }
 */

/*

 $(document).ready(function(){
 $("#options1").change(function(){
                       
                       var comparePlayer = $(this).val();
                       
 var options1_2 = $("#options1_2");
 //don't forget error handling!
 $.each(result, function(item){
 for(var j=0;j<result.length;j++)
 {
 options1_2.append($("<option />").val(this.game[j].team_played).text(this.game[j].team_played));
 }});
 });
 });
*/



