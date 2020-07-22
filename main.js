//al click dell' elemento a > i (tag figlio dell'elemento a)
//rendo visibile quello con classe "hamburger-menu"
$("a > i").click(function(){
  $(".hamburger-menu").show();
});

//al click dell' elemento con classe "close"
//rendo nuovamente invisibile quello con classe "hamburger-menu"
$(".close").click(function(){
  $(".hamburger-menu").hide();
});
