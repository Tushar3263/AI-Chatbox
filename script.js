let prompt=document.querySelector("#prompt")
let btn=document.querySelector("#btn")
let chatContainer=document.querySelector(".chat-container")
let userMessage=null;

function createChatBox(html,className){
let div=document.createElement("div")
div.classList.add=(className)
div.innerHTML=html
return div
}

btn.addEventListener("click",()=>{
    userMessage=prompt.value
    if(!userMessage)return;
    let html=`<div class="img">
                <img src="/images/user.png" alt="" width="50">
            </div>
            <p class="text"></p>`;
    let userChatBox=createChatBox(html,"user-chat-box")
    userChatBox.querySelector(".text").innerText=userMessage
    chatContainer.appendChild(userChatBox)
    prompt.value=""
})