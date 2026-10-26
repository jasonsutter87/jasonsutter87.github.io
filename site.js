(() => {
  const PROJECTS = window.PROJECTS, ACT = window.ACTIVITY, ROLES = window.ROLES;
  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

  // ---- vocab ----------------------------------------------------------------
  const ROLE_KEYS = ['all', 'ai', 'product', 'fde', 'se'];
  const ROLE_INDEX = { ai: 0, product: 1, fde: 2, se: 3 };
  const ROLE_SLUG = { ai: 'applied-ai', product: 'ai-product', fde: 'forward-deployed', se: 'solutions' };
  const CATS = { all: 'All', ai: 'AI & agents', apps: 'Apps', security: 'Security & crypto', devtools: 'Dev tools', web: 'Web', play: 'Games & play' };
  const LANG = { Python: '#3572A5', TypeScript: '#3178c6', JavaScript: '#f1e05a', Rust: '#dea584', Dart: '#00B4AB', Kotlin: '#A97BFF', GDScript: '#355570', Svelte: '#ff3e00', HTML: '#e34c26', 'C#': '#178600' };
  const LANG_ALIAS = { React: 'TypeScript', 'Next.js': 'TypeScript', Angular: 'TypeScript', Ionic: 'TypeScript', NestJS: 'TypeScript', 'Node.js': 'JavaScript', Hugo: 'HTML', Flutter: 'Dart', Godot: 'GDScript', Tauri: 'Rust', 'Tauri 2': 'Rust' };
  const LIVE = new Set(['Live', 'Shipped', 'v1.0']);

  const ICON = {
    repo: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.71 1.7.75.75 0 0 1-1.07 1.05A2.5 2.5 0 0 1 2 11.5zm10.5-1h-8a1 1 0 0 0-1 1v6.71A2.5 2.5 0 0 1 4.5 9h8zM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.09a.25.25 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2z"/></svg>',
    lock: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4a4 4 0 0 1 8 0v2h.25c.97 0 1.75.78 1.75 1.75v5.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-5.5C2 6.78 2.78 6 3.75 6H4zm8.25 3.5h-8.5a.25.25 0 0 0-.25.25v5.5c0 .14.11.25.25.25h8.5c.14 0 .25-.11.25-.25v-5.5a.25.25 0 0 0-.25-.25M10.5 6V4a2.5 2.5 0 1 0-5 0v2z"/></svg>',
    commit: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M11.93 8.5a4 4 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4 4 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5Zm-1.43-.75a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0"/></svg>',
    ext: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .14.11.25.25.25h8.5c.14 0 .25-.11.25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.78 2.78 2 3.75 2m6.85-.75a.75.75 0 0 1 .75-.75h3.9a.75.75 0 0 1 .75.75v3.9a.75.75 0 0 1-1.5 0V3.06L9.72 7.84a.75.75 0 0 1-1.06-1.06l4.78-4.78h-2.09a.75.75 0 0 1-.75-.75"/></svg>',
    down: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .14.11.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14ZM7.25 7.69V1.75a.75.75 0 0 1 1.5 0v5.94l1.97-1.97a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 6.78a.75.75 0 0 1 1.06-1.06z"/></svg>',
    x: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.75.75 0 1 1 1.06 1.06L9.06 8l3.22 3.22a.75.75 0 1 1-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 0 1-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06"/></svg>',
  };

  // ---- derived data -----------------------------------------------------------
  const DAY = 864e5;
  const startMs = Date.parse(ACT.start);
  const nDays = ACT.weeks * 7;
  const todayIdx = Math.floor((Date.parse(new Date().toISOString().slice(0, 10)) - startMs) / DAY);
  const byId = Object.fromEntries(PROJECTS.map(p => [p.id, p]));
  const act = id => ACT.projects[id] || { commits: 0, days: {} };
  const lang = p => p.stack.map(s => LANG[s] ? s : LANG_ALIAS[s]).find(Boolean) || null;
  const daysAgo = iso => iso ? Math.max(0, Math.round((Date.now() - Date.parse(iso)) / DAY)) : Infinity;
  const fmtDate = (iso, opts = { month: 'short', day: 'numeric', year: 'numeric' }) => new Date(iso + 'T12:00:00').toLocaleDateString('en-US', opts);
  const idxDate = i => new Date(startMs + i * DAY + 12 * 36e5);
  const updated = iso => {
    const d = daysAgo(iso);
    if (d === Infinity) return '';
    if (d === 0) return 'Updated today';
    if (d === 1) return 'Updated yesterday';
    if (d < 30) return `Updated ${d} days ago`;
    return `Updated ${fmtDate(iso, d < 300 ? { month: 'short', day: 'numeric' } : { month: 'short', year: 'numeric' })}`;
  };
  const weekCounts = id => {
    const w = new Array(ACT.weeks).fill(0);
    for (const [i, n] of Object.entries(act(id).days)) w[Math.floor(i / 7)] += n;
    return w;
  };
  const score = (p, role) => {
    const a = act(p.id);
    const fresh = Math.max(0, 365 - daysAgo(a.last)) / 365 * 100;
    const size = Math.log10(a.commits + 1) * 30;
    return (role === 'all' ? 0 : p.roles[ROLE_INDEX[role]] * 1000) + fresh + size;
  };

  // ---- state ------------------------------------------------------------------
  const params = new URLSearchParams(location.search);
  const slugToRole = Object.fromEntries(Object.entries(ROLE_SLUG).map(([k, v]) => [v, k]));
  const state = {
    role: slugToRole[params.get('for')] || (ROLE_KEYS.includes(params.get('for')) ? params.get('for') : 'all'),
    q: '', cat: 'all', lang: '', sort: 'match', archive: false, week: null,
  };
  let visible = [];

  // ---- profile ----------------------------------------------------------------
  function renderProfile() {
    const r = ROLES[state.role];
    $('#headline').textContent = r.headline;
    $('#summary').textContent = r.summary;
    const all = ROLE_KEYS.slice(1).map(k => `<a href="${ROLES[k].resume}" download>${esc(ROLES[k].label)}</a>`).join('');
    $('#resume').innerHTML = r.resume
      ? `<a class="btn primary" href="${r.resume}" download>${ICON.down}Download resume</a>`
      : `<details><summary class="btn primary">${ICON.down}Download resume ▾</summary><div class="menu" role="menu">${all}</div></details>`;
  }

  function renderExperience() {
    $('#experience').innerHTML = window.EXPERIENCE.map((e, i) => `
      <li><details${i === 0 && matchMedia('(min-width: 768px)').matches ? ' open' : ''}>
        <summary><span class="r">${esc(e.role)}</span><span class="o">${esc(e.org)} · ${esc(e.when)}</span></summary>
        <ul>${e.points.map(x => `<li>${x}</li>`).join('')}</ul>
      </details></li>`).join('');
  }

  // ---- role lens --------------------------------------------------------------
  function renderLens() {
    $('#lens').innerHTML = ROLE_KEYS.map(k => {
      const n = k === 'all' ? PROJECTS.filter(p => !p.archive).length : PROJECTS.filter(p => !p.archive && p.roles[ROLE_INDEX[k]] >= 2).length;
      return `<button type="button" class="chip" data-role="${k}" aria-pressed="${state.role === k}">${esc(ROLES[k].label)}<span class="n">${n}</span></button>`;
    }).join('');
  }

  function setRole(role) {
    state.role = role;
    const url = new URL(location.href);
    if (role === 'all') url.searchParams.delete('for'); else url.searchParams.set('for', ROLE_SLUG[role]);
    history.replaceState(null, '', url);
    $('#lens').querySelectorAll('.chip').forEach(b => b.setAttribute('aria-pressed', b.dataset.role === role));
    renderProfile();
    renderPins();
    renderList();
  }

  // ---- pinned -----------------------------------------------------------------
  function renderPins() {
    const r = ROLES[state.role];
    const pins = r.pins
      ? r.pins.map(id => byId[id])
      : PROJECTS.filter(p => !p.archive).sort((a, b) => score(b, state.role) - score(a, state.role)).slice(0, 6);
    $('#pins-h').textContent = state.role === 'all' ? 'Pinned' : `Pinned for ${r.label}`;
    $('#pins').innerHTML = pins.map((p, i) => {
      const l = lang(p);
      return `<li style="animation-delay:${i * 40}ms"><button type="button" class="pin" data-open="${p.id}">
        <span class="pin-top">${p.vis === 'private' ? ICON.lock : ICON.repo}<span class="pin-name">${esc(p.name)}</span>
          <span class="badge${LIVE.has(p.status) ? ' live' : ''}">${esc(p.status)}</span></span>
        <p>${esc(p.tagline)}</p>
        <span class="meta">${l ? `<span><i class="lang-dot" style="background:${LANG[l]}"></i>${l}</span>` : ''}
          ${act(p.id).commits ? `<span>${ICON.commit}${act(p.id).commits.toLocaleString()}</span>` : ''}</span>
      </button></li>`;
    }).join('');
  }

  // ---- filtering ----------------------------------------------------------------
  function matches(p, { ignoreWeek = false } = {}) {
    if (p.archive && !state.archive) return false;
    if (state.cat !== 'all' && !p.cats.includes(state.cat)) return false;
    if (state.lang && lang(p) !== state.lang) return false;
    if (!ignoreWeek && state.week !== null && !weekCounts(p.id)[state.week]) return false;
    if (state.q) {
      const hay = [p.name, p.tagline, p.about, p.status, ...p.stack, ...p.cats.map(c => CATS[c])].join(' ').toLowerCase();
      if (!state.q.toLowerCase().split(/\s+/).every(w => hay.includes(w))) return false;
    }
    return true;
  }

  const SORTS = {
    match: (a, b) => score(b, state.role) - score(a, state.role),
    recent: (a, b) => daysAgo(act(a.id).last) - daysAgo(act(b.id).last),
    commits: (a, b) => act(b.id).commits - act(a.id).commits,
    name: (a, b) => a.name.localeCompare(b.name),
  };

  function renderToolbar() {
    $('#cats').innerHTML = Object.entries(CATS).map(([k, label]) => {
      const n = k === 'all' ? PROJECTS.filter(p => !p.archive).length : PROJECTS.filter(p => !p.archive && p.cats.includes(k)).length;
      return `<button type="button" class="chip" data-cat="${k}" aria-pressed="${state.cat === k}">${label}<span class="n">${n}</span></button>`;
    }).join('');
    const langs = [...new Set(PROJECTS.map(lang).filter(Boolean))].sort();
    $('#lang').innerHTML = `<option value="">All</option>` + langs.map(l => `<option>${l}</option>`).join('');
    $('#total').textContent = PROJECTS.length;
    $('#archive').nextElementSibling.textContent = `Show sketches (${PROJECTS.filter(p => p.archive).length})`;
  }

  function renderList() {
    visible = PROJECTS.filter(p => matches(p)).sort(SORTS[state.sort]);
    const ri = ROLE_INDEX[state.role];
    $('#repos').innerHTML = visible.length ? visible.map(p => {
      const a = act(p.id), l = lang(p), w = weekCounts(p.id), max = Math.max(...w, 1);
      const fit = ri !== undefined && p.roles[ri] === 3 ? `<span class="match">● Strong match</span>` : '';
      return `<li class="repo">
        <div>
          <h3><button type="button" data-open="${p.id}">${esc(p.name)}</button>
            <span class="badge${p.vis === 'private' ? ' private' : ''}">${p.vis === 'private' ? 'Private' : 'Public'}</span>
            <span class="badge${LIVE.has(p.status) ? ' live' : ''}">${esc(p.status)}</span></h3>
          <p class="tag">${esc(p.tagline)}</p>
          <div class="stack">${p.stack.slice(0, 5).map(s => `<span class="topic">${esc(s.toLowerCase())}</span>`).join('')}</div>
          <div class="meta">${fit}
            ${l ? `<span><i class="lang-dot" style="background:${LANG[l]}"></i>${l}</span>` : ''}
            ${a.commits ? `<span>${ICON.commit}${a.commits.toLocaleString()} commits</span>` : ''}
            ${p.site ? `<span>${ICON.ext}<a href="${p.site}" target="_blank" rel="noopener">${esc(p.site.replace(/^https?:\/\/|\/$/g, ''))}</a></span>` : ''}
            <span>${updated(a.last)}</span></div>
        </div>
        <div class="spark" aria-hidden="true">${w.slice(-26).map(n => n ? `<i style="height:${Math.max(12, n / max * 100)}%"></i>` : '<i class="z"></i>').join('')}</div>
      </li>`;
    }).join('') : `<li class="empty"><b>Nothing matches that.</b>Try a different word, or <button type="button" class="clear" data-clear>clear all filters</button>.</li>`;

    const hidden = state.archive ? 0 : PROJECTS.filter(p => p.archive && matches({ ...p, archive: false })).length;
    const bits = [`<b>${visible.length}</b> project${visible.length === 1 ? '' : 's'}`];
    if (state.cat !== 'all') bits.push(`in <b>${CATS[state.cat]}</b>`);
    if (state.lang) bits.push(`written in <b>${state.lang}</b>`);
    if (state.q) bits.push(`matching <b>${esc(state.q)}</b>`);
    if (state.week !== null) bits.push(`active the week of <b>${idxDate(state.week * 7).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</b>`);
    const filtered = state.cat !== 'all' || state.lang || state.q || state.week !== null;
    $('#status').innerHTML = bits.join(' ')
      + (hidden ? ` <span>· ${hidden} more in sketches</span>` : '')
      + (filtered ? ` <button type="button" class="clear" data-clear>Clear filters</button>` : '');
    renderGraph();
  }

  // ---- contribution graph -----------------------------------------------------
  function renderGraph() {
    const set = PROJECTS.filter(p => matches(p, { ignoreWeek: true }));
    const days = new Array(nDays).fill(0);
    const perWeek = Array.from({ length: ACT.weeks }, () => new Set());
    for (const p of set) for (const [i, n] of Object.entries(act(p.id).days)) { days[i] += n; perWeek[Math.floor(i / 7)].add(p.id); }
    const total = days.reduce((a, b) => a + b, 0);
    const nz = days.filter(Boolean).sort((a, b) => a - b);
    const q = f => nz[Math.floor(nz.length * f)] || 1;
    const cuts = [q(.25), q(.5), q(.8)];
    const level = n => !n ? 0 : n <= cuts[0] ? 1 : n <= cuts[1] ? 2 : n <= cuts[2] ? 3 : 4;
    const filtered = set.length !== PROJECTS.filter(p => !p.archive || state.archive).length;
    $('#act-h').innerHTML = `${total.toLocaleString()} commits in the last year` + (filtered ? ` <span class="muted">across ${set.length} matching project${set.length === 1 ? '' : 's'}</span>` : ` <span class="muted">across ${set.length} projects</span>`);

    let html = '';
    let lastMonth = -1;
    for (let w = 0; w < ACT.weeks; w++) {
      const m = idxDate(w * 7).getMonth();
      // Skip a month whose first week would crowd the previous label.
      if (m !== lastMonth && w < ACT.weeks - 2 && idxDate(w * 7 + 6).getMonth() === m && idxDate(w * 7 + 13).getMonth() === m) {
        html += `<span class="m" style="grid-column:${w + 2}">${idxDate(w * 7).toLocaleDateString('en-US', { month: 'short' })}</span>`;
        lastMonth = m;
      }
    }
    ['Mon', 'Wed', 'Fri'].forEach((d, i) => { html += `<span class="d" style="grid-row:${i * 2 + 3}">${d}</span>`; });
    for (let w = 0; w < ACT.weeks; w++) {
      const wc = days.slice(w * 7, w * 7 + 7).reduce((a, b) => a + b, 0);
      const label = `Week of ${idxDate(w * 7).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}: ${wc} commits across ${perWeek[w].size} project${perWeek[w].size === 1 ? '' : 's'}`;
      const cells = Array.from({ length: 7 }, (_, d) => {
        const i = w * 7 + d;
        return i > todayIdx ? '<i style="visibility:hidden"></i>' : `<i class="l${level(days[i])}" data-i="${i}" data-n="${days[i]}"></i>`;
      }).join('');
      const dim = state.week !== null && state.week !== w ? ' dim' : '';
      html += `<button type="button" class="wk${dim}" style="grid-column:${w + 2}" data-week="${w}" aria-pressed="${state.week === w}" aria-label="${label}"${wc ? '' : ' tabindex="-1"'}>${cells}</button>`;
    }
    $('#graph').innerHTML = html;
    const scroller = $('.graph-scroll');
    scroller.scrollLeft = scroller.scrollWidth;
  }

  const tip = document.createElement('div');
  tip.className = 'tip';
  tip.hidden = true;
  document.body.append(tip);
  $('#graph').addEventListener('mouseover', e => {
    const c = e.target.closest('i[data-i]');
    if (!c) { tip.hidden = true; return; }
    const n = +c.dataset.n;
    tip.textContent = `${n ? n.toLocaleString() : 'No'} commit${n === 1 ? '' : 's'} on ${idxDate(+c.dataset.i).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
    const r = c.getBoundingClientRect();
    tip.style.left = `${r.left + r.width / 2}px`;
    tip.style.top = `${r.top}px`;
    tip.hidden = false;
  });
  $('#graph').addEventListener('mouseleave', () => { tip.hidden = true; });

  // ---- detail drawer ----------------------------------------------------------------
  const drawer = $('#drawer');

  function openProject(id, { push = true } = {}) {
    const p = byId[id];
    if (!p) return;
    const a = act(id), l = lang(p), w = weekCounts(id), max = Math.max(...w, 1);
    const ri = ROLE_INDEX[state.role];
    const related = (p.family ? PROJECTS.filter(x => x.family === p.family) : PROJECTS.filter(x => x.cats[0] === p.cats[0]))
      .filter(x => x.id !== id && !x.archive).sort((x, y) => score(y, state.role) - score(x, state.role)).slice(0, 6);
    const list = visible.some(x => x.id === id) ? visible : PROJECTS;
    const at = list.findIndex(x => x.id === id);
    const prev = list[(at - 1 + list.length) % list.length], next = list[(at + 1) % list.length];
    const subject = encodeURIComponent(`Walkthrough of ${p.name}`);

    $('#drawer-body').innerHTML = `
      <div class="d-top">
        <div style="flex:1;min-width:0">
          <h2 id="d-name">${esc(p.name)}</h2>
          <div class="d-badges">
            <span class="badge${p.vis === 'private' ? ' private' : ''}">${p.vis === 'private' ? 'Private' : 'Public'}</span>
            <span class="badge${LIVE.has(p.status) ? ' live' : ''}">${esc(p.status)}</span>
            ${p.cats.map(c => `<span class="badge">${CATS[c]}</span>`).join('')}
          </div>
        </div>
        <button type="button" class="icon-btn" data-close aria-label="Close">${ICON.x}</button>
      </div>
      <p class="d-tag">${esc(p.tagline)}</p>
      <p class="d-about">${esc(p.about)}</p>
      ${(p.site || p.repo) ? `<div class="d-links">
        ${p.site ? `<a class="btn primary" href="${p.site}" target="_blank" rel="noopener">${ICON.ext}Visit live site</a>` : ''}
        ${p.repo ? `<a class="btn" href="${p.repo}" target="_blank" rel="noopener">${ICON.repo}View on GitHub</a>` : ''}
      </div>` : ''}
      ${p.vis === 'private' ? `<p class="d-private">${ICON.lock.replace('<svg', '<svg width="14" height="14" style="vertical-align:-2px;margin-right:4px"')}The code is private, but I'm happy to walk you through it. <a href="mailto:jasonsutter87@gmail.com?subject=${subject}">Email me</a>.</p>` : ''}
      <div class="d-stats">
        <div><b>${a.commits ? a.commits.toLocaleString() : '—'}</b><span>commits</span></div>
        <div><b>${a.first ? fmtDate(a.first, { month: 'short', year: 'numeric' }) : '—'}</b><span>started</span></div>
        <div><b>${a.last ? fmtDate(a.last, { month: 'short', day: 'numeric' }) : '—'}</b><span>last activity</span></div>
      </div>
      ${a.commits ? `<div><h3 class="d-h">Commits per week, last year</h3>
        <div class="spark d-spark" aria-hidden="true">${w.map(n => n ? `<i style="height:${Math.max(8, n / max * 100)}%"></i>` : '<i class="z"></i>').join('')}</div></div>` : ''}
      <div><h3 class="d-h">Built with</h3><div class="d-related">${p.stack.map(s => `<span class="topic">${esc(s)}</span>`).join('')}</div>
        ${l ? `<p class="meta" style="margin-top:8px"><span><i class="lang-dot" style="background:${LANG[l]}"></i>Mostly ${l}</span></p>` : ''}</div>
      <div><h3 class="d-h">Relevance by role</h3><div class="d-fit">
        ${ROLE_KEYS.slice(1).map(k => `<div class="fit${ROLE_INDEX[k] === ri ? ' on' : ''}"><span>${esc(ROLES[k].label)}</span><span class="bar"><i style="width:${p.roles[ROLE_INDEX[k]] / 3 * 100}%"></i></span></div>`).join('')}
      </div></div>
      ${related.length ? `<div><h3 class="d-h">${p.family ? 'Part of the same system' : 'Related'}</h3><div class="d-related">
        ${related.map(x => `<button type="button" data-open="${x.id}">${esc(x.name)}</button>`).join('')}</div></div>` : ''}
      <div class="d-nav">
        <button type="button" data-open="${prev.id}">← ${esc(prev.name)}</button>
        <span>${at + 1} / ${list.length}</span>
        <button type="button" data-open="${next.id}">${esc(next.name)} →</button>
      </div>`;
    if (!drawer.open) drawer.showModal();
    drawer.scrollTop = 0;
    drawer.querySelector('[data-close]').focus();
    if (push) history.replaceState(null, '', `${location.pathname}${location.search}#${id}`);
  }

  const clearHash = () => { if (location.hash) history.replaceState(null, '', location.pathname + location.search); };
  const closeDrawer = () => { drawer.close(); clearHash(); };
  drawer.addEventListener('close', clearHash);
  drawer.addEventListener('cancel', clearHash);
  drawer.addEventListener('click', e => {
    if (e.target === drawer || e.target.closest('[data-close]')) closeDrawer();
  });
  drawer.addEventListener('keydown', e => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    const btns = drawer.querySelectorAll('.d-nav button');
    btns[e.key === 'ArrowLeft' ? 0 : 1]?.click();
  });

  // ---- events -------------------------------------------------------------------
  document.addEventListener('click', e => {
    const open = e.target.closest('[data-open]');
    if (open) { openProject(open.dataset.open); return; }
    const role = e.target.closest('[data-role]');
    if (role) { setRole(role.dataset.role); return; }
    const cat = e.target.closest('[data-cat]');
    if (cat) {
      state.cat = cat.dataset.cat;
      $('#cats').querySelectorAll('.chip').forEach(b => b.setAttribute('aria-pressed', b.dataset.cat === state.cat));
      renderList();
      return;
    }
    const wk = e.target.closest('[data-week]');
    if (wk) {
      const w = +wk.dataset.week;
      state.week = state.week === w ? null : w;
      renderList();
      $(`[data-week="${w}"]`)?.focus();
      return;
    }
    if (e.target.closest('[data-clear]')) {
      Object.assign(state, { q: '', cat: 'all', lang: '', week: null });
      $('#q').value = ''; $('#lang').value = '';
      $('#cats').querySelectorAll('.chip').forEach(b => b.setAttribute('aria-pressed', b.dataset.cat === 'all'));
      renderList();
      return;
    }
    const menu = $('#resume details');
    if (menu && !menu.contains(e.target)) menu.open = false;
  });

  let qTimer;
  $('#q').addEventListener('input', e => {
    clearTimeout(qTimer);
    qTimer = setTimeout(() => { state.q = e.target.value.trim(); renderList(); }, 80);
  });
  $('#q').addEventListener('keydown', e => {
    if (e.key === 'Escape') { e.target.value = ''; state.q = ''; renderList(); e.target.blur(); }
    if (e.key === 'Enter') document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  });
  $('#lang').addEventListener('change', e => { state.lang = e.target.value; renderList(); });
  $('#sort').addEventListener('change', e => { state.sort = e.target.value; renderList(); });
  $('#archive').addEventListener('change', e => { state.archive = e.target.checked; renderList(); });
  document.addEventListener('keydown', e => {
    if (e.key === '/' && !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName) && !drawer.open) {
      e.preventDefault();
      $('#q').focus();
    }
  });

  $('#theme').addEventListener('click', () => {
    const root = document.documentElement;
    const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch {}
  });

  // ---- boot -----------------------------------------------------------------------
  renderLens();
  renderProfile();
  renderExperience();
  renderToolbar();
  renderPins();
  renderList();
  const hash = decodeURIComponent(location.hash.slice(1));
  if (byId[hash]) openProject(hash, { push: false });
})();
