
const ALL_CREATORS = [
  // PAGE 1
  {
    id: 0,
    name: "Sarah Mitchell",
    niche: "Fashion & Beauty",
    nicheKey: "fashion",
    platform: "Instagram",
    platformKey: "ig",
    initials: "SM",
    gradient: "linear-gradient(135deg,#f4a261,#e76f51)",
    followers: "850K",
    followersRaw: 850000,
    engagement: "4.8%",
    engRaw: 4.8,
    avgViews: "120K",
    tags: ["Luxury", "Skincare", "OOTD"],
    bio: "Fashion and beauty creator with 5+ years of content creation. I specialise in luxury fashion hauls, skincare routines, and outfit inspiration.",
    collabs: ["Zara", "L'Oréal Paris", "H&M", "NARS"],
    demo: [
      { l: "18–24", p: 42 },
      { l: "25–34", p: 35 },
      { l: "Female", p: 78 },
      { l: "US/UK", p: 61 },
    ],
  },
  {
    id: 1,
    name: "Alex Chen",
    niche: "Tech & Gaming",
    nicheKey: "tech",
    platform: "YouTube",
    platformKey: "yt",
    initials: "AC",
    gradient: "linear-gradient(135deg,#4cc9f0,#4361ee)",
    followers: "1.2M",
    followersRaw: 1200000,
    engagement: "5.2%",
    engRaw: 5.2,
    avgViews: "280K",
    tags: ["Reviews", "Gaming", "Gadgets"],
    bio: "Tech reviewer and gaming enthusiast with an audience that trusts honest product reviews. Deep-dive content that drives purchase decisions.",
    collabs: ["Razer", "Samsung", "ASUS ROG", "Corsair"],
    demo: [
      { l: "18–24", p: 38 },
      { l: "25–34", p: 40 },
      { l: "Male", p: 82 },
      { l: "US/CA", p: 55 },
    ],
  },
  {
    id: 2,
    name: "Maya Rodriguez",
    niche: "Lifestyle",
    nicheKey: "lifestyle",
    platform: "Instagram",
    platformKey: "ig",
    initials: "MR",
    gradient: "linear-gradient(135deg,#a8edea,#096dd9)",
    followers: "620K",
    followersRaw: 620000,
    engagement: "6.1%",
    engRaw: 6.1,
    avgViews: "95K",
    tags: ["Vlogs", "Wellness", "Home"],
    bio: "Lifestyle creator focused on intentional living, home décor, and wellness routines. My audience actively seeks product recommendations.",
    collabs: ["IKEA", "Lululemon", "Calm App", "Anthropologie"],
    demo: [
      { l: "25–34", p: 48 },
      { l: "35–44", p: 28 },
      { l: "Female", p: 85 },
      { l: "US", p: 70 },
    ],
  },
  {
    id: 3,
    name: "Jordan Taylor",
    niche: "Fitness & Health",
    nicheKey: "fitness",
    platform: "Instagram",
    platformKey: "ig",
    initials: "JT",
    gradient: "linear-gradient(135deg,#06d6a0,#1b9aaa)",
    followers: "950K",
    followersRaw: 950000,
    engagement: "5.5%",
    engRaw: 5.5,
    avgViews: "180K",
    tags: ["Workout", "Nutrition", "Mindset"],
    bio: "Certified personal trainer and nutrition coach creating evidence-based fitness content. I partner with brands that genuinely align with an active lifestyle.",
    collabs: ["Nike", "Optimum Nutrition", "Peloton", "MyFitnessPal"],
    demo: [
      { l: "18–24", p: 35 },
      { l: "25–34", p: 45 },
      { l: "Mixed", p: 52 },
      { l: "US/AU", p: 63 },
    ],
  },
  {
    id: 4,
    name: "Emma Watson",
    niche: "Food & Cooking",
    nicheKey: "food",
    platform: "YouTube",
    platformKey: "yt",
    initials: "EW",
    gradient: "linear-gradient(135deg,#f9c74f,#f3722c)",
    followers: "780K",
    followersRaw: 780000,
    engagement: "4.3%",
    engRaw: 4.3,
    avgViews: "110K",
    tags: ["Recipes", "Baking", "Vegan"],
    bio: "Food creator specialising in plant-based recipes and approachable baking tutorials. My audience are passionate home cooks who seek quality ingredients.",
    collabs: ["KitchenAid", "Whole Foods", "HelloFresh", "Le Creuset"],
    demo: [
      { l: "25–44", p: 60 },
      { l: "18–24", p: 25 },
      { l: "Female", p: 72 },
      { l: "US/UK", p: 68 },
    ],
  },
  {
    id: 5,
    name: "Marcus Johnson",
    niche: "Travel",
    nicheKey: "travel",
    platform: "Instagram",
    platformKey: "ig",
    initials: "MJ",
    gradient: "linear-gradient(135deg,#7b2d8b,#c77dff)",
    followers: "1.5M",
    followersRaw: 1500000,
    engagement: "5.9%",
    engRaw: 5.9,
    avgViews: "320K",
    tags: ["Adventure", "Hotels", "Culture"],
    bio: "World traveler documenting authentic experiences across 60+ countries. I work with hotels, airlines, and travel gear brands.",
    collabs: ["Marriott", "Emirates", "Peak Design", "Booking.com"],
    demo: [
      { l: "25–34", p: 44 },
      { l: "35–44", p: 32 },
      { l: "Mixed", p: 55 },
      { l: "Global", p: 80 },
    ],
  },
  // PAGE 2
  {
    id: 6,
    name: "Priya Sharma",
    niche: "Fashion & Beauty",
    nicheKey: "fashion",
    platform: "Instagram",
    platformKey: "ig",
    initials: "PS",
    gradient: "linear-gradient(135deg,#f72585,#b5179e)",
    followers: "430K",
    followersRaw: 430000,
    engagement: "7.2%",
    engRaw: 7.2,
    avgViews: "65K",
    tags: ["Ethnic", "Fusion", "Makeup"],
    bio: "South Asian fashion and beauty creator bridging traditional and modern aesthetics. Highly engaged niche audience with strong purchasing power.",
    collabs: ["Fabindia", "Nykaa", "Sabyasachi", "MAC"],
    demo: [
      { l: "18–24", p: 50 },
      { l: "25–34", p: 35 },
      { l: "Female", p: 91 },
      { l: "IN/UK", p: 72 },
    ],
  },
  {
    id: 7,
    name: "Tom Hargreaves",
    niche: "Tech & Gaming",
    nicheKey: "tech",
    platform: "YouTube",
    platformKey: "yt",
    initials: "TH",
    gradient: "linear-gradient(135deg,#3a0ca3,#7209b7)",
    followers: "2.1M",
    followersRaw: 2100000,
    engagement: "4.6%",
    engRaw: 4.6,
    avgViews: "450K",
    tags: ["Unboxing", "Smartphones", "Coding"],
    bio: "One of YouTube's top tech unboxers. Smartphone reviews drive massive affiliate conversions and brand awareness for consumer electronics launches.",
    collabs: ["Apple", "OnePlus", "dbrand", "Anker"],
    demo: [
      { l: "18–24", p: 45 },
      { l: "25–34", p: 38 },
      { l: "Male", p: 88 },
      { l: "Global", p: 75 },
    ],
  },
  {
    id: 8,
    name: "Chloe Bennett",
    niche: "Lifestyle",
    nicheKey: "lifestyle",
    platform: "Instagram",
    platformKey: "ig",
    initials: "CB",
    gradient: "linear-gradient(135deg,#ffd6a5,#ffb347)",
    followers: "310K",
    followersRaw: 310000,
    engagement: "8.4%",
    engRaw: 8.4,
    avgViews: "48K",
    tags: ["Minimalism", "Journaling", "Self-care"],
    bio: "Micro-influencer with one of the highest engagement rates in lifestyle. My audience is deeply connected and trusts every recommendation I make.",
    collabs: ["Moleskine", "Rituals", "Muji", "Headspace"],
    demo: [
      { l: "25–34", p: 55 },
      { l: "18–24", p: 30 },
      { l: "Female", p: 88 },
      { l: "US/EU", p: 66 },
    ],
  },
  {
    id: 9,
    name: "Kwame Asante",
    niche: "Fitness",
    nicheKey: "fitness",
    platform: "TikTok",
    platformKey: "tk",
    initials: "KA",
    gradient: "linear-gradient(135deg,#2dc653,#007f5f)",
    followers: "3.4M",
    followersRaw: 3400000,
    engagement: "9.1%",
    engRaw: 9.1,
    avgViews: "1.2M",
    tags: ["Calisthenics", "HIIT", "Streetwear"],
    bio: "TikTok's most-followed fitness creator in the calisthenics space. Viral content consistently drives sell-outs for partner brands within 48 hours.",
    collabs: ["Gymshark", "Huel", "Adidas", "GoPro"],
    demo: [
      { l: "18–24", p: 58 },
      { l: "25–34", p: 30 },
      { l: "Male", p: 64 },
      { l: "Global", p: 82 },
    ],
  },
  {
    id: 10,
    name: "Yuki Tanaka",
    niche: "Food & Cooking",
    nicheKey: "food",
    platform: "YouTube",
    platformKey: "yt",
    initials: "YT",
    gradient: "linear-gradient(135deg,#f4d03f,#e74c3c)",
    followers: "890K",
    followersRaw: 890000,
    engagement: "5.7%",
    engRaw: 5.7,
    avgViews: "160K",
    tags: ["Japanese", "Ramen", "Street Food"],
    bio: "Japanese cuisine expert bringing authentic recipes to a global audience. My subscribers are serious home cooks who invest in quality kitchen equipment.",
    collabs: ["Zwilling", "Kikkoman", "Japan Centre", "Instant Pot"],
    demo: [
      { l: "25–34", p: 42 },
      { l: "35–44", p: 35 },
      { l: "Mixed", p: 58 },
      { l: "US/JP", p: 62 },
    ],
  },
  {
    id: 11,
    name: "Lena Vogel",
    niche: "Travel",
    nicheKey: "travel",
    platform: "Instagram",
    platformKey: "ig",
    initials: "LV",
    gradient: "linear-gradient(135deg,#56cfe1,#4ea8de)",
    followers: "720K",
    followersRaw: 720000,
    engagement: "6.8%",
    engRaw: 6.8,
    avgViews: "95K",
    tags: ["Europe", "Solo Travel", "Budget"],
    bio: "Budget travel expert showing you how to see the world without breaking the bank. My audience actively books flights and hotels based on my content.",
    collabs: ["Hostelworld", "Airbnb", "Revolut", "Away"],
    demo: [
      { l: "18–24", p: 48 },
      { l: "25–34", p: 40 },
      { l: "Female", p: 70 },
      { l: "EU/US", p: 74 },
    ],
  },
  // PAGE 3
  {
    id: 12,
    name: "Devon Williams",
    niche: "Music",
    nicheKey: "music",
    platform: "YouTube",
    platformKey: "yt",
    initials: "DW",
    gradient: "linear-gradient(135deg,#ff6b6b,#feca57)",
    followers: "1.8M",
    followersRaw: 1800000,
    engagement: "5.3%",
    engRaw: 5.3,
    avgViews: "380K",
    tags: ["Guitar", "Beats", "Tutorials"],
    bio: "Music producer and guitar teacher with a massive following of aspiring musicians. Perfect for brands in audio equipment, music software, and streaming.",
    collabs: ["Fender", "Native Instruments", "Spotify", "Sweetwater"],
    demo: [
      { l: "18–24", p: 40 },
      { l: "25–34", p: 42 },
      { l: "Male", p: 68 },
      { l: "US/UK", p: 60 },
    ],
  },
  {
    id: 13,
    name: "Aisha Okonkwo",
    niche: "Finance",
    nicheKey: "finance",
    platform: "TikTok",
    platformKey: "tk",
    initials: "AO",
    gradient: "linear-gradient(135deg,#0f3460,#16213e)",
    followers: "2.6M",
    followersRaw: 2600000,
    engagement: "7.8%",
    engRaw: 7.8,
    avgViews: "900K",
    tags: ["Investing", "Budgeting", "Side Hustles"],
    bio: "Breaking down complex financial concepts for Gen Z. My audience is actively looking for investment apps, banking products, and financial tools.",
    collabs: ["Robinhood", "Chime", "Acorns", "Coinbase"],
    demo: [
      { l: "18–24", p: 52 },
      { l: "25–34", p: 35 },
      { l: "Mixed", p: 55 },
      { l: "US", p: 78 },
    ],
  },
  {
    id: 14,
    name: "Chris Nakamura",
    niche: "Tech & Gaming",
    nicheKey: "tech",
    platform: "TikTok",
    platformKey: "tk",
    initials: "CN",
    gradient: "linear-gradient(135deg,#00b4d8,#0077b6)",
    followers: "4.2M",
    followersRaw: 4200000,
    engagement: "8.9%",
    engRaw: 8.9,
    avgViews: "2.1M",
    tags: ["AI", "Productivity", "Apps"],
    bio: "The go-to creator for AI tools and productivity hacks. My audience of professionals and students has an extremely high conversion rate for software products.",
    collabs: ["Notion", "Grammarly", "Canva", "Coursera"],
    demo: [
      { l: "18–24", p: 44 },
      { l: "25–34", p: 40 },
      { l: "Male", p: 60 },
      { l: "Global", p: 85 },
    ],
  },
  {
    id: 15,
    name: "Sofia Reyes",
    niche: "Lifestyle",
    nicheKey: "lifestyle",
    platform: "Instagram",
    platformKey: "ig",
    initials: "SR",
    gradient: "linear-gradient(135deg,#ff9a9e,#fad0c4)",
    followers: "1.1M",
    followersRaw: 1100000,
    engagement: "6.4%",
    engRaw: 6.4,
    avgViews: "200K",
    tags: ["Parenting", "Family", "Home Decor"],
    bio: "Family and home lifestyle creator connecting with millennial parents. Products featured in my content regularly see 3x sales spikes within a week.",
    collabs: ["IKEA", "Pampers", "KiwiCo", "Pottery Barn Kids"],
    demo: [
      { l: "25–34", p: 48 },
      { l: "35–44", p: 38 },
      { l: "Female", p: 82 },
      { l: "US", p: 71 },
    ],
  },
  {
    id: 16,
    name: "Rafael Costa",
    niche: "Fitness",
    nicheKey: "fitness",
    platform: "Instagram",
    platformKey: "ig",
    initials: "RC",
    gradient: "linear-gradient(135deg,#f6d365,#fda085)",
    followers: "670K",
    followersRaw: 670000,
    engagement: "7.1%",
    engRaw: 7.1,
    avgViews: "130K",
    tags: ["CrossFit", "Supplements", "Motivation"],
    bio: "Elite CrossFit athlete and certified coach with a highly engaged community of serious fitness enthusiasts who spend heavily on performance gear.",
    collabs: ["Rogue Fitness", "Cellucor", "Nobull", "Garmin"],
    demo: [
      { l: "25–34", p: 50 },
      { l: "18–24", p: 32 },
      { l: "Male", p: 62 },
      { l: "US/BR", p: 65 },
    ],
  },
  {
    id: 17,
    name: "Nina Park",
    niche: "Food & Cooking",
    nicheKey: "food",
    platform: "Instagram",
    platformKey: "ig",
    initials: "NP",
    gradient: "linear-gradient(135deg,#a18cd1,#fbc2eb)",
    followers: "540K",
    followersRaw: 540000,
    engagement: "6.9%",
    engRaw: 6.9,
    avgViews: "88K",
    tags: ["Korean", "Desserts", "Aesthetic"],
    bio: "Aesthetic food photographer and recipe developer specialising in Korean and Asian fusion cuisine. My content drives strong restaurant and product discovery.",
    collabs: ["Ottogi", "Nespresso", "OXO", "Anthropologie Kitchen"],
    demo: [
      { l: "18–24", p: 46 },
      { l: "25–34", p: 38 },
      { l: "Female", p: 79 },
      { l: "US/KR", p: 68 },
    ],
  },
];

