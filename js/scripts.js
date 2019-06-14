// 1.Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
// 2.Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
// 3.Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."


var stringArray = [];

 $(function() {
   $("form").click(function(event) {
   event.preventDefault();
   string = ($("#input1").val());
   for (var i = 0; i <= parseInt(string); i ++) {
     stringArray.push(i.toString() );
   }
     for (var i = 0; i < stringArray.length; i ++) {
        if (stringArray[i].includes("3")) {
          stringArray[i] = " ''I'm sorry, Dave. I'm afraid I can't do that.'' ";

        } else if (stringArray[i].includes("2") && !stringArray[i].includes("3")) {
          stringArray[i] = " ''Boop!'' ";

        } else if (stringArray[i].includes("1") && !stringArray[i].includes("2") && !stringArray[i].includes("3")) {
          stringArray[i] = " ''Beep!'' ";

        }
     }
      $("#output").text(stringArray);
      stringArray=[];
  });
.
 });
