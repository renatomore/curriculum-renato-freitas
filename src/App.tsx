import React, { useMemo, useState } from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./index.css";

const data = {
  name: "RENATO FREITAS",
  titles: {
    pt: "Desenvolvedor Front-end",
    en: "Front-end Developer",
  },
  contact: {
    email: "renattomoreyra@hotmail.com",
    phone: "+55 (11) 95428-5010",
    location: "Mogi das Cruzes - SP, Brazil",
    linkedin: "http://www.linkedin.com/in/renato-m-freitas-53076a96",
  },
  skills: [
    "ReactJS",
    "TypeScript",
    "JavaScript",
    "Microfrontends",
    "AppShell",
    "HTML",
    "CSS",
    ".NET",
    "ASP.NET",
  ],
  education: {
    pt: {
      school: "Fatec Mogi das Cruzes",
      degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      period: "2019 – 2023",
      location: "Mogi das Cruzes, SP",
    },
    en: {
      school: "Fatec Mogi das Cruzes",
      degree: "Associate Degree in Systems Analysis and Development",
      period: "2019 – 2023",
      location: "Mogi das Cruzes, SP, Brazil",
    },
  },
  certs: [
    {
      pt: "Certificado Web Developer (JavaScript)",
      en: "Certified Web Developer (JavaScript)",
    },
  ],
  experience: {
    pt: [
      {
        company: "Banco Itaú",
        role: "Analista de Engenharia de T.I. Pleno (Front-end)",
        period: "nov 2024 – atual",
        location: "São Paulo, SP",
        bullets: [
          "Desenvolvimento Front-end com ReactJS, atuando com microfrontends, AppShell e bibliotecas personalizadas.",
        ],
      },
      {
        company: "Banco Itaú",
        role: "Analista de Engenharia de T.I. Júnior (Front-end)",
        period: "nov 2022 – out 2024",
        location: "São Paulo, SP",
        bullets: [
          "Implementação de microfrontends e bibliotecas internas em ReactJS, integradas ao AppShell da plataforma.",
          "Melhorias de performance e acessibilidade em aplicações React, reduzindo tempo de carregamento e retrabalho em PRs.",
        ],
      },
      {
        company: "Banco Itaú",
        role: "Analista de Projetos e Processos Júnior",
        period: "ago 2021 – out 2021",
        location: "São Paulo, SP",
        bullets: [
          "Suporte à análise de processos e automações de rotinas de TI, com foco em ganhos de eficiência.",
        ],
      },
      {
        company: "Banco Itaú",
        role: "Estagiário em TI",
        period: "out 2020 – ago 2021",
        location: "São Paulo, SP",
        bullets: [
          "Suporte técnico e desenvolvimento de aplicações internas, com ênfase em ReactJS.",
        ],
      },
      {
        company: "NSK Brasil Ltda.",
        role: "Estagiário de TI",
        period: "jan 2020 – ago 2020",
        location: "Suzano, SP",
        bullets: [
          "Atuação administrativa e desenvolvimento de sistemas utilizando .NET/ASP.NET.",
        ],
      },
    ],
    en: [
      {
        company: "Banco Itaú",
        role: "Mid-level Software Engineer (Front-end)",
        period: "Nov 2024 – Present",
        location: "São Paulo, Brazil",
        bullets: [
          "Front-end development with ReactJS, working with microfrontends, AppShell, and custom libraries.",
        ],
      },
      {
        company: "Banco Itaú",
        role: "Junior Software Engineer (Front-end)",
        period: "Nov 2022 – Oct 2024",
        location: "São Paulo, Brazil",
        bullets: [
          "Implemented microfrontends and internal libraries with ReactJS, integrated with the platform AppShell.",
          "Improved performance and accessibility across React apps, reducing load time and PR rework.",
        ],
      },
      {
        company: "Banco Itaú",
        role: "Junior Projects and Processes Analyst",
        period: "Aug 2021 – Oct 2021",
        location: "São Paulo, Brazil",
        bullets: [
          "Supported IT projects and process analysis, focusing on efficiency and automation.",
        ],
      },
      {
        company: "Banco Itaú",
        role: "IT Intern",
        period: "Oct 2020 – Aug 2021",
        location: "São Paulo, Brazil",
        bullets: [
          "Technical support and development of internal applications using ReactJS.",
        ],
      },
      {
        company: "NSK Brasil Ltda.",
        role: "IT Intern",
        period: "Jan 2020 – Aug 2020",
        location: "Suzano, Brazil",
        bullets: [
          "Administrative support and system development using .NET/ASP.NET.",
        ],
      },
    ],
  },
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="uppercase tracking-wide text-[13px] text-neutral-700 font-semibold mb-2">
      {children}
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-neutral-300 my-3" />;
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="leading-relaxed text-[13.5px] text-neutral-800">
      {children}
    </li>
  );
}

