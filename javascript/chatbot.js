 var count = 0;
 var canChat = 0;
 var responseNum = 0;
 var portNum = 0;
 var connectNum = 0;

var isStart=0;

 function loader() {
     var loadingTwo = document.createElement("div");
     document.getElementById("textarea_id").appendChild(loadingTwo);
     loadingTwo.id = "loadingMessage";
     var botMessageTwo = document.createElement("ul");
     botMessageTwo.id = "botmessage";
     document.getElementById("loadingMessage").appendChild(botMessageTwo);
     var chatMessageTwo = document.createElement("li");
     var chatMessageTwo2 = document.createElement("li");
     var chatMessageTwo3 = document.createElement("li");
     botMessageTwo.appendChild(chatMessageTwo);
     botMessageTwo.appendChild(chatMessageTwo2);
     botMessageTwo.appendChild(chatMessageTwo3);
 }

function chatappStart(){
    if(isStart==0){
        isStart=1;
        chatapp();
     
    }
    
}
 function chatapp() {
     
     if (canChat == 0) {
         document.getElementById("textbox").disabled = true;
     }
     var textarea = document.getElementById('textarea_id');
     var botMessages = document.getElementById("botmessage");
     var textbox = document.getElementById("textbox");
     var button = document.getElementById("button");
     loader();
     setTimeout(function () {
         document.getElementById("loadingMessage").remove();
         var newBMessage = document.createElement("ul");
         newBMessage.id = "botmessage2";
         document.getElementById("textarea_id").appendChild(newBMessage);
         var bMessage = document.createElement("li");
         bMessage.innerHTML = "Hi, Welcome to my site!";
         newBMessage.appendChild(bMessage);
         setTimeout(function () {
             canChat = 1;
             loader();
             setTimeout(function () {
                 document.getElementById("textbox").disabled = false;
                 document.getElementById("loadingMessage").remove();
                 var newBMessage = document.createElement("ul");
                 newBMessage.id = "botmessage2";
                 document.getElementById("textarea_id").appendChild(newBMessage);
                 var bMessage = document.createElement("li");
                 bMessage.innerHTML = "What's your name?";
                 newBMessage.appendChild(bMessage);
                 //CREATING USER MESSAGE
                 var userMessage = document.createElement("ul");
                 userMessage.id = "messages";
                 document.getElementById("textarea_id").appendChild(userMessage);
                 var messages = document.getElementById("messages");
                 //END
                 responseNum = 1;
             }, 2000);
         }, 800);
     }, 2000);
     button.addEventListener("click", function () {
         chatReady();
     });
     textbox.addEventListener("keyup", function (event) {
         event.preventDefault();
         if (event.keyCode === 13) {
             chatReady();
         }
     });
 }

 function chatReady() {
     var textarea = document.getElementById('textarea_id');
     var loadingMessages = document.getElementById("loadingmessage");
     var botMessages = document.getElementById("botmessage");
     var textbox = document.getElementById("textbox");
     var button = document.getElementById("button");
     var newMessage = document.createElement("li");
     if (textbox.value != "") {
         newMessage.innerHTML = textbox.value;
         messages.appendChild(newMessage);
         textbox.value = "";
         textarea.scrollTop = textarea.scrollHeight;
         var userInput = textbox.value;
         if (responseNum == 1) {
             document.getElementById("textbox").disabled = true;
             setTimeout(function () {
                 loader();
                 textarea.scrollTop = textarea.scrollHeight;
                 setTimeout(function () {
                     document.getElementById("loadingMessage").remove();
                     var newBMessage = document.createElement("ul");
                     newBMessage.id = "botmessage2";
                     document.getElementById("textarea_id").appendChild(newBMessage);
                     var bMessage = document.createElement("li");
                     bMessage.innerHTML = "Hi " + newMessage.innerHTML;
                     newBMessage.appendChild(bMessage);
                     textarea.scrollTop = textarea.scrollHeight;
                     //CREATING USER MESSAGE
                     var userMessage = document.createElement("ul");
                     userMessage.id = "messages";
                     document.getElementById("textarea_id").appendChild(userMessage);
                     var messages = document.getElementById("messages");
                     //END
                     setTimeout(function () {
                         canChat = 1;
                         loader();
                         textarea.scrollTop = textarea.scrollHeight;
                         setTimeout(function () {
                             document.getElementById("textbox").disabled = true;
                             document.getElementById("loadingMessage").remove();
                             var newBMessage = document.createElement("ul");
                             newBMessage.id = "botmessage2";
                             document.getElementById("textarea_id").appendChild(newBMessage);
                             var bMessage = document.createElement("li");
                             bMessage.innerHTML = "It's a pleasure to meet you";
                             newBMessage.appendChild(bMessage);
                             textarea.scrollTop = textarea.scrollHeight;
                             //CREATING USER MESSAGE
                             var userMessage = document.createElement("ul");
                             userMessage.id = "messages";
                             document.getElementById("textarea_id").appendChild(userMessage);
                             var messages = document.getElementById("messages");
                             setTimeout(function () {
                                 canChat = 1;
                                 loader();
                                 textarea.scrollTop = textarea.scrollHeight;
                                 setTimeout(function () {
                                     document.getElementById("textbox").disabled = true;
                                     document.getElementById("loadingMessage").remove();
                                     var options = document.createElement("div");
                                     document.getElementById("textarea_id").appendChild(options);
                                     options.id = "optionMessage";
                                     var botMessageTwo = document.createElement("ul");
                                     botMessageTwo.id = "botOption";
                                     document.getElementById("optionMessage").appendChild(botMessageTwo);
                                     var chatMessageTwo = document.createElement("li");
                                     var chatMessageTwo2 = document.createElement("li");
                                     var chatMessageTwo3 = document.createElement("li");
                                     var radioLabel1 = document.createElement("label");
                                     var radioLabel2 = document.createElement("label");
                                     radioLabel1.id = "imgLabel2";
                                     radioLabel2.id = "imgLabel2";
                                     chatMessageTwo3.id = "cMTRadio2";
                                     chatMessageTwo2.id = "cMTRadio";
                                     chatMessageTwo.innerHTML = "Would you like to";
                                     var chatRadio1 = document.createElement("input");
                                     var chatRadio2 = document.createElement("input");
                                     chatRadio1.setAttribute('type', "radio")
                                     chatRadio2.setAttribute('type', "radio")
                                     chatRadio1.setAttribute('name', "radio1");
                                     chatRadio2.setAttribute('name', "radio2");
                                     chatRadio1.setAttribute('value', "Portfolio");
                                     chatRadio2.setAttribute('value', "Connect");
                                     chatRadio1.setAttribute('onclick', "radioOption(1)");
                                     chatRadio2.setAttribute('onclick', "radioOption(2)");
                                     //chatRadio1.setAttribute('checked',"checked");
                                     radioLabel1.appendChild(chatRadio1);
                                     radioLabel2.appendChild(chatRadio2);
                                     radioLabel1.innerHTML += " View my Portfolio";
                                     radioLabel2.innerHTML += " Connect with me";
                                     chatMessageTwo2.appendChild(radioLabel1);
                                     chatMessageTwo3.appendChild(radioLabel2);
                                     botMessageTwo.appendChild(chatMessageTwo);
                                     botMessageTwo.appendChild(chatMessageTwo2);
                                     botMessageTwo.appendChild(chatMessageTwo3);
                                     textarea.scrollTop = textarea.scrollHeight;
                                     ////CREATING USER MESSAGE////////
                                     var userMessage = document.createElement("ul");
                                     userMessage.id = "messages";
                                     document.getElementById("textarea_id").appendChild(userMessage);
                                     var messages = document.getElementById("messages");
                                 }, 2000);
                             }, 800);

                         }, 2000);
                     }, 800);

                 }, 2000);
             }, 800);

         }
     }
 }

 function radioOption(optionNum) {
     var textarea = document.getElementById('textarea_id');
     if (optionNum == 1 && portNum == 0) {
         portNum = 1;
         connectNum = 1;
         var userMessage = document.createElement("ul");
         userMessage.id = "messages";
         document.getElementById("textarea_id").appendChild(userMessage);
         var messages = document.getElementById("messages");
         var preDeterminedMessage1 = document.createElement("li");
         preDeterminedMessage1.innerHTML = "View my Portfolio";
         userMessage.appendChild(preDeterminedMessage1);
         textarea.scrollTop = textarea.scrollHeight;
         setTimeout(function () {
             loader();
             textarea.scrollTop = textarea.scrollHeight;
             setTimeout(function () {
                 document.getElementById("loadingMessage").remove();
                 var newBMessage = document.createElement("ul");
                 newBMessage.id = "botmessage2";
                 document.getElementById("textarea_id").appendChild(newBMessage);
                 var bMessage = document.createElement("li");
                 bMessage.innerHTML = "Great!";
                 newBMessage.appendChild(bMessage);
                 textarea.scrollTop = textarea.scrollHeight;
                 setTimeout(function () {
                     loader();
                     textarea.scrollTop = textarea.scrollHeight;
                     setTimeout(function () {
                         document.getElementById("textbox").disabled = true;
                         document.getElementById("loadingMessage").remove();
                         var options2 = document.createElement("div");
                         document.getElementById("textarea_id").appendChild(options2);
                         options2.id = "option2Message";
                         var botMessageTwo = document.createElement("ul");
                         botMessageTwo.id = "botOption";
                         document.getElementById("option2Message").appendChild(botMessageTwo);
                         var chatMessageTwo = document.createElement("li");
                         var chatMessageTwo2 = document.createElement("li");
                         var chatMessageTwo3 = document.createElement("li");
                         var link1 = document.createElement("a");
                         link1.setAttribute('href', "resume.html");
                         var link2 = document.createElement("a");
                         link2.setAttribute('href', "projects.html");
                         var imgLabel1 = document.createElement("label");
                         var imgLabel2 = document.createElement("label");
                         chatMessageTwo2.id = "imgElement1";
                         chatMessageTwo3.id = "imgElement2";
                         chatMessageTwo.innerHTML = "You can check my";
                         var image1 = document.createElement("img");
                         image1.setAttribute('src', "../images/chatbot/resume.png");
                         image1.setAttribute('alt', "na");
                         image1.style.width = '60px';
                         image1.style.height = '50px';
                         var image2 = document.createElement("img");
                         image2.setAttribute('src', "../images/chatbot/project.png");
                         image2.style.width = '60px';
                         image2.style.height = '60px';
                         chatMessageTwo2.appendChild(link1);
                         chatMessageTwo3.appendChild(link2);
                         link1.appendChild(imgLabel1);
                         link2.appendChild(imgLabel2);
                         imgLabel1.appendChild(image1);
                         imgLabel2.appendChild(image2);
                         imgLabel1.id = "imgLabel";
                         imgLabel2.id = "imgLabel";
                         imgLabel1.innerHTML += " Resume";
                         imgLabel2.innerHTML += " Projects";
                         botMessageTwo.appendChild(chatMessageTwo);
                         botMessageTwo.appendChild(chatMessageTwo2);
                         botMessageTwo.appendChild(chatMessageTwo3);
                         textarea.scrollTop = textarea.scrollHeight;
                     }, 2000);
                 }, 800);

             }, 2000);
         }, 800);
     }
     if (optionNum == 2 && connectNum == 0) {
         portNum = 1;
         connectNum = 1;
         var userMessage = document.createElement("ul");
         userMessage.id = "messages";
         document.getElementById("textarea_id").appendChild(userMessage);
         var messages = document.getElementById("messages");
         var preDeterminedMessage1 = document.createElement("li");
         preDeterminedMessage1.innerHTML = "Connect with me";
         userMessage.appendChild(preDeterminedMessage1);
         textarea.scrollTop = textarea.scrollHeight;
         setTimeout(function () {
             loader();
             textarea.scrollTop = textarea.scrollHeight;
             setTimeout(function () {
                 document.getElementById("loadingMessage").remove();
                 var newBMessage = document.createElement("ul");
                 newBMessage.id = "botmessage2";
                 document.getElementById("textarea_id").appendChild(newBMessage);
                 var bMessage = document.createElement("li");
                 bMessage.innerHTML = "Great!";
                 newBMessage.appendChild(bMessage);
                 textarea.scrollTop = textarea.scrollHeight;
                 setTimeout(function () {
                     loader();
                     textarea.scrollTop = textarea.scrollHeight;
                     setTimeout(function () {
                         document.getElementById("textbox").disabled = true;
                         document.getElementById("loadingMessage").remove();
                         var options2 = document.createElement("div");
                         document.getElementById("textarea_id").appendChild(options2);
                         options2.id = "option2Message";
                         var botMessageTwo = document.createElement("ul");
                         botMessageTwo.id = "botOption";
                         document.getElementById("option2Message").appendChild(botMessageTwo);
                         var chatMessageTwo = document.createElement("li");
                         var chatMessageTwo2 = document.createElement("li");
                         var chatMessageTwo3 = document.createElement("li");
                         var chatMessageTwo4 = document.createElement("li");
                         var link1 = document.createElement("a");
                         link1.setAttribute('href', "resume.html");
                         var link2 = document.createElement("a");
                         link2.setAttribute('href', "https://www.youtube.com/channel/UC9AcLvZJESt1H7DqJVFaAog");
                         var link3 = document.createElement("a");
                         link3.setAttribute('href', "https://linkedin.com");
                         var imgLabel1 = document.createElement("label");
                         var imgLabel2 = document.createElement("label");
                         var imgLabel3 = document.createElement("label");
                         chatMessageTwo2.id = "imgElement1";
                         chatMessageTwo3.id = "imgElement2";
                         chatMessageTwo4.id = "imgElement3";
                         chatMessageTwo.innerHTML = "You can check my";
                         var image1 = document.createElement("img");
                         image1.setAttribute('src', "../images/chatbot/github.png");
                         image1.setAttribute('alt', "na");
                         image1.style.width = '60px';
                         image1.style.height = '60px';
                         var image2 = document.createElement("img");
                         image2.setAttribute('src', "../images/chatbot/youtube.png");
                         image2.style.width = '60px';
                         image2.style.height = '60px';
                         var image3 = document.createElement("img");
                         image3.setAttribute('src', "../images/chatbot/linkedin.png");
                         image3.style.width = '60px';
                         image3.style.height = '60px';
                         chatMessageTwo2.appendChild(link1);
                         chatMessageTwo3.appendChild(link2);
                         chatMessageTwo4.appendChild(link3);
                         link1.appendChild(imgLabel1);
                         link2.appendChild(imgLabel2);
                         link3.appendChild(imgLabel3);
                         imgLabel1.appendChild(image1);
                         imgLabel2.appendChild(image2);
                         imgLabel3.appendChild(image3);
                         imgLabel1.innerHTML += " GitHub";
                         imgLabel2.innerHTML += " YouTube";
                         imgLabel3.innerHTML += " LinkedIn";
                         imgLabel1.id = "imgLabel";
                         imgLabel2.id = "imgLabel";
                         imgLabel3.id = "imgLabel";
                         botMessageTwo.appendChild(chatMessageTwo);
                         botMessageTwo.appendChild(chatMessageTwo2);
                         botMessageTwo.appendChild(chatMessageTwo3);
                         botMessageTwo.appendChild(chatMessageTwo4);
                         textarea.scrollTop = textarea.scrollHeight;
                     }, 2000);
                 }, 800);

             }, 2000);
         }, 800);

     }
 }