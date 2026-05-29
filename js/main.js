/* =========================================================
   Lisandro Pat — portfolio (vanilla port from Gatsby)
   ========================================================= */

/* ---------- Menu drawer ---------- */
(function initMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const overlay = document.querySelector('.drawer-overlay');
  const drawer = document.querySelector('.drawer');
  if (!toggle || !drawer) return;

  const open = () => {
    toggle.classList.add('open');
    toggle.classList.remove('closed');
    drawer.classList.add('open');
    overlay && overlay.classList.add('open');
  };
  const close = () => {
    toggle.classList.remove('open');
    toggle.classList.add('closed');
    drawer.classList.remove('open');
    overlay && overlay.classList.remove('open');
  };

  toggle.addEventListener('click', () => {
    if (drawer.classList.contains('open')) close();
    else open();
  });
  overlay && overlay.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
})();

/* ---------- Scroll-to-top arrow ---------- */
(function initScrollArrow() {
  const arrow = document.querySelector('.scroll-arrow');
  if (!arrow) return;

  const check = () => {
    if (window.pageYOffset > 400) arrow.classList.add('show');
    else arrow.classList.remove('show');
  };
  window.addEventListener('scroll', check, { passive: true });
  check();

  arrow.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* Parallax is now handled natively in CSS (animation-timeline: view()). */

/* ---------- Utils for the video cursor ---------- */
const lerp = (a, b, n) => (1 - n) * a + n * b;

const getMousePos = (e) => {
  let posx = 0, posy = 0;
  if (!e) e = window.event;
  if (e.clientX || e.clientY) { posx = e.clientX; posy = e.clientY; }
  return { x: posx, y: posy };
};

const getSiblings = (e) => {
  const siblings = [];
  if (!e.parentNode) return siblings;
  let sibling = e.parentNode.firstChild;
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) siblings.push(sibling);
    sibling = sibling.nextSibling;
  }
  return siblings;
};

/* ---------- Video cursor (ported from GSAP class) ---------- */
let mouse = { x: 0, y: 0 };
window.addEventListener('mousemove', (ev) => (mouse = getMousePos(ev)));

class Cursor {
  constructor(el) {
    if (!el || typeof gsap === 'undefined') return;
    this.Cursor = el;
    this.Cursor.style.opacity = 0;
    this.Item = document.querySelectorAll('.video-hover');
    this.cursorConfigs = {
      x: { previous: 0, current: 0, amt: 0.2 },
      y: { previous: 0, current: 0, amt: 0.2 },
    };
    this.onMouseMoveEv = () => {
      this.cursorConfigs.x.previous = this.cursorConfigs.x.current = mouse.x;
      this.cursorConfigs.y.previous = this.cursorConfigs.y.current = mouse.y;
      gsap.to(this.Cursor, { duration: 1, ease: 'Power3.easeOut', opacity: 1 });
      this.onScaleMouse();
      requestAnimationFrame(() => this.render());
      window.removeEventListener('mousemove', this.onMouseMoveEv);
    };
    window.addEventListener('mousemove', this.onMouseMoveEv);
  }

  onScaleMouse() {
    this.Item.forEach((link) => {
      if (link.matches(':hover')) {
        this.setVideo(link);
        this.ScaleCursor(this.Cursor.children[0], 0.8);
      }
      link.addEventListener('mouseenter', () => {
        this.setVideo(link);
        this.ScaleCursor(this.Cursor.children[0], 0.8);
      });
      link.addEventListener('mouseleave', () => {
        this.ScaleCursor(this.Cursor.children[0], 0);
      });
      // children[1] is the <a> tag inside .video-hover
      if (link.children[1]) {
        link.children[1].addEventListener('mouseenter', () => {
          this.Cursor.classList.add('media-blend');
          this.ScaleCursor(this.Cursor.children[0], 1.2);
        });
        link.children[1].addEventListener('mouseleave', () => {
          this.Cursor.classList.remove('media-blend');
          this.ScaleCursor(this.Cursor.children[0], 0.8);
        });
      }
    });
  }

  setVideo(el) {
    const src = el.getAttribute('data-video-src');
    const video = document.querySelector('#' + src);
    if (!video) return;
    const siblings = getSiblings(video);
    if (video.id === src) {
      gsap.set(video, { zIndex: 4, opacity: 1 });
      siblings.forEach((i) => gsap.set(i, { zIndex: 1, opacity: 0 }));
    }
  }

  ScaleCursor(el, amount) {
    gsap.to(el, { duration: 0.6, scale: amount, ease: 'Power3.easeOut' });
  }

  render() {
    this.cursorConfigs.x.current = mouse.x;
    this.cursorConfigs.y.current = mouse.y;
    for (const key in this.cursorConfigs) {
      this.cursorConfigs[key].previous = lerp(
        this.cursorConfigs[key].previous,
        this.cursorConfigs[key].current,
        this.cursorConfigs[key].amt
      );
    }
    this.Cursor.style.transform =
      `translateX(${this.cursorConfigs.x.previous}px) translateY(${this.cursorConfigs.y.previous}px)`;
    requestAnimationFrame(() => this.render());
  }
}

(function initCursor() {
  const el = document.querySelector('.cursor');
  if (el) new Cursor(el);
})();

/* ---------- Smooth scroll for in-page anchors only ---------- */
(function initAnchorSmooth() {
  document.querySelectorAll('a[href*="#"]').forEach((a) => {
    const url = new URL(a.getAttribute('href'), window.location.href);
    // only same-page hash links (e.g. index.html#work while on index)
    if (url.pathname !== window.location.pathname || !url.hash) return;
    const target = document.querySelector(url.hash);
    if (!target) return;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
})();

/* ---------- Footer year ---------- */
(function initYear() {
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
