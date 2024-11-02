import{S as f,i as d}from"./assets/vendor-5ObWk2rO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const p="46858923-7c3fdcfc6a46f2062867c0871",m="https://pixabay.com/api/";async function y(t){const n=`${m}?key=${p}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const r=await(await fetch(n)).json();if(r.hits.length===0)throw new Error("No images found");return r.hits}catch(s){throw s}}let a;function g(t,n){const s=t.map(r=>`
      <a href="${r.largeImageURL}" class="gallery-item">
        <div class="image-card">
          <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
          <div class="info">
            <p><strong>Likes:</strong> ${r.likes}</p>
            <p><strong>Views:</strong> ${r.views}</p>
            <p><strong>Comments:</strong> ${r.comments}</p>
            <p><strong>Downloads:</strong> ${r.downloads}</p>
          </div>
        </div>
      </a>`).join("");n.innerHTML=s,a?a.refresh():a=new f(".gallery-item",{captionsData:"alt",captionDelay:250})}function c(t){d.error({title:"Error",message:t,position:"topRight"})}function h(t){t.innerHTML=""}const w=document.querySelector("#search-form"),l=document.querySelector(".gallery"),u=document.querySelector("#loader");w.addEventListener("submit",async t=>{t.preventDefault();const n=t.currentTarget.elements.searchQuery.value.trim();if(!n){c("Please enter a search term.");return}h(l),L();try{const s=await y(n);g(s,l)}catch{c("Sorry, there are no images matching your search query. Please try again!")}finally{$()}});function L(){u.style.display="block"}function $(){u.style.display="none"}
//# sourceMappingURL=index.js.map
