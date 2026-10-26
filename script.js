/* ===== EDIT YOUR DETAILS HERE ===== */
const ME = {
  first:"Keith", full:"Keith Marten Alaan", email:"keithalaan7@gmail.com",
  tagline:"I like figuring out how things work, then making them work better.",
  about:"I’m a student who enjoys building things on the web. I learn by trying, breaking and fixing, and I care about making things that feel good to use.",
  // Slideshow photos: keep these files in the same folder as index.html. Add more names to the list.
  photos:["Keith1.jpg","Keith2.jpg","Keith3.jpg","keith.jpg"],
  greetings:["Hello","Kumusta","Hola","Bonjour","Konnichiwa","Hi there"],
  fb:{shop:"https://www.facebook.com/dropnpuffsanisidro",me:"https://www.facebook.com/keithalaan1404"},
  shop:{
    name:"DROP N' PUFF",
    tag:"Your Trusted Vaping Partner",
    about:"Besides coding, I run DROP N' PUFF, a vape shop with branches all over Cebu: Mactan, Linao, Minglanilla, Basak, Northstar and Quiot. Adults come to us for friendly advice and a wide pick of gear and flavors.",
    perks:["Honest, no-pressure advice","Devices, pods and flavors in one place","Friendly service every visit"],
    notice:"Adults 18+ only. Please puff responsibly."
  },
  branches:[
    {n:"Mactan",a:"M.L. Quezon National Highway, Mactan, Lapu-Lapu, Cebu",o:8,c:22,fb:"dropnpuffmactan"},
    {n:"Linao",a:"Natalio Bacalso National Road, Linao, Talisay, 6045 Cebu",o:11,c:23,fb:"dropnpufflinaotalisay"},
    {n:"Minglanilla",a:"Calajoan, Minglanilla, Cebu",o:11,c:23,fb:"dropnpuffminglanilla"},
    {n:"Basak Lapu-Lapu",a:"EPJ Bldg., Basak Marigondon Road, Lapu-Lapu City, Cebu",o:8,c:22,fb:"dropnpuffbasaklapulapu"},
    {n:"Northstar",a:"Near CDU, Larrazabal Ave., Brgy. Mantuyong, NRA, Mandaue City, Cebu",o:8,c:22,fb:"dropnpuffnorthstar"},
    {n:"Quiot",a:"E. Sabellano Street, Barangay Quiot, Cebu City",o:8,c:22,fb:"dropnpuffquiot"}
  ],
  store:{cur:"₱",items:[
    {n:"Starter Device",p:1200,e:"🔋",o:["Black","Yellow","Silver"]},
    {n:"Pod Kit",p:850,e:"⚡",o:["Black","Yellow","Silver"]},
    {n:"Replacement Pods (2 pack)",p:350,e:"🧪",o:["Mint","Berry","Mango","Dessert"]},
    {n:"E-Liquid 30ml",p:450,e:"💧",o:["Mint","Berry","Mango","Dessert"]},
    {n:"Disposable",p:600,e:"☁️",o:["Mint","Berry","Mango","Dessert"]},
    {n:"Charger & Case",p:250,e:"🔌",o:["Standard"]}]},
  vibes:[
    {n:"Chill",e:"☁️",f:"Creamy desserts and soft fruit blends",t:"Smooth, mellow and easy going."},
    {n:"Hyped",e:"⚡",f:"Icy menthol and bold fruit mixes",t:"Cool, sharp and full of energy."},
    {n:"Focused",e:"🎯",f:"Clean mint and classic styles",t:"Simple, steady and no distractions."},
    {n:"Sweet tooth",e:"🍓",f:"Candy, berry and tropical flavors",t:"Bright, juicy and a little extra."}
  ],
  apps:[
    {id:"w-shop",n:"Drop N' Puff",i:'<img src="DNP.jpg" alt="">'},
    {id:"w-branches",n:"Branches",i:"📍"},
    {id:"w-about",n:"About me",i:"📝"},{id:"w-photo",n:"keith.jpg",i:"🖼️"},{id:"w-skills",n:"Skills",i:"🛠️"},
    {id:"w-hobbies",n:"Hobbies",i:"🎯"},{id:"w-vibe",n:"Vibe finder",i:"🔮"},{id:"w-zap",n:"Zap reflex",i:"⚡"},{id:"w-slots",n:"Puff slots",i:"🎰"},{id:"w-game",n:"Star game",i:"⭐"},{id:"w-truths",n:"Truths",i:"🧩"},
    {id:"w-projects",n:"Projects",i:"📁"},{id:"w-term",n:"Terminal",i:"💻"},{id:"w-contact",n:"Contact",i:"✉️"}
  ],
  skills:[{n:"HTML & CSS",v:80},{n:"JavaScript",v:65},{n:"Problem solving",v:85},{n:"Teamwork",v:90},{n:"Fast learning",v:88}],
  interests:[
    {n:"Coding",t:"Turning a blank file into something that runs never gets old."},
    {n:"Gaming",t:"Co-op games are my favorite. Winning together beats winning alone."},
    {n:"Music",t:"I always have a playlist going while I work."},
    {n:"Design",t:"Good design feels invisible. I’m learning how to build that."}
  ],
  truths:[
    {t:"I have stayed up all night to finish a project I was proud of.",lie:false},
    {t:"I can solve a Rubik’s Cube in under 20 seconds.",lie:true},
    {t:"I enjoy learning new tools just to see what they can do.",lie:false}
  ],
  facts:[
    "I get my best ideas when I’m not looking for them.",
    "I’d rather build a rough version today than plan a perfect one for weeks.",
    "I learn fastest by breaking things and fixing them.",
    "Type my first name anywhere on this page for a surprise. Type my shop name too."
  ],
  projects:[
    {t:"This website",x:"A desktop-style personal site built with plain HTML, CSS and JavaScript.",tags:["HTML","CSS","JavaScript"]},
    {t:"DROP N' PUFF Vape Shop",x:"An online store app for my vape shop. Pick gear, fill the cart and check out. Adults 18+ only.",tags:["Shop","Cart","Checkout"],app:"w-store"},
    {t:"Business Calculator",x:"A business app that adds up assets and liabilities, then shows equity, profit and debt ratio.",tags:["Assets","Liabilities","Equity"],app:"w-biz"}
  ]
};
/* =================================== */
const $=id=>document.getElementById(id);
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const coarse=matchMedia("(pointer: coarse)").matches;
const mobile=()=>matchMedia("(max-width:720px)").matches;

