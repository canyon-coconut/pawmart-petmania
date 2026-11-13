
const FALLBACK = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="800" height="600" fill="#B1CDEE"/><g fill="#002842" opacity="0.55"><ellipse cx="400" cy="330" rx="90" ry="74"/><circle cx="272" cy="252" r="38"/><circle cx="352" cy="206" r="43"/><circle cx="452" cy="200" r="43"/><circle cx="534" cy="248" r="38"/></g><text x="400" y="470" font-family="Georgia,serif" font-size="30" fill="#002842" text-anchor="middle">PawMart</text></svg>');
function imgFallback(el){ el.onerror=null; el.src=FALLBACK; }

const U = id => 'https://images.unsplash.com/' + id + '?auto=format&fit=crop&w=800&q=60';
const PRODUCTS = [
 {id:1, name:'Northpaw Premium Chicken Kibble 5kg', cat:'dogs', catLabel:'Dogs', price:24.99, rating:4.9, reviews:212, badge:'Bestseller', img:'images/p01.jpg', alt:'Northpaw green bag of premium chicken kibble with a bowl of kibble', desc:"A complete everyday food for adult dogs, with real chicken as the first ingredient and no artificial colours. Includes rice, vegetables and fish oil for a shiny coat.", specs:[["Weight", "5 kg"], ["For", "Adult dogs"], ["Protein", "26%"], ["Flavour", "Chicken & rice"]]},
 {id:2, name:'Northpaw Grain-Free Salmon Kibble 4kg', cat:'dogs', catLabel:'Dogs', price:29.50, was:34.99, rating:4.8, reviews:167, badge:'', img:'images/p02.jpg', alt:'Northpaw orange bag of grain-free salmon kibble with kibble in front', desc:"Grain-free and gentle on sensitive stomachs, made with salmon, sweet potato and peas. A good pick for dogs that itch on wheat-based foods.", specs:[["Weight", "4 kg"], ["Recipe", "Grain-free"], ["Protein", "28%"], ["Flavour", "Salmon & sweet potato"]]},
 {id:3, name:'Braided Rope Tug Toy', cat:'dogs', catLabel:'Dogs', price:9.99, rating:4.7, reviews:98, badge:'New', img:'images/p03.jpg', alt:'Colourful braided rope tug toy', desc:"Hand-braided from colourful cotton rope with two chunky knots. Built for proper games of tug and for chewing between games \u2014 and it machine-washes when it gets grubby.", specs:[["Length", "38 cm"], ["Material", "Cotton rope"], ["For", "Medium & large dogs"], ["Care", "Machine washable"]]},
 {id:4, name:'Orthopedic Dog Bed — Large', cat:'dogs', catLabel:'Dogs', price:39.99, was:49.99, rating:4.9, reviews:301, badge:'Save 20%', sale:true, img:'images/p04.jpg', alt:'Round grey orthopedic dog bed', desc:"A thick memory-foam base that takes the pressure off hips and elbows \u2014 the bed older dogs and big breeds actually sink into. The cover unzips and washes.", specs:[["Size", "100 \u00d7 70 cm (Large)"], ["Fill", "Memory foam"], ["Cover", "Removable, washable"], ["For", "Large & senior dogs"]]},
 {id:5, name:'Self-Cleaning Litter Box', cat:'cats', catLabel:'Cats', price:89.99, was:109.99, rating:4.8, reviews:256, badge:'Bestseller', img:'images/p05.jpg', alt:'Enclosed self-cleaning cat litter box', desc:"An enclosed automatic litter box that rakes itself clean after every visit, so the tray never sits dirty. The hood keeps smells in and litter off the floor.", specs:[["Type", "Self-cleaning, enclosed"], ["For", "Cats up to 8 kg"], ["Power", "Mains, low voltage"], ["Litter", "Standard clumping"]]},
 {id:6, name:'Feather Wand Toy', cat:'cats', catLabel:'Cats', price:8.50, rating:4.6, reviews:74, badge:'', img:'images/p06.jpg', alt:'Feather wand cat toy with bright feathers', desc:"Natural feathers on a smooth wooden wand \u2014 the toy that turns even a lazy indoor cat into a hunter for ten minutes. Light, quiet and kind to furniture.", specs:[["Length", "45 cm"], ["Materials", "Wood, natural feathers"], ["For", "Cats & kittens"]]},
 {id:7, name:'Northpaw Indoor Cat Dry Food 3kg', cat:'cats', catLabel:'Cats', price:21.25, rating:4.8, reviews:189, badge:'', img:'images/p07.jpg', alt:'Northpaw teal bag of indoor cat food with a bowl of kibble', desc:"A lighter recipe for cats that live indoors, with added fibre to help hairballs pass and a taste picky cats accept. Complete and balanced for daily feeding.", specs:[["Weight", "3 kg"], ["For", "Indoor adult cats"], ["Protein", "30%"], ["Plus", "Hairball control"]]},
 {id:8, name:'Window Perch Bed', cat:'cats', catLabel:'Cats', price:27.99, rating:4.7, reviews:143, badge:'New', img:'images/p08.jpg', alt:'Cat window hammock perch mounted on a window', desc:"A fabric hammock that fixes to the window with strong suction cups, giving your cat a sunny seat with a view. The cover comes off for washing.", specs:[["Size", "55 \u00d7 35 cm"], ["Holds", "Up to 15 kg"], ["Fitting", "Suction cups, no tools"], ["Cover", "Washable"]]},
 {id:9, name:'Harbor & Hound Puppy Shampoo 500ml', cat:'care', catLabel:'Care & Home', price:11.25, rating:4.9, reviews:178, badge:'', img:'images/p09.jpg', alt:'Harbor & Hound amber pump bottle of gentle puppy shampoo', desc:"A mild, tear-free shampoo made for puppies and sensitive skin, pH-balanced for dogs. Lightly scented, never perfumed \u2014 and far gentler than human shampoo.", specs:[["Size", "500 ml"], ["For", "Puppies & sensitive skin"], ["pH", "Balanced for dogs"], ["Scent", "Light, natural"]]},
 {id:10, name:'Northpaw Dental Chew Sticks — 28 Pack', cat:'care', catLabel:'Care & Home', price:13.40, was:16.99, rating:4.7, reviews:264, badge:'', img:'images/p10.jpg', alt:'Northpaw coral pouch of dental chew sticks with sticks beside it', desc:"One stick a day helps scrub plaque and tartar as your dog chews, and keeps breath fresher. This pack holds 28 sticks \u2014 a full month for one dog.", specs:[["Pack", "28 sticks"], ["Use", "1 per day"], ["For", "Adult dogs"], ["Flavour", "Chicken"]]},
 {id:11, name:'Hand-Knit Dog Sweater', cat:'dogs', catLabel:'Dogs', price:18.99, rating:4.8, reviews:342, badge:'Bestseller', img:'images/p11.jpg', alt:'Grey hand-knitted dog sweater laid flat', desc:"Hand-knitted from a soft wool blend to keep small dogs warm on winter walks. Stretchy ribbed neck, and leg holes shaped so they do not rub.", specs:[["Size", "Small (chest 30\u201338 cm)"], ["Material", "Wool blend"], ["Care", "Hand wash"], ["For", "Small dogs"]]},
 {id:12, name:'Washable Calming Blanket', cat:'care', catLabel:'Care & Home', price:19.95, rating:4.6, reviews:87, badge:'', img:'images/p12.jpg', alt:'Folded stack of plaid calming blankets', desc:"A soft plaid fleece blanket whose gentle weight settles anxious dogs at fireworks, travel and bedtime. Machine washable and quick to dry.", specs:[["Size", "100 \u00d7 75 cm"], ["Material", "Soft fleece"], ["Care", "Machine washable"], ["Colour", "Brown plaid"]]},
  {id:13, name:'Cat Scratching Post', cat:'cats', catLabel:'Cats', price:24.99, rating:4.8, reviews:203, badge:'New', img:'images/p13.jpg', alt:'Sisal cat scratching post with a hanging ball toy', desc:"A tall sisal-wrapped post with a sturdy platform on top and a hanging ball for play. Gives claws a proper place to go \u2014 not your sofa.", specs:[["Height", "60 cm"], ["Material", "Natural sisal, wood"], ["Base", "Non-slip"], ["Assembly", "Tool-free"]]},
  {id:14, name:'Leather Collar & Leash Set', cat:'dogs', catLabel:'Dogs', price:16.50, rating:4.9, reviews:158, badge:'', img:'images/p14.jpg', alt:'Brown leather dog collar and leash set', desc:"A matching collar and lead in real brown leather with brass fittings that will not rust. The leather softens with use and lasts for years.", specs:[["Collar", "Adjustable 30\u201345 cm"], ["Leash", "120 cm"], ["Material", "Leather, brass"], ["For", "Medium dogs"]]},
  {id:15, name:'Pet Drinking Fountain', cat:'care', catLabel:'Care & Home', price:34.99, was:44.99, rating:4.7, reviews:231, badge:'Bestseller', img:'images/p15.jpg', alt:'White pet drinking water fountain with running water', desc:"A quiet 2-litre fountain that keeps water moving, so cats and dogs drink more and the water stays fresh. One filter included \u2014 change it monthly.", specs:[["Capacity", "2 litres"], ["Pump", "Quiet, USB"], ["Filter", "1 included"], ["For", "Cats & small dogs"]]},
  {id:16, name:'Harbor & Hound Wild Salmon Oil — 250ml', cat:'care', catLabel:'Care & Home', price:14.25, rating:4.8, reviews:119, badge:'', img:'images/p16.jpg', alt:'Harbor & Hound amber pump bottle of wild salmon oil', desc:"Wild salmon oil for skin and coat \u2014 a pump or two over food each day gives omega-3s that show as a glossier coat and less itching.", specs:[["Size", "250 ml"], ["Use", "1\u20132 pumps daily"], ["Source", "Wild salmon"], ["For", "Dogs & cats"]]},
{id:17, name:'Northpaw Salmon & Sweet Potato Kibble 4kg', cat:'dogs', catLabel:'Dogs', price:27.99, was:32.99, rating:4.7, reviews:58, badge:'', img:'images/p17w.jpg', alt:'Northpaw green bag of salmon and sweet potato kibble with a bowl of kibble', desc:"Salmon-first kibble with sweet potato and peas — the one we reach for when a dog needs protein without chicken. A firm favourite with the itchy-coat crowd.", specs:[["Weight", "4 kg"], ["Main protein", "Salmon"], ["Life stage", "Adult"]]},
{id:18, name:'Squeaky Plush Duck Toy', cat:'dogs', catLabel:'Dogs', price:7.99, rating:4.6, reviews:84, badge:'', img:'images/p18w.jpg', alt:'Yellow corduroy plush duck dog toy with an orange beak', desc:"A soft corduroy duck with a squeaker that isn't annoying — tested. For dogs who carry their toys from room to room.", specs:[["Material", "Corduroy plush"], ["Squeaker", "Yes"], ["Care", "Machine wash cold"]]},
{id:19, name:'Northpaw Tuna Pâté Wet Food — 12 Pack', cat:'cats', catLabel:'Cats', price:15.75, was:18.50, rating:4.8, reviews:97, badge:'', img:'images/p19w.jpg', alt:'Stack of Northpaw tuna pâté tins, the top one open', desc:"Smooth tuna pâté in single-serve tins. The food our fussiest counter critics — Pepper included — have never once walked away from.", specs:[["Pack size", "12 × 85 g"], ["Main protein", "Tuna"], ["Life stage", "Adult"]]},
{id:20, name:'Catnip Mouse Trio', cat:'cats', catLabel:'Cats', price:6.25, rating:4.7, reviews:143, badge:'', img:'images/p20w.jpg', alt:'Three plush catnip mice in grey, beige and pink', desc:"Three sturdy plush mice with real catnip inside and string tails that survive being carried around by them.", specs:[["Pack size", "3 mice"], ["Filling", "Catnip"], ["Material", "Plush fabric"]]},
{id:21, name:'Elevated Ceramic Cat Bowl', cat:'cats', catLabel:'Cats', price:13.99, rating:4.8, reviews:66, badge:'', img:'images/p21w.jpg', alt:'White ceramic cat bowl on a bamboo stand', desc:"A raised ceramic bowl on a bamboo stand — easier on necks and whiskers, and heavy enough not to travel across the floor.", specs:[["Material", "Ceramic + bamboo"], ["Capacity", "350 ml"], ["Care", "Bowl is dishwasher safe"]]},
{id:22, name:'Harbor & Hound Paw Balm — 60ml', cat:'care', catLabel:'Care & Home', price:9.75, was:12.25, rating:4.9, reviews:112, badge:'', img:'images/p22w.jpg', alt:'Harbor & Hound amber jar of paw balm', desc:"For dry, cracked paws after winter pavements and summer runs. Lick-safe, unscented, and a little goes a long way.", specs:[["Size", "60 ml"], ["Use", "Paws & nose"], ["Scent", "Unscented"]]},
{id:23, name:'Gentle Ear Cleaning Wipes — 50 Pack', cat:'care', catLabel:'Care & Home', price:8.99, rating:4.6, reviews:49, badge:'', img:'images/p23w.jpg', alt:'Harbor & Hound resealable pouch of ear cleaning wipes', desc:"Soft wipes for weekly ear clean-ups — no bottles, no wrestling. Gentle enough for cats, big enough for spaniel ears.", specs:[["Pack size", "50 wipes"], ["Use", "Ears"], ["Alcohol", "None"]]},
{id:24, name:'Calming Lavender Grooming Spray — 250ml', cat:'care', catLabel:'Care & Home', price:11.50, rating:4.7, reviews:73, badge:'', img:'images/p24w.jpg', alt:'Harbor & Hound amber spray bottle of calming grooming spray', desc:"A light lavender spray for brush-outs between baths. Keeps coats fresh and makes grooming a calmer job for everyone.", specs:[["Size", "250 ml"], ["Use", "Coat spray"], ["Scent", "Lavender"]]}
];
const FREE_OVER = 40, DELIVERY_FEE = 4.99;
const money = n => '$' + n.toFixed(2);
const starSVG = f => '<svg width="15" height="15" viewBox="0 0 24 24" fill="' + (f ? '#002842' : '#D5DDE5') + '"><path d="M12 2.6l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.5l-5.9 3.1 1.2-6.5L2.5 9.5l6.6-.9z"/></svg>';
function starsHTML(r){ let h=''; for(let i=1;i<=5;i++) h += starSVG(i <= Math.round(r)); return h; }
document.querySelectorAll('[data-stars]').forEach(el => { el.innerHTML = starsHTML(parseFloat(el.dataset.stars)); });

