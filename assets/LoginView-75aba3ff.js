import{_ as m,o as r,c as d,a as s,r as p,b as t,t as L,d as h,w as n,e as f,v,n as w,f as g,p as V,g as $,h as y}from"./index-9f2eb95c.js";import{a as b}from"./axios-4a70c6fc.js";const C={},k={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","data-v-ea893728":""},S=s("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"},null,-1),z=[S];function B(o,e){return r(),d("svg",k,z)}const I=m(C,[["render",B]]),E={},N={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","xml:space":"preserve","data-v-ea893728":""},P=s("path",{d:"M928.99 755.83 574.6 203.25c-12.89-20.16-36.76-32.58-62.6-32.58s-49.71 12.43-62.6 32.58L95.01 755.83c-12.91 20.12-12.9 44.91.01 65.03 12.92 20.12 36.78 32.51 62.59 32.49h708.78c25.82.01 49.68-12.37 62.59-32.49 12.91-20.12 12.92-44.91.01-65.03zM554.67 768h-85.33v-85.33h85.33V768zm0-426.67v298.66h-85.33V341.32l85.33.01z",fill:"currentColor"},null,-1),x=[P];function M(o,e){return r(),d("svg",N,x)}const D=m(E,[["render",M]]);const c=o=>(V("data-v-9d812af2"),o=o(),$(),o),U={class:"container"},q=c(()=>s("div",{class:"left-container-logo"},[s("div",{class:"logomulti-login"},[s("img",{alt:"Vue logo",src:y})])],-1)),O={class:"right-container-login"},T={key:0,class:"container-msg"},X={class:"msg-icon"},j={class:"msgs"},G={class:"msg-titulo"},R=c(()=>s("div",null,"Verifique se o e-mail e a senha estão corretos e tente novamente.",-1)),A={class:"container-credentials"},J={style:{"margin-top":"50px"}},F=c(()=>s("h1",null,"Preencha para acessar o Portal Multilixo.",-1)),H=c(()=>s("h2",null,"Login",-1)),K={key:0,class:"help-message"},Q={key:0,class:"help-message"},W={data(){return{login:"",password:"",error:"",submitted:!1}},methods:{Login(){const o=this,e={username:o.login,password:o.password};o.submitted=!0,!(o.login==""||o.password=="")&&b.post(`${this.__API}/Usuario/token`,e).then(a=>{const i={headers:{Authorization:`Bearer ${a.data.token}`}};b.get(`${this.__API}/Usuario/`+a.data.id,i).then(l=>{console.log(a.data);const _=Object.assign(a.data,{idGruposClientes:l.data.idGruposClientes});localStorage.setItem("user",JSON.stringify(_)),this.$router.replace("/"),window.dispatchEvent(new CustomEvent("user",{detail:{storage:localStorage.getItem("user")}}))})}).catch(a=>{this.error=a.response.data.message})}}},Y=Object.assign(W,{__name:"LoginView",setup(o){return(e,a)=>{const i=p("el-col"),l=p("el-row"),_=p("el-button");return r(),d("div",U,[q,s("div",O,[e.error?(r(),d("div",T,[s("div",X,[t(D,{class:"IconExclamacao"})]),s("div",j,[s("div",G,L(e.error),1),R])])):h("",!0),s("div",A,[s("div",J,[F,H,t(l,null,{default:n(()=>[t(i,{span:24},{default:n(()=>[f(s("input",{type:"text",class:w(["input",{"red-input":e.submitted&&e.login==""}]),required:"",placeholder:"Digite seu login","onUpdate:modelValue":a[0]||(a[0]=u=>e.login=u)},null,2),[[v,e.login]])]),_:1})]),_:1}),t(l,null,{default:n(()=>[t(i,{span:24},{default:n(()=>[e.submitted&&e.login==""?(r(),d("div",K,[t(I,{class:"IconX"}),g(" Por favor, insira o e-mail. ")])):h("",!0)]),_:1})]),_:1}),t(l,null,{default:n(()=>[t(i,{span:24},{default:n(()=>[f(s("input",{type:"password",required:"",class:w(["input",{"red-input":e.submitted&&e.password==""}]),placeholder:"Digite sua senha","onUpdate:modelValue":a[1]||(a[1]=u=>e.password=u)},null,2),[[v,e.password]])]),_:1})]),_:1}),t(l,null,{default:n(()=>[t(i,{span:24},{default:n(()=>[e.submitted&&e.password==""?(r(),d("div",Q,[t(I,{class:"IconX"}),g(" Por favor, insira a senha. ")])):h("",!0)]),_:1})]),_:1}),t(l,null,{default:n(()=>[t(i,{span:24},{default:n(()=>[t(_,{type:"primary",class:"button buttonLogin",onClick:e.Login},{default:n(()=>[g("ENTRAR")]),_:1},8,["onClick"])]),_:1})]),_:1})])])])])}}}),se=m(Y,[["__scopeId","data-v-9d812af2"]]);export{se as default};