// ---- text ----
$("tag").textContent=ME.tagline; $("about").textContent=ME.about;
$("mail").textContent=ME.email;
["mail","mail2","mailTop"].forEach(i=>$(i).href="mailto:"+ME.email);
const gmail="https://mail.google.com/mail/?view=cm&fs=1&to="+encodeURIComponent(ME.email)+"&su="+encodeURIComponent("Hello Keith");
["mail2","mailTop"].forEach(i=>{$(i).href=gmail;$(i).target="_blank";$(i).rel="noopener noreferrer"});

// ---- shop text ----
$("shopTag").textContent=ME.shop.tag;$("shopAbout").textContent=ME.shop.about;$("shopNotice").textContent=ME.shop.notice;
ME.shop.perks.forEach(p=>{const li=document.createElement("li");li.textContent=p;$("perks").appendChild(li)});
$("mailShop").href=ME.fb.shop;$("fbMe").href=ME.fb.me;$("fbMe2").href=ME.fb.me;
["mailShop","fbMe","fbMe2"].forEach(i=>{$(i).target="_blank";$(i).rel="noopener noreferrer"});

// ---- toast ----
let tt;function toast(m){const t=$("toast");t.textContent=m;t.classList.add("show");clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("show"),2600)}

// ---- window manager ----
let zTop=20,cascade=0;const wins={};
const desk=$("desktop");
function place(w){
  let x=w.dataset.x,y=+w.dataset.y;
  if(x===undefined){x=130+cascade*30;y=24+cascade*30;cascade=(cascade+1)%6}
  x=x==="right"?desk.clientWidth-w.offsetWidth-40:+x;
  w.style.left=Math.max(0,Math.min(x,desk.clientWidth-w.offsetWidth))+"px";
  w.style.top=Math.max(0,Math.min(y,desk.clientHeight-80))+"px";
}
function refreshTask(){
  Object.values(wins).forEach(o=>{if(!o.btn)return;
    o.btn.className=o.min?"min":(o.el.classList.contains("front")?"on":"")});
}
function focusWin(id){
  const o=wins[id];Object.values(wins).forEach(p=>p.el.classList.remove("front"));
  o.el.style.zIndex=++zTop;o.el.classList.add("front");refreshTask();
}
function openWin(id){
  const o=wins[id];if(!o)return;
  if(!o.open){
    o.open=true;o.min=false;o.el.hidden=false;
    if(!o.el.dataset.placed){place(o.el);o.el.dataset.placed=1}
    const b=document.createElement("button");b.textContent=o.title;
    b.onclick=()=>{if(o.min){o.min=false;o.el.hidden=false;focusWin(id)}
      else if(o.el.classList.contains("front"))minWin(id);else focusWin(id)};
    $("taskbar").appendChild(b);o.btn=b;
  } else if(o.min){o.min=false;o.el.hidden=false}
  focusWin(id);
  if(id==="w-skills")setTimeout(()=>o.el.querySelectorAll(".bar i").forEach(i=>i.style.width=i.dataset.w+"%"),60);
  if(id==="w-term")setTimeout(()=>$("tin").focus(),80);
  if(id==="w-branches")brStatus();
}
function closeWin(id){const o=wins[id];o.el.hidden=true;o.open=false;o.min=false;o.el.classList.remove("front");
  if(o.btn){o.btn.remove();o.btn=null}
  if(id==="w-skills")o.el.querySelectorAll(".bar i").forEach(i=>i.style.width=0);refreshTask()}
