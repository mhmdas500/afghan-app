<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>ارسال پلاس</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<div id="ls" class="s a">
  <div class="b">
    <div class="lg">
      <svg viewBox="0 0 120 120" width="120" height="120">
        <defs><linearGradient id="gr1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#25D366"/><stop offset="100%" style="stop-color:#128C7E"/></linearGradient></defs>
        <circle cx="60" cy="60" r="55" fill="url(#gr1)"/>
        <path d="M60 25 L85 55 L70 55 L70 90 L50 90 L50 55 L35 55 Z" fill="#fff"/>
        <circle cx="60" cy="60" r="55" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="8 6"/>
      </svg>
    </div>
    <h1>ارسال پلاس</h1>
    <p class="v">نسخه ۱</p>
    <input id="lu" placeholder="👤 نام کاربری" autocomplete="off">
    <input id="lp" type="password" placeholder="🔒 رمز عبور" autocomplete="off">
    <button onclick="login()">ورود</button>
    <button class="lk" onclick="sup()">ثبت‌نام از طریق پشتیبانی</button>
    <p id="lm" class="m"></p>
  </div>
</div>

<div id="as" class="s">
  <header class="h">
    <div class="hd">
      <svg viewBox="0 0 120 120" width="35" height="35">
        <defs><linearGradient id="gr2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#25D366"/><stop offset="100%" style="stop-color:#128C7E"/></linearGradient></defs>
        <circle cx="60" cy="60" r="55" fill="url(#gr2)"/>
        <path d="M60 25 L85 55 L70 55 L70 90 L50 90 L50 55 L35 55 Z" fill="#fff"/>
      </svg>
      <span id="ht">کیف پول</span>
    </div>
    <button class="out" onclick="logout()">🚪 خروج</button>
  </header>
  <main id="mc"></main>
  <nav class="n">
    <button onclick="nav('wallet')" id="nw">💰<span>کیف پول</span></button>
    <button onclick="nav('products')" id="np">📦<span>محصولات</span></button>
    <button onclick="nav('transactions')" id="nt">🧾<span>معاملات</span></button>
    <button onclick="nav('users')" id="nu">👥<span>کاربران</span></button>
    <button onclick="nav('settings')" id="ns">⚙️<span>تنظیمات</span></button>
  </nav>
</div>

