import{W as y,r as n,o as r,c,a as i,b as l,w as a,F as V,k as $,i as v,d as C,u as B,s as P,f as b,_ as k,t as F}from"./index-7b92d6cf.js";import{c as w}from"./controllerbase-f6de9c04.js";const q={class:"pesquisa"},x=i("div",{class:"texto"},"Selecione uma empresa",-1),S={style:{"margin-top":"10px"}},T={class:"container"},N={key:0,class:"datas"},U={props:{changeFilterBusiness:{type:Function,default:()=>{}},changePeriodoControl:{type:Function,default:()=>{}},Pesquisar:{type:Function},background:{type:String,default:"#F08327"},showPeriodoControl:{type:Boolean}},data:()=>({selected:[],filterBusiness:[],dtstartperiodo:new Date,dtfinishperiodo:new Date}),created(){const e=JSON.parse(localStorage.getItem("user")),{__API:s}=this,t=`${s}/Cliente/grupo/`+e.idGruposClientes;w.Get(t).then(d=>{this.filterBusiness=d.data,this.filterBusiness.unshift({})})},watch:{selected(e){e?this.$props.changeFilterBusiness(this.filterBusiness[e]):this.$props.changeFilterBusiness(!1)},dtstartperiodo(e){e&&this.$props.changePeriodoControl({start:e,end:this.dtfinishperiodo})},dtfinishperiodo(e){e&&this.$props.changePeriodoControl({start:this.dtstartperiodo,end:e})}}},A=Object.assign(U,{__name:"VmlPesquisa",setup(e){return y(s=>({"7c5d2615":e.background})),(s,t)=>{const d=n("el-option"),u=n("el-select"),_=n("el-col-1"),m=n("el-date-picker"),f=n("el-col"),h=n("el-button"),g=n("el-row");return r(),c("div",q,[x,i("div",S,[l(g,null,{default:a(()=>[i("div",T,[l(_,null,{default:a(()=>[l(u,{modelValue:s.selected,"onUpdate:modelValue":t[0]||(t[0]=o=>s.selected=o),placeholder:"Todos",style:{width:"300px"},filterable:""},{default:a(()=>[(r(!0),c(V,null,$(s.filterBusiness,(o,p)=>(r(),v(d,{key:p,label:p==0?"Todos":`${o.cnpj} -  ${o.codigoCliente} ${o.nomeLocal!=""?o.nomeLocal:o.nome}`,value:p},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(f,{span:30},{default:a(()=>[e.showPeriodoControl==!0?(r(),c("div",N,[l(m,{modelValue:s.dtstartperiodo,"onUpdate:modelValue":t[1]||(t[1]=o=>s.dtstartperiodo=o),type:"month",placeholder:"Mes inicial"},null,8,["modelValue"]),l(m,{style:{"margin-left":"5px"},modelValue:s.dtfinishperiodo,"onUpdate:modelValue":t[2]||(t[2]=o=>s.dtfinishperiodo=o),type:"month",placeholder:"Mes final"},null,8,["modelValue"])])):C("",!0)]),_:1}),l(f,{span:2,class:"botao-container"},{default:a(()=>[i("div",null,[l(h,{type:"primary",class:"botao",onClick:t[3]||(t[3]=o=>e.Pesquisar()),icon:B(P),color:"#F2F2F2"},{default:a(()=>[b("Pesquisa")]),_:1},8,["icon"])])]),_:1})])]),_:1})])])}}});const D={props:{title:{type:String,required:!0},color:{type:String,default:"#444444"}}},L={class:"subtitulo"},j=i("div",{style:{width:"3px",height:"26px",background:"#444444 0% 0% no-repeat padding-box",opacity:"1"}},null,-1),G={class:"cadastrosubtitulo"};function I(e,s,t,d,u,_){return r(),c("div",L,[j,i("div",G,F(t.title.toUpperCase()),1)])}const E=k(D,[["render",I]]);export{E as T,A as _};