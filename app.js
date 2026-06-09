
// today's date
(function(){
  var days=['יום ראשון','יום שני','יום שלישי','יום רביעי','יום חמישי','יום שישי','שבת'];
  var months=['ינואר','פברואר','מרץ','אפריל','מאי','יוני','יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר'];
  var d=new Date(), el=document.getElementById('todayDate');
  if(el) el.textContent=days[d.getDay()]+', '+d.getDate()+' ב'+months[d.getMonth()]+' '+d.getFullYear();
})();
// live search
(function(){
  var idx=window.__JS_INDEX__||[];
  var inp=document.getElementById('search'), box=document.getElementById('searchResults');
  if(!inp||!box) return;
  function render(q){
    q=q.trim();
    if(!q){box.classList.remove('show');box.innerHTML='';return;}
    var r=idx.filter(function(i){return i.t.indexOf(q)>-1||i.c.indexOf(q)>-1;}).slice(0,6);
    if(!r.length){box.innerHTML='<div class="empty">לא נמצאו תוצאות עבור \u201c'+q+'\u201d</div>';}
    else{box.innerHTML=r.map(function(i){return '<a href="'+i.u+'">'+i.t+'</a>';}).join('');}
    box.classList.add('show');
  }
  inp.addEventListener('input',function(){render(this.value);});
  inp.addEventListener('focus',function(){if(this.value)render(this.value);});
  document.addEventListener('click',function(ev){if(!box.contains(ev.target)&&ev.target!==inp)box.classList.remove('show');});
})();
// mobile menu
(function(){
  var btn=document.getElementById('menuToggle'), nav=document.getElementById('mainnav');
  if(!btn||!nav) return;
  btn.addEventListener('click',function(){nav.classList.toggle('open');});
})();
// standings tabs
(function(){
  document.querySelectorAll('.standings .tabs button').forEach(function(b){
    b.addEventListener('click',function(){
      var box=b.closest('.standings');
      box.querySelectorAll('.tabs button').forEach(function(x){x.classList.remove('on');});
      box.querySelectorAll('.tbl').forEach(function(x){x.classList.remove('on');});
      b.classList.add('on');
      box.querySelector('.tbl[data-t="'+b.dataset.t+'"]').classList.add('on');
    });
  });
})();
