import{_ as y,r as p,o as m,j as V,w as l,b as o,k as f,e as A,a as r,l as F,u as D,m as L,p as P,g as B,c as h,z,n as I,f as c,A as G,F as $,i as M,d as k,E as N,t as w}from"./index-b5d1ec02.js";import{V as O,J as E,d as j}from"./file-download-d1215664.js";import{c as S}from"./controllerbase-3b2baa9b.js";import{_ as T}from"./VmlPesquisa-7092b5c8.js";import{T as q,E as H}from"./EmptyState-a1d746c0.js";import{a as v}from"./axios-4a70c6fc.js";import{E as J}from"./jspdf.es.min-96ee1c07.js";const U=t=>(P("data-v-b99cb41c"),t=t(),B(),t),R=["value"],Z=U(()=>r("div",{class:"texto-botao"},"Visualizar",-1)),K=U(()=>r("div",{class:"texto-botao"},"Download",-1)),Q={data:()=>({selected:!1}),props:{selectItem:{type:Function,default:()=>{}},selects:{type:Array,default:()=>[]},idVrls:{type:Number},actionDownload:{type:Function,default:()=>{}},actionView:{type:Function,default:()=>{}},data:{type:Array,default:[]}},watch:{selected(){this.$props.selectItem(this.$props.data,this.selected)},selects(t){t.length===0&&(this.selected=!1)}},methods:{zerarCheckboxes(){}}},W=Object.assign(Q,{__name:"VmlItem",setup(t){return(e,s)=>{const a=p("el-col"),n=p("el-button"),i=p("el-row");return m(),V(i,null,{default:l(()=>[o(a,{span:1},{default:l(()=>[f(e.$slots,"check",{class:"nome"},()=>[A(r("input",{type:"checkbox",value:e.selected,"onUpdate:modelValue":s[0]||(s[0]=u=>e.selected=u)},null,8,R),[[F,e.selected]])],!0)]),_:3}),o(a,{span:3},{default:l(()=>[f(e.$slots,"codCliente",{class:"nome"},void 0,!0)]),_:3}),o(a,{span:9},{default:l(()=>[f(e.$slots,"cnpj",{class:"nome"},void 0,!0)]),_:3}),o(a,{span:4},{default:l(()=>[f(e.$slots,"vml",{},void 0,!0)]),_:3}),o(a,{span:3},{default:l(()=>[f(e.$slots,"data",{},void 0,!0)]),_:3}),o(a,{span:4},{default:l(()=>[r("div",null,[o(n,{icon:O,onClick:s[1]||(s[1]=u=>e.$props.actionView(e.$props.data))},{default:l(()=>[Z]),_:1}),o(n,{icon:D(L),onClick:s[2]||(s[2]=u=>e.$props.actionDownload(e.$props.data))},{default:l(()=>[K]),_:1},8,["icon"])])]),_:1})]),_:3})}}}),X=y(W,[["__scopeId","data-v-b99cb41c"]]);const Y={class:"datepicker"},x={watch:{range:{deep:!0,handler({start:t,end:e}){if((t-e)/(1e3*60*60*24)*-1>30)z({showClose:!0,message:"Náo é possível selecionar um periodo maior que 30 dias.",type:"warning"});else{var n=new Date(t);n.setUTCHours(0,0,0,0),n.setUTCDate(n.getUTCDate());var t=n.toISOString(),i=new Date(e);i.setUTCHours(0,0,0,0),i.setUTCDate(i.getUTCDate());var e=i.toISOString();this.$props.changeDates({start:t,end:e},!0)}}}},props:{changeDates:{type:Function,default:()=>{}}},data(){var t=new Date;return t.setDate(t.getDate()-5),{range:{start:t,end:new Date},selectedColor:"teal"}}},ee=Object.assign(x,{__name:"VmlCalendario",setup(t){return(e,s)=>{const a=p("VDatePicker");return m(),h("div",Y,[o(a,{modelValue:e.range,"onUpdate:modelValue":s[0]||(s[0]=n=>e.range=n),modelModifiers:{range:!0},color:e.selectedColor,attributes:e.attributes,borderless:"",transparent:""},null,8,["modelValue","color","attributes"])])}}});const te={class:"container-vml"},se={class:"vml-lista-container"},ae={class:"calendario"},oe={class:"lista"},le={key:0,class:"pagination"},ne={class:"items-pagination"},ie=["src"],de={class:"dialog-footer"},re={data:()=>({user:JSON.parse(localStorage.getItem("user")),vmls:[],starDate:new Date,endDate:new Date,registros:10,pagina:1,totalPaginas:null,selects:[],selectedBusiness:[],dialogVisible:!1,imgView:null,listaClientes:[],loading:!0,idgruposclientes:null}),created(){this.mountGrid()},watch:{pagina(){this.mountGrid()},endDate(){this.mountGrid()}},methods:{formatData:t=>new Date(t).toLocaleString([],{dateStyle:"short"}),setPage(t){this.selects=[],this.pagina=t},async ViewAllSelected(){const t="https://portalmultilixo.blob.core.windows.net/portalmultilixo",e=new J;await this.selects.reduce(async(s,a,n)=>{await s,await v.get(t+a.pathImagem,{responseType:"blob"}).then(()=>{var i=new Image;i.src=t+a.pathImagem,n!=0&&e.addPage(),e.addImage(i,"GIF",10,5,130,100)})},Promise.resolve()),window.open(e.output("bloburl"))},async downloadAllSelected(){const t="https://portalmultilixo.blob.core.windows.net/portalmultilixo",e=E(),s=[];await this.selects.reduce(async(a,n)=>{await a,await v.get(t+n.pathImagem,{responseType:"blob"}).then(i=>{var u=new Blob([i.data],{type:"image/gif"});s.push({name:n.pathImagem,file:u})})},Promise.resolve()),s.forEach(a=>{e.file(a.name,a.file)}),e.generateAsync({type:"blob"}).then(a=>{const n=new Blob([a]);j(n,"VMLsPortalMultilixo.zip")})},downloadItem(t){const e="https://portalmultilixo.blob.core.windows.net/portalmultilixo"+t.pathImagem;window.open(e,"_blank")},viewItem(t){const e="https://portalmultilixo.blob.core.windows.net/portalmultilixo"+t.pathImagem;v.get(e,{responseType:"blob"}).then(s=>{var a=new Blob([s.data],{type:"image/gif"}),n=URL.createObjectURL(a);window.open(n)})},changeFilterBusiness(t){t?this.selectedBusiness=[t]:this.selectedBusiness=[]},changeDates({start:t,end:e}){this.starDate=t,this.endDate=e},selectItem(t,e){e?this.selects.push(t):this.selects=this.selects.filter(s=>s!=t)},setLoading(t){const e=N.service({lock:!0,text:"Carregando...",background:"rgba(0, 0, 0, 0.7)"});t||e.close(),this.selects=[]},mountGrid(){const{idGruposClientes:t,role:e,id:s}=this.user,{pagina:a,registros:n,selectedBusiness:i,__API:u,setLoading:g}=this;g(!0);let _=null;e=="Admin"?_=`${u}/Cliente/grupo/`+t:_=`${u}/Usuario/acessos/`+s,S.Get(_).then(d=>{const b={vrl:0,pagina:a,registros:n,datainicial:this.starDate,datafinal:this.endDate,idgruposclientes:t,versao:2,listaclientes:d.data};i.length>0?b.listaclientes=i:e=="Admin"&&(b.listaclientes=[]),S.Post(`${u}/Vrls/periodo`,b).then(C=>{this.totalPaginas=C.data.total_registros,this.vmls=C.data.registros,g(!1)}).catch(()=>{g(!1),this.vmls=[]})})}}},ce=Object.assign(re,{__name:"VmlLista",setup(t){return(e,s)=>{const a=p("el-button"),n=p("el-button-group"),i=p("el-col"),u=p("el-row"),g=p("el-pagination"),_=p("el-dialog");return m(),h($,null,[o(q,{title:"Ordens de servico VML"}),o(T,{changeFilterBusiness:e.changeFilterBusiness,Pesquisar:e.mountGrid,idGrupoClientes:e.idgruposclientes,background:"#F08327"},null,8,["changeFilterBusiness","Pesquisar","idGrupoClientes"]),r("div",te,[r("div",se,[r("div",ae,[o(n,{class:"button-download-container"},{default:l(()=>[o(a,{icon:D(L),class:I({"":!0,"button-download-active":e.selects.length>0}),disabled:e.selects.length==0,onClick:s[0]||(s[0]=d=>e.downloadAllSelected())},{default:l(()=>[c(" Download ")]),_:1},8,["icon","class","disabled"]),o(a,{icon:D(G),class:I({"":!0,"button-download-active":e.selects.length>0}),disabled:e.selects.length==0,onClick:s[1]||(s[1]=d=>e.ViewAllSelected())},{default:l(()=>[c("Visualizar ")]),_:1},8,["icon","class","disabled"])]),_:1}),o(ee,{changeDates:e.changeDates},null,8,["changeDates"])]),r("div",oe,[o(u,{class:"lista-header"},{default:l(()=>[o(i,{span:1}),o(i,{span:3},{default:l(()=>[c("Cliente")]),_:1}),o(i,{span:9},{default:l(()=>[c("Nome")]),_:1}),o(i,{span:4},{default:l(()=>[c("VML")]),_:1}),o(i,{span:4},{default:l(()=>[c("Data")]),_:1}),o(i,{span:3},{default:l(()=>[c("Ações")]),_:1})]),_:1}),(m(!0),h($,null,M(e.vmls,d=>(m(),V(X,{selectItem:e.selectItem,idVrls:d.idVrls,actionDownload:e.downloadItem,actionView:e.viewItem,data:d,selects:e.selects},{codCliente:l(()=>[c(w(d.codigoCliente),1)]),cnpj:l(()=>[c(w(d.nomeLocal!=""?d.nomeLocal:d.nome),1)]),vml:l(()=>[c(w(d.vrl),1)]),data:l(()=>[c(w(e.formatData(d.dataChamada)),1)]),_:2},1032,["selectItem","idVrls","actionDownload","actionView","data","selects"]))),256)),e.vmls.length===0?(m(),V(H,{key:0,message:"Nenhum VML encontrado"})):k("",!0)])]),e.vmls.length>0?(m(),h("div",le,[r("div",ne,[o(g,{small:"",background:"",layout:"prev, pager, next",total:e.totalPaginas,modelValue:e.page,"onUpdate:modelValue":s[2]||(s[2]=d=>e.page=d),onCurrentChange:e.setPage,"page-size":e.registros},null,8,["total","modelValue","onCurrentChange","page-size"])])])):k("",!0),o(_,{modelValue:e.dialogVisible,"onUpdate:modelValue":s[4]||(s[4]=d=>e.dialogVisible=d),width:"80%","before-close":e.handleClose},{footer:l(()=>[r("span",de,[o(a,{onClick:s[3]||(s[3]=d=>e.dialogVisible=!1)},{default:l(()=>[c("Fechar")]),_:1})])]),default:l(()=>[r("img",{src:e.imgView,style:{width:"100%"}},null,8,ie)]),_:1},8,["modelValue","before-close"])])],64)}}}),ue=y(ce,[["__scopeId","data-v-e515d91a"]]);const pe=t=>(P("data-v-f2ea29d1"),t=t(),B(),t),me={style:{"padding-top":"25px"}},ge=pe(()=>r("div",{class:"breadcumbs"},[r("div",{class:"home"},"Home"),r("div",{class:"ordens-service-vml"},"Ordens de serviço VML")],-1)),_e={__name:"VmlView",setup(t){return(e,s)=>(m(),h("div",me,[ge,r("div",null,[o(ue)])]))}},ye=y(_e,[["__scopeId","data-v-f2ea29d1"]]);export{ye as default};