let filter='all', query='', sortBy='featured';
const cart = new Map();
const favs = new Set();
try{ (JSON.parse(localStorage.getItem('pawmart_favs')||'[]')).forEach(id=>favs.add(id)); }catch(e){}
let favOnly = false;
try{ (JSON.parse(localStorage.getItem('pawmart_cart')||'[]')).forEach(([k,v])=>cart.set(k,v)); }catch(e){}
const grid = document.getElementById('grid');

function visibleProducts(){
  let list = PRODUCTS.filter(p => (!favOnly || favs.has(p.id)) && (filter==='all' || p.cat===filter) && p.name.toLowerCase().includes(query));
  if(sortBy==='low') list = [...list].sort((a,b)=>a.price-b.price);
  if(sortBy==='high') list = [...list].sort((a,b)=>b.price-a.price);
  if(sortBy==='rating') list = [...list].sort((a,b)=>b.rating-a.rating);
  return list;
}
function addSlotHTML(id){
  const q = cart.get(id) || 0;
  if(!q) return '<button class="addbtn" data-add="' + id + '">Add to cart</button>';
  return '<span class="incart"><button type="button" data-dec-card="' + id + '" aria-label="One less">\u2212</button><span>In cart \u00b7 ' + q + '</span><button type="button" data-inc-card="' + id + '" aria-label="One more">+</button></span>';
}
function refreshCardStates(){
  document.querySelectorAll('.addslot').forEach(el => { el.innerHTML = addSlotHTML(parseInt(el.dataset.slot)); });
  document.querySelectorAll('[data-add-main]').forEach(b => {
    const id = parseInt(b.dataset.add); const q = cart.get(id) || 0;
    b.textContent = q ? ('In your cart \u00b7 ' + q + ' — add more') : 'Add to cart';
  });
}
function cardHTML(p){
  const badge = p.was ? `<span class="badge sale">Sale!</span>` : (p.badge ? `<span class="badge">${p.badge}</span>` : '');
  return `
   <article class="pcard">
     <button type="button" class="fav${favs.has(p.id)?' on':''}" data-fav="${p.id}" aria-pressed="${favs.has(p.id)}" aria-label="Save to favourites"><svg viewBox="0 0 24 24"><path d="M12 20.2S3.4 15.3 2.3 10.6C1.5 7.2 3.7 4.5 6.8 4.5c2 0 3.7 1.1 5.2 3.1 1.5-2 3.2-3.1 5.2-3.1 3.1 0 5.3 2.7 4.5 6.1C20.6 15.3 12 20.2 12 20.2z"/></svg></button>
     <a class="ph" href="product.html?id=${p.id}" aria-label="${p.name}"><img src="${p.img}" alt="${p.alt}" onerror="imgFallback(this)">${badge}</a>
     <div class="pname"><a href="product.html?id=${p.id}">${p.name}</a></div>
     <div class="stars">${starsHTML(p.rating)}<span>${p.rating} (${p.reviews})</span></div>
     <div class="price">${p.was ? `<s>${money(p.was)}</s>` : ''}${money(p.price)}</div>
     <span class="addslot" data-slot="${p.id}">${addSlotHTML(p.id)}</span>
   </article>`;
}
function render(){
  const list = visibleProducts();
  document.getElementById('resultCount').textContent = list.length + (list.length===1 ? ' product' : ' products');
  if(!list.length){ grid.innerHTML = favOnly ? '<div class="noresults">No favourites yet. Tap the heart on any product and it will wait for you here.</div>' : '<div class="noresults">No products match your search. Try a different word or category.</div>'; return; }
  grid.innerHTML = list.map(cardHTML).join('');
}
function renderFeatured(){
  const el = document.getElementById('featuredGrid'); if(!el) return;
  const best = PRODUCTS.filter(p=>p.badge==='Bestseller');
  const rest = PRODUCTS.filter(p=>p.badge!=='Bestseller').sort((a,b)=>b.rating-a.rating);
  el.innerHTML = [...best, ...rest].slice(0,8).map(cardHTML).join('');
}
document.addEventListener('click', e => {
  const fb = e.target.closest('[data-fav]');
  if(fb){ const fid = parseInt(fb.dataset.fav);
    if(favs.has(fid)){ favs.delete(fid); toast('Removed from favourites'); } else { favs.add(fid); toast('Saved to favourites'); }
    try{ localStorage.setItem('pawmart_favs', JSON.stringify([...favs])); }catch(err){}
    document.querySelectorAll('[data-fav="'+fid+'"]').forEach(x=>{ x.classList.toggle('on', favs.has(fid)); x.setAttribute('aria-pressed', favs.has(fid)); });
    if(favOnly && grid) render();
    return; }
  const stp = e.target.closest('[data-inc-card],[data-dec-card]');
  if(stp){ const sid = parseInt(stp.dataset.incCard || stp.dataset.decCard); setQty(sid, (cart.get(sid)||0) + (stp.hasAttribute('data-inc-card') ? 1 : -1)); return; }
  const b = e.target.closest('[data-add]'); if(!b) return;
  const id = parseInt(b.dataset.add);
  let n = 1;
  if(b.hasAttribute('data-add-main')){ const q = document.getElementById('pQty'); if(q) n = Math.max(1, parseInt(q.value)||1); }
  cart.set(id, (cart.get(id)||0)+n); syncCart();
  const prod = PRODUCTS.find(x=>x.id===id);
  toast((prod ? prod.name : 'Item') + ' added to your cart', {label:'View cart', fn:openCart});
  if(!b.hasAttribute('data-add-main')){ const old = b.textContent; b.textContent = 'Added \u2713'; b.classList.add('added'); setTimeout(()=>{ b.textContent = old; b.classList.remove('added'); }, 900); }
});
if(grid){
  const _sc = document.body.dataset.shopcat;
  if(_sc){ filter = _sc; document.querySelectorAll('.pill').forEach(el=>el.style.display='none'); }
  const _params = new URLSearchParams(location.search);
  if(_params.get('cat')){ filter = _params.get('cat'); document.querySelectorAll('[data-filter]').forEach(x=>x.classList.toggle('active', x.dataset.filter===filter)); }
  if(_params.get('fav')){ favOnly = true;
    document.title = 'Your favourites \u2014 PawMart';
    const _h1 = document.querySelector('.pagehead h1'); if(_h1) _h1.textContent = 'Your favourites';
    const _hp = document.querySelector('.pagehead p'); if(_hp) _hp.textContent = 'Everything you have hearted, in one place. Tap a heart again to take it off the list.';
    document.querySelectorAll('.mainnav a').forEach(a=>a.classList.remove('on'));
    const _hb = document.querySelector('a[aria-label="Your favourites"]'); if(_hb) _hb.classList.add('fav-on');
  }
  if(location.hash==='#search'){ const _si2 = document.getElementById('search'); if(_si2) setTimeout(()=>_si2.focus(), 60); }
  if(_params.get('q')){ query = _params.get('q').toLowerCase(); const _si = document.getElementById('search'); if(_si) _si.value = _params.get('q'); }
document.querySelectorAll('[data-filter]').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('active'));
  b.classList.add('active'); filter = b.dataset.filter; render();
}));

