"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  FileText,
  Headphones,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  UserRoundCheck,
  UsersRound,
  Workflow,
} from "lucide-react";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useWhatsApp } from "@/components/providers/WhatsAppProvider";

const company = {
  name: "Rocha Arandas",
  fullName: "Rocha Arandas - Sociedade Individual de Advocacia",
  cnpj: "60.605.583/0001-06",
  addressLine1: "Praça Conselheiro Almeida Couto, 000622",
  addressLine2: "Edif. Joia do Jardim, Sala SA 05",
  district: "Nazaré",
  cityState: "Salvador - BA",
  cep: "40050-410",
};

const stats = [
  {
    icon: UsersRound,
    value: "+1.000",
    title: "Clientes atendidos",
    text: "em todo o Brasil",
  },
  {
    icon: BadgeCheck,
    value: "+4 anos",
    title: "De experiência entregando",
    text: "resultados reais",
  },
  {
    icon: Sparkles,
    value: "98%",
    title: "De satisfação em nossas",
    text: "avaliações",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Atendimento Humanizado",
    description:
      "Você fala com pessoas reais que entendem o seu negócio e estão prontas para ajudar.",
  },
  {
    icon: UserRoundCheck,
    title: "Especialistas Atualizados",
    description:
      "Nosso time está sempre atento às mudanças para garantir o melhor para você.",
  },
  {
    icon: Workflow,
    title: "Tecnologia a Seu Favor",
    description:
      "Processos digitais que otimizam seu tempo e dão mais segurança aos dados.",
  },
  {
    icon: MessageCircle,
    title: "Compromisso com Resultados",
    description:
      "Entregamos informações estratégicas para você tomar decisões melhores.",
  },
];

const steps = [
  {
    number: "1",
    title: "Entendimento",
    description: "Conhecemos o seu negócio e suas necessidades.",
  },
  {
    number: "2",
    title: "Planejamento",
    description: "Criamos um plano contábil personalizado para você.",
  },
  {
    number: "3",
    title: "Execução",
    description: "Cuidamos de tudo com precisão e agilidade.",
  },
  {
    number: "4",
    title: "Acompanhamento",
    description: "Você recebe relatórios claros e suporte contínuo.",
  },
];

const testimonials = [
  {
    name: "Juliana Martins",
    role: "Diretora Financeira, Indústria JM",
    initials: "JM",
    text: "A Rocha Arandas transformou a forma como gerenciamos nosso negócio. Atendimento rápido, equipe competente e sempre disposta a ajudar.",
  },
  {
    name: "Carlos Henrique",
    role: "CEO, Comércio Varejista",
    initials: "CH",
    text: "Profissionais comprometidos e sempre disponíveis. Temos muito mais segurança para tomar decisões estratégicas.",
  },
  {
    name: "Ricardo Mendes",
    role: "Sócio, Prestação de Serviços",
    initials: "RM",
    text: "Mais do que uma contabilidade, são parceiros do nosso negócio. Recomendo para qualquer empresa que busca crescimento.",
  },
];

const faqs = [
  {
    question: "Quais serviços a Rocha Arandas oferece?",
    answer:
      "Oferecemos abertura de empresa, contabilidade completa, departamento pessoal, fiscal, tributário e consultoria financeira para empresas de diferentes segmentos.",
  },
  {
    question: "Como funciona a migração da minha contabilidade?",
    answer:
      "Nossa equipe analisa a situação atual da empresa, organiza a documentação necessária e conduz todo o processo de transição com segurança e acompanhamento próximo.",
  },
  {
    question: "Vocês atendem empresas de qual porte?",
    answer:
      "Atendemos desde pequenos negócios até empresas em crescimento que precisam de uma gestão contábil mais estratégica, clara e organizada.",
  },
  {
    question: "Como posso falar com um especialista?",
    answer:
      "Você pode clicar no botão de WhatsApp ou no botão de contato do site. Um especialista irá entender sua necessidade e orientar os próximos passos.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Header />
      <Hero />
      <Stats />
      <Benefits />
      <Process />
      <TestimonialsAndFaq />
      <BottomCta />
      <Footer />
      <WhatsappButton />
    </main>
  );
}

