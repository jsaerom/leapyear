var input = "";

// Front end Logic
$("form#leap-year").submit(function(event){
  event.preventDefault();

  var input = parseInt($("#year").val());
  $(".year").text(input);

  if (leapYear(input) === false){
    $(".not").show();
  }

  else {
    $(".not").hide();
  };
});



// Back end Logic
var leapYear = function(year) {
  if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    return true;
  }
  else{
    return false;
  };
};
