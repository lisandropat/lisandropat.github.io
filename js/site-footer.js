/* =========================================================
   <site-footer> — reveal footer (native Custom Element).
   Light DOM on purpose so Tailwind (CDN) and styles.css apply.
   Renders a spacer (scroll room) + the fixed footer that the
   page content uncovers as you scroll. Load this before main.js.
   ========================================================= */

const FOOTER_HTML = `
  <div class="footer-spacer" aria-hidden="true"></div>
  <footer class="reveal-footer text-center bg-black overflow-hidden">
    <div>
      <div class="relative max-w-[1080px] px-[10px] mx-auto pt-[12vh]">
        <div class="text-center lg:text-left text-white text-[32px] lg:text-[76px] mb-[10vh] lg:mb-[20vh]">
          <p class="lg:mb-[-25px]">Let's build your ideas</p>
          <a href="mailto:lisandropat@gmail.com">
            <span class="inline-block" style="background-image:linear-gradient(rgba(255,255,255,.25),rgba(255,255,255,.25));background-size:100% 1px;background-position:0 100%;background-repeat:no-repeat;">
              <span class="line-grow-white font-extralight">lisandropat@gmail.com</span>
            </span>
          </a>
        </div>
        <div class="lg:flex w-full justify-between text-center lg:text-left">
          <div class="mb-[40px] max-w-[300px] mx-auto lg:mx-0">
            <img src="assets/clip.png" alt="Lisandro" title="😎" class="w-[70px] rounded-full mx-auto lg:mx-0" />
            <p class="text-[14px] mt-[20px] text-grayc text-center lg:text-left">
              Website design and <a href="https://github.com/lisandropat" target="_blank" rel="noopener" class="underline">dev by me</a>
              <span class="block text-white mt-[20px]">Last update in <span data-year></span></span>
            </p>
          </div>
          <div class="flex text-left text-[20px] text-white w-full lg:w-[25vw] mt-[60px] justify-around lg:justify-between">
            <a href="https://www.linkedin.com/in/lisandropat/" target="_blank" rel="noopener"><span class="line-grow-white">LinkedIn</span></a>
            <a href="https://www.behance.net/lisandropat" target="_blank" rel="noopener"><span class="line-grow-white">Behance</span></a>
            <a href="https://github.com/lisandropat" target="_blank" rel="noopener"><span class="line-grow-white">GitHub</span></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
`;

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = FOOTER_HTML;
  }
}

customElements.define('site-footer', SiteFooter);
