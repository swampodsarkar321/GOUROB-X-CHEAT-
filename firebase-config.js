// Firebase Realtime DB config
// WARNING: apiKey is public in the browser, so set admin-only write rules
// in Firebase Console > Realtime Database > Rules (see database.rules.json).
const firebaseConfig = {
  imgbbKey: "22ecb01c424e02cc3812fd0b79c0a893",
  bkashNumber: "01608822677",
  apiKey: "AIzaSyAplkHSphSkF656LmImRZSthhi37JY0lYk",
  authDomain: "strikex-54372.firebaseapp.com",
  databaseURL: "https://strikex-54372-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "strikex-54372",
  storageBucket: "strikex-54372.firebasestorage.app",
  messagingSenderId: "640658293319",
  appId: "1:640658293319:web:6598bfb23cf9d3b58f2762",
  measurementId: "G-RHP6LD9YR0"
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
