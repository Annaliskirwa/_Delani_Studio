/*User interface/ fronte end logic */
$(document).ready(function(){
    /*What we do scripts */
    $("div#design").click(function() {
        $("div#design-content").toggle();
        $("div#design").toggle();
      });
    $("div#design-content").click(function() {
        $("div#design-content").toggle();
        $("div#design").toggle();
      });
    $("div#development").click(function() {
        $("div#development-content").toggle();
        $("div#development").toggle();
      });
    $("div#development-content").click(function() {
        $("div#development-content").toggle();
        $("div#development").toggle();
      });
    $("div#product").click(function() {
        $("div#product-content").toggle();
        $("div#product").toggle();
      });
    $("div#product-content").click(function() {
        $("div#product-content").toggle();
        $("div#product").toggle();
      });
/*Portfolio scripts */
$("#col1").hover(function() {
    $("#text1").fadeTo("slow",1);
    $("#pic1").fadeTo("slow",0.4);
    },function() {
      $("#text1").fadeTo("slow",0);
      $("#pic1").fadeTo("slow",1);
    });

    $("#col2").hover(function() {
        $("#text2").fadeTo("slow",1);
        $("#pic2").fadeTo("slow",0.4);
        },function() {
          $("#text2").fadeTo("slow",0);
          $("#pic2").fadeTo("slow",1);
        });

     $("#col3").hover(function() {
        $("#text3").fadeTo("slow",1);
         $("#pic3").fadeTo("slow",0.4);
         },function() {
             $("#text3").fadeTo("slow",0);
            $("#pic3").fadeTo("slow",1);
        });
        $("#col4").hover(function() {
            $("#text4").fadeTo("slow",1);
            $("#pic4").fadeTo("slow",0.4);
            },function() {
              $("#text4").fadeTo("slow",0);
              $("#pic4").fadeTo("slow",1);
            });
        $("#col5").hover(function() {
            $("#text5").fadeTo("slow",1);
            $("#pic5").fadeTo("slow",0.4);
            },function() {
                $("#text5").fadeTo("slow",0);
                 $("#pic5").fadeTo("slow",1);
             });
             $("#col6").hover(function() {
                $("#text6").fadeTo("slow",1);
                $("#pic6").fadeTo("slow",0.4);
                },function() {
                  $("#text6").fadeTo("slow",0);
                  $("#pic6").fadeTo("slow",1);
                });
                $("#col7").hover(function() {
                    $("#text7").fadeTo("slow",1);
                    $("#pic7").fadeTo("slow",0.4);
                    },function() {
                      $("#text7").fadeTo("slow",0);
                      $("#pic7").fadeTo("slow",1);
                    });
                    $("#col8").hover(function() {
                        $("#text8").fadeTo("slow",1);
                        $("#pic8").fadeTo("slow",0.4);
                        },function() {
                          $("#text8").fadeTo("slow",0);
                          $("#pic8").fadeTo("slow",1);
                        });
});