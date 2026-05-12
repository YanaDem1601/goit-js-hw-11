import{a as f,S as u,i as n}from"./assets/vendor-73qhTu8_.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const m="55821000-c477eb790cad5f38062000930",y="https://pixabay.com/api/";async function g(o){const s={key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12};try{return(await f.get(y,{params:s})).data}catch(e){throw console.error("Pixabay API error:",e),e}}const p=document.getElementById("gallery"),d=document.getElementById("loader-wrap");let h=new u(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});function v(o){const s=o.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}" class="gallery-link">
          <img 
            src="${e.webformatURL}" 
            alt="${e.tags}" 
            class="gallery-image"
            loading="lazy"
          />
        </a>
        <div class="info">
          <div class="info-item">
            <span class="info-label">Likes</span>
            <span class="info-value">${e.likes.toLocaleString()}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Views</span>
            <span class="info-value">${e.views.toLocaleString()}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Comments</span>
            <span class="info-value">${e.comments.toLocaleString()}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Downloads</span>
            <span class="info-value">${e.downloads.toLocaleString()}</span>
          </div>
        </div>
      </li>
    `).join("");p.innerHTML=s,h.refresh()}function L(){p.innerHTML=""}function w(){d.classList.add("show")}function l(){d.classList.remove("show")}const b=document.getElementById("search-form"),c=document.getElementById("search-input");b.addEventListener("submit",async o=>{o.preventDefault();const s=c.value.trim();if(s===""){n.error({title:"Error",message:"Please enter a search query!",position:"topRight"}),c.focus();return}L(),w();try{const e=await g(s);if(l(),e.hits.length===0){n.info({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(e.hits)}catch(e){l(),n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(e)}});
//# sourceMappingURL=index.js.map