function minWin(id){const o=wins[id];o.el.hidden=true;o.min=true;o.el.classList.remove("front");refreshTask()}
function drag(w,h){
  h.addEventListener("pointerdown",e=>{
    if(mobile()||e.target.closest("button"))return;
    const sx=e.clientX,sy=e.clientY,ox=w.offsetLeft,oy=w.offsetTop;h.setPointerCapture(e.pointerId);h.style.cursor="grabbing";
    const mv=ev=>{let x=ox+ev.clientX-sx,y=oy+ev.clientY-sy;
      x=Math.max(-w.offsetWidth+90,Math.min(x,desk.clientWidth-90));y=Math.max(0,Math.min(y,desk.clientHeight-44));
      w.style.left=x+"px";w.style.top=y+"px"};
    const up=()=>{h.style.cursor="";h.removeEventListener("pointermove",mv);h.removeEventListener("pointerup",up)};
    h.addEventListener("pointermove",mv);h.addEventListener("pointerup",up);
  });
}
document.querySelectorAll(".win").forEach(w=>{
  const id=w.id;wins[id]={el:w,title:w.querySelector(".tt").textContent,btn:null,open:false,min:false};
  w.addEventListener("pointerdown",()=>{if(wins[id].open)focusWin(id)});
  w.querySelector(".cls").onclick=()=>closeWin(id);
  w.querySelector(".min").onclick=()=>minWin(id);
  drag(w,w.querySelector(".tb"));
});

// ---- desktop icons ----
const icons=$("icons");
ME.apps.forEach(a=>{
  const b=document.createElement("button");b.className="ic";b.innerHTML=`<span class="g" aria-hidden="true">${a.i}</span>${a.n}`;
  b.setAttribute("aria-label",a.n+". Double-click or press Enter to open.");
  b.onclick=()=>{icons.querySelectorAll(".ic").forEach(x=>x.classList.toggle("sel",x===b));if(coarse){openWin(a.id);$("hint").hidden=true}};
  b.ondblclick=()=>{openWin(a.id);$("hint").hidden=true};
  b.onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();openWin(a.id);$("hint").hidden=true}};
  icons.appendChild(b);
});
desk.addEventListener("pointerdown",e=>{if(e.target===desk)icons.querySelectorAll(".ic").forEach(x=>x.classList.remove("sel"))});
addEventListener("keydown",e=>{if(e.key==="Escape"){const f=Object.keys(wins).find(k=>wins[k].el.classList.contains("front")&&wins[k].open);if(f)closeWin(f)}});

// ---- menu bar ----
const walls=["linear-gradient(135deg,#2B1B4E,#7A2E8E 45%,#FF5C8A)","linear-gradient(135deg,#0B3C5D,#1D8A99 55%,#B8F2E6)","linear-gradient(135deg,#1B1B3A,#3A2F8F 50%,#FFB347)","linear-gradient(135deg,#14532D,#16A34A 50%,#FDE68A)","linear-gradient(135deg,#000,#3a2a00 50%,#FFB800)"];
let wi=0;function cycleWall(){wi=(wi+1)%walls.length;document.documentElement.style.setProperty("--wall",walls[wi])}
$("mbWall").onclick=()=>{cycleWall();toast("Wallpaper changed")};
$("mbShop").onclick=()=>openWin("w-shop");
$("mbBrand").onclick=()=>toast("Keith OS 1.0. Built with HTML, CSS and JavaScript.");
$("mbTidy").onclick=()=>{let n=0;Object.values(wins).forEach(o=>{if(o.open&&!o.min){o.el.style.left=(130+n*30)+"px";o.el.style.top=(24+n*30)+"px";n++}});toast("Windows tidied up")};
$("mbHelp").onclick=()=>{openWin("w-term");runCmd("help")};
function clock(){$("mbClock").textContent=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}
clock();setInterval(clock,20000);
let sec=0;setInterval(()=>{sec++;$("mbTimer").textContent="On site "+Math.floor(sec/60)+":"+String(sec%60).padStart(2,"0");
  if(sec===45){confetti(220);toast("45 seconds! Thanks for staying.")}},1000);

