function createMessage() {
    var newDiv = document.createElement("div");
    var messageText = document.getElementById("message").value
newDiv.innerHTML= `
<div class="message-row you-message">
                  <div class="message-content">
                      <div class="message-text">` + messageText + `</div>
                      <div class="message-time">Apr 13 at 7:01 PM</div>
                  </div>
              </div>
`
document.getElementById("chat-message-list").prepend(0,newDiv);
}

