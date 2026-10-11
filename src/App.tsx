import { type FormEvent, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Crown,
  Fan,
  MapPin,
  Menu,
  MessageCircleMore,
  Phone,
  Scissors,
  Send,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  X,
} from 'lucide-react';
import { services } from './data/services';
import { products } from './data/products';
import { buildWhatsAppUrl } from './utils/whatsapp';

type ProductFilter = 'All' | 'Custom Wear' | 'Headpieces' | 'Accessories' | 'Bridal Fans';

type FormState = {
  name: string;
  contactMethod: string;
  category: string;
  description: string;
  preferredDate: string;
};

const navLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'custom-orders', label: 'Custom Orders', href: '#contact' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

const qualities = [
  'Quality Craftsmanship',
  'Custom Designs',
  'Premium Materials',
  'Attention to Every Detail',
  'Made with Love',
];

const reasons = [
  { title: 'Personalised Designs', description: 'Designs tailored to individual preferences and occasions.' },
  { title: 'Attention to Detail', description: 'Careful finishing and attention to garment and accessory details.' },
  { title: 'A Variety of Services', description: 'Sewing, fascinators, headpieces, accessories, and bridal fans.' },
  { title: 'Direct Communication', description: 'Customers communicate directly with the business through WhatsApp.' },
  { title: 'Customer-Focused Service', description: 'Enquiries and custom requests receive personal attention.' },
];

const steps = [
  { title: 'Explore', text: 'Browse the available services and featured collection.' },
  { title: 'Send an Enquiry', text: 'Click the WhatsApp button on the relevant service or product.' },
  { title: 'Confirm Your Order', text: 'Discuss measurements, design preferences, availability, pricing, and collection or delivery arrangements directly with Crown & Stitch.' },
];