//STATE
let currentPage = 1;
const PER_PAGE = 6;
const TOTAL_PAGES = 3;
let activeNiche = "all";
let activeSort = "default";
let searchQuery = "";
let notifications = [];
let requestsSent = 48;
let shortlistedIds = new Set();
let sentIds = new Set();
let currentCreatorId = null;

// THEME
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  document.getElementById("themeIcon").textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("cb_theme", isDark ? "light" : "dark");
}
// Restore saved theme
const savedTheme = localStorage.getItem("cb_theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  document.getElementById("themeIcon").textContent =
    savedTheme === "light" ? "☀️" : "🌙";
}

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
function observeReveals() {
  document
    .querySelectorAll(".reveal:not(.visible)")
    .forEach((el) => revealObs.observe(el));
}

//STAT COUNTERS 
const counterObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        counterObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.5 },
);
document
  .querySelectorAll("[data-target]")
  .forEach((el) => counterObs.observe(el));
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const dur = 1600;
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = Math.floor((1 - Math.pow(1 - p, 4)) * target);
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  };
  requestAnimationFrame(tick);
}

//FILTER / SEARCH / SORT 
function getFilteredCreators() {
  let list = [...ALL_CREATORS];
  if (activeNiche !== "all")
    list = list.filter((c) => c.nicheKey === activeNiche);
  if (searchQuery)
    list = list.filter(
      (c) =>
        c.name.toLowerCase().includes(searchQuery) ||
        c.niche.toLowerCase().includes(searchQuery) ||
        c.tags.some((t) => t.toLowerCase().includes(searchQuery)),
    );
  if (activeSort === "followers")
    list.sort((a, b) => b.followersRaw - a.followersRaw);
  else if (activeSort === "engagement")
    list.sort((a, b) => b.engRaw - a.engRaw);
  else if (activeSort === "followers-asc")
    list.sort((a, b) => a.followersRaw - b.followersRaw);
  return list;
}

