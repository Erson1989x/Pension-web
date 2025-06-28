import hiking from "../../../../public/hiking.jpg";
import skiing from "../../../../public/partia.jpg";
import bicig from "../../../../public/bicig.jpg";
import spa from "../../../../public/spa.jpg";
import cascada from "../../../../public/cascada.jpg";
import manastire from "../../../../public/manastire.jpg";
import banffy from "../../../../public/banffy.jpg";
import urmanczy from "../../../../public/urmanczy.jpg";
import echitare from "../../../../public/echitatie.webp";
import coaster from "../../../../public/coaster.webp";
import borsec from "../../../../public/borsec.webp";
import rosu from "../../../../public/rosu.webp";

export const activities = [
  {
    id: "hiking",
    name: "Drumeții Montane",
    category: "outdoor",
    distance: "15 km",
    duration: "Flexibil",
    difficulty: "Moderat",
    description: "Explorați trasee pitorești cu priveliști uimitoare ale pajiștilor montane, pădurilor și vârfurilor muntoase. Rute disponibile pentru toate nivelurile de experiență",
    features: ["Trasee marcate", "Ghiduri locale", "Echipament de siguranță"],
    images: [hiking],
    location: {
      address: "Imprejurimi, Toplița 535700",
      coordinates: "46.9254° N, 25.3475° E",
      lat: 46.9254,
      lng: 25.3475
    },
    color: "from-emerald-500/20 to-green-400/20",
    accent: "bg-gradient-to-r from-emerald-500 to-green-400"
  },
  {
    id: "skiing",
    name: "Skiing si Snowboarding",
    category: "winter",
    distance: "15 km",
    duration: "Toata ziua",
    difficulty: "Moderat",
    description: "Domeniul schiabil Pârtia Toplița se găsește la poalele munților Gurghiu. Este alcătuit din trei pârtii de schi deservite de două instalații de teleschi și o bandă rulantă, plus o pârtie de sanie.Datorită amplasamentului potrivit pârtiile beneficiază de o frumoasă panoramă spre munții Călimani dar și spre orașul Toplița",
    features: ["Inchirieri de ski si snowboard", "Monitori de ski si snowboard", "Pârti de sanie", "Pârti de teleschi", "Bandă rulantă"],
    images: [skiing],
    location: {
      address: "Strada Murelor, Toplița 535700",
      coordinates: "46.9007923° N, 25.3296628° E",
      lat: 46.9007923,
      lng: 25.3296628
    },
    color: "from-blue-500/20 to-cyan-400/20",
    accent: "bg-gradient-to-r from-blue-500 to-cyan-400"
  },
  {
    id: "cycling",
    name: "Bicigleta, ATV si E-Bike",
    category: "outdoor",
    distance: "15 km",
    duration: "Flexibil",
    difficulty: "Moderat",
    description: "Descoperiți trasee palpitante prin păduri și poteci montane, potrivite atât pentru cicliști ocazionali, cât și pentru bicicliști montani experimentați",
    features: ["Inchirieri de biciclete", "Monitori de biciclete", "Inchirieri de ATV", "Trasee marcate"],
    images: [bicig],
    location: {
      address: "Strada Sportivilor, Toplița 535700",
      coordinates: "46.9254° N, 25.3575° E",
      lat: 46.9254,
      lng: 25.3575
    },
    color: "from-orange-500/20 to-amber-400/20",
    accent: "bg-gradient-to-r from-orange-500 to-amber-400"
  },
  {
    id: "wellness",
    name: "Thermal Spa",
    category: "wellness",
    distance: "15 km",
    duration: "Flexibil",
    difficulty: "Usor",
    description: "Băile Bánffy Toplița Centru Wellness SPA dispune de două bazine de înot cu apă potabilă încălzită, unul acoperit de 400 mp și unul descoperit de 220 mp care este folosit pe timp de vară. Interiorul găzduiește pe lângă bazinul de înot: vestiare separate pentru femei și bărbați, sală de fitness, saună uscată, saună umedă, cameră de sare, jacuzzi, sală de mese; Contra cost – masaj. Aerul umed din interior este schimbat permanent printr-o instalație care introduce aer uscat pentru confortul turiștilor",
    features: ["Sauna", "Tratament masaj", "Piscină interioară și exterioară", "Fitness"],
    images: [spa],
    location: {
      address: "Str. Magura, Toplița 535700",
      coordinates: "46.9391° N, 25.3604° E",
      lat: 46.9391,
      lng: 25.3604
    },
    color: "from-purple-500/20 to-fuchsia-400/20",
    accent: "bg-gradient-to-r from-purple-500 to-fuchsia-400"
  },
  {
    id: "Cascada",
    name: "Cascada Toplita",
    category: "adventure",
    distance: "15 km",
    duration: "Flexibil",
    difficulty: "Usor",
    description: "Cascada de apă termală din Toplița este un loc cu adevărat special și unic în România. Situată pe strada Cascadei, în apropierea centrului orașului, această cascadă este alimentată de izvorul termal „Bradul” și are o temperatură constantă de aproximativ 27°C, chiar și în mijlocul iernii",
    features: ["Trasee naturale", "Fotografie", "Observarea naturii"],
    images: [cascada],
    location: {
      address: "Strada Cascadei 9, Toplița 535700",
      coordinates: "46.91667° N, 25.35000° E",
      lat: 46.91667,
      lng: 25.35000
    },
    color: "from-teal-500/20 to-cyan-400/20",
    accent: "bg-gradient-to-r from-teal-500 to-cyan-400"
  },
  {
    id: "village-tour",
    name: "Manastirea Toplita",
    category: "cultural",
    distance: "15 km",
    duration: "Flexibil",
    difficulty: "Usor",
    description: "Mănăstirea Sfântul Ilie din Toplița este un așezământ monahal ortodox cu o istorie profund legată de identitatea spirituală românească. A fost întemeiată în 1928 de Patriarhul Miron Cristea, chiar în grădina casei sale natale, prin aducerea unei biserici de lemn din satul Stânceni, construită inițial în 1847.",
    features: ["Observarea istoric", "Fotografie", "Vizitare"],
    images: [manastire],
    location: {
      address: "Strada Stefan Cel Mare 70, Toplița 535700",
      coordinates: "46.9395° N, 25.3609° E",
      lat: 46.9395,
      lng: 25.3609
    },
    color: "from-indigo-500/20 to-violet-400/20",
    accent: "bg-gradient-to-r from-indigo-500 to-violet-400"
  },
  {
    id: "banffy",
    name: "Banffy Toplita",
    category: "wellness",
    distance: "15 km",
    duration: "Flexibil",
    difficulty: "Usor",
    description: "Ștrandul Bánffy se află la altitudinea de 677 metri și la distanță de 600 m de centrul orașului; între anii 1228-1948 era parte componentă a teritoriului familiei Bánffy, până în anul 1850 ștrandul fiind vizitat doar de către membrii familiei și de invitații lor. Apa izvorului a fost captată, în trecut, într-un bazin cu pereții de scânduri și folosit pentru băi, notorietatea lui crescând an de an datorită virtuților lor curative; de jur împrejurul ștrandului erau vestiare. Aceste vestiare au fost demolate de către familia respectivă în 1937 și au construit bazinul de beton având dimensiunile de 33×20 m, care este și în prezent. Analiza chimică a apei de aici a fost făcută prima oară de un profesor din Insbruck (Leobisch) în anul 1882, iar în 1893 de Than Károly.",
    features: ["Piscina", "Apa termala", "Relaxare", "Fotografie"],
    images: [banffy],
    location: {
      address: "Strada Măgura nr. 9A, Toplița 535700",
      coordinates: "46.9393° N, 25.3615° E",
      lat: 46.9393,
      lng: 25.3615
    },
    color: "from-purple-500/20 to-fuchsia-400/20",
    accent: "bg-gradient-to-r from-purple-500 to-fuchsia-400"
  },
    {
    id:"Urmánczy",
    name: "Ștrandul Urmánczy",
    category: "outdoor",
    distance: "15 km",
    duration: "Flexibil",
    difficulty: "Usor",
    description: "Este un loc cu tradiție, cu apă termală minerală la 26–27°C, ideală pentru relaxare și tratamente. Piscina olimpică (50×20 m) și bazinul cu pietre încălzite natural sunt atracții rare în zonă.",
    features: ["Piscina", "Apa termala", "Relaxare", "Fotografie"],
    images: [urmanczy],
    location: {
      address: "Strada Apelor nr. 19, Toplița 535700",
      coordinates: "46.9368° N, 25.3542° E",
      lat: 46.9368,
      lng: 25.3542
    },
    color: "from-emerald-500/20 to-green-400/20",
    accent: "bg-gradient-to-r from-emerald-500 to-green-400"
  },
  {
    id:"centrul-echitatie",
    name: "Centrul de echitatie Toplita",
    category: "outdoor",
    distance: "15 km",
    duration: "Flexibil",
    difficulty: "Moderat",
    description: "Centrul oferă lecții de călărie în manej, plimbări călare prin natură, excursii ghidate și chiar plimbări cu trăsura. Caii sunt din rase variate – de la pur-sânge arab la frizieni – și sunt bine dresați, inclusiv pentru începători. Este un loc perfect pentru a te reconecta cu natura și cu tine însuți",
    features: ["Lecții de călărie", "Plimbări călare", "Excursii ghidate", "Trăsuri"],
    images: [echitare],
    location: {
      address: "Strada Vilelor, Toplița 535700",
      coordinates: "46.9386° N, 25.3672° E",
      lat: 46.9386,
      lng: 25.3672
    },
    color: "from-rose-500/20 to-pink-400/20",
    accent: "bg-gradient-to-r from-rose-500 to-pink-400"
  },
    {
    id:"Coaster",
    name: "Alpine Coaster Toplita",
    category: "outdoor",
    distance: "15 km",
    duration: "Flexibil",
    difficulty: "Usor",
    description: "Alpine Coaster Toplița este una dintre cele mai spectaculoase atracții de aventură din România, perfectă pentru iubitorii de adrenalină și natură. Situată în inima Munților Gurghiu, lângă pârtia Bradul, această pistă de bob pe șine se întinde pe aproximativ 2 kilometri și șerpuiește prin păduri și peisaje montane de poveste",
    features: ["Trasee naturale", "Fotografie", "Trăsuri", "Alpine Coaster"],
    images: [coaster],
    location: {
      address: "Strada Vilelor, Toplița 535700",
      coordinates: "46.9396° N, 25.3542° E",
      lat: 46.9396,
      lng: 25.3542
    },
    color: "from-emerald-500/20 to-green-400/20",
    accent: "bg-gradient-to-r from-emerald-500 to-green-400"
  },
   {
    id:"Borsec",
    name: "Statiunea Borsec",
    category: "outdoor",
    distance: "55 km",
    duration: "FLexibil",
    difficulty: "Usor",
    description: "Borsec este faimoasă pentru izvoarele sale minerale cu proprietăți terapeutice, utilizate de secole pentru tratarea afecțiunilor digestive, renale și reumatice. Stațiunea este înconjurată de păduri de conifere și peisaje montane spectaculoase, oferind un aer curat și o atmosferă liniștitoare. Printre atracțiile sale se numără Parcul Central, Grota Urșilor, Poiana Zânelor și traseele de drumeție care străbat pădurile din jur",
    features: ["Izvoare minerale", "Trasee de drumeție", "Parcuri naturale", "Relaxare","Fotografie","Wellness"],
    images: [borsec],
    location: {
      address: "Orașul Borsec 535300",
      coordinates: "46.9703° N, 25.5598° E",
      lat: 46.9703,
      lng: 25.5598
    },
    color: "from-rose-500/20 to-pink-400/20",
    accent: "bg-gradient-to-r from-rose-500 to-pink-400"
  },
     {
    id:"Rosu",
    name: "Lacul Roșu",
    category: "outdoor",
    distance: "75 km",
    duration: "Flexibil",
    difficulty: "Usor",
    description: "Lacul Roșu este un lac de baraj natural format în anul 1837, în urma unei alunecări de teren cauzate de ploi torențiale. Se află la poalele muntelui Hășmașul Mare, în apropierea spectaculoaselor Chei ale Bicazului, și face parte din Parcul Național Cheile Bicazului-Hășmaș",
    features: ["Peisaje montane", "Trasee de drumeție", "Fotografie", "Relaxare"],
    images: [rosu],
    location: {
      address: "Lacul Roșu, DN12C, județul Harghita, cod poștal 535502",
      coordinates: "46.783° N, 25.783° E",
      lat: 46.783,
      lng: 25.783
    },
    color: "from-orange-500/20 to-amber-400/20",
    accent: "bg-gradient-to-r from-orange-500 to-amber-400"
  },
];
