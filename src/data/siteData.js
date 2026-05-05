import microbladingImage from "../image/01_microblading_400x300.png";
import preenchimentoImage from "../image/02_preenchimento_400x300.png";
import limpezaFacialImage from "../image/03_limpeza_facial_400x300.png";
import dermoabrasaoImage from "../image/04_dermoabrasao_400x300.png";
import fototerapiaImage from "../image/05_fototerapia_400x300.png";
import vaporImage from "../image/06_limpeza_a_vapor_400x300.png";
import massagemImage from "../image/07_massagem_facial_400x300.png";
import mascaraImage from "../image/08_mascara_premium_400x300.png";
import laserImage from "../image/09_depilacao_laser_400x300.png";
import clienteMarinaImage from "../image/cliente_diversa_1.png";
import clienteJulianaImage from "../image/cliente_diversa_2.png";
import clienteBeatrizImage from "../image/cliente_3.png";

export const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Procedimentos", href: "#procedimentos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Preços", href: "#precos" },
  { label: "Contato", href: "#contato" }
];

export const categories = [
  { id: "invasivos", label: "Invasivos" },
  { id: "nao-invasivos", label: "Não invasivos" },
  { id: "wellness", label: "Wellness" }
];

export const trustItems = ["Avaliação individual", "Protocolos seguros", "Resultados realistas"];

export const metrics = [
  { value: "+8", label: "anos de experiência" },
  { value: "+5K", label: "clientes atendidas" },
  { value: "98%", label: "satisfação das clientes" }
];

export const procedures = [
  {
    id: "microblading",
    category: "invasivos",
    name: "Microblading",
    subtitle: "Design de sobrancelhas",
    price: "R$ 300-500",
    result: "2-4 semanas",
    duration: "2h",
    image: "Antes/depois frontal com delineamento perfeito.",
    imageSrc: microbladingImage,
    imageAlt: "Resultado visual de microblading para design de sobrancelhas.",
    detail: "Pigmentação fio a fio para desenho mais definido e natural das sobrancelhas, após avaliação do formato do rosto e tom de pele."
  },
  {
    id: "preenchimento",
    category: "invasivos",
    name: "Preenchimento",
    subtitle: "Ácido hialurônico",
    price: "R$ 600-1.200",
    result: "Imediato",
    duration: "30-45min",
    image: "Antes/depois frontal e perfil com proporção natural.",
    imageSrc: preenchimentoImage,
    imageAlt: "Resultado visual de preenchimento com ácido hialurônico.",
    detail: "Procedimento para volume e definição com ácido hialurônico, sempre conforme avaliação individual e indicação profissional."
  },
  {
    id: "laser",
    category: "invasivos",
    name: "Depilação laser",
    subtitle: "Resultado progressivo",
    price: "R$ 200-400",
    result: "3-4 semanas",
    duration: "60min",
    image: "Antes/depois da área corporal, pele uniforme e sem pelos.",
    imageSrc: laserImage,
    imageAlt: "Resultado visual de depilação a laser.",
    detail: "Plano em sessões para redução progressiva de pelos, com intervalos médios de 4 a 6 semanas e orientação de cuidados."
  },
  {
    id: "limpeza-facial",
    category: "nao-invasivos",
    name: "Limpeza facial",
    subtitle: "Profissional",
    price: "R$ 150-250",
    result: "Imediato",
    duration: "60min",
    image: "Antes/depois do rosto com pele limpa e luminosa.",
    imageSrc: limpezaFacialImage,
    imageAlt: "Resultado visual de limpeza facial profissional.",
    detail: "Higienização, extração quando indicada e finalização adequada ao tipo de pele para sensação de frescor e luminosidade."
  },
  {
    id: "dermoabrasao",
    category: "nao-invasivos",
    name: "Dermoabrasão",
    subtitle: "Renovação de pele",
    price: "R$ 300-500",
    result: "1-2 semanas",
    duration: "90min",
    image: "Antes/depois da área tratada com textura melhorada.",
    imageSrc: dermoabrasaoImage,
    imageAlt: "Resultado visual de dermoabrasão e renovação de pele.",
    detail: "Técnica de renovação superficial para melhorar textura, aparência de manchas e sinais leves, respeitando a sensibilidade da pele."
  },
  {
    id: "fototerapia",
    category: "nao-invasivos",
    name: "Fototerapia LED/IPL",
    subtitle: "Rejuvenescimento",
    price: "R$ 250-450",
    result: "2-4 semanas",
    duration: "45min",
    image: "Antes/depois da face completa com uniformidade de tom.",
    imageSrc: fototerapiaImage,
    imageAlt: "Resultado visual de fototerapia LED/IPL.",
    detail: "Protocolo com luz para apoio ao viço, uniformidade e melhora gradual da aparência da pele, conforme indicação."
  },
  {
    id: "vapor",
    category: "nao-invasivos",
    name: "Limpeza a vapor",
    subtitle: "Profunda",
    price: "R$ 120-180",
    result: "Imediato",
    duration: "30min",
    image: "Detalhe de poros e pele com aspecto fresco.",
    imageSrc: vaporImage,
    imageAlt: "Resultado visual de limpeza a vapor profunda.",
    detail: "Abertura de poros com vapor e limpeza profunda para preparar a pele e favorecer a remoção de impurezas."
  },
  {
    id: "massagem",
    category: "wellness",
    name: "Massagem facial",
    subtitle: "Relaxamento",
    price: "R$ 100-150",
    result: "Imediato",
    duration: "45min",
    image: "Durante o atendimento, expressão relaxada e técnica visível.",
    imageSrc: massagemImage,
    imageAlt: "Atendimento de massagem facial relaxante.",
    detail: "Massagem para relaxamento, circulação e sensação de revitalização facial, com movimentos adequados ao conforto da cliente."
  },
  {
    id: "mascara",
    category: "wellness",
    name: "Máscara premium",
    subtitle: "Hidratação intensa",
    price: "R$ 80-120",
    result: "Imediato",
    duration: "20min",
    image: "Antes/depois com pele hidratada, macia e luminosa.",
    imageSrc: mascaraImage,
    imageAlt: "Resultado visual de máscara premium hidratante.",
    detail: "Máscara de hidratação intensa para suporte à maciez e luminosidade da pele, indicada como complemento de cuidados faciais."
  }
];

