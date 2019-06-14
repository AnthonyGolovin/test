// 1.Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
// 2.Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
// 3.Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."

var convertedNumbers;
var stringArray = [];

 $(function() {
   $("form").click(function(event) {
   event.preventDefault();
   string = ($("#input1").val());
   console.log(string);
   var stringArray = string.split("");
   for (var i = 0; i < stringArray.length; i ++) {
    if (stringArray[i].includes("3")) {
      stringArray[i] = "I'm sorry, Dave. I'm afraid I can't do that.";
      console.log(stringArray);
    } else if (stringArray[i].includes("2")) {
      stringArray[i] = "Boop!";
    }
      else if (stringArray[i].includes("1")) {
      stringArray[i] = "Beep!";
   }
 });


 });
