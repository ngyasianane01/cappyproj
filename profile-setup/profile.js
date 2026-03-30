

//READ ROLE FROM URL
const urlParams = new URLSearchParams(window.location.search);
let currentRole = urlParams.get('role') || sessionStorage.getItem('cb_role') || 'creator';

//INIT ON LOAD
window.addEventListener('DOMContentLoaded', () => {
  applyRole(currentRole);
});

//APPLY ROLE (shows correct card + highlights tab)
function applyRole(role) {
  currentRole = role;

  const creatorCard = document.getElementById('creatorCard');
  const brandCard   = document.getElementById('brandCard');
  const rtabCreator = document.getElementById('rtabCreator');
  const rtabBrand   = document.getElementById('rtabBrand');

  if (role === 'brand') {
    // Show brand, hide creator
    brandCard.classList.remove('hidden');
    creatorCard.classList.add('hidden');
    rtabBrand.classList.add('rtab--active');
    rtabCreator.classList.remove('rtab--active');
  } else {
    // Show creator, hide brand
    creatorCard.classList.remove('hidden');
    brandCard.classList.add('hidden');
    rtabCreator.classList.add('rtab--active');
    rtabBrand.classList.remove('rtab--active');
  }
}

//TAB CLICK (manual switch)
function switchRole(role) {
  // Animate card out then in
  const activeCard = role === 'brand'
    ? document.getElementById('brandCard')
    : document.getElementById('creatorCard');

  applyRole(role);

  // Fade-in animation on the newly shown card
  activeCard.style.opacity = '0';
  activeCard.style.transform = 'translateY(16px)';
  requestAnimationFrame(() => {
    activeCard.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    activeCard.style.opacity = '1';
    activeCard.style.transform = 'translateY(0)';
  });
}

//IMAGE PREVIEW
function previewImage(inputId, previewId) {
  const input   = document.getElementById(inputId);
  const preview = document.getElementById(previewId);
  const file    = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    preview.innerHTML = `<img src="${e.target.result}" alt="Preview" style="width:100%;height:100%;object-fit:cover;border-radius:8px;"/>`;
  };
  reader.readAsDataURL(file);
}

//VALIDATION
function showError(id, msg) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.style.opacity = '0';
  requestAnimationFrame(() => {
    el.style.transition = 'opacity 0.3s';
    el.style.opacity = '1';
  });
  setTimeout(() => { el.textContent = ''; }, 4000);
}

//SAVE HANDLER
function handleSave(role) {
  if (role === 'creator') {
    const name = document.getElementById('creatorName').value.trim();
    const niche = document.getElementById('creatorNiche').value.trim();

    if (!name) {
      showError('creatorError', 'Please enter your full name.');
      document.getElementById('creatorName').focus();
      return;
    }
    if (!niche) {
      showError('creatorError', 'Please enter your niche.');
      document.getElementById('creatorNiche').focus();
      return;
    }

    // Save to sessionStorage
    sessionStorage.setItem('cb_profile', JSON.stringify({
      role: 'creator',
      name,
      niche,
      platform: document.getElementById('creatorPlatform').value,
      followers: document.getElementById('creatorFollowers').value,
      bio: document.getElementById('creatorBio').value,
      portfolio: document.getElementById('creatorPortfolio').value,
      socials: document.getElementById('creatorSocials').value,
    }));

    animateSave(document.querySelector('#creatorCard .submit-btn'), '../creator-dashboard/creator.html');

  } else {
    const name = document.getElementById('brandName').value.trim();
    const industry = document.getElementById('brandIndustry').value;

    if (!name) {
      showError('brandError', 'Please enter your company name.');
      document.getElementById('brandName').focus();
      return;
    }
    if (!industry) {
      showError('brandError', 'Please select your industry.');
      return;
    }

    // Save to sessionStorage
    sessionStorage.setItem('cb_profile', JSON.stringify({
      role: 'brand',
      name,
      industry,
      website: document.getElementById('brandWebsite').value,
      budget: document.getElementById('brandBudget').value,
      description: document.getElementById('brandDesc').value,
    }));

    animateSave(document.querySelector('#brandCard .submit-btn'), '../brand-dashboard/brand.html');
  }
}

// ANIMATE SAVE → NAVIGATE
function animateSave(btn, destination) {
  btn.classList.add('loading');
  btn.querySelector('.submit-btn__spinner').style.display = 'block';

  setTimeout(() => {
    btn.classList.remove('loading');
    btn.classList.add('success');
    btn.querySelector('.submit-btn__text').textContent = '✓ Profile Saved!';
    btn.querySelector('.submit-btn__spinner').style.display = 'none';

    setTimeout(() => {
      window.location.href = destination;
    }, 900);
  }, 1400);
}

//DRAG & DROP on upload areas
['creatorUploadArea', 'brandUploadArea'].forEach(areaId => {
  const area = document.getElementById(areaId);
  if (!area) return;

  area.addEventListener('dragover', (e) => {
    e.preventDefault();
    area.style.borderColor = '#3d4eaa';
    area.style.background  = '#eceef8';
  });
  area.addEventListener('dragleave', () => {
    area.style.borderColor = '';
    area.style.background  = '';
  });
  area.addEventListener('drop', (e) => {
    e.preventDefault();
    area.style.borderColor = '';
    area.style.background  = '';
    const file = e.dataTransfer.files[0];
    if (!file || !file.type.startsWith('image/')) return;

    const isCreator = areaId === 'creatorUploadArea';
    const previewId = isCreator ? 'creatorPreview' : 'brandPreview';
    const preview   = document.getElementById(previewId);

    const reader = new FileReader();
    reader.onload = (ev) => {
      preview.innerHTML = `<img src="${ev.target.result}" alt="Preview" style="width:100%;height:100%;object-fit:cover;border-radius:8px;"/>`;
    };
    reader.readAsDataURL(file);
  });
});