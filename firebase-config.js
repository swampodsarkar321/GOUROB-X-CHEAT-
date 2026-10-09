// Firebase Realtime DB config — তোমার দেওয়া config
// WARNING: apiKey browser-এ public থাকে, তাই Firebase Console > Realtime Database > Rules-এ admin-only write rule বসাও (নিচে sample)।
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
// Init (compat SDK pages-এ load হবে)
try {
  if (typeof firebase !== 'undefined' && !firebase.apps.length) firebase.initializeApp(firebaseConfig);
} catch(e){ console.warn('FB init:', e); }
function fbDB(){ return firebase.database(); }
function fbGet(path){ return fbDB().ref(path).once('value').then(s=>s.val()); }

/* --- Realtime Database Rules sample (Console-এ paste করো) ---
{
  "rules": {
    "products": { ".read": true, ".write": "auth != null" },
    "updates":  { ".read": true, ".write": "auth != null" },
    ".read": false, ".write": false
  }
}
Admin লেখার জন্য Firebase Auth (Email login) enable করে admin.html-এ login করো।
*/
