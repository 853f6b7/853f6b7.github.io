import{_ as D,r as g,o as m,k as I,w as i,b as n,l as b,e as G,a as p,m as M,u as y,q as A,p as U,h as z,c as _,A as E,n as $,g as u,B as N,F as v,j as P,d as L,E as O,t as w}from"./index-c9d7de8a.js";import{V as T}from"./VisualizarArquivoVml-18d52db7.js";import{c as k}from"./controllerbase-fca99fd1.js";import{_ as j}from"./VmlPesquisa-987309b1.js";import{J as B,d as S}from"./file-download-5fdcaca7.js";import{T as q,E as J}from"./EmptyState-a327e892.js";import{a as f}from"./axios-4a70c6fc.js";import{E as R}from"./jspdf.es.min-f8330412.js";import{B as H}from"./Breadcumbs-15be3e98.js";const F=t=>(U("data-v-b99cb41c"),t=t(),z(),t),Z=["value"],K=F(()=>p("div",{class:"texto-botao"},"Visualizar",-1)),Q=F(()=>p("div",{class:"texto-botao"},"Download",-1)),W={data:()=>({selected:!1}),props:{selectItem:{type:Function,default:()=>{}},selects:{type:Array,default:()=>[]},idVrls:{type:Number},actionDownload:{type:Function,default:()=>{}},actionView:{type:Function,default:()=>{}},data:{type:Array,default:[]}},watch:{selected(){this.$props.selectItem(this.$props.data,this.selected)},selects(t){t.length===0&&(this.selected=!1)}},methods:{zerarCheckboxes(){}}},X=Object.assign(W,{__name:"VmlItem",setup(t){return(e,a)=>{const s=g("el-col"),l=g("el-button"),o=g("el-row");return m(),I(o,null,{default:i(()=>[n(s,{span:1},{default:i(()=>[b(e.$slots,"check",{class:"nome"},()=>[G(p("input",{type:"checkbox",value:e.selected,"onUpdate:modelValue":a[0]||(a[0]=r=>e.selected=r)},null,8,Z),[[M,e.selected]])],!0)]),_:3}),n(s,{span:3},{default:i(()=>[b(e.$slots,"codCliente",{class:"nome"},void 0,!0)]),_:3}),n(s,{span:9},{default:i(()=>[b(e.$slots,"cnpj",{class:"nome"},void 0,!0)]),_:3}),n(s,{span:4},{default:i(()=>[b(e.$slots,"vml",{},void 0,!0)]),_:3}),n(s,{span:3},{default:i(()=>[b(e.$slots,"data",{},void 0,!0)]),_:3}),n(s,{span:4},{default:i(()=>[p("div",null,[n(l,{icon:T,onClick:a[1]||(a[1]=r=>e.$props.actionView(e.$props.data))},{default:i(()=>[K]),_:1}),n(l,{icon:y(A),onClick:a[2]||(a[2]=r=>e.$props.actionDownload(e.$props.data))},{default:i(()=>[Q]),_:1},8,["icon"])])]),_:1})]),_:3})}}}),Y=D(X,[["__scopeId","data-v-b99cb41c"]]);const x={class:"datepicker"},ee={watch:{range:{deep:!0,handler({start:t,end:e}){if((t-e)/(1e3*60*60*24)*-1>30)E({showClose:!0,message:"Náo é possível selecionar um periodo maior que 30 dias.",type:"warning"});else{var l=new Date(t);l.setUTCHours(0,0,0,0),l.setUTCDate(l.getUTCDate());var t=l.toISOString(),o=new Date(e);o.setUTCHours(0,0,0,0),o.setUTCDate(o.getUTCDate());var e=o.toISOString();this.$props.changeDates({start:t,end:e},!0)}}}},props:{changeDates:{type:Function,default:()=>{}}},data(){var t=new Date;return t.setDate(t.getDate()-5),{range:{start:t,end:new Date},selectedColor:"teal"}}},te=Object.assign(ee,{__name:"VmlCalendario",setup(t){return(e,a)=>{const s=g("VDatePicker");return m(),_("div",x,[n(s,{modelValue:e.range,"onUpdate:modelValue":a[0]||(a[0]=l=>e.range=l),modelModifiers:{range:!0},color:e.selectedColor,attributes:e.attributes,borderless:"",transparent:""},null,8,["modelValue","color","attributes"])])}}});const ae=t=>(U("data-v-65cb8afa"),t=t(),z(),t),se={class:"container-vml"},oe={class:"vml-lista-container"},le={class:"calendario"},ne={class:"lista"},ie={key:0,class:"pagination"},re={class:"items-pagination"},de={id:"images"},ce=["src"],ue=ae(()=>p("span",{class:"dialog-footer"},[p("div",{class:"container-bt-imprimir"})],-1)),pe={data:()=>({user:JSON.parse(sessionStorage.getItem("user")),vmls:[],starDate:new Date,endDate:new Date,registros:10,pagina:1,totalPaginas:null,selects:[],selectedBusiness:[],dialogVisible:!1,imgView:null,listaClientes:[],loading:!0,idgruposclientes:null,imagens:null}),created(){this.mountGrid()},watch:{endDate(){this.pagina=1,this.mountGrid()}},methods:{formatData:t=>new Date(t).toLocaleString([],{dateStyle:"short"}),setPage(t){this.selects=[],this.pagina=t,this.mountGrid()},async ViewAllSelected(){const t="https://portalmultilixo.blob.core.windows.net/portalmultilixo",e=new R;await this.selects.reduce(async(a,s,l)=>{await a,s.lstPathImagem.length>0?await s.lstPathImagem.reduce(async(o,r)=>{await f.get(t+r.pathImage,{responseType:"blob"}).then(()=>{var c=new Image;c.src=t+r.pathImage,e.addImage(c,"GIF",10,5,0,100),e.addPage()})},Promise.resolve()):await f.get(t+s.pathImagem,{responseType:"blob"}).then(()=>{var o=new Image;o.src=t+s.pathImagem,l!=0&&e.addPage(),e.addImage(o,"GIF",10,5,130,100)})},Promise.resolve()),window.open(e.output("bloburl"))},async downloadAllSelected(){const t="https://portalmultilixo.blob.core.windows.net/portalmultilixo",e=B(),a=[];this.setLoading(!0),await this.selects.reduce(async(s,l)=>{await s,l.lstPathImagem.length>0?await l.lstPathImagem.reduce(async(o,r)=>{await o,await f.get(t+r.pathImage,{responseType:"blob"}).then(c=>{var h=new Blob([c.data],{type:"image/gif"});a.push({name:r.pathImage,file:h})})},Promise.resolve()):await f.get(t+l.pathImagem,{responseType:"blob"}).then(o=>{var r=new Blob([o.data],{type:"image/gif"});a.push({name:l.pathImagem,file:r})})},Promise.resolve()),a.forEach(s=>{e.file(s.name,s.file)}),e.generateAsync({type:"blob"}).then(s=>{const l=new Blob([s]);this.setLoading(!1),S(l,"VMLsPortalMultilixo.zip")})},async downloadItem(t){if(this.setLoading(!0),t.lstPathImagem.length>0){const a="https://portalmultilixo.blob.core.windows.net/portalmultilixo",s=B(),l=[];await t.lstPathImagem.reduce(async(o,r)=>{await o,await f.get(a+r.pathImage,{responseType:"blob"}).then(c=>{var h=new Blob([c.data],{type:"image/gif"});l.push({name:r.pathImage,file:h})})},Promise.resolve()),l.forEach(o=>{s.file(o.name,o.file)}),s.generateAsync({type:"blob"}).then(o=>{const r=new Blob([o]);S(r,"VMLsPortalMultilixo.zip"),this.setLoading(!1)});return}const e="https://portalmultilixo.blob.core.windows.net/portalmultilixo"+t.pathImagem;window.open(e,"_blank")},viewItem(t){const e="https://portalmultilixo.blob.core.windows.net/portalmultilixo";if(t.lstPathImagem.length>0){const a=[];t.lstPathImagem.forEach(s=>{a.push({src:e+s.pathImage})}),this.imagens=a,this.dialogVisible=!0;return}f.get(e+t.pathImagem,{responseType:"blob"}).then(a=>{var s=new Blob([a.data],{type:"image/gif"}),l=URL.createObjectURL(s);window.open(l)})},changeFilterBusiness(t){t?this.selectedBusiness=[t]:this.selectedBusiness=[]},changeDates({start:t,end:e}){this.starDate=t,this.endDate=e,this.selects=[]},selectItem(t,e){e?this.selects.push(t):this.selects=this.selects.filter(a=>a!=t)},setLoading(t){const e=O.service({lock:!0,text:"Carregando...",background:"rgba(0, 0, 0, 0.7)"});t||e.close()},mountGrid(){const{idGruposClientes:t,role:e,id:a}=this.user,{pagina:s,registros:l,selectedBusiness:o,__API:r,setLoading:c}=this;c(!0);let h=null;e=="Admin"?h=`${r}/Cliente/grupo/`+t:h=`${r}/Usuario/acessos/`+a,k.Get(h).then(d=>{const V={vrl:0,pagina:s,registros:l,datainicial:this.starDate,datafinal:this.endDate,idgruposclientes:t,versao:2,listaclientes:d.data};o.length>0?V.listaclientes=o:e=="Admin"&&(V.listaclientes=[]),k.Post(`${r}/Vrls/periodo`,V).then(C=>{this.totalPaginas=C.data.total_registros,this.vmls=C.data.registros,c(!1)}).catch(()=>{c(!1),this.vmls=[]})})}}},me=Object.assign(pe,{__name:"VmlLista",setup(t){return(e,a)=>{const s=g("el-button"),l=g("el-button-group"),o=g("el-col"),r=g("el-row"),c=g("el-pagination"),h=g("el-dialog");return m(),_(v,null,[n(q,{title:"Ordens de servico VML"}),n(j,{changeFilterBusiness:e.changeFilterBusiness,Pesquisar:e.mountGrid,idGrupoClientes:e.idgruposclientes,background:"#F08327"},null,8,["changeFilterBusiness","Pesquisar","idGrupoClientes"]),p("div",se,[p("div",oe,[p("div",le,[n(l,{class:"button-download-container"},{default:i(()=>[n(s,{icon:y(A),class:$({"":!0,"button-download-active":e.selects.length>0}),disabled:e.selects.length==0,onClick:a[0]||(a[0]=d=>e.downloadAllSelected())},{default:i(()=>[u(" Download ")]),_:1},8,["icon","class","disabled"]),n(s,{icon:y(N),class:$({"":!0,"button-download-active":e.selects.length>0}),disabled:e.selects.length==0,onClick:a[1]||(a[1]=d=>e.ViewAllSelected())},{default:i(()=>[u("Visualizar ")]),_:1},8,["icon","class","disabled"])]),_:1}),n(te,{changeDates:e.changeDates},null,8,["changeDates"])]),p("div",ne,[n(r,{class:"lista-header"},{default:i(()=>[n(o,{span:1}),n(o,{span:3},{default:i(()=>[u("Cliente")]),_:1}),n(o,{span:9},{default:i(()=>[u("Nome")]),_:1}),n(o,{span:4},{default:i(()=>[u("VML")]),_:1}),n(o,{span:4},{default:i(()=>[u("Data")]),_:1}),n(o,{span:3},{default:i(()=>[u("Ações")]),_:1})]),_:1}),(m(!0),_(v,null,P(e.vmls,d=>(m(),I(Y,{selectItem:e.selectItem,idVrls:d.idVrls,actionDownload:e.downloadItem,actionView:e.viewItem,data:d,selects:e.selects},{codCliente:i(()=>[u(w(d.codigoCliente),1)]),cnpj:i(()=>[u(w(d.nomeLocal!=""?d.nomeLocal:d.nome),1)]),vml:i(()=>[u(w(d.vrl),1)]),data:i(()=>[u(w(e.formatData(d.dataChamada)),1)]),_:2},1032,["selectItem","idVrls","actionDownload","actionView","data","selects"]))),256)),e.vmls.length===0?(m(),I(J,{key:0,message:"Nenhum VML encontrado"})):L("",!0)])]),e.vmls.length>0?(m(),_("div",ie,[p("div",re,[n(c,{small:"",background:"",layout:"prev, pager, next",total:e.totalPaginas,modelValue:e.page,"onUpdate:modelValue":a[2]||(a[2]=d=>e.page=d),onCurrentChange:e.setPage,"page-size":e.registros},null,8,["total","modelValue","onCurrentChange","page-size"])])])):L("",!0)]),n(h,{modelValue:e.dialogVisible,"onUpdate:modelValue":a[3]||(a[3]=d=>e.dialogVisible=d),width:"80%"},{footer:i(()=>[ue]),default:i(()=>[p("div",de,[(m(!0),_(v,null,P(e.imagens,d=>(m(),_("img",{src:d.src,alt:"",style:{width:"100%","margin-top":"40px"}},null,8,ce))),256))])]),_:1},8,["modelValue"])],64)}}}),ge=D(me,[["__scopeId","data-v-65cb8afa"]]);const he={__name:"VmlView",setup(t){return(e,a)=>(m(),_(v,null,[n(H,null,{titulo:i(()=>[u("Ordens de serviço VML")]),_:1}),n(ge)],64))}},Ce=D(he,[["__scopeId","data-v-6601bccf"]]);export{Ce as default};