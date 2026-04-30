export const legacyScript = `

// ══ PROGRAMS DATA ══
const PROGS = [
  {code:'// PROG_01',name:'NEURA Corporativo',tag:'Imersão · C-Level & Liderança Sênior',desc:'Três imersões mensais de 8 horas cada, estruturadas na Jornada do Herói. Neuroliderança, comunicação de alto impacto e inteligência comportamental para quem lidera organizações.',meta:[{l:'Formato',v:'3 imersões / 8h'},{l:'Público',v:'C-Level · Diretores'},{l:'Entrega',v:'In company'}],page:'neura'},
  {code:'// PROG_02',name:'Comunicação Magnética',tag:'Treinamento · Equipes e Líderes',desc:'O método que transforma como profissionais se comunicam, persuadem e influenciam. Integra neurociência, PNL e técnicas de presença para gerar conexão real.',meta:[{l:'Formato',v:'Workshop 8h · Imersão 2 dias'},{l:'Público',v:'Líderes · Equipes'},{l:'Entrega',v:'In company · Online'}],page:'contato'},
  {code:'// PROG_03',name:'Confiabilidade Comportamental',tag:'Framework · Cultura',desc:'C.O.M.P.O.R.T.A.R. — intervenção estruturada para equipes que precisam elevar execução, responsabilidade e comunicação interna.',meta:[{l:'Formato',v:'Programa modular'},{l:'Público',v:'Operação · Gestão'},{l:'Entrega',v:'In company'}],page:'contato'},
  {code:'// PROG_04',name:'Cultura em Movimento',tag:'Jornada · Transformação Cultural',desc:'P.O.N.T.E., C.A.L.M.A. e C.E.R.T.O. — frameworks para criar pontes entre gestão e equipes e instalar cultura de alta performance sustentável.',meta:[{l:'Formato',v:'Jornada contínua'},{l:'Público',v:'RH · Liderança'},{l:'Entrega',v:'In company · Online'}],page:'contato'},
  {code:'// PROG_05',name:'A Voz que Transforma',tag:'Palestra · Evento Corporativo',desc:'Palestra de alto impacto sobre comunicação, presença e influência. 60 a 120 minutos — ideal para convenções, kick-offs e eventos de liderança.',meta:[{l:'Formato',v:'Palestra 60–120 min'},{l:'Público',v:'Todos os níveis'},{l:'Entrega',v:'Presencial · Online'}],page:'contato'},
  {code:'// PROG_06',name:'Day Training',tag:'Imersão · 1 Dia',desc:'Imersão de 8 horas baseada na Jornada do Herói. 12 blocos de conteúdo e prática — do autoconhecimento à comunicação de impacto.',meta:[{l:'Formato',v:'1 dia / 8h'},{l:'Público',v:'Equipes · Líderes'},{l:'Entrega',v:'Presencial'}],page:'contato'},
];

function buildList(id, limit) {
  const el = document.getElementById(id);
  if (!el) return;
  const list = limit ? PROGS.slice(0, limit) : PROGS;
  el.innerHTML = list.map((p, i) => \`
    <div class="prog-item" id="\${id}-\${i}">
      <div class="prog-header" onclick="toggle('\${id}-\${i}')">
        <div class="prog-left">
          <div class="prog-code">\${p.code}</div>
          <div><div class="prog-name">\${p.name}</div><div class="prog-tag">\${p.tag}</div></div>
        </div>
        <div class="prog-toggle">+</div>
      </div>
      <div class="prog-body">
        <div class="prog-body-inner">
          <div class="prog-desc">\${p.desc}</div>
          <div class="prog-meta">\${p.meta.map(m=>\`<div class="pm"><span class="pm-l">\${m.l}</span><span class="pm-v">\${m.v}</span></div>\`).join('')}</div>
          <div class="prog-actions">
            <button class="btn-saiba" onclick="go('\${p.page}')">\${p.page==='neura'?'Ver programa completo':'Saiba mais'}</button>
            <button class="btn-prop" onclick="go('contato')">Solicitar proposta</button>
          </div>
        </div>
      </div>
    </div>\`).join('');
}

function toggle(id) {
  const el = document.getElementById(id);
  const open = el.classList.contains('open');
  el.closest('.prog-list').querySelectorAll('.prog-item.open').forEach(e => e.classList.remove('open'));
  if (!open) el.classList.add('open');
}

// ══ PAGE NAV ══
function go(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('pg-' + id)?.classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('nl-' + id)?.classList.add('active');
  // Toggle inner-page darkening
  document.body.classList.toggle('inner-page', id !== 'home');
  window.scrollTo({top:0,behavior:'smooth'});
  setTimeout(reveals, 80);
}

// ══ HAM ══
const ham = document.getElementById('ham'), mob = document.getElementById('mob');
ham.addEventListener('click', () => {
  ham.classList.toggle('open'); mob.classList.toggle('open');
  document.body.style.overflow = mob.classList.contains('open') ? 'hidden' : '';
});
function cm() { ham.classList.remove('open'); mob.classList.remove('open'); document.body.style.overflow = ''; }

// ══ REVEALS ══
const revObs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), {threshold:0.06,rootMargin:'0px 0px -35px 0px'});
function reveals() {
  document.querySelectorAll('.reveal').forEach(el => {
    revObs.observe(el);
    if (el.getBoundingClientRect().top < window.innerHeight + 60) el.classList.add('visible');
  });
}

// ══ FORM ══
document.getElementById('fsub').addEventListener('click', () => {
  const g = id => document.getElementById(id)?.value?.trim() || '';
  let t = 'Olá Paulinho! Vim pelo institutosiqueira.com.br.';
  if(g('fn')) t+=\`\n\nNome: \${g('fn')}\`;
  if(g('fe')) t+=\`\nEmpresa: \${g('fe')}\`;
  if(g('fc')) t+=\`\nCargo: \${g('fc')}\`;
  if(g('fi')) t+=\`\nInteresse: \${g('fi')}\`;
  if(g('fp')) t+=\`\nPessoas: \${g('fp')}\`;
  if(g('fm')) t+=\`\n\nMensagem: \${g('fm')}\`;
  window.open('https://wa.me/5511920926873?text='+encodeURIComponent(t),'_blank');
});

// ══ GLOBAL CIRCUIT CANVAS (fixed, always visible) ══
const cv = document.getElementById('bgCanvas');
const cx = cv.getContext('2d');
const C = {cyan:'#00C9C8',cyanL:'#6EE7B7',gold:'#D4A843',purple:'#C084FC',white:'#e8f4f4'};
let W,H,t=0,nodes=[],lines=[],parts=[];

function resize() {
  W = cv.width  = window.innerWidth;
  H = cv.height = window.innerHeight;
  build();
}
function build() {
  nodes=[]; lines=[]; parts=[];
  const fcx=W*0.72, fcy=H*0.50, fs=Math.min(W,H)*(W<820?0.55:0.42);
  const fp=[[fcx-fs*.04,fcy-fs*.52],[fcx+fs*.16,fcy-fs*.54],[fcx+fs*.26,fcy-fs*.44],[fcx+fs*.30,fcy-fs*.30],[fcx+fs*.28,fcy-fs*.16],[fcx+fs*.26,fcy-fs*.06],[fcx+fs*.24,fcy+fs*.04],[fcx+fs*.22,fcy+fs*.12],[fcx+fs*.20,fcy+fs*.22],[fcx+fs*.23,fcy+fs*.30],[fcx+fs*.16,fcy+fs*.32],[fcx+fs*.14,fcy+fs*.38],[fcx+fs*.18,fcy+fs*.42],[fcx+fs*.12,fcy+fs*.45],[fcx+fs*.05,fcy+fs*.52],[fcx-fs*.04,fcy+fs*.54],[fcx-fs*.10,fcy+fs*.48],[fcx-fs*.13,fcy+fs*.35]];
  lines.push({pts:fp,col:C.cyan,w:1.4,op:.55,dash:false,travel:true});
  [[fcy-fs*.48,fs*.14,C.cyan,.16],[fcy-fs*.38,fs*.20,C.cyan,.14],[fcy-fs*.26,fs*.22,C.cyanL,.12],[fcy-fs*.14,fs*.20,C.white,.08],[fcy-fs*.04,fs*.18,C.cyan,.11],[fcy+fs*.08,fs*.16,C.gold,.12],[fcy+fs*.20,fs*.14,C.purple,.13],[fcy+fs*.32,fs*.10,C.cyan,.10],[fcy+fs*.44,fs*.06,C.gold,.09]].forEach(([y,xR,col,op])=>{
    const xL=fcx-fs*.42;
    lines.push({pts:[[xL,y],[fcx+xR,y]],col,w:.85,op,dash:false});
    lines.push({pts:[[xL,y],[xL,y+fs*.05]],col,w:.55,op:op*.6,dash:false});
    nodes.push({x:fcx+xR,y,r:2.8,col,op,glow:true,phase:Math.random()*Math.PI*2});
    nodes.push({x:xL,y,r:1.6,col,op:op*.65,glow:false,phase:Math.random()*Math.PI*2});
  });
  lines.push({pts:[[fcx-fs*.04,fcy-fs*.52],[fcx-fs*.08,fcy-fs*.18],[fcx-fs*.11,fcy+fs*.18],[fcx-fs*.13,fcy+fs*.42]],col:C.cyan,w:.7,op:.16,dash:true});
  const ex=fcx+fs*.22,ey=fcy-fs*.07;
  nodes.push({x:ex,y:ey,r:6,col:C.cyan,op:.92,glow:true,pulse:true,phase:0});
  nodes.push({x:ex-fs*.09,y:ey,r:3,col:C.white,op:.62,glow:true,phase:1.2});
  for(let a=0;a<Math.PI*2;a+=Math.PI/6){const len=fs*.07;lines.push({pts:[[ex,ey],[ex+Math.cos(a)*len,ey+Math.sin(a)*len*.55]],col:C.cyan,w:.65,op:.25,dash:false});}
  nodes.push({x:fcx+fs*.22,y:fcy+fs*.28,r:3.5,col:C.gold,op:.72,glow:true,phase:2.1});
  nodes.push({x:fcx+fs*.05,y:fcy+fs*.52,r:2.5,col:C.purple,op:.62,glow:true,phase:1.8});
  for(let i=0;i<38;i++){
    const ang=Math.random()*Math.PI*2,rad=fs*(.12+Math.random()*.72);
    const px=fcx+Math.cos(ang)*rad*1.15,py=fcy+Math.sin(ang)*rad*.82;
    if(px<fcx-fs*.42) continue;
    nodes.push({x:px,y:py,r:.9+Math.random()*2.2,col:[C.cyan,C.gold,C.purple,C.cyanL,C.white][Math.floor(Math.random()*5)],op:.06+Math.random()*.22,glow:Math.random()>.6,phase:Math.random()*Math.PI*2});
  }
  const pc=W<820?130:180;
  for(let i=0;i<pc;i++){
    const px=(Math.random()<.7)?(fcx-fs*.5+Math.random()*fs*1.4):Math.random()*W;
    const py=fcy-fs*.7+Math.random()*fs*1.4;
    parts.push({x:px,y:py,r:.7+Math.random()*2.2,col:[C.cyan,C.cyanL,C.white,C.purple,C.gold][Math.floor(Math.random()*5)],op:.04+Math.random()*.28,spd:.5+Math.random()*1.4,phase:Math.random()*Math.PI*2,dx:(Math.random()-.5)*18,dy:(Math.random()-.5)*14});
  }
}
function poly(pts,col,w,op,dash){
  if(pts.length<2)return;
  cx.save();cx.globalAlpha=op;cx.strokeStyle=col;cx.lineWidth=w;cx.lineCap='round';
  cx.setLineDash(dash?[4,7]:[]);cx.beginPath();cx.moveTo(pts[0][0],pts[0][1]);
  for(let i=1;i<pts.length;i++)cx.lineTo(pts[i][0],pts[i][1]);cx.stroke();cx.restore();
}
function glw(x,y,r,col,op){
  cx.save();const g=cx.createRadialGradient(x,y,0,x,y,r*5);
  g.addColorStop(0,col+'cc');g.addColorStop(.5,col+'33');g.addColorStop(1,'transparent');
  cx.globalAlpha=op*.55;cx.fillStyle=g;cx.beginPath();cx.arc(x,y,r*5,0,Math.PI*2);cx.fill();
  cx.globalAlpha=op;cx.fillStyle=col;cx.beginPath();cx.arc(x,y,r,0,Math.PI*2);cx.fill();cx.restore();
}
function draw(){
  cx.clearRect(0,0,W,H);t++;
  // subtle atmosphere
  const a1=cx.createRadialGradient(W*.7,H*.45,0,W*.7,H*.45,H*.55);
  a1.addColorStop(0,'rgba(0,201,200,.022)');a1.addColorStop(1,'transparent');
  cx.fillStyle=a1;cx.fillRect(0,0,W,H);
  const a2=cx.createRadialGradient(W*.73,H*.63,0,W*.73,H*.63,H*.38);
  a2.addColorStop(0,'rgba(192,132,252,.012)');a2.addColorStop(1,'transparent');
  cx.fillStyle=a2;cx.fillRect(0,0,W,H);
  lines.forEach(l=>{
    poly(l.pts,l.col,l.w,l.op,l.dash);
    if(l.travel&&l.pts.length>3){
      const pts=l.pts,prog=((t*.22)%(pts.length*30))/(pts.length*30);
      const idx=Math.floor(prog*(pts.length-1)),frac=(prog*(pts.length-1))-idx;
      if(idx<pts.length-1){
        const ax=pts[idx][0],ay=pts[idx][1],bx=pts[idx+1][0],by=pts[idx+1][1];
        glw(ax+(bx-ax)*frac,ay+(by-ay)*frac,2.8,C.gold,.65);
      }
    }
  });
  nodes.forEach(n=>{
    const ph=n.phase||0,osc=.6+.4*Math.sin(t*.025+ph);
    const pr=n.pulse?n.r*(1+.35*Math.sin(t*.038+ph)):n.r;
    if(n.glow)glw(n.x,n.y,pr,n.col,n.op*osc);
    else{cx.save();cx.globalAlpha=n.op*osc;cx.fillStyle=n.col;cx.beginPath();cx.arc(n.x,n.y,pr,0,Math.PI*2);cx.fill();cx.restore();}
  });
  parts.forEach(p=>{
    const tt=t*.009*p.spd+p.phase;
    const px=p.x+Math.sin(tt)*p.dx*.35,py=p.y+Math.cos(tt*.8)*p.dy*.35;
    const osc=.45+.55*Math.sin(tt*1.4),op=p.op*osc,r=p.r*(.65+.7*osc);
    cx.save();const g=cx.createRadialGradient(px,py,0,px,py,r*3.5);
    g.addColorStop(0,p.col+'44');g.addColorStop(1,'transparent');
    cx.globalAlpha=op*.5;cx.fillStyle=g;cx.beginPath();cx.arc(px,py,r*3.5,0,Math.PI*2);cx.fill();
    cx.globalAlpha=op;cx.fillStyle=p.col;cx.beginPath();cx.arc(px,py,r,0,Math.PI*2);cx.fill();cx.restore();
  });
  requestAnimationFrame(draw);
}

window.addEventListener('resize', resize);
resize(); draw();
buildList('phome', 4);
buildList('pfull', null);
reveals();

`;
