import{a as e}from"./axios-4a70c6fc.js";const a=JSON.parse(localStorage.getItem("user")),r={headers:{Authorization:`Bearer ${a.token}`}},c={Post:(o,t)=>e.post(o,t,r),Get:o=>e.get(o,r),GetBlob:o=>{const t={responseType:"blob",storageAccountName:"portalmultilixo",storageAccountKey:"mShw8WXzp/rvMY4z5lvPddPi0gD0E5vIT6s+D+MxC2eABUbxchafa1McGiCpOQN9/nrjWIyP/lcL+AStcR2/yw==",containerName:"portalmultilixo"};return e.get(o,Object.assign(r,t))}};export{c};