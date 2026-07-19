const viewButtons=[...document.querySelectorAll('[data-view]')];
const views=[...document.querySelectorAll('[data-view-panel]')];

function showView(name,scroll=true){
  viewButtons.forEach(button=>button.classList.toggle('active',button.dataset.view===name));
  views.forEach(view=>{
    const visible=view.dataset.viewPanel===name;
    view.classList.toggle('active',visible);
    view.hidden=!visible;
  });
  if(scroll) document.getElementById('content').scrollIntoView({behavior:'smooth',block:'start'});
}

viewButtons.forEach(button=>button.addEventListener('click',()=>showView(button.dataset.view)));

const tabs=[...document.querySelectorAll('[data-tab]')];
tabs.forEach(tab=>tab.addEventListener('click',()=>{
  tabs.forEach(item=>{const active=item===tab;item.classList.toggle('active',active);item.setAttribute('aria-selected',String(active));});
  document.querySelectorAll('[data-work-panel]').forEach(panel=>{
    const active=panel.dataset.workPanel===tab.dataset.tab;
    panel.classList.toggle('active',active);
    panel.hidden=!active;
  });
}));

document.querySelectorAll('[data-case]').forEach(card=>{
  const key=card.dataset.case;
  const image=card.querySelector('.case-image img');
  card.querySelectorAll('[data-state]').forEach(button=>button.addEventListener('click',()=>{
    card.querySelectorAll('[data-state]').forEach(item=>item.classList.toggle('active',item===button));
    image.src=`states-${key}-${button.dataset.state}-2x.png?v=11`;
  }));
});

const creativeImage=document.querySelector('.creative-image img');
document.querySelectorAll('[data-creative-state]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-creative-state]').forEach(item=>item.classList.toggle('active',item===button));
  creativeImage.src=`states-creative-${button.dataset.creativeState}-2x.png?v=11`;
}));

const initial=location.hash.replace('#','');
if(['projects','story','contact'].includes(initial)) showView(initial,false);
