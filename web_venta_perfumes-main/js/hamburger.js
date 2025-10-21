// Simple hamburger toggle for responsive nav
(function(){
  function onReady(fn){
    if(document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn);
  }

  onReady(function(){
    const toggles = document.querySelectorAll('.hamburger');
    toggles.forEach(btn => {
      btn.addEventListener('click', function(){
        const header = btn.closest('header');
        if(!header) return;
        const nav = header.querySelector('nav');
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        nav && nav.classList.toggle('open');
        btn.classList.toggle('open');
      });
    });

    // allow clicking the logo image to toggle the menu on small screens
    const logos = document.querySelectorAll('.logo img');
    logos.forEach(logo => {
      logo.addEventListener('click', function(e){
        const mq = window.matchMedia('(max-width: 1024px)');
        if(!mq.matches) return; // only on tablet/phone
        const header = logo.closest('header');
        if(!header) return;
        const nav = header.querySelector('nav');
        const btn = header.querySelector('.hamburger');
        if(nav){
          const isOpen = nav.classList.contains('open');
          nav.classList.toggle('open');
          if(btn) {
            btn.classList.toggle('open', !isOpen);
            btn.setAttribute('aria-expanded', String(!isOpen));
          }
        }
        // prevent default navigation if logo is wrapped in a link
        e.preventDefault && e.preventDefault();
      });
    });

    // click outside to close
    document.addEventListener('click', function(e){
      const openNavs = document.querySelectorAll('nav.open');
      openNavs.forEach(nav => {
        const header = nav.closest('header');
        const btn = header ? header.querySelector('.hamburger') : null;
        if(header && btn && !header.contains(e.target)){
          nav.classList.remove('open');
          btn.setAttribute('aria-expanded','false');
          btn.classList.remove('open');
        }
      });
    });
  });
})();