<div id="md" class="md hd"><div class="mb"><span class="mcl" onclick="cm()">✖</span><div id="mdc"></div></div></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="app.js"></script>
</body>
</html>*{box-sizing:border-box;margin:0;padding:0;font-family:Tahoma,sans-serif}
body{background:#f0f2f5;direction:rtl}
.s{display:none;min-height:100vh}.s.a{display:block}
.b{max-width:380px;margin:60px auto;background:#fff;padding:25px;border-radius:16px}
.lg{text-align:center;margin-bottom:10px}.lg svg{display:block;margin:0 auto}
.b h1{text-align:center;color:#25D366;margin:5px 0}
.v{text-align:center;color:#888;font-size:12px;margin-bottom:15px}
.b input{width:100%;padding:12px;margin:6px 0;border:1px solid #ddd;border-radius:10px;font-family:inherit}
.b button{width:100%;padding:12px;background:#25D366;color:#fff;border:none;border-radius:10px;font-size:15px;font-weight:bold;cursor:pointer;margin-top:10px}
.b .lk{background:transparent!important;color:#25D366!important;font-weight:normal!important;font-size:13px!important;border:1px dashed #25D366!important}
.m{text-align:center;font-size:13px;color:#d9534f;margin-top:10px;min-height:18px}
.h{background:#25D366;color:#fff;padding:14px;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;z-index:10}
.hd{display:flex;align-items:center;gap:8px}.h span{font-size:17px;font-weight:bold}
.out{background:rgba(255,255,255,.2);color:#fff;border:none;padding:6px 12px;border-radius:8px;font-size:12px;cursor:pointer}
#mc{padding:12px;padding-bottom:90px;max-width:600px;margin:auto}
.n{position:fixed;bottom:0;left:0;right:0;background:#fff;display:flex;border-top:1px solid #eee;padding:6px 0;z-index:10}
.n button{background:none;border:none;display:flex;flex-direction:column;align-items:center;gap:2px;font-size:20px;color:#888;cursor:pointer;padding:4px 6px;flex:1}
.n button span{font-size:10px}.n button.act{color:#25D366}
.c{background:#fff;border-radius:14px;padding:14px;margin-bottom:12px}
.c h3{color:#25D366;font-size:15px;margin-bottom:10px}
.r{display:flex;justify-content:space-between;padding:10px;border-bottom:1px solid #f0f0f0;font-size:14px}
.r:last-child{border-bottom:none}.amt{font-weight:bold;color:#25D366}
.ct{display:flex;align-items:center;gap:8px;margin:15px 5px 12px;font-size:15px;font-weight:bold;color:#0a5c8f}
.ct::before{content:'';width:10px;height:10px;border-radius:50%;background:#2196f3}
.ct::after{content:'';flex:1;height:1px;background:linear-gradient(to left,#2196f3,transparent)}
.pg{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
.pc{background:#fff;border-radius:12px;padding:8px 4px;text-align:center;cursor:pointer}
.pi{width:50px;height:50px;border-radius:50%;background:#e6f4ff;border:2px solid #cce7ff;display:flex;align-items:center;justify-content:center;margin:0 auto 6px;font-size:24px}
.pn{font-size:10px;line-height:1.3}
.pkg{background:#f0f4f9;border-radius:14px;padding:12px;margin-bottom:12px;display:flex;align-items:center;gap:12px;border:1px solid #e0e8f0;cursor:pointer}
.pkg-info{flex:1}.pkg-title{font-size:14px;font-weight:bold;margin-bottom:6px}
.pkg-buy{color:#d9534f;font-size:13px;margin-bottom:3px}
.pkg-sell{color:#25D366;font-size:13px}
.pkg-icon{width:55px;height:55px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0}
.back-btn{background:#e6f4ff;color:#0a5c8f;border:none;padding:8px 14px;border-radius:8px;font-size:13px;cursor:pointer;margin-bottom:10px;font-family:inherit}
.tx{background:#fff;border-radius:12px;padding:12px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center}
.ti h4{font-size:13px}.ti p{font-size:11px;color:#888}
.ta{font-weight:bold;font-size:14px}.ta.p{color:#25D366}.ta.n{color:#d9534f}
.bd{display:inline-block;padding:3px 8px;border-radius:20px;font-size:10px;font-weight:bold;margin-top:4px}
.bd.confirmed{background:#d4f5e0;color:#1a8a44}.bd.pending{background:#fff3cd;color:#856404}.bd.rejected{background:#f8d7da;color:#a4252c}
.txa{display:flex;gap:6px;margin-top:6px}
.txa button{background:#e6f4ff;color:#0a5c8f;border:none;padding:4px 8px;border-radius:6px;font-size:11px;cursor:pointer}
.filter{display:flex;gap:6px;margin-bottom:12px;overflow-x:auto;padding-bottom:4px}
.filter button{background:#fff;border:1px solid #ddd;color:#666;padding:6px 12px;border-radius:20px;font-size:12px;cursor:pointer;white-space:nowrap;font-family:inherit}
.filter button.act{background:#25D366;color:#fff;border-color:#25D366}
.ur{display:flex;align-items:center;padding:10px;border-bottom:1px solid #f0f0f0;font-size:13px}
.ur:last-child{border-bottom:none}
.ua{width:38px;height:38px;border-radius:50%;background:#25D366;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:bold}
.ui{flex:1;margin-right:10px}.ui h4{font-size:13px}.ui p{font-size:11px;color:#888}
.ut{font-size:10px;padding:2px 6px;border-radius:10px;background:#e7f5ec;color:#1a8a44}
.ut.w{background:#fff3cd;color:#856404}
.si{display:flex;justify-content:space-between;padding:14px 10px;border-bottom:1px solid #f0f0f0;cursor:pointer;font-size:14px}
.si:last-child{border-bottom:none}.si .ar{color:#ccc}
.md{position:fixed;inset:0;background:rgba(0,0,0,.5);display:flex;justify-content:center;align-items:center;z-index:100;padding:15px}
.md.hd{display:none}
.mb{background:#fff;border-radius:14px;padding:20px;max-width:380px;width:100%;max-height:85vh;overflow-y:auto;position:relative}
.mcl{position:absolute;top:10px;left:10px;cursor:pointer;color:#888;font-size:16px}
.mb h3{color:#25D366;margin-bottom:12px;font-size:16px}
.mb input,.mb select{width:100%;padding:10px;margin:6px 0;border:1px solid #ddd;border-radius:8px;font-family:inherit}
.mb button{width:100%;padding:11px;background:#25D366;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:bold;cursor:pointer;margin-top:8px;font-family:inherit}
.bp{background:#25D366;color:#fff;border:none;padding:11px;border-radius:8px;font-size:14px;font-weight:bold;cursor:pointer;width:100%;font-family:inherit;margin-top:8px}
.bs{background:#e6f4ff;color:#0a5c8f;border:none;padding:11px;border-radius:8px;font-size:14px;font-weight:bold;cursor:pointer;width:100%;font-family:inherit;margin-top:8px}
.ep{text-align:center;color:#999;padding:30px;font-size:13px}
.iv{background:#fff;border:2px dashed #25D366;border-radius:12px;padding:16px;font-size:13px}
.iv h4{text-align:center;color:#25D366;margin-bottom:10px}
.iv .rw{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #f0f0f0}
.iv .rw:last-child{border-bottom:none}
.iv .tt{font-weight:bold;color:#25D366;font-size:15px;margin-top:8px}
.iv .sp{text-align:center;font-size:11px;color:#888;margin-top:10px;border-top:1px dashed #ddd;padding-top:8px}
.wallet-card{background:linear-gradient(135deg,#7c4dff 0%,#651fff 100%);border-radius:24px;padding:22px 20px;margin-bottom:14px;color:#fff;position:relative;overflow:hidden;box-shadow:0 10px 25px rgba(101,31,255,.3)}
.wallet-card::before{content:'';position:absolute;top:-40px;left:-40px;width:150px;height:150px;border-radius:50%;background:rgba(255,255,255,.08)}
.wallet-card::after{content:'';position:absolute;bottom:-60px;right:-30px;width:180px;height:180px;border-radius:50%;border:1px dashed rgba(255,255,255,.15)}
.wallet-top{display:flex;justify-content:space-between;align-items:flex-start;position:relative;z-index:1}
.wallet-label{font-size:13px;opacity:.85;margin-bottom:6px}
.wallet-balance{font-size:26px;font-weight:bold;letter-spacing:.5px}
.wallet-icon{width:56px;height:56px;border-radius:50%;background:rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0}
.currency-selector{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.15);padding:8px 12px;border-radius:20px;margin-top:12px;font-size:13px;cursor:pointer;position:relative;z-index:1}
.currency-selector select{background:transparent;border:none;color:#fff;font-family:inherit;font-size:13px;font-weight:bold;outline:none;cursor:pointer;appearance:none;-webkit-appearance:none;padding-left:14px}
.currency-selector select option{color:#333;background:#fff}
.currency-selector .flag{font-size:18px}
.currency-selector::after{content:'⌄';margin-right:4px;font-size:16px}
.stat-card{background:#fff;border-radius:16px;padding:14px;display:flex;align-items:center;gap:12px;box-shadow:0 2px 10px rgba(0,0,0,.05)}
.stat-ic{width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0}
.stat-ic.green{background:#e7f9ee}.stat-ic.red{background:#fdeaea}.stat-ic.blue{background:#e7f0ff}.stat-ic.purple{background:#f0e7ff}.stat-ic.orange{background:#fff3e0}
.stat-info{flex:1}.stat-info .lbl{font-size:11px;color:#888;margin-bottom:3px}.stat-info .val{font-size:15px;font-weight:bold;color:#222}
.rates-card{background:#fff;border-radius:18px;padding:14px 16px;margin-bottom:12px;box-shadow:0 2px 10px rgba(0,0,0,.06)}
.rates-row{display:flex;justify-content:space-between;align-items:center;gap:10px}
.rates-left{display:flex;flex-direction:column;align-items:center;gap:4px;min-width:90px}
.rates-flag{font-size:32px;line-height:1}.rates-name{font-size:12px;color:#444;text-align:center;font-weight:bold}
.rates-mid{display:flex;gap:14px;flex:1;justify-content:center}
.rates-col{text-align:center}.rates-col .lbl{font-size:11px;color:#888;margin-bottom:3px}.rates-col .val{font-size:17px;font-weight:bold;color:#111}.rates-col .cur{font-size:10px;color:#888;margin-top:2px}
.rates-date{font-size:10px;color:#999;text-align:left;line-height:1.5;margin-top:8px;border-top:1px dashed #eee;padding-top:6px}
.rates-share-btn{width:100%;background:#1565c0;color:#fff;border:none;padding:16px;border-radius:14px;font-size:16px;font-weight:bold;cursor:pointer;font-family:inherit;margin-top:8px;box-shadow:0 4px 12px rgba(21,101,192,.3)}
.about-me{background:linear-gradient(135deg,#25D366 0%,#128C7E 100%);border-radius:20px;padding:20px;color:#fff;margin-bottom:12px;box-shadow:0 8px 20px rgba(37,211,102,.3)}
.about-me p{font-size:14px;line-height:1.9;margin-bottom:8px}
.about-me .dev{background:rgba(255,255,255,.2);border-radius:12px;padding:12px;text-align:center;font-weight:bold;margin-top:10px;font-size:13px}
/* ============ داده‌ها ============ */
var DB={users:[
{id:1,name:'مدیر',username:'12345678',phone:'09040670929',password:'09040670929',pin:'1234',type:'large_wholesale',wallets:{IRT:2500000,AFN:50000,TRY:15000,USD:800},buyToday:150000,buyTotal:2500000,sellToday:90000,sellTotal:1800000,profitToday:25000,profitTotal:350000,parentId:null},
{id:2,name:'تستی',username:'1234test',phone:'09000000000',password:'1234test',pin:'1234',type:'normal',wallets:{IRT:500000,AFN:10000,TRY:5000,USD:100},buyToday:50000,buyTotal:500000,sellToday:30000,sellTotal:300000,profitToday:10000,profitTotal:100000,parentId:1}
],
products:[
{id:201,name:'کارت شارژ افغانستان',cat:'telecom',icon:'🇦🇫',packages:[{qty:100,buy:15000,sell:18000},{qty:200,buy:28000,sell:32000},{qty:500,buy:68000,sell:75000},{qty:1000,buy:130000,sell:145000}]},
{id:202,name:'اینترنت افغانستان',cat:'telecom',icon:'🇦🇫',packages:[{qty:1,buy:20000,sell:23000},{qty:3,buy:55000,sell:62000}]},
{id:203,name:'کارت شارژ ایران',cat:'telecom',icon:'🇮🇷',packages:[{qty:1000,buy:18000,sell:20000},{qty:2000,buy:35000,sell:38000},{qty:5000,buy:85000,sell:92000},{qty:10000,buy:165000,sell:178000}]},
{id:204,name:'اینترنت ایران',cat:'telecom',icon:'🇮🇷',packages:[{qty:1,buy:22000,sell:25000},{qty:3,buy:60000,sell:68000}]},
{id:301,name:'کارت شارژ ترکیه',cat:'intl',icon:'🇹🇷',packages:[{qty:100,buy:40000,sell:44000},{qty:250,buy:95000,sell:105000},{qty:500,buy:185000,sell:200000}]},
{id:302,name:'اینترنت ترکیه',cat:'intl',icon:'🇹🇷',packages:[{qty:1,buy:45000,sell:50000},{qty:3,buy:125000,sell:138000}]},
{id:303,name:'کارت شارژ عراق',cat:'intl',icon:'🇮🇶',packages:[{qty:1000,buy:35000,sell:38000},{qty:5000,buy:165000,sell:180000}]},
{id:304,name:'کارت شارژ پاکستان',cat:'intl',icon:'🇵🇰',packages:[{qty:100,buy:30000,sell:33000},{qty:500,buy:140000,sell:155000}]},
{id:101,name:'ایمو',cat:'games',icon:'💎',packages:[{qty:50,buy:236000,sell:248000},{qty:100,buy:468000,sell:480000},{qty:200,buy:936000,sell:960000},{qty:300,buy:1404000,sell:1440000},{qty:400,buy:1872000,sell:1920000}]},
{id:102,name:'یوسی پابجی',cat:'games',icon:'🎮',packages:[{qty:60,buy:25000,sell:28000},{qty:325,buy:120000,sell:130000},{qty:660,buy:240000,sell:255000},{qty:1800,buy:640000,sell:670000}]},
{id:103,name:'نیروی دلتا',cat:'games',icon:'🕹️',packages:[{qty:100,buy:20000,sell:23000},{qty:500,buy:95000,sell:105000},{qty:1000,buy:185000,sell:200000}]},
{id:104,name:'جم فری فایر',cat:'games',icon:'💠',packages:[{qty:100,buy:22000,sell:25000},{qty:310,buy:66000,sell:72000},{qty:520,buy:110000,sell:118000}]},
{id:105,name:'کلش اف کلنز',cat:'games',icon:'🛡️',packages:[{qty:80,buy:24000,sell:27000},{qty:500,buy:145000,sell:160000}]},
{id:106,name:'سی پی کالاف',cat:'games',icon:'🪙',packages:[{qty:80,buy:26000,sell:29000},{qty:420,buy:130000,sell:145000},{qty:880,buy:270000,sell:290000}]},
{id:107,name:'یوسی ترکیه',cat:'games',icon:'🇹🇷',packages:[{qty:60,buy:27000,sell:30000},{qty:325,buy:135000,sell:148000}]},
{id:401,name:'هپی',cat:'social',icon:'😊',packages:[{qty:100,buy:12000,sell:14000},{qty:500,buy:55000,sell:62000}]},
{id:402,name:'لایک',cat:'social',icon:'❤️',packages:[{qty:100,buy:15000,sell:17000},{qty:500,buy:70000,sell:78000}]},
{id:403,name:'تلگرام پرمیوم',cat:'social',icon:'✈️',packages:[{qty:1,buy:50000,sell:55000}]}
],
transactions:[
{id:1,userId:1,type:'deposit',amount:500000,status:'confirmed',date:Date.now()-86400000,invoiceNo:'INV-1001'},
{id:2,userId:1,type:'withdraw',amount:200000,status:'pending',date:Date.now()-3600000,invoiceNo:'INV-1002'},
{id:3,userId:1,type:'return',amount:100000,status:'rejected',date:Date.now()-7200000,invoiceNo:'INV-1003'},
{id:4,userId:2,type:'deposit',amount:100,currency:'USD',status:'confirmed',date:Date.now()-86400000,invoiceNo:'INV-1004'}
],
currentUser:null};

var CN={telecom:'شبکه مخابراتی',intl:'شبکه بین المللی',games:'بازی آنلاین',social:'شبکه مجازی'};
var TT={wallet:'کیف پول',products:'محصولات',transactions:'معاملات',users:'کاربران',settings:'تنظیمات',buyToday:'خرید امروز',buyTotal:'خرید کل',profitToday:'سود امروز',profitTotal:'سود کل',sellToday:'فروش امروز',sellTotal:'فروش کل',confirmed:'تایید شده',pending:'در انتظار',rejected:'رد شده',deposit:'واریز',withdraw:'برداشت',return:'برگشت',buy:'خرید',sell:'فروش',profit:'سود'};
function t(k){return TT[k]||k}

/* ============ ذخیره‌سازی ============ */
try{var sU=localStorage.getItem('ap_users');if(sU)DB.users=JSON.parse(sU)}catch(e){}
try{var sT=localStorage.getItem('ap_trans');if(sT)DB.transactions=JSON.parse(sT)}catch(e){}
try{var sP=localStorage.getItem('ap_prods');if(sP)DB.products=JSON.parse(sP)}catch(e){}
function saveAll(){try{localStorage.setItem('ap_users',JSON.stringify(DB.users));localStorage.setItem('ap_trans',JSON.stringify(DB.transactions));localStorage.setItem('ap_prods',JSON.stringify(DB.products))}catch(e){}}

/* ============ ناوبری ============ */
function sh(id){document.querySelectorAll('.s').forEach(function(s){s.classList.remove('a')});document.getElementById(id).classList.add('a')}

function login(){
var u=document.getElementById('lu').value.trim();
var p=document.getElementById('lp').value.trim();
var m=document.getElementById('lm');m.innerText='';
if(!u||!p){m.innerText='نام کاربری و رمز عبور را وارد کنید';return}
var user=null;
if(u==='12345678'&&p==='09040670929')user=DB.users[0];
else if(u==='1234test'&&p==='1234test')user=DB.users[1];
else{var f=DB.users.find(function(x){return x.username===u&&x.password===p});if(f)user=f}
if(!user){m.innerText='نام کاربری یا رمز عبور اشتباه است';return}
DB.currentUser=user;sh('as');nav('wallet');
}

function logout(){DB.currentUser=null;sh('ls');document.getElementById('lu').value='';document.getElementById('lp').value='';document.getElementById('lm').innerText=''}

function sup(){om('<h3>📝 ثبت‌نام</h3><p style="text-align:center;font-size:13px;color:#555;line-height:1.8">با پشتیبانی در ارتباط باشید:<br>۱. نام<br>۲. موبایل<br>۳. نوع کاربری<br>۴. عکس پروفایل<br>۵. عکس تذکره</p><a href="https://wa.me/989123456789" target="_blank" style="display:block;text-align:center;background:#25D366;color:#fff;padding:10px;border-radius:8px;text-decoration:none;margin-top:10px;font-weight:bold">💬 واتساپ</a>')}

var cp='wallet',txFilter='all';
function nav(p){
if(p==='users' && DB.currentUser.type==='normal') return;
cp=p;
document.querySelectorAll('.n button').forEach(function(b){b.classList.remove('act')});
var nb=document.getElementById('n'+p[0]);if(nb)nb.classList.add('act');
document.getElementById('ht').innerText=t(p);
var c=document.getElementById('mc');
if(p==='wallet')c.innerHTML=rw();
else if(p==='products')c.innerHTML=rp();
else if(p==='transactions')c.innerHTML=rt();
else if(p==='users')c.innerHTML=ru();
else if(p==='settings')c.innerHTML=rs();
}
function fmt(n){return Number(n||0).toLocaleString('fa-IR')}

/* ============ کیف پول ============ */
function rw(){var u=DB.currentUser;
var h='<div class="wallet-card"><div class="wallet-top"><div style="flex:1"><div class="wallet-label">موجودی</div><div class="wallet-balance" id="mainBalance">'+fmt(u.wallets.AFN)+'</div></div><div class="wallet-icon">👛</div></div>';
h+='<div class="currency-selector"><span class="flag" id="curFlag">🇦🇫</span><select id="curSel" onchange="switchCurrency(this.value)"><option value="AFN" selected>افغانی</option><option value="IRT">تومان</option><option value="TRY">لیر</option><option value="USD">دلار</option></select></div></div>';
h+='<div class="c"><h3>💰 آمار خرید</h3>';
h+='<div class="stat-card" style="margin-bottom:10px"><div class="stat-ic green">🛒</div><div class="stat-info"><div class="lbl">'+t('buyToday')+'</div><div class="val">'+fmt(u.buyToday)+'</div></div></div>';
h+='<div class="stat-card"><div class="stat-ic blue">📈</div><div class="stat-info"><div class="lbl">'+t('buyTotal')+'</div><div class="val">'+fmt(u.buyTotal)+'</div></div></div></div>';
h+='<div class="c"><h3>💸 آمار فروش</h3>';
h+='<div class="stat-card" style="margin-bottom:10px"><div class="stat-ic red">💵</div><div class="stat-info"><div class="lbl">'+t('sellToday')+'</div><div class="val">'+fmt(u.sellToday)+'</div></div></div>';
h+='<div class="stat-card"><div class="stat-ic orange">📊</div><div class="stat-info"><div class="lbl">'+t('sellTotal')+'</div><div class="val">'+fmt(u.sellTotal)+'</div></div></div></div>';
h+='<div class="c"><h3>📈 سود</h3>';
h+='<div class="stat-card" style="margin-bottom:10px"><div class="stat-ic purple">💎</div><div class="stat-info"><div class="lbl">'+t('profitToday')+'</div><div class="val">'+fmt(u.profitToday)+'</div></div></div>';
h+='<div class="stat-card"><div class="stat-ic purple">🏆</div><div class="stat-info"><div class="lbl">'+t('profitTotal')+'</div><div class="val">'+fmt(u.profitTotal)+'</div></div></div></div>';
h+='<div class="c"><h3>📊 خلاصه معاملات</h3>';
var tx=DB.transactions.filter(function(x){return x.userId===u.id});
var c1=tx.filter(function(x){return x.status==='confirmed'}).length;
var c2=tx.filter(function(x){return x.status==='pending'}).length;
var c3=tx.filter(function(x){return x.status==='rejected'}).length;
h+='<div class="r"><span>✅ تایید شده</span><span class="amt">'+c1+'</span></div>';
h+='<div class="r"><span>⏳ در انتظار</span><span style="color:#856404;font-weight:bold">'+c2+'</span></div>';
h+='<div class="r"><span>❌ رد شده</span><span style="color:#a4252c;font-weight:bold">'+c3+'</span></div></div>';
return h}

function switchCurrency(cur){var u=DB.currentUser;var flags={AFN:'🇦🇫',IRT:'🇮🇷',TRY:'🇹🇷',USD:'💵'};var values={AFN:u.wallets.AFN,IRT:u.wallets.IRT,TRY:u.wallets.TRY,USD:u.wallets.USD};document.getElementById('mainBalance').innerText=fmt(values[cur]);document.getElementById('curFlag').innerText=flags[cur]}
/* ============ محصولات ============ */
function rp(){var h='';['telecom','intl','games','social'].forEach(function(c){var it=DB.products.filter(function(p){return p.cat===c});if(!it.length)return;h+='<div class="ct">'+CN[c]+'</div><div class="pg">';it.forEach(function(p){h+='<div class="pc" onclick="openProduct('+p.id+')"><div class="pi">'+p.icon+'</div><div class="pn">'+p.name+'</div></div>'});h+='</div>'});return h}

function openProduct(id){var p=DB.products.find(function(x){return x.id===id});if(!p)return;
document.getElementById('ht').innerText=p.icon+' '+p.name;
var h='<button class="back-btn" onclick="nav(\'products\')">‹ بازگشت</button>';
p.packages.forEach(function(pk){
h+='<div class="pkg" onclick="buyPkg('+p.id+','+pk.qty+')"><div class="pkg-info">';
h+='<div class="pkg-title">'+p.name+' '+p.icon+'</div>';
h+='<div class="pkg-buy">خرید: '+fmt(pk.buy)+' تومان</div>';
h+='<div class="pkg-sell">فروش: '+fmt(pk.sell)+' تومان</div>';
h+='</div><div class="pkg-icon">'+p.icon+'</div></div>';
});
document.getElementById('mc').innerHTML=h}

function buyPkg(pid,qty){var p=DB.products.find(function(x){return x.id===pid});if(!p)return;
var pk=p.packages.find(function(x){return x.qty===qty});if(!pk)return;
om('<h3>'+p.icon+' '+p.name+'</h3>'+
'<p style="text-align:center;color:#d9534f;font-size:14px;margin:8px 0">خرید: '+fmt(pk.buy)+' تومان</p>'+
'<p style="text-align:center;color:#25D366;font-size:14px;margin:0 0 10px">فروش: '+fmt(pk.sell)+' تومان</p>'+
'<label style="font-size:13px">🔢 پین کد (۴ رقم):</label>'+
'<input id="bpin" type="text" maxlength="4" value="0000" inputmode="numeric">'+
'<label style="font-size:13px">🆔 شماره / آی‌دی حساب:</label>'+
'<input id="bid" placeholder="شماره حساب یا آی‌دی">'+
'<label style="font-size:13px">نوع:</label>'+
'<select id="bt"><option value="buy">خرید (مشتری از ما می‌خرد)</option><option value="sell">فروش (مشتری به ما می‌فروشد)</option></select>'+
'<button onclick="doBuy('+pid+','+qty+')">✅ ثبت</button>')}

function doBuy(pid,qty){
var p=DB.products.find(function(x){return x.id===pid});
var pk=p.packages.find(function(x){return x.qty===qty});
var pin=document.getElementById('bpin').value||'0000';
var accId=document.getElementById('bid').value||'';
var bt=document.getElementById('bt').value;
if(!accId){alert('لطفاً شماره/آی‌دی را وارد کنید');return}
if(pin.length!==4){alert('پین کد باید ۴ رقم باشد');return}
var unit=bt==='buy'?pk.buy:pk.sell;
var total=unit;
var profit=Math.round(total*0.10);
var iv='INV-'+Date.now().toString().slice(-6);
DB.transactions.push({id:Date.now(),userId:DB.currentUser.id,type:bt,amount:total,productName:p.name,productIcon:p.icon,pkgQty:qty,pinCode:pin,accountId:accId,status:'pending',invoiceNo:iv,date:Date.now()});
if(bt==='buy'){
DB.currentUser.buyToday+=total;
DB.currentUser.buyTotal+=total;
if(DB.currentUser.parentId){
var parent=DB.users.find(function(x){return x.id===DB.currentUser.parentId});
if(parent){
parent.wallets.IRT=(parent.wallets.IRT||0)+profit;
parent.profitToday=(parent.profitToday||0)+profit;
parent.profitTotal=(parent.profitTotal||0)+profit;
parent.sellToday=(parent.sellToday||0)+total;
parent.sellTotal=(parent.sellTotal||0)+total;
DB.transactions.push({id:Date.now()+1,userId:parent.id,type:'profit',amount:profit,currency:'IRT',status:'confirmed',date:Date.now(),note:'سود ۱۰٪ از خرید '+DB.currentUser.name+' ('+p.name+')'});
}
}
}else{
DB.currentUser.sellToday+=total;
DB.currentUser.sellTotal+=total;
}
saveAll();cm();si(iv)}

/* ============ فاکتور ============ */
function si(inv){var tx=DB.transactions.find(function(x){return x.invoiceNo===inv});if(!tx)return;
var sf=t(tx.status),typeFa=t(tx.type);
var h='<div class="iv" id="invoiceBox"><h4>🧾 فاکتور</h4>';
h+='<div class="rw"><span>شماره:</span><b>'+tx.invoiceNo+'</b></div>';
h+='<div class="rw"><span>تاریخ:</span><b>'+new Date(tx.date).toLocaleString('fa-IR')+'</b></div>';
h+='<div class="rw"><span>خریدار:</span><b>'+DB.currentUser.name+'</b></div>';
h+='<div class="rw"><span>نوع:</span><b>'+typeFa+'</b></div>';
if(tx.productName)h+='<div class="rw"><span>محصول:</span><b>'+(tx.productIcon||'')+' '+tx.productName+'</b></div>';
if(tx.pinCode)h+='<div class="rw"><span>پین کد:</span><b>'+tx.pinCode+'</b></div>';
if(tx.accountId)h+='<div class="rw"><span>شماره/آی‌دی:</span><b>'+tx.accountId+'</b></div>';
h+='<div class="rw"><span>وضعیت:</span><b>'+sf+'</b></div>';
h+='<div class="rw tt"><span>مبلغ:</span><b>'+fmt(tx.amount)+' تومان</b></div>';
h+='<div class="sp">ارسال پلاس</div></div>';
h+='<button onclick="shareInvoiceImage(\''+tx.invoiceNo+'\')">📤 اشتراک به صورت عکس</button>';
h+='<button class="bs" onclick="cm()">بستن</button>';
om(h)}

function shareInvoiceImage(inv){var box=document.getElementById('invoiceBox');if(!box)return;if(typeof html2canvas==='undefined'){alert('لطفاً اتصال اینترنت رو چک کن');return}html2canvas(box,{backgroundColor:'#ffffff',scale:2}).then(function(canvas){canvas.toBlob(function(blob){var file=new File([blob],'invoice-'+inv+'.png',{type:'image/png'});if(navigator.canShare&&navigator.canShare({files:[file]})){navigator.share({files:[file],title:'فاکتور ارسال پلاس'}).catch(function(){})}else{var url=URL.createObjectURL(blob);var a=document.createElement('a');a.href=url;a.download='invoice-'+inv+'.png';a.click();URL.revokeObjectURL(url)}},'image/png')})}

/* ============ معاملات ============ */
function rt(){var h='<div class="filter"><button class="'+(txFilter==='all'?'act':'')+'" onclick="setFilter(\'all\')">همه</button><button class="'+(txFilter==='confirmed'?'act':'')+'" onclick="setFilter(\'confirmed\')">✅ تایید شده</button><button class="'+(txFilter==='pending'?'act':'')+'" onclick="setFilter(\'pending\')">⏳ در انتظار</button><button class="'+(txFilter==='rejected'?'act':'')+'" onclick="setFilter(\'rejected\')">❌ رد شده</button></div>';
var tx=DB.transactions.filter(function(x){return x.userId===DB.currentUser.id});
if(txFilter!=='all')tx=tx.filter(function(x){return x.status===txFilter});
if(!tx.length)h+='<p class="ep">معامله‌ای نیست</p>';
tx.slice().reverse().forEach(function(t2){
var lb=t(t2.type)+(t2.productName?' '+t2.productName:'');
if(t2.type==='profit') lb='💰 سود';
var sg=(t2.type==='deposit'||t2.type==='buy'||t2.type==='profit')?'+':'-';
var cl=(t2.type==='deposit'||t2.type==='buy'||t2.type==='profit')?'p':'n';
h+='<div class="tx"><div class="ti"><h4>'+lb+'</h4>';
if(t2.note)h+='<p style="color:#555;margin:2px 0">'+t2.note+'</p>';
h+='<p>'+new Date(t2.date).toLocaleString('fa-IR')+'</p><span class="bd '+t2.status+'">'+t(t2.status)+'</span>';
if(t2.invoiceNo)h+='<div class="txa"><button onclick="si(\''+t2.invoiceNo+'\')">🧾 فاکتور</button><button onclick="shareInvoiceImage(\''+t2.invoiceNo+'\')">📤 عکس</button></div>';
h+='</div><div class="ta '+cl+'">'+sg+fmt(t2.amount)+'</div></div>';
});
return h}
function setFilter(f){txFilter=f;nav('transactions')}
/* ============ کاربران ============ */
function ru(){
if(DB.currentUser.type==='normal'){document.getElementById('mc').innerHTML='<p class="ep">این بخش فقط برای عمده‌فروش‌ها قابل دسترسی است</p>';return}
var h='<button class="bp" onclick="chm()">💳 شارژ کیف پول مشتری</button>';
h+='<button class="bp" onclick="regm()" style="background:#0d6efd">➕ ثبت کاربر جدید</button>';
var mine=DB.users.filter(function(u){return u.parentId===DB.currentUser.id});
if(mine.length>0){h+='<div class="c"><h3>👥 کاربران من ('+mine.length+')</h3>';
mine.forEach(function(u){var lb=u.type==='normal'?'عادی':u.type==='small_wholesale'?'عمده کوچک':'عمده بزرگ';var cl=u.type==='normal'?'':'w';
h+='<div class="ur"><div class="ua">'+u.name.charAt(0)+'</div><div class="ui"><h4>'+u.name+'</h4><p>'+u.phone+'</p></div><span class="ut '+cl+'">'+lb+'</span></div>'});h+='</div>'}
h+='<div class="c"><h3>👥 همه کاربران ('+DB.users.length+')</h3>';
DB.users.forEach(function(u){var lb=u.type==='normal'?'عادی':u.type==='small_wholesale'?'عمده کوچک':'عمده بزرگ';var cl=u.type==='normal'?'':'w';
h+='<div class="ur"><div class="ua">'+u.name.charAt(0)+'</div><div class="ui"><h4>'+u.name+'</h4><p>'+u.phone+'</p></div><span class="ut '+cl+'">'+lb+'</span></div>'});
h+='</div>';return h}

function regm(){om('<h3>➕ ثبت کاربر جدید</h3><input id="rn" placeholder="نام و نام خانوادگی"><input id="ru1" placeholder="نام کاربری"><input id="rp1" placeholder="شماره موبایل"><input id="rw1" type="password" placeholder="رمز عبور"><input id="rpin" type="text" maxlength="4" value="0000" placeholder="پین کد"><select id="rt1"><option value="normal">کاربر عادی</option><option value="small_wholesale">عمده کوچک</option><option value="large_wholesale">عمده بزرگ</option></select><button onclick="doReg()">ثبت کاربر</button>')}

function doReg(){
var n=document.getElementById('rn').value.trim();
var u=document.getElementById('ru1').value.trim();
var p=document.getElementById('rp1').value.trim();
var pw=document.getElementById('rw1').value.trim();
var pin=document.getElementById('rpin').value.trim()||'0000';
var ty=document.getElementById('rt1').value;
if(!n||!u||!p||!pw){alert('همه فیلدها را پر کنید');return}
if(pin.length!==4){alert('پین ۴ رقم');return}
if(DB.users.find(function(x){return x.username===u})){alert('این نام کاربری قبلاً استفاده شده');return}
DB.users.push({id:Date.now(),name:n,username:u,phone:p,password:pw,pin:pin,type:ty,wallets:{IRT:0,AFN:0,TRY:0,USD:0},buyToday:0,buyTotal:0,sellToday:0,sellTotal:0,profitToday:0,profitTotal:0,parentId:DB.currentUser.id});
saveAll();cm();
alert('✅ کاربر ثبت شد\nنام کاربری: '+u+'\nرمز: '+pw);
nav('users')}

function chm(){
if(DB.currentUser.type==='normal'){alert('فقط عمده‌فروش‌ها');return}
var o='';
DB.users.forEach(function(u){if(u.id!==DB.currentUser.id){var lbl=u.parentId===DB.currentUser.id?' ⭐ (مال من)':'';o+='<option value="'+u.id+'">'+u.name+' - '+u.phone+lbl+'</option>'}});
if(!o){alert('کاربری برای شارژ نیست');return}
om('<h3>💳 شارژ کیف پول مشتری</h3><select id="cu1">'+o+'</select><select id="cc1"><option value="IRT">تومان</option><option value="AFN">افغانی</option><option value="TRY">لیر</option><option value="USD">دلار</option></select><input id="ca1" type="number" placeholder="مبلغ شارژ"><button onclick="dc()">✅ شارژ</button>')}

function dc(){
var u=Number(document.getElementById('cu1').value);
var c=document.getElementById('cc1').value;
var a=Number(document.getElementById('ca1').value);
if(!a){alert('مبلغ را وارد کنید');return}
var f=DB.users.find(function(x){return x.id===u});
if(!f){alert('کاربر پیدا نشد');return}
f.wallets[c]=(f.wallets[c]||0)+a;
DB.transactions.push({id:Date.now(),userId:u,type:'deposit',amount:a,currency:c,status:'confirmed',date:Date.now(),note:'شارژ توسط '+DB.currentUser.name});
saveAll();cm();alert('✅ کیف پول '+f.name+' شارژ شد');nav('users')}

/* ============ تنظیمات ============ */
function rs(){var h='<div class="c"><div class="si" onclick="vp()"><span>👤 پروفایل</span><span class="ar">‹</span></div><div class="si" onclick="cpm()"><span>🔒 تغییر رمز</span><span class="ar">‹</span></div><div class="si" onclick="cpn()"><span>🔑 تغییر پین</span><span class="ar">‹</span></div><div class="si" onclick="lm()"><span>🌐 زبان</span><span class="ar">‹</span></div><div class="si" onclick="rm()"><span>📈 نرخ اسعار</span><span class="ar">‹</span></div><div class="si" onclick="sm()"><span>💬 پشتیبانی</span><span class="ar">‹</span></div><div class="si" onclick="aboutMe()"><span>ℹ️ درباره</span><span class="ar">‹</span></div></div>';return h}

function vp(){var u=DB.currentUser;om('<h3>پروفایل</h3><p style="margin:6px 0"><b>نام:</b> '+u.name+'</p><p style="margin:6px 0"><b>کاربری:</b> '+u.username+'</p><p style="margin:6px 0"><b>موبایل:</b> '+u.phone+'</p><p style="margin:6px 0"><b>نوع:</b> '+(u.type==='normal'?'عادی':u.type==='small_wholesale'?'عمده کوچک':'عمده بزرگ')+'</p>')}
function cpm(){om('<h3>تغییر رمز</h3><input id="op1" type="password" placeholder="رمز فعلی"><input id="np1" type="password" placeholder="رمز جدید"><button onclick="dcp()">ذخیره</button>')}
function dcp(){var o=document.getElementById('op1').value,n=document.getElementById('np1').value;if(o!==DB.currentUser.password){alert('رمز فعلی اشتباه');return}if(!n){alert('رمز جدید را وارد کنید');return}DB.currentUser.password=n;saveAll();cm();alert('تغییر کرد')}
function cpn(){om('<h3>تغییر پین</h3><input id="op2" type="password" maxlength="4" placeholder="پین فعلی"><input id="np2" type="password" maxlength="4" placeholder="پین جدید"><button onclick="dcn()">ذخیره</button>')}
function dcn(){var o=document.getElementById('op2').value,n=document.getElementById('np2').value;if(o!==DB.currentUser.pin){alert('پین فعلی اشتباه');return}if(n.length!==4){alert('۴ رقم');return}DB.currentUser.pin=n;saveAll();cm();alert('تغییر کرد')}
function lm(){om('<h3>زبان</h3><select id="ls1"><option value="fa">فارسی</option><option value="en">English</option><option value="ps">پښتو</option></select><button onclick="dl()">ذخیره</button>')}
function dl(){var l=document.getElementById('ls1').value;alert('زبان: '+(l==='fa'?'فارسی':l==='en'?'English':'پښتو'));cm()}

function rm(){
var now=new Date();
var dateStr=now.toLocaleDateString('fa-IR',{year:'numeric',month:'long',day:'numeric'});
var timeStr=now.toLocaleTimeString('fa-IR',{hour:'2-digit',minute:'2-digit'});
var rates=[{flag:'🇮🇷',name:'یک میلیون تومان',buy:'250',sell:'245'},{flag:'🇺🇸',name:'۱ دلار',buy:'65.2',sell:'65'},{flag:'🇹🇷',name:'۱ لیره',buy:'1.29',sell:'1.3'},{flag:'🇵🇰',name:'هزار روپیه پاکستان',buy:'227',sell:'230'},{flag:'🇪🇺',name:'۱ یورو',buy:'74.7',sell:'75'}];
var h='<h3 style="text-align:center;font-size:20px;color:#111;margin-bottom:15px">نرخ اسعار</h3>';
h+='<div id="rateBox">';
rates.forEach(function(r){h+='<div class="rates-card"><div class="rates-row"><div class="rates-left"><div class="rates-flag">'+r.flag+'</div><div class="rates-name">'+r.name+'</div></div>';
h+='<div class="rates-mid"><div class="rates-col"><div class="lbl">خرید</div><div class="val">'+r.buy+'</div><div class="cur">افغانی</div></div><div class="rates-col"><div class="lbl">فروش</div><div class="val">'+r.sell+'</div><div class="cur">افغانی</div></div></div></div>';
h+='<div class="rates-date">'+dateStr+'<br>'+timeStr+'</div></div>'});
h+='</div>';
h+='<button class="rates-share-btn" onclick="shareRateImage()">اشتراک گذاری</button>';
om(h)}

function shareRateImage(){var box=document.getElementById('rateBox');if(!box)return;if(typeof html2canvas==='undefined'){alert('لطفاً اتصال اینترنت رو چک کن');return}html2canvas(box,{backgroundColor:'#f0f2f5',scale:2}).then(function(canvas){canvas.toBlob(function(blob){var file=new File([blob],'rates.png',{type:'image/png'});if(navigator.canShare&&navigator.canShare({files:[file]})){navigator.share({files:[file],title:'نرخ اسعار ارسال پلاس'}).catch(function(){})}else{var url=URL.createObjectURL(blob);var a=document.createElement('a');a.href=url;a.download='rates.png';a.click();URL.revokeObjectURL(url)}},'image/png')})}

function aboutMe(){
var h='<h3 style="text-align:center">ℹ️ درباره</h3>';
h+='<div class="about-me">';
h+='<p>📱🔥 <b>ارسال پلاس</b>؛ اینترنتت، فقط با یک کلیک!</p>';
h+='<p>🌐 خرید آسان بسته‌های اینترنت، سریع و راحت!</p>';
h+='<p>🚀 همین حالا ارسال پلاس را باز کن، بسته اینترنتت را بخر و همیشه آنلاین بمان!</p>';
h+='<p>💚 فرصت را از دست نده؛ همین امروز شروع کن!</p>';
h+='<div class="dev">👨‍💻 توسعه‌دهنده: اسدالله مرادی</div>';
h+='</div>';
h+='<div class="c" style="margin-top:10px"><h3>📦 درباره برنامه</h3>';
h+='<p style="font-size:13px;color:#555;text-align:center;line-height:1.8">ارسال پلاس<br>نسخه ۱<br>مدیریت کیف پول و معاملات ارزی</p></div>';
om(h)}

function sm(){om('<h3>💬 پشتیبانی</h3><a href="https://wa.me/989123456789" target="_blank" style="display:block;text-align:center;background:#25D366;color:#fff;padding:10px;border-radius:8px;text-decoration:none;margin-top:10px;font-weight:bold">واتساپ</a>')}
function om(h){document.getElementById('mdc').innerHTML=h;document.getElementById('md').classList.remove('hd')}
function cm(){document.getElementById('md').classList.add('hd')}