function Header() {
  const { loading, open } = useWhatsApp();

  const msg = useMemo(() => {
    return `Olá! Gostaria de falar com um especialista da ${company.name}.`;
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#d7075f] text-white shadow-[0_10px_35px_rgba(215,7,95,0.22)]">
      <div className="container-page flex h-[72px] items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#d7075f] shadow-lg">
            <Headphones size={23} strokeWidth={2.5} />
          </span>

          <span className="leading-tight">
            <strong className="block font-display text-[17px] font-black">
              {company.name}
            </strong>
            <span className="block text-xs font-medium text-white/85">
              Assessoria & Consultoria
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 text-sm font-semibold lg:flex">
          <a href="#inicio" className="hover:text-white/75">
            Início
          </a>
          <a href="#servicos" className="hover:text-white/75">
            Serviços
          </a>
          <a href="#diferenciais" className="hover:text-white/75">
            Diferenciais
          </a>
          <a href="#sobre" className="hover:text-white/75">
            Sobre
          </a>
          <a href="#blog" className="hover:text-white/75">
            Blog
          </a>
          <a href="#contato" className="hover:text-white/75">
            Contato
          </a>
        </nav>

        <button
          type="button"
          onClick={() => open(msg)}
          disabled={loading}
          aria-busy={loading}
          className="hidden items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs font-black uppercase tracking-[0.08em] text-[#d7075f] shadow-lg hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 lg:flex"
        >
          <Headphones size={16} />
          {loading ? "Carregando..." : "Falar com especialista"}
        </button>

        <button
          type="button"
          aria-label="Abrir menu"
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 lg:hidden"
        >
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  const { loading, open } = useWhatsApp();

  const msg = useMemo(() => {
    return `Olá! Gostaria de saber mais sobre os serviços contábeis da ${company.name}.`;
  }, []);

  return (
    <section id="inicio" className="hero-bg relative bg-white pt-14 lg:pt-20">
      <div className="container-page grid min-h-[610px] items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div className="relative z-10 pb-10 lg:pb-24">
          <span className="inline-flex rounded-full border border-[#ffd2e4] bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#d7075f] shadow-sm">
            Atendimento humanizado e especializado
          </span>

          <h1 className="mt-7 max-w-[690px] font-display text-[43px] font-black leading-[0.96] tracking-[-0.06em] text-[#080d24] sm:text-[56px] lg:text-[68px] xl:text-[72px]">
            Descontos Exclusivos
            <br />
            participe do Feirão 2026 e verifique 
            <br />
            <span className="text-[#d7075f]">ofertas especiais.</span>
          </h1>

          <p className="mt-7 max-w-[560px] text-base leading-8 text-[#667085] sm:text-lg">
            Descontos de até 98%. Fique hoje mesmo no Azul
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => open(msg)}
              disabled={loading}
              aria-busy={loading}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-[#d7075f] px-7 text-xs font-black uppercase tracking-[0.08em] text-white shadow-[0_14px_30px_rgba(215,7,95,0.28)] hover:-translate-y-0.5 hover:bg-[#b4044f] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Carregando..." : "Falar com especialista"}
              <ArrowRight size={17} />
            </button>

            <a
              href="#servicos"
              className="inline-flex h-14 items-center justify-center rounded-xl border border-[#d7075f] bg-white px-7 text-xs font-black uppercase tracking-[0.08em] text-[#d7075f] hover:bg-[#fff1f7]"
            >
              Conhecer serviços
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["R", "A", "C", "F"].map((item) => (
                  <span
                    key={item}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#fff1f7] text-xs font-black text-[#d7075f]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="text-sm font-semibold leading-5 text-[#334155]">
                +1.000 empresas <br /> confiam em nós
              </p>
            </div>

            <div className="hidden h-9 w-px bg-[#ffd2e4] sm:block" />

            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff1f7] text-[#d7075f]">
                <ShieldCheck size={20} />
              </span>

              <p className="text-sm font-semibold leading-5 text-[#334155]">
                Conformidade e <br /> segurança garantidas
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[460px] items-end justify-center overflow-hidden lg:min-h-[610px]">
  <div className="absolute bottom-24 right-8 h-[360px] w-[470px] max-w-[95%] rounded-[50%] bg-[#fff1f7]" />

  <div className="absolute bottom-28 right-[11%] h-[420px] w-[500px] max-w-[95%] rotate-[-10deg] rounded-[48%] border-2 border-[#f5aac9]" />

  <div className="absolute right-4 top-20 grid grid-cols-5 gap-2 opacity-70">
    {Array.from({ length: 25 }).map((_, index) => (
      <span
        key={index}
        className="h-1.5 w-1.5 rounded-full bg-[#d7075f]"
      />
    ))}
  </div>

  <Image
    src="/garota-sem-fundo.png"
    alt="Consultora segurando celular"
    width={767}
    height={1301}
    priority
    className="relative z-10 h-[390px] w-auto object-contain drop-shadow-[0_28px_65px_rgba(8,13,36,0.12)] sm:h-[460px] lg:h-[540px] xl:h-[570px]"
  />
</div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative z-20 bg-white pb-12">
      <div className="container-page">
        <div className="grid gap-6 border-b border-[#ffd2e4] pb-2 lg:-mt-20 lg:grid-cols-3">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.value}
                className="flex items-center gap-7 rounded-3xl border border-[#ffe1ec] bg-white p-8 shadow-[0_18px_55px_rgba(11,18,32,0.075)]"
              >
                <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#fff1f7] text-[#d7075f]">
                  <Icon size={32} strokeWidth={2.3} />
                </span>

                <div>
                  <strong className="font-display text-3xl font-black text-[#d7075f]">
                    {item.value}
                  </strong>
                  <p className="mt-2 text-sm font-black text-[#101828]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-[#667085]">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="diferenciais" className="bg-white py-12 lg:py-16">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#d7075f]">
            Por que escolher nossa equipe?
          </span>

          <h2 className="mt-4 font-display text-3xl font-black leading-tight tracking-[-0.04em] text-[#080d24] sm:text-4xl">
            Mais que contabilidade, somos parceiros do seu sucesso
          </h2>
        </div>

        <div className="mt-11 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-3xl border border-[#ffe1ec] bg-white p-7 shadow-[0_14px_40px_rgba(11,18,32,0.045)] hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(11,18,32,0.08)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1f7] text-[#d7075f]">
                  <Icon size={23} strokeWidth={2.4} />
                </span>

                <h3 className="mt-7 font-display text-lg font-black leading-snug text-[#080d24]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#667085]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="servicos" className="bg-white py-12 lg:py-16">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#d7075f]">
            Como funciona
          </span>

          <h2 className="mt-4 font-display text-3xl font-black leading-tight tracking-[-0.04em] text-[#080d24] sm:text-4xl">
            Um processo simples, eficiente e transparente
          </h2>
        </div>

        <div className="relative mt-12 grid gap-6 lg:grid-cols-4">
          <div className="absolute left-[8%] right-[8%] top-[31px] hidden border-t border-dashed border-[#f5aac9] lg:block" />

          {steps.map((step) => (
            <article key={step.number} className="relative">
              <div className="flex items-center gap-4 lg:block">
                <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#d7075f] font-display text-xl font-black text-white shadow-[0_16px_35px_rgba(215,7,95,0.28)] lg:mx-auto">
                  {step.number}
                </span>

                <div className="mt-0 flex-1 rounded-2xl border border-[#ffe1ec] bg-white p-6 shadow-[0_14px_40px_rgba(11,18,32,0.045)] lg:mt-6">
                  <h3 className="font-display text-base font-black text-[#080d24]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#667085]">
                    {step.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsAndFaq() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const testimonial = testimonials[activeTestimonial];

  function nextTestimonial() {
    setActiveTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  }

  function previousTestimonial() {
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  }

  return (
    <section className="bg-white py-14 lg:py-16">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        <div>
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#d7075f]">
            O que nossos clientes dizem
          </span>

          <h2 className="mt-3 font-display text-3xl font-black tracking-[-0.04em] text-[#080d24]">
            Histórias de quem confia e recomenda
          </h2>

          <div className="mt-7 rounded-3xl border border-[#ffe1ec] bg-white p-8 shadow-[0_18px_55px_rgba(11,18,32,0.065)]">
            <div className="flex gap-1 text-[#d7075f]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={18} fill="currentColor" />
              ))}
            </div>

            <p className="mt-5 min-h-[96px] text-base leading-8 text-[#475467]">
              “{testimonial.text}”
            </p>

            <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fff1f7] font-display font-black text-[#d7075f]">
                  {testimonial.initials}
                </span>

                <div>
                  <strong className="font-display text-sm font-black text-[#080d24]">
                    {testimonial.name}
                  </strong>
                  <p className="mt-1 text-xs text-[#667085]">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={previousTestimonial}
                  aria-label="Depoimento anterior"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#ffd2e4] text-[#d7075f] hover:bg-[#fff1f7]"
                >
                  ←
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveTestimonial(index)}
                      aria-label={`Ver depoimento ${index + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        activeTestimonial === index
                          ? "w-6 bg-[#d7075f]"
                          : "w-2 bg-[#ffd2e4] hover:bg-[#d7075f]/50"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Próximo depoimento"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#ffd2e4] text-[#d7075f] hover:bg-[#fff1f7]"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#d7075f]">
            Dúvidas frequentes
          </span>

          <h2 className="mt-3 font-display text-3xl font-black tracking-[-0.04em] text-[#080d24]">
            Perguntas frequentes
          </h2>

          <div className="mt-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-[#ffe1ec] bg-white shadow-[0_10px_30px_rgba(11,18,32,0.035)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-bold text-[#344054] hover:text-[#d7075f]"
                  >
                    {faq.question}

                    <ChevronDown
                      size={18}
                      className={`shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#d7075f]" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-7 text-[#667085]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function BottomCta() {
  const { loading, open } = useWhatsApp();

  const msg = useMemo(() => {
    return `Olá! Quero levar minha gestão para o próximo nível e falar com um especialista da ${company.name}.`;
  }, []);

  return (
    <section id="contato" className="bg-[#fff7fb] py-8">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-[#ffd2e4] bg-white p-7 shadow-[0_16px_50px_rgba(11,18,32,0.055)] lg:flex-row lg:items-center lg:p-9">
          <div className="flex items-start gap-5">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#d7075f] text-white">
              <Target size={30} />
            </span>

            <div>
              <h2 className="font-display text-2xl font-black tracking-[-0.035em] text-[#080d24]">
                Pronto para levar sua gestão para o próximo nível?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-[#667085]">
                Fale agora com um especialista e descubra como podemos ajudar
                sua empresa a crescer com segurança.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => open(msg)}
            disabled={loading}
            aria-busy={loading}
            className="inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#d7075f] px-7 text-xs font-black uppercase tracking-[0.08em] text-white shadow-[0_14px_30px_rgba(215,7,95,0.25)] hover:bg-[#b4044f] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Carregando..." : "Falar com especialista"}
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer-bg text-white">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.85fr_1fr_1.35fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#d7075f]">
                <Headphones size={23} />
              </span>

              <div>
                <strong className="block font-display text-lg font-black">
                  {company.name}
                </strong>
                <span className="text-xs text-white/80">
                  Assessoria & Consultoria
                </span>
              </div>
            </div>

            <p className="mt-6 max-w-[310px] text-sm leading-7 text-white/82">
              Descontos Exclusivos, participe do Feirão 2026 e verifique ofertas especiais.
            </p>

            <div className="mt-6 flex gap-3">
              {[
                { icon: FaInstagram, href: "#" },
                { icon: FaLinkedinIn, href: "#" },
                { icon: FaFacebookF, href: "#" },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 text-white hover:bg-white hover:text-[#d7075f]"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <FooterColumn
            title="Navegação"
            links={[
              "Início",
              "Serviços",
              "Diferenciais",
              "Sobre Nós",
              "Blog",
              "Contato",
            ]}
          />

          <FooterColumn
            title="Serviços"
            links={[
              "Abertura de Empresa",
              "Contabilidade Completa",
              "Departamento Pessoal",
              "Fiscal e Tributário",
              "Consultoria Financeira",
            ]}
          />

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.18em]">
              Dados da empresa
            </h3>

            <div className="mt-6 space-y-4 text-sm text-white/82">
              <p className="flex gap-3 leading-7">
                <FileText size={18} className="mt-1 shrink-0" />
                <span>
                  {company.fullName}
                  <br />
                  CNPJ: {company.cnpj}
                </span>
              </p>

              <p className="flex gap-3 leading-7">
                <MapPin size={18} className="mt-1 shrink-0" />
                <span>
                  {company.addressLine1}
                  <br />
                  {company.addressLine2}
                  <br />
                  {company.district}
                  <br />
                  {company.cityState}
                  <br />
                  CEP: {company.cep}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/18 pt-7 text-xs text-white/75 sm:flex-row">
          <p>© 2025 {company.fullName}. Todos os direitos reservados.</p>

          <div className="flex gap-8">
            <a href="/politica-de-privacidade" className="hover:text-white">
              Política de Privacidade
            </a>
            <a href="/termos-de-uso" className="hover:text-white">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-[0.18em]">
        {title}
      </h3>

      <ul className="mt-6 space-y-3 text-sm text-white/82">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="hover:text-white">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WhatsappButton() {
  const { loading, open } = useWhatsApp();

  const msg = useMemo(() => {
    return `Olá! Gostaria de falar com um especialista da ${company.name}.`;
  }, []);

  return (
    <button
      type="button"
      onClick={() => open(msg)}
      disabled={loading}
      aria-label="Chamar no WhatsApp"
      aria-busy={loading}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#22c55e] text-white shadow-[0_16px_35px_rgba(34,197,94,0.35)] hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
    >
      <MessageCircle size={30} />
    </button>
  );
}