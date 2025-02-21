document.head.innerHTML += '<link rel="stylesheet" href="https://FarAway6834.github.io/promptNote/chat.css"'>

document.addEventListener("DOMContentLoaded", () => {
    class Usr extends HTMLElement {
        connectedCallback() {
            this.outerHTML = `
                <div class="message-container right">
                    <div class="message right">${this.innerHTML}</div>
                    <img class="profile-img" src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png" alt="User">
                </div>
            `;
        }
    }
    
    class GPT extends HTMLElement {
        connectedCallback() {
            this.outerHTML = `
                <div class="message-container left">
                    <img class="profile-img" src="https://img.icons8.com/fluent/512/chatgpt--v2.png" alt="ChatGPT">
                    <div class="message left">${this.innerHTML}</div>
                </div>
            `;
        }
    }
    
    class Chat extends HTMLElement {
        connectedCallback() {
            const name = this.getAttribute("name") || "Chat";
            const placeholder = this.getAttribute("placeholder") || "Type a message...";
            const sendButton = this.getAttribute("send-button") || "Send";
            
            this.outerHTML = `
                <div class="chat-container">
                    <div class="chat-header">${name}</div>
                    <div class="chat-messages">${this.innerHTML}</div>
                    <div class="chat-input">
                        <input type="text" placeholder="${placeholder}">
                        <button disabled>${sendButton}</button>
                    </div>
                </div>
            `;
        }
    }
    
    customElements.define("u-sr", Usr);
    customElements.define("g-pt", GPT);
    customElements.define("c-hat", Chat);
});
