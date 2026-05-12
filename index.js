import{S as d,i as u}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();function p(s){return Promise.reject(new Error("MISSING_API_KEY"))}const o=document.querySelector(".gallery"),c=document.querySelector(".loader-wrap");let a=null;function h(s){const{webformatURL:i,largeImageURL:l,tags:t="",likes:e=0,views:r=0,comments:n=0,downloads:g=0}=s,m=String(t).slice(0,200);return` 
    <li class="gallery__item">
        <a class="gallery__link" href="${l}" title="${m}">
          <img
            class="gallery__image"
            src="${i}"
            alt="${m}" 
            loading="lazy" 
            width="640" 
            height="360" 
            />
          <div class="gallery__info">
            <span class="gallery__info-item">${e}</span>
            <span class="gallery__info-item">${r}</span>
            <span class="gallery__info-item">${n}</span>
            <span class="gallery__info-item">${g}</span>
          </div>
        </a>
    </li>`}function _(s){if(!o)return;if(!Array.isArray(s)||s.length===0){o.innerHTML="",a==null||a.refresh();return}const i=s.map(h).join("");o.innerHTML=i,a?a.refresh():a=new d(".gallery a",{captionsData:"title",captionDelay:250})}function P(){o&&(o.innerHTML="")}function I(){c&&c.classList.remove("is-hidden")}function y(){c&&c.classList.add("is-hidden")}const f=document.querySelector(".form");function S(s){s.preventDefault();const i=f.querySelector("input[name='search-text']");i&&i.value.trim()&&(I(),P(),p().then(t=>{if(y(),!t||!Array.isArray(t.hits)){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3});return}if(t.hits.length===0){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3});return}_(t.hits)}).catch(t=>{var r,n;y();let e="Something went wrong. Please try again.";t.message==="MISSING_API_KEY"?e="Pixabay API key is missing. Create .env and add VITE_PIXABAY_API_KEY=your_key (get key: https://pixabay.com/api/docs/)":((r=t.response)==null?void 0:r.status)===429?e="Too many requests. Please wait and try again later.":((n=t.response)==null?void 0:n.status)===400?e="Invalid request (e.g. missing API key). Check .env and VITE_PIXABAY_API_KEY.":t.message&&(e=t.message),u.error({title:"Error",message:e,position:"topRight",timeout:5e3})}))}f&&f.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
