import{_ as m,o as d,c,a as s,r as p,b as o,t as C,d as g,w as i,E as I,e as v,v as w,n as f,f as b,g as h,p as V,h as $,i as k}from"./index-c123997c.js";import{a as L}from"./axios-4a70c6fc.js";const S={},E={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","data-v-ea893728":""},z=s("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"},null,-1),B=[z];function N(t,e){return d(),c("svg",E,B)}const y=m(S,[["render",N]]),P={},M={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","xml:space":"preserve","data-v-ea893728":""},D=s("path",{d:"M928.99 755.83 574.6 203.25c-12.89-20.16-36.76-32.58-62.6-32.58s-49.71 12.43-62.6 32.58L95.01 755.83c-12.91 20.12-12.9 44.91.01 65.03 12.92 20.12 36.78 32.51 62.59 32.49h708.78c25.82.01 49.68-12.37 62.59-32.49 12.91-20.12 12.92-44.91.01-65.03zM554.67 768h-85.33v-85.33h85.33V768zm0-426.67v298.66h-85.33V341.32l85.33.01z",fill:"currentColor"},null,-1),U=[D];function q(t,e){return d(),c("svg",M,U)}const K=m(P,[["render",q]]);const u=t=>(V("data-v-e039bc86"),t=t(),$(),t),O={class:"container"},T=u(()=>s("div",{class:"left-container-logo"},[s("div",{class:"logomulti-login"},[s("img",{alt:"Vue logo",src:k,width:"170"})])],-1)),X={class:"right-container-login"},j={key:0,class:"container-msg"},A={class:"msg-icon"},G={class:"msgs"},R={class:"msg-titulo"},x=u(()=>s("div",{class:"msg-details"},"Verifique se o e-mail e a senha estão corretos e tente novamente.",-1)),J={class:"container-credentials"},F={style:{width:"95%"}},H=u(()=>s("h1",{style:{width:"95%"}},"Preencha para acessar o Portal Multilixo.",-1)),Q=u(()=>s("h2",null,"Login",-1)),W={key:0,class:"help-message"},Y={key:0,class:"help-message"},Z={data(){return{login:"",password:"",error:"",submitted:!1}},methods:{Login(){const t=this,e={username:t.login,password:t.password};if(t.submitted=!0,t.login==""||t.password=="")return;const n=I.service({lock:!0,text:"Carregando...",background:"rgba(0, 0, 0, 0.7)"});L.post(`${this.__API}/Usuario/token`,e).then(a=>{const l={headers:{Authorization:`Bearer ${a.data.token}`}};L.get(`${this.__API}/Usuario/`+a.data.id,l).then(_=>{n.close();const r=Object.assign(a.data,{idGruposClientes:_.data.idGruposClientes});sessionStorage.setItem("user",JSON.stringify(r)),this.$router.replace("/"),window.dispatchEvent(new CustomEvent("user",{detail:{storage:sessionStorage.getItem("user")}}))})}).catch(a=>{n.close(),this.error=a.response.data.message})}}},ee=Object.assign(Z,{__name:"LoginView",setup(t){return(e,n)=>{const a=p("el-col"),l=p("el-row"),_=p("el-button");return d(),c("div",O,[T,s("div",X,[e.error?(d(),c("div",j,[s("div",A,[o(K,{class:"IconExclamacao"})]),s("div",G,[s("div",R,C(e.error),1),x])])):g("",!0),s("div",J,[s("div",F,[H,Q,o(l,null,{default:i(()=>[o(a,{span:24},{default:i(()=>[v(s("input",{type:"text",class:f(["input",{"red-input":e.submitted&&e.login==""}]),required:"",placeholder:"Digite seu login","onUpdate:modelValue":n[0]||(n[0]=r=>e.login=r),onKeyup:n[1]||(n[1]=b((...r)=>e.Login&&e.Login(...r),["enter"]))},null,34),[[w,e.login]])]),_:1})]),_:1}),o(l,null,{default:i(()=>[o(a,{span:24},{default:i(()=>[e.submitted&&e.login==""?(d(),c("div",W,[o(y,{class:"IconX"}),h(" Por favor, insira o e-mail. ")])):g("",!0)]),_:1})]),_:1}),o(l,null,{default:i(()=>[o(a,{span:24},{default:i(()=>[v(s("input",{type:"password",required:"",class:f(["input",{"red-input":e.submitted&&e.password==""}]),onKeyup:n[2]||(n[2]=b((...r)=>e.Login&&e.Login(...r),["enter"])),placeholder:"Digite sua senha","onUpdate:modelValue":n[3]||(n[3]=r=>e.password=r)},null,34),[[w,e.password]])]),_:1})]),_:1}),o(l,null,{default:i(()=>[o(a,{span:24},{default:i(()=>[e.submitted&&e.password==""?(d(),c("div",Y,[o(y,{class:"IconX"}),h(" Por favor, insira a senha. ")])):g("",!0)]),_:1})]),_:1}),o(l,null,{default:i(()=>[o(a,{span:24},{default:i(()=>[o(_,{type:"primary",class:"button buttonLogin",onClick:e.Login},{default:i(()=>[h("ENTRAR")]),_:1},8,["onClick"])]),_:1})]),_:1})])])])])}}}),te=m(ee,[["__scopeId","data-v-e039bc86"]]);export{te as default};