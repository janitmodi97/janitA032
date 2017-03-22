// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var message = 
                if(res.Student1_Name= Janit){
message+="Does he like Punjabi food?"
              if (true) {
                message += "  Pass";
              }
              else {
                message += " Fail";
              }
              else{
message+="Does he like Punjabi food?"
              if (false) {
                message += " Pass";
              }
              else {
                message += " Fail";
              }
              }
            }
             
              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  }
);
