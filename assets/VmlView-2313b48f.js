import{_ as D,r as g,o as m,j as I,w as i,b as n,k as w,e as G,a as c,l as M,u as y,m as U,p as C,g as $,c as _,z as E,n as k,f as p,A as N,F as V,i as S,d as L,E as O,t as b}from"./index-6f0f9c69.js";import{V as T,J as B,d as z}from"./file-download-c5eeccb5.js";import{c as A}from"./controllerbase-3b2baa9b.js";import{_ as j}from"./VmlPesquisa-4c68f027.js";import{T as q,E as H}from"./EmptyState-e10d8c52.js";import{a as f}from"./axios-4a70c6fc.js";import{E as J}from"./jspdf.es.min-3a5b61ab.js";const F=t=>(C("data-v-b99cb41c"),t=t(),$(),t),R=["value"],Z=F(()=>c("div",{class:"texto-botao"},"Visualizar",-1)),K=F(()=>c("div",{class:"texto-botao"},"Download",-1)),Q={data:()=>({selected:!1}),props:{selectItem:{type:Function,default:()=>{}},selects:{type:Array,default:()=>[]},idVrls:{type:Number},actionDownload:{type:Function,default:()=>{}},actionView:{type:Function,default:()=>{}},data:{type:Array,default:[]}},watch:{selected(){this.$props.selectItem(this.$props.data,this.selected)},selects(t){t.length===0&&(this.selected=!1)}},methods:{zerarCheckboxes(){}}},W=Object.assign(Q,{__name:"VmlItem",setup(t){return(e,s)=>{const a=g("el-col"),l=g("el-button"),o=g("el-row");return m(),I(o,null,{default:i(()=>[n(a,{span:1},{default:i(()=>[w(e.$slots,"check",{class:"nome"},()=>[G(c("input",{type:"checkbox",value:e.selected,"onUpdate:modelValue":s[0]||(s[0]=r=>e.selected=r)},null,8,R),[[M,e.selected]])],!0)]),_:3}),n(a,{span:3},{default:i(()=>[w(e.$slots,"codCliente",{class:"nome"},void 0,!0)]),_:3}),n(a,{span:9},{default:i(()=>[w(e.$slots,"cnpj",{class:"nome"},void 0,!0)]),_:3}),n(a,{span:4},{default:i(()=>[w(e.$slots,"vml",{},void 0,!0)]),_:3}),n(a,{span:3},{default:i(()=>[w(e.$slots,"data",{},void 0,!0)]),_:3}),n(a,{span:4},{default:i(()=>[c("div",null,[n(l,{icon:T,onClick:s[1]||(s[1]=r=>e.$props.actionView(e.$props.data))},{default:i(()=>[Z]),_:1}),n(l,{icon:y(U),onClick:s[2]||(s[2]=r=>e.$props.actionDownload(e.$props.data))},{default:i(()=>[K]),_:1},8,["icon"])])]),_:1})]),_:3})}}}),X=D(W,[["__scopeId","data-v-b99cb41c"]]);const Y={class:"datepicker"},x={watch:{range:{deep:!0,handler({start:t,end:e}){if((t-e)/(1e3*60*60*24)*-1>30)E({showClose:!0,message:"Náo é possível selecionar um periodo maior que 30 dias.",type:"warning"});else{var l=new Date(t);l.setUTCHours(0,0,0,0),l.setUTCDate(l.getUTCDate());var t=l.toISOString(),o=new Date(e);o.setUTCHours(0,0,0,0),o.setUTCDate(o.getUTCDate());var e=o.toISOString();this.$props.changeDates({start:t,end:e},!0)}}}},props:{changeDates:{type:Function,default:()=>{}}},data(){var t=new Date;return t.setDate(t.getDate()-5),{range:{start:t,end:new Date},selectedColor:"teal"}}},ee=Object.assign(x,{__name:"VmlCalendario",setup(t){return(e,s)=>{const a=g("VDatePicker");return m(),_("div",Y,[n(a,{modelValue:e.range,"onUpdate:modelValue":s[0]||(s[0]=l=>e.range=l),modelModifiers:{range:!0},color:e.selectedColor,attributes:e.attributes,borderless:"",transparent:""},null,8,["modelValue","color","attributes"])])}}});const te=t=>(C("data-v-724b13dd"),t=t(),$(),t),se={class:"container-vml"},ae={class:"vml-lista-container"},oe={class:"calendario"},le={class:"lista"},ne={key:0,class:"pagination"},ie={class:"items-pagination"},re={id:"images"},de=["src"],ce=te(()=>c("span",{class:"dialog-footer"},[c("div",{class:"container-bt-imprimir"})],-1)),ue={data:()=>({user:JSON.parse(localStorage.getItem("user")),vmls:[],starDate:new Date,endDate:new Date,registros:10,pagina:1,totalPaginas:null,selects:[],selectedBusiness:[],dialogVisible:!1,imgView:null,listaClientes:[],loading:!0,idgruposclientes:null,imagens:null}),created(){this.mountGrid()},watch:{endDate(){this.pagina=1,this.mountGrid()}},methods:{formatData:t=>new Date(t).toLocaleString([],{dateStyle:"short"}),setPage(t){this.selects=[],this.pagina=t,this.mountGrid()},async ViewAllSelected(){const t="https://portalmultilixo.blob.core.windows.net/portalmultilixo",e=new J;await this.selects.reduce(async(s,a,l)=>{await s,a.lstPathImagem.length>0?await a.lstPathImagem.reduce(async(o,r)=>{await f.get(t+r.pathImage,{responseType:"blob"}).then(()=>{var u=new Image;u.src=t+r.pathImage,e.addImage(u,"GIF",10,5,0,100),e.addPage()})},Promise.resolve()):await f.get(t+a.pathImagem,{responseType:"blob"}).then(()=>{var o=new Image;o.src=t+a.pathImagem,l!=0&&e.addPage(),e.addImage(o,"GIF",10,5,130,100)})},Promise.resolve()),window.open(e.output("bloburl"))},async downloadAllSelected(){const t="https://portalmultilixo.blob.core.windows.net/portalmultilixo",e=B(),s=[];await this.selects.reduce(async(a,l)=>{await a,l.lstPathImagem.length>0?await l.lstPathImagem.reduce(async(o,r)=>{await o,await f.get(t+r.pathImage,{responseType:"blob"}).then(u=>{var h=new Blob([u.data],{type:"image/gif"});s.push({name:r.pathImage,file:h})})},Promise.resolve()):await f.get(t+l.pathImagem,{responseType:"blob"}).then(o=>{var r=new Blob([o.data],{type:"image/gif"});s.push({name:l.pathImagem,file:r})})},Promise.resolve()),s.forEach(a=>{e.file(a.name,a.file)}),e.generateAsync({type:"blob"}).then(a=>{const l=new Blob([a]);z(l,"VMLsPortalMultilixo.zip")})},async downloadItem(t){if(this.setLoading(!0),t.lstPathImagem.length>0){const s="https://portalmultilixo.blob.core.windows.net/portalmultilixo",a=B(),l=[];await t.lstPathImagem.reduce(async(o,r)=>{await o,await f.get(s+r.pathImage,{responseType:"blob"}).then(u=>{var h=new Blob([u.data],{type:"image/gif"});l.push({name:r.pathImage,file:h})})},Promise.resolve()),l.forEach(o=>{a.file(o.name,o.file)}),a.generateAsync({type:"blob"}).then(o=>{const r=new Blob([o]);z(r,"VMLsPortalMultilixo.zip"),this.setLoading(!1)});return}const e="https://portalmultilixo.blob.core.windows.net/portalmultilixo"+t.pathImagem;window.open(e,"_blank")},viewItem(t){const e="https://portalmultilixo.blob.core.windows.net/portalmultilixo";if(t.lstPathImagem.length>0){const s=[];t.lstPathImagem.forEach(a=>{s.push({src:e+a.pathImage})}),this.imagens=s,this.dialogVisible=!0;return}f.get(e+t.pathImagem,{responseType:"blob"}).then(s=>{var a=new Blob([s.data],{type:"image/gif"}),l=URL.createObjectURL(a);window.open(l)})},changeFilterBusiness(t){t?this.selectedBusiness=[t]:this.selectedBusiness=[]},changeDates({start:t,end:e}){this.starDate=t,this.endDate=e},selectItem(t,e){e?this.selects.push(t):this.selects=this.selects.filter(s=>s!=t)},setLoading(t){const e=O.service({lock:!0,text:"Carregando...",background:"rgba(0, 0, 0, 0.7)"});t||e.close(),this.selects=[]},mountGrid(){const{idGruposClientes:t,role:e,id:s}=this.user,{pagina:a,registros:l,selectedBusiness:o,__API:r,setLoading:u}=this;u(!0);let h=null;e=="Admin"?h=`${r}/Cliente/grupo/`+t:h=`${r}/Usuario/acessos/`+s,A.Get(h).then(d=>{const v={vrl:0,pagina:a,registros:l,datainicial:this.starDate,datafinal:this.endDate,idgruposclientes:t,versao:2,listaclientes:d.data};o.length>0?v.listaclientes=o:e=="Admin"&&(v.listaclientes=[]),A.Post(`${r}/Vrls/periodo`,v).then(P=>{this.totalPaginas=P.data.total_registros,this.vmls=P.data.registros,u(!1)}).catch(()=>{u(!1),this.vmls=[]})})}}},pe=Object.assign(ue,{__name:"VmlLista",setup(t){return(e,s)=>{const a=g("el-button"),l=g("el-button-group"),o=g("el-col"),r=g("el-row"),u=g("el-pagination"),h=g("el-dialog");return m(),_(V,null,[n(q,{title:"Ordens de servico VML"}),n(j,{changeFilterBusiness:e.changeFilterBusiness,Pesquisar:e.mountGrid,idGrupoClientes:e.idgruposclientes,background:"#F08327"},null,8,["changeFilterBusiness","Pesquisar","idGrupoClientes"]),c("div",se,[c("div",ae,[c("div",oe,[n(l,{class:"button-download-container"},{default:i(()=>[n(a,{icon:y(U),class:k({"":!0,"button-download-active":e.selects.length>0}),disabled:e.selects.length==0,onClick:s[0]||(s[0]=d=>e.downloadAllSelected())},{default:i(()=>[p(" Download ")]),_:1},8,["icon","class","disabled"]),n(a,{icon:y(N),class:k({"":!0,"button-download-active":e.selects.length>0}),disabled:e.selects.length==0,onClick:s[1]||(s[1]=d=>e.ViewAllSelected())},{default:i(()=>[p("Visualizar ")]),_:1},8,["icon","class","disabled"])]),_:1}),n(ee,{changeDates:e.changeDates},null,8,["changeDates"])]),c("div",le,[n(r,{class:"lista-header"},{default:i(()=>[n(o,{span:1}),n(o,{span:3},{default:i(()=>[p("Cliente")]),_:1}),n(o,{span:9},{default:i(()=>[p("Nome")]),_:1}),n(o,{span:4},{default:i(()=>[p("VML")]),_:1}),n(o,{span:4},{default:i(()=>[p("Data")]),_:1}),n(o,{span:3},{default:i(()=>[p("Ações")]),_:1})]),_:1}),(m(!0),_(V,null,S(e.vmls,d=>(m(),I(X,{selectItem:e.selectItem,idVrls:d.idVrls,actionDownload:e.downloadItem,actionView:e.viewItem,data:d,selects:e.selects},{codCliente:i(()=>[p(b(d.codigoCliente),1)]),cnpj:i(()=>[p(b(d.nomeLocal!=""?d.nomeLocal:d.nome),1)]),vml:i(()=>[p(b(d.vrl),1)]),data:i(()=>[p(b(e.formatData(d.dataChamada)),1)]),_:2},1032,["selectItem","idVrls","actionDownload","actionView","data","selects"]))),256)),e.vmls.length===0?(m(),I(H,{key:0,message:"Nenhum VML encontrado"})):L("",!0)])]),e.vmls.length>0?(m(),_("div",ne,[c("div",ie,[n(u,{small:"",background:"",layout:"prev, pager, next",total:e.totalPaginas,modelValue:e.page,"onUpdate:modelValue":s[2]||(s[2]=d=>e.page=d),onCurrentChange:e.setPage,"page-size":e.registros},null,8,["total","modelValue","onCurrentChange","page-size"])])])):L("",!0)]),n(h,{modelValue:e.dialogVisible,"onUpdate:modelValue":s[3]||(s[3]=d=>e.dialogVisible=d),width:"80%"},{footer:i(()=>[ce]),default:i(()=>[c("div",re,[(m(!0),_(V,null,S(e.imagens,d=>(m(),_("img",{src:d.src,alt:"",style:{width:"100%","margin-top":"40px"}},null,8,de))),256))])]),_:1},8,["modelValue"])],64)}}}),me=D(pe,[["__scopeId","data-v-724b13dd"]]);const ge=t=>(C("data-v-f2ea29d1"),t=t(),$(),t),he={style:{"padding-top":"25px"}},_e=ge(()=>c("div",{class:"breadcumbs"},[c("div",{class:"home"},"Home"),c("div",{class:"ordens-service-vml"},"Ordens de serviço VML")],-1)),fe={__name:"VmlView",setup(t){return(e,s)=>(m(),_("div",he,[_e,c("div",null,[n(me)])]))}},Ce=D(fe,[["__scopeId","data-v-f2ea29d1"]]);export{Ce as default};