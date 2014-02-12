$(document).ready(function() {

    $('#button1').click(function() {
        var animalName = $('#input1').val();
        $('#animal1').text(animalName + ' ' + animalName);
        if (animalName.charAt(0) == 'B') {
            alert("Watch out for that " + animalName);
            $('#animal1').css('background-color', 'yellow')
        } else {
            $('#animal1').css('background-color', 'red')
        }
    });
    
    $('#button2').click(function() {
        var animalName = $('#input2').val();
        $('#animal2').text(animalName + ' ' + animalName);
        if (animalName.charAt(0) == 'B') {
            alert("Watch out for that " + animalName);
            $('#animal2').css('background-color', 'yellow')
        } else {
            $('#animal2').css('background-color', 'red')
        }
    });
    
    $('#button3').click(function() {
        var animalName = $('#input3').val();
        $('#animal3').text(animalName + ' ' + animalName);
        if (animalName.charAt(0) == 'B') {
            alert("Watch out for that " + animalName);
            $('#animal3').css('background-color', 'yellow')
        } else {
            $('#animal3').css('background-color', 'red')
        }
    });
    
    $('#myAnimalButton').click(function() {
        var animal1 = $('#animal1').text();
        var animal2 = $('#animal2').text();
        var animal3 = $('#animal3').text();
        
        var animals = [animal1, animal2, animal3];
        
        for (var i = 0; i < animals.length; i++) {
            alert(animals[i]);
        }
        
        // alert(animal1 + ', ' + animal2 + ', ' + animal3);
    });

    $('#randomAnimalButton').click(function() {
        var animal1 = $('#animal1').text();
        var animal2 = $('#animal2').text();
        var animal3 = $('#animal3').text();
        
        var animals = [animal1, animal2, animal3];
        var randomNumber = Math.floor(Math.random() * 3);
        
        $('#randomAnimal').text(animals[randomNumber]);
    });

});