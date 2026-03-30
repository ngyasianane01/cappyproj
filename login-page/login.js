

//READ ROLE FROM URL
const urlParams = new URLSearchParams(window.location.search);
const role = urlParams.get('role') || sessionStorage.getItem('cb_role') || null;

// If no role was passed at all, send back to role select
if (!role) {
  window.location.href = '../role-select/role.html';
}

const roleLabel = role === 'brand' ? 'Brand' : 'Creator';
const roleEmoji = role === 'brand' ? '🏷️' : '🎨';

// Save role so profile setup and dashboard can use it
sessionStorage.setItem('cb_role', role);

// Set dynamic subtitle — "Continue as Brand" OR "Continue as Creator"
const subtitle = document.getElementById('subtitle');
subtitle.innerHTML = `Continue as <span class="role-badge">${roleEmoji} ${roleLabel}</span>`;

//TAB SWITCHING
function switchTab(tab) {
  const tabLogin   = document.getElementById('tabLogin');
  const tabCreate  = document.getElementById('tabCreate');
  const panelLogin = document.getElementById('panelLogin');
  const panelCreate= document.getElementById('panelCreate');

  document.getElementById('loginError').textContent = '';
  document.getElementById('createError').textContent = '';

  if (tab === 'login') {
    tabLogin.classList.add('tab--active');
    tabCreate.classList.remove('tab--active');
    panelLogin.classList.remove('hidden');
    panelCreate.classList.add('hidden');
  } else {
    tabCreate.classList.add('tab--active');
    tabLogin.classList.remove('tab--active');
    panelCreate.classList.remove('hidden');
    panelLogin.classList.add('hidden');
  }

  const activePanel = tab === 'login' ? panelLogin : panelCreate;
  activePanel.style.opacity = '0';
  activePanel.style.transform = 'translateY(10px)';
  requestAnimationFrame(() => {
    activePanel.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    activePanel.style.opacity = '1';
    activePanel.style.transform = 'translateY(0)';
  });
}

//PASSWORD VISIBILITY TOGGLE
function togglePw(inputId, btn) {
  const input = document.getElementById(inputId);
  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';
  btn.innerHTML = isPassword
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
        <line x1="1" y1="1" x2="23" y2="23"/></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
}

//PASSWORD STRENGTH
document.getElementById('createPassword').addEventListener('input', function() {
  const val = this.value;
  const fill  = document.getElementById('strengthFill');
  const label = document.getElementById('strengthLabel');
  let score = 0;
  if (val.length >= 8) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^a-zA-Z0-9]/.test(val)) score++;
  const levels = [
    { pct:0,   color:'#dde0ee', text:'' },
    { pct:25,  color:'#e85555', text:'Weak' },
    { pct:50,  color:'#f5a623', text:'Fair' },
    { pct:75,  color:'#06d6a0', text:'Good' },
    { pct:100, color:'#04a87e', text:'Strong' },
  ];
  const lvl = levels[val.length === 0 ? 0 : score] || levels[0];
  fill.style.width  = lvl.pct + '%';
  fill.style.background = lvl.color;
  label.textContent = lvl.text;
  label.style.color = lvl.color;
});

//VALIDATION
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function showError(id, msg) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.style.opacity = '0';
  requestAnimationFrame(() => { el.style.transition = 'opacity 0.3s'; el.style.opacity = '1'; });
}

// LOGIN HANDLER
// Returning user → goes straight to their dashboard (brand or creator)
function handleLogin() {
  const email    = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  if (!email)              { showError('loginError', 'Please enter your email.'); return; }
  if (!isValidEmail(email)){ showError('loginError', 'Please enter a valid email address.'); return; }
  if (!password)           { showError('loginError', 'Please enter your password.'); return; }

  const btn     = document.querySelector('#panelLogin .submit-btn');
  const spinner = document.getElementById('loginSpinner');
  btn.classList.add('loading');
  spinner.style.display = 'block';

  setTimeout(() => {
    btn.classList.remove('loading');
    spinner.style.display = 'none';
    btn.classList.add('success');
    btn.querySelector('.submit-btn__text').textContent = '✓ Logging in...';

    // Brand → brand dashboard | Creator → creator dashboard
    setTimeout(() => {
      window.location.href = role === 'brand'
        ? '../brand-dashboard/brand.html'
        : '../creator-dashboard/creator.html';
    }, 800);
  }, 1400);
}

// CREATE ACCOUNT HANDLER
// New user → goes to profile setup (brand or creator form auto-selected)
function handleCreate() {
  const email    = document.getElementById('createEmail').value.trim();
  const password = document.getElementById('createPassword').value;
  if (!email)              { showError('createError', 'Please enter your email.'); return; }
  if (!isValidEmail(email)){ showError('createError', 'Please enter a valid email address.'); return; }
  if (!password)           { showError('createError', 'Please enter a password.'); return; }
  if (password.length < 6) { showError('createError', 'Password must be at least 6 characters.'); return; }

  const btn     = document.querySelector('#panelCreate .submit-btn');
  const spinner = document.getElementById('createSpinner');
  btn.classList.add('loading');
  spinner.style.display = 'block';

  setTimeout(() => {
    btn.classList.remove('loading');
    spinner.style.display = 'none';
    btn.classList.add('success');
    btn.querySelector('.submit-btn__text').textContent = '✓ Account Created!';
    sessionStorage.setItem('cb_email', email);

    // Always goes to profile setup — role is passed so correct form shows
    setTimeout(() => {
      window.location.href = `../profile-setup/profile.html?role=${role}`;
    }, 800);
  }, 1400);
}

//ENTER KEY SUPPORT
document.getElementById('loginEmail').addEventListener('keydown',    e => { if (e.key==='Enter') document.getElementById('loginPassword').focus(); });
document.getElementById('loginPassword').addEventListener('keydown', e => { if (e.key==='Enter') handleLogin(); });
document.getElementById('createEmail').addEventListener('keydown',   e => { if (e.key==='Enter') document.getElementById('createPassword').focus(); });
document.getElementById('createPassword').addEventListener('keydown',e => { if (e.key==='Enter') handleCreate(); });