// ---- photo slideshow ----
(function(){
  const box=$("slides"),dots=$("dots"),fr=$("frame");let list=[],cur=0,timer=null;
  function show(i){if(!list.length)return;cur=(i+list.length)%list.length;
    list.forEach((im,k)=>im.classList.toggle("on",k===cur));
    [...dots.children].forEach((d,k)=>d.setAttribute("aria-current",k===cur));
    $("cap").textContent="Photo "+(cur+1)+" of "+list.length+" · "+ME.full}
  function auto(){clearInterval(timer);if(reduce||list.length<2)return;timer=setInterval(()=>show(cur+1),3500)}
  function go(i){show(i);auto()}
  const cap=n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase();
  const tryLoad=name=>[...new Set([name,name.toLowerCase(),cap(name)])].reduce((p,n)=>p.then(r=>r||new Promise(res=>{const im=new Image();im.onload=()=>res(im);im.onerror=()=>res(null);im.src=n+"?v=3"})),Promise.resolve(null));
  Promise.all(ME.photos.map(tryLoad)).then(r=>{
    list=r.filter(Boolean);if(!list.length)return;
    $("ini").hidden=true;
    list.forEach((im,k)=>{im.alt="Photo "+(k+1)+" of Keith Marten Alaan";box.appendChild(im);
      const d=document.createElement("button");d.setAttribute("aria-label","Show photo "+(k+1));d.onclick=()=>go(k);dots.appendChild(d)});
    const l=document.createElement("link");l.rel="icon";l.href=list[0].src;document.head.appendChild(l);
    if(list.length<2){$("prev").hidden=true;$("next").hidden=true}
    show(0);auto()});
  $("prev").onclick=()=>go(cur-1);$("next").onclick=()=>go(cur+1);
  fr.addEventListener("mouseenter",()=>clearInterval(timer));fr.addEventListener("mouseleave",auto);
  let sx=null;fr.addEventListener("pointerdown",e=>{sx=e.clientX});
  fr.addEventListener("pointerup",e=>{if(sx===null)return;const dx=e.clientX-sx;sx=null;if(Math.abs(dx)>40)go(cur+(dx<0?1:-1))});
  fr.addEventListener("keydown",e=>{if(e.key==="ArrowLeft")go(cur-1);else if(e.key==="ArrowRight")go(cur+1)});
})();

// ---- welcome buttons + greeting ----
$("seePhoto").onclick=()=>openWin("w-photo");
$("seeShop").onclick=()=>{openWin("w-shop");confetti(120,DNPCOLS)};
$("hi").onclick=()=>{confetti(160);toast("Hi! Thanks for visiting.")};
(function(){const el=$("greet");let g=0,c=0,d=false;
  if(reduce){el.textContent=ME.greetings[0]+"!";return}
  (function t(){const w=ME.greetings[g];el.textContent=w.slice(0,c)+(c===w.length&&!d?"!":"");
    let ms=d?45:110;if(!d&&c===w.length){d=true;ms=1400}else if(d&&c===0){d=false;g=(g+1)%ME.greetings.length;ms=250}else c+=d?-1:1;
    setTimeout(t,ms)})()})();

// ---- contact ----
$("copy").onclick=async()=>{try{await navigator.clipboard.writeText(ME.email);toast("Email copied")}catch(e){toast("Copy this email: "+ME.email)}};

// ---- facts ----
let fi=-1;$("nf").onclick=()=>{fi=(fi+1)%ME.facts.length;$("fact").textContent=ME.facts[fi]};

// ---- skills ----
ME.skills.forEach(s=>$("skills").insertAdjacentHTML("beforeend",`<div class="skill"><div class="top"><span>${s.n}</span><span>${s.v}%</span></div><div class="bar"><i data-w="${s.v}"></i></div></div>`));

// ---- hobbies ----
ME.interests.forEach(it=>{const b=document.createElement("button");b.className="chip";b.textContent=it.n;b.setAttribute("aria-pressed","false");
  b.onclick=()=>{document.querySelectorAll(".chip").forEach(x=>x.setAttribute("aria-pressed",x===b));$("detail").textContent=it.t};
  $("chips").appendChild(b)});

// ---- truths ----
let done=false;ME.truths.forEach(t=>{const b=document.createElement("button");b.className="opt";b.textContent=t.t;
  b.onclick=()=>{if(done)return;done=true;document.querySelectorAll("#opts .opt").forEach((o,i)=>{o.disabled=true;o.classList.add(ME.truths[i].lie?"right":"wrong")});
    $("fb").textContent=t.lie?"Correct! You found the lie.":"Not quite. The green one is the lie.";if(t.lie)confetti()};
  $("opts").appendChild(b)});

