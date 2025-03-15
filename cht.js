if (window.alreadyLoadedScript !== true) {
    window.alreadyLoadedScript = true;
} else {

    const hostername = window.location.hostname.split()[-3];
    const GETs_thatURL = escape => `<h1><a href="https://${hostername}.github.io/${escape}/">${escape}</a></h1>`;
    /*const GETs_req_resrc__spacereg = / /g;
    const GETs_req_resrc__dotstr = '.';*/
    const GETs_req_resrc__emptystr = '';
    /*const GETs_core = (src, escape) => src.replace(GETs_req_resrc__spacereg,GETs_req_resrc__dotstr).replace(GETs_thatURL(escape),GETs_req_resrc__emptystr);
    const GET = (doc, src, escape) => doc.querySelector(`div.${GETs_core(src, escape)}`);*/
    const adddom = txt => document.head.insertAdjacentHTML("beforeend", txt); //summary : append element to header

    const getMD = (web, escape) => {
        /*const md = GET(
            web,
            'container-lg px-3 my-5 markdown-body',
            escape
        );
        GET(
            md,
           'footer border-top border-gray-light mt-5 pt-3 text-right text-gray'
        ).remove();*/
        const md = web.querySelector('container-lg px-3 my-5 markdown-body');
        md.querySelector('footer border-top border-gray-light mt-5 pt-3 text-right text-gray').remove();
        md.innerHTML = md.innerHTML.replace(GETs_thatURL(escape), GETs_req_resrc__emptystr);
        return {
            css: `<link rel="stylesheet" href="${web.getElementsByTagName("link")[0].href}" />`,
            md: md.innerHTML
        };
    };

    const spliter = src => [...src.matchAll(/^(.*?)\s*(\*?)\s*(.*?)$/gim)].map(([all, x, y, z]) => y!==''&&z!==''?[x, z]:[src, 'ñull'])[0]

    const parseHTML = text => (new DOMParser()).parseFromString(text, 'text/html'); //vervatim - complete
    const getextbyres = res => res.text(); //+1 4 next
    const parseData = x => getMD(...spliter(x)); //+2 4 next
    const errRaise = err => console.error(err);
    //url is src attribute, target is element
    const innerHTMLasWebMD = (url, target) => fetch(url).then(getextbyres).then(parseHTML).then(parseData).then((parsedat) => {
    adddom(parsedat.css); //dose this registering is works?
    target.outerHTML= parsedat.md; //might be work
}).catch(errRaise);
    const replaceWebMD = ob => innerHTMLasWebMD(ob.getAttribute("src"), ob);

    document.addEventListener("DOMContentLoaded", () => {
        class Usr extends HTMLElement {
            connectedCallback() {
                replaceWebMD(this);
            }
        }
        class GPT extends HTMLElement {
            connectedCallback() {
                replaceWebMD(this);
            }
         }
        customElements.define("u-sr", Usr);
        customElements.define("g-pt", GPT);
    });

    adddom("<script defer src = "https://faraway6834.github.io/promptNote/chat.js"></script>");
}

document.currentScript.remove();

//stable way : `<script defer src="https://faraway6834.github.io/promptNote/cht.js"></script>`
//un stable way : `<script defer src="http://pmpt.kro.kr"></script>`