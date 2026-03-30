// THEME
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  document.getElementById("themeIcon").textContent = isDark ? "🌙" : "☀️";
  localStorage.setItem("cb_creator_theme", isDark ? "light" : "dark");
}
const savedTheme = localStorage.getItem("cb_creator_theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
document.getElementById("themeIcon").textContent =
  savedTheme === "dark" ? "☀️" : "🌙";

//USER NAME from session
const profile = JSON.parse(sessionStorage.getItem("cb_profile") || "{}");
const userName = profile.name || "Sarah";
document.getElementById("userName").textContent = userName;
document.getElementById("welcomeName").textContent = userName.split(" ")[0];

//SCROLL REVEAL
const revealObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        revealObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

//STAT COUNTERS
const counterObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        animateNum(e.target);
        counterObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.5 },
);
document
  .querySelectorAll("[data-target]")
  .forEach((el) => counterObs.observe(el));
function animateNum(el) {
  const target = parseInt(el.dataset.target);
  const dur = 1400;
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target);
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target.toLocaleString();
  };
  requestAnimationFrame(tick);
}

//ANIMATE PROGRESS BARS
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelectorAll("[data-width]").forEach((el) => {
      el.style.width = el.dataset.width;
    });
  }, 400);
});

//NOTIFICATIONS 
let notifications = [
  {
    msg: "<strong>TechFlow</strong> sent you a collaboration request",
    time: "2 hours ago",
    dot: "yellow",
  },
  {
    msg: "<strong>$1,200</strong> payment received from EcoStyle",
    time: "Yesterday",
    dot: "green",
  },
];
function toggleNotifications() {
  document.getElementById("messagesPanel").classList.add("hidden");
  document.getElementById("notifPanel").classList.toggle("hidden");
}
function clearNotifications() {
  notifications = [];
  document.getElementById("notifList").innerHTML =
    '<div style="padding:20px;text-align:center;color:var(--muted);font-size:0.85rem;">No notifications</div>';
  document.getElementById("notifBadge").style.display = "none";
}
function addNotification(msg, type = "yellow") {
  notifications.unshift({ msg, time: "Just now", dot: type });
  renderNotifications();
  const badge = document.getElementById("notifBadge");
  badge.style.display = "flex";
  badge.textContent = notifications.length;
}
function renderNotifications() {
  document.getElementById("notifList").innerHTML = notifications
    .map(
      (n) => `
    <div class="notif-item">
      <div class="notif-dot notif-dot--${n.dot}"></div>
      <div><div class="notif-text">${n.msg}</div><div class="notif-time">${n.time}</div></div>
    </div>`,
    )
    .join("");
}

//MESSAGES
function openMessages() {
  document.getElementById("notifPanel").classList.add("hidden");
  document.getElementById("messagesPanel").classList.toggle("hidden");
}

// Close panels when clicking outside
document.addEventListener("click", (e) => {
  const notifPanel = document.getElementById("notifPanel");
  const msgPanel = document.getElementById("messagesPanel");
  if (
    !notifPanel.contains(e.target) &&
    !document.getElementById("notifBtn").contains(e.target)
  )
    notifPanel.classList.add("hidden");
  if (!msgPanel.contains(e.target) && e.target.title !== "Messages")
    msgPanel.classList.add("hidden");
});

//REQUEST DATA 
const requests = [
  {
    id: 0,
    title: "Spring Product Launch Campaign",
    brand: "TechFlow",
    logo: "VW",
    logoClass: "brand-logo--blue",
    budget: "$2,500",
    due: "Mar 15, 2026",
    desc: "Looking for creators to promote our new smart home device lineup targeting tech enthusiasts. We need 4 Instagram posts, 2 Reels, and 1 YouTube integration.",
    deliverables: [
      "4 Instagram Posts",
      "2 Instagram Reels",
      "1 YouTube Integration",
      "Story mentions",
    ],
    timeline: "4 weeks",
    status: "pending",
  },
  {
    id: 1,
    title: "Fitness App Awareness",
    brand: "GrowthLabs",
    logo: "FA",
    logoClass: "brand-logo--teal",
    budget: "$1,800",
    due: "Mar 20, 2026",
    desc: "Seeking fitness creators for authentic app reviews and workout content featuring our platform. Target audience: fitness enthusiasts aged 18–35.",
    deliverables: ["3 TikTok Videos", "2 Instagram Posts", "App review video"],
    timeline: "2 weeks",
    status: "pending",
  },
  {
    id: 2,
    title: "Sustainable Fashion Showcase",
    brand: "EcoStyle",
    logo: "SF",
    logoClass: "brand-logo--orange",
    budget: "$3,200",
    due: "Mar 25, 2026",
    desc: "Partner with us to showcase our eco-friendly clothing line to conscious consumers. Full creative freedom on styling and presentation.",
    deliverables: ["5 Instagram Posts", "3 Stories", "1 YouTube Lookbook"],
    timeline: "3 weeks",
    status: "accepted",
  },
];

