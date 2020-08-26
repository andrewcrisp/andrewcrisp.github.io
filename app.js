'use strict;'
console.log('Entering the js file');

var lookups
var anima
var veggie
var elemental
var techne
$(function () {
    // Do stuff to the DOM
    
    //let requestURL = 'https://andrewcrisp.github.io/lookups.json';
    let requestURL = 'lookups.json'
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        const r = request.response;
        lookups = r
        anima = lookups["anima"];
        veggie = lookups["veggie"];
        elemental = lookups["elemental_and_mineral"];
        techne = lookups["techne"];
        function get_random_number(max=10){
            return Math.floor(Math.random() * max)
        }
        function get_random_entry(obj){
            arr = Object.getOwnPropertyNames(obj)
            return arr[Math.floor(Math.random() * arr.length)];
        }

        function roll_anima(){
            var obj = lookups["anima"]
            var families = Object.getOwnPropertyNames(obj)
            roll1 = get_random_number(families.length)
            family = obj[families[roll1]]
            roll2 = get_random_number(family.length)
            document.getElementById("anima1_family").innerHTML = families[roll1]
            document.getElementById("anima1_specific").innerHTML = family[roll1]
            roll1 = get_random_number(families.length)
            family = obj[families[roll1]]
            roll2 = get_random_number(family.length)
            document.getElementById("anima2_family").innerHTML = families[roll1]
            document.getElementById("anima2_specific").innerHTML = family[roll1]
        }
        function roll_veggie(){
            var obj = lookups["veggie"]
            var families = Object.getOwnPropertyNames(obj)
            roll1 = get_random_number(families.length)
            family = obj[families[roll1]]
            roll2 = get_random_number(family.length)
            document.getElementById("veggie1_family").innerHTML = families[roll1]
            document.getElementById("veggie1_specific").innerHTML = family[roll1]
            roll1 = get_random_number(families.length)
            family = obj[families[roll1]]
            roll2 = get_random_number(family.length)
            document.getElementById("veggie2_family").innerHTML = families[roll1]
            document.getElementById("veggie2_specific").innerHTML = family[roll1]
        }
        function roll_elemental(){
            var obj = lookups["elemental_and_mineral"]
            var families = Object.getOwnPropertyNames(obj)
            roll1 = get_random_number(families.length)
            family = obj[families[roll1]]
            roll2 = get_random_number(family.length)
            document.getElementById("elemental1_family").innerHTML = families[roll1]
            document.getElementById("elemental1_specific").innerHTML = family[roll1]
            roll1 = get_random_number(families.length)
            family = obj[families[roll1]]
            roll2 = get_random_number(family.length)
            document.getElementById("elemental2_family").innerHTML = families[roll1]
            document.getElementById("elemental2_specific").innerHTML = family[roll1]
        }
        function roll_techne(){
            var obj = lookups["techne"]
            var families = Object.getOwnPropertyNames(obj)
            roll1 = get_random_number(families.length)
            family = obj[families[roll1]]
            roll2 = get_random_number(family.length)
            document.getElementById("techne1_family").innerHTML = families[roll1]
            document.getElementById("techne1_specific").innerHTML = family[roll1]
            roll1 = get_random_number(families.length)
            family = obj[families[roll1]]
            roll2 = get_random_number(family.length)
            document.getElementById("techne2_family").innerHTML = families[roll1]
            document.getElementById("techne2_specific").innerHTML = family[roll1]
        }

        function roll(){
            document.getElementById("s1").innerHTML = ""
            document.getElementById("s2").innerHTML = ""
            document.getElementById("s3").innerHTML = ""
            document.getElementById("s4").innerHTML = ""
            document.getElementById("s5").innerHTML = ""
            document.getElementById("s6").innerHTML = ""
            document.getElementById("s7").innerHTML = ""
            document.getElementById("s8").innerHTML = ""   
            roll_anima()
            roll_veggie()
            roll_elemental()
            roll_techne()
            roll1 = get_random_number(8)
            roll2 = get_random_number(8)
            while (roll1 == roll2){
                roll2 = get_random_number(8)
            }
            if (roll1 == 1 || roll2 == 1){
                document.getElementById("s1").innerHTML = "SELECTED"
            }
            if (roll1 == 2 || roll2 == 2){
                document.getElementById("s2").innerHTML = "SELECTED"
            }
            if (roll1 == 3 || roll2 == 3){
                document.getElementById("s3").innerHTML = "SELECTED"
            }
            if (roll1 == 4 || roll2 == 4){
                document.getElementById("s4").innerHTML = "SELECTED"
            }
            if (roll1 == 5 || roll2 == 5){
                document.getElementById("s5").innerHTML = "SELECTED"
            }
            if (roll1 == 6 || roll2 == 6){
                document.getElementById("s6").innerHTML = "SELECTED"
            }
            if (roll1 == 7 || roll2 == 7){
                document.getElementById("s7").innerHTML = "SELECTED"
            }
            if (roll1 == 8 || roll2 == 8){
                document.getElementById("s8").innerHTML = "SELECTED"
            }
            // document.getElementById("anima1_family").innerHTML = get_random_number(10)
            // document.getElementById("anima1_family").innerHTML=get_random_entry(anima);
            // document.getElementById("veggie1_family").innerHTML=get_random_entry(veggie);
            // document.getElementById("elemental1_family").innerHTML=get_random_entry(elemental);
            // document.getElementById("techne1_family").innerHTML=get_random_entry(techne);
            // document.getElementById("anima2_family").innerHTML=get_random_entry(anima);
            // document.getElementById("veggie2_family").innerHTML=get_random_entry(veggie);
            // document.getElementById("elemental2_family").innerHTML=get_random_entry(elemental);
            // document.getElementById("techne2_family").innerHTML=get_random_entry(techne);
        }
        document.getElementById("roll_btn").onclick = roll
    }

});

