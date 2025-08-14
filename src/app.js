/* =================== Data & helpers =================== */
const csv = `z,symbol,name,group,period,weight,family
1,H,Hydrogen,1,1,1.008,nonmetal
2,He,Helium,18,1,4.003,noble
3,Li,Lithium,1,2,6.94,alkali
4,Be,Beryllium,2,2,9.012,alkaline
5,B,Boron,13,2,10.81,metalloid
6,C,Carbon,14,2,12.01,nonmetal
7,N,Nitrogen,15,2,14.01,nonmetal
8,O,Oxygen,16,2,16.00,nonmetal
9,F,Fluorine,17,2,19.00,halogen
10,Ne,Neon,18,2,20.18,noble
11,Na,Sodium,1,3,22.99,alkali
12,Mg,Magnesium,2,3,24.31,alkaline
13,Al,Aluminium,13,3,26.98,post
14,Si,Silicon,14,3,28.09,metalloid
15,P,Phosphorus,15,3,30.97,nonmetal
16,S,Sulfur,16,3,32.06,nonmetal
17,Cl,Chlorine,17,3,35.45,halogen
18,Ar,Argon,18,3,39.95,noble
19,K,Potassium,1,4,39.10,alkali
20,Ca,Calcium,2,4,40.08,alkaline
21,Sc,Scandium,3,4,44.96,transition
22,Ti,Titanium,4,4,47.87,transition
23,V,Vanadium,5,4,50.94,transition
24,Cr,Chromium,6,4,52.00,transition
25,Mn,Manganese,7,4,54.94,transition
26,Fe,Iron,8,4,55.85,transition
27,Co,Cobalt,9,4,58.93,transition
28,Ni,Nickel,10,4,58.69,transition
29,Cu,Copper,11,4,63.55,transition
30,Zn,Zinc,12,4,65.38,transition
31,Ga,Gallium,13,4,69.72,post
32,Ge,Germanium,14,4,72.63,metalloid
33,As,Arsenic,15,4,74.92,metalloid
34,Se,Selenium,16,4,78.97,nonmetal
35,Br,Bromine,17,4,79.90,halogen
36,Kr,Krypton,18,4,83.80,noble
37,Rb,Rubidium,1,5,85.47,alkali
38,Sr,Strontium,2,5,87.62,alkaline
39,Y,Yttrium,3,5,88.91,transition
40,Zr,Zirconium,4,5,91.22,transition
41,Nb,Niobium,5,5,92.91,transition
42,Mo,Molybdenum,6,5,95.95,transition
43,Tc,Technetium,7,5,98,transition
44,Ru,Ruthenium,8,5,101.07,transition
45,Rh,Rhodium,9,5,102.91,transition
46,Pd,Palladium,10,5,106.42,transition
47,Ag,Silver,11,5,107.87,transition
48,Cd,Cadmium,12,5,112.41,transition
49,In,Indium,13,5,114.82,post
50,Sn,Tin,14,5,118.71,post
51,Sb,Antimony,15,5,121.76,metalloid
52,Te,Tellurium,16,5,127.60,metalloid
53,I,Iodine,17,5,126.90,halogen
54,Xe,Xenon,18,5,131.29,noble
55,Cs,Cesium,1,6,132.91,alkali
56,Ba,Barium,2,6,137.33,alkaline
57,La,Lanthanum,3,6,138.91,lanth
58,Ce,Cerium,3,6,140.12,lanth
59,Pr,Praseodymium,3,6,140.91,lanth
60,Nd,Neodymium,3,6,144.24,lanth
61,Pm,Promethium,3,6,145,lanth
62,Sm,Samarium,3,6,150.36,lanth
63,Eu,Europium,3,6,151.96,lanth
64,Gd,Gadolinium,3,6,157.25,lanth
65,Tb,Terbium,3,6,158.93,lanth
66,Dy,Dysprosium,3,6,162.50,lanth
67,Ho,Holmium,3,6,164.93,lanth
68,Er,Erbium,3,6,167.26,lanth
69,Tm,Thulium,3,6,168.93,lanth
70,Yb,Ytterbium,3,6,173.05,lanth
71,Lu,Lutetium,3,6,174.97,lanth
72,Hf,Hafnium,4,6,178.49,transition
73,Ta,Tantalum,5,6,180.95,transition
74,W,Tungsten,6,6,183.84,transition
75,Re,Rhenium,7,6,186.21,transition
76,Os,Osmium,8,6,190.23,transition
77,Ir,Iridium,9,6,192.22,transition
78,Pt,Platinum,10,6,195.08,transition
79,Au,Gold,11,6,196.97,transition
80,Hg,Mercury,12,6,200.59,transition
81,Tl,Thallium,13,6,204.38,post
82,Pb,Lead,14,6,207.2,post
83,Bi,Bismuth,15,6,208.98,post
84,Po,Polonium,16,6,209,post
85,At,Astatine,17,6,210,halogen
86,Rn,Radon,18,6,222,noble
87,Fr,Francium,1,7,223,alkali
88,Ra,Radium,2,7,226,alkaline
89,Ac,Actinium,3,7,227,actin
90,Th,Thorium,3,7,232.04,actin
91,Pa,Protactinium,3,7,231.04,actin
92,U,Uranium,3,7,238.03,actin
93,Np,Neptunium,3,7,237,actin
94,Pu,Plutonium,3,7,244,actin
95,Am,Americium,3,7,243,actin
96,Cm,Curium,3,7,247,actin
97,Bk,Berkelium,3,7,247,actin
98,Cf,Californium,3,7,251,actin
99,Es,Einsteinium,3,7,252,actin
100,Fm,Fermium,3,7,257,actin
101,Md,Mendelevium,3,7,258,actin
102,No,Nobelium,3,7,259,actin
103,Lr,Lawrencium,3,7,266,actin
104,Rf,Rutherfordium,4,7,267,transition
105,Db,Dubnium,5,7,268,transition
106,Sg,Seaborgium,6,7,269,transition
107,Bh,Bohrium,7,7,270,transition
108,Hs,Hassium,8,7,277,transition
109,Mt,Meitnerium,9,7,278,transition
110,Ds,Darmstadtium,10,7,281,transition
111,Rg,Roentgenium,11,7,282,transition
112,Cn,Copernicium,12,7,285,transition
113,Nh,Nihonium,13,7,286,post
114,Fl,Flerovium,14,7,289,post
115,Mc,Moscovium,15,7,290,post
116,Lv,Livermorium,16,7,293,post
117,Ts,Tennessine,17,7,294,halogen
118,Og,Oganesson,18,7,294,noble`;

