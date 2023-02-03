// const messagesContainer = document.querySelector("#chat-messages");
// const messageInput = document.querySelector("#message-input");
// const sendButton = document.querySelector("#send-button");

// sendButton.addEventListener("click", () => {
//   const message = messageInput.value;
//   if (!message) return;

//   // Send the message to the server
//   // ...

//   // Clear the input
//   messageInput.value = "";
// });

// // Listen for messages from the server and add them to the chat messages
// // ...

// function addMessageToChat(message) {
//   const messageElement = document.createElement("div");
//   messageElement.innerText = message;
//   messagesContainer.appendChild(messageElement);
//   messagesContainer.scrollTop = messagesContainer.scrollHeight;
//   }
//   const chatContainer = document.querySelector(".chat-container");
// const userList = document.querySelector(".user-list");
// const userItems = document.querySelectorAll(".user-item");

// userItems.forEach(userItem => {
//   userItem.addEventListener("click", e => {
//     e.preventDefault();
//     const chatWindow = createChatWindow(userItem.textContent);
//     chatContainer.appendChild(chatWindow);
//   });
// });

// function createChatWindow(username) {
//   const chatWindow = document.createElement("div");
//   chatWindow.classList.add("chat-window");

//   const chatHeader = document.createElement("div");
//   chatHeader.classList.add("chat-header");
//   chatHeader.innerHTML = `<h2>Chat with ${username}</h2>
//                           <button class="close-button">&times;</button>`;

//   const chatBody = document.createElement("div");
//   chatBody.classList.add("chat-body");
//   chatBody.innerHTML = `<div class="chat-messages">
//                            <!-- messages will be dynamically added here -->
//                         </div>
//                         <div class="chat-input">
//                            <input type="text" class="message-input" placeholder="Type your message here">
//                            <button class="send-button">
//                              <i class="fas fa-paper-plane"></i>
//                            </button>
//                         </div>`;

//   chatWindow.appendChild(chatHeader);
//   chatWindow.appendChild(chatBody);

//   const closeButton = chatHeader.querySelector(".close-button");
//   closeButton.addEventListener("click", e => {
//     e.preventDefault();
//     chatWindow.remove();
//   });

//   return chatWindow;
// }

// Get login and register container elements
const loginContainer = document.querySelector('#login-container');
const registerContainer = document.querySelector('#register-container');

// Get register and login link elements
const registerLink = document.querySelector('#register-link');
const loginLink = document.querySelector('#login-link');

// Hide register container initially

registerContainer.style.display = 'none';

// Add click event listener to register link
registerLink.addEventListener('click', e => {
e.preventDefault();
loginContainer.style.display = 'none';
registerContainer.style.display = 'block';
});

// Add click event listener to login link
loginLink.addEventListener('click', e => {
e.preventDefault();
loginContainer.style.display = 'block';
registerContainer.style.display = 'none';
});


const loginLinknew = document.getElementById("login-link");
const registerLinknew = document.getElementById("register-link");
const loginContainernew = document.getElementById("login-container");
const registerContainernew = document.getElementById("register-container");

loginLinknew.addEventListener("click", function() {
    loginContainernew.classList.add("show");
    registerContainernew.classList.remove("show");
});

registerLinknew.addEventListener("click", function() {
    registerContainernew.classList.add("show");
  loginContainernew.classList.remove("show");
});


// const togglePassword = document.querySelector("#toggle-password");
// const password = document.querySelector("#password");

// togglePassword.addEventListener("change", function() {
//   if (togglePassword.checked) {
//     password.setAttribute("type", "text");
//   } else {
//     password.setAttribute("type", "password");
//   }
// });



const togglePassword = document.querySelector('#toggle-password');
const passwordInputs = document.querySelectorAll('input[type="password"]');
  
  togglePassword.addEventListener('change', function() {
    passwordInputs.forEach(input => {
      input.type = togglePassword.checked ? 'text' : 'password';
    });
  });

  const HideAndShow = document.querySelector('.HideAndShow');

  HideAndShow.addEventListener('click', function() {
    if (this.innerHTML === 'Show') {
       this.innerHTML = 'Hide';
    } else {
       this.innerHTML = 'Show';
    }
});
 
// const toggle = document.querySelector('#toggletheme');
// const body = document.querySelector('body');

// toggle.addEventListener('change', function() {
//   if (this.checked) {
//     body.style.backgroundColor = '#333';
//   } else {
//     body.style.backgroundColor = '#fff';
//   }
// });

const toggle = document.querySelector('#themetoggle');

toggle.addEventListener('change', function() {
  document.body.style.backgroundColor = this.checked ? '#333' : '#f2f2f2';
  document.querySelector(".to").style.color = this.checked ? 'white':'black';
});

