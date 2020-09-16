$(document).ready(function() {
  $("form#match-making").submit(function(event) { 
  
    const gender = $("select#gender").val();
    const genre = $("select#genre").val();
    let partner 

    if (gender === "Any" && genre === "Musician") {
      partner = "Sam Smith";
      } else if (gender === "Man" && genre === "Musician") {
      partner = "Ozuna";
      } else if (gender === "Woman" && genre === "Musician") {
      partner = "Cardi B";
      } else {
      partner = "Jackie Chan"
      }   
  
    $("#partner").text(match);
    $("#match").show(); 

    event.preventDefault();
  });
});