const families = { alkali: 'var(--family-alkali)', alkaline: 'var(--family-alkaline)', transition: 'var(--family-transition)', post: 'var(--family-post)', metalloid: 'var(--family-metalloid)', nonmetal: 'var(--family-nonmetal)', halogen: 'var(--family-halogen)', noble: 'var(--family-noble)', lanth: 'var(--family-lanth)', actin: 'var(--family-actin)' };
const FAMILY_LABELS = { alkali: 'Alkali metal', alkaline: 'Alkaline earth metal', transition: 'Transition metal', post: 'Post-transition metal', metalloid: 'Metalloid', nonmetal: 'Nonmetal', halogen: 'Halogen', noble: 'Noble gas', lanth: 'Lanthanide', actin: 'Actinide' };
const FAMILY_GRADIENTS = {
  alkali: ['#b21e35', '#3a0a0a'], alkaline: ['#a8681e', '#2a1505'], transition: ['#1f4d6d', '#0a1b26'],
  post: ['#1d5e57', '#07211e'], metalloid: ['#4a5d1f', '#151d0a'], nonmetal: ['#6b7480', '#171a1f'],
  halogen: ['#c08b1a', '#221703'], noble: ['#503a8b', '#150f26'], lanth: ['#4d3a73', '#171227'], actin: ['#5a2d72', '#160b21']
};
function getFamilyGradient(f) { return FAMILY_GRADIENTS[f] || ['#0f1623', '#0a0f17'] }

function parseCSV(txt) {
  const [header, ...rows] = txt.trim().split(/\r?\n+/); const keys = header.split(',');
  return rows.map(r => { const v = r.split(','); const o = {}; keys.forEach((k, i) => o[k] = isNaN(+v[i]) ? v[i] : +v[i]); return o; });
}
const ELEMENTS = parseCSV(csv);

