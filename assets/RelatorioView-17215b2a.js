import{_ as P,r as g,o as p,c as _,b as a,a as m,w as l,i as r,F as b,l as S,m as C,d as I,n as M,u as A,e as B,E as L,q as F,t as h,x as N}from"./index-32b7053b.js";import{_ as z}from"./VmlPesquisa-cae88b5f.js";import{T as E,E as T}from"./EmptyState-73349f9c.js";import{R as O}from"./RelatorioItem-67ccbd45.js";import{J as U,d as j}from"./file-download-fcdd5ef6.js";import{B as q}from"./Breadcumbs-8059f43f.js";/* empty css                                                    */import"./VisualizarArquivoVml-29d304f5.js";const J={class:"container-vml"},Y={class:"vml-lista-container"},Z={class:"lista"},x={key:0,class:"pagination"},H={class:"items-pagination"},K={data:()=>({user:JSON.parse(sessionStorage.getItem("user")),vmls:[],registros:10,pagina:1,totalPaginas:null,selectedBusiness:[],loading:!0,idgruposclientes:null,periodoInicial:new Date,periodoFinal:new Date,selecteds:[]}),created(){this.mountGrid()},watch:{pagina(){this.mountGrid()},endDate(){this.mountGrid()}},methods:{formatData:t=>`${t.substr(4,6)} /  ${t.substr(0,4)}`,setPage(t){this.selecteds=[],this.pagina=t},selectItem(t,e){e?this.selecteds.push(t):this.selecteds=this.selecteds.filter(s=>s!=t)},downloadItem(t){const e="https://portalmultilixo.blob.core.windows.net/portalmultilixo"+t.pathImagem;window.open(e,"_blank")},async downloadAllSelected(){const t="https://portalmultilixo.blob.core.windows.net/portalmultilixo",e=U(),s=[];await this.selecteds.reduce(async(o,i)=>{await o,await B.get(t+i.pathImagem,{responseType:"blob"}).then(d=>{var c=new Blob([d.data],{type:"image/gif"});s.push({name:i.pathImagem.substring(1),file:c})})},Promise.resolve()),s.forEach(o=>{e.file(o.name,o.file)}),e.generateAsync({type:"blob"}).then(o=>{const i=new Blob([o]);j(i,"MedicoesPortalMultilixo.zip")})},viewItem(t){const e="https://portalmultilixo.blob.core.windows.net/portalmultilixo"+t.pathImagem,s={responseType:"blob"};B.get(e,s).then(o=>{var i=new Blob([o.data],{type:"application/pdf"}),d=URL.createObjectURL(i);window.open(d)})},changeFilterBusiness(t){t?this.selectedBusiness=[t]:this.selectedBusiness=[]},changePeriodoControl({start:t,end:e}){this.periodoInicial=t,this.periodoFinal=e},setLoading(t){const e=L.service({lock:!0,text:"Carregando...",background:"rgba(0, 0, 0, 0.7)"});t||e.close()},mountGrid(t){if(t&&this.pagina!=1){this.pagina=t,this.totalPaginas=t;return}const{idGruposClientes:e,role:s}=this.user,{selectedBusiness:o,__API:i,setLoading:d,periodoInicial:c,periodoFinal:n,registros:y,pagina:V}=this,D=("0"+parseInt(c.getMonth()+1)).slice(-2),R=("0"+parseInt(n.getMonth()+1)).slice(-2),$=`${c.getFullYear()}${D}`,k=`${n.getFullYear()}${R}`;var u={periodoinicial:$,periodofinal:k,registros:y,pagina:V},f="";this.user.flagAdm||this.user.flagSup?f=`${i}/Cliente/grupocombo/`+this.user.idGruposClientes:f=`${i}/Usuario/acessos/`+this.user.id,d(!0),F.Get(f).then(w=>{const G=w.data;o&&o.length>0?u=Object.assign(u,{idgruposclientes:o.idGruposClientes,idclientes:o.idClientes,listaclientes:o}):(u=Object.assign(u,{idGruposClientes:e,listaclientes:G}),s=="Admin"&&(u.listaclientes=[])),F.Post(`${i}/Medicao/periodo`,u).then(v=>{this.totalPaginas=v.data.total_registros,this.vmls=v.data.registros,d(!1)}).catch(()=>{d(!1),this.vmls=[]})}).catch(w=>console.error(w)).finally(()=>d(!1))}}},Q=Object.assign(K,{__name:"RelatorioMedicao",setup(t){return(e,s)=>{const o=g("el-col"),i=g("el-row"),d=g("el-button"),c=g("el-pagination");return p(),_(b,null,[a(E,{title:"Relatório de medição"}),a(z,{changeFilterBusiness:e.changeFilterBusiness,Pesquisar:e.mountGrid,idGrupoClientes:e.idgruposclientes,background:"#543976",showPeriodoControl:!0,changePeriodoControl:e.changePeriodoControl,colorButton:"#F08327",colorTextButton:"#FFFFFF"},null,8,["changeFilterBusiness","Pesquisar","idGrupoClientes","changePeriodoControl"]),m("div",J,[m("div",Y,[m("div",Z,[a(i,{class:"lista-header"},{default:l(()=>[a(o,{span:1}),a(o,{span:2},{default:l(()=>[r("Cod")]),_:1}),a(o,{span:9},{default:l(()=>[r("Nome")]),_:1}),a(o,{span:6},{default:l(()=>[r("Descricao Documento")]),_:1}),a(o,{span:3},{default:l(()=>[r("Periodo")]),_:1}),a(o,{span:1},{default:l(()=>[r("Ações")]),_:1})]),_:1}),(p(!0),_(b,null,S(e.vmls,n=>(p(),C(O,{idVrls:n.idVrls,actionView:e.viewItem,actionDownload:e.downloadItem,selectItem:e.selectItem,data:n,selects:e.selecteds},{codigocliente:l(()=>[r(h(n.codigoCliente),1)]),nome:l(()=>[r(h(n.nome),1)]),descricaoDocumento:l(()=>[r(h(n.descricaoDocumento),1)]),periodo:l(()=>[r(h(e.formatData(n.periodo)),1)]),_:2},1032,["idVrls","actionView","actionDownload","selectItem","data","selects"]))),256)),e.vmls.length===0?(p(),C(T,{key:0,message:"Nenhum relatório encontrado"})):I("",!0)]),m("div",null,[a(d,{disabled:e.selecteds.length<1,class:M([{"button-download":!0,"button-download-active":e.selecteds.length>0},"button-download"]),icon:A(N),onClick:s[0]||(s[0]=n=>e.downloadAllSelected())},{default:l(()=>[r(" Download ")]),_:1},8,["disabled","class","icon"])])]),e.vmls.length>0?(p(),_("div",x,[m("div",H,[a(c,{background:"",layout:"prev, pager, next",total:e.totalPaginas,modelValue:e.page,"onUpdate:modelValue":s[1]||(s[1]=n=>e.page=n),onCurrentChange:e.setPage,"page-size":e.registros},null,8,["total","modelValue","onCurrentChange","page-size"])])])):I("",!0)])],64)}}}),W=P(Q,[["__scopeId","data-v-e7c83d02"]]);const X={__name:"RelatorioView",setup(t){return(e,s)=>(p(),_(b,null,[a(q,null,{titulo:l(()=>[r("Relatório de medição")]),_:1}),a(W)],64))}},re=P(X,[["__scopeId","data-v-63d690c9"]]);export{re as default};
