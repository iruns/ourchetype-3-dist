import{d as j,f as i,a4 as T,o as p,c as v,b as o,g as I,u as c,w as q,Y as z,Z as F,F as $,s as K,j as O,t as A,e as Q,r as C,l as ee,W as te,n as R,a5 as se,m as ae,h as ne,p as re,a as oe,V as ce,_ as le}from"./base-1a37461c.js";import{r as f}from"./index-201b4742.js";import{S as ie,_ as ue}from"./PageContainer.vue_vue_type_style_index_0_lang-4c48ec08.js";import{a as pe}from"./personaAnswerSets-ac915f33.js";import{a as V,b as he}from"./archetypes-092167bb.js";import"./images-5702e0d1.js";import"./archetype-82cba3d4.js";var d=(a=>(a[a.Biasanya=0]="Biasanya",a[a.Penting=1]="Penting",a[a.Menyenangkan=2]="Menyenangkan",a[a.Krisis=3]="Krisis",a[a.TidakDitolerir=4]="TidakDitolerir",a))(d||{});const fe=[{type:d.Biasanya,x:0,y:0},{type:d.Penting,x:1,y:0},{type:d.Menyenangkan,x:0,y:1},{type:d.Krisis,x:1,y:1},{type:d.TidakDitolerir,x:0,y:2}],Y={};fe.forEach(a=>Y[a.type]=a);const G=[{until:5,focusBetween:12,contrastMult:-1},{until:8,focusBetween:6,contrastMult:0},{until:1/0,focusBetween:3,contrastMult:1}],L=10,de=""+new URL("persona-answers-5f4217e2.webp",import.meta.url).href,ve={class:"question-sign"},Se=o("p",{class:"instruction"},A(`Lihat pertanyaan
di bentuk ini`),-1),ge={class:"shape"},me={class:"answers"},_e=o("img",{class:"circles",src:de},null,-1),ye={class:"texts"},xe=["onClick"],we=j({__name:"PersonaStepSet",props:{historyStep:null,idxOffset:{default:0},stepState:{default:"question"},onNext:{type:Function,default:()=>{}},onSelect:null,isLast:{type:Boolean,default:!1}},setup(a){const S=a,g=i(()=>Y[S.historyStep.answerSet.question]),l=i(()=>T([...S.historyStep.answerSet.answers]));return(r,m)=>(p(),v("div",{class:O(["step-set",a.idxOffset?a.idxOffset==1?"next-1 question-state":a.idxOffset==-1?"prev-1 answers-state":!1:"active "+a.stepState+"-state",a.isLast?"last":""])},[o("div",ve,[Se,o("div",ge,[I(ie,{src:"persona-shapes.webp","x-sprites":2,"y-sprites":3,x:c(g).x,y:c(g).y},null,8,["x","y"])]),I(F,{class:"cta",onClick:a.onNext},{default:q(()=>[z(" Lanjut ")]),_:1},8,["onClick"])]),o("div",me,[_e,o("div",ye,[(p(!0),v($,null,K(c(l),(B,k)=>(p(),v("div",{key:k,class:O(["answer",k%2==0?"even":"odd"])},[o("p",{onClick:_=>a.onSelect(B)},A(B.text),9,xe)],2))),128))])])],2))}});const Ae=a=>(re("data-v-3587c464"),a=a(),oe(),a),Be={class:"persona-answers"},ke={class:"number current"},be={class:"current"},Ne={class:"all"},Ie=Ae(()=>o("p",{class:"instruction"},A(`Selesai di
Ruang Terang`),-1)),Me=j({__name:"PersonaAnswersPage",props:{stepIdx:{default:"0"},stepState:{default:"question"}},setup(a){const S=a,g=1.5,l=i(()=>Number.parseInt(S.stepIdx)),r=Q(),m=C(r.progress.personaHistory),B=i(()=>m.value.map(e=>e.answerSet)),k=i(()=>m.value.length?m.value[m.value.length-1].answerSet.question:null),_=i(()=>{let e=0,n=G[e];for(;l.value>n.until;)e++,n=G[e];return n}),H=i(()=>r.progress.personaScoresSum),y=C([]);for(let e=0;e<V.length;e++){const n=V[e].id;y.value.push({arch:n,score:H.value[n]||0,idx:e})}const x=i(()=>{const e=_.value.focusBetween;for(let t=0;t<y.value.length;t++){const s=y.value[t];s.score=H.value[s.arch]||0}const n=[...y.value];return n.sort((t,s)=>t.score==s.score?Math.random()-.5:t.score>s.score?-1:1),n.slice(0,e)}),P=i(()=>{let e=0;const n=x.value;for(let t=0;t<n.length;t++){const s=n[t];e+=s.score}return e/=n.length,n.filter(t=>t.score<e).sort((t,s)=>t.idx<s.idx?-1:1)}),w=i(()=>(x.value.length==y.value.length,pe.filter(n=>!(n.question==k.value||B.value.includes(n))))),h=C([]);function U(){h.value=[...w.value],_.value.contrastMult&&(_.value.contrastMult>0?h.value.sort((t,s)=>t.contrast<s.contrast?1:-1):_.value.contrastMult<0&&h.value.sort((t,s)=>t.contrast>s.contrast?1:-1));for(let t=0;t<w.value.length;t++){const s=w.value[t];s.fitness=0;for(let u=0;u<x.value.length;u++){const N=x.value[u];s.fitness+=(s.sumScores[N.arch]||0)*-N.score}}h.value.sort((t,s)=>t.fitness>s.fitness?-1:1);const e=P.value.length>1?P.value:x.value;if(e.length>1){for(let t=0;t<w.value.length;t++){const s=w.value[t];if(s.fitness=0,e.length)for(let u=0;u<e.length;u++){const N=e[u].arch,E=s.contrasts[N];if(E)for(let M=0;M<e.length;M++){const X=e[M].arch;s.fitness+=E[X]||0}}}h.value.sort((t,s)=>t.fitness>s.fitness?-1:1)}const n=h.value[0];n&&r.addPersonaStep({answerSet:n})}const b=i(()=>l.value==L+1),D={logoSize:.5,headerY:.5};function W(){f.push({name:"area-1-answers",params:{stepIdx:l.value,stepState:"answers"}})}function Z(e){r.selectPersonaAnswer(e.scores),f.push({name:"area-1-answers",params:{stepIdx:l.value+1,stepState:"question"}})}function J(){const e=he[r.progress.topArchetypes.persona];se({name:r.regData.name||"NO NAME",persona:e?e.labels.persona+" ("+e.labels.root+")":"NO PERSONA"}),f.push({name:"area-1-to-next-area"})}return ee(f.currentRoute,()=>{f.currentRoute.value.name==="area-1-answers"&&ce(()=>{const e=l.value,n=r.progress.personaHistory.length;if(e>n){const t=r.progress.personaHistory[n-1],s=!t||!!t.selectedScores;s&&U(),f.replace({name:"area-1-answers",params:{stepIdx:n+(s?1:0),stepState:"question"}})}else e<n&&(r.progress.personaHistory.length=e);S.stepState=="question"&&b.value?setTimeout(()=>{r.setBGSetting(D)},500):r.setBGSetting({})})},{immediate:!0}),te(()=>{r.setBGSetting(b.value?D:{})}),(e,n)=>(p(),v("div",Be,[o("div",{class:"steps-container",style:R({top:"-"+(c(l)-1)*g*100+"vh"})},[(p(!0),v($,null,K(c(r).progress.personaHistory,(t,s)=>(p(),v($,null,[Math.abs(c(l)-(s+1))<=1?(p(),ae(we,{key:s,"history-step":t,"idx-offset":s-c(l)+1,"step-state":a.stepState,"on-next":W,"on-select":Z,"is-last":c(b),style:R({top:s*g*100+"vh"})},null,8,["history-step","idx-offset","step-state","is-last","style"])):ne("",!0)],64))),256))],4),o("div",{class:O(["others",{last:c(b)}])},[o("div",ke,[o("span",be,A(Math.min(c(l),c(L))),1),o("span",Ne,"/"+A(c(L)),1)]),I(ue,{"outer-class":{closing:!0}},{default:q(()=>[Ie,I(F,{class:"cta",onClick:J},{default:q(()=>[z(" Lanjut ")]),_:1})]),_:1})],2)]))}});const De=le(Me,[["__scopeId","data-v-3587c464"]]);export{De as default};