// ---- projects ----
ME.projects.forEach(p=>{const d=document.createElement("article");d.className="pr";d.innerHTML="<h3></h3><p></p><div class='tags'></div>";
  d.querySelector("h3").textContent=p.t;d.querySelector("p").textContent=p.x;
  p.tags.forEach(t=>{const s=document.createElement("span");s.textContent=t;d.querySelector(".tags").appendChild(s)});if(p.app){const b=document.createElement("button");b.className="btn";b.textContent="Open app";b.onclick=()=>openWin(p.app);d.appendChild(b)}$("proj").appendChild(d)});

// ---- star game ----
let sc=0,best=0,left=15,tm=null,play=false;const star=$("star"),ar=$("arena");
const mv=()=>{star.style.left=Math.random()*(ar.clientWidth-56)+"px";star.style.top=Math.random()*(ar.clientHeight-56)+"px"};
$("start").onclick=()=>{if(play)return;play=true;sc=0;left=15;$("score").textContent=0;$("time").textContent=left;star.style.display="block";mv();$("start").textContent="Playing...";
  tm=setInterval(()=>{left--;$("time").textContent=left;if(left<=0){clearInterval(tm);play=false;star.style.display="none";
    if(sc>best){best=sc;$("best").textContent=best;if(sc>0)confetti()}$("start").textContent="Play again";toast("Time’s up! You caught "+sc+" stars.")}},1000)};
star.onclick=()=>{if(!play)return;sc++;$("score").textContent=sc;mv()};

// ---- drop n' puff: flash, vibe finder, zap reflex, puff slots ----
function zapFlash(){if(reduce)return;const f=$("flash");f.classList.remove("go");void f.offsetWidth;f.classList.add("go")}
$("goBr").onclick=()=>openWin("w-branches");$("goStore").onclick=()=>openWin("w-store");$("goVibe").onclick=()=>openWin("w-vibe");$("goZap").onclick=()=>openWin("w-zap");$("goSlots").onclick=()=>openWin("w-slots");

ME.vibes.forEach(v=>{const b=document.createElement("button");b.className="chip";b.textContent=v.e+" "+v.n;b.setAttribute("aria-pressed","false");
  b.onclick=()=>{document.querySelectorAll("#vibeBtns .chip").forEach(x=>x.setAttribute("aria-pressed",x===b));
    $("vibeOut").textContent="Your vibe: "+v.n+". "+v.t+" Ask the shop about: "+v.f+".";confetti(40,DNPCOLS)};
  $("vibeBtns").appendChild(b)});

let zst="idle",zt0=0,zto=null,zbest=0;const zb=$("zapBtn");
zb.onclick=()=>{
  if(zst==="idle"){zst="wait";zb.className="zap wait";zb.textContent="Wait for the bolt...";$("zmsg").textContent="Don't click yet.";
    zto=setTimeout(()=>{zst="go";zt0=performance.now();zb.className="zap go";zb.textContent="⚡ CLICK NOW!"},1200+Math.random()*2800)}
  else if(zst==="wait"){clearTimeout(zto);zst="idle";zb.className="zap";zb.textContent="Too early! Click to try again";$("zmsg").textContent="Wait until the box turns yellow."}
  else{const ms=Math.round(performance.now()-zt0);zst="idle";zb.className="zap";zb.textContent=ms+" ms. Click to go again";$("zlast").textContent=ms;
    $("zmsg").textContent=ms<220?"Lightning fast!":ms<320?"Quick hands.":ms<450?"Solid. Try to beat it.":"Shake it off and go again.";
    if(!zbest||ms<zbest){zbest=ms;$("zbest").textContent=ms;if(ms<320){confetti(120,DNPCOLS);if(ms<220)zapFlash()}}}
};

const SYM=["⚡","☁️","🍓","🍋","🧊","🍉"];let pts=0,bestPts=0,spinning=false;
$("spin").onclick=()=>{if(spinning)return;spinning=true;$("spin").disabled=true;$("slotMsg").textContent="Spinning...";
  const reels=[...document.querySelectorAll(".reel")];reels.forEach(r=>r.classList.remove("hit"));
  const res=[];let n=0;
  reels.forEach((r,i)=>{const iv=setInterval(()=>{r.textContent=SYM[Math.random()*SYM.length|0]},70);
    setTimeout(()=>{clearInterval(iv);res[i]=SYM[Math.random()*SYM.length|0];r.textContent=res[i];if(++n===3)finish(res,reels)},800+i*500)})};