//HANDLE ACCEPT / DECLINE
function handleRequest(id, action) {
  const req = requests[id];
  const item = document.getElementById(`req-${id}`);

  if (action === "accept") {
    req.status = "accepted";
    item.classList.add("request-item--accepted");
    item.querySelector(".status-badge").textContent = "Accepted";
    item.querySelector(".status-badge").className =
      "status-badge status-badge--accepted";
    item.querySelector(".request-actions").innerHTML =
      `<button class="btn-details-sm" onclick="openRequestDetail(${id})">View Details →</button>`;
    addNotification(
      `You <strong>accepted</strong> the collaboration with ${req.brand} 🎉`,
      "green",
    );
    showToast(`✓ Accepted! ${req.brand} will be notified.`);
  } else {
    req.status = "declined";
    item.style.opacity = "0.5";
    item.style.pointerEvents = "none";
    item.querySelector(".status-badge").textContent = "Declined";
    item.querySelector(".status-badge").className =
      "status-badge status-badge--declined";
    item.querySelector(".request-actions").innerHTML = "";
    addNotification(
      `You <strong>declined</strong> the request from ${req.brand}`,
      "yellow",
    );
    showToast(`✕ Declined request from ${req.brand}.`);
  }

  // Update pending count
  const pending = requests.filter((r) => r.status === "pending").length;
  document.getElementById("requestCount").textContent = `${pending} pending`;
  document.getElementById("welcomeSub").innerHTML =
    `You have <strong>${pending} new collaboration request${pending !== 1 ? "s" : ""}</strong>`;
}

//REQUEST DETAIL MODAL
function openRequestDetail(id) {
  const r = requests[id];
  document.getElementById("requestDetailContent").innerHTML = `
    <div class="modal-header">
      <div class="modal-brand-row">
        <div class="modal-logo ${r.logoClass}">${r.logo}</div>
        <div><div class="modal-title">${r.title}</div><div class="modal-subtitle">${r.brand}</div></div>
        <span class="status-badge status-badge--${r.status}" style="margin-left:auto">${r.status.charAt(0).toUpperCase() + r.status.slice(1)}</span>
      </div>
    </div>
    <div class="modal-section"><h4>Campaign Brief</h4><p>${r.desc}</p></div>
    <div class="modal-section"><h4>Deliverables</h4>
      <div class="modal-pills">${r.deliverables.map((d) => `<span class="modal-pill">${d}</span>`).join("")}</div>
    </div>
    <div class="modal-section"><h4>Details</h4>
      <div class="modal-pills">
        <span class="modal-pill modal-pill--green">💰 ${r.budget}</span>
        <span class="modal-pill modal-pill--yellow">📅 ${r.timeline}</span>
        <span class="modal-pill">🕐 Due: ${r.due}</span>
      </div>
    </div>
    ${
      r.status === "pending"
        ? `
    <div class="modal-actions">
      <button class="modal-btn-primary" onclick="handleRequest(${r.id},'accept');document.getElementById('requestDetailModal').classList.add('hidden')">✓ Accept</button>
      <button class="modal-btn-secondary" onclick="handleRequest(${r.id},'decline');document.getElementById('requestDetailModal').classList.add('hidden')">✕ Decline</button>
    </div>`
        : `<div class="modal-actions"><button class="modal-btn-outline" onclick="document.getElementById('requestDetailModal').classList.add('hidden')">Close</button></div>`
    }
  `;
  document.getElementById("requestDetailModal").classList.remove("hidden");
}

