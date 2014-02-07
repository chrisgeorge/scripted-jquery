$(document).ready(function() {

    // When the element with id 'button1' is clicked
    $('#button1').click(function() {
       
       // Grab the value of the element with the id 'input1'
       var animalName = $('#input1').val();

       // Change the text of the element with the id 'animal1'
       //   with the value of the variable named 'animalName'
       $('#animal1').text(animalName);
        
    });
    
    $('#button2').click(function() {
        
        // Put your javascript for #2 here.
        
    })

});