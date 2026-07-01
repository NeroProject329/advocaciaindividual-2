import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  FileText,
  Headphones,
  Mail,
  MapPin,
} from "lucide-react";

export const metadata = {
  title: "Termos de Uso | Rocha Arandas",
  description:
    "Termos de uso do site da Rocha Arandas, com regras de navegação, responsabilidades e condições gerais.",
};

const company = {
  name: "Rocha Arandas",
  fullName: "Rocha Arandas - Sociedade Individual de Advocacia",
  cnpj: "60.605.583/0001-06",
  addressLine1: "Praça Conselheiro Almeida Couto, 000622",
  addressLine2: "Edif. Joia do Jardim, Sala SA 05",
  district: "Nazaré",
  cityState: "Salvador - BA",
  cep: "40050-410",
  email: "contato@rocharandas.com.br",
};

const sections = [
  {
    title: "1. Aceitação dos termos",
    text: "Ao acessar este site, o usuário declara estar ciente e de acordo com estes Termos de Uso. Caso não concorde com alguma condição, recomenda-se não utilizar este site ou seus canais de contato.",
  },
  {
    title: "2. Objetivo do site",
    text: `Este site tem como finalidade apresentar informações institucionais da ${company.name}, seus serviços contábeis, diferenciais, conteúdos informativos e canais de atendimento para interessados em conhecer ou contratar soluções oferecidas pela empresa.`,
  },
  {
    title: "3. Uso adequado da plataforma",
    text: "O usuário compromete-se a utilizar o site de forma lícita, ética e respeitosa, não praticando ações que possam prejudicar o funcionamento da página, comprometer sua segurança ou violar direitos de terceiros.",
  },
  {
    title: "4. Informações apresentadas",
    text: "As informações disponíveis no site possuem caráter informativo e podem ser alteradas a qualquer momento. A contratação de serviços, condições comerciais, prazos e escopos específicos devem ser confirmados diretamente com a equipe responsável.",
  },
  {
    title: "5. Responsabilidades do usuário",
    text: "O usuário é responsável pela veracidade das informações fornecidas nos formulários, mensagens, contatos via WhatsApp ou demais canais digitais vinculados ao site.",
  },
  {
    title: "6. Serviços contábeis e atendimento",
    text: "Os serviços apresentados no site podem incluir orientação contábil, abertura de empresa, regularização, departamento pessoal, fiscal, tributário e consultoria financeira, conforme análise da necessidade do cliente e disponibilidade da empresa.",
  },
  {
    title: "7. Links externos",
    text: `Este site pode conter links para páginas externas, como WhatsApp, redes sociais ou plataformas parceiras. A ${company.name} não se responsabiliza por conteúdos, políticas ou práticas de sites de terceiros.`,
  },
  {
    title: "8. Propriedade intelectual",
    text: "Textos, imagens, identidade visual, elementos gráficos, estrutura do site e demais conteúdos são protegidos por direitos de propriedade intelectual. A reprodução sem autorização prévia não é permitida.",
  },
  {
    title: "9. Alterações nos termos",
    text: `A ${company.name} poderá alterar estes Termos de Uso a qualquer momento para adequação legal, operacional ou estratégica. A versão atualizada estará sempre disponível nesta página.`,
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-[#080d24]">
      <LegalHeader />

      <section className="relative overflow-hidden bg-[#fff7fb] py-16 lg:py-24">
        <div className="container-page relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#ffd2e4] bg-white px-4 py-2 text-sm font-bold text-[#d7075f] shadow-sm hover:bg-[#fff1f7]"
          >
            <ArrowLeft size={16} />
            Voltar para o início
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#ffd2e4] bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#d7075f]">
                <FileText size={15} />
                Condições de navegação
              </span>

              <h1 className="mt-6 max-w-4xl font-display text-4xl font-black leading-tight tracking-[-0.05em] text-[#080d24] sm:text-5xl lg:text-6xl">
                Termos de Uso
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-[#667085] sm:text-lg">
                Confira as condições gerais para navegação, utilização das
                informações disponíveis no site e acesso aos canais de contato da
                {` ${company.name}`}.
              </p>
            </div>

            <div className="rounded-3xl border border-[#ffd2e4] bg-white p-7 shadow-[0_18px_55px_rgba(11,18,32,0.06)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff1f7] text-[#d7075f]">
                <BadgeCheck size={28} />
              </div>

              <h2 className="mt-5 font-display text-xl font-black">
                Uso claro e responsável
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#667085]">
                Estes termos organizam as principais regras de uso do site e dos
                seus canais digitais de atendimento.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute right-[-80px] top-[-80px] h-72 w-72 rounded-full bg-[#ffd2e4]/50 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[-120px] h-80 w-80 rounded-full bg-[#fff1f7] blur-3xl" />
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-[0.35fr_1fr]">
            <aside className="h-fit rounded-3xl border border-[#ffe1ec] bg-white p-6 shadow-[0_14px_40px_rgba(11,18,32,0.045)]">
              <h2 className="font-display text-lg font-black">
                Informações úteis
              </h2>

              <div className="mt-5 space-y-4 text-sm text-[#667085]">
                <p>
                  <strong className="text-[#080d24]">Aplicação:</strong>
                  <br />
                  Uso deste site e canais digitais.
                </p>

                <p>
                  <strong className="text-[#080d24]">Razão social:</strong>
                  <br />
                  {company.fullName}
                </p>

                <p>
                  <strong className="text-[#080d24]">CNPJ:</strong>
                  <br />
                  {company.cnpj}
                </p>

                <p>
                  <strong className="text-[#080d24]">Atualização:</strong>
                  <br />
                  {new Date().getFullYear()}
                </p>
              </div>
            </aside>

            <div className="space-y-5">
              {sections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-3xl border border-[#ffe1ec] bg-white p-7 shadow-[0_14px_40px_rgba(11,18,32,0.04)]"
                >
                  <h2 className="font-display text-xl font-black tracking-[-0.02em] text-[#080d24]">
                    {section.title}
                  </h2>

                  <p className="mt-4 text-base leading-8 text-[#667085]">
                    {section.text}
                  </p>
                </article>
              ))}

              <div className="rounded-3xl border border-[#ffd2e4] bg-[#fff7fb] p-7">
                <h2 className="font-display text-xl font-black">
                  Dúvidas sobre estes termos
                </h2>

                <p className="mt-4 text-base leading-8 text-[#667085]">
                  Em caso de dúvidas sobre estes Termos de Uso, entre em contato
                  pelos canais oficiais da {company.name}.
                </p>

                <a
                  href={`mailto:${company.email}`}
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#d7075f] px-6 py-4 text-sm font-black text-white shadow-[0_14px_30px_rgba(215,7,95,0.24)] hover:bg-[#b4044f]"
                >
                  <Mail size={18} />
                  {company.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LegalFooter />
    </main>
  );
}

function LegalHeader() {
  return (
    <header className="bg-[#d7075f] text-white shadow-[0_10px_35px_rgba(215,7,95,0.22)]">
      <div className="container-page flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
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
        </Link>

        <Link
          href="/"
          className="rounded-xl bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.08em] text-[#d7075f] shadow-lg hover:scale-[1.02]"
        >
          Início
        </Link>
      </div>
    </header>
  );
}

function LegalFooter() {
  return (
    <footer className="footer-bg text-white">
      <div className="container-page py-10">
        <div className="flex flex-col justify-between gap-8 border-b border-white/15 pb-8 lg:flex-row lg:items-start">
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

          <div className="max-w-xl space-y-3 text-sm leading-7 text-white/82">
            <p className="flex gap-3">
              <FileText size={16} className="mt-1 shrink-0" />
              <span>
                {company.fullName} - {company.cnpj}
              </span>
            </p>

            <p className="flex gap-3">
              <MapPin size={16} className="mt-1 shrink-0" />
              <span>
                {company.addressLine1}, {company.addressLine2}
                <br />
                {company.district} - {company.cityState} - CEP: {company.cep}
              </span>
            </p>
          </div>
        </div>

        <div className="mt-7 flex flex-col justify-between gap-4 text-xs text-white/75 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.fullName}. Todos os direitos
            reservados.
          </p>

          <div className="flex gap-8">
            <Link href="/politica-de-privacidade" className="hover:text-white">
              Política de Privacidade
            </Link>
            <Link href="/termos-de-uso" className="hover:text-white">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}