const Tag = ({ text }: { text: string }) => (
  <span className="inline-block text-[12px] border border-neutral-300 rounded-md px-2 py-1 mr-2 mb-2">
    {text}
  </span>
);

export default function ResumeRenato() {
  const [lang, setLang] = useState<"pt" | "en">("pt");

  const t = useMemo(
    () => ({
      work: lang === "pt" ? "Experiência Profissional" : "Work Experience",
      skills: lang === "pt" ? "Skills" : "Skills",
      education: lang === "pt" ? "Educação" : "Education",
      certifications: lang === "pt" ? "Certificações" : "Certifications",
      print: lang === "pt" ? "Imprimir / Salvar em PDF" : "Print / Save as PDF",
    }),
    [lang]
  );

  const experience = data.experience[lang];
  const edu = data.education[lang];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full min-h-screen bg-neutral-100 py-6 print:bg-white">
      {/* Print styles */}
      <style>{`
        @page { size: A4; margin: 16mm; }
        @media print {
          .no-print { display: none !important; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4 no-print">
          <div className="flex gap-2">
            <button
              onClick={() => setLang("pt")}
              className={`px-3 py-1 rounded-md border ${
                lang === "pt" ? "bg-neutral-900 text-white" : "bg-white"
              }`}
            >
              PT-BR
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-md border ${
                lang === "en" ? "bg-neutral-900 text-white" : "bg-white"
              }`}
            >
              EN-US
            </button>
          </div>

          <Button className="no-print" onClick={handlePrint}>
            {t.print}
          </Button>
        </div>

        {/* Resume card */}
        <div className="bg-white shadow-sm rounded-xl overflow-hidden p-6">
          <div className="grid grid-cols-12 gap-6">
            {/* LEFT SIDEBAR */}
            <aside className="col-span-12 md:col-span-4">
              <div className="border-t-4 border-neutral-900 pt-4">
                <h1 className="text-3xl font-extrabold leading-tight text-neutral-900">
                  {data.name.split(" ").slice(0, 1).join(" ")}
                </h1>
                <h1 className="text-3xl font-extrabold leading-tight text-neutral-900 -mt-1">
                  {data.name.split(" ").slice(1).join(" ")}
                </h1>
                <div className="text-xl text-sky-700 font-semibold mt-3">
                  {lang === "pt" ? data.titles.pt : data.titles.en}
                </div>

                <Divider />

                <SectionTitle>
                  {lang === "pt" ? "Contato" : "Contact"}
                </SectionTitle>
                <ul className="space-y-1 text-[13.5px]">
                  <li className="flex items-center gap-2">
                    <Mail size={14} /> {data.contact.email}
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone size={14} /> {data.contact.phone}
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin size={14} /> {data.contact.location}
                  </li>
                  <li className="flex items-center gap-2">
                    <Linkedin size={14} />
                    <a
                      className="underline text-sky-700"
                      href={data.contact.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>

                <Divider />

                <SectionTitle>{t.skills}</SectionTitle>
                <div className="mt-1 flex flex-wrap">
                  {data.skills.map((s) => (
                    <Tag key={s} text={s} />
                  ))}
                </div>

                <Divider />

                <SectionTitle>
                  {lang === "pt" ? "Educação" : "Education"}
                </SectionTitle>
                <div className="text-[13.5px]">
                  <div className="font-semibold">{edu.school}</div>
                  <div>{edu.degree}</div>
                  <div className="text-neutral-700">
                    {edu.period} | {edu.location}
                  </div>
                </div>

                <Divider />

                <SectionTitle>{t.certifications}</SectionTitle>
                <ul className="list-disc pl-4">
                  {data.certs.map((c, i) => (
                    <li key={i} className="text-[13.5px]">
                      {lang === "pt" ? c.pt : c.en}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="col-span-12 md:col-span-8">
              <Divider />
              <SectionTitle>{t.work}</SectionTitle>

              <div className="space-y-6">
                {experience.map((job, idx) => (
                  <section key={idx}>
                    <div className="text-[16px] font-semibold text-neutral-900">
                      {job.company}
                    </div>
                    <div className="text-[13.5px] text-neutral-900">
                      {job.role}
                    </div>
                    <div className="text-[12.5px] text-neutral-600">
                      {job.period} | {job.location}
                    </div>
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      {job.bullets.map((b, i) => (
                        <Bullet key={i}>{b}</Bullet>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </main>
          </div>
        </div>

        <div className="text-center text-sm text-neutral-500 mt-3 no-print">
          Dica: altere o idioma (PT-BR/EN-US) antes de imprimir para gerar duas
          versões do PDF.
        </div>
      </div>
    </div>
  );
}