//COLLAB DETAIL MODAL
const collabs = [
  {
    name: "Sustainable Fashion Showcase",
    brand: "EcoStyle",
    progress: 65,
    budget: "$3,200",
    paid: "$1,200",
    remaining: "$2,000",
    startDate: "Mar 1, 2026",
    endDate: "Mar 25, 2026",
    deliverables: [
      "✓ 5 Instagram Posts — Done",
      "✓ 3 Stories — Done",
      "○ 1 YouTube Lookbook — In Progress",
    ],
    milestones: [
      { label: "Contract Signed", done: true },
      { label: "Milestone 1 — $1,200", done: true },
      { label: "Content Submission", done: false },
      { label: "Final Payment — $2,000", done: false },
    ],
  },
  {
    name: "Winter Wellness Series",
    brand: "HealthHub",
    progress: 30,
    budget: "$2,800",
    paid: "$0",
    remaining: "$2,800",
    startDate: "Mar 5, 2026",
    endDate: "Apr 5, 2026",
    deliverables: [
      "✓ 2 Instagram Posts — Done",
      "○ 4 TikTok Videos — In Progress",
      "○ 1 Blog Post — Pending",
    ],
    milestones: [
      { label: "Contract Signed", done: true },
      { label: "Milestone 1 — $1,400", done: false },
      { label: "Content Review", done: false },
      { label: "Final Payment — $1,400", done: false },
    ],
  },
];
function openCollabDetail(id) {
  const c = collabs[id];
  document.getElementById("collabDetailContent").innerHTML = `
    <div class="modal-header">
      <div class="modal-title">${c.name}</div>
      <div class="modal-subtitle">${c.brand} · Active Collaboration</div>
    </div>
    <div class="modal-section">
      <h4>Progress</h4>
      <div style="display:flex;justify-content:space-between;font-size:0.82rem;color:var(--muted);margin-bottom:8px"><span>Overall completion</span><span style="color:var(--accent);font-weight:700">${c.progress}%</span></div>
      <div class="progress-track" style="margin-bottom:16px"><div class="progress-fill" style="width:${c.progress}%"></div></div>
    </div>
    <div class="modal-section"><h4>Deliverables</h4>
      <div style="display:flex;flex-direction:column;gap:8px">${c.deliverables.map((d) => `<div style="font-size:0.85rem;color:var(--muted-2);padding:8px 12px;background:var(--bg-card-2);border-radius:8px">${d}</div>`).join("")}</div>
    </div>
    <div class="modal-section"><h4>Payment Breakdown</h4>
      <div class="modal-pills">
        <span class="modal-pill modal-pill--yellow">Total: ${c.budget}</span>
        <span class="modal-pill modal-pill--green">Paid: ${c.paid}</span>
        <span class="modal-pill">Remaining: ${c.remaining}</span>
      </div>
    </div>
    <div class="modal-section"><h4>Milestones</h4>
      <div class="timeline">${c.milestones
        .map(
          (m, i) => `
        <div class="timeline-item">
          <div class="timeline-dot ${m.done ? "timeline-dot--done" : i === c.milestones.findIndex((x) => !x.done) ? "timeline-dot--active" : "timeline-dot--pending"}"></div>
          <div class="timeline-text"><strong>${m.label}</strong>${m.done ? " — Completed" : i === c.milestones.findIndex((x) => !x.done) ? " — In Progress" : " — Upcoming"}</div>
        </div>`,
        )
        .join("")}
      </div>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;font-size:0.8rem;color:var(--muted);margin-bottom:18px">
      <span>📅 Start: ${c.startDate}</span><span>·</span><span>🏁 End: ${c.endDate}</span>
    </div>
    <div class="modal-actions"><button class="modal-btn-outline" onclick="document.getElementById('collabDetailModal').classList.add('hidden')">Close</button></div>
  `;
  document.getElementById("collabDetailModal").classList.remove("hidden");
}