const _sb = document.getElementById('search'); if(_sb) _sb.addEventListener('input', e => { query = e.target.value.trim().toLowerCase(); render(); });
document.getElementById('sort').addEventListener('change', e => { sortBy = e.target.value; render(); });
  render();
}

function cartTotals(){
  let count=0, sub=0;
  cart.forEach((qty,id)=>{ const p=PRODUCTS.find(x=>x.id===id); count+=qty; sub+=p.price*qty; });
  const del = count===0 ? 0 : (sub>=FREE_OVER ? 0 : DELIVERY_FEE);
  return {count, sub, del, total: sub+del};
}
function addToCart(id){ cart.set(id, (cart.get(id)||0)+1); syncCart(); toast('Added to cart'); }
function setQty(id, qty){ if(qty<=0) cart.delete(id); else cart.set(id, qty); syncCart(); }
function syncCart(){
  try{ localStorage.setItem('pawmart_cart', JSON.stringify([...cart])); }catch(e){}
  const t = cartTotals();
  const _cc = document.getElementById('cartCount'); _cc.textContent = t.count; _cc.style.display = t.count ? 'grid' : 'none';
  const box = document.getElementById('drawerItems');
  if(t.count===0){ box.innerHTML = '<div class="emptycart">Your cart is empty.<br>Add something your pet will love.</div>'; }
  else{
    box.innerHTML = [...cart.entries()].map(([id,qty])=>{ const p=PRODUCTS.find(x=>x.id===id); return `
     <div class="citem">
       <img src="${p.img}" alt="${p.alt}" onerror="imgFallback(this)">
       <div>
         <div class="nm">${p.name}</div>
         <div class="pr">${money(p.price)}</div>
         <div class="qty"><button data-dec="${id}" aria-label="Decrease quantity">−</button><span>${qty}</span><button data-inc="${id}" aria-label="Increase quantity">+</button></div>
       </div>
       <button class="rm" data-rm="${id}">Remove</button>
     </div>`; }).join('');
  }
  document.getElementById('subTotal').textContent = money(t.sub);
  document.getElementById('delTotal').textContent = t.count===0 ? '—' : (t.del===0 ? 'Free' : money(t.del));
  document.getElementById('grandTotal').textContent = money(t.total);
  const pct = Math.min(100, t.sub/FREE_OVER*100);
  document.getElementById('freeFill').style.width = pct + '%';
  refreshCardStates();
    document.getElementById('freeNote').textContent = t.sub>=FREE_OVER ? 'You have free delivery.' : ('Add ' + money(FREE_OVER - t.sub) + ' more for free delivery.');
  document.getElementById('goCheckout').disabled = t.count===0;
  document.getElementById('goCheckout').style.opacity = t.count===0 ? .5 : 1;
}
function animateRemove(id, el){
  const item = el ? el.closest('.citem') : null;
  if(!item || matchMedia('(prefers-reduced-motion: reduce)').matches){ setQty(id, 0); return; }
  item.style.height = item.offsetHeight + 'px';
  item.style.pointerEvents = 'none';
  requestAnimationFrame(()=>{ requestAnimationFrame(()=>item.classList.add('leaving')); });
  setTimeout(()=> setQty(id, 0), 280);
}
document.getElementById('drawerItems').addEventListener('click', e => {
  const inc = e.target.closest('[data-inc]'), dec = e.target.closest('[data-dec]'), rm = e.target.closest('[data-rm]');
  if(inc) setQty(parseInt(inc.dataset.inc), (cart.get(parseInt(inc.dataset.inc))||0)+1);
  if(dec){ const id=parseInt(dec.dataset.dec); if((cart.get(id)||0) <= 1) animateRemove(id, dec); else setQty(id, cart.get(id)-1); }
  if(rm) animateRemove(parseInt(rm.dataset.rm), rm);
});

