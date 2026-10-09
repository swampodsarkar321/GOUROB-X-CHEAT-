// Firebase Realtime DB config
// WARNING: apiKey is public in the browser, so set admin-only write rules
// in Firebase Console > Realtime Database > Rules (see database.rules.json).
const firebaseConfig = {
  apiKey: "AIzaSyA8JtqgrJkY67gxsps569gQjf9Mb1uecF8",
  authDomain: "stikex-aeef1.firebaseapp.com",
  databaseURL: "https://stikex-aeef1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "stikex-aeef1",
  storageBucket: "stikex-aeef1.firebasestorage.app",
  messagingSenderId: "102340803215",
  appId: "1:102340803215:web:7de28ed037e4ee75e24efa",
  measurementId: "G-WXQNJQ58K5"
};
// Init (compat SDK loads on each page)
try {
  if (typeof firebase !== 'undefined' && !firebase.apps.length) firebase.initializeApp(firebaseConfig);
} catch(e){ console.warn('FB init:', e); }
function fbDB(){ return firebase.database(); }
function fbGet(path){ return fbDB().ref(path).once('value').then(s=>s.val()); }

/* --- Realtime Database Rules: use database.rules.json (paste in Console) ---
Admin writes require Firebase Auth (Email login) via admin.html.
*/
