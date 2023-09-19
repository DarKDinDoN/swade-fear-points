!function(){"use strict";const e={MODULE_NAME:"swade-fear-points",MODULE_TITLE:"SWADE - Fear Points"};e.PATH=`modules/${e.MODULE_NAME}/`;const t=foundry.utils.debounce((()=>window.location.reload()),500),a="global-points",n="open-at-startup",i="player-visibility",s="characters-only",o="per-scene",r=()=>game.settings.get(e.MODULE_NAME,o),l=()=>r()?game.canvas.scene.getFlag(e.MODULE_NAME,a)??0:game.settings.get(e.MODULE_NAME,a),g=async t=>{r()?await game.canvas.scene.setFlag(e.MODULE_NAME,a,t):await game.settings.set(e.MODULE_NAME,a,t)},c=async()=>{const e=l()+1;await g(e)},E=async()=>{const e=l(),t=Math.max(e-1,0);await g(t)};class M extends Application{static initialize(){this.fearPointsDisplay=new M}static update(){this.fearPointsDisplay.update()}static render(){this.fearPointsDisplay.render(!0)}static get defaultOptions(){return mergeObject(super.defaultOptions,{id:"swade-fear-points-display",template:`${e.PATH}templates/fear-points-counter.hbs`,top:100,left:120,height:150,resizable:!1,popout:!1,title:game.i18n.localize(`${e.MODULE_NAME}.window-title`),background:"none"})}constructor(){super()}activateListeners(e){super.activateListeners(e);const t=e[0],a=t.querySelector(".fear-plus-button");a&&a.addEventListener("click",c);const n=t.querySelector(".fear-minus-button");n&&n.addEventListener("click",E)}getData(){return{fearPoints:l(),isGm:game.user.isGM}}update(){this.rendered&&this.render(!0)}}new class{constructor(){this.init()}init(){Hooks.once("init",(()=>{console.log(`${e.MODULE_TITLE} | Initializing module`),game.settings.register(e.MODULE_NAME,a,{scope:"world",config:!1,default:0,type:Number}),game.settings.register(e.MODULE_NAME,i,{name:game.i18n.localize(`${e.MODULE_NAME}.${i}-name`),hint:game.i18n.localize(`${e.MODULE_NAME}.${i}-hint`),scope:"world",config:!0,default:!0,type:Boolean,onChange:()=>game.users.current.isGM?null:t()}),game.settings.register(e.MODULE_NAME,n,{name:game.i18n.localize(`${e.MODULE_NAME}.${n}-name`),hint:game.i18n.localize(`${e.MODULE_NAME}.${n}-hint`),scope:"world",config:!0,default:!1,type:Boolean}),game.settings.register(e.MODULE_NAME,s,{name:game.i18n.localize(`${e.MODULE_NAME}.${s}-name`),hint:game.i18n.localize(`${e.MODULE_NAME}.${s}-hint`),scope:"world",config:!0,default:!1,type:Boolean}),game.settings.register(e.MODULE_NAME,o,{name:game.i18n.localize(`${e.MODULE_NAME}.${o}-name`),hint:game.i18n.localize(`${e.MODULE_NAME}.${o}-hint`),scope:"world",config:!0,default:!1,type:Boolean,onChange:()=>M.update()}),M.initialize(),Hooks.once("ready",(()=>{game.canvas.scene&&game.settings.get(e.MODULE_NAME,n)&&(game.settings.get(e.MODULE_NAME,i)||game.user.isGM)&&M.render()})),Hooks.on("getSceneControlButtons",(t=>{(game.settings.get(e.MODULE_NAME,i)||game.user.isGM)&&t.find((e=>"token"==e.name)).tools.push({name:"fear-points",title:`${e.MODULE_NAME}.control-button-title`,icon:"fa-solid fa-face-scream",button:!0,onClick:()=>{M.render()}})})),Hooks.on("updateSetting",(t=>{t.key===`${e.MODULE_NAME}.${a}`&&(game.settings.get(e.MODULE_NAME,o)||M.update())})),Hooks.on("canvasReady",(()=>{game.settings.get(e.MODULE_NAME,o)&&M.update()})),Hooks.on("updateScene",((t,n)=>{foundry.utils.hasProperty(n,`flags.${e.MODULE_NAME}.${a}`)&&game.settings.get(e.MODULE_NAME,o)&&M.update()})),Hooks.on("swadePreRollAttribute",((t,a,n,i)=>{if("spirit"!==a)return;const o=l();o<1||game.settings.get(e.MODULE_NAME,s)&&"character"!==t.type||i.push({label:game.i18n.localize(`${e.MODULE_NAME}.modifier-label`),value:`- ${o}`,ignore:!1})}))}))}}}();