function finish(r,reels){
  spinning=false;$("spin").disabled=false;
  const same=r[0]===r[1]&&r[1]===r[2],pair=r[0]===r[1]||r[1]===r[2]||r[0]===r[2];let g=0,m="No match. Spin again!";
  if(same&&r[0]==="⚡"){g=25;m="⚡⚡⚡ MEGA JACKPOT! +25";confetti(260,DNPCOLS);zapFlash()}
  else if(same){g=10;m="JACKPOT! Three of a kind. +10";confetti(180,DNPCOLS)}
  else if(pair){g=2;m="Nice, a pair! +2"}
  if(g)reels.forEach(x=>x.classList.add("hit"));
  pts+=g;$("pts").textContent=pts;if(pts>bestPts){bestPts=pts;$("bestPts").textContent=bestPts}$("slotMsg").textContent=m}

// ---- DROP N' PUFF store app ----
const KU=ME.store,money=n=>KU.cur+n.toLocaleString(undefined,{minimumFractionDigits:0,maximumFractionDigits:2});
let cart=[];
KU.items.forEach(it=>{const d=document.createElement("div");d.className="ku-item";
  d.innerHTML='<span class="e" aria-hidden="true"></span><b></b><span class="pc"></span><div class="ctl"><select class="ku-sz" aria-label="Option"></select><button class="btn">Add to cart</button></div>';
  d.querySelector(".e").textContent=it.e;d.querySelector("b").textContent=it.n;d.querySelector(".pc").textContent=money(it.p);
  const sel=d.querySelector("select");it.o.forEach(s=>{const o=document.createElement("option");o.textContent=s;sel.appendChild(o)});
  d.querySelector(".btn").onclick=()=>{const k=it.n+"|"+sel.value,f=cart.find(x=>x.k===k);
    if(f)f.q++;else cart.push({k,n:it.n,s:sel.value,p:it.p,q:1});$("kuMsg").textContent="";drawCart();toast(it.n+" ("+sel.value+") added")};
  $("kuItems").appendChild(d)});
function drawCart(){
  const box=$("kuCart");box.textContent="";
  if(!cart.length){box.textContent="Your cart is empty.";$("kuForm").hidden=true;return}
  let total=0;
  cart.forEach(x=>{total+=x.p*x.q;const r=document.createElement("div");r.className="cl";
    r.innerHTML='<span></span><span class="q"><button aria-label="Remove one">−</button><b></b><button aria-label="Add one">+</button></span>';
    r.firstChild.textContent=x.n+" ("+x.s+") "+money(x.p*x.q);
    r.querySelector("b").textContent=x.q;
    const [m,p]=r.querySelectorAll("button");
    m.onclick=()=>{x.q--;if(x.q<=0)cart=cart.filter(y=>y!==x);drawCart()};
    p.onclick=()=>{x.q++;drawCart()};
    box.appendChild(r)});
  const t=document.createElement("div");t.className="ctot";t.innerHTML="<span>Total</span><span></span>";t.lastChild.textContent=money(total);box.appendChild(t);
  $("kuForm").hidden=false;
}
$("kuPlace").onclick=()=>{
  const name=$("kuName").value.trim();
  if(!cart.length)return;
  if(!name){$("kuMsg").textContent="Please type your name to place the order.";$("kuName").focus();return}
  if(!$("kuAge").checked){$("kuMsg").textContent="Please confirm you are 18 or older to place the order.";$("kuAge").focus();return}
  const total=cart.reduce((a,x)=>a+x.p*x.q,0),no="DNP-"+Math.floor(1000+Math.random()*9000);
  $("kuMsg").textContent="Thanks, "+name+"! Order "+no+" is placed. Total "+money(total)+" ("+$("kuPay").value+"). Pickup at "+$("kuBranch").value+".";
  cart=[];$("kuName").value="";$("kuAge").checked=false;drawCart();confetti(140,DNPCOLS);
};
drawCart();

// ---- business calculator app ----
const BZ=[
  {h:"Assets",f:[["a","Cash"],["a","Inventory"],["a","Equipment"],["a","Money owed to you"]]},
  {h:"Liabilities",f:[["l","Loans"],["l","Bills to pay"],["l","Other debts"]]},
  {h:"This month",f:[["r","Revenue (sales)"],["x","Expenses"]]}
];
const bzIn=[];
BZ.forEach(g=>{const h3=document.createElement("h3");h3.textContent=g.h;$("bizForm").appendChild(h3);
  g.f.forEach(([t,n])=>{const l=document.createElement("label");l.className="fld";l.innerHTML="<span></span><input type='number' min='0' step='any' inputmode='decimal'>";
    l.firstChild.textContent=n;const i=l.querySelector("input");i.oninput=bizCalc;bzIn.push({t,i});$("bizForm").appendChild(l)})});
