(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))n(c);new MutationObserver(c=>{for(const l of c)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(c){const l={};return c.integrity&&(l.integrity=c.integrity),c.referrerPolicy&&(l.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?l.credentials="include":c.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(c){if(c.ep)return;c.ep=!0;const l=i(c);fetch(c.href,l)}})();const S=["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],N=["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],T={甲:"木",乙:"木",丙:"火",丁:"火",戊:"土",己:"土",庚:"金",辛:"金",壬:"水",癸:"水"},G={子:"水",丑:"土",寅:"木",卯:"木",辰:"土",巳:"火",午:"火",未:"土",申:"金",酉:"金",戌:"土",亥:"水"},te=["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],ne=["乾","坤","震","巽","坎","离","艮","兑"],q=[{name:"童年",range:"0-10",startAge:0,endAge:10},{name:"少年",range:"10-20",startAge:10,endAge:20},{name:"青年",range:"20-30",startAge:20,endAge:30},{name:"壮年",range:"30-40",startAge:30,endAge:40},{name:"中年",range:"40-50",startAge:40,endAge:50},{name:"中老年",range:"50-60",startAge:50,endAge:60},{name:"花甲",range:"60-70",startAge:60,endAge:70},{name:"古稀",range:"70-80",startAge:70,endAge:80},{name:"耄耋",range:"80-90",startAge:80,endAge:90}],ae={overall:{name:"综合运势",ageRange:{start:0,end:90}},career:{name:"事业运",ageRange:{start:0,end:90}},wealth:{name:"财运",ageRange:{start:0,end:90}},love:{name:"感情运",ageRange:{start:0,end:90}},health:{name:"健康运",ageRange:{start:0,end:90}},investment:{name:"投资趋势",ageRange:{start:20,end:80}},social:{name:"交友趋势",ageRange:{start:10,end:80}},workplace:{name:"职场趋势",ageRange:{start:18,end:60}}};let h=null,R=!1,A="overall",I=null,H=null,M=0,b=0,v={year:1990,month:1,day:1,hour:6,gender:"male"};const _=["子时","丑时","寅时","卯时","辰时","巳时","午时","未时","申时","酉时","戌时","亥时"];function ie(){const e=document.getElementById("pickerMonth");if(e)for(let a=1;a<=12;a++){const s=document.createElement("div");s.className="picker-item"+(a===v.month?" active":""),s.textContent=a+"月",s.setAttribute("data-value",a.toString()),s.addEventListener("click",o=>{o.stopPropagation(),oe(a)}),e.appendChild(s)}const t=document.getElementById("pickerHour");if(t)for(let a=0;a<12;a++){const s=document.createElement("div");s.className="picker-item"+(a===v.hour?" active":""),s.textContent=_[a],s.setAttribute("data-value",a.toString()),s.addEventListener("click",o=>{o.stopPropagation(),se(a)}),t.appendChild(s)}const i=document.getElementById("pickerGender");i&&i.querySelectorAll(".gender-btn").forEach(a=>{a.addEventListener("click",s=>{s.stopPropagation();const o=a.getAttribute("data-value");ce(o)})});const n=["Year","Month","Day","Hour","Gender"];n.forEach(a=>{const s=document.getElementById("card"+a);s&&s.addEventListener("click",()=>{n.forEach(d=>{d!==a&&document.getElementById("card"+d)?.classList.remove("editing")}),s.classList.toggle("editing");const o=s.querySelector(".card-input");o&&setTimeout(()=>o.focus(),50)})}),document.querySelectorAll(".confirm-btn").forEach(a=>{a.addEventListener("click",s=>{s.stopPropagation();const o=a.getAttribute("data-field");V(o)})}),document.querySelectorAll(".cancel-btn").forEach(a=>{a.addEventListener("click",s=>{s.stopPropagation();const o=a.getAttribute("data-field");j(o)})}),document.querySelectorAll(".card-input").forEach(a=>{a.addEventListener("keydown",s=>{if(s.key==="Enter"){const d=a.closest(".input-card")?.getAttribute("data-field");d&&V(d)}else if(s.key==="Escape"){const d=a.closest(".input-card")?.getAttribute("data-field");d&&j(d)}}),a.addEventListener("click",s=>s.stopPropagation())}),document.addEventListener("click",a=>{a.target.closest(".input-card")||n.forEach(o=>{document.getElementById("card"+o)?.classList.remove("editing")})});const c=document.getElementById("inputYear"),l=document.getElementById("inputDay");c&&(c.value=v.year.toString()),l&&(l.value=v.day.toString())}function oe(e){v.month=e,document.getElementById("cardMonthValue").textContent=e+"月",document.querySelectorAll("#pickerMonth .picker-item").forEach(t=>{const i=parseInt(t.getAttribute("data-value"));t.classList.toggle("active",i===e)}),document.getElementById("cardMonth")?.classList.remove("editing")}function se(e){v.hour=e,document.getElementById("cardHourValue").textContent=_[e],document.querySelectorAll("#pickerHour .picker-item").forEach(t=>{const i=parseInt(t.getAttribute("data-value"));t.classList.toggle("active",i===e)}),document.getElementById("cardHour")?.classList.remove("editing")}function ce(e){v.gender=e,document.getElementById("cardGenderValue").textContent=e==="male"?"男":"女",document.querySelectorAll("#pickerGender .gender-btn").forEach(t=>{t.classList.toggle("active",t.getAttribute("data-value")===e)}),document.getElementById("cardGender")?.classList.remove("editing")}function V(e){if(e==="year"){const t=document.getElementById("inputYear"),i=parseInt(t.value);i>=1940&&i<=2024&&(v.year=i,document.getElementById("cardYearValue").textContent=i+"年",document.getElementById("cardYear")?.classList.remove("editing"))}else if(e==="day"){const t=document.getElementById("inputDay"),i=parseInt(t.value);i>=1&&i<=31&&(v.day=i,document.getElementById("cardDayValue").textContent=i+"日",document.getElementById("cardDay")?.classList.remove("editing"))}}function j(e){const i="card"+{year:"Year",month:"Month",day:"Day",hour:"Hour",gender:"Gender"}[e];document.getElementById(i)?.classList.remove("editing")}function le(e,t,i,n){const c=(e-4)%10,l=(e-4)%12,a=S[c>=0?c:c+10],s=N[l>=0?l:l+12],d=((e-4)*12+t-1)%10,r=S[d>=0?d:d+10],p=N[(t+1)%12],g=new Date(1900,0,31),L=new Date(e,t-1,i),w=Math.floor((L.getTime()-g.getTime())/(1e3*60*60*24)),B=w%10,u=w%12,f=S[B>=0?B:B+10],m=N[u>=0?u:u+12],E=B%5,x=([0,2,4,6,8][E]+n)%10,Y=S[x],D=te[n];return{year:{gan:a,zhi:s},month:{gan:r,zhi:p},day:{gan:f,zhi:m},hour:{gan:Y,zhi:D}}}function de(e){const t=new Set;return t.add(T[e.year.gan]),t.add(G[e.year.zhi]),t.add(T[e.month.gan]),t.add(G[e.month.zhi]),t.add(T[e.day.gan]),t.add(G[e.day.zhi]),t.add(T[e.hour.gan]),t.add(G[e.hour.zhi]),Array.from(t)}function re(e,t,i,n){const c=e+t+i+n;return ne[c%8]}function y(e){const t=Math.sin(e)*1e4;return t-Math.floor(t)}function ue(e){const t=ae[e];if(!t)return q;const{start:i,end:n}=t.ageRange;return q.filter(c=>c.endAge>i&&c.startAge<n)}function $(e,t){const i=[],n=ue(t),c={overall:0,career:1,wealth:2,love:3,health:4,investment:5,social:6,workplace:7};for(let l=0;l<n.length;l++){const a=e+c[t]*1e3+l*100,s=50+y(a)*30,o=10+y(a+1)*15,d=s+(y(a+2)-.5)*o,r=s+(y(a+3)-.5)*o,p=Math.max(d,r)+y(a+4)*o*.5,g=Math.min(d,r)-y(a+5)*o*.5;i.push({time:`${n[l].name} (${n[l].range}岁)`,open:Math.max(10,Math.min(100,d)),high:Math.max(10,Math.min(100,p)),low:Math.max(10,Math.min(100,g)),close:Math.max(10,Math.min(100,r)),volume:Math.floor(y(a+6)*100+50)})}return i}function me(e){const t=document.getElementById("baziDisplay");t.innerHTML=`
    <div class="bazi-item">
      <div class="label">年柱</div>
      <div class="value">${e.bazi.year.gan}${e.bazi.year.zhi}</div>
    </div>
    <div class="bazi-item">
      <div class="label">月柱</div>
      <div class="value">${e.bazi.month.gan}${e.bazi.month.zhi}</div>
    </div>
    <div class="bazi-item">
      <div class="label">日柱</div>
      <div class="value">${e.bazi.day.gan}${e.bazi.day.zhi}</div>
    </div>
    <div class="bazi-item">
      <div class="label">时柱</div>
      <div class="value">${e.bazi.hour.gan}${e.bazi.hour.zhi}</div>
    </div>
  `;const i=document.getElementById("wuxingDisplay"),n={金:"gold",木:"wood",水:"water",火:"fire",土:"earth"};i.innerHTML=e.wuxing.map(c=>`<span class="wuxing-tag ${n[c]}">${c}</span>`).join("")}function ge(e){const t=new Date,i=t.getFullYear()*1e4+(t.getMonth()+1)*100+t.getDate(),n=e.seed+i,c=`${t.getFullYear()}年${t.getMonth()+1}月${t.getDate()}日`,a=["日","一","二","三","四","五","六"][t.getDay()];document.getElementById("todayDate").textContent=`📅 ${c} 星期${a}`;const s=Math.floor(50+y(n)*50);document.getElementById("todayScore").textContent=s+"分",document.getElementById("todayScore").className="score-value "+(s>=80?"high":s>=60?"medium":"low");const o=[{name:"事业运",icon:"💼",seed:n+1},{name:"财运",icon:"💰",seed:n+2},{name:"感情运",icon:"❤️",seed:n+3},{name:"健康运",icon:"💪",seed:n+4},{name:"贵人运",icon:"🌟",seed:n+5}],d=document.getElementById("fortuneItems");d.innerHTML=o.map(r=>{const p=Math.floor(y(r.seed)*100),g=p>=80?"high":p>=50?"medium":"low";return`
      <div class="fortune-item">
        <span class="item-icon">${r.icon}</span>
        <span class="item-name">${r.name}</span>
        <div class="item-bar">
          <div class="bar-fill ${g}" style="width: ${p}%"></div>
        </div>
        <span class="item-value">${p}</span>
      </div>
    `}).join("")}function pe(e){const t=new Date,i=t.getFullYear()*1e4+(t.getMonth()+1)*100+t.getDate(),n=e.seed+i+1e3,c=`${t.getFullYear()}年${t.getMonth()+1}月${t.getDate()}日`,a=["日","一","二","三","四","五","六"][t.getDay()];document.getElementById("outfitDate").textContent=`📅 ${c} 星期${a}`;const s=[{color:"#FFD700",name:"金色",meaning:"招财进宝"},{color:"#FF6B6B",name:"红色",meaning:"鸿运当头"},{color:"#4ECDC4",name:"青色",meaning:"平安顺遂"},{color:"#45B7D1",name:"蓝色",meaning:"智慧通达"},{color:"#96CEB4",name:"绿色",meaning:"生机勃勃"},{color:"#DDA0DD",name:"紫色",meaning:"贵人相助"}],o={金:[0,5],木:[4,2],水:[3,2],火:[1,0],土:[4,3]},d=e.wuxing[0]||"水",p=(o[d]||[0,1]).map(u=>s[u]),g=document.getElementById("luckyColors");g.innerHTML=p.map(u=>`<div class="color-swatch" style="background-color: ${u.color}" title="${u.name}: ${u.meaning}"></div>`).join("");const L=[{style:"简约商务风",desc:"适合重要会议或商务洽谈"},{style:"休闲运动风",desc:"适合户外活动或日常出行"},{style:"优雅知性风",desc:"适合社交场合，彰显品味"}],w=L[Math.floor(y(n+100)*L.length)],B=document.getElementById("outfitStyle");B.innerHTML=`
    <div class="style-name">今日推荐：${w.style}</div>
    <div class="style-desc">${w.desc}</div>
  `}function ve(e){const t=e.seed,i=[{trait:"稳重踏实",desc:"做事认真负责，有条不紊"},{trait:"热情开朗",desc:"积极乐观，善于交际"},{trait:"聪明机敏",desc:"思维敏捷，反应迅速"}],n={金:["果断坚毅","重义守信"],木:["仁慈善良","积极向上"],水:["智慧通达","灵活应变"],火:["热情洋溢","积极进取"],土:["踏实稳重","诚实守信"]},c=e.wuxing[0]||"水",l=n[c]||n.水,a=i[Math.floor(y(t)*i.length)],s=[{area:"事业",advice:"稳扎稳打，循序渐进"},{area:"财运",advice:"宜守不宜攻，稳健投资"},{area:"感情",advice:"真诚待人，缘到自然成"},{area:"健康",advice:"注意作息规律，劳逸结合"}],o=["东方","南方","西方","北方"],d=o[Math.floor(y(t+500)*o.length)],r=document.getElementById("analysisSummary");r.innerHTML=`
    <div class="summary-title">性格特质</div>
    <div class="trait-main">${a.trait}</div>
    <div class="trait-desc">${a.desc}</div>
    <div class="wuxing-traits">
      ${l.map(g=>`<span class="trait-tag">${g}</span>`).join("")}
    </div>
  `;const p=document.getElementById("analysisTips");p.innerHTML=`
    <div class="tips-title">人生发展建议</div>
    ${s.map(g=>`
      <div class="tip-item">
        <span class="tip-area">${g.area}</span>
        <span class="tip-advice">${g.advice}</span>
      </div>
    `).join("")}
    <div class="lucky-info">
      <div class="lucky-item">
        <span class="lucky-label">幸运方位</span>
        <span class="lucky-value">${d}</span>
      </div>
    </div>
  `}function he(e){e.seed;const t=[{title:"避免冲动投资",desc:"投资前充分调研，不要被短期高收益诱惑"},{title:"分散风险",desc:"不要把所有资金投入单一项目，合理配置资产"},{title:"警惕高利诱惑",desc:"收益率过高的项目往往风险极大，需谨慎"},{title:"控制杠杆",desc:"避免过度借贷投资，量力而行"}],i=document.getElementById("investmentGuide");i.innerHTML=t.map((d,r)=>`
    <div class="guide-tip">
      <div class="tip-icon">⚠️</div>
      <div class="tip-content">
        <div class="tip-title">${d.title}</div>
        <div class="tip-desc">${d.desc}</div>
      </div>
    </div>
  `).join("");const n=[{title:"识人要慢",desc:"真正了解一个人需要时间，不要急于深交"},{title:"警惕利益关系",desc:"纯粹利益驱动的友谊难以长久"},{title:"保持边界感",desc:"适度的距离让友谊更持久"},{title:"远离负能量",desc:"经常抱怨的人会影响你的心态"}],c=document.getElementById("socialGuide");c.innerHTML=n.map((d,r)=>`
    <div class="guide-tip">
      <div class="tip-icon">🚫</div>
      <div class="tip-content">
        <div class="tip-title">${d.title}</div>
        <div class="tip-desc">${d.desc}</div>
      </div>
    </div>
  `).join("");const l=[{title:"谨言慎行",desc:"职场中言多必失，学会倾听"},{title:"避免越级汇报",desc:"尊重层级关系，按流程办事"},{title:"不要站队",desc:"远离办公室政治，专注提升自己"},{title:"留存证据",desc:"重要沟通保留书面记录"}],a=document.getElementById("workplaceGuide");a.innerHTML=l.map((d,r)=>`
    <div class="guide-tip">
      <div class="tip-icon">💼</div>
      <div class="tip-content">
        <div class="tip-title">${d.title}</div>
        <div class="tip-desc">${d.desc}</div>
      </div>
    </div>
  `).join("");const s=[{title:"市场验证先行",desc:"创业前先验证市场需求，避免盲目投入"},{title:"现金流为王",desc:"保持充足的现金流，避免资金链断裂"},{title:"团队很关键",desc:"选择志同道合、能力互补的合伙人"},{title:"小步快跑",desc:"先做最小可行产品，快速迭代验证"}],o=document.getElementById("startupGuide");o.innerHTML=s.map((d,r)=>`
    <div class="guide-tip">
      <div class="tip-icon">🎯</div>
      <div class="tip-content">
        <div class="tip-title">${d.title}</div>
        <div class="tip-desc">${d.desc}</div>
      </div>
    </div>
  `).join("")}function U(){if(I=document.getElementById("mainKlineCanvas"),!I)return;const t=document.getElementById("mainCanvasContainer").getBoundingClientRect(),i=window.devicePixelRatio||1;I.width=t.width*i,I.height=t.height*i,I.style.width=t.width+"px",I.style.height=t.height+"px",H=I.getContext("2d"),H.scale(i,i)}function C(e,t,i){if(!H||!I)return;const n=H,l=document.getElementById("mainCanvasContainer").getBoundingClientRect(),a=l.width,s=l.height;if(n.fillStyle="rgba(0, 0, 0, 0.3)",n.fillRect(0,0,a,s),e.length===0)return;const o={top:30,right:60,bottom:50,left:20},d=a-o.left-o.right,r=s-o.top-o.bottom,p=d/e.length,g=Math.floor((t-o.left)/p),L=g>=0&&g<e.length,w=t/a,B=Math.cos(w*Math.PI*2)*2;n.strokeStyle="rgba(255, 255, 255, 0.05)",n.lineWidth=1;for(let m=0;m<=5;m++){const E=o.top+r/5*m;n.beginPath(),n.moveTo(o.left,E),n.lineTo(a-o.right,E),n.stroke()}n.fillStyle="#8892b0",n.font="12px sans-serif",n.textAlign="left";for(let m=0;m<=5;m++){const E=100-m*20,k=o.top+r/5*m;n.fillText(E.toString(),a-o.right+10,k+4)}let u=1/0,f=-1/0;e.forEach(m=>{u=Math.min(u,m.low),f=Math.max(f,m.high)}),u=Math.max(0,u-5),f=f+5,e.forEach((m,E)=>{const k=o.left+p*E+p/2,x=E===g,D=1+(i/s-.5)*.1,z=(m.open-u)/(f-u)*r*D,F=(m.close-u)/(f-u)*r*D,K=(m.high-u)/(f-u)*r*D,X=(m.low-u)/(f-u)*r*D,O=F>=z?"#ef5350":"#26a69a",P=k+B;n.beginPath(),n.strokeStyle=x?"#64ffda":O,n.lineWidth=x?2:1,n.moveTo(P,o.top+r-K),n.lineTo(P,o.top+r-X),n.stroke();const J=o.top+r-Math.max(z,F),Q=Math.abs(F-z),W=Math.min(p*.6,30);n.fillStyle=x?"#64ffda":O,n.fillRect(P-W/2,J,W,Math.max(Q,2)),n.fillStyle=x?"#64ffda":"#8892b0",n.font=x?"bold 10px sans-serif":"10px sans-serif",n.textAlign="center";const ee=m.time.split(" ")[0];n.fillText(ee,k,s-o.bottom+15)}),L&&t>o.left&&t<a-o.right&&(n.strokeStyle="rgba(100, 255, 218, 0.5)",n.lineWidth=1,n.setLineDash([5,5]),n.beginPath(),n.moveTo(t,o.top),n.lineTo(t,s-o.bottom),n.stroke(),n.beginPath(),n.moveTo(o.left,i),n.lineTo(a-o.right,i),n.stroke(),n.setLineDash([]),ye(e[g],t,i),fe(e[g]))}function ye(e,t,i){const n=document.getElementById("mainTooltip"),l=document.getElementById("mainCanvasContainer").getBoundingClientRect(),a=e.close>=e.open;n.innerHTML=`
    <div class="tooltip-title">时期：${e.time}</div>
    <div class="tooltip-row">
      <span class="tooltip-label">运势开盘</span>
      <span class="tooltip-value ${a?"up":"down"}">${e.open.toFixed(1)}</span>
    </div>
    <div class="tooltip-row">
      <span class="tooltip-label">运势收盘</span>
      <span class="tooltip-value ${a?"up":"down"}">${e.close.toFixed(1)}</span>
    </div>
    <div class="tooltip-row">
      <span class="tooltip-label">最高运势</span>
      <span class="tooltip-value">${e.high.toFixed(1)}</span>
    </div>
    <div class="tooltip-row">
      <span class="tooltip-label">最低运势</span>
      <span class="tooltip-value">${e.low.toFixed(1)}</span>
    </div>
  `,n.classList.add("active");let s=t+15,o=i-60;s+180>l.width&&(s=t-180),o<10&&(o=10),n.style.left=s+"px",n.style.top=o+"px"}function fe(e){const t=e.close>=e.open,i=((e.open+e.close)/2).toFixed(1);document.getElementById("mainCurrentValue").textContent=i,document.getElementById("mainCurrentValue").style.color=t?"#ef5350":"#26a69a",document.getElementById("mainTrendValue").textContent=t?"上升 ↗":"下降 ↘",document.getElementById("mainTrendValue").style.color=t?"#ef5350":"#26a69a";const n=parseFloat(i);document.getElementById("mainWuxingStrength").textContent=n>60?"五行平衡":n>40?"五行偏弱":"五行不足";const c=["稳中求进","开拓创新","守成为主","积极进取","蓄势待发","把握机遇","谨慎行事","顺势而为"];document.getElementById("mainSuggestion").textContent=c[Math.floor(e.close/12.5)]}function Z(e){const i=document.getElementById("mainCanvasContainer").getBoundingClientRect();let n,c;"touches"in e?(n=e.touches[0].clientX,c=e.touches[0].clientY):(n=e.clientX,c=e.clientY),M=Math.max(0,Math.min(n-i.left,i.width)),b=Math.max(0,Math.min(c-i.top,i.height));const l=R&&h?h.seed:19900101,a=$(l,A);C(a,M,b)}function Ee(e){A=e,document.querySelectorAll("#mainDimensionTabs .dimension-tab").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-dimension")===e)});const t=R&&h?h.seed:19900101,i=$(t,e);C(i,M,b)}function Ie(){const e=v.year,t=v.month,i=v.day,n=v.hour,c=v.gender,l=le(e,t,i,n),a=de(l),s=re(e,t,i,n);h={year:e,month:t,day:i,hour:n,gender:c,bazi:l,wuxing:a,bagua:s,seed:e*1e4+t*100+i+n*.1},R=!0,document.getElementById("mainKlineBadge").textContent="您的结果",document.getElementById("mainKlineBadge").style.background="linear-gradient(135deg, #4ade80, #22c55e)",me(h),ge(h),pe(h),ve(h),he(h),document.getElementById("resultSection").classList.add("active");const o=$(h.seed,A);C(o,M,b)}document.addEventListener("DOMContentLoaded",()=>{ie(),setTimeout(()=>{if(U(),!I)return;const l=document.getElementById("mainCanvasContainer"),a=l.getBoundingClientRect();M=a.width/2,b=a.height/2,l.addEventListener("mousemove",Z),l.addEventListener("touchmove",Z,{passive:!0}),document.querySelectorAll("#mainDimensionTabs .dimension-tab").forEach(o=>{o.addEventListener("click",()=>{Ee(o.getAttribute("data-dimension"))})});const s=$(19900101,A);C(s,M,b)},100),document.getElementById("calculateBtn").addEventListener("click",Ie),window.addEventListener("resize",()=>{U();const l=R&&h?h.seed:19900101,a=$(l,A);C(a,M,b)});const e=document.getElementById("wechatPopup"),t=document.getElementById("wechatOverlay"),i=document.getElementById("wechatPopupClose");function n(l){l.preventDefault(),e?.classList.add("active"),t?.classList.add("active")}function c(){e?.classList.remove("active"),t?.classList.remove("active")}document.querySelectorAll(".wechat-btn").forEach(l=>{l.addEventListener("click",n)}),i?.addEventListener("click",c),t?.addEventListener("click",c)});