const drawer = document.getElementById('drawer'), overlay = document.getElementById('overlay'), modal = document.getElementById('modal');
function openCart(){ drawer.classList.add('open'); overlay.classList.add('open'); }
function closeCart(){ drawer.classList.remove('open'); overlay.classList.remove('open'); }
document.getElementById('openCart').addEventListener('click', openCart);
document.getElementById('closeCart').addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);

let payMethod = 'Cash on delivery';
document.querySelectorAll('.payopt').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('.payopt').forEach(x=>x.classList.remove('sel'));
  b.classList.add('sel'); payMethod = b.dataset.pay;
}));
function renderSummary(){
  const t = cartTotals();
  document.getElementById('sumBox').innerHTML = [...cart.entries()].map(([id,qty])=>{ const p=PRODUCTS.find(x=>x.id===id); return `<div class="trow"><span>${p.name} \u00d7 ${qty}</span><span>${money(p.price*qty)}</span></div>`; }).join('')
    + `<div class="trow"><span>Delivery</span><span>${t.del===0 ? 'Free' : money(t.del)}</span></div><div class="trow total"><span>Total</span><span>${money(t.total)}</span></div>`;
}

document.getElementById('goCheckout').addEventListener('click', () => {
  const t = cartTotals(); if(t.count===0) return;
  closeCart();
  document.getElementById('checkoutFormWrap').style.display='block';
  document.getElementById('successWrap').style.display='none';
  renderSummary();
  modal.classList.add('open');
});
document.getElementById('closeModal').addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', e => { if(e.target===modal) modal.classList.remove('open'); });

