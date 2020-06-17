function printFullName(firstName, lastName)
{console.log(firstName + " "+ lastName)}
printFullName("Amr", "Elsekilly");




/*function calculate_age(time) { 
    var now = Date.now () - time.getTime();
    var ageDate = new Date(now); 
  
    return Math.abs(ageDate.getFullYear() - 1970);
}

console.log(calculate_age(new Date(2000, 4, 30)));*/



function calculateAge (birthYear){
currentYear= new Date().getFullYear();
return currentYear -birthYear ;}

 console.log(calculateAge(1991));

 /*function capitalizeString(string){
    string =  string.charAt(0).toUpperCase() + string.slice(1);
    return string; }
    console.log(capitalizeString ("andrew sobhy!"));*/

    function capitalization(string){
       return string.toString().replace( /(^|\. *)([a-z])/g,function(match, separator, char) {
            return separator + char.toUpperCase();
        });                        }
       
    var str = "hello world. it's a lovely day. i should go out";
    console.log(capitalization(str));   




    function sevenBoom (array){
        if (array.includes(number=7) == true) {console.log ("Boom!");}
        else { console.log("there is no 7 in the array"); }
                             }
sevenBoom([1, 2, 3, 4, 5, 6, 7])  ; 
sevenBoom([8, 6, 33, 100]);
sevenBoom([99,97,98,55,]);





          function getDays (date1, date2) {
            first = new Date(date1);
            second = new Date(date2);
            return Math.floor((Date.UTC(second.getFullYear(), second.getMonth(), second.getDate()) 
            - Date.UTC(first.getFullYear(), first.getMonth(), first.getDate()) ) /(1000 * 60 * 60 * 24));
           }
    
            console.log(getDays('December 29, 2018', 'January 1, 2019'));



        