export const testimonials = [
  {
    text: "O microblading ficou delicado e muito natural. Gostei da explicação antes do procedimento e do cuidado no acabamento.",
    author: "Marina S.",
    location: "SP",
    procedure: "Microblading",
    imageSrc: clienteMarinaImage,
    imageAlt: "Cliente Marina após atendimento estético."
  },
  {
    text: "Fiz limpeza facial e saí com a pele muito mais fresca. Atendimento organizado, ambiente confortável e orientações claras.",
    author: "Juliana P.",
    location: "RJ",
    procedure: "Limpeza facial",
    imageSrc: clienteJulianaImage,
    imageAlt: "Cliente Juliana após limpeza facial."
  },
  {
    text: "A depilação laser entrou na minha rotina com acompanhamento certinho. O plano de sessões foi explicado sem promessa exagerada.",
    author: "Beatriz M.",
    location: "MG",
    procedure: "Depilação laser",
    imageSrc: clienteBeatrizImage,
    imageAlt: "Cliente Beatriz após atendimento de depilação laser."
  }
];

export const offers = [
  {
    title: "Formas de pagamento",
    text: "À vista em dinheiro ou PIX com 10% de desconto, débito sem juros, crédito em até 3x sem juros e parcelamento em até 6x mediante análise."
  },
  {
    title: "Pacotes especiais",
    text: "Pacote Premium com 15% off, Pacote Noiva com 20% off, Pacote Corporal com 12% off e primeira consulta gratuita."
  },
  {
    title: "Promoções vigentes",
    text: "Novas clientes com 20% no primeiro procedimento, indicação com R$ 50 para você e amiga, aniversário com 15% e Combo Facial por R$ 380."
  }
];