/* Pokémon mapping (same as before) */
const POKE_OVERRIDES = {
  Fe: { dex: 212, name: 'Scizor', reason: 'Iron → steel bug armor.' }, Cu: { dex: 879, name: 'Copperajah', reason: 'Copper elephant.' },
  Au: { dex: 250, name: 'Ho-Oh', reason: 'Golden plumage.' }, Hg: { dex: 808, name: 'Meltan', reason: 'Liquid metal vibe.' },
  I: { dex: 686, name: 'Inkay', reason: 'Inky iodine.' }, Xe: { dex: 716, name: 'Xerneas', reason: 'Xenon “X”.' }, W: { dex: 202, name: 'Wobbuffet', reason: 'W-symbol tungsten.' },
  Pt: { dex: 487, name: 'Giratina', reason: 'Pokémon Platinum mascot.' }, Rn: { dex: 93, name: 'Haunter', reason: 'Invisible noble gas spook.' },
  Br: { dex: 286, name: 'Breloom', reason: 'Br pun.' }, Se: { dex: 336, name: 'Seviper', reason: 'Se pun.' }, Ge: { dex: 94, name: 'Gengar', reason: 'Ge pun + semiconductors.' },
  Ga: { dex: 445, name: 'Garchomp', reason: 'Liquid-metal metaphor.' }, Ni: { dex: 38, name: 'Ninetales', reason: '“Ni” → Nine.' }, Co: { dex: 839, name: 'Coalossal', reason: 'Industrial cobalt.' }, Zn: { dex: 335, name: 'Zangoose', reason: 'Zn letter match.' },
  Pb: { dex: 476, name: 'Probopass', reason: 'Pb pun; heavy.' }, Kr: { dex: 553, name: 'Krookodile', reason: 'Kr letters.' }, Na: { dex: 25, name: 'Pikachu', reason: 'Salts & batteries.' },
  H: { dex: 134, name: 'Vaporeon', reason: 'Hydrogen → water theme.' }, He: { dex: 425, name: 'Drifloon', reason: 'Balloon lightness.' }, C: { dex: 133, name: 'Eevee', reason: 'Many forms like carbon.' }, Cl: { dex: 109, name: 'Koffing', reason: 'Gas hazard.' }, Ar: { dex: 143, name: 'Snorlax', reason: 'Inert noble.' }
};
const FAMILY_POOLS = { alkali: [100, 101, 25, 311, 312, 417, 587, 777, 923], alkaline: [95, 111, 185, 74, 75, 76, 306, 208, 246], transition: [81, 82, 462, 212, 208, 303, 306, 376, 625, 681, 879, 863, 379, 448, 823, 884], post: [436, 437, 476, 600, 601, 808, 809, 569, 707], metalloid: [137, 233, 474, 479, 352, 649], nonmetal: [1, 43, 44, 45, 46, 47, 69, 70, 71, 285, 286], halogen: [109, 110, 88, 89, 336, 454, 758, 435, 569], noble: [143, 289, 80, 199, 213, 202], lanth: [374, 375, 376, 385, 338, 337, 343, 344, 437, 120, 121, 379, 448, 442, 487], actin: [92, 93, 94, 563, 609, 425, 426, 355, 356, 477, 442, 487, 807, 793, 199] };
const FAMILY_REASON = { alkali: 'Explosive/reactive → electric/charged Pokémon.', alkaline: 'Earthy reactive metals → rock/ground toughness.', transition: 'Metallic d-block → Steel-type/armored Pokémon.', post: 'Softer metals → industrial/mechanical Pokémon.', metalloid: 'In-between behavior → digital/tech Pokémon.', nonmetal: 'Life/organic chemistry → plants/organics.', halogen: 'Highly reactive gases → poison/toxic themes.', noble: 'Inert nobles → chill/stoic Pokémon.', lanth: 'Rare earths → cosmic/psychic/ancient vibes.', actin: 'Radioactive series → ghostly/unstable power.' };

/* ============ Animated/static sprite selection ============ */
let USE_ANIMATED_SPRITES = true;

