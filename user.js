// Shared user helper — real Firebase Auth + wallet. No dummy data.
// Pages must load: firebase-app-compat, firebase-auth-compat, firebase-database-compat, firebase-config.js, then this.
function needAuth(next) {
  firebase.auth().onAuthStateChanged(async u => {
    if (!u) { location.href = 'login.html'; return; }
    try {
      const ref = fbDB().ref('users/' + u.uid);
      const s = await ref.once('value');
      const v = s.val();
      if (v && v.banned === true) { location.href = 'banned.html'; return; }
      if (!s.exists()) {
        await ref.set({name: u.displayName || '', email: u.email || '', phone: '', created: Date.now()});
      }
    } catch (e) {}
    if (next) next(u);
  });
}
function paintWallets(map) {
  // map: {elementSelector} — reads wallets/<uid> live
  const u = firebase.auth().currentUser;
  const els = document.querySelectorAll('.wallet-amt');
  if (!u) return;
  fbDB().ref('wallets/' + u.uid).on('value', s => {
    const b = parseFloat(s.val() || '0').toFixed(2);
    els.forEach(e => e.textContent = b);
    try { localStorage.setItem('fb_wallet', b); } catch (e) {}
    if (map) map(parseFloat(b));
  });
}
function userKey() { const u = firebase.auth().currentUser; return u ? u.uid : null; }
function doLogout() { firebase.auth().signOut().then(() => location.href = 'login.html'); }
