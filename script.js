$(function() {
  $("#userSignInput").on("keyup", function(e) {
 
    $("#tiles").text($(this).val().length);
 
    updatePrice($(this).val().length);
    })
   $("#userFontInput").on('click', function(e) {  
   
     var x = $(this).is(':checked')
     updatePrice($('#userSignInput').val().length, x)
   })
   $("#slideAd").on("click", function() { 
event.preventDefault(); 

var preview = $("#userSignInput").val(); 

$("#slideAd").append(preview); 

$("#slideAd").toggle(); 

})
     
})
function updatePrice(signLength, fontUpgrade) {
  var costPerTile = 5;
  if(fontUpgrade){
    console.log('upgrading tile cost..');
    costPerTile = 6;
  }
  else{
    costPerTile = 5;
  }
  
  var subTotal = signLength *costPerTile ;
  var shipping = 7;

  var grandTotal = subTotal + shipping;

  $("#subTotal").text("$" + subTotal);
  $("#shipping").text("$" + shipping);
  $("#grandTotal").text("$" + grandTotal);

  return grandTotal;
}