import{C as u,G as D}from"./GraficoIndicadores-752335b3.js";import{c as y}from"./controllerbase-fca99fd1.js";import{T as f,E as V}from"./EmptyState-20de348a.js";import{_ as B}from"./VmlPesquisa-1eb3889c.js";import{_ as m,r as h,o as a,c as i,b as n,a as r,w as v,F as _,j as I,k as c,d as t,t as g,E as P,p as z,h as C,g as k}from"./index-084bc526.js";import{B as F}from"./Breadcumbs-e707ddc9.js";import"./axios-4a70c6fc.js";const S=s=>(z("data-v-0512a142"),s=s(),C(),s),O={class:"modoexibicao"},w=S(()=>r("div",null," Visualizar como: ",-1)),b={key:0,class:"exibicaocard"},M={key:1,class:"exibicaografico"},A={class:"assuntosarea"},G={key:0,class:"assunto"},L={key:1,class:"assunto"},K={key:2,class:"assunto"},E={key:3,class:"assunto"},N={key:4,class:"assunto"},T={class:"graficoarea"},$={key:2,class:"msgVazioArea"},Y={data:()=>({user:JSON.parse(sessionStorage.getItem("user")),defaultURL:"https://apiportalmultilixo.azurewebsites.net",dataDe:new Date().getDate(),dataAte:null,user:JSON.parse(sessionStorage.getItem("user")),urlBusiness:null,selected:0,selectedBusiness:null,filterBusiness:[],tipoVisualizacao:1,tiposVisualizacao:[{value:1,label:"Card"},{value:2,label:"Pizza"}],chartData:{labels:["Papel (Kg)","Plástico (Kg)","Vidro (Kg)","Ferro (Kg)","Orgânico (Kg)"],datasets:[{data:[0,0,0,0,0],backgroundColor:["#006AA7","#D1250D","#015B00","#D2AB0E","#9A6233"]}]},valores:{mensagemPapel:"",mensagemPlastico:"",mensagemVidro:"",mensagemMetal:"",mensagemOrganico:""},retornoVazio:!1,retornoVazioMensagem:""}),created(){const{__API:s}=this;this.urlBusiness=`${s}/Cliente/grupo/`+this.user.idGruposClientes,this.urlIndicadores=`${s}/Vrls/indicadores`;var e=new Date;this.dataDe=new Date(e.getFullYear(),e.getMonth(),e.getDate()),this.dataAte=new Date(e.getFullYear(),e.getMonth(),e.getDate())},mounted(){this.filtrar()},watch:{selected(s){if(s)return this.selectedBusiness=this.filterBusiness[s];this.selectedBusiness=null}},methods:{filtrar(){const s=this;if(!this.dataDe||!this.dataAte)return;s.setLoading(!0);const e={dataInicial:this.getFirstDayOfMonth(this.dataDe),dataFinal:this.getLastDayOfMonth(this.dataAte),idGruposClientes:this.user.idGruposClientes};this.selectedBusiness&&(e.idClientes=this.selectedBusiness.idClientes,e.idLocais=this.selectedBusiness.idLocais,e.idGruposClientes=this.selectedBusiness.idGruposClientes),y.Post(this.urlIndicadores,e).then(o=>{s.setLoading(!1),o.error||(this.retornoVazio=!1,this.retornoVazioMensagem="",this.valores=o.data[0],this.chartData.datasets[0].data=[this.valores.pesoPapel,this.valores.pesoPlastico,this.valores.pesoVidro,this.valores.pesoMetal,this.valores.pesoOrganico])},o=>{s.setLoading(!1),this.retornoVazio=!0,this.retornoVazioMensagem=o.response.data.message})},changePeriodoControl({start:s,end:e}){this.dataDe=s,this.dataAte=e},changeFilterBusiness(s){s?this.selectedBusiness=s:this.selectedBusiness=null},setLoading(s){const e=P.service({lock:!0,text:"Carregando...",background:"rgba(0, 0, 0, 0.7)"});s||e.close()},getLastDayOfMonth(s){const e=new Date(s),o=e.getFullYear(),d=e.getMonth(),p=new Date(o,d+1,0).getDate();return new Date(o,d,p).toISOString()},getFirstDayOfMonth(s){const e=new Date(s),o=e.getFullYear(),d=e.getMonth();return new Date(o,d,1).toISOString()}}},j=Object.assign(Y,{__name:"IndicadoresBody",setup(s){return(e,o)=>{const d=h("el-option"),p=h("el-select");return a(),i("div",null,[n(f,{title:"Indicadores"}),n(B,{changeFilterBusiness:e.changeFilterBusiness,Pesquisar:e.filtrar,idGrupoClientes:e.idgruposclientes,background:"#CBD619",showPeriodoControl:!0,changePeriodoControl:e.changePeriodoControl,colorButton:"#F08327",colorTextButton:"#FFFFFF"},null,8,["changeFilterBusiness","Pesquisar","idGrupoClientes","changePeriodoControl"]),r("div",O,[w,n(p,{modelValue:e.tipoVisualizacao,"onUpdate:modelValue":o[0]||(o[0]=l=>e.tipoVisualizacao=l),class:"select",size:"large",placeholder:"Todos",style:{width:"150px"}},{default:v(()=>[(a(!0),i(_,null,I(e.tiposVisualizacao,l=>(a(),c(d,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),e.tipoVisualizacao==1&&!e.retornoVazio?(a(),i("div",b,[e.valores.pesoPapel>0?(a(),c(u,{key:0,cor:"azul",descricao:e.valores.mensagemPapel,icone:"papel"},null,8,["descricao"])):t("",!0),e.valores.pesoPlastico>0?(a(),c(u,{key:1,cor:"vermelho",descricao:e.valores.mensagemPlastico,icone:"plastico"},null,8,["descricao"])):t("",!0),e.valores.pesoVidro>0?(a(),c(u,{key:2,cor:"verde",descricao:e.valores.mensagemVidro,icone:"vidro"},null,8,["descricao"])):t("",!0),e.valores.pesoMetal>0?(a(),c(u,{key:3,cor:"amarelo",descricao:e.valores.mensagemMetal,icone:"metal"},null,8,["descricao"])):t("",!0),e.valores.pesoOrganico>0?(a(),c(u,{key:4,cor:"marrom",descricao:`${e.valores.mensagemOrganico} KG`,icone:"organico"},null,8,["descricao"])):t("",!0)])):t("",!0),e.tipoVisualizacao==2&&!e.retornoVazio?(a(),i("div",M,[r("div",A,[e.valores.pesoPapel>0?(a(),i("div",G,[r("p",null,g(e.valores.mensagemPapel),1)])):t("",!0),e.valores.pesoPlastico>0?(a(),i("div",L,[r("p",null,g(e.valores.mensagemPlastico),1)])):t("",!0),e.valores.pesoVidro>0?(a(),i("div",K,[r("p",null,g(e.valores.mensagemVidro),1)])):t("",!0),e.valores.pesoMetal>0?(a(),i("div",E,[r("p",null,g(e.valores.mensagemMetal),1)])):t("",!0),e.valores.pesoOrganico>0?(a(),i("div",N,[r("p",null,g(e.valores.mensagemOrganico+" KG"),1)])):t("",!0)]),r("div",T,[n(D,{chartData:e.chartData},null,8,["chartData"])])])):t("",!0),e.retornoVazio?(a(),i("div",$,[n(V,{message:e.retornoVazioMensagem},null,8,["message"])])):t("",!0)])}}}),q=m(j,[["__scopeId","data-v-0512a142"]]);const J={__name:"IndicadoresView",setup(s){return(e,o)=>(a(),i(_,null,[n(F,null,{titulo:v(()=>[k("Indicadores")]),_:1}),n(q)],64))}},ee=m(J,[["__scopeId","data-v-8c916146"]]);export{ee as default};
