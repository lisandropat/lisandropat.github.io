/* =========================================================
   <site-header> — navbar + menu drawer (native Custom Element).
   Light DOM on purpose so Tailwind (CDN) and styles.css apply.
   Usage:
     <site-header></site-header>                 normal pages
     <site-header active="about"></site-header>  marks "About" as current
   Load this before main.js.
   ========================================================= */

const HEADER_HTML = `
  <nav>
    <a href="index.html">
      <h1 class="fadeIn absolute z-10 top-[21px] left-[20px] xl:left-[64px] lg:top-[60px] text-[21px] font-medium">
        Lisandro ⎯ Pat
      </h1>
    </a>

    <div class="fadeIn absolute z-[4] top-[20px] right-[80px] lg:top-[62px] lg:right-[118px]">
      <span class="text-[20px]">menu</span>
    </div>

    <div class="fadeIn fixed z-[41] right-0 top-0">
      <div class="menu-toggle closed relative h-[80px] w-[130px] top-[-2px] right-[4px] lg:top-[40px] lg:right-[40px] cursor-pointer">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="circle"><span class="fill"></span></span>
      </div>
    </div>
  </nav>

  <div class="drawer-overlay"></div>
  <aside class="drawer">
    <div class="relative h-full">
      <div class="absolute top-1/2 left-[20px] md:left-[6vw] -translate-y-[70%] flex">
        <div class="hidden lg:block">
          <p class="text-[#B2B2B2] mb-[30px]">Social</p>
          <a href="https://www.linkedin.com/in/lisandropat/" target="_blank" rel="noopener"><span class="line-grow text-[16px] block">LinkedIn</span></a>
          <a href="https://www.behance.net/lisandropat" target="_blank" rel="noopener"><span class="line-grow text-[16px] block mt-[20px]">Behance</span></a>
        </div>
        <div class="lg:ml-[110px]">
          <p class="text-[#B2B2B2] text-[16px] mb-[14px]">Menu</p>
          <a href="index.html#work"><span class="line-grow menu-link block">Work</span></a>
          <a href="about.html"><span class="line-grow menu-link block mt-[-14px]">About</span></a>
          <a href="mailto:lisandropat@gmail.com"><span class="line-grow menu-link block mt-[-14px]">Contact</span></a>
        </div>
      </div>
      <div class="absolute bottom-[60px] left-[6vw]">
        <p class="text-[#B2B2B2] text-[16px] mb-[6px]">Get in touch</p>
        <a href="mailto:lisandropat@gmail.com">
          <span class="inline-block" style="background-image:linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.25));background-size:100% 1px;background-position:0 100%;background-repeat:no-repeat;">
            <span class="line-grow text-[16px]">lisandropat@gmail.com</span>
          </span>
        </a>
      </div>
    </div>
  </aside>
`;

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = HEADER_HTML;
    const active = this.getAttribute('active');
    if (active === 'about') {
      const link = this.querySelector('a[href="about.html"] .menu-link');
      if (link) link.classList.add('active');
    }
  }
}

customElements.define('site-header', SiteHeader);
