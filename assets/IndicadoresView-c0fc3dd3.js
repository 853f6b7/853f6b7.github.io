import{a as P,r as M,B as O,G as y,C as d}from"./GraficoIndicadores-42b26334.js";import{K as V,_ as v,r as S,o as t,m as n,c as u,a as o,t as f,p as T,j as L,b as h,d as l,q as C,E as I,w as b,F as $,i as A}from"./index-ce5b56b8.js";import{T as k,E as F}from"./EmptyState-e0559b11.js";import{_ as z}from"./VmlPesquisa-20922d4e.js";import{B as w}from"./Breadcumbs-efe5b9dd.js";/* empty css                                                    */P.register(...M);const K=V({name:"Home",props:{chartData:Object},components:{BarChart:O}});function G(a,e,s,i,c,m){const g=S("BarChart");return t(),n(g,{chartData:a.chartData},null,8,["chartData"])}const E=v(K,[["render",G]]);const Y={props:{total:String,dataDe:String,dataAte:String}},N=a=>(T("data-v-ed0455c4"),a=a(),L(),a),j={class:"container"},q={class:"cinza redondo"},J=N(()=>o("div",{class:"titulo"},"Total reciclado - período",-1)),R={class:"conteudo-container"},H={class:"conteudo"},U={class:"kgs item"},x=N(()=>o("div",{class:"separador item"},"-",-1)),Q={class:"periodo item"};function W(a,e,s,i,c,m){return t(),u("div",j,[o("div",q,[J,o("div",R,[o("div",H,[o("div",U,f(s.total)+" Kg",1),x,o("div",Q,f(s.dataDe)+" a "+f(s.dataAte),1)])])])])}const X=v(Y,[["render",W],["__scopeId","data-v-ed0455c4"]]);const _=a=>(T("data-v-001191f2"),a=a(),L(),a),Z={key:0,class:"indicadorescontainer"},ee={class:"item pizzaContainer"},ae={class:"item"},se={class:"item cinza redondo"},oe=_(()=>o("div",{class:"titulo-total-reciclado"},"Total reciclado - ano",-1)),te={class:"item"},re={style:{display:"flex"}},ie=_(()=>o("div",{class:"titulo-vertical"},"Estimativa de benefícios ambientais",-1)),le={key:1,class:"msgVazioArea"},ne={data:()=>({user:JSON.parse(sessionStorage.getItem("user")),dataDe:new Date().getDate(),dataAte:null,dataDeTexto:"Set/2023",dataAteTexto:"Dez/2023",somaTotal:0,user:JSON.parse(sessionStorage.getItem("user")),urlBusiness:null,selected:0,selectedBusiness:null,filterBusiness:[],tipoVisualizacao:1,chartData:{labels:["Papel (Kg)","Plástico (Kg)","Vidro (Kg)","Ferro (Kg)","Orgânico (Kg)","Mix (Kg)"],datasets:[{label:"",data:[0,0,0,0,0,0],backgroundColor:["#006AA7","#D1250D","#015B00","#D2AB0E","#9A6233","#E6A23C"]}]},valores:{mensagemPapel:"",mensagemPlastico:"",mensagemVidro:"",mensagemMetal:"",mensagemOrganico:""},retornoVazio:!1,retornoVazioMensagem:""}),created(){const{__API:a}=this;this.urlIndicadores=`${a}/Vrls/indicadoresnovo`;var e=new Date;this.dataDe=new Date(e.getFullYear(),e.getMonth(),e.getDate()),this.dataAte=new Date(e.getFullYear(),e.getMonth(),e.getDate())},mounted(){this.filtrar()},watch:{selected(a){if(a)return this.selectedBusiness=this.filterBusiness[a];this.selectedBusiness=null}},methods:{filtrar(){const a=this;if(!this.dataDe||!this.dataAte)return;this.dataDeTexto=this.dataDe.getMonth()+1+"/"+this.dataDe.getFullYear(),this.dataAteTexto=this.dataAte.getMonth()+1+"/"+this.dataAte.getFullYear(),a.setLoading(!0);const e={dataInicial:this.getFirstDayOfMonth(this.dataDe),dataFinal:this.getLastDayOfMonth(this.dataAte),idGruposClientes:this.user.idGruposClientes},{__API:s,selectedBusiness:i}=this,{idGruposClientes:c,id:m,flagAdm:g,flagSup:B}=this.user;g||B?this.urlBusiness=`${s}/Cliente/grupo/`+c:this.urlBusiness=`${s}/Usuario/acessos/`+m,C.Get(this.urlBusiness).then(p=>{if(i&&i.length>0)e.idClientes=this.selectedBusiness.idClientes,e.idLocais=this.selectedBusiness.idLocais,e.idGruposClientes=this.selectedBusiness.idGruposClientes,e.listaClientes=this.selectedBusiness;else{console.log(p.data);let r=p.data.map(D=>({idGruposClientes:D.idGruposClientes,idClientes:D.idClientes,idLocais:D.idLocais}));console.log(r),e.listaClientes=r,console.log(e)}C.Post(this.urlIndicadores,e).then(r=>{a.setLoading(!1),r.error||(this.retornoVazio=!1,this.retornoVazioMensagem="",this.valores=r.data[0],this.chartData.labels=[],this.chartData.datasets[0].data=[],this.chartData.datasets[0].backgroundColor=[],this.valores.pesoPapel>0&&(this.chartData.labels.push(`Papel (Kg) ${this.valores.percentualPapel}`),this.chartData.datasets[0].data.push(this.valores.pesoPapel),this.chartData.datasets[0].backgroundColor.push("#006AA7")),this.valores.pesoPlastico>0&&(this.chartData.labels.push(`Plástico (Kg) ${this.valores.percentualPlastico}`),this.chartData.datasets[0].data.push(this.valores.pesoPlastico),this.chartData.datasets[0].backgroundColor.push("#D1250D")),this.valores.pesoVidro>0&&(this.chartData.labels.push(`Vidro (Kg) ${this.valores.percentualVidro}`),this.chartData.datasets[0].data.push(this.valores.pesoVidro),this.chartData.datasets[0].backgroundColor.push("#015B00")),this.valores.pesoMetal>0&&(this.chartData.labels.push(`Ferro (Kg) ${this.valores.percentualMetal}`),this.chartData.datasets[0].data.push(this.valores.pesoMetal),this.chartData.datasets[0].backgroundColor.push("#D2AB0E")),this.valores.pesoOrganico>0&&(this.chartData.labels.push(`Orgânico (Kg) ${this.valores.percentualOrganico}`),this.chartData.datasets[0].data.push(this.valores.pesoOrganico),this.chartData.datasets[0].backgroundColor.push("#9A6233")),this.valores.pesoCO2>0&&(this.chartData.labels.push(`CO2 (Kg) ${this.valores.percentualCO2}`),this.chartData.datasets[0].data.push(this.valores.pesoCO2),this.chartData.datasets[0].backgroundColor.push("#4B74A0")),this.valores.pesoMix>0&&(this.chartData.labels.push(`Mix (Kg) ${this.valores.percentualMix}`),this.chartData.datasets[0].data.push(this.valores.pesoMix),this.chartData.datasets[0].backgroundColor.push("#E6A23C")))},r=>{a.setLoading(!1),this.retornoVazio=!0,this.retornoVazioMensagem=r.response.data.message,console.error(r)}).catch(r=>{a.setLoading(!1),this.retornoVazio=!0,this.retornoVazioMensagem=err.response.data.message,console.error(r)})}).catch(p=>console.error(p)).finally(()=>a.setLoading(!1))},changePeriodoControl({start:a,end:e}){this.dataDe=a,this.dataAte=e},changeFilterBusiness(a){a?this.selectedBusiness=[a]:this.selectedBusiness=[]},setLoading(a){const e=I.service({lock:!0,text:"Carregando...",background:"rgba(0, 0, 0, 0.7)"});a||e.close()},getLastDayOfMonth(a){const e=new Date(a),s=e.getFullYear(),i=e.getMonth(),c=new Date(s,i+1,0).getDate();return new Date(s,i,c).toISOString()},getFirstDayOfMonth(a){const e=new Date(a),s=e.getFullYear(),i=e.getMonth();return new Date(s,i,1).toISOString()}}},he=Object.assign(ne,{__name:"IndicadoresBody",setup(a){return(e,s)=>(t(),u("div",null,[h(k,{title:"Indicadores"}),h(z,{changeFilterBusiness:e.changeFilterBusiness,Pesquisar:e.filtrar,idGrupoClientes:e.idgruposclientes,background:"#CBD619",showPeriodoControl:!0,changePeriodoControl:e.changePeriodoControl,colorButton:"#F08327",colorTextButton:"#FFFFFF"},null,8,["changeFilterBusiness","Pesquisar","idGrupoClientes","changePeriodoControl"]),e.retornoVazio?l("",!0):(t(),u("div",Z,[o("div",ee,[h(y,{chartData:e.chartData},null,8,["chartData"])]),o("div",ae,[h(X,{dataDe:e.dataDeTexto,dataAte:e.dataAteTexto,total:e.valores.pesoTotalStr},null,8,["dataDe","dataAte","total"])]),o("div",se,[oe,h(E,{"chart-data":e.chartData},null,8,["chart-data"])]),o("div",te,[o("div",re,[ie,e.valores.pesoPapel>0?(t(),n(d,{key:0,cor:"azul",descricao:e.valores.mensagemPapel,valor:e.valores.pesoPapelStr,icone:"papel",linha1Numero:e.valores.mensagemPapelL1,linha1Texto:e.valores.mensagemPapelL11,linha2Numero:e.valores.mensagemPapelL2,linha2Texto:e.valores.mensagemPapelL21,linha3Numero:e.valores.mensagemPapelL3,linha3Texto:e.valores.mensagemPapelL31},null,8,["descricao","valor","linha1Numero","linha1Texto","linha2Numero","linha2Texto","linha3Numero","linha3Texto"])):l("",!0),e.valores.pesoMetal>0?(t(),n(d,{key:1,cor:"amarelo",descricao:e.valores.mensagemMetal,valor:e.valores.pesoMetalStr,icone:"metal",linha1Numero:e.valores.mensagemMetalL1,linha1Texto:e.valores.mensagemMetalL11,linha2Numero:e.valores.mensagemMetalL2,linha2Texto:e.valores.mensagemMetalL21,linha3Numero:e.valores.mensagemMetalL3,linha3Texto:e.valores.mensagemMetalL31},null,8,["descricao","valor","linha1Numero","linha1Texto","linha2Numero","linha2Texto","linha3Numero","linha3Texto"])):l("",!0),e.valores.pesoPlastico>0?(t(),n(d,{key:2,cor:"vermelho",descricao:e.valores.mensagemPlastico,valor:e.valores.pesoPlasticoStr,icone:"plastico",linha1Numero:e.valores.mensagemPlasticoL1,linha1Texto:e.valores.mensagemPlasticoL11,linha2Numero:e.valores.mensagemPlasticoL2,linha2Texto:e.valores.mensagemPlasticoL21,linha3Numero:e.valores.mensagemPlasticoL3,linha3Texto:e.valores.mensagemPlasticoL31},null,8,["descricao","valor","linha1Numero","linha1Texto","linha2Numero","linha2Texto","linha3Numero","linha3Texto"])):l("",!0),e.valores.pesoVidro>0?(t(),n(d,{key:3,cor:"verde",descricao:e.valores.mensagemVidro,valor:e.valores.pesoVidroStr,icone:"vidro",linha1Numero:e.valores.mensagemVidroL1,linha1Texto:e.valores.mensagemVidroL11,linha2Numero:e.valores.mensagemVidroL2,linha2Texto:e.valores.mensagemVidroL21,linha3Numero:e.valores.mensagemVidroL3,linha3Texto:e.valores.mensagemVidroL31},null,8,["descricao","valor","linha1Numero","linha1Texto","linha2Numero","linha2Texto","linha3Numero","linha3Texto"])):l("",!0),e.valores.pesoOrganico>0?(t(),n(d,{key:4,cor:"marrom",descricao:`${e.valores.mensagemOrganico} KG`,valor:e.valores.pesoOrganicoStr,icone:"organico",linha1Numero:e.valores.mensagemOrganicoL1,linha1Texto:e.valores.mensagemOrganicoL11,linha2Numero:e.valores.mensagemOrganicoL2,linha2Texto:e.valores.mensagemOrganicoL21,linha3Numero:e.valores.mensagemOrganicoL3,linha3Texto:e.valores.mensagemOrganicoL31},null,8,["descricao","valor","linha1Numero","linha1Texto","linha2Numero","linha2Texto","linha3Numero","linha3Texto"])):l("",!0),e.valores.pesoCO2>0?(t(),n(d,{key:5,cor:"azul-co2",descricao:e.valores.mensagemCO2,valor:e.valores.pesoCO2Str,icone:"co2",linha1Numero:e.valores.mensagemCO2L1,linha1Texto:e.valores.mensagemCO2L11,linha2Numero:e.valores.mensagemCO2L2,linha2Texto:e.valores.mensagemCO2L21,linha3Numero:e.valores.mensagemCO2L3,linha3Texto:e.valores.mensagemCO2L31},null,8,["descricao","valor","linha1Numero","linha1Texto","linha2Numero","linha2Texto","linha3Numero","linha3Texto"])):l("",!0),e.valores.pesoMix>0?(t(),n(d,{key:6,cor:"laranja",descricao:e.valores.mensagemMix,valor:e.valores.pesoMixStr,icone:"mix",linha1Numero:e.valores.mensagemMix,linha1Texto:e.valores.mensagemMixL11,linha2Numero:e.valores.mensagemMixL2,linha2Texto:e.valores.mensagemMixL21,linha3Numero:e.valores.mensagemMixL3,linha3Texto:e.valores.mensagemMixL31},null,8,["descricao","valor","linha1Numero","linha1Texto","linha2Numero","linha2Texto","linha3Numero","linha3Texto"])):l("",!0)])])])),e.retornoVazio?(t(),u("div",le,[h(F,{message:e.retornoVazioMensagem},null,8,["message"])])):l("",!0)]))}}),de=v(he,[["__scopeId","data-v-001191f2"]]);const ce={__name:"IndicadoresView",setup(a){return(e,s)=>(t(),u($,null,[h(w,null,{titulo:b(()=>[A("Indicadores")]),_:1}),h(de)],64))}},fe=v(ce,[["__scopeId","data-v-8c916146"]]);export{fe as default};
