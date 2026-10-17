/* МОЙ МАРКЕТ PRO — unified professional SVG icons
   Loads after app.js. Replaces emoji/icon glyphs in rendered UI with consistent line icons. */
(() => {
  'use strict';
  if (window.__MOY_MARKET_SVG_ICONS__) return;
  window.__MOY_MARKET_SVG_ICONS__ = true;

  const paths = {
    crown: '<path d="m2 8 5.5 4L12 4l4.5 8L22 8l-2 12H4L2 8Z"/><path d="M4 20h16"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.6a8 8 0 0 1-1.8 1l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.8-1l-1.7.6-1.4-2.4L7.1 15a8 8 0 0 1 0-2l-1.4-1.1 1.4-2.4 1.7.6a8 8 0 0 1 1.8-1l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.8 1l1.7-.6 1.4 2.4-1.4 1.1a8 8 0 0 1-.1 2Z"/>',
    calculator: '<rect x="5" y="3" width="14" height="18" rx="2"/><rect x="8" y="6" width="8" height="4" rx="1"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01M16 17h.01"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    store: '<path d="m3 10 1.5-6h15L21 10"/><path d="M5 10v10h14V10M3 10a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0"/><path d="M9 20v-5h6v5"/>',
    dashboard: '<rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="11" width="7" height="10" rx="1.5"/><rect x="3" y="14" width="8" height="7" rx="1.5"/>',
    chart: '<path d="M3 3v18h18"/><path d="m7 14 4-4 4 3 5-7"/><path d="M17 6h3v3"/>',
    building: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 21v-4h6v4M8 7h2M14 7h2M8 11h2M14 11h2"/>',
    cart: '<circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M1 2h3l2.7 13.2a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6L22 7H5"/>',
    package: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="M3 8v9l9 5 9-5V8M12 13v9"/>',
    boxes: '<path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z"/><path d="M4 7.5V16l8 5 8-5V7.5M12 12v9"/><path d="m3 17 4-2M21 17l-4-2"/>',
    wallet: '<rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 8h15a3 3 0 0 1 3 3v1h-5a2 2 0 0 0 0 4h5"/><path d="M17 14h.01"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
    shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
    cloud: '<path d="M20 16.2A4.5 4.5 0 0 0 18 7.5a6.5 6.5 0 0 0-12.4 1.7A4 4 0 0 0 6 17h12"/>',
    checkCircle: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.3 2.3 4.8-5"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    barcode: '<path d="M3 5v14M6 5v14M10 5v14M13 5v14M16 5v14M20 5v14M23 5v14"/>',
    banknote: '<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 9H5v1M18 15h1v-1"/>',
    card: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 10h20M6 15h4"/>',
    qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v2M14 20h2M19 19h2v2h-2z"/>',
    rotate: '<path d="M3 12a9 9 0 0 1 15.4-6.4L21 8"/><path d="M21 3v5h-5M21 12a9 9 0 0 1-15.4 6.4L3 16"/><path d="M3 21v-5h5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4.5V3h6v1.5M8 10h8M8 14h8M8 18h5"/>',
    arrows: '<path d="M7 7h14l-4-4M21 7l-4 4M17 17H3l4 4M3 17l4-4"/>',
    arrowRightLeft: '<path d="M17 3l4 4-4 4M3 7h18M7 13l-4 4 4 4M3 17h18"/>',
    receipt: '<path d="M4 2v20l4-2 4 2 4-2 4 2V2l-4 2-4-2-4 2-4-2Z"/><path d="M8 9h8M8 13h8M8 17h4"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
    trash: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v5M14 11v5"/>',
    minus: '<path d="M5 12h14"/>',
    close: '<path d="m18 6-12 12M6 6l12 12"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    logout: '<path d="M10 17l5-5-5-5M15 12H3M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"/>',
    pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01"/>',
    activity: '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
    alert: '<path d="M10.3 3.9 2.6 17.2A2 2 0 0 0 4.3 20h15.4a2 2 0 0 0 1.7-2.8L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    chevronDown: '<path d="m6 9 6 6 6-6"/>',
    chevronRight: '<path d="m9 18 6-6-6-6"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    send: '<path d="m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13"/>',
    trending: '<path d="M3 17 9 11l4 4 8-9M15 6h6v6"/>',
    circleDot: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/>',
    cookingPot: '<path d="M4 11h16l-1 9H5l-1-9ZM2 11h20M7 7l-2-3M17 7l2-3M8 15h.01M12 15h.01M16 15h.01"/>',
    coffee: '<path d="M10 2v2M14 2v2M6 8h12l-1 12H7L6 8ZM18 11h2a2 2 0 0 1 0 4h-2"/>',
    utensils: '<path d="M3 2v7a3 3 0 0 0 6 0V2M6 2v20M18 2c-2 2-3 5-3 8h3v12M18 2v8"/>',
    pan: '<path d="M3 13a8 8 0 0 0 16 0H3ZM19 13l3-3M6 8l2-3M12 7V3"/>',
    thermometer: '<path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0Z"/><path d="M12 12v5"/>',
    glass: '<path d="M7 3h10l-1 18H8L7 3ZM8 8h8"/>',
    hand: '<path d="M8 12V6a2 2 0 0 1 4 0v5-7a2 2 0 0 1 4 0v8-5a2 2 0 0 1 4 0v7a7 7 0 0 1-7 7h-1a7 7 0 0 1-5-2l-3-3a2 2 0 0 1 3-3l2 2"/>',
    warehouse: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z"/><path d="M8 21v-7h8v7M8 10h.01M12 10h.01M16 10h.01"/>',
    filter: '<path d="M4 5h16M7 12h10M10 19h4"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    dot: '<circle cx="12" cy="12" r="7"/>',
    arrowLeft: '<path d="m15 18-6-6 6-6M9 12h12"/>',
    arrowUpRight: '<path d="M7 17 17 7M8 7h9v9"/>',
    default: '<circle cx="12" cy="12" r="8"/>'
  };

  const glyphs = new Map([
    ['👑','crown'],['⚙️','settings'],['⚙','settings'],['▦','dashboard'],['♟','user'],['🏬','store'],
    ['🍲','cookingPot'],['🫖','coffee'],['🍽️','utensils'],['🍽','utensils'],['🍳','pan'],['♨️','thermometer'],['♨','thermometer'],['🔪','utensils'],['🥄','utensils'],['🥤','glass'],['📦','package'],
    ['▥','chart'],['↗','trending'],['▣','package'],['▤','warehouse'],['♙','users'],['₸','wallet'],['◷','clock'],['🛒','cart'],['●','check'],['👋','hand'],['↧','download'],['◉','circleDot'],['⚠️','alert'],['⚠','alert'],['⇧','upload'],['＋','plus'],['⇄','arrowRightLeft'],['⇩','download'],['✉️','mail'],['✉','mail'],['➤','send'],['📄','file'],['✓','check'],['☰','menu'],['⌖','pin'],['⬡','shield'],['▧','file'],['↪','logout'],['→','chevronRight'],['←','arrowLeft']
  ]);
  const glyphPattern = new RegExp([...glyphs.keys()].sort((a,b)=>b.length-a.length).map(s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),'gu');

  function makeIcon(name) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('viewBox','0 0 24 24');
    svg.setAttribute('width','1em');
    svg.setAttribute('height','1em');
    svg.setAttribute('fill','none');
    svg.setAttribute('stroke','currentColor');
    svg.setAttribute('stroke-width','1.8');
    svg.setAttribute('stroke-linecap','round');
    svg.setAttribute('stroke-linejoin','round');
    svg.setAttribute('aria-hidden','true');
    svg.setAttribute('focusable','false');
    svg.classList.add('mm-icon');
    svg.innerHTML = paths[name] || paths.default;
    return svg;
  }

  function replaceTextNode(node) {
    const value = node.nodeValue;
    if (!value || !glyphPattern.test(value)) { glyphPattern.lastIndex = 0; return; }
    glyphPattern.lastIndex = 0;
    const fragment = document.createDocumentFragment();
    let last = 0, m;
    while ((m = glyphPattern.exec(value)) !== null) {
      if (m.index > last) fragment.appendChild(document.createTextNode(value.slice(last,m.index)));
      fragment.appendChild(makeIcon(glyphs.get(m[0])));
      last = m.index + m[0].length;
    }
    if (last < value.length) fragment.appendChild(document.createTextNode(value.slice(last)));
    node.replaceWith(fragment);
    glyphPattern.lastIndex = 0;
  }

  function scan(root) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) { replaceTextNode(root); return; }
    if (root.nodeType !== Node.ELEMENT_NODE && root !== document) return;
    if (root.nodeType === Node.ELEMENT_NODE && root.matches('svg,script,style,textarea,option,input,select,code,pre')) return;
    const walker = document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{
      acceptNode(node) {
        const p = node.parentElement;
        if (!p || p.closest('svg,script,style,textarea,option,input,select,code,pre')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(replaceTextNode);
  }

  function installStyles() {
    if (document.getElementById('mm-svg-icon-styles')) return;
    const style = document.createElement('style');
    style.id = 'mm-svg-icon-styles';
    style.textContent = `
      .mm-icon{display:inline-block;width:1em;height:1em;vertical-align:-.17em;overflow:visible;flex:none;stroke:currentColor}
      .role-icon .mm-icon{width:1em;height:1em;vertical-align:middle}
      .nav-ico{display:inline-flex;align-items:center;justify-content:center;flex:0 0 20px}
      .nav-ico .mm-icon{width:18px;height:18px}
      .features b{display:inline-flex;align-items:center;justify-content:center;flex:0 0 13px;font-size:13px}
      .features b .mm-icon{width:12px;height:12px;stroke-width:2.2}
      .metric-icon{display:inline-flex;align-items:center;justify-content:center;line-height:1}
      .metric-icon .mm-icon{width:19px;height:19px}
      .product-thumb{display:grid;place-items:center}
      .product-thumb .mm-icon{width:22px;height:22px;stroke-width:1.7}
      .footer-stat .ico{display:inline-flex;align-items:center;justify-content:center}
      .footer-stat .ico .mm-icon{width:25px;height:25px;stroke-width:1.7}
      .btn .mm-icon{margin-right:.22em}
      .pill .mm-icon{width:1.1em;height:1.1em}
      .mm-icon{transition:color .16s ease,opacity .16s ease}
      .branch-list span:before{content:""!important;display:inline-block;width:13px;height:13px;margin-right:8px;vertical-align:-2px;background-color:#8fc9ff;-webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M12 22s8-7.2 8-13a8 8 0 1 0-16 0c0 5.8 8 13 8 13Zm0-9a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M12 22s8-7.2 8-13a8 8 0 1 0-16 0c0 5.8 8 13 8 13Zm0-9a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z'/%3E%3C/svg%3E");-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}
      @media(max-width:520px){.role-icon .mm-icon{width:1em;height:1em}.footer-stat .ico .mm-icon{width:22px;height:22px}}
    `;
    (document.head || document.documentElement).appendChild(style);
  }

  function start() {
    installStyles();
    scan(document.body);
    const observer = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) scan(node);
      }
    });
    observer.observe(document.body,{childList:true,subtree:true});
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',start,{once:true});
  else start();
})();