//EARNINGS REPORT MODAL
function openEarningsReport() {
  document.getElementById("earningsContent").innerHTML = `
    <div class="modal-header">
      <div class="modal-title">Full Earnings Report</div>
      <div class="modal-subtitle">All time · Updated today</div>
    </div>
    <div class="report-grid">
      <div class="report-stat"><div class="report-stat-val">$12.4K</div><div class="report-stat-label">Total Earned</div></div>
      <div class="report-stat"><div class="report-stat-val">$4,850</div><div class="report-stat-label">This Month</div></div>
      <div class="report-stat"><div class="report-stat-val">12</div><div class="report-stat-label">Campaigns</div></div>
      <div class="report-stat"><div class="report-stat-val">$1,033</div><div class="report-stat-label">Avg. Per Deal</div></div>
      <div class="report-stat"><div class="report-stat-val">$3,200</div><div class="report-stat-label">Highest Deal</div></div>
      <div class="report-stat"><div class="report-stat-val">+24%</div><div class="report-stat-label">Month Growth</div></div>
    </div>
    <div class="modal-section"><h4>Transaction History</h4>
      <table class="report-table">
        <thead><tr><th>Campaign</th><th>Brand</th><th>Amount</th><th>Status</th><th>Date</th></tr></thead>
        <tbody>
          <tr><td>Fashion Showcase</td><td>EcoStyle</td><td class="green">$1,200</td><td class="green">Paid</td><td>Mar 10</td></tr>
          <tr><td>Spring Launch</td><td>TechFlow</td><td class="yellow">$2,500</td><td class="yellow">Pending</td><td>Mar 15</td></tr>
          <tr><td>Wellness Series</td><td>HealthHub</td><td class="yellow">$2,800</td><td class="yellow">Pending</td><td>Apr 5</td></tr>
          <tr><td>Beauty Campaign</td><td>GlowCo</td><td class="green">$1,500</td><td class="green">Paid</td><td>Feb 28</td></tr>
          <tr><td>Tech Review</td><td>GadgetHub</td><td class="green">$900</td><td class="green">Paid</td><td>Feb 15</td></tr>
          <tr><td>Food Partnership</td><td>TasteLab</td><td class="green">$1,200</td><td class="green">Paid</td><td>Jan 30</td></tr>
          <tr><td>Travel Promo</td><td>WanderCo</td><td class="green">$2,100</td><td class="green">Paid</td><td>Jan 15</td></tr>
        </tbody>
      </table>
    </div>
    <div class="modal-actions"><button class="modal-btn-outline" onclick="document.getElementById('earningsModal').classList.add('hidden')">Close</button></div>
  `;
  document.getElementById("earningsModal").classList.remove("hidden");
}

//PITCH TO BRAND MODAL
function openPitchModal(brandName) {
  document.getElementById("pitchContent").innerHTML = `
    <div class="modal-header">
      <div class="modal-title">Pitch to ${brandName}</div>
      <div class="modal-subtitle">Send a collaboration proposal directly</div>
    </div>
    <div class="pitch-form">
      <div class="pitch-field"><label class="pitch-label">Your Name / Handle</label><input class="pitch-input" id="pitchName" placeholder="e.g. Sarah Mitchell @sarahm" value="${userName}"/></div>
      <div class="pitch-field"><label class="pitch-label">Campaign Idea</label><input class="pitch-input" id="pitchIdea" placeholder="e.g. Summer fitness series with your products"/></div>
      <div class="pitch-field"><label class="pitch-label">Your Rate</label>
        <select class="pitch-input" id="pitchRate">
          <option value="" disabled selected>Select your rate</option>
          <option>Under $500</option><option>$500 – $1,000</option><option>$1,000 – $3,000</option><option>$3,000 – $5,000</option><option>$5,000+</option>
        </select>
      </div>
      <div class="pitch-field"><label class="pitch-label">Your Message</label><textarea class="pitch-input pitch-textarea" id="pitchMsg" placeholder="Tell ${brandName} why you'd be a great fit, your audience details, and what you can deliver..."></textarea></div>
      <div class="pitch-error" id="pitchError"></div>
      <div class="modal-actions">
        <button class="modal-btn-secondary" onclick="document.getElementById('pitchModal').classList.add('hidden')">Cancel</button>
        <button class="modal-btn-primary" onclick="submitPitch('${brandName}')">Send Pitch 🚀</button>
      </div>
    </div>
  `;
  document.getElementById("pitchModal").classList.remove("hidden");
}

function submitPitch(brandName) {
  const name = document.getElementById("pitchName").value.trim();
  const idea = document.getElementById("pitchIdea").value.trim();
  const rate = document.getElementById("pitchRate").value;
  const msg = document.getElementById("pitchMsg").value.trim();
  const errEl = document.getElementById("pitchError");
  if (!idea) {
    errEl.textContent = "Please enter your campaign idea.";
    return;
  }
  if (!rate) {
    errEl.textContent = "Please select your rate.";
    return;
  }
  if (!msg) {
    errEl.textContent = "Please write your message.";
    return;
  }
  errEl.textContent = "";

  const btn = document.querySelector("#pitchContent .modal-btn-primary");
  btn.textContent = "Sending...";
  btn.style.opacity = "0.7";
  btn.disabled = true;

  setTimeout(() => {
    document.getElementById("pitchModal").classList.add("hidden");
    addNotification(
      `Your pitch to <strong>${brandName}</strong> was sent! 🚀`,
      "green",
    );
    showToast(`🚀 Pitch sent to ${brandName}!`);
  }, 1200);
}