const galleryFilters: ProductFilter[] = ['All', 'Custom Wear', 'Headpieces', 'Accessories', 'Bridal Fans'];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<ProductFilter>('All');
  const [formState, setFormState] = useState<FormState>({
    name: '',
    contactMethod: 'WhatsApp',
    category: 'Custom Sewing',
    description: '',
    preferredDate: '',
  });

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'All') return products;
    return products.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  const handleChange = (field: keyof FormState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const values = Object.values(formState);
    const hasMissing = values.some((value) => value.trim() === '');

    if (hasMissing) {
      window.alert('Please complete all required fields before sending your enquiry.');
      return;
    }

    const message = `Customer Name: ${formState.name}\nPreferred contact method: ${formState.contactMethod}\nService category: ${formState.category}\nDesign details: ${formState.description}\nPreferred date: ${formState.preferredDate || 'Not specified'}`;
    const whatsappUrl = buildWhatsAppUrl('Custom Order', formState.category, 'Custom Order', message);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#f8f0e3] text-[#24140f]">
      <header className="sticky top-0 z-50 border-b border-[#c49a3a]/40 bg-[#3b0715]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3 text-[#f8f0e3]" aria-label="Crown & Stitch home">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5c98b] bg-[#4a0b1c] text-[#e5c98b] shadow-[0_0_20px_rgba(197,154,58,0.25)]">
              <Crown size={18} />
            </span>
            <span>
              <span className="block font-display text-xl tracking-[0.15em]">Crown & Stitch</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#f5e7d2] lg:flex">
            {navLinks.map((link) => (
              <a key={link.id} href={link.href} className="transition hover:text-[#e5c98b]">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href={buildWhatsAppUrl('Business enquiry')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#e5c98b] bg-[#c49a3a] px-5 py-2.5 font-semibold text-[#24140f] transition hover:-translate-y-0.5 hover:bg-[#d6af5d]"
            >
              <MessageCircleMore size={18} />
              Chat on WhatsApp
            </a>
          </div>

          <button
            type="button"
            className="rounded-full border border-[#e5c98b] p-2 text-[#f8f0e3] lg:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#c49a3a]/30 bg-[#3b0715] px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-3 text-[#f8f0e3]">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="rounded-md px-2 py-2 text-sm transition hover:bg-[#4a0b1c]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={buildWhatsAppUrl('Business enquiry')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#c49a3a] px-4 py-2 font-semibold text-[#24140f]"
                onClick={() => setMenuOpen(false)}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section className="relative overflow-hidden border-b border-[#c49a3a]/50 bg-[radial-gradient(circle_at_top,rgba(229,201,139,0.22),rgba(248,240,227,0.96)_30%,rgba(248,240,227,1)_60%)]">
          <div className="absolute inset-0 opacity-60" aria-hidden="true">
            <div className="h-full w-full bg-[linear-gradient(120deg,rgba(59,7,21,0.12),rgba(196,154,58,0.02),rgba(59,7,21,0.1))]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c49a3a] bg-[#f8f0e3]/80 px-4 py-2 text-[11px] font-semibold tracking-[0.25em] text-[#3b0715] uppercase shadow-sm">
                <Sparkles size={14} className="text-[#c49a3a]" />
                Crown & Stitch
              </div>

              <h1 className="font-display text-5xl leading-[0.9] text-[#3b0715] sm:text-6xl md:text-7xl lg:text-[7rem]">
                Sewn with Passion,
                <span className="block text-[#3b0715]/80">Crowned with Style.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4a0b1c] sm:text-lg">
                Luxury fashion and tailored craftsmanship for memorable occasions, elegant styling, and beautifully finished pieces that help you stand out.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#gallery"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3b0715] px-7 py-3.5 text-sm font-semibold text-[#f8f0e3] transition hover:-translate-y-0.5 hover:bg-[#4a0b1c]"
                >
                  Explore Our Collection
                  <ArrowRight size={18} />
                </a>
                <a
                  href={buildWhatsAppUrl('Order enquiry', 'Custom Sewing', 'Custom Sewing')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#3b0715] bg-[#fff9f0] px-7 py-3.5 text-sm font-semibold text-[#3b0715] transition hover:-translate-y-0.5 hover:border-[#c49a3a] hover:text-[#4a0b1c]"
                >
                  Order on WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              className="relative mx-auto w-full max-w-xl"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            >
              <div className="absolute -inset-4 rounded-[28px] bg-[radial-gradient(circle,rgba(196,154,58,0.25),transparent_65%)] blur-3xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[30px] border border-[#c49a3a]/80 bg-[#3b0715] p-4 shadow-[0_35px_80px_rgba(59,7,21,0.28)]">
                <img
                  src="/images/work/custom-gown-purple-front.jpeg"
                  alt="A richly colored custom gown displayed on a mannequin"
                  className="h-[620px] w-full rounded-[24px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-4 rounded-[22px] border border-[#c49a3a]/60 bg-[#fff9f0]/70 p-5 shadow-[0_10px_35px_rgba(59,7,21,0.06)] md:grid-cols-5">
            {[
              { icon: <Scissors size={22} />, label: 'Sewing', value: 'Custom tailoring' },
              { icon: <Sparkles size={22} />, label: 'Fascinators & Headpieces', value: 'Feature pieces' },
              { icon: <ShoppingBag size={22} />, label: 'Accessories', value: 'Style essentials' },
              { icon: <Fan size={22} />, label: 'Bridal Fans', value: 'Wedding elegance' },
              { icon: <ShieldCheck size={22} />, label: 'Quality Stitching', value: 'Finishing details' },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 rounded-2xl border border-[#c49a3a]/35 bg-[#fff9f0] px-4 py-5 text-[#3b0715]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c49a3a] bg-[#f8f0e3] text-[#c49a3a]">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold uppercase tracking-[0.12em] text-[0.58rem]">{item.label}</p>
                  <p className="mt-1 text-xs text-[#4a0b1c]">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold tracking-[0.24em] text-[#3b0715] uppercase">Our Signature Services</p>
            <h2 className="mt-4 font-display text-4xl text-[#3b0715] sm:text-5xl">From fabric to finish, every detail is made to help you stand out.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[26px] border border-[#c49a3a]/60 bg-[#fff9f0] shadow-[0_25px_60px_rgba(59,7,21,0.08)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} by Crown & Stitch`}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4 p-5">
                  <h3 className="font-display text-2xl text-[#3b0715]">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-[#4a0b1c]">{service.description}</p>
                  <a
                    href={buildWhatsAppUrl(service.title, service.category, service.title === 'Custom Sewing' ? 'Custom Sewing' : service.title === 'Fascinators & Headpieces' ? 'Fascinators and Headpieces' : 'General enquiry')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#c49a3a] bg-[#f8f0e3] px-4 py-2 text-sm font-semibold text-[#3b0715] transition hover:bg-[#e5c98b]"
                  >
                    Make an Enquiry
                    <ArrowRight size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="gallery" className="bg-[#fff8f1] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold tracking-[0.22em] text-[#3b0715] uppercase">Featured Collection</p>
                <h2 className="mt-3 font-display text-4xl text-[#3b0715] sm:text-5xl">Elegance in Every Detail</h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {galleryFilters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                      activeFilter === filter
                        ? 'border-[#c49a3a] bg-[#3b0715] text-[#f8f0e3]'
                        : 'border-[#c49a3a]/60 bg-[#fff9f0] text-[#3b0715] hover:bg-[#f4e4c4]'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product, index) => (
                <motion.article
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="overflow-hidden rounded-[26px] border border-[#c49a3a]/50 bg-[#fff9f0] shadow-[0_25px_60px_rgba(59,7,21,0.08)]"
                >
                  <img src={product.image} alt={product.name} className="h-72 w-full object-cover" />
                  <div className="space-y-3 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4a0b1c]">{product.category}</p>
                        <h3 className="mt-1 font-display text-2xl text-[#3b0715]">{product.name}</h3>
                      </div>
                      <Star className="text-[#c49a3a]" size={18} fill="currentColor" />
                    </div>
                    <p className="text-sm leading-relaxed text-[#4a0b1c]">{product.description}</p>
                    <a
                      href={buildWhatsAppUrl(product.name, product.category.toLowerCase().replace(' ', '-'), 'Product enquiry')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#3b0715] px-4 py-2 text-sm font-semibold text-[#f8f0e3] transition hover:bg-[#4a0b1c]"
                    >
                      Enquire on WhatsApp
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1.06fr_0.94fr]">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
              <p className="text-sm font-semibold tracking-[0.22em] text-[#3b0715] uppercase">About Crown & Stitch</p>
              <h2 className="mt-3 font-display text-4xl text-[#3b0715] sm:text-5xl">Crafted with Passion. Designed for You.</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#4a0b1c]">
                At Crown & Stitch, we believe every outfit and accessory should reflect the personality of the person wearing it. Our focus is on thoughtful designs, careful stitching, beautiful finishing, and attention to detail.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {qualities.map((quality) => (
                  <div key={quality} className="flex items-center gap-3 rounded-2xl border border-[#c49a3a]/45 bg-[#fff9f0] px-4 py-3 text-[#3b0715]">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5e2b0] text-[#3b0715]">
                      <Check size={16} />
                    </span>
                    <span className="text-sm font-medium">{quality}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 -translate-x-6 translate-y-6 rounded-[28px] bg-[#c49a3a]/30 blur-xl" aria-hidden="true" />
              <img
                src="/images/work/fascinator-gold-floral.jpeg"
                alt="A handcrafted gold floral fascinator displayed on a mannequin"
                className="relative h-[540px] w-full rounded-[28px] border border-[#c49a3a]/60 object-cover shadow-[0_35px_70px_rgba(59,7,21,0.18)]"
              />
            </motion.div>
          </div>
        </section>

        <section className="bg-[#3b0715] py-16 text-[#f8f0e3]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold tracking-[0.22em] text-[#e5c98b] uppercase">Why Crown & Stitch?</p>
              <h2 className="mt-4 font-display text-4xl text-[#f8f0e3] sm:text-5xl">Luxury craftsmanship with a personal touch.</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-[22px] border border-[#c49a3a]/50 bg-[#4a0b1c] p-5"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f5e2b0] text-[#3b0715]">
                    <Sparkles size={18} />
                  </div>
                  <h3 className="font-display text-2xl text-[#f8f0e3]">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#f5e7d2]">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold tracking-[0.22em] text-[#3b0715] uppercase">How to Place an Order</p>
            <h2 className="mt-4 font-display text-4xl text-[#3b0715] sm:text-5xl">Simple steps, beautiful results.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[24px] border border-[#c49a3a]/55 bg-[#fff9f0] p-6 shadow-[0_18px_45px_rgba(59,7,21,0.06)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#3b0715] font-display text-2xl text-[#e5c98b]">
                  {index + 1}
                </div>
                <h3 className="font-display text-3xl text-[#3b0715]">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4a0b1c]">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-[#f3e7d6] py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="rounded-[28px] border border-[#c49a3a]/60 bg-[#fff9f0] p-6 shadow-[0_25px_50px_rgba(59,7,21,0.08)]">
              <p className="text-sm font-semibold tracking-[0.22em] text-[#3b0715] uppercase">Contact</p>
              <h2 className="mt-3 font-display text-4xl text-[#3b0715]">Crown & Stitch</h2>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MessageCircleMore className="mt-1 text-[#c49a3a]" size={18} />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#3b0715]">WhatsApp</p>
                    <a href={buildWhatsAppUrl('Business enquiry')} target="_blank" rel="noopener noreferrer" className="text-[#4a0b1c] underline-offset-4 hover:text-[#3b0715] hover:underline">
                      0241920331
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-1 text-[#c49a3a]" size={18} />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#3b0715]">Telephone</p>
                    <a href="tel:0539555343" className="block text-[#4a0b1c] hover:text-[#3b0715]">0539555343</a>
                    <a href="tel:0241920331" className="block text-[#4a0b1c] hover:text-[#3b0715]">0241920331</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShoppingBag className="mt-1 text-[#c49a3a]" size={18} />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#3b0715]">TikTok</p>
                    <a href="https://www.tiktok.com/@crownandstitch_" target="_blank" rel="noopener noreferrer" className="text-[#4a0b1c] underline-offset-4 hover:text-[#3b0715] hover:underline">
                      @crownandstitch_
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 text-[#c49a3a]" size={18} />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#3b0715]">Location</p>
                    <p className="text-[#4a0b1c]">Akwatia Akwadum, Ghana</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#c49a3a]/60 bg-[#fff9f0] p-6 shadow-[0_25px_50px_rgba(59,7,21,0.08)]">
              <p className="text-sm font-semibold tracking-[0.2em] text-[#3b0715] uppercase">Custom Order Enquiry</p>
              <h3 className="mt-3 font-display text-3xl text-[#3b0715]">Tell us about your vision.</h3>

              <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block text-sm font-medium text-[#3b0715]">
                    Customer name
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(event) => handleChange('name', event.target.value)}
                      className="mt-2 w-full rounded-xl border border-[#c49a3a]/60 bg-[#fff] px-4 py-3 text-[#24140f] outline-none transition focus:border-[#3b0715]"
                      required
                    />
                  </label>

                  <label className="block text-sm font-medium text-[#3b0715]">
                    Preferred contact method
                    <select
                      value={formState.contactMethod}
                      onChange={(event) => handleChange('contactMethod', event.target.value)}
                      className="mt-2 w-full rounded-xl border border-[#c49a3a]/60 bg-[#fff] px-4 py-3 text-[#24140f] outline-none transition focus:border-[#3b0715]"
                    >
                      <option>WhatsApp</option>
                      <option>Phone call</option>
                      <option>Instagram / TikTok</option>
                    </select>
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block text-sm font-medium text-[#3b0715]">
                    Service category
                    <select
                      value={formState.category}
                      onChange={(event) => handleChange('category', event.target.value)}
                      className="mt-2 w-full rounded-xl border border-[#c49a3a]/60 bg-[#fff] px-4 py-3 text-[#24140f] outline-none transition focus:border-[#3b0715]"
                    >
                      <option>Custom Sewing</option>
                      <option>Fascinators & Headpieces</option>
                      <option>Accessories</option>
                      <option>Bridal Fans</option>
                      <option>Quality Stitching</option>
                    </select>
                  </label>

                  <label className="block text-sm font-medium text-[#3b0715]">
                    Preferred date
                    <input
                      type="date"
                      value={formState.preferredDate}
                      onChange={(event) => handleChange('preferredDate', event.target.value)}
                      className="mt-2 w-full rounded-xl border border-[#c49a3a]/60 bg-[#fff] px-4 py-3 text-[#24140f] outline-none transition focus:border-[#3b0715]"
                    />
                  </label>
                </div>

                <label className="block text-sm font-medium text-[#3b0715]">
                  Description of requested design
                  <textarea
                    value={formState.description}
                    onChange={(event) => handleChange('description', event.target.value)}
                    required
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-[#c49a3a]/60 bg-[#fff] px-4 py-3 text-[#24140f] outline-none transition focus:border-[#3b0715]"
                    placeholder="Tell us about the style, colours, occasion, and details you need."
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#3b0715] px-6 py-3 text-sm font-semibold text-[#f8f0e3] transition hover:bg-[#4a0b1c]"
                >
                  Send enquiry via WhatsApp
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#3b0715] text-[#f8f0e3]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5c98b] bg-[#4a0b1c] text-[#e5c98b]">
                <Crown size={18} />
              </span>
              <span className="font-display text-3xl">Crown & Stitch</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#f5e7d2]">
              Fashion, accessories, bespoke tailoring, and handcrafted details inspired by elegance and confidence.
            </p>
          </div>

          <div>
            <h3 className="font-display text-2xl text-[#e5c98b]">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#f7e7d4]">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="transition hover:text-[#e5c98b]">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-2xl text-[#e5c98b]">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#f7e7d4]">
              <li><a href={buildWhatsAppUrl('Business enquiry')} target="_blank" rel="noopener noreferrer" className="hover:text-[#e5c98b]">WhatsApp: 0241920331</a></li>
              <li><a href="tel:0539555343" className="hover:text-[#e5c98b]">Telephone: 0539555343 / 0241920331</a></li>
              <li><a href="https://www.tiktok.com/@crownandstitch_" target="_blank" rel="noopener noreferrer" className="hover:text-[#e5c98b]">TikTok: @crownandstitch_</a></li>
              <li className="text-[#f7e7d4]">Location: Akwatia Akwadum, Ghana</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#c49a3a]/50 py-5 text-center text-sm text-[#f5e7d2]">
          © {new Date().getFullYear()} Crown & Stitch. Wear Your Crown. Own Your Style.
        </div>
      </footer>

      <a
        href={buildWhatsAppUrl('Website enquiry')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_16px_40px_rgba(37,211,102,0.38)] transition hover:scale-105"
      >
        <MessageCircleMore size={28} />
      </a>
    </div>
  );
}