function bizCalc(){
  const s={a:0,l:0,r:0,x:0};bzIn.forEach(o=>s[o.t]+=Math.max(0,parseFloat(o.i.value)||0));
  const eq=s.a-s.l,np=s.r-s.x,dr=s.a>0?s.l/s.a*100:0,out=$("bizOut");out.textContent="";
  const row=(l,v,c,k)=>{const d=document.createElement("div");d.className="res"+(k?" key":"");d.innerHTML="<span></span><span></span>";d.firstChild.textContent=l;d.lastChild.textContent=v;if(c)d.lastChild.className=c;out.appendChild(d)};
  row("Total assets",money(s.a));row("Total liabilities",money(s.l));
  row("Equity (assets − liabilities)",money(eq),eq<0?"neg":"pos",1);
  row("Net profit (revenue − expenses)",money(np),np<0?"neg":"pos",1);
  row("Debt ratio",dr.toFixed(1)+"%");
  const m=document.createElement("p");m.className="small cap";
  m.textContent=s.a+s.l+s.r+s.x===0?"Enter some numbers to see your results.":(eq<0?"Liabilities are higher than assets.":"Assets cover all liabilities.")+" "+(np<0?"Expenses are higher than revenue.":"The business is making a profit.");
  out.appendChild(m);
}
$("bizReset").onclick=()=>{bzIn.forEach(o=>o.i.value="");bizCalc()};
bizCalc();

// ---- branches ----
const BR=ME.branches,brEls=[];
const hr12=h=>(h%12||12)+(h<12?"am":"pm");
function manilaMins(){const p=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Manila",hour:"2-digit",minute:"2-digit",hour12:false}).formatToParts(new Date());
  return (+p.find(x=>x.type==="hour").value%24)*60+ +p.find(x=>x.type==="minute").value}
const isOpen=(b,m)=>m>=b.o*60&&m<b.c*60;
function brStatus(){const m=manilaMins();let n=0;
  BR.forEach((b,i)=>{const open=isOpen(b,m),soon=open&&b.c*60-m<=60;if(open)n++;const el=brEls[i].st;
    el.className="st "+(open?"on":"off");
    el.textContent=open?(soon?"Closing soon at ":"Open now · closes ")+hr12(b.c):"Closed · opens "+hr12(b.o)});
  $("brClock").textContent=n+" of "+BR.length+" branches open right now (Cebu time)"}
$("brTitle").textContent=BR.length+" branches across Cebu";
BR.forEach(b=>{const d=document.createElement("article");d.className="br";
  d.innerHTML='<h3></h3><span class="st"></span><p class="ad"></p><p class="hh"></p><div class="row"><a class="btn" target="_blank" rel="noopener noreferrer">Facebook</a><a class="btn dark" target="_blank" rel="noopener noreferrer">Directions</a></div>';
  d.querySelector("h3").textContent="Drop N' Puff - "+b.n;
  d.querySelector(".ad").textContent="📍 "+b.a;
  d.querySelector(".hh").textContent="⏱️ Store hours "+hr12(b.o)+" - "+hr12(b.c);
  const [fb,dr]=d.querySelectorAll("a");fb.href="https://www.facebook.com/"+b.fb;
  dr.href="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent("Drop N' Puff "+b.n+", "+b.a);
  $("brList").appendChild(d);brEls.push({el:d,st:d.querySelector(".st")});
  const o=document.createElement("option");o.textContent="Drop N' Puff - "+b.n;$("kuBranch").appendChild(o)});
brStatus();setInterval(brStatus,30000);
$("brPick").onclick=()=>{const m=manilaMins();let ids=BR.map((b,i)=>i).filter(i=>isOpen(BR[i],m));if(!ids.length)ids=BR.map((b,i)=>i);
  const i=ids[Math.random()*ids.length|0];brEls.forEach(x=>x.el.classList.remove("pick"));brEls[i].el.classList.add("pick");
  brEls[i].el.scrollIntoView({behavior:reduce?"auto":"smooth",block:"nearest"});toast("Try Drop N' Puff - "+BR[i].n);confetti(60,DNPCOLS)};

// ---- sparks ----
let sparks=!reduce&&!coarse,lastSp=0;
const setSp=()=>$("mbSparks").textContent="Sparks: "+(sparks?"on":"off");setSp();
$("mbSparks").onclick=()=>{sparks=!sparks;setSp();toast(sparks?"Sparks on":"Sparks off")};
addEventListener("pointermove",e=>{if(!sparks||e.pointerType!=="mouse")return;const t=performance.now();if(t-lastSp<70)return;lastSp=t;
  const s=document.createElement("span");s.className="spark";s.textContent="⚡";s.style.left=e.clientX+"px";s.style.top=e.clientY+"px";
  s.style.setProperty("--dx",(Math.random()*30-15)+"px");document.body.appendChild(s);setTimeout(()=>s.remove(),700)});

