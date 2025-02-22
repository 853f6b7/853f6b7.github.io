import{_ as v,o as p,c as m,a as t,r as u,b as s,t as E,d as h,w as o,F as $,E as I,e as f,f as w,g as b,v as S,n as y,h as L,i as c,p as P,j as z,k as A}from"./index-c73ca59f.js";const D={},B={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","data-v-ea893728":""},M=t("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"},null,-1),N=[M];function O(n,e){return p(),m("svg",B,N)}const C=v(D,[["render",O]]),U={},G={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","xml:space":"preserve","data-v-ea893728":""},T=t("path",{d:"M928.99 755.83 574.6 203.25c-12.89-20.16-36.76-32.58-62.6-32.58s-49.71 12.43-62.6 32.58L95.01 755.83c-12.91 20.12-12.9 44.91.01 65.03 12.92 20.12 36.78 32.51 62.59 32.49h708.78c25.82.01 49.68-12.37 62.59-32.49 12.91-20.12 12.92-44.91.01-65.03zM554.67 768h-85.33v-85.33h85.33V768zm0-426.67v298.66h-85.33V341.32l85.33.01z",fill:"currentColor"},null,-1),j=[T];function K(n,e){return p(),m("svg",G,j)}const X=v(U,[["render",K]]);const _=n=>(P("data-v-7a4fb6f7"),n=n(),z(),n),F={class:"container"},R=_(()=>t("div",{class:"left-container-logo"},[t("div",{class:"logomulti-login"},[t("img",{alt:"Vue logo",src:A,width:"170"})])],-1)),Z={class:"right-container-login"},J={key:0,class:"container-msg"},H={class:"msg-icon"},Q={class:"msgs"},W={class:"msg-titulo"},Y=_(()=>t("div",{class:"msg-details"},"Verifique se o e-mail e a senha estão corretos e tente novamente.",-1)),x={class:"container-credentials"},ee={style:{width:"95%"}},se=_(()=>t("h1",{style:{width:"95%"}},"Acesse sua conta na área de clientes Multilixo",-1)),oe=_(()=>t("h2",null,"Login",-1)),te={key:0,class:"help-message"},ae={key:0,class:"help-message"},ne=_(()=>t("a",{href:"https://portalmultilixo.blob.core.windows.net/portalmultilixo/VideoTreinamento.mp4",target:"blank",class:"logo-multilixo",style:{color:"#444444"}}," Vídeo de treinamento ",-1)),ie={data(){return{login:"",password:"",error:"",submitted:!1,esqueciSenhaPopup:!1,esqueciSenhaLoading:!1,email:""}},methods:{Login(){const n=this,e={username:n.login,password:n.password};if(n.submitted=!0,n.login==""||n.password=="")return;const a=I.service({lock:!0,text:"Carregando...",background:"rgba(0, 0, 0, 0.7)"});f.post(`${this.__API}/Usuario/token`,e).then(i=>{const r={headers:{Authorization:`Bearer ${i.data.token}`}};f.get(`${this.__API}/Usuario/`+i.data.id,r).then(d=>{a.close();const g=Object.assign(i.data,{idGruposClientes:d.data.idGruposClientes,flagSup:d.data.flagSup,flagAdm:d.data.flagAdm,lsgGrupos:d.data.lsgGrupos});sessionStorage.setItem("user",JSON.stringify(g)),this.$router.replace("/"),window.dispatchEvent(new CustomEvent("user",{detail:{storage:sessionStorage.getItem("user")}}))})}).catch(i=>{a.close(),this.error=i.response.data.message})},OpenEsqueciSenhaPopup(){this.email="",this.esqueciSenhaPopup=!0,this.esqueciSenhaLoading=!1},EsqueciSenha(){const{__API:n}=this;this.esqueciSenhaLoading=!0,f.post(`${n}/Usuario/email`,{email:this.email}).then(()=>{w({message:`Um e-mail foi enviado com sucesso para ${this.email}`,type:"success",duration:1e4,showClose:!0})}).catch(e=>{console.error(e),console.error(e.response.data.message),w({message:"Ocorreu um erro ao enviar o e-mail",type:"error",duration:1e4,showClose:!0})}).finally(()=>{this.esqueciSenhaPopup=!1})},buttonDisabled(){return this.email==""||this.validateEmail(this.email)==null},validateEmail(n){return String(n).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}}},le=Object.assign(ie,{__name:"LoginView",setup(n){return(e,a)=>{const i=u("el-col"),r=u("el-row"),d=u("el-button"),g=u("el-input"),V=u("el-form-item"),k=u("el-form"),q=u("el-dialog");return p(),m($,null,[t("div",F,[R,t("div",Z,[e.error?(p(),m("div",J,[t("div",H,[s(X,{class:"IconExclamacao"})]),t("div",Q,[t("div",W,E(e.error),1),Y])])):h("",!0),t("div",x,[t("div",ee,[se,oe,s(r,null,{default:o(()=>[s(i,{span:24},{default:o(()=>[b(t("input",{type:"text",class:y(["input",{"red-input":e.submitted&&e.login==""}]),required:"",placeholder:"Digite seu e-mail","onUpdate:modelValue":a[0]||(a[0]=l=>e.login=l),onKeyup:a[1]||(a[1]=L((...l)=>e.Login&&e.Login(...l),["enter"]))},null,34),[[S,e.login]])]),_:1})]),_:1}),s(r,null,{default:o(()=>[s(i,{span:24},{default:o(()=>[e.submitted&&e.login==""?(p(),m("div",te,[s(C,{class:"IconX"}),c(" Por favor, insira o e-mail. ")])):h("",!0)]),_:1})]),_:1}),s(r,null,{default:o(()=>[s(i,{span:24},{default:o(()=>[b(t("input",{type:"password",required:"",class:y(["input",{"red-input":e.submitted&&e.password==""}]),onKeyup:a[2]||(a[2]=L((...l)=>e.Login&&e.Login(...l),["enter"])),placeholder:"Digite sua senha","onUpdate:modelValue":a[3]||(a[3]=l=>e.password=l)},null,34),[[S,e.password]])]),_:1})]),_:1}),s(r,null,{default:o(()=>[s(i,{span:24},{default:o(()=>[e.submitted&&e.password==""?(p(),m("div",ae,[s(C,{class:"IconX"}),c(" Por favor, insira a senha. ")])):h("",!0)]),_:1})]),_:1}),s(r,null,{default:o(()=>[s(i,{span:24,style:{"text-align":"center"}},{default:o(()=>[s(d,{link:"",onClick:e.OpenEsqueciSenhaPopup},{default:o(()=>[c("Esqueci a senha")]),_:1},8,["onClick"])]),_:1})]),_:1}),s(r,null,{default:o(()=>[s(i,{span:24,style:{"text-align":"center"}},{default:o(()=>[ne]),_:1})]),_:1}),s(r,null,{default:o(()=>[s(i,{span:24},{default:o(()=>[s(d,{type:"primary",class:"button buttonLogin",onClick:e.Login},{default:o(()=>[c("ENTRAR")]),_:1},8,["onClick"])]),_:1})]),_:1})])])])]),s(q,{modelValue:e.esqueciSenhaPopup,"onUpdate:modelValue":a[6]||(a[6]=l=>e.esqueciSenhaPopup=l),title:"Esqueci a senha"},{footer:o(()=>[s(d,{onClick:a[5]||(a[5]=l=>e.esqueciSenhaPopup=!1)},{default:o(()=>[c("Cancelar")]),_:1}),s(d,{type:"primary",onClick:e.EsqueciSenha,disabled:e.buttonDisabled(),loading:e.esqueciSenhaLoading},{default:o(()=>[c("Enviar e-mail")]),_:1},8,["onClick","disabled","loading"])]),default:o(()=>[s(k,null,{default:o(()=>[s(V,{label:"Digite seu e-mail","label-width":"200px"},{default:o(()=>[s(g,{modelValue:e.email,"onUpdate:modelValue":a[4]||(a[4]=l=>e.email=l),type:"text"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),de=v(le,[["__scopeId","data-v-7a4fb6f7"]]);export{de as default};
