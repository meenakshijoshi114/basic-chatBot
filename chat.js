const input=document.querySelector("#user-input");
const btn=document.querySelector("#sendbtn");
const chatBox=document.querySelector("#chatbox");

btn.addEventListener("click",sendMessage);

function sendMessage(){
    const userMsg=input.value.trim();
    if(userMsg==="") return;
    chatBox.innerHTML+=`<p class="user">You:${userMsg}</p>`;

    const botReply=getBotReply(userMsg);

setTimeout(()=>{
    chatBox.innerHTML+=`<p class="bot">Bot:${botReply}</p>`;
    chatBox.scrollTop=chatBox.scrollHeight;
},500);

input.value="";
}

function getBotReply(msg){
    msg=msg.toLowerCase();
    if(msg.includes("hello")|| msg.includes("hi")){
return "Hi there! \n How can i assist you";
    }     
    else if(msg.includes("name")){
         return "I am a simple js bot \n How can i assist you";}
         else if(msg.includes("how are you")){
         return "I'm good\n how about you";
        }
          else if(msg.includes("i'm also doing good ")){
         return "Great! \n How can i assist you";
        }
    else if(msg.includes("bye")) {
        return "goodbye,TakeCare";
    }
    else {
        return "sorry,i didn't understand that."
    }
}