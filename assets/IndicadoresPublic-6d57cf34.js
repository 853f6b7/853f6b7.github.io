import{T as k,E as y}from"./EmptyState-25c6bc4d.js";import{r as c,o as a,c as l,b as t,a as s,w as u,u as b,s as z,h as P,F,k as M,l as p,d as o,t as d,m as K,_ as I}from"./index-fa85ad0a.js";import{C as h,G as B}from"./GraficoIndicadores-a1297013.js";const C={class:"container-public"},G={class:"pesquisa"},A=s("div",{class:"texto"},"Selecione uma empresa",-1),D={style:{"margin-top":"10px"}},w={class:"container"},L={class:"modoexibicao"},R=s("div",null," Visualizar como: ",-1),$={key:0,class:"exibicaocard"},N={key:1,class:"exibicaografico"},O={class:"assuntosarea"},T={key:0,class:"assunto"},E={key:1,class:"assunto"},S={key:2,class:"assunto"},U={key:3,class:"assunto"},q={key:4,class:"assunto"},W={key:5,class:"assunto"},j={key:6,class:"assunto"},J={class:"graficoarea"},Y={key:2,class:"msgVazioArea"},H={data:()=>({params:{},dtstartperiodo:new Date,dtfinishperiodo:new Date,urlBusiness:null,selected:0,selectedBusiness:null,filterBusiness:[],tipoVisualizacao:1,tiposVisualizacao:[{value:1,label:"Card"},{value:2,label:"Pizza"}],chartData:{labels:["Plástico (Kg)","Vidro (Kg)","Lixo (Kg)","Mix (Kg)","Alumínio (Kg)","Ferro (Kg)","Papel (Kg)"],datasets:[{data:[0,0,0,0,0,0,0],backgroundColor:["#FF0000","#58A786","#000000","#C0DF16","#999999","#FFA500","#00BFFF"]}]},valores:{mensagemPlastico:"Reciclar 0 KG de plástico pode salvar 0kWh de energia, 0 barris de petróleo e reduzir as emissões de gases de efeito estufa",mensagemVidro:"Reciclar 0 KG de vidro pode economizar 0 KG de matérias-primas, incluindo areia, soda e calcário, além de economizar energia.",mensagemLixo:"Total de lixo: 0",mensagemMix:"Média de Arvores que deixamos de cortar: 0",mensagemAluminio:"Reciclar 0 KG de alumínio pode economizar 0KG de bauxita, 0  kWh de energia e 0 toneladas de dióxido de carbono (CO2)",mensagemMetal:"Reciclar 0 KG de ferro pode economizar cerca de 0 minério de ferro, 0 de carvão e 0kg de calcário",mensagemPapel:"Reciclar 0 KG de papel pode salver cerca de 0 árvores, 0 galões de água e 0 kWh de energia."},retornoVazio:!1,retornoVazioMensagem:""}),created(){const r=atob(this.$route.params.params),e=JSON.parse('{"'+decodeURI(r).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}');this.params=e,this.filtrar()},methods:{filtrar(){const{__API:r,dtstartperiodo:e,dtfinishperiodo:i}=this;e.setDate(1);let _=new Date(i.getFullYear(),i.getMonth()+1,0);const m={dataInicial:e,dataFinal:_,idGruposClientes:this.params.idGruposClientes,idLocais:this.params.idLocais};this.urlIndicadores=`${r}/Vrls/indicadores`,K.Post(this.urlIndicadores,m).then(v=>{this.retornoVazio=!1,this.retornoVazioMensagem="",this.valores=v.data[0],this.chartData.datasets[0].data=[this.valores.pesoPlastico,this.valores.pesoVidro,this.valores.pesoLixo,this.valores.pesoMix,this.valores.pesoAluminio,this.valores.pesoMetal,this.valores.pesoPapel]},v=>{this.retornoVazio=!0,this.retornoVazioMensagem=v.response.data.message})},changePeriodoControl({start:r,end:e}){this.dataDe=r,this.dataAte=e},changeFilterBusiness(r){r?this.selectedBusiness=r:this.selectedBusiness=null}}},Q=Object.assign(H,{__name:"IndicadoresBodyPublic",setup(r){return(e,i)=>{const _=c("el-date-picker"),m=c("el-col-8"),v=c("el-button"),g=c("el-row"),V=c("el-option"),f=c("el-select");return a(),l("div",C,[t(k,{title:"Indicadores - Acesso público",class:"titlepage"}),s("div",G,[A,s("div",D,[t(g,null,{default:u(()=>[s("div",w,[t(m,null,{default:u(()=>[t(_,{class:"datepicker",modelValue:e.dtstartperiodo,"onUpdate:modelValue":i[0]||(i[0]=n=>e.dtstartperiodo=n),type:"month",placeholder:"Mes inicial"},null,8,["modelValue"])]),_:1}),t(m,null,{default:u(()=>[t(_,{class:"datepicker",style:{"margin-left":"5px"},modelValue:e.dtfinishperiodo,"onUpdate:modelValue":i[1]||(i[1]=n=>e.dtfinishperiodo=n),type:"month",placeholder:"Mes final"},null,8,["modelValue"])]),_:1}),t(m,{class:"botao-container"},{default:u(()=>[s("div",null,[t(v,{icon:b(z),class:"botao",onClick:i[2]||(i[2]=n=>e.filtrar()),color:"#F2F2F2"},{default:u(()=>[P("Pesquisa ")]),_:1},8,["icon"])])]),_:1})])]),_:1})])]),s("div",L,[R,t(f,{modelValue:e.tipoVisualizacao,"onUpdate:modelValue":i[3]||(i[3]=n=>e.tipoVisualizacao=n),class:"select",size:"large",placeholder:"Todos",style:{width:"150px"}},{default:u(()=>[(a(!0),l(F,null,M(e.tiposVisualizacao,n=>(a(),p(V,{key:n.value,label:n.label,value:n.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),e.tipoVisualizacao==1&&!e.retornoVazio?(a(),l("div",$,[e.valores.pesoPapel>0?(a(),p(h,{key:0,cor:"azul",descricao:e.valores.mensagemPapel,icone:"papel"},null,8,["descricao"])):o("",!0),e.valores.pesoPlastico>0?(a(),p(h,{key:1,cor:"vermelho",descricao:e.valores.mensagemPlastico,icone:"plastico"},null,8,["descricao"])):o("",!0),e.valores.pesoVidro>0?(a(),p(h,{key:2,cor:"verde",descricao:e.valores.mensagemVidro,icone:"vidro"},null,8,["descricao"])):o("",!0),e.valores.pesoMetal>0?(a(),p(h,{key:3,cor:"amarelo",descricao:e.valores.mensagemMetal,icone:"metal"},null,8,["descricao"])):o("",!0),e.valores.pesoOrganico>0?(a(),p(h,{key:4,cor:"marrom",descricao:`${e.valores.mensagemOrganico} KG`,icone:"organico"},null,8,["descricao"])):o("",!0)])):o("",!0),e.tipoVisualizacao==2&&!e.retornoVazio?(a(),l("div",N,[s("div",O,[e.valores.pesoPlastico>0?(a(),l("div",T,[s("p",null,d(e.valores.mensagemPlastico),1)])):o("",!0),e.valores.pesoVidro>0?(a(),l("div",E,[s("p",null,d(e.valores.mensagemVidro),1)])):o("",!0),e.valores.pesoLixo>0?(a(),l("div",S,[s("p",null,d(e.valores.mensagemLixo+" KG"),1)])):o("",!0),e.valores.pesoMix>0?(a(),l("div",U,[s("p",null,d(e.valores.mensagemMix),1)])):o("",!0),e.valores.pesoAluminio>0?(a(),l("div",q,[s("p",null,d(e.valores.mensagemAluminio),1)])):o("",!0),e.valores.pesoMetal>0?(a(),l("div",W,[s("p",null,d(e.valores.mensagemMetal),1)])):o("",!0),e.valores.pesoPapel>0?(a(),l("div",j,[s("p",null,d(e.valores.mensagemPapel),1)])):o("",!0)]),s("div",J,[t(B,{chartData:e.chartData},null,8,["chartData"])])])):o("",!0),e.retornoVazio?(a(),l("div",Y,[t(y)])):o("",!0)])}}});const X={class:"main"},Z={__name:"IndicadoresPublic",setup(r){return(e,i)=>(a(),l("div",X,[t(Q)]))}},se=I(Z,[["__scopeId","data-v-211956a0"]]);export{se as default};
