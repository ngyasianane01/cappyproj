// Check if coming in with a pre-selected role (from landing page)
const urlParams = new URLSearchParams(window.location.search);
const preRole = urlParams.get('role');
if (preRole) {
  // Short delay then go straight to login
  setTimeout(() => selectRole(preRole), 200);
}

function selectRole(role) {
  // Visual feedback — highlight selected button
  const btnBrand   = document.getElementById('btnBrand');
  const btnCreator = document.getElementById('btnCreator');
  btnBrand.classList.remove('selected');
  btnCreator.classList.remove('selected');

  if (role === 'brand') btnBrand.classList.add('selected');
  else btnCreator.classList.add('selected');

  // Create transition overlay
  const overlay = document.createElement('div');
  overlay.className = 'page-transition';
  document.body.appendChild(overlay);

  // Trigger fade out, then navigate
  requestAnimationFrame(() => {
    overlay.classList.add('active');
    setTimeout(() => {
      window.location.href = `../login-page/login.html?role=${role}`;
    }, 380);
  });
}