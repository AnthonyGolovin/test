// 1.Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
// 2.Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
// 3.Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."

var convertedNumbers;


 $(function() {
   $("form").click(function(event) {
   event.preventDefault();
   string = ($("#input1").val());
   console.log(string);

   for (var i = 0; i < string.length; i ++) {
    if (string[i].includes("3")) {
      string[i] = "I'm sorry, Dave. I'm afraid I can't do that.";
      console.log(string);
    } else if (string[i].includes("2") && !string.includes("3")) {
      string[i] = "Boop!";
    } else if (string[i].includes("1") && !string.includes("2") && !string.includes("3")) {
      string[i] = "Beep!";
   }
 }
 });


 });
