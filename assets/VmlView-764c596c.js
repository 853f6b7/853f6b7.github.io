import{_ as T,r as f,o as m,m as z,w as n,b as l,A as V,g as N,a as g,C as O,u as P,x as F,p as q,j as E,c as _,n as A,i as p,D as j,F as D,l as $,d as k,t as w,q as B,e as b,G as I,E as R}from"./index-9cafa99c.js";import{V as J}from"./VisualizarArquivoVml-fe6ff218.js";import{_ as Z}from"./VmlPesquisa-4f8ac902.js";import{J as M,d as S}from"./file-download-747021c5.js";import{T as H,E as K}from"./EmptyState-2c1cfda0.js";import{E as Q}from"./jspdf.es.min-3581839d.js";import{B as W}from"./Breadcumbs-e795f2da.js";/* empty css                                                    */const G=t=>(q("data-v-c9a7ee69"),t=t(),E(),t),X=["value"],Y=G(()=>g("div",{class:"texto-botao"},"Visualizar",-1)),x=G(()=>g("div",{class:"texto-botao"},"Download",-1)),ee={data:()=>({selected:!1}),props:{selectItem:{type:Function,default:()=>{}},selects:{type:Array,default:()=>[]},idVrls:{type:Number},actionDownload:{type:Function,default:()=>{}},actionView:{type:Function,default:()=>{}},data:{type:Array,default:[]}},watch:{selected(){this.$props.selectItem(this.$props.data,this.selected)},selects(t){t.length===0&&(this.selected=!1)}},methods:{zerarCheckboxes(){}}},te=Object.assign(ee,{__name:"VmlItem",setup(t){return(e,a)=>{const s=f("el-col"),o=f("el-button"),d=f("el-row");return m(),z(d,null,{default:n(()=>[l(s,{span:1},{default:n(()=>[V(e.$slots,"check",{class:"nome"},()=>[N(g("input",{type:"checkbox",value:e.selected,"onUpdate:modelValue":a[0]||(a[0]=i=>e.selected=i)},null,8,X),[[O,e.selected]])],!0)]),_:3}),l(s,{span:3},{default:n(()=>[V(e.$slots,"codCliente",{class:"nome"},void 0,!0)]),_:3}),l(s,{span:9,style:{"padding-right":"5px"}},{default:n(()=>[V(e.$slots,"cnpj",{class:"nome"},void 0,!0)]),_:3}),l(s,{span:4},{default:n(()=>[V(e.$slots,"vml",{},void 0,!0)]),_:3}),l(s,{span:3},{default:n(()=>[V(e.$slots,"data",{},void 0,!0)]),_:3}),l(s,{span:4},{default:n(()=>[g("div",null,[l(o,{icon:J,onClick:a[1]||(a[1]=i=>e.$props.actionView(e.$props.data))},{default:n(()=>[Y]),_:1}),l(o,{icon:P(F),onClick:a[2]||(a[2]=i=>e.$props.actionDownload(e.$props.data))},{default:n(()=>[x]),_:1},8,["icon"])])]),_:1})]),_:3})}}}),ae=T(te,[["__scopeId","data-v-c9a7ee69"]]);const se={class:"datepicker"},oe={watch:{range:{deep:!0,handler({start:s,end:d}){var a=new Date(s);a.setUTCHours(0,0,0,0),a.setUTCDate(a.getUTCDate());var s=a.toISOString(),o=new Date(d);o.setUTCHours(0,0,0,0),o.setUTCDate(o.getUTCDate());var d=o.toISOString();this.$props.changeDates({start:s,end:d},!0)}}},props:{changeDates:{type:Function,default:()=>{}}},data(){var t=new Date;return t.setDate(t.getDate()-5),{range:{start:t,end:new Date},selectedColor:"teal"}}},le=Object.assign(oe,{__name:"VmlCalendario",setup(t){return(e,a)=>{const s=f("VDatePicker");return m(),_("div",se,[l(s,{modelValue:e.range,"onUpdate:modelValue":a[0]||(a[0]=o=>e.range=o),modelModifiers:{range:!0},color:e.selectedColor,attributes:e.attributes,borderless:"",transparent:""},null,8,["modelValue","color","attributes"])])}}});const L=t=>(q("data-v-65af9ee8"),t=t(),E(),t),ne={class:"container-vml"},ie={class:"vml-lista-container"},re={class:"calendario"},de=L(()=>g("br",null,null,-1)),ce={class:"lista"},ue={key:0,class:"pagination"},pe={class:"items-pagination"},ge={id:"images"},me=["src"],he=L(()=>g("span",{class:"dialog-footer"},[g("div",{class:"container-bt-imprimir"})],-1)),fe={key:0,class:"progresso"},_e=L(()=>g("br",null,null,-1)),we=L(()=>g("br",null,null,-1)),be={class:"infinite-list-wrapper"},ve={data:()=>({user:JSON.parse(sessionStorage.getItem("user")),vmls:[],starDate:new Date,endDate:new Date,registros:10,pagina:1,totalPaginas:0,selects:[],selectedBusiness:[],dialogVisible:!1,imgView:null,listaClientes:[],loading:!0,idgruposclientes:null,imagens:null,downloadAllVisible:!1,loadingActive:!1,progresso:!1,qtdeDocs:0,prctDocs:0,errorDocs:[],periodoData:null}),created(){this.mountGrid()},watch:{endDate(){this.pagina=1,this.mountGrid()}},methods:{formatData:t=>new Date(t).toLocaleString([],{dateStyle:"short"}),setPage(t){this.selects=[],this.pagina=t,this.mountGrid()},catchDefault(t){console.error(t),this.setLoading(!1)},openAllDownloadPopup(){this.loadingActive||(this.qtdeDocs=0,this.prctDocs=0,this.errorDocs=[],this.progresso=!1),this.downloadAllVisible=!0},async downloadAll(){this.loadingActive=!0,this.progresso=!0;let t=[],e="",a=!1;this.qtdeDocs=0,this.prctDocs=0,this.errorDocs=[];const{__BLOBAPI:s,__API:o}=this,d=function(r){var h=new Blob([r.data],{type:"image/gif"});t.push({name:r.request.responseURL.replace(s,"").substring(1),file:h})},i=function(r){r.response.status==404&&(e=r.request.responseURL,a=!0)};this.periodoData.registros=this.totalPaginas;let u=await B.Post(`${o}/Vrls/periodo`,this.periodoData).catch(r=>console.error(r));if(u.status!=200){console.error(u);return}for(let r=0;r<u.data.registros.length;r++){if(u.data.registros[r].lstPathImagem.length>0)for(let h=0;h<u.data.registros[r].lstPathImagem.length;h++)await this.downloadVml(s+u.data.registros[r].lstPathImagem[h].pathImage).then(d).catch(i);else await this.downloadVml(s+u.data.registros[r].pathImagem).then(d).catch(i);a?(a=!1,this.errorDocs.push(`Erro: VML não encontrado - ${e.replace(s,"")}`)):(this.qtdeDocs++,this.prctDocs=Math.round(100*this.qtdeDocs/u.data.registros.length))}t.length>0&&this.createAndDownloadZipFile(t),this.loadingActive=!1},createAndDownloadZipFile(t){const e=M();t.forEach(a=>{e.file(a.name,a.file)}),e.generateAsync({type:"blob"}).then(a=>{const s=new Blob([a],{type:"application/zip"});S(s,"TodosVMLsPortalMultilixo.zip"),this.setLoading(!1)})},downloadVml(t){return b.get(t,{responseType:"blob"})},async ViewAllSelected(){const t="https://portalmultilixo.blob.core.windows.net/portalmultilixo",e=new Q;this.setLoading(!0);let a=0;await this.selects.reduce(async(s,o,d)=>{await s,o.lstPathImagem.length>0?await o.lstPathImagem.reduce(async(i,u)=>{await b.get(t+u.pathImage,{responseType:"blob"}).then(()=>{var r=new Image;r.src=t+u.pathImage,e.addImage(r,"GIF",10,5,0,100),e.addPage(),a++}).catch(this.catchDefault)},Promise.resolve()):await b.get(t+o.pathImagem,{responseType:"blob"}).then(()=>{var i=new Image;i.src=t+o.pathImagem,d!=0&&e.addPage(),e.addImage(i,"GIF",10,5,130,100),a++}).catch(this.catchDefault)},Promise.resolve()),this.setLoading(!1),a>0?window.open(e.output("bloburl")):I.alert("Nenhuma imagem encontrada","VML")},async downloadAllSelected(){const t="https://portalmultilixo.blob.core.windows.net/portalmultilixo",e=M(),a=[];if(this.setLoading(!0),await this.selects.reduce(async(s,o)=>{await s,o.lstPathImagem.length>0?await o.lstPathImagem.reduce(async(d,i)=>{await d,await b.get(t+i.pathImage,{responseType:"blob"}).then(u=>{var r=new Blob([u.data],{type:"image/gif"});a.push({name:i.pathImage.substring(1),file:r})}).catch(this.catchDefault)},Promise.resolve()):await b.get(t+o.pathImagem,{responseType:"blob"}).then(d=>{var i=new Blob([d.data],{type:"image/gif"});a.push({name:o.pathImagem.substring(1),file:i})}).catch(this.catchDefault)},Promise.resolve()),a.length<1){this.setLoading(!1),I.alert("Nenhuma imagem encontrada","VML");return}a.forEach(s=>{e.file(s.name,s.file)}),e.generateAsync({type:"blob"}).then(s=>{const o=new Blob([s],{type:"application/zip"});this.setLoading(!1),S(o,"VMLsPortalMultilixo.zip")})},async downloadItem(t){if(this.setLoading(!0),t.lstPathImagem.length>0){const a="https://portalmultilixo.blob.core.windows.net/portalmultilixo",s=M(),o=[];if(await t.lstPathImagem.reduce(async(d,i)=>{await d,await b.get(a+i.pathImage,{responseType:"blob"}).then(u=>{var r=new Blob([u.data],{type:"image/gif"});o.push({name:i.pathImage.substring(1),file:r})}).catch(this.catchDefault)},Promise.resolve()),o.length<1){this.setLoading(!1),I.alert("Nenhuma imagem encontrada","VML");return}o.forEach(d=>{s.file(d.name,d.file)}),s.generateAsync({type:"blob"}).then(d=>{const i=new Blob([d],{type:"application/zip"});S(i,"VMLsPortalMultilixo.zip"),this.setLoading(!1)});return}const e="https://portalmultilixo.blob.core.windows.net/portalmultilixo"+t.pathImagem;window.open(e,"_blank"),this.setLoading(!1)},viewItem(t){const e="https://portalmultilixo.blob.core.windows.net/portalmultilixo";if(t.lstPathImagem.length>0){const a=[];t.lstPathImagem.forEach(s=>{a.push({src:e+s.pathImage})}),this.imagens=a,this.dialogVisible=!0;return}this.setLoading(!0),b.get(e+t.pathImagem,{responseType:"blob"}).then(a=>{var s=new Blob([a.data],{type:"image/gif"}),o=URL.createObjectURL(s);window.open(o)}).catch(a=>{console.error(a),a.response.status==404&&I.alert("Nenhuma imagem encontrada","VML")}).finally(()=>{this.setLoading(!1)})},changeFilterBusiness(t){t?this.selectedBusiness=[t]:this.selectedBusiness=[]},changeDates({start:t,end:e}){this.starDate=t,this.endDate=e,this.selects=[]},selectItem(t,e){e?this.selects.push(t):this.selects=this.selects.filter(a=>a!=t)},setLoading(t){const e=R.service({lock:!0,text:"Carregando...",background:"rgba(0, 0, 0, 0.7)"});t||e.close()},mountGrid(t){if(t&&this.pagina!=1){this.pagina=t,this.totalPaginas=t;return}const{idGruposClientes:e,role:a,id:s,flagAdm:o,flagSup:d}=this.user,{pagina:i,registros:u,selectedBusiness:r,__API:h,setLoading:v}=this;v(!0);let c=null;o||d?c=`${h}/Cliente/grupo/`+e:c=`${h}/Usuario/acessos/`+s,B.Get(c).then(C=>{const y={vrl:0,pagina:i,registros:u,datainicial:this.starDate,datafinal:this.endDate,idgruposclientes:e,versao:2,listaclientes:C.data};r.length>0?y.listaclientes=r:a=="Admin"&&(y.listaclientes=[]),this.periodoData=y,B.Post(`${h}/Vrls/periodo`,y).then(U=>{this.totalPaginas=U.data.total_registros,this.vmls=U.data.registros}).catch(()=>{this.totalPaginas=0,this.vmls=[]}).finally(()=>{v(!1)})}).catch(C=>{console.error(C),v(!1)})}}},Ve=Object.assign(ve,{__name:"VmlLista",setup(t){return(e,a)=>{const s=f("el-button"),o=f("el-badge"),d=f("el-button-group"),i=f("el-col"),u=f("el-row"),r=f("el-pagination"),h=f("el-dialog"),v=f("el-progress");return m(),_(D,null,[l(H,{title:"Ordens de servico VML"}),l(Z,{changeFilterBusiness:e.changeFilterBusiness,Pesquisar:e.mountGrid,idGrupoClientes:e.idgruposclientes,background:"#F08327"},null,8,["changeFilterBusiness","Pesquisar","idGrupoClientes"]),g("div",ne,[g("div",ie,[g("div",re,[l(d,{class:"button-download-container"},{default:n(()=>[l(s,{icon:P(F),class:A({"":!0,"button-download-active":e.selects.length>0}),disabled:e.selects.length==0,onClick:a[0]||(a[0]=c=>e.downloadAllSelected())},{default:n(()=>[p(" Download ")]),_:1},8,["icon","class","disabled"]),l(s,{icon:P(j),class:A({"":!0,"button-download-active":e.selects.length>0}),disabled:e.selects.length==0,onClick:a[1]||(a[1]=c=>e.ViewAllSelected())},{default:n(()=>[p("Visualizar ")]),_:1},8,["icon","class","disabled"]),de,l(o,{value:e.totalPaginas,max:9999,style:{width:"100%"}},{default:n(()=>[l(s,{icon:P(F),class:A([{"":!0,"button-download-active":e.totalPaginas>0},"button-download-all"]),disabled:e.totalPaginas<1,onClick:e.openAllDownloadPopup},{default:n(()=>[p(" Download todos VMLs ")]),_:1},8,["icon","class","disabled","onClick"])]),_:1},8,["value"])]),_:1}),l(le,{changeDates:e.changeDates},null,8,["changeDates"])]),g("div",ce,[l(u,{class:"lista-header"},{default:n(()=>[l(i,{span:1}),l(i,{span:3},{default:n(()=>[p("Cliente")]),_:1}),l(i,{span:9},{default:n(()=>[p("Nome")]),_:1}),l(i,{span:4},{default:n(()=>[p("VML")]),_:1}),l(i,{span:4},{default:n(()=>[p("Data")]),_:1}),l(i,{span:3},{default:n(()=>[p("Ações")]),_:1})]),_:1}),(m(!0),_(D,null,$(e.vmls,c=>(m(),z(ae,{selectItem:e.selectItem,idVrls:c.idVrls,actionDownload:e.downloadItem,actionView:e.viewItem,data:c,selects:e.selects},{codCliente:n(()=>[p(w(c.codigoCliente),1)]),cnpj:n(()=>[p(w(c.nomeLocal!=""?c.nomeLocal:c.nome),1)]),vml:n(()=>[p(w(c.vrl),1)]),data:n(()=>[p(w(e.formatData(c.dataChamada)),1)]),_:2},1032,["selectItem","idVrls","actionDownload","actionView","data","selects"]))),256)),e.vmls.length===0?(m(),z(K,{key:0,message:"Nenhum VML encontrado"})):k("",!0)])]),e.vmls.length>0?(m(),_("div",ue,[g("div",pe,[l(r,{small:"",background:"",layout:"prev, pager, next",total:e.totalPaginas,modelValue:e.page,"onUpdate:modelValue":a[2]||(a[2]=c=>e.page=c),onCurrentChange:e.setPage,"page-size":e.registros},null,8,["total","modelValue","onCurrentChange","page-size"])])])):k("",!0)]),l(h,{modelValue:e.dialogVisible,"onUpdate:modelValue":a[3]||(a[3]=c=>e.dialogVisible=c),width:"80%"},{footer:n(()=>[he]),default:n(()=>[g("div",ge,[(m(!0),_(D,null,$(e.imagens,c=>(m(),_("img",{src:c.src,alt:"Imagem nao encontrada",style:{width:"100%","margin-top":"40px"}},null,8,me))),256))])]),_:1},8,["modelValue"]),l(h,{modelValue:e.downloadAllVisible,"onUpdate:modelValue":a[4]||(a[4]=c=>e.downloadAllVisible=c),width:"80%",title:"Download todos VMLs"},{footer:n(()=>[l(s,{type:"primary",class:"button-download-active button-popup",loading:e.loadingActive,onClick:e.downloadAll},{default:n(()=>[p("Download")]),_:1},8,["loading","onClick"])]),default:n(()=>[p(w(e.totalPaginas)+" VML's na pesquisa atual. ",1),e.progresso?(m(),_("div",fe,[p(" Fazendo download..."),_e,p(" "+w(e.qtdeDocs)+" de "+w(e.totalPaginas)+" baixados ",1),l(v,{percentage:e.prctDocs,color:"#F08327"},null,8,["percentage"]),we,g("div",be,[g("ul",null,[(m(!0),_(D,null,$(e.errorDocs,c=>(m(),_("li",null,w(c),1))),256))])])])):k("",!0)]),_:1},8,["modelValue"])],64)}}}),De=T(Ve,[["__scopeId","data-v-65af9ee8"]]);const ye={__name:"VmlView",setup(t){return(e,a)=>(m(),_(D,null,[l(W,null,{titulo:n(()=>[p("Ordens de serviço VML")]),_:1}),l(De)],64))}},Me=T(ye,[["__scopeId","data-v-6601bccf"]]);export{Me as default};