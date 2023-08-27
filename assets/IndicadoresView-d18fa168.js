import{C as u,G as D}from"./GraficoIndicadores-18f958b4.js";import{c as y}from"./controllerbase-fca99fd1.js";import{T as f,E as V}from"./EmptyState-b77ccfb7.js";import{_ as B}from"./VmlPesquisa-2e2e6c40.js";import{_ as m,r as h,o as a,c as i,b as d,a as r,w as v,F as _,j as C,k as n,d as o,t as g,E as I,p as O,h as P,g as k}from"./index-f39aac67.js";import{B as z}from"./Breadcumbs-d5948a0b.js";import"./axios-4a70c6fc.js";/* empty css                                                    */const F=s=>(O("data-v-c393c3e6"),s=s(),P(),s),S={class:"modoexibicao"},w=F(()=>r("div",null," Visualizar como: ",-1)),M={key:0,class:"exibicaocard"},b={key:1,class:"exibicaografico"},A={class:"assuntosarea"},G={key:0,class:"assunto"},L={key:1,class:"assunto"},K={key:2,class:"assunto"},E={key:3,class:"assunto"},N={key:4,class:"assunto"},T={key:5,class:"assunto"},$={class:"graficoarea"},Y={key:2,class:"msgVazioArea"},j={data:()=>({user:JSON.parse(sessionStorage.getItem("user")),dataDe:new Date().getDate(),dataAte:null,user:JSON.parse(sessionStorage.getItem("user")),urlBusiness:null,selected:0,selectedBusiness:null,filterBusiness:[],tipoVisualizacao:1,tiposVisualizacao:[{value:1,label:"Card"},{value:2,label:"Pizza"}],chartData:{labels:["Papel (Kg)","Plástico (Kg)","Vidro (Kg)","Ferro (Kg)","Orgânico (Kg)","CO2"],datasets:[{data:[0,0,0,0,0,0],backgroundColor:["#006AA7","#D1250D","#015B00","#D2AB0E","#9A6233","#4B74A0"]}]},valores:{mensagemPapel:"",mensagemPlastico:"",mensagemVidro:"",mensagemMetal:"",mensagemOrganico:""},retornoVazio:!1,retornoVazioMensagem:""}),created(){const{__API:s}=this;this.urlBusiness=`${s}/Cliente/grupo/`+this.user.idGruposClientes,this.urlIndicadores=`${s}/Vrls/indicadores`;var e=new Date;this.dataDe=new Date(e.getFullYear(),e.getMonth(),e.getDate()),this.dataAte=new Date(e.getFullYear(),e.getMonth(),e.getDate())},mounted(){this.filtrar()},watch:{selected(s){if(s)return this.selectedBusiness=this.filterBusiness[s];this.selectedBusiness=null}},methods:{filtrar(){const s=this;if(!this.dataDe||!this.dataAte)return;s.setLoading(!0);const e={dataInicial:this.getFirstDayOfMonth(this.dataDe),dataFinal:this.getLastDayOfMonth(this.dataAte),idGruposClientes:this.user.idGruposClientes};this.selectedBusiness&&(e.idClientes=this.selectedBusiness.idClientes,e.idLocais=this.selectedBusiness.idLocais,e.idGruposClientes=this.selectedBusiness.idGruposClientes),y.Post(this.urlIndicadores,e).then(t=>{s.setLoading(!1),t.error||(this.retornoVazio=!1,this.retornoVazioMensagem="",this.valores=t.data[0],this.chartData.datasets[0].data=[this.valores.pesoPapel,this.valores.pesoPlastico,this.valores.pesoVidro,this.valores.pesoMetal,this.valores.pesoOrganico,this.valores.pesoCO2*1e3])},t=>{s.setLoading(!1),this.retornoVazio=!0,this.retornoVazioMensagem=t.response.data.message})},changePeriodoControl({start:s,end:e}){this.dataDe=s,this.dataAte=e},changeFilterBusiness(s){s?this.selectedBusiness=s:this.selectedBusiness=null},setLoading(s){const e=I.service({lock:!0,text:"Carregando...",background:"rgba(0, 0, 0, 0.7)"});s||e.close()},getLastDayOfMonth(s){const e=new Date(s),t=e.getFullYear(),c=e.getMonth(),p=new Date(t,c+1,0).getDate();return new Date(t,c,p).toISOString()},getFirstDayOfMonth(s){const e=new Date(s),t=e.getFullYear(),c=e.getMonth();return new Date(t,c,1).toISOString()}}},q=Object.assign(j,{__name:"IndicadoresBody",setup(s){return(e,t)=>{const c=h("el-option"),p=h("el-select");return a(),i("div",null,[d(f,{title:"Indicadores"}),d(B,{changeFilterBusiness:e.changeFilterBusiness,Pesquisar:e.filtrar,idGrupoClientes:e.idgruposclientes,background:"#CBD619",showPeriodoControl:!0,changePeriodoControl:e.changePeriodoControl,colorButton:"#F08327",colorTextButton:"#FFFFFF"},null,8,["changeFilterBusiness","Pesquisar","idGrupoClientes","changePeriodoControl"]),r("div",S,[w,d(p,{modelValue:e.tipoVisualizacao,"onUpdate:modelValue":t[0]||(t[0]=l=>e.tipoVisualizacao=l),class:"select",size:"large",placeholder:"Todos",style:{width:"150px"}},{default:v(()=>[(a(!0),i(_,null,C(e.tiposVisualizacao,l=>(a(),n(c,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),e.tipoVisualizacao==1&&!e.retornoVazio?(a(),i("div",M,[e.valores.pesoPapel>0?(a(),n(u,{key:0,cor:"azul",descricao:e.valores.mensagemPapel,icone:"papel"},null,8,["descricao"])):o("",!0),e.valores.pesoPlastico>0?(a(),n(u,{key:1,cor:"vermelho",descricao:e.valores.mensagemPlastico,icone:"plastico"},null,8,["descricao"])):o("",!0),e.valores.pesoVidro>0?(a(),n(u,{key:2,cor:"verde",descricao:e.valores.mensagemVidro,icone:"vidro"},null,8,["descricao"])):o("",!0),e.valores.pesoMetal>0?(a(),n(u,{key:3,cor:"amarelo",descricao:e.valores.mensagemMetal,icone:"metal"},null,8,["descricao"])):o("",!0),e.valores.pesoOrganico>0?(a(),n(u,{key:4,cor:"marrom",descricao:`${e.valores.mensagemOrganico} KG`,icone:"organico"},null,8,["descricao"])):o("",!0),e.valores.pesoCO2>0?(a(),n(u,{key:5,cor:"azul",descricao:e.valores.mensagemCO2,icone:"co2"},null,8,["descricao"])):o("",!0)])):o("",!0),e.tipoVisualizacao==2&&!e.retornoVazio?(a(),i("div",b,[r("div",A,[e.valores.pesoPapel>0?(a(),i("div",G,[r("p",null,g(e.valores.mensagemPapel),1)])):o("",!0),e.valores.pesoPlastico>0?(a(),i("div",L,[r("p",null,g(e.valores.mensagemPlastico),1)])):o("",!0),e.valores.pesoVidro>0?(a(),i("div",K,[r("p",null,g(e.valores.mensagemVidro),1)])):o("",!0),e.valores.pesoMetal>0?(a(),i("div",E,[r("p",null,g(e.valores.mensagemMetal),1)])):o("",!0),e.valores.pesoOrganico>0?(a(),i("div",N,[r("p",null,g(e.valores.mensagemOrganico+" KG"),1)])):o("",!0),e.valores.pesoCO2>0?(a(),i("div",T,[r("p",null,g(e.valores.mensagemCO2),1)])):o("",!0)]),r("div",$,[d(D,{chartData:e.chartData},null,8,["chartData"])])])):o("",!0),e.retornoVazio?(a(),i("div",Y,[d(V,{message:e.retornoVazioMensagem},null,8,["message"])])):o("",!0)])}}}),J=m(q,[["__scopeId","data-v-c393c3e6"]]);const U={__name:"IndicadoresView",setup(s){return(e,t)=>(a(),i(_,null,[d(z,null,{titulo:v(()=>[k("Indicadores")]),_:1}),d(J)],64))}},ae=m(U,[["__scopeId","data-v-8c916146"]]);export{ae as default};
