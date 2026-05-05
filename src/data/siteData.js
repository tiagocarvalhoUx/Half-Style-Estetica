import microbladingImage from "../image/01_microblading_400x300.png";
import preenchimentoImage from "../image/02_preenchimento_400x300.png";
import limpezaFacialImage from "../image/03_limpeza_facial_400x300.png";
import dermoabrasaoImage from "../image/04_dermoabrasao_400x300.png";
import fototerapiaImage from "../image/05_fototerapia_400x300.png";
import vaporImage from "../image/06_limpeza_a_vapor_400x300.png";
import massagemImage from "../image/07_massagem_facial_400x300.png";
import mascaraImage from "../image/08_mascara_premium_400x300.png";
import laserImage from "../image/09_depilacao_laser_400x300.png";

export const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Procedimentos", href: "#procedimentos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Precos", href: "#precos" },
  { label: "Contato", href: "#contato" }
];

export const categories = [
  { id: "invasivos", label: "Invasivos" },
  { id: "nao-invasivos", label: "Nao invasivos" },
  { id: "wellness", label: "Wellness" }
];

export const trustItems = ["Avaliacao individual", "Protocolos seguros", "Resultados realistas"];

export const metrics = [
  { value: "9", label: "procedimentos premium" },
  { value: "4+", label: "canais de contato" },
  { value: "100%", label: "avaliacao antes do plano" }
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
    detail: "Pigmentacao fio a fio para desenho mais definido e natural das sobrancelhas, apos avaliacao do formato do rosto e tom de pele."
  },
  {
    id: "preenchimento",
    category: "invasivos",
    name: "Preenchimento",
    subtitle: "Acido hialuronico",
    price: "R$ 600-1.200",
    result: "Imediato",
    duration: "30-45min",
    image: "Antes/depois frontal e perfil com proporcao natural.",
    imageSrc: preenchimentoImage,
    imageAlt: "Resultado visual de preenchimento com acido hialuronico.",
    detail: "Procedimento para volume e definicao com acido hialuronico, sempre conforme avaliacao individual e indicacao profissional."
  },
  {
    id: "laser",
    category: "invasivos",
    name: "Depilacao laser",
    subtitle: "Resultado progressivo",
    price: "R$ 200-400",
    result: "3-4 semanas",
    duration: "60min",
    image: "Antes/depois da area corporal, pele uniforme e sem pelos.",
    imageSrc: laserImage,
    imageAlt: "Resultado visual de depilacao a laser.",
    detail: "Plano em sessoes para reducao progressiva de pelos, com intervalos medios de 4 a 6 semanas e orientacao de cuidados."
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
    detail: "Higienizacao, extracao quando indicada e finalizacao adequada ao tipo de pele para sensacao de frescor e luminosidade."
  },
  {
    id: "dermoabrasao",
    category: "nao-invasivos",
    name: "Dermoabrasao",
    subtitle: "Renovacao de pele",
    price: "R$ 300-500",
    result: "1-2 semanas",
    duration: "90min",
    image: "Antes/depois da area tratada com textura melhorada.",
    imageSrc: dermoabrasaoImage,
    imageAlt: "Resultado visual de dermoabrasao e renovacao de pele.",
    detail: "Tecnica de renovacao superficial para melhorar textura, aparencia de manchas e sinais leves, respeitando a sensibilidade da pele."
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
    detail: "Protocolo com luz para apoio ao vico, uniformidade e melhora gradual da aparencia da pele, conforme indicacao."
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
    detail: "Abertura de poros com vapor e limpeza profunda para preparar a pele e favorecer a remocao de impurezas."
  },
  {
    id: "massagem",
    category: "wellness",
    name: "Massagem facial",
    subtitle: "Relaxamento",
    price: "R$ 100-150",
    result: "Imediato",
    duration: "45min",
    image: "Durante o atendimento, expressao relaxada e tecnica visivel.",
    imageSrc: massagemImage,
    imageAlt: "Atendimento de massagem facial relaxante.",
    detail: "Massagem para relaxamento, circulacao e sensacao de revitalizacao facial, com movimentos adequados ao conforto da cliente."
  },
  {
    id: "mascara",
    category: "wellness",
    name: "Mascara premium",
    subtitle: "Hidratacao intensa",
    price: "R$ 80-120",
    result: "Imediato",
    duration: "20min",
    image: "Antes/depois com pele hidratada, macia e luminosa.",
    imageSrc: mascaraImage,
    imageAlt: "Resultado visual de mascara premium hidratante.",
    detail: "Mascara de hidratacao intensa para suporte a maciez e luminosidade da pele, indicada como complemento de cuidados faciais."
  }
];

export const testimonials = [
  {
    text: "O microblading ficou delicado e muito natural. Gostei da explicacao antes do procedimento e do cuidado no acabamento.",
    author: "Marina S. | SP"
  },
  {
    text: "Fiz limpeza facial e sai com a pele muito mais fresca. Atendimento organizado, ambiente confortavel e orientacoes claras.",
    author: "Juliana P. | RJ"
  },
  {
    text: "A depilacao laser entrou na minha rotina com acompanhamento certinho. O plano de sessoes foi explicado sem promessa exagerada.",
    author: "Beatriz M. | MG"
  }
];

export const offers = [
  {
    title: "Formas de pagamento",
    text: "A vista em dinheiro ou PIX com 10% de desconto, debito sem juros, credito em ate 3x sem juros e parcelamento em ate 6x mediante analise."
  },
  {
    title: "Pacotes especiais",
    text: "Pacote Premium com 15% off, Pacote Noiva com 20% off, Pacote Corporal com 12% off e primeira consulta gratuita."
  },
  {
    title: "Promocoes vigentes",
    text: "Novas clientes com 20% no primeiro procedimento, indicacao com R$ 50 para voce e amiga, aniversario com 15% e Combo Facial por R$ 380."
  }
];
