import{_ as y,r as p,o as m,i as v,w as l,b as o,j as f,e as P,a as r,k as F,u as V,l as k,p as S,g as L,c as g,z as A,n as D,f as u,A as z,F as I,m as G,d as $,E as M,t as w}from"./index-602f8ecb.js";import{V as N,J as O,d as E}from"./file-download-d20bcfcc.js";import{c as C}from"./controllerbase-f6de9c04.js";import{T as j,_ as U,E as T}from"./EmptyState-36008da4.js";import{a as b}from"./axios-4a70c6fc.js";import{E as q}from"./jspdf.es.min-bd0b835c.js";const B=t=>(S("data-v-b06ee0b7"),t=t(),L(),t),J=["value"],R=B(()=>r("div",{class:"texto-botao"},"Visualizar",-1)),H=B(()=>r("div",{class:"texto-botao"},"Download",-1)),Z={data:()=>({selected:!1}),props:{selectItem:{type:Function,default:()=>{}},idVrls:{type:Number},actionDownload:{type:Function,default:()=>{}},actionView:{type:Function,default:()=>{}},data:{type:Array,default:[]}},watch:{selected(){this.$props.selectItem(this.$props.data,this.selected)}}},K=Object.assign(Z,{__name:"VmlItem",setup(t){return(e,s)=>{const a=p("el-col"),n=p("el-button"),d=p("el-row");return m(),v(d,null,{default:l(()=>[o(a,{span:1},{default:l(()=>[f(e.$slots,"check",{class:"nome"},()=>[P(r("input",{type:"checkbox",value:e.selected,"onUpdate:modelValue":s[0]||(s[0]=c=>e.selected=c)},null,8,J),[[F,e.selected]])],!0)]),_:3}),o(a,{span:11},{default:l(()=>[f(e.$slots,"cnpj",{class:"nome"},void 0,!0)]),_:3}),o(a,{span:4},{default:l(()=>[f(e.$slots,"vml",{},void 0,!0)]),_:3}),o(a,{span:4},{default:l(()=>[f(e.$slots,"data",{},void 0,!0)]),_:3}),o(a,{span:4},{default:l(()=>[r("div",null,[o(n,{icon:N,onClick:s[1]||(s[1]=c=>e.$props.actionView(e.$props.data))},{default:l(()=>[R]),_:1}),o(n,{icon:V(k),onClick:s[2]||(s[2]=c=>e.$props.actionDownload(e.$props.data))},{default:l(()=>[H]),_:1},8,["icon"])])]),_:1})]),_:3})}}}),Q=y(K,[["__scopeId","data-v-b06ee0b7"]]);const W={class:"datepicker"},X={watch:{range:{deep:!0,handler({start:t,end:e}){(t-e)/(1e3*60*60*24)*-1>30?A({showClose:!0,message:"Náo é possível selecionar um periodo maior que 30 dias.",type:"warning"}):this.$props.changeDates({start:t,end:e},!0)}}},props:{changeDates:{type:Function,default:()=>{}}},data(){var t=new Date;return t.setDate(t.getDate()-5),{range:{start:t,end:new Date},selectedColor:"teal"}}},Y=Object.assign(X,{__name:"VmlCalendario",setup(t){return(e,s)=>{const a=p("VDatePicker");return m(),g("div",W,[o(a,{modelValue:e.range,"onUpdate:modelValue":s[0]||(s[0]=n=>e.range=n),modelModifiers:{range:!0},color:e.selectedColor,attributes:e.attributes,borderless:"",transparent:""},null,8,["modelValue","color","attributes"])])}}});const x={class:"container-vml"},ee={class:"vml-lista-container"},te={class:"calendario"},se={class:"lista"},ae={key:0,class:"pagination"},oe={class:"items-pagination"},le=["src"],ne={class:"dialog-footer"},ie={data:()=>({user:JSON.parse(localStorage.getItem("user")),vmls:[],starDate:new Date,endDate:new Date,registros:10,pagina:1,totalPaginas:null,selects:[],selectedBusiness:[],dialogVisible:!1,imgView:null,listaClientes:[],loading:!0,idgruposclientes:null}),created(){this.mountGrid()},watch:{pagina(){this.mountGrid()},endDate(){this.mountGrid()}},methods:{formatData:t=>new Date(t).toLocaleString([],{dateStyle:"short"}),setPage(t){this.pagina=t},async ViewAllSelected(){const t="https://portalmultilixo.blob.core.windows.net/portalmultilixo",e=new q;await this.selects.reduce(async(s,a,n)=>{await s,await b.get(t+a.pathImagem,{responseType:"blob"}).then(()=>{var d=new Image;d.src=t+a.pathImagem,n!=0&&e.addPage(),e.addImage(d,"GIF",10,5,130,100)})},Promise.resolve()),window.open(e.output("bloburl"))},async downloadAllSelected(){const t="https://portalmultilixo.blob.core.windows.net/portalmultilixo",e=O(),s=[];await this.selects.reduce(async(a,n)=>{await a,await b.get(t+n.pathImagem,{responseType:"blob"}).then(d=>{var c=new Blob([d.data],{type:"image/gif"});s.push({name:n.pathImagem,file:c})})},Promise.resolve()),s.forEach(a=>{e.file(a.name,a.file)}),e.generateAsync({type:"blob"}).then(a=>{const n=new Blob([a]);E(n,"VMLsPortalMultilixo.zip")})},downloadItem(t){const e="https://portalmultilixo.blob.core.windows.net/portalmultilixo"+t.pathImagem;window.open(e,"_blank")},viewItem(t){const e="https://portalmultilixo.blob.core.windows.net/portalmultilixo"+t.pathImagem;b.get(e,{responseType:"blob"}).then(s=>{var a=new Blob([s.data],{type:"image/gif"}),n=URL.createObjectURL(a);window.open(n)})},changeFilterBusiness(t){t?this.selectedBusiness=[t]:this.selectedBusiness=[]},changeDates({start:t,end:e}){this.starDate=new Date(t),this.endDate=new Date(e)},selectItem(t,e){e?this.selects.push(t):this.selects=this.selects.filter(s=>s!=t)},setLoading(t){const e=M.service({lock:!0,text:"Carregando...",background:"rgba(0, 0, 0, 0.7)"});t||e.close(),this.selects=[]},mountGrid(){const{idGruposClientes:t,role:e}=this.user,{pagina:s,registros:a,selectedBusiness:n,__API:d,setLoading:c}=this;c(!0),C.Get(`${d}/Cliente/grupo/`+t).then(h=>{const _={vrl:0,pagina:s,registros:a,datainicial:this.starDate.toISOString(),datafinal:this.endDate.toISOString(),idgruposclientes:t,versao:2,listaclientes:h.data};n.length>0?_.listaclientes=n:e=="Admin"&&(_.listaclientes=[]),C.Post(`${d}/Vrls/periodo`,_).then(i=>{this.totalPaginas=i.data.total_registros,this.vmls=i.data.registros,c(!1)}).catch(()=>{c(!1),this.vmls=[]})})}}},de=Object.assign(ie,{__name:"VmlLista",setup(t){return(e,s)=>{const a=p("el-button"),n=p("el-button-group"),d=p("el-col"),c=p("el-row"),h=p("el-pagination"),_=p("el-dialog");return m(),g(I,null,[o(j,{title:"Ordens de servico VML"}),o(U,{changeFilterBusiness:e.changeFilterBusiness,Pesquisar:e.mountGrid,idGrupoClientes:e.idgruposclientes,background:"#F08327"},null,8,["changeFilterBusiness","Pesquisar","idGrupoClientes"]),r("div",x,[r("div",ee,[r("div",te,[o(n,{class:"button-download-container"},{default:l(()=>[o(a,{icon:V(k),class:D({"":!0,"button-download-active":e.selects.length>0}),disabled:e.selects.length==0,onClick:s[0]||(s[0]=i=>e.downloadAllSelected())},{default:l(()=>[u(" Download ")]),_:1},8,["icon","class","disabled"]),o(a,{icon:V(z),class:D({"":!0,"button-download-active":e.selects.length>0}),disabled:e.selects.length==0,onClick:s[1]||(s[1]=i=>e.ViewAllSelected())},{default:l(()=>[u("Visualizar ")]),_:1},8,["icon","class","disabled"])]),_:1}),o(Y,{changeDates:e.changeDates},null,8,["changeDates"])]),r("div",se,[o(c,{class:"lista-header"},{default:l(()=>[o(d,{span:1}),o(d,{span:11},{default:l(()=>[u("Nome")]),_:1}),o(d,{span:4},{default:l(()=>[u("VML")]),_:1}),o(d,{span:4},{default:l(()=>[u("Data")]),_:1}),o(d,{span:4},{default:l(()=>[u("Ações")]),_:1})]),_:1}),(m(!0),g(I,null,G(e.vmls,i=>(m(),v(Q,{selectItem:e.selectItem,idVrls:i.idVrls,actionDownload:e.downloadItem,actionView:e.viewItem,data:i},{cnpj:l(()=>[u(w(i.nomeLocal!=""?i.nomeLocal:i.nome),1)]),vml:l(()=>[u(w(i.vrl),1)]),data:l(()=>[u(w(e.formatData(i.dataBaixa)),1)]),_:2},1032,["selectItem","idVrls","actionDownload","actionView","data"]))),256)),e.vmls.length===0?(m(),v(T,{key:0,message:"Nenhum VML encontrado"})):$("",!0)])]),e.vmls.length>0?(m(),g("div",ae,[r("div",oe,[o(h,{small:"",background:"",layout:"prev, pager, next",total:e.totalPaginas,modelValue:e.page,"onUpdate:modelValue":s[2]||(s[2]=i=>e.page=i),onCurrentChange:e.setPage,"page-size":e.registros},null,8,["total","modelValue","onCurrentChange","page-size"])])])):$("",!0),o(_,{modelValue:e.dialogVisible,"onUpdate:modelValue":s[4]||(s[4]=i=>e.dialogVisible=i),width:"80%","before-close":e.handleClose},{footer:l(()=>[r("span",ne,[o(a,{onClick:s[3]||(s[3]=i=>e.dialogVisible=!1)},{default:l(()=>[u("Fechar")]),_:1})])]),default:l(()=>[r("img",{src:e.imgView,style:{width:"100%"}},null,8,le)]),_:1},8,["modelValue","before-close"])])],64)}}}),re=y(de,[["__scopeId","data-v-9f0ca871"]]);const ce=t=>(S("data-v-f2ea29d1"),t=t(),L(),t),ue={style:{"padding-top":"25px"}},pe=ce(()=>r("div",{class:"breadcumbs"},[r("div",{class:"home"},"Home"),r("div",{class:"ordens-service-vml"},"Ordens de serviço VML")],-1)),me={__name:"VmlView",setup(t){return(e,s)=>(m(),g("div",ue,[pe,r("div",null,[o(re)])]))}},ve=y(me,[["__scopeId","data-v-f2ea29d1"]]);export{ve as default};
