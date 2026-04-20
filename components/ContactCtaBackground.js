/** Full-bleed canvas animation behind contact CTA (iframe loads public animation). */
export default function ContactCtaBackground() {
  return (
    <div className="contact-cta-bg-embed" aria-hidden="true">
      <iframe
        className="contact-cta-bg-iframe"
        src="/animations/fiber_optic_deepsea_slow.html"
        title=""
        loading="lazy"
      />
      <div className="contact-cta-bg-dim" />
    </div>
  );
}
