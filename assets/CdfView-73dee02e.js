import{B as A}from"./Breadcumbs-eb2f3854.js";import{_ as P,r as g,o as p,c as _,b as a,a as m,w as l,i as r,F as b,l as L,m as v,d as F,n as N,u as z,e as I,E,q as B,t as h,x as T}from"./index-3db78148.js";import{_ as M}from"./VmlPesquisa-ad0d25a4.js";import{T as O,E as R}from"./EmptyState-9b81d80b.js";import{R as U}from"./RelatorioItem-115ac1d8.js";import{J as j,d as q}from"./file-download-d5e00191.js";/* empty css                                                    */import"./VisualizarArquivoVml-7bf7c837.js";const J={class:"container-vml"},Y={class:"vml-lista-container"},Z={class:"lista"},x={key:0,class:"pagination"},H={class:"items-pagination"},K={data:()=>({user:JSON.parse(sessionStorage.getItem("user")),vmls:[],registros:10,pagina:1,totalPaginas:null,selectedBusiness:[],loading:!0,idgruposclientes:null,periodoInicial:new Date,periodoFinal:new Date,selecteds:[]}),created(){this.mountGrid()},watch:{pagina(){this.mountGrid()},endDate(){this.mountGrid()}},methods:{formatData:t=>`${t.substr(4,6)} /  ${t.substr(0,4)}`,setPage(t){this.selecteds=[],this.pagina=t},selectItem(t,e){e?this.selecteds.push(t):this.selecteds=this.selecteds.filter(o=>o!=t)},downloadItem(t){const e="https://portalmultilixo.blob.core.windows.net/portalmultilixo"+t.pathImagem;window.open(e,"_blank")},async downloadAllSelected(){const t="https://portalmultilixo.blob.core.windows.net/portalmultilixo",e=j(),o=[];await this.selecteds.reduce(async(s,i)=>{await s,await I.get(t+i.pathImagem,{responseType:"blob"}).then(d=>{var c=new Blob([d.data],{type:"image/gif"});o.push({name:i.pathImagem.substring(1),file:c})})},Promise.resolve()),o.forEach(s=>{e.file(s.name,s.file)}),e.generateAsync({type:"blob"}).then(s=>{const i=new Blob([s]);q(i,"MedicoesPortalMultilixo.zip")})},viewItem(t){const e="https://portalmultilixo.blob.core.windows.net/portalmultilixo"+t.pathImagem,o={responseType:"blob"};I.get(e,o).then(s=>{var i=new Blob([s.data],{type:"application/pdf"}),d=URL.createObjectURL(i);window.open(d)})},changeFilterBusiness(t){t?this.selectedBusiness=[t]:this.selectedBusiness=[]},changePeriodoControl({start:t,end:e}){this.periodoInicial=t,this.periodoFinal=e},setLoading(t){const e=E.service({lock:!0,text:"Carregando...",background:"rgba(0, 0, 0, 0.7)"});t||e.close()},mountGrid(t){if(t&&this.pagina!=1){this.pagina=t,this.totalPaginas=t;return}const{idGruposClientes:e,role:o}=this.user,{selectedBusiness:s,__API:i,setLoading:d,periodoInicial:c,periodoFinal:n,registros:y,pagina:D}=this,V=("0"+parseInt(c.getMonth()+1)).slice(-2),$=("0"+parseInt(n.getMonth()+1)).slice(-2),k=`${c.getFullYear()}${V}`,G=`${n.getFullYear()}${$}`;var u={periodoinicial:k,periodofinal:G,registros:y,pagina:D,tipo:1},f="";this.user.flagAdm||this.user.flagSup?f=`${i}/Cliente/grupo/`+this.user.idGruposClientes:f=`${i}/Usuario/acessos/`+this.user.id,d(!0),B.Get(f).then(w=>{const S=w.data;s&&s.length>0?u=Object.assign(u,{idgruposclientes:s.idGruposClientes,idclientes:s.idClientes,listaclientes:s}):(u=Object.assign(u,{idGruposClientes:e,listaclientes:S}),o=="Admin"&&(u.listaclientes=[])),B.Post(`${i}/Medicao/periodo`,u).then(C=>{this.totalPaginas=C.data.total_registros,this.vmls=C.data.registros,d(!1)}).catch(()=>{d(!1),this.vmls=[]})}).catch(w=>console.error(w)).finally(()=>d(!1))}}},Q=Object.assign(K,{__name:"Cdf",setup(t){return(e,o)=>{const s=g("el-col"),i=g("el-row"),d=g("el-button"),c=g("el-pagination");return p(),_(b,null,[a(O,{title:"Certificação de Destinação Final"}),a(M,{changeFilterBusiness:e.changeFilterBusiness,Pesquisar:e.mountGrid,idGrupoClientes:e.idgruposclientes,background:"#F09040",showPeriodoControl:!0,changePeriodoControl:e.changePeriodoControl,colorButton:"#F08327",colorTextButton:"#FFFFFF"},null,8,["changeFilterBusiness","Pesquisar","idGrupoClientes","changePeriodoControl"]),m("div",J,[m("div",Y,[m("div",Z,[a(i,{class:"lista-header"},{default:l(()=>[a(s,{span:1}),a(s,{span:2},{default:l(()=>[r("Cod")]),_:1}),a(s,{span:9},{default:l(()=>[r("Nome")]),_:1}),a(s,{span:6},{default:l(()=>[r("Descricao Documento")]),_:1}),a(s,{span:3},{default:l(()=>[r("Periodo")]),_:1}),a(s,{span:1},{default:l(()=>[r("Ações")]),_:1})]),_:1}),(p(!0),_(b,null,L(e.vmls,n=>(p(),v(U,{idVrls:n.idVrls,actionView:e.viewItem,actionDownload:e.downloadItem,selectItem:e.selectItem,data:n,selects:e.selecteds},{codigocliente:l(()=>[r(h(n.codigoCliente),1)]),nome:l(()=>[r(h(n.nome),1)]),descricaoDocumento:l(()=>[r(h(n.descricaoDocumento),1)]),periodo:l(()=>[r(h(e.formatData(n.periodo)),1)]),_:2},1032,["idVrls","actionView","actionDownload","selectItem","data","selects"]))),256)),e.vmls.length===0?(p(),v(R,{key:0,message:"Nenhum relatório encontrado"})):F("",!0)]),m("div",null,[a(d,{disabled:e.selecteds.length<1,class:N([{"button-download":!0,"button-download-active":e.selecteds.length>0},"button-download"]),icon:z(T),onClick:o[0]||(o[0]=n=>e.downloadAllSelected())},{default:l(()=>[r(" Download ")]),_:1},8,["disabled","class","icon"])])]),e.vmls.length>0?(p(),_("div",x,[m("div",H,[a(c,{background:"",layout:"prev, pager, next",total:e.totalPaginas,modelValue:e.page,"onUpdate:modelValue":o[1]||(o[1]=n=>e.page=n),onCurrentChange:e.setPage,"page-size":e.registros},null,8,["total","modelValue","onCurrentChange","page-size"])])])):F("",!0)])],64)}}}),W=P(Q,[["__scopeId","data-v-38358635"]]);const X={__name:"CdfView",setup(t){return(e,o)=>(p(),_(b,null,[a(A,null,{titulo:l(()=>[r("Certificado de Destinação Final")]),_:1}),a(W)],64))}},re=P(X,[["__scopeId","data-v-cfc30a3e"]]);export{re as default};
