
 



$("button").click(function(){
    function llegadaFinal(){
     $('#globo2').html ('BUM');
    }
    
    function loopGlobo1(){
    $("#globo1").animate({bottom: "500px"},2940);
  $("#globo1").animate({bottom: "-200px"},1000, loopGlobo1);
   
    }
    loopGlobo1();
    
    function loopGlobo2(){
    $("#globo2").animate({bottom: "500px"},2310);
  $("#globo2").animate({bottom: "-200px"},1000, loopGlobo2);
   
    }
    loopGlobo2();
    
    
    function loopGlobo3(){
    $("#globo3").animate({bottom: "500px"},3200);
  $("#globo3").animate({bottom: "-200px"},1000, loopGlobo3);
   
    }
    loopGlobo3();
    
    function loopGlobo4(){
    $("#globo4").animate({bottom: "500px",
                         zIndex:-400},2500);
    $("#globo4").animate({bottom: "-200px",
                         zIndex:400},loopGlobo4);
   
    }
    loopGlobo4();
    
     function loopGlobo5(){
    $("#globo5").animate({bottom: "500px",
                         zIndex:100},3100);
  $("#globo5").animate({bottom: "-200px",
                       zIndex:-100},loopGlobo5);
   
    }
    loopGlobo5();
    
});

$('#globo1, #globo2,#globo3, #globo4, #globo5').click(function(){
    $(this).css('display','none')
}); // Inicio del ready