function handleSearch() {
  searchQuery = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();
  currentPage = 1;
  renderPage();
}

function filterByNiche(niche, btn) {
  activeNiche = niche;
  currentPage = 1;
  document
    .querySelectorAll(".chip")
    .forEach((c) => c.classList.remove("chip--active"));
  btn.classList.add("chip--active");
  renderPage();
}

const sortCycles = ["default", "followers", "engagement", "followers-asc"];
const sortLabels = {
  default: "Sort",
  followers: "Followers ↓",
  engagement: "Engagement ↓",
  "followers-asc": "Followers ↑",
};
let sortIdx = 0;
function cycleSort() {
  sortIdx = (sortIdx + 1) % sortCycles.length;
  activeSort = sortCycles[sortIdx];
  document.getElementById("sortLabel").textContent = sortLabels[activeSort];
  currentPage = 1;
  renderPage();
}

//RENDER PAGE
function renderPage() {
  const filtered = getFilteredCreators();
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  if (currentPage > totalPages) currentPage = totalPages;
  const start = (currentPage - 1) * PER_PAGE;
  const pageCreators = filtered.slice(start, start + PER_PAGE);

  // Count label
  document.getElementById("creatorCount").textContent =
    `Showing ${filtered.length} creator${filtered.length !== 1 ? "s" : ""}`;

  // Render cards
  const grid = document.getElementById("creatorsGrid");
  grid.innerHTML = pageCreators.map((c, i) => creatorCardHTML(c, i)).join("");

  // Tilt effect
  grid.querySelectorAll(".creator-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `translateY(-4px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });

  // Pagination
  renderPagination(totalPages);

  // Extra sections for pages 2 & 3
  renderExtra();

  // Reveal
  setTimeout(observeReveals, 50);
}

function creatorCardHTML(c, i) {
  const delay =
    ["", "reveal--d1", "reveal--d2", "reveal--d3", "reveal--d2", "reveal--d3"][
      i
    ] || "";
  const isSent = sentIds.has(c.id);
  const isSaved = shortlistedIds.has(c.id);
  const platformSVG =
    {
      ig: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>`,
      yt: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor"/></svg>`,
      tk: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>`,
    }[c.platformKey] || "";

  return `
  <div class="creator-card reveal ${delay}" data-id="${c.id}">
    <div class="creator-card__top">
      <div class="creator-avatar" style="background:${c.gradient}">${c.initials}</div>
      <div class="creator-info"><h3>${c.name}</h3><span class="creator-niche">${c.niche}</span></div>
      <div class="platform-icon platform-icon--${c.platformKey}">${platformSVG}</div>
    </div>
    <div class="creator-stats">
      <div class="creator-stat"><span class="cs-label">Followers</span><span class="cs-val">${c.followers}</span></div>
      <div class="creator-stat"><span class="cs-label">Engagement</span><span class="cs-val">${c.engagement} <span class="star">★</span></span></div>
      <div class="creator-stat"><span class="cs-label">Avg. Views</span><span class="cs-val">${c.avgViews}</span></div>
    </div>
    <div class="creator-tags">${c.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
    <div class="creator-actions">
      <button class="btn-view" onclick="openProfile(${c.id})">View Profile</button>
      <button class="btn-request ${isSent ? "sent" : ""}" onclick="openRequest(${c.id})">${isSent ? "✓ Sent" : "Send Request"}</button>
      <button class="shortlist-btn ${isSaved ? "active" : ""}" onclick="toggleShortlist(${c.id}, this)" title="${isSaved ? "Remove from shortlist" : "Shortlist"}">♡</button>
    </div>
  </div>`;
}

//PAGINATION
function renderPagination(totalPages) {
  const el = document.getElementById("pagination");
  let html = `<button class="page-btn ${currentPage === 1 ? "page-btn--disabled" : ""}" onclick="goPage(${currentPage - 1})">← Previous</button>`;
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn ${i === currentPage ? "page-btn--active" : ""}" onclick="goPage(${i})">${i}</button>`;
  }
  html += `<button class="page-btn ${currentPage === totalPages ? "page-btn--disabled" : ""}" onclick="goPage(${currentPage + 1})">Next →</button>`;
  el.innerHTML = html;
}
function goPage(page) {
  const filtered = getFilteredCreators();
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  renderPage();
  window.scrollTo({
    top: document.getElementById("creatorsGrid").offsetTop - 100,
    behavior: "smooth",
  });
}

//pages 2 AND 3 
function renderExtra() {
  const el = document.getElementById("extraSections");
  if (currentPage === 1) {
    el.innerHTML = "";
    return;
  }

  if (currentPage === 2) {
    el.innerHTML = `
    ${trendingSection()}
    ${campaignSection()}
    `;
  } else if (currentPage === 3) {
    el.innerHTML = `
    ${savedSection()}
    ${analyticsSection()}
    `;
  }
  setTimeout(observeReveals, 80);
}

function trendingSection() {
  const trending = [
    {
      initials: "KA",
      gradient: "linear-gradient(135deg,#2dc653,#007f5f)",
      name: "Kwame Asante",
      niche: "Fitness",
      growth: "+18% this week",
    },
    {
      initials: "CN",
      gradient: "linear-gradient(135deg,#00b4d8,#0077b6)",
      name: "Chris Nakamura",
      niche: "Tech & AI",
      growth: "+24% this week",
    },
    {
      initials: "AO",
      gradient: "linear-gradient(135deg,#0f3460,#16213e)",
      name: "Aisha Okonkwo",
      niche: "Finance",
      growth: "+31% this week",
    },
    {
      initials: "TH",
      gradient: "linear-gradient(135deg,#3a0ca3,#7209b7)",
      name: "Tom Hargreaves",
      niche: "Tech",
      growth: "+12% this week",
    },
    {
      initials: "DW",
      gradient: "linear-gradient(135deg,#ff6b6b,#feca57)",
      name: "Devon Williams",
      niche: "Music",
      growth: "+15% this week",
    },
  ];
  return `
  <div class="extra-section reveal">
    <div class="extra-section__header">
      <div><h3 class="extra-section__title">🔥 Trending This Week</h3><p class="extra-section__sub">Creators with fastest-growing audiences right now</p></div>
      <a href="#" class="extra-section__link">See all →</a>
    </div>
    <div class="trending-row">
      ${trending
        .map(
          (t, i) => `
      <div class="trending-card">
        <div class="trending-rank">#${i + 1} Trending</div>
        <div class="trending-avatar" style="background:${t.gradient}">${t.initials}</div>
        <div class="trending-name">${t.name}</div>
        <div class="trending-niche">${t.niche}</div>
        <div class="trending-growth">📈 ${t.growth}</div>
      </div>`,
        )
        .join("")}
    </div>
  </div>`;
}

function campaignSection() {
  const campaigns = [
    {
      name: "Summer Glow Campaign",
      creator: "Sarah Mitchell",
      status: "active",
      statusLabel: "Active",
      budget: "$8,000",
      progress: 65,
      start: "Jun 1",
      end: "Jul 15",
    },
    {
      name: "Tech Launch Series",
      creator: "Alex Chen",
      status: "active",
      statusLabel: "Active",
      budget: "$15,000",
      progress: 40,
      start: "Jun 10",
      end: "Aug 1",
    },
    {
      name: "Wellness Month",
      creator: "Jordan Taylor",
      status: "pending",
      statusLabel: "Pending",
      budget: "$5,000",
      progress: 0,
      start: "Jul 1",
      end: "Jul 31",
    },
    {
      name: "Holiday Recipe Collab",
      creator: "Emma Watson",
      status: "completed",
      statusLabel: "Completed",
      budget: "$4,500",
      progress: 100,
      start: "Dec 1",
      end: "Dec 31",
    },
    {
      name: "Adventure Series Q2",
      creator: "Marcus Johnson",
      status: "active",
      statusLabel: "Active",
      budget: "$22,000",
      progress: 80,
      start: "Apr 1",
      end: "Jun 30",
    },
    {
      name: "App Launch Push",
      creator: "Maya Rodriguez",
      status: "pending",
      statusLabel: "Pending",
      budget: "$3,000",
      progress: 0,
      start: "Jul 15",
      end: "Aug 15",
    },
  ];
  return `
  <div class="extra-section reveal reveal--d2">
    <div class="extra-section__header">
      <div><h3 class="extra-section__title">📋 My Campaigns</h3><p class="extra-section__sub">Track your active and upcoming collaborations</p></div>
      <a href="#" class="extra-section__link">Manage all →</a>
    </div>
    <div class="campaign-board">
      ${campaigns
        .map(
          (c) => `
      <div class="campaign-card">
        <div class="campaign-status campaign-status--${c.status}">● ${c.statusLabel}</div>
        <div class="campaign-name">${c.name}</div>
        <div class="campaign-meta">with ${c.creator}</div>
        ${
          c.progress > 0
            ? `
        <div class="campaign-progress">
          <div style="display:flex;justify-content:space-between;font-size:0.78rem;color:var(--muted);margin-bottom:4px"><span>Progress</span><span>${c.progress}%</span></div>
          <div class="progress-bar"><div class="progress-fill" style="width:${c.progress}%"></div></div>
        </div>`
            : ""
        }
        <div class="campaign-footer"><span>Budget: ${c.budget}</span><span>${c.start} – ${c.end}</span></div>
      </div>`,
        )
        .join("")}
    </div>
  </div>`;
}

function savedSection() {
  const saved = ALL_CREATORS.filter((c) => shortlistedIds.has(c.id));
  const display = saved.length > 0 ? saved : ALL_CREATORS.slice(0, 4);
  return `
  <div class="extra-section reveal">
    <div class="extra-section__header">
      <div><h3 class="extra-section__title">⭐ Shortlisted Creators</h3><p class="extra-section__sub">${saved.length > 0 ? `${saved.length} creators saved` : "Creators you've bookmarked"}</p></div>
      <a href="#" class="extra-section__link">View all →</a>
    </div>
    <div class="saved-grid">
      ${display
        .map(
          (c) => `
      <div class="saved-card" onclick="openProfile(${c.id})">
        <div class="saved-avatar" style="background:${c.gradient}">${c.initials}</div>
        <div class="saved-name">${c.name}</div>
        <div class="saved-niche">${c.niche}</div>
        <div class="saved-followers">${c.followers} followers</div>
      </div>`,
        )
        .join("")}
    </div>
  </div>`;
}

function analyticsSection() {
  return `
  <div class="extra-section reveal reveal--d2">
    <div class="extra-section__header">
      <div><h3 class="extra-section__title">📊 Campaign Analytics</h3><p class="extra-section__sub">Performance overview across all your campaigns</p></div>
      <a href="#" class="extra-section__link">Full report →</a>
    </div>
    <div class="analytics-grid">
      <div class="analytics-card">
        <div class="analytics-title">Monthly Requests Sent</div>
        <div class="bar-chart" id="barChart">
          ${["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
            .map((m, i) => {
              const h = [30, 45, 55, 40, 70, 85][i];
              return `<div class="bar-col"><div class="bar" style="height:${h}%"></div><div class="bar-label">${m}</div></div>`;
            })
            .join("")}
        </div>
      </div>
      <div class="analytics-card">
        <div class="analytics-title">Creator Niche Breakdown</div>
        <div class="donut-wrap">
          <svg class="donut" viewBox="0 0 36 36" width="90" height="90">
            <circle cx="18" cy="18" r="14" fill="none" stroke="var(--border)" stroke-width="4"/>
            <circle cx="18" cy="18" r="14" fill="none" stroke="#f5c518" stroke-width="4" stroke-dasharray="35 65" stroke-dashoffset="0"/>
            <circle cx="18" cy="18" r="14" fill="none" stroke="#06d6a0" stroke-width="4" stroke-dasharray="25 75" stroke-dashoffset="-35"/>
            <circle cx="18" cy="18" r="14" fill="none" stroke="#4cc9f0" stroke-width="4" stroke-dasharray="20 80" stroke-dashoffset="-60"/>
            <circle cx="18" cy="18" r="14" fill="none" stroke="#f72585" stroke-width="4" stroke-dasharray="20 80" stroke-dashoffset="-80"/>
          </svg>
          <div class="donut-legend">
            <div class="legend-row"><span class="legend-dot" style="background:#f5c518"></span><span class="legend-label">Fashion</span><span class="legend-pct">35%</span></div>
            <div class="legend-row"><span class="legend-dot" style="background:#06d6a0"></span><span class="legend-label">Fitness</span><span class="legend-pct">25%</span></div>
            <div class="legend-row"><span class="legend-dot" style="background:#4cc9f0"></span><span class="legend-label">Tech</span><span class="legend-pct">20%</span></div>
            <div class="legend-row"><span class="legend-dot" style="background:#f72585"></span><span class="legend-label">Other</span><span class="legend-pct">20%</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

//SHORTLIST
function toggleShortlist(id, btn) {
  if (shortlistedIds.has(id)) {
    shortlistedIds.delete(id);
    btn.classList.remove("active");
    btn.textContent = "♡";
    const num = document.getElementById("shortlistedNum");
    if (num) num.textContent = Math.max(0, parseInt(num.textContent) - 1);
  } else {
    shortlistedIds.add(id);
    btn.classList.add("active");
    btn.textContent = "♥";
    const num = document.getElementById("shortlistedNum");
    if (num) num.textContent = parseInt(num.textContent) + 1;
    const c = ALL_CREATORS.find((x) => x.id === id);
    addNotification(`<strong>${c.name}</strong> added to your shortlist ⭐`);
  }
}

//NOTIFICATIONS
function toggleNotifications() {
  document.getElementById("notifPanel").classList.toggle("hidden");
}
document.addEventListener("click", (e) => {
  const p = document.getElementById("notifPanel"),
    b = document.getElementById("notifBtn");
  if (!p.contains(e.target) && !b.contains(e.target)) p.classList.add("hidden");
});
function addNotification(msg) {
  notifications.unshift({ msg, time: "Just now" });
  const badge = document.getElementById("notifBadge");
  badge.textContent = notifications.length;
  badge.classList.add("show");
  document.getElementById("notifList").innerHTML = notifications
    .map(
      (n) => `
    <div class="notif-item">
      <div class="notif-dot"></div>
      <div><div class="notif-text">${n.msg}</div><div class="notif-time">${n.time}</div></div>
    </div>`,
    )
    .join("");
}
function clearNotifications() {
  notifications = [];
  document.getElementById("notifList").innerHTML =
    '<div class="notif-empty">No notifications yet</div>';
  const b = document.getElementById("notifBadge");
  b.classList.remove("show");
}

//PROFILE MODAL
function openProfile(id) {
  const c = ALL_CREATORS.find((x) => x.id === id);
  currentCreatorId = id;
  document.getElementById("pmAvatar").style.background = c.gradient;
  document.getElementById("pmAvatar").textContent = c.initials;
  document.getElementById("pmName").textContent = c.name;
  document.getElementById("pmNiche").textContent = c.niche;
  document.getElementById("pmPlatform").textContent = "📱 " + c.platform;
  document.getElementById("pmBio").textContent = c.bio;
  document.getElementById("pmStats").innerHTML = `
    <div class="pm-stat"><span class="pm-stat-val">${c.followers}</span><span class="pm-stat-label">Followers</span></div>
    <div class="pm-stat"><span class="pm-stat-val">${c.engagement}</span><span class="pm-stat-label">Engagement</span></div>
    <div class="pm-stat"><span class="pm-stat-val">${c.avgViews}</span><span class="pm-stat-label">Avg. Views</span></div>`;
  document.getElementById("pmTags").innerHTML = c.tags
    .map((t) => `<span class="tag">${t}</span>`)
    .join("");
  document.getElementById("pmCollabs").innerHTML = c.collabs
    .map(
      (col) =>
        `<div class="collab-item"><div class="collab-dot"></div><span>${col}</span></div>`,
    )
    .join("");
  document.getElementById("pmDemo").innerHTML = c.demo
    .map(
      (d) => `
    <div class="demo-row">
      <span class="demo-label">${d.l}</span>
      <div class="demo-bar"><div class="demo-fill" style="width:0%" data-pct="${d.p}%"></div></div>
      <span class="demo-pct">${d.p}%</span>
    </div>`,
    )
    .join("");
  document.getElementById("pmRequestBtn").onclick = () => {
    closeProfile();
    openRequest(id);
  };
  document.getElementById("profileModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    document
      .querySelectorAll(".demo-fill")
      .forEach((b) => (b.style.width = b.dataset.pct));
  }, 200);
}
function closeProfile() {
  document.getElementById("profileModal").classList.add("hidden");
  document.body.style.overflow = "";
}
function closeProfileOnBg(e) {
  if (e.target === document.getElementById("profileModal")) closeProfile();
}

//REQUEST MODAL
function openRequest(id) {
  const c = ALL_CREATORS.find((x) => x.id === id);
  currentCreatorId = id;
  document.getElementById("rmAvatar").style.background = c.gradient;
  document.getElementById("rmAvatar").textContent = c.initials;
  document.getElementById("rmSubtitle").textContent =
    `Sending to ${c.name} · ${c.niche}`;
  ["rmCompany", "rmMessage"].forEach(
    (i) => (document.getElementById(i).value = ""),
  );
  ["rmBudget", "rmDuration"].forEach(
    (i) => (document.getElementById(i).value = ""),
  );
  document.getElementById("rmError").textContent = "";
  const btn = document.getElementById("rmSendBtn");
  btn.classList.remove("loading");
  btn.querySelector(".btn-send__text").textContent = "Send Request";
  btn.querySelector(".btn-send__spinner").style.display = "none";
  document.getElementById("requestModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}
function closeRequest() {
  document.getElementById("requestModal").classList.add("hidden");
  document.body.style.overflow = "";
}
function closeRequestOnBg(e) {
  if (e.target === document.getElementById("requestModal")) closeRequest();
}

//SEND REQUEST
function sendRequest() {
  const company = document.getElementById("rmCompany").value.trim();
  const budget = document.getElementById("rmBudget").value;
  const duration = document.getElementById("rmDuration").value;
  const message = document.getElementById("rmMessage").value.trim();
  const err = document.getElementById("rmError");
  if (!company) {
    err.textContent = "Please enter your company name.";
    return;
  }
  if (!budget) {
    err.textContent = "Please select a budget range.";
    return;
  }
  if (!duration) {
    err.textContent = "Please select a campaign duration.";
    return;
  }
  if (!message) {
    err.textContent = "Please write a message to the creator.";
    return;
  }
  err.textContent = "";
  const btn = document.getElementById("rmSendBtn");
  btn.classList.add("loading");
  btn.querySelector(".btn-send__spinner").style.display = "block";
  setTimeout(() => {
    closeRequest();
    const c = ALL_CREATORS.find((x) => x.id === currentCreatorId);
    sentIds.add(currentCreatorId);
    requestsSent++;
    const rsEl = document.getElementById("requestsSentNum");
    if (rsEl) rsEl.textContent = requestsSent;
    addNotification(
      `<strong>Request sent</strong> to ${c.name} for <em>${company}</em>`,
    );
    document.getElementById("successMsg").textContent =
      `Your collaboration request has been sent to ${c.name}. They'll review it and get back to you soon!`;
    document.getElementById("successDetails").innerHTML = `
      <div class="success-detail-row"><span class="sdl">Creator</span><span class="sdv">${c.name}</span></div>
      <div class="success-detail-row"><span class="sdl">Company</span><span class="sdv">${company}</span></div>
      <div class="success-detail-row"><span class="sdl">Budget</span><span class="sdv">${budget}</span></div>
      <div class="success-detail-row"><span class="sdl">Duration</span><span class="sdv">${duration}</span></div>`;
    document.getElementById("successOverlay").classList.remove("hidden");
    launchConfetti();
    renderPage(); // refresh cards to show sent state
  }, 1400);
}
function closeSuccess() {
  document.getElementById("successOverlay").classList.add("hidden");
  document.body.style.overflow = "";
}

// ── CONFETTI ──────────────────────────────────────────
function launchConfetti() {
  const colors = ["#f5c518", "#06d6a0", "#4cc9f0", "#f72585", "#ffffff"];
  for (let i = 0; i < 70; i++) {
    const d = document.createElement("div");
    d.className = "confetti-dot";
    d.style.cssText = `left:${Math.random() * 100}vw;top:${Math.random() * 40 + 20}vh;background:${colors[i % colors.length]};width:${Math.random() * 8 + 4}px;height:${Math.random() * 8 + 4}px;border-radius:${Math.random() > 0.5 ? "50%" : "2px"};animation-delay:${Math.random() * 0.5}s;animation-duration:${Math.random() * 1 + 1}s;`;
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 2200);
  }
}

//KEYBOARD
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProfile();
    closeRequest();
    closeSuccess();
  }
});

//INIT
renderPage();
