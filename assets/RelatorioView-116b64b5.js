import{_ as $,r as m,o as p,m as v,w as a,b as n,x as g,g as N,a as u,y as L,u as B,z as P,p as j,j as E,c as f,i as d,F as I,l as O,d as C,n as T,e as V,E as U,q as F,t as h}from"./index-350a3fd1.js";import{_ as q}from"./VmlPesquisa-dab2ea06.js";import{T as J,E as Y}from"./EmptyState-aadf92be.js";import{V as Z}from"./VisualizarArquivoVml-ae91c0cc.js";import{J as H,d as K}from"./file-download-9838d8be.js";import{B as Q}from"./Breadcumbs-18429327.js";/* empty css                                                    */const D=t=>(j("data-v-a749d99c"),t=t(),E(),t),W=["value"],X={class:"botoes-container"},x=D(()=>u("div",{class:"texto-botao"},"Visualizar",-1)),ee=D(()=>u("div",{class:"texto-botao"},"Download",-1)),te={data:()=>({selected:!1}),props:{selectItem:{type:Function,default:()=>{}},idVrls:{type:Number},actionDownload:{type:Function,default:()=>{}},actionView:{type:Function,default:()=>{}},data:{type:Array,default:[]},selects:{type:Array,default:()=>[]}},watch:{selected(){this.$props.selectItem(this.$props.data,this.selected)},selects(t){t.length===0&&(this.selected=!1)}}},oe=Object.assign(te,{__name:"RelatorioItem",setup(t){return(e,s)=>{const o=m("el-col"),i=m("el-button"),l=m("el-row");return p(),v(l,null,{default:a(()=>[n(o,{span:1},{default:a(()=>[g(e.$slots,"check",{class:"nome"},()=>[N(u("input",{type:"checkbox",value:e.selected,"onUpdate:modelValue":s[0]||(s[0]=c=>e.selected=c)},null,8,W),[[L,e.selected]])],!0)]),_:3}),n(o,{span:2},{default:a(()=>[g(e.$slots,"codigocliente",{class:"nome"},void 0,!0)]),_:3}),n(o,{span:8},{default:a(()=>[g(e.$slots,"nome",{class:"nome"},void 0,!0)]),_:3}),n(o,{span:6},{default:a(()=>[g(e.$slots,"descricaoDocumento",{class:"nome"},void 0,!0)]),_:3}),n(o,{span:3},{default:a(()=>[g(e.$slots,"periodo",{},void 0,!0)]),_:3}),n(o,{span:4},{default:a(()=>[u("div",X,[n(i,{icon:Z,onClick:s[1]||(s[1]=c=>e.$props.actionView(e.$props.data))},{default:a(()=>[x]),_:1}),n(i,{icon:B(P),onClick:s[2]||(s[2]=c=>e.$props.actionDownload(e.$props.data))},{default:a(()=>[ee]),_:1},8,["icon"])])]),_:1})]),_:3})}}}),se=$(oe,[["__scopeId","data-v-a749d99c"]]);const ae={class:"container-vml"},ne={class:"vml-lista-container"},ie={class:"lista"},le={key:0,class:"pagination"},re={class:"items-pagination"},de={data:()=>({user:JSON.parse(sessionStorage.getItem("user")),vmls:[],registros:10,pagina:1,totalPaginas:null,selectedBusiness:[],loading:!0,idgruposclientes:null,periodoInicial:new Date,periodoFinal:new Date,selecteds:[]}),created(){this.mountGrid()},watch:{pagina(){this.mountGrid()},endDate(){this.mountGrid()}},methods:{formatData:t=>`${t.substr(4,6)} /  ${t.substr(0,4)}`,setPage(t){this.selecteds=[],this.pagina=t},selectItem(t,e){e?this.selecteds.push(t):this.selecteds=this.selecteds.filter(s=>s!=t)},downloadItem(t){const e="https://portalmultilixo.blob.core.windows.net/portalmultilixo"+t.pathImagem;window.open(e,"_blank")},async downloadAllSelected(){const t="https://portalmultilixo.blob.core.windows.net/portalmultilixo",e=H(),s=[];await this.selecteds.reduce(async(o,i)=>{await o,await V.get(t+i.pathImagem,{responseType:"blob"}).then(l=>{var c=new Blob([l.data],{type:"image/gif"});s.push({name:i.pathImagem,file:c})})},Promise.resolve()),s.forEach(o=>{e.file(o.name,o.file)}),e.generateAsync({type:"blob"}).then(o=>{const i=new Blob([o]);K(i,"MedicoesPortalMultilixo.zip")})},viewItem(t){const e="https://portalmultilixo.blob.core.windows.net/portalmultilixo"+t.pathImagem,s={responseType:"blob"};V.get(e,s).then(o=>{var i=new Blob([o.data],{type:"application/pdf"}),l=URL.createObjectURL(i);window.open(l)})},changeFilterBusiness(t){t?this.selectedBusiness=[t]:this.selectedBusiness=[]},changePeriodoControl({start:t,end:e}){this.periodoInicial=t,this.periodoFinal=e},setLoading(t){const e=U.service({lock:!0,text:"Carregando...",background:"rgba(0, 0, 0, 0.7)"});t||e.close()},mountGrid(t){if(t&&this.pagina!=1){this.pagina=t,this.totalPaginas=t;return}const{idGruposClientes:e,role:s}=this.user,{selectedBusiness:o,__API:i,setLoading:l,periodoInicial:c,periodoFinal:r,registros:k,pagina:R}=this,S=("0"+parseInt(c.getMonth()+1)).slice(-2),G=("0"+parseInt(r.getMonth()+1)).slice(-2),A=`${c.getFullYear()}${S}`,z=`${r.getFullYear()}${G}`;var _={periodoinicial:A,periodofinal:z,registros:k,pagina:R},w="";this.user.flagAdm||this.user.flagSup?w=`${i}/Cliente/grupo/`+this.user.idGruposClientes:w=`${i}/Usuario/acessos/`+this.user.id,l(!0),F.Get(w).then(b=>{const M=b.data;o&&o.length>0?_=Object.assign(_,{idgruposclientes:o.idGruposClientes,idclientes:o.idClientes,listaclientes:o}):(_=Object.assign(_,{idGruposClientes:e,listaclientes:M}),s=="Admin"&&(_.listaclientes=[])),F.Post(`${i}/Medicao/periodo`,_).then(y=>{this.totalPaginas=y.data.total_registros,this.vmls=y.data.registros,l(!1)}).catch(()=>{l(!1),this.vmls=[]})}).catch(b=>console.error(b)).finally(()=>l(!1))}}},ce=Object.assign(de,{__name:"RelatorioMedicao",setup(t){return(e,s)=>{const o=m("el-col"),i=m("el-row"),l=m("el-button"),c=m("el-pagination");return p(),f(I,null,[n(J,{title:"Relatório de medição"}),n(q,{changeFilterBusiness:e.changeFilterBusiness,Pesquisar:e.mountGrid,idGrupoClientes:e.idgruposclientes,background:"#543976",showPeriodoControl:!0,changePeriodoControl:e.changePeriodoControl,colorButton:"#F08327",colorTextButton:"#FFFFFF"},null,8,["changeFilterBusiness","Pesquisar","idGrupoClientes","changePeriodoControl"]),u("div",ae,[u("div",ne,[u("div",ie,[n(i,{class:"lista-header"},{default:a(()=>[n(o,{span:1}),n(o,{span:2},{default:a(()=>[d("Cod")]),_:1}),n(o,{span:9},{default:a(()=>[d("Nome")]),_:1}),n(o,{span:6},{default:a(()=>[d("Descricao Documento")]),_:1}),n(o,{span:3},{default:a(()=>[d("Periodo")]),_:1}),n(o,{span:1},{default:a(()=>[d("Ações")]),_:1})]),_:1}),(p(!0),f(I,null,O(e.vmls,r=>(p(),v(se,{idVrls:r.idVrls,actionView:e.viewItem,actionDownload:e.downloadItem,selectItem:e.selectItem,data:r,selects:e.selecteds},{codigocliente:a(()=>[d(h(r.codigoCliente),1)]),nome:a(()=>[d(h(r.nome),1)]),descricaoDocumento:a(()=>[d(h(r.descricaoDocumento),1)]),periodo:a(()=>[d(h(e.formatData(r.periodo)),1)]),_:2},1032,["idVrls","actionView","actionDownload","selectItem","data","selects"]))),256)),e.vmls.length===0?(p(),v(Y,{key:0,message:"Nenhum relatório encontrado"})):C("",!0)]),u("div",null,[n(l,{disabled:e.selecteds.length<1,class:T([{"button-download":!0,"button-download-active":e.selecteds.length>0},"button-download"]),icon:B(P),onClick:s[0]||(s[0]=r=>e.downloadAllSelected())},{default:a(()=>[d(" Download ")]),_:1},8,["disabled","class","icon"])])]),e.vmls.length>0?(p(),f("div",le,[u("div",re,[n(c,{background:"",layout:"prev, pager, next",total:e.totalPaginas,modelValue:e.page,"onUpdate:modelValue":s[1]||(s[1]=r=>e.page=r),onCurrentChange:e.setPage,"page-size":e.registros},null,8,["total","modelValue","onCurrentChange","page-size"])])])):C("",!0)])],64)}}}),ue=$(ce,[["__scopeId","data-v-118733ff"]]);const pe={__name:"RelatorioView",setup(t){return(e,s)=>(p(),f(I,null,[n(Q,null,{titulo:a(()=>[d("Relatório de medição")]),_:1}),n(ue)],64))}},ve=$(pe,[["__scopeId","data-v-63d690c9"]]);export{ve as default};