/* Use Gen V static PNGs to match animated GIF canvas size (consistency!) */
function spriteUrlStatic(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${id}.png`;
}
function spriteUrlAnimated(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
}
function spriteUrlStaticFallback(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}
function getSpriteUrl(id) { return USE_ANIMATED_SPRITES ? spriteUrlAnimated(id) : spriteUrlStatic(id); }

function setSpriteWithFallback(img, id) {
  const primary = getSpriteUrl(id);
  img.src = primary;
  img.onerror = function () {
    this.onerror = null;
    /* Fallback path if Gen V static not found or animated missing */
    this.src = spriteUrlStaticFallback(id);
  };
}

function updateAllSpriteSources() {
  document.querySelectorAll('img.sprite[data-dex]').forEach(img => {
    const id = img.getAttribute('data-dex');
    const next = getSpriteUrl(id);
    if (img.src !== next) { setSpriteWithFallback(img, id); }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('animToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    USE_ANIMATED_SPRITES = !USE_ANIMATED_SPRITES;
    btn.setAttribute('aria-pressed', String(USE_ANIMATED_SPRITES));
    btn.title = USE_ANIMATED_SPRITES ? 'Animated sprites on' : 'Animated sprites off';
    btn.querySelector('.label').textContent = USE_ANIMATED_SPRITES ? 'Animated' : 'Static';
    updateAllSpriteSources();
  });
});

/* Types loader */
const TYPE_CACHE = {}; const cap = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
async function fetchTypes(dex) {
  if (TYPE_CACHE[dex]) return TYPE_CACHE[dex];
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${dex}`);
  if (!res.ok) throw new Error('type fetch failed');
  const json = await res.json();
  const types = json.types.sort((a, b) => a.slot - b.slot).map(t => cap(t.type.name));
  TYPE_CACHE[dex] = types; return types;
}
function attachTypeLoader(cell, dex) {
  const bar = cell.querySelector('.typebar'); if (!bar) return;
  const load = async () => {
    if (bar.dataset.loaded) return;
    try {
      const types = await fetchTypes(dex);
      bar.innerHTML = types.map(t => `<span class="type t-${t}">${t}</span>`).join('');
    } catch { bar.innerHTML = '<span class="type">Unknown</span>'; }
    bar.dataset.loaded = '1';
  };
  cell.addEventListener('mouseenter', load, { once: true });
  cell.addEventListener('focusin', load, { once: true });
}

/* Responsive sizing */
function fitGrid() {
  const cols = 18, pad = 32; const base = Math.min(window.innerWidth, 1280) - pad;
  const minGap = 6, maxGap = 16; const t = Math.max(0, Math.min(1, (base - 720) / (1280 - 720)));
  let gap = Math.round(minGap + (maxGap - minGap) * t);
  let cell = Math.floor((base - (cols - 1) * gap) / cols);
  if (cell < 34) { gap = Math.max(minGap, gap - 4); cell = Math.floor((base - (cols - 1) * gap) / cols); }
  if (cell < 30) { gap = Math.max(minGap, gap - 2); cell = Math.floor((base - (cols - 1) * gap) / cols); }
  if (cell < 26) { cell = 26; gap = Math.max(minGap, Math.floor((base - cols * cell) / (cols - 1))); }
  document.documentElement.style.setProperty('--cell', cell + 'px');
  document.documentElement.style.setProperty('--gap', gap + 'px');
}
window.addEventListener('resize', fitGrid);

/* Column numbers */
function addColumnNumbers(container) {
  container.querySelectorAll('.colnum').forEach(n => n.remove());
  const cells = [...container.querySelectorAll('.cell')];
  const byCol = new Map();
  cells.forEach(c => {
    const col = +c.dataset.col; const per = +c.dataset.per;
    if (!byCol.has(col) || per < byCol.get(col).per) { byCol.set(col, { per, cell: c }); }
  });
  for (const [col, info] of byCol.entries()) {
    const badge = document.createElement('div'); badge.className = 'colnum'; badge.innerHTML = `<span>${col}</span>`; info.cell.appendChild(badge);
  }
}

const mainGridEl = document.getElementById('ptable');
const fGridEl = document.getElementById('fblock');

/* Dex assignment */
const DEX_POOL = Array.from({ length: 1025 }, (_, i) => i + 1);
let POKE_ASSIGNMENTS = null;
function assignAllPokemon() {
  if (POKE_ASSIGNMENTS) return;
  POKE_ASSIGNMENTS = {}; const used = new Set(); const byZ = [...ELEMENTS].sort((a, b) => a.z - b.z);
  for (const [sym, ov] of Object.entries(POKE_OVERRIDES)) { if (!used.has(ov.dex)) { POKE_ASSIGNMENTS[sym] = ov; used.add(ov.dex); } }
  function nextFrom(arr, seed) { if (!arr || !arr.length) return null; for (let i = 0; i < arr.length; i++) { const id = arr[(seed + i) % arr.length]; if (!used.has(id)) return id; } return null; }
  function nextGlobal(seed) { for (let i = 0; i < DEX_POOL.length; i++) { const id = DEX_POOL[(seed + i) % DEX_POOL_LENGTH]; } return 1; }
}
/* fix nextGlobal bug */
function nextGlobal(seed) {
  for (let i = 0; i < DEX_POOL.length; i++) { const id = DEX_POOL[(seed + i) % DEX_POOL.length]; if (!usedGlobal.has(id)) return id; }
  return 1;
}
const usedGlobal = new Set();

