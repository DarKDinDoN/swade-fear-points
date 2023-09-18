!function(){"use strict";const e={MODULE_NAME:"swade-fear-points",MODULE_TITLE:"SWADE - Fear Points"};e.PATH=`modules/${e.MODULE_NAME}/`,foundry.utils.debounce((()=>window.location.reload()),500);const t="global-points",a="open-at-startup",n="player-visibility",i="characters-only",s="per-scene",o=()=>game.settings.get(e.MODULE_NAME,s),r=()=>o()?game.canvas.scene.getFlag(e.MODULE_NAME,t)??0:game.settings.get(e.MODULE_NAME,t),l=async a=>{o()?await game.canvas.scene.setFlag(e.MODULE_NAME,t,a):await game.settings.set(e.MODULE_NAME,t,a)},g=async()=>{const e=r()+1;await l(e)},c=async()=>{const e=r(),t=Math.max(e-1,0);await l(t)};class E extends Application{static initialize(){this.fearPointsDisplay=new E}static update(){this.fearPointsDisplay.update()}static render(){this.fearPointsDisplay.render(!0)}static get defaultOptions(){return mergeObject(super.defaultOptions,{id:"swade-fear-points-display",template:`${e.PATH}templates/fear-points-counter.hbs`,top:100,left:120,height:150,resizable:!1,popout:!1,title:game.i18n.localize(`${e.MODULE_NAME}.window-title`),background:"none"})}constructor(){super()}activateListeners(e){super.activateListeners(e);const t=e[0],a=t.querySelector(".fear-plus-button");a&&a.addEventListener("click",g);const n=t.querySelector(".fear-minus-button");n&&n.addEventListener("click",c)}getData(){return{fearPoints:r(),isGm:game.user.isGM}}update(){this.rendered&&this.render(!0)}}new class{constructor(){this.init()}init(){Hooks.once("init",(()=>{console.log(`${e.MODULE_TITLE} | Initializing module`),game.settings.register(e.MODULE_NAME,t,{scope:"world",config:!1,default:0,type:Number}),game.settings.register(e.MODULE_NAME,n,{name:game.i18n.localize(`${e.MODULE_NAME}.${n}-name`),hint:game.i18n.localize(`${e.MODULE_NAME}.${n}-hint`),scope:"world",config:!0,default:!0,type:Boolean,requiresReload:!0}),game.settings.register(e.MODULE_NAME,a,{name:game.i18n.localize(`${e.MODULE_NAME}.${a}-name`),hint:game.i18n.localize(`${e.MODULE_NAME}.${a}-hint`),scope:"world",config:!0,default:!1,type:Boolean}),game.settings.register(e.MODULE_NAME,i,{name:game.i18n.localize(`${e.MODULE_NAME}.${i}-name`),hint:game.i18n.localize(`${e.MODULE_NAME}.${i}-hint`),scope:"world",config:!0,default:!1,type:Boolean}),game.settings.register(e.MODULE_NAME,s,{name:game.i18n.localize(`${e.MODULE_NAME}.${s}-name`),hint:game.i18n.localize(`${e.MODULE_NAME}.${s}-hint`),scope:"world",config:!0,default:!1,type:Boolean}),E.initialize(),Hooks.once("ready",(()=>{game.canvas.scene&&game.settings.get(e.MODULE_NAME,a)&&(game.settings.get(e.MODULE_NAME,n)||game.user.isGM)&&E.render()})),Hooks.on("getSceneControlButtons",(t=>{(game.settings.get(e.MODULE_NAME,n)||game.user.isGM)&&t.find((e=>"token"==e.name)).tools.push({name:"fear-points",title:`${e.MODULE_NAME}.control-button-title`,icon:"fa-solid fa-face-scream",button:!0,onClick:()=>{E.render()}})})),Hooks.on("updateSetting",(a=>{a.key===`${e.MODULE_NAME}.${t}`&&(game.settings.get(e.MODULE_NAME,s)||E.update())})),Hooks.on("canvasReady",(()=>{game.settings.get(e.MODULE_NAME,s)&&E.update()})),Hooks.on("updateScene",((a,n)=>{foundry.utils.hasProperty(n,`flags.${e.MODULE_NAME}.${t}`)&&game.settings.get(e.MODULE_NAME,s)&&E.update()})),Hooks.on("swadePreRollAttribute",((t,a,n,s)=>{if("spirit"!==a)return;const o=r();o<1||game.settings.get(e.MODULE_NAME,i)&&"character"!==t.type||s.push({label:game.i18n.localize(`${e.MODULE_NAME}.modifier-label`),value:`- ${o}`,ignore:!1})}))}))}}}();