//FIND BRANDS MODAL
const allBrands = [
  {
    initials: "NK",
    name: "Nike",
    niche: "Sports & Fitness",
    budget: "$5K–$20K",
    gradient: "linear-gradient(135deg,#000,#333)",
  },
  {
    initials: "SM",
    name: "Samsung",
    niche: "Technology",
    budget: "$10K–$50K",
    gradient: "linear-gradient(135deg,#1428a0,#4cc9f0)",
  },
  {
    initials: "ZR",
    name: "Zara",
    niche: "Fashion",
    budget: "$3K–$15K",
    gradient: "linear-gradient(135deg,#222,#555)",
  },
  {
    initials: "NE",
    name: "Nespresso",
    niche: "Food & Beverage",
    budget: "$2K–$8K",
    gradient: "linear-gradient(135deg,#8B0000,#c62828)",
  },
  {
    initials: "LU",
    name: "Lululemon",
    niche: "Fitness & Wellness",
    budget: "$5K–$25K",
    gradient: "linear-gradient(135deg,#4a148c,#7b1fa2)",
  },
  {
    initials: "AP",
    name: "Apple",
    niche: "Technology",
    budget: "$20K+",
    gradient: "linear-gradient(135deg,#555,#999)",
  },
  {
    initials: "HM",
    name: "H&M",
    niche: "Fashion",
    budget: "$2K–$10K",
    gradient: "linear-gradient(135deg,#c62828,#e53935)",
  },
  {
    initials: "SP",
    name: "Spotify",
    niche: "Music & Entertainment",
    budget: "$5K–$30K",
    gradient: "linear-gradient(135deg,#1DB954,#158a3e)",
  },
];
function openFindBrands() {
  renderFindBrands(allBrands);
  document.getElementById("findBrandsModal").classList.remove("hidden");
}
function renderFindBrands(brands) {
  document.getElementById("findBrandsContent").innerHTML = `
    <div class="modal-header"><div class="modal-title">Browse Brands</div><div class="modal-subtitle">Find your perfect brand partnership</div></div>
    <div class="brands-search">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input type="text" placeholder="Search brands..." oninput="searchBrands(this.value)"/>
    </div>
    <div class="brands-grid" id="brandsGrid">
      ${brands
        .map(
          (b) => `
      <div class="brand-card">
        <div class="brand-card__top">
          <div class="brand-card-logo" style="background:${b.gradient}">${b.initials}</div>
          <div><div class="brand-card-name">${b.name}</div><div class="brand-card-niche">${b.niche}</div></div>
        </div>
        <div class="brand-card-budget">💰 ${b.budget}</div>
        <button class="brand-card-pitch-btn" onclick="document.getElementById('findBrandsModal').classList.add('hidden');openPitchModal('${b.name}')">Send Pitch →</button>
      </div>`,
        )
        .join("")}
    </div>
  `;
}
function searchBrands(q) {
  const filtered = allBrands.filter(
    (b) =>
      b.name.toLowerCase().includes(q.toLowerCase()) ||
      b.niche.toLowerCase().includes(q.toLowerCase()),
  );
  document.getElementById("brandsGrid").innerHTML = filtered
    .map(
      (b) => `
    <div class="brand-card">
      <div class="brand-card__top">
        <div class="brand-card-logo" style="background:${b.gradient}">${b.initials}</div>
        <div><div class="brand-card-name">${b.name}</div><div class="brand-card-niche">${b.niche}</div></div>
      </div>
      <div class="brand-card-budget">💰 ${b.budget}</div>
      <button class="brand-card-pitch-btn" onclick="document.getElementById('findBrandsModal').classList.add('hidden');openPitchModal('${b.name}')">Send Pitch →</button>
    </div>`,
    )
    .join("");
}

//CLOSE MODAL ON BACKGROUND
function closeMod(id, e) {
  if (e.target === document.getElementById(id))
    document.getElementById(id).classList.add("hidden");
}

//TOAST
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.classList.remove("hidden");
  document.getElementById("toastMsg").textContent = msg;
  setTimeout(() => toast.classList.add("show"), 50);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.classList.add("hidden"), 300);
  }, 3000);
}

//KEYBOARD ESC 
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    [
      "requestDetailModal",
      "collabDetailModal",
      "earningsModal",
      "pitchModal",
      "findBrandsModal",
    ].forEach((id) => {
      document.getElementById(id).classList.add("hidden");
    });
  }
});
