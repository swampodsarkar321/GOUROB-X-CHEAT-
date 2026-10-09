if('serviceWorker' in navigator){window.addEventListener('load',()=>{navigator.serviceWorker.register('sw.js').catch(()=>{})})}
let pwaEvt=null;
window.addEventListener('beforeinstallprompt',e=>{
 e.preventDefault(); pwaEvt=e;
 try{ if(localStorage.getItem('pwa_hide'))return; }catch(_){}
 const bar=document.getElementById('pwaBar');
 if(bar) bar.style.display='flex';
});
async function pwaInstall(){
 const bar=document.getElementById('pwaBar');
 try{
  if(!pwaEvt){ if(bar)bar.style.display='none'; return; }
  pwaEvt.prompt();
  await pwaEvt.userChoice;
  pwaEvt=null;
 }catch(_){}
 if(bar)bar.style.display='none';
}
function pwaDismiss(){
 const bar=document.getElementById('pwaBar');
 if(bar)bar.style.display='none';
 try{ localStorage.setItem('pwa_hide','1'); }catch(_){}
}