function fieldOK(id, ok){ document.getElementById(id).classList.toggle('invalid', !ok); return ok; }
document.getElementById('coForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('inName').value.trim();
  const phone = document.getElementById('inPhone').value.replace(/[\s-]/g,'');
  const addr = document.getElementById('inAddr').value.trim();
  let ok = true;
  ok = fieldOK('f-name', name.length>=3) && ok;
  ok = fieldOK('f-phone', /^\+?\d{7,15}$/.test(phone)) && ok;
  ok = fieldOK('f-addr', addr.length>=8) && ok;
  if(!ok) return;
  const t = cartTotals();
  document.getElementById('ordNo').textContent = 'PM-2026-' + Math.floor(1000 + Math.random()*9000);
  document.getElementById('successDetail').textContent = 'Thank you, ' + name.split(' ')[0] + '. ' + t.count + (t.count===1 ? ' item' : ' items') + ' · ' + money(t.total) + ' · ' + payMethod + '. We will call ' + document.getElementById('inPhone').value.trim() + ' to confirm delivery to ' + addr + '.';
  document.getElementById('checkoutFormWrap').style.display='none';
  document.getElementById('successWrap').style.display='block';
  cart.clear(); syncCart();
});
document.getElementById('successClose').addEventListener('click', () => modal.classList.remove('open'));

