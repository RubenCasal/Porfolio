/* empty css                                      */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderSlot, b as renderComponent } from '../chunks/astro/server_DCQTBi0F.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$SectionContainer, a as $$SocialPill, b as $$LinkedIn, c as $$Layout } from '../chunks/Layout_HnkekfTU.mjs';
export { renderers } from '../renderers.mjs';

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center "> <span class="relative inline-flex overflow-hidden rounded-full p-[1px]"> <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span> <div class="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap"> ${renderSlot($$result, $$slots["default"])} </div> </span> </div>`;
}, "C:/Users/Ruben/Desktop/portafolio/porfolio.dev/src/components/Badge.astro", void 0);

const $$Components = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Design System porfolio.dev", "description": "El cat\xE1logo de componentes de nuestro porfolio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-44 pb-32 flex flex-col gap-y-10" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<article class="mb-10"> <h1 class="mb-4 text-xl font-semibold">&lt;Badge /&gt;</h1> ${renderComponent($$result3, "Badge", $$Badge, {}, { "default": ($$result4) => renderTemplate`Disponible para trabajar` })} </article> <article class="mb-10"> <h1 class="mb-4 text-xl font-semibold">&lt SocialPill /&gt;</h1> <div class="flex"> ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://linkedin.com/in/midudev" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "LinkedInIcon", $$LinkedIn, { "class": "size-4 md:size-6" })}
LinkedIn
` })} </div> </article> ` })} ` })}`;
}, "C:/Users/Ruben/Desktop/portafolio/porfolio.dev/src/pages/components.astro", void 0);

const $$file = "C:/Users/Ruben/Desktop/portafolio/porfolio.dev/src/pages/components.astro";
const $$url = "/components";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Components,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
