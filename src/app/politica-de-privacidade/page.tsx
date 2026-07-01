import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  Headphones,
  Lock,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Política de Privacidade | Rocha Arandas",
  description:
    "Política de privacidade da Rocha Arandas, com informações sobre coleta, uso e proteção de dados.",
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
    title: "1. Informações gerais",
    text: `Esta Política de Privacidade explica como a ${company.name} coleta, utiliza, armazena e protege as informações fornecidas pelos usuários ao acessar este site ou entrar em contato por meio dos canais disponíveis.`,
  },
  {
    title: "2. Dados que podem ser coletados",
    text: "Podemos coletar informações como nome, telefone, e-mail, nome da empresa, segmento de atuação e demais dados enviados voluntariamente por formulários, botões de contato, WhatsApp ou outros canais digitais vinculados ao site.",
  },
  {
    title: "3. Finalidade do uso dos dados",
    text: "Os dados coletados são utilizados para atendimento, retorno comercial, análise de solicitações, envio de informações sobre serviços contábeis, organização de contatos e melhoria da experiência do usuário em nosso site.",
  },
  {
    title: "4. Compartilhamento de informações",
    text: `A ${company.name} não vende, aluga ou comercializa dados pessoais. As informações podem ser compartilhadas apenas quando necessário para cumprimento de obrigações legais, regulatórias, contratuais ou para execução dos serviços solicitados pelo usuário.`,
  },
  {
    title: "5. Segurança dos dados",
    text: "Adotamos medidas técnicas e organizacionais para proteger os dados contra acesso não autorizado, perda, uso indevido, alteração ou divulgação indevida. Ainda assim, nenhum sistema digital é completamente livre de riscos.",
  },
  {
    title: "6. Cookies e tecnologias semelhantes",
    text: "Este site pode utilizar cookies e tecnologias semelhantes para melhorar a navegação, entender o comportamento dos visitantes, otimizar conteúdos e aprimorar a comunicação. O usuário pode desativar cookies diretamente nas configurações do navegador.",
  },
  {
    title: "7. Direitos do usuário",
    text: "O usuário pode solicitar acesso, correção, atualização ou exclusão de seus dados pessoais, conforme previsto na legislação aplicável, entrando em contato pelos canais oficiais informados neste site.",
  },
  {
    title: "8. Retenção das informações",
    text: "As informações fornecidas poderão ser mantidas pelo período necessário para atendimento, cumprimento de obrigações legais, regulatórias, fiscais, contábeis ou para resguardar direitos da empresa.",
  },
  {
    title: "9. Alterações nesta política",
    text: "Esta Política de Privacidade pode ser atualizada a qualquer momento para refletir melhorias, mudanças legais ou ajustes nos processos internos. Recomendamos a consulta periódica desta página.",
  },
];

export default function PrivacyPolicyPage() {
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
                <Lock size={15} />
                Segurança e transparência
              </span>

              <h1 className="mt-6 max-w-4xl font-display text-4xl font-black leading-tight tracking-[-0.05em] text-[#080d24] sm:text-5xl lg:text-6xl">
                Política de Privacidade
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-[#667085] sm:text-lg">
                Entenda como tratamos suas informações, quais dados podem ser
                coletados e como protegemos a sua privacidade durante o uso do
                nosso site e canais de atendimento.
              </p>
            </div>

            <div className="rounded-3xl border border-[#ffd2e4] bg-white p-7 shadow-[0_18px_55px_rgba(11,18,32,0.06)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff1f7] text-[#d7075f]">
                <ShieldCheck size={28} />
              </div>

              <h2 className="mt-5 font-display text-xl font-black">
                Compromisso com seus dados
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#667085]">
                Utilizamos suas informações apenas para fins de atendimento,
                comunicação, análise de solicitações e prestação dos serviços
                relacionados.
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
                Dados da empresa
              </h2>

              <div className="mt-5 space-y-4 text-sm text-[#667085]">
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
                  <strong className="text-[#080d24]">Endereço:</strong>
                  <br />
                  {company.addressLine1}
                  <br />
                  {company.addressLine2}
                  <br />
                  {company.district}
                  <br />
                  {company.cityState}
                  <br />
                  CEP: {company.cep}
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
                  Canal de contato
                </h2>

                <p className="mt-4 text-base leading-8 text-[#667085]">
                  Para dúvidas sobre esta Política de Privacidade ou solicitações
                  relacionadas aos seus dados, entre em contato pelos canais
                  oficiais da empresa.
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