let toastTimer;
function newsSubmit(e){
  e.preventDefault();
  var em=document.getElementById('newsEmail').value.trim();
  var msg=document.getElementById('newsMsg');
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){ msg.style.display='block'; msg.textContent='Please enter a valid email address.'; return false; }
  document.getElementById('newsForm').style.display='none';
  msg.style.display='block'; msg.textContent='Thank you — you are on the list. First tips email arrives at the start of next month.';
  return false;
}
function toast(msg, act){
  const t = document.getElementById('toast');
  t.innerHTML = '';
  const span = document.createElement('span'); span.textContent = msg; t.appendChild(span);
  if(act){ const b = document.createElement('button'); b.type='button'; b.className='toastact'; b.textContent = act.label; b.addEventListener('click', ()=>{ t.classList.remove('show'); act.fn(); }); t.appendChild(b); }
  t.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(()=>t.classList.remove('show'), act ? 4200 : 2600);
}

if(grid) render(); syncCart();

/* ---------- product page ---------- */
function renderProduct(){
  const main = document.getElementById('productMain'); if(!main) return;
  const id = parseInt(new URLSearchParams(location.search).get('id'));
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p){
    main.innerHTML = '<div class="notfound"><h1 class="sec">We could not find that product</h1><p>It may have sold out or the link is wrong.</p><a class="btn solid" href="shop.html" style="display:inline-block;text-decoration:none">Browse the shop</a></div>';
    return;
  }
  document.title = p.name + ' \u2014 PawMart';
  main.innerHTML = `
    <div class="crumbs"><a href="index.html">Home</a> \u203a <a href="shop.html">Shop</a> \u203a <a href="shop.html?cat=${p.cat}">${p.catLabel}</a> \u203a ${p.name}</div>
    <div class="pwrap">
      <img class="pimg" src="${p.img}" alt="${p.alt}" onerror="imgFallback(this)">
      <div class="pinfo">
        <div class="pcat">${p.catLabel}</div>
        <h1>${p.name}</h1>
        <div class="stars">${starsHTML(p.rating)}<span>${p.rating} (${p.reviews} reviews)</span></div>
        <div class="pprice" style="margin-top:12px">${p.was ? `<s>${money(p.was)}</s>` : ''}${money(p.price)}</div>
        <p class="pdesc">${p.desc||''}</p>
        <div class="specs">${(p.specs||[]).map(([k,v])=>`<div><span>${k}</span><strong>${v}</strong></div>`).join('')}</div>
        <div class="qtyrow">
          <span class="qty"><button type="button" onclick="var q=document.getElementById('pQty'); q.value=Math.max(1,(parseInt(q.value)||1)-1)" aria-label="One less">\u2212</button><input id="pQty" type="number" value="1" min="1" max="99" aria-label="Quantity"><button type="button" onclick="var q=document.getElementById('pQty'); q.value=Math.min(99,(parseInt(q.value)||1)+1)" aria-label="One more">+</button></span>
          <button class="addbtn bigadd" data-add="${p.id}" data-add-main>Add to cart</button>
        </div>
        <div class="pnotes">
          <span>Free delivery on orders over $40 \u2014 otherwise a flat $4.99.</span>
          <span>Order before 4pm and it leaves the shop today.</span>
          <span>30-day returns, no questions asked.</span>
        </div>
      </div>
    </div>`;
  const rel = document.getElementById('relGrid');
  if(rel){
    let others = PRODUCTS.filter(x=>x.cat===p.cat && x.id!==p.id);
    if(others.length<4) others = [...others, ...PRODUCTS.filter(x=>x.cat!==p.cat && x.id!==p.id)].slice(0,4);
    rel.innerHTML = others.slice(0,4).map(cardHTML).join('');
  }
  refreshCardStates();
}
renderFeatured();
renderProduct();
function renderDeals(){ document.querySelectorAll('#dealsGrid, #dealsGridHome').forEach(el => { const list = PRODUCTS.filter(p=>p.was); el.innerHTML = (el.id==='dealsGridHome' ? list.slice(0,4) : list).map(cardHTML).join(''); }); }
renderDeals();

/* scroll reveal */
document.documentElement.classList.add('js');
(function(){
  var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }); }, {threshold:.12});
  function watch(root){ root.querySelectorAll('.rv:not(.in)').forEach(function(el){ io.observe(el); }); }
  watch(document);
  new MutationObserver(function(ms){ ms.forEach(function(m){ m.addedNodes.forEach(function(n){ if(n.nodeType===1){ if(n.classList && n.classList.contains('rv')) io.observe(n); watch(n); } }); }); }).observe(document.body, {childList:true, subtree:true});
})();
