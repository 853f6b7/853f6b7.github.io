import{a as r}from"./axios-4a70c6fc.js";const a=JSON.parse(localStorage.getItem("user"));var e={};a&&(e={headers:{Authorization:`Bearer ${a.token}`}});const c={Post:(o,t)=>r.post(o,t,e),Get:o=>r.get(o,e),GetBlob:o=>{const t={responseType:"blob",storageAccountName:"portalmultilixo",storageAccountKey:"mShw8WXzp/rvMY4z5lvPddPi0gD0E5vIT6s+D+MxC2eABUbxchafa1McGiCpOQN9/nrjWIyP/lcL+AStcR2/yw==",containerName:"portalmultilixo"};return r.get(o,Object.assign(e,t))}};export{c};