import{c as l,d as u,a as d,b as a,t as c,o as f,e as m}from"./vendor.74a0e6a0.js";const p=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};p();const g={title:"Vite + vue",button:"increment",counter:{desc:"count is {count}"}};var v={main:g},y=l({locale:navigator.language,messages:{en:v},fallbackLocale:{default:["en"]}}),h=(n,o)=>{for(const[s,r]of o)n[s]=r;return n};const b=u({name:"App",components:{},data(){return{count:0}},methods:{increment(){this.count+=1}}});function $(n,o,s,r,e,t){return f(),d("div",null,[a("h1",null,c(n.$t("main.title")),1),a("h2",null,c(n.$t("main.counter.desc",n.count)),1),a("button",{onClick:o[0]||(o[0]=(...i)=>n.increment&&n.increment(...i))},c(n.$t("main.button")),1)])}var L=h(b,[["render",$]]);m(L).use(y).mount("#app");