function assignAllPokemonFixed() {
  if (POKE_ASSIGNMENTS) return;
  POKE_ASSIGNMENTS = {}; usedGlobal.clear();
  const byZ = [...ELEMENTS].sort((a, b) => a.z - b.z);
  for (const [sym, ov] of Object.entries(POKE_OVERRIDES)) {
    if (!usedGlobal.has(ov.dex)) { POKE_ASSIGNMENTS[sym] = ov; usedGlobal.add(ov.dex); }
  }
  function nextFrom(arr, seed) {
    if (!arr || !arr.length) return null;
    for (let i = 0; i < arr.length; i++) {
      const id = arr[(seed + i) % arr.length];
      if (!usedGlobal.has(id)) return id;
    }
    return null;
  }
  function nextGlobalLocal(seed) {
    for (let i = 0; i < DEX_POOL.length; i++) {
      const id = DEX_POOL[(seed + i) % DEX_POOL.length];
      if (!usedGlobal.has(id)) return id;
    }
    return 1;
  }
  for (const el of byZ) {
    if (POKE_ASSIGNMENTS[el.symbol]) continue;
    const pool = FAMILY_POOLS[el.family] || []; const seed = el.z * 7;
    let id = nextFrom(pool, seed); if (id == null) id = nextGlobalLocal(seed);
    POKE_ASSIGNMENTS[el.symbol] = { dex: id, name: '', reason: `Matched by family: ${el.family}. ${FAMILY_REASON[el.family] || ''}` };
    usedGlobal.add(id);
  }
}

function getPokemonFor(el) { assignAllPokemonFixed(); return POKE_ASSIGNMENTS[el.symbol]; }

/* Hovercard stats with CENTER sprite row (no border/bg) */
function hovercardGrid(el, pk) {
  return `
    <div class="grid">
      <!-- Top row -->
      <div><small>Atomic #</small><div>${el.z}</div></div>
      <div><small>Period</small><div>${el.period}</div></div>

      <!-- Center SPRITE row (spans both columns, perfectly centered) -->
      <div class="hover-sprite-row">
        <img class="sprite" data-dex="${pk.dex}" alt="${el.name} sprite"/>
      </div>

      <!-- Bottom row -->
      <div><small>Group</small><div>${el.group}</div></div>
      <div><small>Family</small><div>${FAMILY_LABELS[el.family] || el.family}</div></div>

      <div style="grid-column:1/-1"><small>Pokémon</small><div>${pk.name || ('Dex ' + pk.dex)}</div></div>
      <div class="typerow" style="grid-column:1/-1"><small>Type</small><div class="typebar" data-dex="${pk.dex}"><span class="type">Loading…</span></div></div>
      <div style="grid-column:1/-1"><small>Why Pokémon</small><div>${(POKE_OVERRIDES[el.symbol]?.reason) || ('Matched by family: ' + el.family + '. ' + (FAMILY_REASON[el.family] || ''))}</div></div>
    </div>`;
}

