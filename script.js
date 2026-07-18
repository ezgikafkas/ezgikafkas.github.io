const tabs=document.querySelectorAll('.tab');
tabs.forEach(tab=>tab.addEventListener('click',()=>{tabs.forEach(t=>{t.classList.remove('active');t.setAttribute('aria-selected','false')});document.querySelectorAll('.panel').forEach(p=>{p.classList.remove('active');p.hidden=true});tab.classList.add('active');tab.setAttribute('aria-selected','true');const panel=document.getElementById(tab.dataset.target);panel.hidden=false;panel.classList.add('active')}));
const perfxContent=[
  ['Ürün Hakkında','Perfx; çalışan hedefleri, performans değerlendirmeleri, geri bildirim ve gelişim planlarını tek platformda bir araya getiren organizasyonel performans ürünüdür.','perfx-dashboard.png'],
  ['Problemler','Mevcut deneyimde dağınık bilgi mimarisi, yoğun içerik hiyerarşisi ve kullanıcıların aradıkları aksiyona ulaşmasını zorlaştıran akışlar belirlendi.','perfx-detail.png'],
  ['Geliştirilen Çözümler','Kullanıcı yolculukları sadeleştirildi; ürün değer önerisi görünür kılındı ve tasarım sistemiyle tutarlı, dönüşüm odaklı sayfa yapıları geliştirildi.','perfx-detail.png'],
  ['Ekipler Arası İş Birliği','Ürün, pazarlama ve yazılım ekipleriyle ortak hedefler üzerinden çalışılarak tasarım kararlarının hem kullanıcı hem iş ihtiyaçlarını karşılaması sağlandı.','perfx-dashboard.png']
];
document.querySelectorAll('.case-nav button').forEach((button,index)=>button.addEventListener('click',()=>{const nav=button.parentElement;nav.querySelectorAll('button').forEach(b=>b.classList.remove('active'));button.classList.add('active');const detail=button.closest('.case').querySelector('.case-detail');detail.querySelector('h4').textContent=perfxContent[index][0];detail.querySelector('p').textContent=perfxContent[index][1];detail.querySelector('img').src=perfxContent[index][2]}));
document.querySelectorAll('[data-creative]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-creative]').forEach(b=>b.classList.remove('active'));button.classList.add('active');button.closest('.creative-card').querySelector('h3').textContent=button.dataset.creative}));
document.getElementById('year').textContent=new Date().getFullYear();
