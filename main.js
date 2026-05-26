// 외부 링크만 새 탭 — tel/mailto/내부앵커/같은 도메인 서브페이지는 같은 탭 유지
document.addEventListener('DOMContentLoaded', () => {
  const here = location.hostname;
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (!href) return;
    if (href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('#') || href.startsWith('/')) return;
    try {
      const u = new URL(href, location.href);
      if (u.hostname === here) return; // 같은 사이트는 새 탭 X
    } catch (_) {}
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
  });

  // GA 전화 클릭 훅
  document.querySelectorAll('a[href^="tel:"]').forEach(a => {
    a.addEventListener('click', () => {
      try { if (window.gtag) gtag('event', 'click_call', { phone: a.getAttribute('href') }); } catch (_) {}
    });
  });

  // 스크롤 reveal
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  }

  // 서브네비 현재 페이지 강조
  const path = location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.subnav a').forEach(a => {
    const href = (a.getAttribute('href') || '').replace(/\/$/, '') || '/';
    if (href === path) a.classList.add('active');
  });
});