// ---- terminal ----
const out=$("tout");
const cmds={
  help:()=>"Commands: shop, branches, store, biz, vibe, zap, slots, about, skills, hobbies, projects, email, photo, game, wallpaper, confetti, whoami, date, clear",
  about:()=>ME.about,
  skills:()=>ME.skills.map(s=>s.n+": "+s.v+"%").join("\n"),
  hobbies:()=>ME.interests.map(i=>i.n).join(", "),
  projects:()=>ME.projects.map(p=>"- "+p.t).join("\n"),
  email:()=>ME.email,
  whoami:()=>ME.full,
  date:()=>new Date().toDateString(),
  shop:()=>{openWin("w-shop");return "Opening "+ME.shop.name+". "+ME.shop.tag+"."},
  branches:()=>{openWin("w-branches");return BR.map(b=>"- "+b.n+": "+hr12(b.o)+" - "+hr12(b.c)).join("\n")},
  store:()=>{openWin("w-store");return "Opening the DROP N' PUFF store..."},
  biz:()=>{openWin("w-biz");return "Opening the business calculator..."},
  vibe:()=>{openWin("w-vibe");return "Opening the vibe finder..."},
  zap:()=>{openWin("w-zap");return "Opening zap reflex..."},
  slots:()=>{openWin("w-slots");return "Opening puff slots..."},
  photo:()=>{openWin("w-photo");return "Opening keith.jpg..."},
  game:()=>{openWin("w-game");return "Opening the star game..."},
  wallpaper:()=>{cycleWall();return "Wallpaper changed."},
  confetti:()=>{confetti(180);return "Party time!"}
};
function print(t){out.textContent+=t+"\n";$("termBox").scrollTop=$("termBox").scrollHeight}
function runCmd(c){
  c=c.trim().toLowerCase();if(!c)return;
  print("keith@os:~$ "+c);
  if(c==="clear"){out.textContent="";return}
  print(cmds[c]?cmds[c]():"Command not found: "+c+". Type help to see what you can do.");
}
print("Welcome to Keith OS. Type help to start.");
$("tin").addEventListener("keydown",e=>{if(e.key==="Enter"){runCmd($("tin").value);$("tin").value=""}});
$("termBox").addEventListener("click",()=>$("tin").focus());

// ---- easter egg ----
let ty="";addEventListener("keydown",e=>{if(e.key.length!==1||/input|textarea/i.test(e.target.tagName))return;
  ty=(ty+e.key.toLowerCase()).slice(-12);
  if(ty.endsWith("dropnpuff")){confetti(300,DNPCOLS);zapFlash();toast("⚡ DROP N' PUFF secret unlocked!");ty=""}
  else if(ty.endsWith(ME.first.toLowerCase())){confetti(260);toast("You found the secret. Nice one!");ty=""}});

// ---- confetti ----
const cv=$("fx"),cx=cv.getContext("2d");let ps=[],run=false;
const sz=()=>{cv.width=innerWidth;cv.height=innerHeight};addEventListener("resize",sz);sz();
const DNPCOLS=["#FFB800","#000000","#ffffff","#FFE45C","#FFB800"];
function confetti(n=90,cols=["#FFE45C","#FF9CC2","#7DF0C4","#8EC9FF","#ffffff"]){if(reduce)return;
  for(let i=0;i<n;i++)ps.push({x:innerWidth/2,y:innerHeight*.55,vx:(Math.random()-.5)*17,vy:-Math.random()*15-4,s:Math.random()*8+4,c:cols[i%cols.length],r:Math.random()*6,l:110});
  if(!run){run=true;requestAnimationFrame(loop)}}
function loop(){cx.clearRect(0,0,cv.width,cv.height);ps=ps.filter(p=>p.l>0);
  ps.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.4;p.r+=.2;p.l--;cx.save();cx.translate(p.x,p.y);cx.rotate(p.r);cx.fillStyle=p.c;cx.strokeStyle="#1A1033";cx.lineWidth=1;cx.fillRect(-p.s/2,-p.s/4,p.s,p.s/2);cx.strokeRect(-p.s/2,-p.s/4,p.s,p.s/2);cx.restore()});
  if(ps.length)requestAnimationFrame(loop);else run=false}

// ---- open the first windows automatically ----
openWin("w-welcome");openWin("w-photo");focusWin("w-welcome");
