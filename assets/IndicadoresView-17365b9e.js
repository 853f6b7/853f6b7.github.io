import{a as _,r as y,B as M,G as F,C as c}from"./GraficoIndicadores-0f76f155.js";import{I as z,_ as b,r as w,o as t,m as d,c as p,a as o,t as f,p as A,j as V,b as n,d as l,u as G,q as T,E as K,w as E,F as J,i as Y}from"./index-3db78148.js";import{T as j,E as q}from"./EmptyState-9b81d80b.js";import{_ as R}from"./VmlPesquisa-ad0d25a4.js";import{B as x}from"./Breadcumbs-eb2f3854.js";/* empty css                                                    */_.register(...y);const H=z({name:"Home",props:{chartData:Object},components:{BarChart:M}});function U(a,e,s,i,m,g){const v=w("BarChart");return t(),d(v,{chartData:a.chartData},null,8,["chartData"])}const Q=b(H,[["render",U]]);const W={props:{total:String,dataDe:String,dataAte:String}},S=a=>(A("data-v-ed0455c4"),a=a(),V(),a),X={class:"container"},Z={class:"cinza redondo"},ee=S(()=>o("div",{class:"titulo"},"Total reciclado - período",-1)),ae={class:"conteudo-container"},se={class:"conteudo"},oe={class:"kgs item"},te=S(()=>o("div",{class:"separador item"},"-",-1)),re={class:"periodo item"};function ie(a,e,s,i,m,g){return t(),p("div",X,[o("div",Z,[ee,o("div",ae,[o("div",se,[o("div",oe,f(s.total)+" Kg",1),te,o("div",re,f(s.dataDe)+" a "+f(s.dataAte),1)])])])])}const le=b(W,[["render",ie],["__scopeId","data-v-ed0455c4"]]);const I=a=>(A("data-v-84e14f6d"),a=a(),V(),a),ne={key:0,class:"indicadorescontainer"},de={class:"item pizzaContainer"},he={class:"item"},ce={class:"item cinza redondo"},me=I(()=>o("div",{class:"titulo-total-reciclado"},"Total reciclado - ano",-1)),ue={class:"item"},ge={style:{display:"flex"}},pe=I(()=>o("div",{class:"titulo-vertical"},"Estimativa de benefícios ambientais",-1)),ve={key:1,class:"msgVazioArea"},De={id:"testGrafico"},be={data:()=>({user:JSON.parse(sessionStorage.getItem("user")),dataDe:new Date().getDate(),dataAte:null,dataDeTexto:"Set/2023",dataAteTexto:"Dez/2023",somaTotal:0,user:JSON.parse(sessionStorage.getItem("user")),urlBusiness:null,selected:0,selectedBusiness:null,filterBusiness:[],tipoVisualizacao:1,chartData:{labels:["Papel (Kg)","Plástico (Kg)","Vidro (Kg)","Ferro (Kg)","Orgânico (Kg)","Mix (Kg)"],datasets:[{label:"",data:[0,0,0,0,0,0],backgroundColor:["#006AA7","#D1250D","#015B00","#D2AB0E","#9A6233","#909399"]}]},mesmes:{labels:["Janeiro 2024","Fevereiro 2024","Março 2024","Abril 2024","Maio 2024","Junho 2024"],datasets:[{label:"Papel",data:[10,60,20,40,30,50],backgroundColor:["#006AA7"]},{label:"Plástico",data:[20,50,30,10,40,60],backgroundColor:["#D1250D"]},{label:"Vidro",data:[30,40,40,60,10,20],backgroundColor:["#015B00"]},{label:"Ferro",data:[40,30,50,20,60,10],backgroundColor:["#D2AB0E"]},{label:"Orgânico",data:[50,20,60,50,15,30],backgroundColor:["#9A6233"]},{label:"Mix",data:[60,10,70,30,20,40],backgroundColor:["#909399"]}]},valores:{mensagemPapel:"",mensagemPlastico:"",mensagemVidro:"",mensagemMetal:"",mensagemOrganico:""},retornoVazio:!1,retornoVazioMensagem:""}),components:{BarChart:M},created(){const{__API:a}=this;this.urlIndicadores=`${a}/Vrls/indicadoresnovo`;var e=new Date;this.dataDe=new Date(e.getFullYear(),e.getMonth(),e.getDate()),this.dataAte=new Date(e.getFullYear(),e.getMonth(),e.getDate())},mounted(){this.filtrar()},watch:{selected(a){if(a)return this.selectedBusiness=this.filterBusiness[a];this.selectedBusiness=null}},methods:{getMonthName(a){try{let e=a.substring(4),s=a.substring(0,4);switch(e){case"01":e="Janeiro";break;case"02":e="Fevereiro";break;case"03":e="Março";break;case"04":e="Abril";break;case"05":e="Maio";break;case"06":e="Junho";break;case"07":e="Julho";break;case"08":e="Agosto";break;case"09":e="Setembro";break;case"10":e="Outubro";break;case"11":e="Novembro";break;case"12":e="Dezembro";break}return`${e} de ${s}`}catch(e){return console.error(e),a}},filtrar(){const a=this;if(!this.dataDe||!this.dataAte)return;this.dataDeTexto=this.dataDe.getMonth()+1+"/"+this.dataDe.getFullYear(),this.dataAteTexto=this.dataAte.getMonth()+1+"/"+this.dataAte.getFullYear(),a.setLoading(!0);const e={dataInicial:this.getFirstDayOfMonth(this.dataDe),dataFinal:this.getLastDayOfMonth(this.dataAte),idGruposClientes:this.user.idGruposClientes},{__API:s,selectedBusiness:i}=this,{idGruposClientes:m,id:g,flagAdm:v,flagSup:$}=this.user;v||$?this.urlBusiness=`${s}/Cliente/grupo/`+m:this.urlBusiness=`${s}/Usuario/acessos/`+g,T.Get(this.urlBusiness).then(D=>{if(i&&i.length>0)e.idClientes=this.selectedBusiness.idClientes,e.idLocais=this.selectedBusiness.idLocais,e.idGruposClientes=this.selectedBusiness.idGruposClientes,e.listaClientes=this.selectedBusiness;else{console.log(D.data);let r=D.data.map(u=>({idGruposClientes:u.idGruposClientes,idClientes:u.idClientes,idLocais:u.idLocais}));console.log(r),e.listaClientes=r,console.log(e)}console.log(this.dataAte);let C=new Date(this.dataAte);C.setMonth(C.getMonth()-4);const L=Object.assign({},e);L.dataInicial=this.getFirstDayOfMonth(C),T.Post(`${s}/Vrls/indicadoresPeriodo`,L).then(r=>{this.mesmes.labels=[],this.mesmes.datasets=[],this.mesmes.datasets=[];let u=[],N=[],P=[],k=[],O=[],B=[];r.data.forEach(h=>{this.mesmes.labels.push(this.getMonthName(h.periodoChamada)),u.push(h.pesoPapel),N.push(h.pesoPlastico),P.push(h.pesoVidro),k.push(h.pesoMetal),O.push(h.pesoOrganico),B.push(h.pesoMix)}),this.mesmes.datasets.push({label:"Papel",data:u,backgroundColor:["#006AA7"]}),this.mesmes.datasets.push({label:"Plástico",data:N,backgroundColor:["#D1250D"]}),this.mesmes.datasets.push({label:"Vidro",data:P,backgroundColor:["#015B00"]}),this.mesmes.datasets.push({label:"Ferro",data:k,backgroundColor:["#D2AB0E"]}),this.mesmes.datasets.push({label:"Orgânico",data:O,backgroundColor:["#9A6233"]}),this.mesmes.datasets.push({label:"Mix",data:B,backgroundColor:["#909399"]})}),T.Post(this.urlIndicadores,e).then(r=>{a.setLoading(!1),r.error||(this.retornoVazio=!1,this.retornoVazioMensagem="",this.valores=r.data[0],this.chartData.labels=[],this.chartData.datasets[0].data=[],this.chartData.datasets[0].backgroundColor=[],this.valores.pesoPapel>0&&(this.chartData.labels.push(`Papel (Kg) ${this.valores.percentualPapel}`),this.chartData.datasets[0].data.push(this.valores.pesoPapel),this.chartData.datasets[0].backgroundColor.push("#006AA7")),this.valores.pesoPlastico>0&&(this.chartData.labels.push(`Plástico (Kg) ${this.valores.percentualPlastico}`),this.chartData.datasets[0].data.push(this.valores.pesoPlastico),this.chartData.datasets[0].backgroundColor.push("#D1250D")),this.valores.pesoVidro>0&&(this.chartData.labels.push(`Vidro (Kg) ${this.valores.percentualVidro}`),this.chartData.datasets[0].data.push(this.valores.pesoVidro),this.chartData.datasets[0].backgroundColor.push("#015B00")),this.valores.pesoMetal>0&&(this.chartData.labels.push(`Ferro (Kg) ${this.valores.percentualMetal}`),this.chartData.datasets[0].data.push(this.valores.pesoMetal),this.chartData.datasets[0].backgroundColor.push("#D2AB0E")),this.valores.pesoOrganico>0&&(this.chartData.labels.push(`Orgânico (Kg) ${this.valores.percentualOrganico}`),this.chartData.datasets[0].data.push(this.valores.pesoOrganico),this.chartData.datasets[0].backgroundColor.push("#9A6233")),this.valores.pesoCO2>0&&(this.chartData.labels.push(`CO2 (Kg) ${this.valores.percentualCO2}`),this.chartData.datasets[0].data.push(this.valores.pesoCO2),this.chartData.datasets[0].backgroundColor.push("#4B74A0")),this.valores.pesoMix>0&&(this.chartData.labels.push(`Mix (Kg) ${this.valores.percentualMix}`),this.chartData.datasets[0].data.push(this.valores.pesoMix),this.chartData.datasets[0].backgroundColor.push("#909399")))},r=>{a.setLoading(!1),this.retornoVazio=!0,this.retornoVazioMensagem=r.response.data.message,console.error(r)}).catch(r=>{a.setLoading(!1),this.retornoVazio=!0,this.retornoVazioMensagem=err.response.data.message,console.error(r)})}).catch(D=>console.error(D)).finally(()=>a.setLoading(!1))},changePeriodoControl({start:a,end:e}){this.dataDe=a,this.dataAte=e},changeFilterBusiness(a){a?this.selectedBusiness=[a]:this.selectedBusiness=[]},setLoading(a){const e=K.service({lock:!0,text:"Carregando...",background:"rgba(0, 0, 0, 0.7)"});a||e.close()},getLastDayOfMonth(a){const e=new Date(a),s=e.getFullYear(),i=e.getMonth(),m=new Date(s,i+1,0).getDate();return new Date(s,i,m).toISOString()},getFirstDayOfMonth(a){const e=new Date(a),s=e.getFullYear(),i=e.getMonth();return new Date(s,i,1).toISOString()}}},Ce=Object.assign(be,{__name:"IndicadoresBody",setup(a){return _.register(...y),(e,s)=>(t(),p("div",null,[n(j,{title:"Indicadores"}),n(R,{changeFilterBusiness:e.changeFilterBusiness,Pesquisar:e.filtrar,idGrupoClientes:e.idgruposclientes,background:"#CBD619",showPeriodoControl:!0,changePeriodoControl:e.changePeriodoControl,colorButton:"#F08327",colorTextButton:"#FFFFFF"},null,8,["changeFilterBusiness","Pesquisar","idGrupoClientes","changePeriodoControl"]),e.retornoVazio?l("",!0):(t(),p("div",ne,[o("div",de,[n(F,{chartData:e.chartData},null,8,["chartData"])]),o("div",he,[n(le,{dataDe:e.dataDeTexto,dataAte:e.dataAteTexto,total:e.valores.pesoTotalStr},null,8,["dataDe","dataAte","total"])]),o("div",ce,[me,n(Q,{"chart-data":e.chartData,mesmes:e.mesmes},null,8,["chart-data","mesmes"])]),o("div",ue,[o("div",ge,[pe,e.valores.pesoPapel>0?(t(),d(c,{key:0,cor:"azul",descricao:e.valores.mensagemPapel,valor:e.valores.pesoPapelStr,icone:"papel",linha1Numero:e.valores.mensagemPapelL1,linha1Texto:e.valores.mensagemPapelL11,linha2Numero:e.valores.mensagemPapelL2,linha2Texto:e.valores.mensagemPapelL21,linha3Numero:e.valores.mensagemPapelL3,linha3Texto:e.valores.mensagemPapelL31},null,8,["descricao","valor","linha1Numero","linha1Texto","linha2Numero","linha2Texto","linha3Numero","linha3Texto"])):l("",!0),e.valores.pesoMetal>0?(t(),d(c,{key:1,cor:"amarelo",descricao:e.valores.mensagemMetal,valor:e.valores.pesoMetalStr,icone:"metal",linha1Numero:e.valores.mensagemMetalL1,linha1Texto:e.valores.mensagemMetalL11,linha2Numero:e.valores.mensagemMetalL2,linha2Texto:e.valores.mensagemMetalL21,linha3Numero:e.valores.mensagemMetalL3,linha3Texto:e.valores.mensagemMetalL31},null,8,["descricao","valor","linha1Numero","linha1Texto","linha2Numero","linha2Texto","linha3Numero","linha3Texto"])):l("",!0),e.valores.pesoPlastico>0?(t(),d(c,{key:2,cor:"vermelho",descricao:e.valores.mensagemPlastico,valor:e.valores.pesoPlasticoStr,icone:"plastico",linha1Numero:e.valores.mensagemPlasticoL1,linha1Texto:e.valores.mensagemPlasticoL11,linha2Numero:e.valores.mensagemPlasticoL2,linha2Texto:e.valores.mensagemPlasticoL21,linha3Numero:e.valores.mensagemPlasticoL3,linha3Texto:e.valores.mensagemPlasticoL31},null,8,["descricao","valor","linha1Numero","linha1Texto","linha2Numero","linha2Texto","linha3Numero","linha3Texto"])):l("",!0),e.valores.pesoVidro>0?(t(),d(c,{key:3,cor:"verde",descricao:e.valores.mensagemVidro,valor:e.valores.pesoVidroStr,icone:"vidro",linha1Numero:e.valores.mensagemVidroL1,linha1Texto:e.valores.mensagemVidroL11,linha2Numero:e.valores.mensagemVidroL2,linha2Texto:e.valores.mensagemVidroL21,linha3Numero:e.valores.mensagemVidroL3,linha3Texto:e.valores.mensagemVidroL31},null,8,["descricao","valor","linha1Numero","linha1Texto","linha2Numero","linha2Texto","linha3Numero","linha3Texto"])):l("",!0),e.valores.pesoOrganico>0?(t(),d(c,{key:4,cor:"marrom",descricao:`${e.valores.mensagemOrganico} KG`,valor:e.valores.pesoOrganicoStr,icone:"organico",linha1Numero:`Resíduo orgânico: ${e.valores.mensagemOrganicoL1} KG`,linha1Texto:e.valores.mensagemOrganicoL11,linha2Numero:e.valores.mensagemOrganicoL2,linha2Texto:e.valores.mensagemOrganicoL21,linha3Numero:e.valores.mensagemOrganicoL3,linha3Texto:e.valores.mensagemOrganicoL31},null,8,["descricao","valor","linha1Numero","linha1Texto","linha2Numero","linha2Texto","linha3Numero","linha3Texto"])):l("",!0),e.valores.pesoCO2>0?(t(),d(c,{key:5,cor:"azul-co2",descricao:e.valores.mensagemCO2,valor:e.valores.pesoCO2Str,icone:"co2",linha1Numero:e.valores.mensagemCO2L1,linha1Texto:e.valores.mensagemCO2L11,linha2Numero:e.valores.mensagemCO2L2,linha2Texto:e.valores.mensagemCO2L21,linha3Numero:e.valores.mensagemCO2L3,linha3Texto:e.valores.mensagemCO2L31},null,8,["descricao","valor","linha1Numero","linha1Texto","linha2Numero","linha2Texto","linha3Numero","linha3Texto"])):l("",!0),e.valores.pesoMix>0?(t(),d(c,{key:6,cor:"cinza",descricao:e.valores.mensagemMix,valor:e.valores.pesoMixStr,icone:"mix",linha1Numero:e.valores.mensagemMix,linha1Texto:e.valores.mensagemMixL11,linha2Numero:e.valores.mensagemMixL2,linha2Texto:e.valores.mensagemMixL21,linha3Numero:e.valores.mensagemMixL3,linha3Texto:e.valores.mensagemMixL31},null,8,["descricao","valor","linha1Numero","linha1Texto","linha2Numero","linha2Texto","linha3Numero","linha3Texto"])):l("",!0)])])])),e.retornoVazio?(t(),p("div",ve,[n(q,{message:e.retornoVazioMensagem},null,8,["message"])])):l("",!0),o("div",De,[n(G(M),{chartData:e.mesmes},null,8,["chartData"])])]))}}),fe=b(Ce,[["__scopeId","data-v-84e14f6d"]]);const Te={__name:"IndicadoresView",setup(a){return(e,s)=>(t(),p(J,null,[n(x,null,{titulo:E(()=>[Y("Indicadores")]),_:1}),n(fe)],64))}},Be=b(Te,[["__scopeId","data-v-8c916146"]]);export{Be as default};