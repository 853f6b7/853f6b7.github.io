import{_ as g,o as m,c as h,q as B,s as P,r as f,a as t,b as e,w as o,t as c,F as C,p as b,g as w,i as v,d as $,j as d,u as k,x as F,f as _,Q as S,m as q,E as z,y as J}from"./index-602f8ecb.js";import{E as U}from"./jspdf.es.min-bd0b835c.js";import{c as L}from"./controllerbase-f6de9c04.js";import"./axios-4a70c6fc.js";const M={},O={id:"Icone-informacoes",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},Q=B('<circle id="Elipse" cx="10" cy="10" r="10" fill="#cbd619"></circle><path id="Caminho" d="M-2878.314,1997.285v8.859a1.371,1.371,0,0,0,.346.812,1.466,1.466,0,0,0,.871.236h9.58a1.214,1.214,0,0,0,.791-.236,1.323,1.323,0,0,0,.249-.812v-6.4a1.39,1.39,0,0,0-.309-.726,1.444,1.444,0,0,0-.731-.323h-4.881a1.091,1.091,0,0,1-.6-.121.573.573,0,0,1-.142-.469v-.815a1.226,1.226,0,0,0-.24-.767,1.252,1.252,0,0,0-.769-.25h-3.417a.935.935,0,0,0-.548.31A1.509,1.509,0,0,0-2878.314,1997.285Z" transform="translate(2882.393 -1991.73)" fill="none" stroke="#fff" stroke-width="1"></path><path id="Caminho-2" data-name="Caminho" d="M-2871.379,1998.227l5.537-.02a1.127,1.127,0,0,1,.7.4,1.6,1.6,0,0,1,.128.893v1.1" transform="translate(2880.924 -1992.588)" fill="none" stroke="#fff" stroke-width="1"></path><g id="usuario" transform="translate(7.266 8.139)"><path id="Caminho-3" data-name="Caminho" d="M437.9,581.823a1.641,1.641,0,1,1-1.641,1.641,1.641,1.641,0,0,1,1.641-1.641h0Z" transform="translate(-435.171 -581.823)" fill="#fff"></path><path id="Caminho-4" data-name="Caminho" d="M433.686,603.807a3.574,3.574,0,0,1-2.731-1.272,2.079,2.079,0,0,1,1.836-1.115.454.454,0,0,1,.132.021,2.325,2.325,0,0,0,1.525,0,.456.456,0,0,1,.132-.021,2.079,2.079,0,0,1,1.836,1.115,3.573,3.573,0,0,1-2.731,1.272Z" transform="translate(-430.955 -597.393)" fill="#fff"></path></g>',4),A=[Q];function G(n,s){return m(),h("svg",O,A)}const V=g(M,[["render",G]]);const r=n=>(b("data-v-78eb7994"),n=n(),w(),n),R=r(()=>t("div",{class:"subtitulo"},[t("div",{style:{width:"3px",height:"26px",background:"#444444 0% 0% no-repeat padding-box",opacity:"1"}}),t("div",{class:"cadastrosubtitulo"},"Cadastro")],-1)),x={class:"informacoes-matriz"},D=r(()=>t("div",{class:"matrix-texto"},"Informações do usuário",-1)),Z=r(()=>t("div",null,null,-1)),H={class:"matrizinfocontainer desktop"},T=r(()=>t("div",{class:"grid-content titulo"},"Usuário:",-1)),Y=r(()=>t("div",{class:"grid-content titulo"},"Email:",-1)),K=r(()=>t("div",{class:"grid-content titulo"},"Senha:",-1)),W=r(()=>t("div",{class:"grid-content titulo"},null,-1)),X=r(()=>t("div",{class:"grid-content titulo"},null,-1)),tt={class:"grid-content conteudo ultimo"},ot={class:"grid-content conteudo ultimo"},et={class:"grid-content conteudo ultimo"},st={class:"senha"},at=r(()=>t("div",{style:{"text-align":"left",font:"normal normal bold 16px/19px Raleway","letter-spacing":"0px",color:"#444444",opacity:"1","margin-top":"30px","margin-bottom":"30px"}}," Alterar senha",-1)),it=r(()=>t("div",{style:{"text-align":"left",font:"normal normal normal 14px/18px Raleway","letter-spacing":"0px",color:"#444444",opacity:"1"}}," Nova senha",-1)),nt=r(()=>t("div",{class:"botao laranja"},[t("div",null,"Alterar")],-1)),dt=r(()=>t("div",{class:"box-acoes"},[t("div",{class:"botao laranja"},[t("div",null,"Salvar")]),t("div",{class:"botao verde"},[t("div",null,"Cancelar")])],-1)),lt={class:"matrizinfocontainer mobile"},ct=r(()=>t("div",{class:"grid-content titulo"},"Usuário:",-1)),ut={class:"grid-content conteudo"},_t=r(()=>t("div",{class:"grid-content titulo"},"Email:",-1)),rt={class:"grid-content conteudo"},pt=r(()=>t("div",{class:"grid-content titulo"},"Senha:",-1)),ft={class:"grid-content conteudo"},mt={data:()=>({usuario:JSON.parse(localStorage.getItem("user")).username,email:JSON.parse(localStorage.getItem("user")).email,password:"*************"})},ht=Object.assign(mt,{__name:"MatrizInfo",props:{modoEditar:{type:Boolean}},setup(n){return P(0),(s,u)=>{const a=f("el-col"),i=f("el-row"),p=f("el-input");return m(),h(C,null,[R,t("div",x,[t("div",null,[e(V)]),D,Z]),t("div",H,[e(i,null,{default:o(()=>[e(a,{span:4},{default:o(()=>[T]),_:1}),e(a,{span:4},{default:o(()=>[Y]),_:1}),e(a,{span:4},{default:o(()=>[K]),_:1})]),_:1}),e(i,null,{default:o(()=>[e(a,{span:4},{default:o(()=>[W]),_:1}),e(a,{span:4},{default:o(()=>[X]),_:1})]),_:1}),e(i,null,{default:o(()=>[e(a,{span:4},{default:o(()=>[t("div",tt,c(s.usuario),1)]),_:1}),e(a,{span:4},{default:o(()=>[t("div",ot,c(s.email),1)]),_:1}),e(a,{span:4},{default:o(()=>[t("div",et,c(s.password),1)]),_:1})]),_:1}),t("div",st,[e(i,null,{default:o(()=>[e(a,{span:24},{default:o(()=>[at]),_:1})]),_:1}),e(i,null,{default:o(()=>[e(a,{span:24},{default:o(()=>[it]),_:1})]),_:1}),e(i,null,{default:o(()=>[e(a,{span:4},{default:o(()=>[e(p,{class:"w-50 m-2",style:{width:"164px"},placeholder:"Digite a nova senha","suffix-icon":s.Search},null,8,["suffix-icon"])]),_:1}),e(a,{span:4},{default:o(()=>[nt]),_:1}),e(a,{span:4}),e(a,{span:4}),e(a,{span:4},{default:o(()=>[dt]),_:1})]),_:1})])]),t("div",lt,[ct,t("div",ut,c(s.usuario),1),_t,t("div",rt,c(s.email),1),pt,t("div",ft,c(s.password),1)])],64)}}}),vt=g(ht,[["__scopeId","data-v-78eb7994"]]);const l=n=>(b("data-v-6bcb0119"),n=n(),w(),n),gt={class:"filial-info"},$t={class:"titulo-accordion desktop"},Ct=l(()=>t("div",{class:"titulo"},"Codigo:",-1)),bt=l(()=>t("div",{class:"titulo"},"Cod. Local",-1)),wt=l(()=>t("div",{class:"titulo"},"Razão Social:",-1)),yt=l(()=>t("div",{class:"titulo"},"Nome Fantasia:",-1)),It=l(()=>t("div",{class:"titulo"},"CNPJ:",-1)),kt=l(()=>t("div",{class:"titulo"},"Usuario:",-1)),Ft={class:"conteudo conteudo-titulo"},Lt={class:"conteudo conteudo-titulo"},St={class:"conteudo conteudo-titulo"},Vt={class:"conteudo conteudo-titulo"},Nt={class:"conteudo conteudo-titulo"},Et={class:"conteudo conteudo-titulo"},jt={class:"titulo-accordion mobile"},Bt=l(()=>t("div",{class:"titulo"},"Codigo:",-1)),Pt={class:"conteudo conteudo-titulo"},qt=l(()=>t("div",{class:"titulo"},"Cod. Local",-1)),zt={class:"conteudo conteudo-titulo"},Jt={class:"desktop",style:{"margin-top":"10px"}},Ut=l(()=>t("div",{class:"titulo"},"CEP:",-1)),Mt=l(()=>t("div",{class:"titulo"},"Endereço:",-1)),Ot=l(()=>t("div",{class:"titulo"},"Número:",-1)),Qt=l(()=>t("div",{class:"titulo"},"Bairro:",-1)),At=l(()=>t("div",{class:"titulo"},"Complemento:",-1)),Gt=l(()=>t("div",{class:"titulo"},"Estado:",-1)),Rt=l(()=>t("div",{class:"titulo"},"Cidade:",-1)),xt={class:"conteudo"},Dt={class:"conteudo"},Zt={class:"conteudo"},Ht={class:"conteudo"},Tt={class:"conteudo ultimo"},Yt={class:"conteudo ultimo"},Kt={class:"conteudo ultimo"},Wt={class:"acoes"},Xt={class:"mobile"},to=l(()=>t("div",{class:"titulo"},"CEP:",-1)),oo={class:"conteudo"},eo=l(()=>t("div",{class:"titulo"},"Endereço:",-1)),so={class:"conteudo"},ao=l(()=>t("div",{class:"titulo"},"Número:",-1)),io={class:"conteudo"},no=l(()=>t("div",{class:"titulo"},"Bairro:",-1)),lo={class:"conteudo"},co=l(()=>t("div",{class:"titulo"},"Complemento:",-1)),uo={class:"conteudo ultimo"},_o=l(()=>t("div",{class:"titulo"},"Estado:",-1)),ro={class:"conteudo ultimo"},po=l(()=>t("div",{class:"titulo"},"Cidade:",-1)),fo={class:"conteudo ultimo"},mo={class:"qr-code",id:"qr_code"},ho={class:"dialog-footer"},vo={class:"container-bt-imprimir"},go={components:{QrcodeVue:S},props:{data:{required:!0,type:Array}},data:()=>({dialogVisible:!1,qrcodeLink:""}),methods:{gerarQrCode(){const n=window.location.origin+"/public_indicadores/",s=new Date,u=("0"+parseInt(s.getMonth()+1)).slice(-2),a=`${s.getFullYear()}${u}`,i={idGruposClientes:this.$props.data.idGruposClientes,idClientes:this.$props.data.idClientes,idLocais:this.$props.data.idLocais,periodo:a},p=btoa(new URLSearchParams(i).toString()),y=n+p;this.qrcodeLink=y,this.dialogVisible=!0},ImprimirQrCode(){var n=new U("p","pt","a4"),s=document.getElementById("qr_code").children[0],u=s.toDataURL("image/jpeg");n.addImage(u,220,100),n.output("dataurlnewwindow")}}},$o=Object.assign(go,{__name:"FilialInfo",setup(n){return(s,u)=>{const a=f("el-col"),i=f("el-row"),p=f("el-icon"),y=f("el-collapse-item"),N=f("el-collapse"),E=f("el-button"),j=f("el-dialog");return m(),h(C,null,[t("div",gt,[e(N,{accordion:""},{default:o(()=>[e(y,{name:"1"},{title:o(()=>[t("div",$t,[e(i,null,{default:o(()=>[e(a,{span:2},{default:o(()=>[Ct]),_:1}),n.data.codigoLocal?(m(),v(a,{key:0,span:2},{default:o(()=>[bt]),_:1})):$("",!0),e(a,{span:6},{default:o(()=>[wt]),_:1}),e(a,{span:6},{default:o(()=>[yt]),_:1}),e(a,{span:3},{default:o(()=>[It]),_:1}),e(a,{span:4},{default:o(()=>[kt]),_:1})]),_:1}),e(i,null,{default:o(()=>[e(a,{span:2},{default:o(()=>[t("div",Ft,[d(s.$slots,"codigoCliente",{},void 0,!0)])]),_:3}),n.data.codigoLocal?(m(),v(a,{key:0,span:2},{default:o(()=>[t("div",Lt,[d(s.$slots,"codigoLocal",{},void 0,!0)])]),_:3})):$("",!0),e(a,{span:6},{default:o(()=>[t("div",St,[d(s.$slots,"nomeCliente",{},void 0,!0)])]),_:3}),e(a,{span:6},{default:o(()=>[t("div",Vt,[d(s.$slots,"nomeFantasiaCliente",{},void 0,!0)])]),_:3}),e(a,{span:3},{default:o(()=>[t("div",Nt,[d(s.$slots,"cnpjCliente",{},void 0,!0)])]),_:3}),e(a,{span:4},{default:o(()=>[t("div",Et,[d(s.$slots,"nome",{},void 0,!0)])]),_:3})]),_:3})]),t("div",jt,[e(i,null,{default:o(()=>[e(a,{span:12},{default:o(()=>[Bt]),_:1}),e(a,{span:12},{default:o(()=>[t("div",Pt,[d(s.$slots,"codigoCliente",{},void 0,!0)])]),_:3})]),_:3}),e(i,null,{default:o(()=>[n.data.codigoLocal?(m(),v(a,{key:0,span:12},{default:o(()=>[qt]),_:1})):$("",!0),n.data.codigoLocal?(m(),v(a,{key:1,span:12},{default:o(()=>[t("div",zt,[d(s.$slots,"codigoLocal",{},void 0,!0)])]),_:3})):$("",!0)]),_:3})])]),default:o(()=>[t("div",Jt,[e(i,null,{default:o(()=>[e(a,{span:2},{default:o(()=>[Ut]),_:1}),e(a,{span:4},{default:o(()=>[Mt]),_:1}),e(a,{span:2},{default:o(()=>[Ot]),_:1}),e(a,{span:3},{default:o(()=>[Qt]),_:1}),e(a,{span:4},{default:o(()=>[At]),_:1}),e(a,{span:2},{default:o(()=>[Gt]),_:1}),e(a,{span:4},{default:o(()=>[Rt]),_:1})]),_:1}),e(i,null,{default:o(()=>[e(a,{span:2},{default:o(()=>[t("div",xt,[d(s.$slots,"cep",{},void 0,!0)])]),_:3}),e(a,{span:4},{default:o(()=>[t("div",Dt,[d(s.$slots,"endereco",{},void 0,!0)])]),_:3}),e(a,{span:2},{default:o(()=>[t("div",Zt,[d(s.$slots,"numero",{},void 0,!0)])]),_:3}),e(a,{span:3},{default:o(()=>[t("div",Ht,[d(s.$slots,"bairro",{},void 0,!0)])]),_:3}),e(a,{span:4},{default:o(()=>[t("div",Tt,[d(s.$slots,"complemento",{},void 0,!0)])]),_:3}),e(a,{span:2},{default:o(()=>[t("div",Yt,[d(s.$slots,"uf",{},void 0,!0)])]),_:3}),e(a,{span:2},{default:o(()=>[t("div",Kt,[d(s.$slots,"cidade",{},void 0,!0)])]),_:3})]),_:3}),e(i,null,{default:o(()=>[e(a,{span:6},{default:o(()=>[t("div",Wt,[e(p,null,{default:o(()=>[e(k(F),{style:{"margin-top":"10px"}})]),_:1}),t("div",{style:{"margin-left":"10px"},onClick:u[0]||(u[0]=(...I)=>s.gerarQrCode&&s.gerarQrCode(...I))},"Gerar indicador")])]),_:1})]),_:1})]),t("div",Xt,[to,t("div",oo,[d(s.$slots,"cep",{},void 0,!0)]),eo,t("div",so,[d(s.$slots,"endereco",{},void 0,!0)]),ao,t("div",io,[d(s.$slots,"numero",{},void 0,!0)]),no,t("div",lo,[d(s.$slots,"bairro",{},void 0,!0)]),co,t("div",uo,[d(s.$slots,"complemento",{},void 0,!0)]),_o,t("div",ro,[d(s.$slots,"uf",{},void 0,!0)]),po,t("div",fo,[d(s.$slots,"cidade",{},void 0,!0)])])]),_:3})]),_:3})]),e(j,{modelValue:s.dialogVisible,"onUpdate:modelValue":u[1]||(u[1]=I=>s.dialogVisible=I),width:"30%"},{footer:o(()=>[t("span",ho,[t("div",vo,[e(E,{class:"btn-imprimir",icon:k(F),onClick:s.ImprimirQrCode},{default:o(()=>[_("Imprimir ")]),_:1},8,["icon","onClick"])])])]),default:o(()=>[t("div",mo,[e(S,{value:s.qrcodeLink,size:150,level:"H"},null,8,["value"])])]),_:1},8,["modelValue"])],64)}}}),Co=g($o,[["__scopeId","data-v-6bcb0119"]]);const bo=n=>(b("data-v-af89c22a"),n=n(),w(),n),wo={class:"informacoes-filiais"},yo=bo(()=>t("div",{class:"filiais-texto"},"Informações das filiais",-1)),Io={class:"filiais"},ko={class:"search-text"},Fo={data:()=>({user:JSON.parse(localStorage.getItem("user")),admin:!1,filterCNPJ:null,listaFiliais:[],listaFiliaisBkp:[]}),methods:{setLoading(n){const s=z.service({lock:!0,text:"Carregando...",background:"rgba(0, 0, 0, 0.7)"});n||s.close()}},watch:{filterCNPJ(n){this.listaFiliais=this.listaFiliaisBkp,this.listaFiliais=this.listaFiliais.filter(s=>s.cnpj.indexOf(n)>-1)}},created(){const n=this,{__API:s}=this,{idGruposClientes:u,role:a,id:i}=this.user;this.setLoading(!0),a=="Admin"?L.Get(`${s}/Cliente/grupo/`+u).then(p=>{n.setLoading(!1),this.listaFiliais=p.data,this.listaFiliaisBkp=p.data,this.admin=!0}):L.Get(`${s}/Usuario/acessos/${i}`).then(p=>{n.setLoading(!1),console.log(p.data),this.listaFiliaisBkp=p.data,this.listaFiliais=p.data})}},Lo=Object.assign(Fo,{__name:"FiliaisInfo",setup(n){return(s,u)=>{const a=f("el-input");return m(),h(C,null,[t("div",wo,[t("div",null,[e(V)]),yo]),t("div",Io,[t("div",ko,[e(a,{modelValue:s.filterCNPJ,"onUpdate:modelValue":u[0]||(u[0]=i=>s.filterCNPJ=i),class:"w-50 m-2",style:{width:"300px"},placeholder:"Pesquise pelo CNPJ.","suffix-icon":k(J)},null,8,["modelValue","suffix-icon"])]),(m(!0),h(C,null,q(s.listaFiliais,i=>(m(),v(Co,{data:i},{codigoCliente:o(()=>[_(c(i.codigoCliente),1)]),codigoLocal:o(()=>[_(c(i.codigoLocal),1)]),nomeCliente:o(()=>[_(c(s.admin?i.nome:i.nomeCliente),1)]),razaosocial:o(()=>[_(c(i.nome),1)]),nomeFantasiaCliente:o(()=>[_(c(s.admin?i.nomeFantasia:`${i.codigoLocal} ${i.nomeFantasiaCliente}`),1)]),cnpjCliente:o(()=>[_(c(s.admin?i.cnpj:i.cnpjCliente),1)]),nome:o(()=>[_(c(s.admin?s.user.username:i.nome),1)]),cep:o(()=>[_(c(i.cep),1)]),endereco:o(()=>[_(c(i.endereco),1)]),numero:o(()=>[_(c(i.numero),1)]),bairro:o(()=>[_(c(i.bairro),1)]),complemento:o(()=>[_(c(i.complemento),1)]),uf:o(()=>[_(c(i.uf),1)]),cidade:o(()=>[_(c(i.cidade),1)]),_:2},1032,["data"]))),256))])],64)}}}),So=g(Lo,[["__scopeId","data-v-af89c22a"]]);const Vo=n=>(b("data-v-e66eda92"),n=n(),w(),n),No={style:{"padding-top":"25px"}},Eo=Vo(()=>t("div",{class:"breadcumbs"},[t("div",{class:"home"},"Home"),t("div",{class:"cadastro"},"Cadastro")],-1)),jo={__name:"CadastroView",setup(n){return(s,u)=>(m(),h("div",No,[Eo,t("div",null,[e(vt)]),t("div",null,[e(So)])]))}},Jo=g(jo,[["__scopeId","data-v-e66eda92"]]);export{Jo as default};
