import{a as r}from"./axios-4a70c6fc.js";const s=JSON.parse(sessionStorage.getItem("user"));var o={};s&&(o={headers:{Authorization:`Bearer ${s.token}`}});const c={Post:(e,t)=>r.post(e,t,o),Get:e=>r.get(e,o),GetBlob:e=>{const t={responseType:"blob",storageAccountName:"portalmultilixo",storageAccountKey:"mShw8WXzp/rvMY4z5lvPddPi0gD0E5vIT6s+D+MxC2eABUbxchafa1McGiCpOQN9/nrjWIyP/lcL+AStcR2/yw==",containerName:"portalmultilixo"};return r.get(e,Object.assign(o,t))}};export{c};