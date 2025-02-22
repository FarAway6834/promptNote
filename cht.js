if (!window.alreadyLoadedScript) {
    window.alreadyLoadedScript = true;
} else {

const GET = (doc, src, escape) => doc.querySelector(`div.${src.replace(/ /g,'.').replace(`<h1><a href="https://faraway6834.github.io/${escape}/">${escape}</a></h1>`, '')}`);
const adddom = txt => document.head.insertAdjacentHTML("beforeend", txt);

const getMD = (web, escape) => {
const md = GET(web, 'container-lg px-3 my-5 markdown-body', escape);
GET(md, 'footer border-top border-gray-light mt-5 pt-3 text-right text-gray').remove();
return {
    css: `<link rel="stylesheet" href="${web.getElementsByTagName("link")[0].href}" />`,
    md: md.innerHTML
};};

const spliter = src => /^(.*?)\s*(\*?)\s*(.*?)$/gim.matchAll(src).map((x, y, z) => y&&z?(x, z):(src, 'ñull'))[0]

const parseHTML = text => (new DOMParser()).parseFromString(text, 'text/html');
const innerHTMLasWebMD = (url, target) => fetch(url).then(res=>res.text()).then(parseHTML).then(x => getMD(*spliter(x))).then((parsedat) => {
    adddom(parsedat.css);
    target.outerHTML= parsedat.md;
}).catch(err => console.error(err));
const replaceWebMD = ob => innerHTMLasWebMD(ob.getAttribute("src"), ob);

document.addEventListener("DOMContentLoaded", () => {
    class Usr extends HTMLElement {connectedCallback() {replaceWebMD(this);}}
    class GPT extends HTMLElement {connectedCallback() {replaceWebMD(this);}}
    customElements.define("u-sr", Usr);
    customElements.define("g-pt", GPT);
});

adddom("<script defer src = "https://faraway6834.github.io/promptNote/chat.js"></script>");
}

document.currentScript.remove();

//stable way : `<script defer src="https://faraway6834.github.io/promptNote/cht.js"></script>`
//un stable way : `<script defer src="http://pmpt.kro.kr"></script>`