/* Render */
function render(list = ELEMENTS) {
  const mainGridEl = document.getElementById('ptable');
  const fGridEl = document.getElementById('fblock');

  mainGridEl.innerHTML = ''; fGridEl.innerHTML = '';

  // main blocks
  list.filter(e => e.family !== 'lanth' && e.family !== 'actin').forEach(el => {
    const pk = getPokemonFor(el, 0);
    const cell = document.createElement('button'); cell.className = 'cell';
    cell.style.gridColumn = el.group; cell.style.gridRow = el.period; cell.dataset.col = el.group; cell.dataset.per = el.period;
    const [g1, g2] = getFamilyGradient(el.family); cell.style.setProperty('--g1', g1); cell.style.setProperty('--g2', g2);
    cell.innerHTML = `
      <div class="inner">
        <div class="meta">
          <span class="mass">${el.weight}</span>
          <span class="anum">${el.z}</span>
        </div>
        <img class="sprite" alt="sprite" loading="lazy" decoding="async" data-dex="${pk.dex}"/>
        <span class="ename" title="${el.name}">${el.symbol}</span>
      </div>
      <div class="hovercard">
        <div class="hrow">
          <div class="hname">${el.name}</div>
          <span class="chip">${el.symbol}</span>
        </div>
        <div class="divider"></div>
        ${hovercardGrid(el, pk)}
      </div>`;
    mainGridEl.appendChild(cell);

    // set sprite srcs with fallback (both tile + hover)
    const imgs = cell.querySelectorAll(`img.sprite[data-dex="${pk.dex}"]`);
    imgs.forEach(img => setSpriteWithFallback(img, pk.dex));

    attachTypeLoader(cell, pk.dex);
  });

  // Lanthanides
  const lanths = list.filter(e => e.family === 'lanth');
  lanths.forEach((el, i) => {
    const pk = getPokemonFor(el, i);
    const cell = document.createElement('button'); cell.className = 'cell';
    const [g1, g2] = getFamilyGradient(el.family); cell.style.setProperty('--g1', g1); cell.style.setProperty('--g2', g2);
    cell.style.gridColumn = (i + 4); cell.dataset.col = (i + 4); cell.dataset.per = 8;
    cell.innerHTML = `
      <div class="inner">
        <div class="meta"><span class="mass">${el.weight}</span><span class="anum">${el.z}</span></div>
        <img class="sprite" alt="sprite" loading="lazy" decoding="async" data-dex="${pk.dex}"/>
        <span class="ename" title="${el.name}">${el.symbol}</span>
      </div>
      <div class="hovercard">
        <div class="hrow"><div class="hname">${el.name}</div><span class="chip">${el.symbol}</span></div>
        <div class="divider"></div>
        ${hovercardGrid(el, pk)}
      </div>`;
    fGridEl.appendChild(cell);
    cell.querySelectorAll(`img.sprite[data-dex="${pk.dex}"]`).forEach(img => setSpriteWithFallback(img, pk.dex));
    attachTypeLoader(cell, pk.dex);
  });

  // Actinides
  const actins = list.filter(e => e.family === 'actin');
  actins.forEach((el, i) => {
    const pk = getPokemonFor(el, i);
    const cell = document.createElement('button'); cell.className = 'cell';
    const [g1, g2] = getFamilyGradient(el.family); cell.style.setProperty('--g1', g1); cell.style.setProperty('--g2', g2);
    cell.style.gridColumn = (i + 4); cell.dataset.col = (i + 4); cell.dataset.per = 9;
    cell.innerHTML = `
      <div class="inner">
        <div class="meta"><span class="mass">${el.weight}</span><span class="anum">${el.z}</span></div>
        <img class="sprite" alt="sprite" loading="lazy" decoding="async" data-dex="${pk.dex}"/>
        <span class="ename" title="${el.name}">${el.symbol}</span>
      </div>
      <div class="hovercard">
        <div class="hrow"><div class="hname">${el.name}</div><span class="chip">${el.symbol}</span></div>
        <div class="divider"></div>
        ${hovercardGrid(el, pk)}
      </div>`;
    fGridEl.appendChild(cell);
    cell.querySelectorAll(`img.sprite[data-dex="${pk.dex}"]`).forEach(img => setSpriteWithFallback(img, pk.dex));
    attachTypeLoader(cell, pk.dex);
  });

  addColumnNumbers(mainGridEl);
}

/* Search */
const q = document.getElementById('q');
q.addEventListener('input', e => {
  const term = e.target.value.trim().toLowerCase();
  if (!term) { render(); fitGrid(); return; }
  const subset = ELEMENTS.filter(el => {
    const ov = POKE_OVERRIDES[el.symbol]; const pnames = ov ? (ov.name || '').toLowerCase() : '';
    return el.symbol.toLowerCase().includes(term) || el.name.toLowerCase().includes(term) || String(el.z).includes(term) || pnames.includes(term);
  });
  render(subset); fitGrid();
});

/* Boot */
fitGrid(); render();

/* Click-to-pin hovercards */
;[document.getElementById('ptable'), document.getElementById('fblock')].forEach(grid => {
  if (!grid) return;
  grid.addEventListener('click', e => {
    const btn = e.target.closest('.cell'); if (!btn) return;
    e.stopPropagation();
    document.querySelectorAll('.cell.show').forEach(el => { if (el !== btn) el.classList.remove('show'); });
    btn.classList.toggle('show');
  });
});
document.addEventListener('click', () => { document.querySelectorAll('.cell.show').forEach(el => el.classList.remove('show')); });
document.addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && document.activeElement?.classList.contains('cell')) {
    e.preventDefault(); document.activeElement.classList.toggle('show');
  }
});
