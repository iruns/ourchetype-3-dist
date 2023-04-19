import{_ as v,S as f}from"./PageContainer.vue_vue_type_style_index_0_lang-4c48ec08.js";import{d as k,a1 as a,e as b,f as w,r as u,W as x,o as d,m as p,w as _,u as t,b as i,t as m,h as y,g as B,Y as I,Z as N,p as j,a as Y,_ as z}from"./base-1a37461c.js";import"./index-201b4742.js";import"./images-5702e0d1.js";import"./archetype-82cba3d4.js";const g=n=>(j("data-v-0f8a23d1"),n=n(),Y(),n),C=g(()=>i("div",null,null,-1)),M=g(()=>i("div",{class:"divider"},null,-1)),P=k({__name:"ToNextAreaPage",props:{area:{default:a.Persona}},setup(n){const h=n,c=b(),S=w(()=>!!c.bgSetting.bg);let s=u({name:"welcome"}),r=u(""),o=u(""),l=u(-1);const e={};switch(h.area){case a.Intro:s.value.name="intro-to-next-area",e.headerY=.5,e.logoSize=.5,r.value=`Silakan menuju
ke tempat pembelian
tiket

HTM:
weekday 15K
weekend 20K`,o.value=`Ikuti jalur
berwarna Kuning
di lantai`,e.headerY=.5,e.logoSize=.5,l.value=0;break;case a.Persona:s.value.name=a.Shadow+"-passcode",r.value=`Menuju
Ruang Bias`,o.value=`Ikuti jalur
berwarna Merah
di lantai`,e.headerY=.5,e.logoSize=.5,l.value=1;break;case a.Shadow:s.value.name=a.Self+"-passcode",r.value=`Selesai
Ruang Bias`,o.value=`Masuk ke
Ruang Cahaya`,e.bg="dark",e.logoSize=1;break;case a.Self:s.value.name="graph-instructions",r.value=`Selesai
Ruang Cahaya`,o.value=`Ikuti jalur
berwarna Biru di
lantai menuju hasil
Ourchetype-mu`,e.headerY=.5,e.logoSize=.5,l.value=2;break}return x(()=>{c.setBGSetting(e)}),(T,A)=>(d(),p(v,{"inner-class":{"to-next-area full-width center-col under-header":!0,dark:t(S)}},{default:_(()=>[C,i("p",null,m(t(r)),1),M,i("p",null,m(t(o)),1),t(l)>-1?(d(),p(f,{key:0,class:"path",src:"paths.webp",alt:"Warna garis","x-sprites":1,y:t(l)},null,8,["y"])):y("",!0),B(N,{to:t(s)},{default:_(()=>[I("Sampai")]),_:1},8,["to"])]),_:1},8,["inner-class"]))}});const G=z(P,[["__scopeId","data-v-0f8a23d1"]]);export{G as default};
