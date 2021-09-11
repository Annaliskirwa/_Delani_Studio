/*User interface/ fronte end logic */
$(document).ready(function(){
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
});