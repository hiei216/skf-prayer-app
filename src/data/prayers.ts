type Content = {
  subTitle?: string;
  subContent: string[];
};

export type Prayer = {
  id: number,
  type: string;
  title: string;
  note?: string;
  preContent?: Content[] | [];
  content?: Content[];
  postContent?: Content[] | [];
};

const apostlesCreed: Content = {
  subTitle: 'Apoštolské vyznanie viery',
  subContent: [
    'Verím v Boha,',
    'Otca všemohúceho,',
    'Stvoriteľa neba i zeme,',
    'i v Ježiša Krista,',
    'jeho jediného Syna, nášho Pána,',
    'ktorý sa počal z Ducha Svätého,',
    'narodil sa z Márie Panny,',
    'trpel za vlády Poncia Piláta,',
    'bol ukrižovaný, umrel a bol pochovaný;',
    'zostúpil k zosnulým,',
    'tretieho dňa vstal z mŕtvych,',
    'vystúpil na nebesia,',
    'sedí po pravici Boha Otca všemohúceho,',
    'odtiaľ príde súdiť živých i mŕtvych.',
    'Verím v Ducha Svätého,',
    'v svätú Cirkev katolícku,',
    'v spoločenstvo svätých,',
    'v odpustenie hriechov,',
    'vo vzkriesenie tela',
    'a v život večný. Amen.',
  ],
};

const theLordsPrayer: Content = {
  subTitle: 'Otčenáš',
  subContent: [
    'Otče náš, ktorý si na nebesiach,',
    'posväť sa meno tvoje,',
    'príď kráľovstvo tvoje,',
    'buď vôľa tvoja',
    'ako v nebi, tak i na zemi.',
    'Chlieb náš každodenný daj nám dnes,',
    'a odpusť nám naše viny,',
    'ako aj my odpúšťame svojim vinníkom,',
    'a neuveď nás do pokušenia,',
    'ale zbav nás zlého. Amen.',
  ],
};

const hailMary: Content = {
  subTitle: 'Zdravas Mária',
  subContent: [
    'Zdravas Mária, milosti plná,',
    'Pán s tebou,',
    'požehnaná si medzi ženami',
    'a požehnaný je plod života tvojho Ježiš.',
    'Svätá Mária, Matka Božia,',
    'pros za nás hriešnych',
    'teraz i v hodinu smrti našej.',
    'Amen.',
  ],
};

const endPrayer: Content = {
  subTitle: 'Záverečná modlitba',
  subContent: [
    'Zdravas, Kráľovná, - Matka milosrdenstva; - život náš i sladkosť - a nádej naša, zdravas!',
    'K tebe voláme, - hriešni synovia Evy, - v tomto sĺz údolí - stenajúci, plačúci.',
    'A preto teda, - Orodovnica naša, - obráť k nám tie svoje premilosrdné oči.',
    'A nám Ježiša, - ktorý je požehnaný - plod života svojho, - tam vo večnosti ukáž.',
    'Ó, milostivá - a nad všetky pobožná, - Ó, presladká Panna, - Matka Božia, Mária.',
    'Kňaz: Oroduj za nás, svätá Božia Rodička.',
    'Ľud: Aby sme sa stali hodni Kristových prisľúbení.',
    ' Všemohúci Bože, z anjelovho zvestovania vieme,',
    'že tvoj Syn Ježiš Kristus sa stal človekom;',
    'prosíme ťa, na orodovanie preblahoslavenej Panny Márie',
    'vlej nám do duše svoju milosť,',
    'aby nás jeho umučenie a kríž priviedli k slávnemu vzkrieseniu.',
    'Skrze nášho Pána Ježiša Krista, tvojho Syna,',
    'ktorý je Boh a s tebou žije a kraľuje',
    'v jednote s Duchom Svätým po všetky veky vekov.',
  ],
};

const cross_way_family_day1: Content = {
  subTitle: '1. zastavenie: Ukrižuj ho!',
  subContent: [
    'Tak volali masy, zmanipulované veľkňazmi a zákonníkmi. Nevedeli, čo kričia, ale kričali. Taká je davová psychóza. Médiá zhubnou silou útočia na rodinu. Ničia ju časopisy, noviny, televízne programy, seriály, filmy… Chcú všetkým nahovoriť, že pokojný rodinný život už dnes nie je v móde, ani šťastné manželstvá… Nedovoľte, aby si diabol privlastnil vašu rodinu! Bojujte o ňu teraz…skôr, ako bude neskoro. Modlite sa: Ježišu, zmiluj sa nado mnou a nad mojou rodinou!',
  ],
};

const cross_way_family_day2: Content = {
  subTitle: '2. zastavenie: Berie kríž',
  subContent: [
    'Berie kríž, aby nás zachránil, aby nás vytrhol z moci diabla. Teraz volá nás, aby sme boli nástrojmi spásy pre naše rodiny. Manžela, manželku, otca, matku, deti, slobodných, vdovy, všetkých, ktorí patríme do rodiny. Keď čítame o kresťanskej výzbroji, vidíme, že najmocnejšie Božie zbrane sú k dispozícii tým, ktorí čítajú Bibliu a praktizujú ju, zúčastňujú sa na svätej omši a Eucharistii, modlia sa individuálne i spoločne v rodine, modlia sa ruženec, patria do modlitebnej skupiny… Duchovný život spôsobuje, že rastie viera v srdci. Modlime sa: Ježišu, zmiluj sa nado mnou a nad mojou rodinou!',
  ],
};

const cross_way_family_day3: Content = {
  subTitle: '3. zastavenie: Prvý pád',
  subContent: [
    'Prvý pád celkom na začiatku krížovej cesty. V každom manželstve napriek dobrým predsavzatiam a správnemu konaniu príde ku kríze. Rozdielnosti pováh, rozdielne chápanie sveta muža a ženy, rozdielnosti zdedené i nadobudnuté výchovou rozdeľujú manželov, ktorí si len nedávno sľúbili, že budú jedno. Obrazovky i rady takzvaných priateľov radia rozvod, veď teraz je už taká doba. Nedajte sa pomýliť, nedajte sa zviesť. Zachráňte svoju rodinu! Modlime sa: Ježišu, zmiluj sa nado mnou a nad mojou rodinou!',
  ],
};

const cross_way_family_day4: Content = {
  subTitle: '4. zastavenie: Stretnutie s Matkou',
  subContent: [
    'To nebolo len také obyčajné stretnutie. To bolo hlboké stotožnenie sa v poslušnosti, láske a bolesti. Božia Matka aj nás sprevádza na našej životnej ceste. Aj nás chápe a prežíva s nami každú bolesť. To najsprávnejšie, čo môžeme urobiť, je zveriť do jej rúk seba i svoju rodinu a prosiť o jej ochranu. Veď ona tiež žila v rodine a veľmi dobre chápe naše problémy a ťažkosti. Svätá rodina prežívala veľmi veľké skúšky – chudobu, prenasledovanie, nepochopenie. Všetko toto prežívala v dôvere v Božiu pomoc a ochranu. Modlime sa: Ježišu, zmiluj sa nado mnou a nad mojou rodinou!',
  ],
};

const cross_way_family_day5: Content = {
  subTitle: '5. zastavenie: Kto nám pomôže niesť kríž?',
  subContent: [
    'Máme najvernejšieho Priateľa, ktorý sa sám ponúka, nik ho nenúti ako Šimona. Boh na nás čaká a chce nám dať zažiť zázraky. Či nás Boh uzdraví z našej slabosti, alebo nie, či nás vytrhne z nášho pokúšania, alebo nie, či spôsobí, aby náš manželský partner bol k nám láskavejší alebo nie, to nie je rozhodujúca otázka. Dôležité je, že Boh s nami hovorí a nazýva nás svojimi priateľmi – úplne nezaslúžene a nepochopiteľne – pretože Kristus vzal všetko naše trápenie a každé pokúšanie ľudského života za nás na seba. Modlime sa: Ježišu, zmiluj sa nado mnou a nad mojou rodinou!',
  ],
};

const cross_way_family_day6: Content = {
  subTitle: '6. zastavenie: Veronika bola odvážna',
  subContent: [
    'Zo všetkých tých ľudí a súcitiacich žien iba ona jediná neváhala byť inou, neváhala vystúpiť z davu, nebála sa prejaviť svoje vnútorné pocity aj navonok. A čo my, čo naša rodina? Bojíme sa priznať ku Kristovi a prijať ďalšie dieťa, lebo to už teraz nie je v móde? Hanbíme za to, že čestne pracujeme, a stále sa vozíme na starom aute? Obliekame sa podľa najnovšej módy, len aby sme sa neodlišovali od iných, hoci vieme, že naše obliekanie hraničí často s vyzývavou necudnosťou? A čo ešte nezachovávame z Božích prikázaní zo strachu, aby sme neboli iní? Modlime sa: Ježišu, zmiluj sa nado mnou a nad mojou rodinou!',
  ],
};

const cross_way_family_day7: Content = {
  subTitle: '7. zastavenie: Opakovaný pád',
  subContent: [
    'Začarovaný kruh. Neuznaná práca v domácnosti. Všednosť, stereotyp, nuda. Hľadáme únik v práci, v spoločností kolegýň a kolegov, budujeme kolektívy a naša rodina zostáva až kdesi na ďalšom mieste. Potom si nemáme čo povedať, nemáme čas na svoje deti, zverujeme ich škôlkam a družinám a možno len ulici… Kde sme sa to dostali, kde sme sa to ocitli? Naša rodina je na kolenách! Prebuďme sa, pokiaľ nie je neskoro! Prosme o silu znovu vstať. Oplatí sa bojovať o svoju rodinu. Boh je na našej strane, pomôže nám opäť začať znova. Modlime sa: Ježišu, zmiluj sa nado mnou a nad mojou rodinou!',
  ],
};

const cross_way_family_day8: Content = {
  subTitle: '8. zastavenie: Ježiš neodsudzuje súcitný plač žien',
  subContent: [
    'Ježiš neodsudzuje súcitný plač žien, iba ich usmerňuje. Plač je možno dobrý začiatok vlastnej premeny. Ale nestačí len plakať. Je dobré, že vidíme problémy, ktoré máme vo svojej rodine. Je dobré, že nezostávame k nim ľahostajní. Nestačí však plakať, sťažovať sa, nadávať, ani rozbíjať taniere. Treba začať pracovať na sebe. Ak chcem zmeniť svoju rodinu, musím začať od seba. Nevidím a neviem ako? Musím si kľaknúť na obe kolená a prosiť: Príď Duchu Svätý a daj, aby som videl svoje hriechy a aby som vedel, ako sa napraviť. Modlime sa: Ježišu, zmiluj sa nado mnou a nad mojou rodinou!',
  ],
};

const cross_way_family_day9: Content = {
  subTitle: '9. zastavenie: Najbolestnejší pád',
  subContent: [
    'Najbolestnejší pád tesne pod vrcholom. Úplné dno posledných síl. Ježiš predsa ešte vstáva. Dvíha ho láska a poslušnosť Otcovi. Čo najviac ničí naše rodiny? Nevera, rozvody, potraty, alkohol, drogy? To sú veľmi bolestné skúsenosti. Nemuseli by byť takéto dôsledky, keby sme zavčasu odstraňovali ich príčiny: neposlušnosť Bohu i rodičom, egoizmus, pýcha, chamtivosť, závisť, pôžitkárstvo, konzumný spôsob života, pohodlie. Nezháňajme toľko toho, čo nám ponúka svet, ale obráťme svoj duchovný zrak k Bohu a prídeme na to, čo je pre našu rodinu najdôležitejšie. Modlime sa: Ježišu, zmiluj sa nado mnou a nad mojou rodinou!',
  ],
};

const cross_way_family_day10: Content = {
  subTitle: '10. zastavenie: Vyzliekanie',
  subContent: [
    'Vyzliekanie. Ježiš prijal aj toto poníženie. Z doráňaného, dobitého, opľuvaného skrvaveného tela strhli zaprášený, krvou premoknutý odev. Nič mu neostalo. Ó, Ježišu! Ako je to s vyzliekaním a obliekaním v našich rodinách? Nechávame sa vyzliekať módou, pochybnými súťažami pochybnej krásy, dívame sa na málo oblečené dievčatá, ktoré si ani neuvedomujú svoje poníženie, keď sa nechajú takto fotiť a obzerať… Do našich domovov si kupujeme stále dokonalejšie obrazovky a s nimi aj čoraz viac možností hriešne pozerať na odhalené telo a telá… Čo sa to deje? Či telo nemá byť svätyňou, chrámom Svätého Ducha? Modlime sa: Ježišu, zmiluj sa nado mnou a nad mojou rodinou!',
  ],
};

const cross_way_family_day11: Content = {
  subTitle: '11. zastavenie: Pribili ho na kríž',
  subContent: [
    'Pribili ho na kríž. Klince, alebo láska k nám? Láska ho tam držala, z lásky k nám nezostúpil z kríža, z lásky k nám vykrvácal a na ňom zomrel. Všetko nám dal. Aj svoje Telo za pokrm, aj svoju Matku za našu matku. A stále sa nám dáva. Nič nezobral späť. Spolužitie v rodine je založené na láske. Máme sa navzájom milovať takou láskou, akou nás miluje Boh. Láskou, ktorá sa dáva a nič nežiada späť. Láskou, ktorá sa chce dávať, láskou, ktorá chce odpúšťať a potom znovu a zas a zas, stále, sedemdesiatsedem krát…Nie je to ľahké, je to veľmi náročné, ale s Kristom je všetko možné. Modlime sa: Ježišu, zmiluj sa nado mnou a nad mojou rodinou!',
  ],
};

const cross_way_family_day12: Content = {
  subTitle: '12. zastavenie: Smrť na kríži',
  subContent: [
    'Smrť na kríži. Slnko sa zatmelo. Zem sa triasla a skaly sa pukali. Tí, čo to videli, sa veľmi naľakali a hovorili: „On bol naozaj Boží Syn.“ Smrť v rodine tiež spôsobí také malé zemetrasenie v živote ostatných členov rodiny. Odišiel človek a zostalo prázdne miesto. Na určitý čas naše slnko prestane svietiť. A aj kamenné srdce vyroní slzu. Možno až vtedy prídeme na to, že tento človek bol pre nás veľký dar. A už mu to teraz nemôžeme povedať. Nič nemôžeme vrátiť späť. No jedno môžem urobiť: môžem viac milovať tých, ktorých tu ešte mám a tešiť sa na stretnutie vo večnosti s tým, ktorý ma tam predišiel. Ďakujem ti, Pane za vieru v teba a za vieru vo večný život. Modlime sa: Ježišu, zmiluj sa nado mnou a nad mojou rodinou!',
  ],
};

const cross_way_family_day13: Content = {
  subTitle: '13. zastavenie: V Matkinom náručí spočíva mŕtve Ježišovo telo',
  subContent: [
    'V Matkinom náručí spočíva mŕtve Ježišovo telo. Mária vyslovila svoje FIAT a žije ho stále. Potvrdzuje ho aj teraz. Je to žena úžasnej viery a dôvery v Boha. Veľmi trpí, ale trpí ticho. Objíma mŕtve telo svojho Syna a v ňom objíma všetkých nás. Ďakujeme ti, Pane, že môžeme byť údmi tvojho Tajomného Tela, že môžeme spočívať v náručí tvojej Matky. Jej náručie je ten najbezpečnejší prístav pre našu dušu a pre celú našu rodinu. Mária, k tebe sa utiekame, buď Kráľovnou našich rodín, buď Kráľovnou aj našej rodiny! Modlime sa: Ježišu, zmiluj sa nado mnou a nad mojou rodinou!',
  ],
};

const cross_way_family_day14: Content = {
  subTitle: '14. zastavenie: Ježiša ukladajú do hrobu',
  subContent: [
    'Ježiša vložili do hrobu. No nezostal tam. Tu sa začína tá najradostnejšia správa: Na tretí deň vstal! Dokonal svoje dielo, splnil vôľu Otca, premohol smrť a vstal zmŕtvych! Keby nebolo zmŕtvychvstania, naša viera by nemala zmysel. Nemali by sme žiadnej nádeje a nemal by zmysel náš život ani naše obety a utrpenie. Hroby a cintoríny nemusia byť pre kresťana miestom smútku, ale miestom, kde sa upevňuje a rastie naša nádej. Nádej, že sa splní najväčšia túžba ľudskej duše – večný život v milujúcom náručí nášho Boha v spoločenstve tých, ktorých sme tu milovali. Modlime sa: Ježišu, zmiluj sa nado mnou a nad mojou rodinou!',
  ],
};

const cross_way_family_end: Content = {
  subTitle: 'Záver',
  subContent: [
    'Pane Ježišu, ďakujeme ti, že si svojím narodením posvätil ľudskú rodinu a že sme sa krstom začlenili do Božej rodiny. Prosíme ťa, rozmnož našu vieru a dôveru v teba, uzdrav naše duše i naše rodiny. Vylej na nás svoju lásku, aby sme sa milovali navzájom tak, ako si ty miloval nás. Amen.',
    'Na úmysel Svätého Otca: Otče náš… Zdravas… Sláva Otcu…',
  ],
};

export const PRAYERS: Prayer[] = [
  {
    id: 0,
    type: 'holy_archangel_michael',
    title: 'Svätý Michal archanjel...',
    note: '',
    preContent: [],
    content: [
      {
        subContent: [
          'Svätý Michal archanjel, bráň nás v boji, buď nám ochrancom proti zlobe a úkladom diabla.',
          'Pokorne prosíme, nech mu Boh ukáže svoju moc.',
          'A ty, knieža nebeských zástupov, Božou mocou zažeň do pekla satana a iných zlých duchov,',
          'ktorí sa na skazu duší potulujú po svete.',
        ],
      },
    ],
    postContent: [],
  },
  {
    id: 1,
    type: 'holy_mary_mother_of_nations',
    title: 'Modlitba Matky všetkých národov',
    note: '',
    preContent: [],
    content: [
      {
        subContent: [
          'Pane, Ježišu Kriste, Syn Otca, zošli teraz na zem svojho Ducha.',
          'Daj, nech Duch Svätý prebýva v srdciach všetkých národov, aby boli uchránené od skazy, nešťastia a vojny.',
          'Kiežby Matka všetkých národov, preblahoslavená Panna Mária, bola našou Orodovnicou.',
          'Amen.',
        ],
      },
    ],
    postContent: [],
  },
  {
    id: 2,
    type: 'litany_holy_spirit',
    title: 'Litánie k Duchu Svätému',
    note: 'BUĎ ZVELEBENÝ! (opakuje sa za každou prosbou)',
    preContent: [],
    content: [
      {
        subContent: [
          'Sláva Otcu i Synu i Duchu Svätému…',
          'Duchu Svätý, zostúp z trónu svojej velebnosti a vybuduj si stánok v srdci svojho služobníka!',
          'Duchu Svätý, ktorý si Otcom i Synom uctievaný, nauč ma žiť v stálej prítomnosti Božej!',
          'Duchu Svätý, ktorý si Otcom i Synom uctievaný, nauč ma žiť podľa vôle Najvyššieho!',
          'Duchu Svätý, ktorý sídliš v srdci Božieho Syna, nauč ma poznávať Ťa a úprimne milovať!',
          'Duchu Svätý, ktorý sa staráš o slávu Boha Otca, nauč ma žiť v odovzdanosti a v úplnej dôvere v Boha!',
          'Duchu Svätý, znamenie ohnivých jazykov, zapáľ v mojom srdci oheň svojej lásky!',
          'Duchu Svätý, tajomná holubica, nauč ma chápať Sväté písmo!',
          'Duchu Svätý, ktorý nemáš tvár ani meno, nauč ma správne sa modliť!',
          'Duchu Svätý, ktorý hovoríš ústami prorokov, nauč ma žiť v pokoji a vo vyrovnanosti ducha - duše!',
          'Duchu Svätý, horiace ohnisko lásky, nauč ma žiť múdro a trpezlivo!',
          'Duchu Svätý, darca všetkých darov, nauč ma žiť v pokore a skromnosti!',
          'Duchu Svätý, pretekajúca pokladnica milosti, nauč ma chápať cenu utrpenia!',
          'Duchu Svätý, bezodná pokladnica milosti, nauč ma správne využívať drahocenný čas!',
          'Duchu Svätý, z pokladnice ktorého neubúda, chráň ma od každej nelásky a pýchy!',
          'Duchu Svätý, ktorého bohatstvo nikto nespočíta, nauč ma čeliť zbytočným predstavám a myšlienkam!',
          'Duchu Svätý, premnohých darov, nauč ma vyhýbať sa neužitočnej činnosti a planým rečiam!',
          'Duchu Svätý, z ktorého plnosti sme všetci prijali, nauč ma mlčať a prehovoriť v pravý čas!',
          'Duchu Svätý, láska večná, nauč ma dávať dobrý príklad iným!',
          'Duchu Svätý, dobrota nekonečná, daj mi vytrvalosť v dobrom!',
          'Duchu Svätý, sladký učiteľ, nauč ma správne zaobchádzať s ľuďmi!',
          'Duchu Svätý, milý priateľ duší, nauč ma nikoho neposudzovať a na krivdy nikdy nespomínať!',
          'Duchu Svätý, obšťastňujúce Svetlo duše, nauč ma vidieť potreby iných a nezanedbávať dobré skutky!',
          'Duchu Svätý, Otče úbohých, daj mi poznať svoje chyby!',
          'Duchu Svätý, ktorý konáš v dušiach zázraky, veď ma bdelosťou k dokonalosti!',
          'Duchu Svätý, pred ktorým nič nie je utajené, nauč ma unikať osídlam diablovým!',
          'Duchu Svätý, ktorý poznáš budúcnosť vesmíru, pomôž mi vymaniť sa z područia tela a diabla!',
          'Duchu Svätý, ktorý poznáš i moju budúcnosť, zverujem do Tvojej ochrany i moju rodinu, priateľov, dobrodincov a všetkých ľudí!',
          'Duchu Svätý, s Tvojou Božskou pomocou nauč ma žiť na česť a slávu Božiu, k spáse duší a k radosti Matke Božej, aby som mohol umrieť ako užitočný sluha. Amen.',
        ],
      },
    ],
    postContent: [],
  },
  // Rosary - Joyful Mysteries
  {
    id: 3,
    type: 'rosary_joyful',
    title: 'Radostný ruženec',
    note: 'Modlí sa v pondelok a sobotu, v Adventnom období aj v iné dni.',
    preContent: [apostlesCreed, theLordsPrayer, hailMary],
    content: [
      {
        subTitle: 'Prosby k preddesiatku',
        subContent: [
          '...ktorý nech rozmnožuje našu vieru.',
          '...ktorý nech posilňuje našu nádej.',
          '...ktorý nech roznecuje našu lásku.',
        ],
      },
      {
        subTitle: '1. tajomstvo - Radostný ruženec',
        subContent: [
          'ktorého si, Panna, z Ducha Svätého počala.',
          'v ktorého ľudstvo, pozbavené raja, dúfalo.',
          'ktorého očakávali patriarchovia.',
          'ktorého ohlasovali proroci.',
          'na ktorého počatie ťa pripravil Duch Svätý.',
          'ktorého ti zvestoval archanjel Gabriel.',
          'kvôli ktorému si bola vernou služobnicou Pána.',
          'ktorého vteleniu si privolila slovami: „Nech sa mi stane podľa tvojho slova.“',
          'večné Slovo, ktoré sa stalo telom.',
          'ktorého si, Panna, z Ducha Svätého počala.',
        ],
      },
      {
        subTitle: '2. tajomstvo - Radostný ruženec',
        subContent: [
          'ktorého si, Panna, pri návšteve Alžbety v živote nosila.',
          'ktorého si bola príbytkom i chrámom.',
          'ktorý ťa svojou prítomnosťou posväcoval.',
          'ktorého počatie bolo skúškou viery pre svätého Jozefa.',
          'ktorý ti vnukol myšlienku navštíviť príbuznú Alžbetu.',
          'kvôli ktorému si vyslovila svoju radosť v chválospeve Magnifikat.',
          'ktorého prítomnosť naplnila svätého Jána radosťou už v matkinom lone.',
          'ktorý ti dal silu slúžiť Alžbete.',
          's ktorým si začala spolupracovať na vykúpení sveta.',
          'ktorého si, Panna, pri návšteve Alžbety v živote nosila.',
        ],
      },
      {
        subTitle: '3. tajomstvo - Radostný ruženec',
        subContent: [
          'ktorého si, Panna, v Betleheme porodila.',
          'ktorý prišiel na svet ako slabé dieťa.',
          'ktorého vlastní neprijali.',
          'ktorého si uložila do jasieľ.',
          'ktorého narodenie radostne ohlasovali anjeli.',
          'ktorému sa klaňali pastieri.',
          'ktorého hviezda ohlasovala národom.',
          'pre ktorého sa Herodes a celý Jeruzalem s ním rozrušil.',
          'ktorému mudrci od východu priniesli dary.',
          'ktorého si, Panna, v Betleheme porodila.',
        ],
      },
      {
        subTitle: '4. tajomstvo - Radostný ruženec',
        subContent: [
          'ktorého si, Panna, v chráme obetovala.',
          'ktorý sa podriadil Mojžišovmu zákonu.',
          'ktorého si spolu s Jozefom predstavila Pánovi.',
          'ktorý prišiel do chrámu nepoznaný.',
          'ktorého Simeon z vnuknutia Ducha Svätého poznal a velebil.',
          'ktorého Simeon nazval svetlom na osvietenie pohanov.',
          'pre ktorého prorokyňa Anna velebila Boha.',
          'kvôli ktorému tvoju vlastnú dušu mal preniknúť meč.',
          'ktorý rástol a mocnel, plný múdrosti.',
          'ktorého si, Panna, v chráme obetovala.',
        ],
      },
      {
        subTitle: '5. tajomstvo - Radostný ruženec',
        subContent: [
          'ktorého si, Panna, v chráme našla.',
          'ktorý ako dvanásťročný putoval do Jeruzalemského chrámu.',
          'ktorý ostal v chráme - v dome svojho Otca.',
          'ktorý v chráme zasadol medzi učiteľov zákona.',
          'ktorý udivoval prítomných svojou rozumnosťou a odpoveďami.',
          'ktorého si spolu so svätým Jozefom s bolesťou hľadala.',
          'ktorý sa vrátil do Nazareta a bol poslušný tebe a Jozefovi.',
          'ktorého slová si zachovávala vo svojom srdci.',
          'ktorý sa vzmáhal v múdrosti, veku a obľube u Boha i u ľudí.',
          'ktorého si, Panna, v chráme našla.',
        ],
      },
    ],
    postContent: [endPrayer],
  },
  // Rosary - Luminous Mysteries
  {
    id: 4,
    type: 'rosary_luminous',
    title: 'Ruženec svetla',
    note: 'Modlí sa vo štvrtok.',
    preContent: [apostlesCreed, theLordsPrayer, hailMary],
    content: [
      {
        subTitle: 'Prosby k preddesiatku',
        subContent: [
          '...ktorý nech je svetlom nášho života.',
          '...ktorý nech nás uzdravuje milosrdnou láskou.',
          '...ktorý nech nás vezme k sebe do večnej slávy.',
        ],
      },
      {
        subTitle: '1. tajomstvo - Ruženec svetla',
        subContent: [
          'ktorý bol pokrstený v Jordáne.',
          'ktorý sa zaradil medzi kajúcnikov pri rieke Jordán.',
          'ktorý bol Bohom a predsa chcel prijať krst od Jána.',
          'ktorého sa Ján Krstiteľ zdráhal pokrstiť.',
          'na ktorého po krste zostúpil Duch Svätý v podobe holubice.',
          'nad ktorým zaznel Otcov hlas: "Toto je môj milovaný Syn."',
          'ktorý nám poukazuje na dôležitosť sviatosti krstu.',
          'ktorý odchádza po krste na púšť do samoty.',
          'ktorý začína svoje verejné účinkovanie.',
          'ktorý bol pokrstený v Jordáne.',
        ],
      },
      {
        subTitle: '2. tajomstvo - Ruženec svetla',
        subContent: [
          'ktorý zjavil seba samého na svadbe v Káne.',
          'ktorý prijal pozvanie na svadbu spolu so svojimi učeníkmi.',
          'ktorému Mária povedala: "Nemajú vína."',
          'ktorý kázal naplniť nádoby na očisťovanie vodou.',
          'ktorý premenil vodu na víno.',
          'ktorý na príhovor svojej Matky pomohol mladomanželom v núdzi.',
          'ktorý prvýkrát verejne prejavil svoju Božskú moc.',
          'ktorý otvoril srdcia učeníkov pre vieru.',
          'ktorý nám aj dnes na príhovor Panny Márie pomáha v našich ťažkostiach.',
          'ktorý zjavil seba samého na svadbe v Káne.',
        ],
      },
      {
        subTitle: '3. tajomstvo - Ruženec svetla',
        subContent: [
          'ktorý ohlasoval Božie kráľovstvo a pokánie.',
          'ktorý začal svoje verejné účinkovanie slovami: "Robte pokánie, lebo sa priblížilo nebeské kráľovstvo."',
          'ktorý ohlasoval Kráľovstvo lásky, spravodlivosti a pokoja.',
          'ktorý hovoril o Božom kráľovstve v podobenstvách.',
          'ktorý hlásal, že Božie kráľovstvo je medzi nami a v nás.',
          'ktorého zvesť o Božom kráľovstve a pokáni je stále platná.',
          'ktorý každého z nás vyzýva k zmene zmýšľania.',
          'ktorého slovo je trvalou výzvou na obrátenie.',
          'ktorý nás nielen povoláva k pokániu, ale sám nám k nemu dáva príklad.',
          'ktorý ohlasoval Božie kráľovstvo a pokánie.',
        ],
      },
      {
        subTitle: '4. tajomstvo - Ruženec svetla',
        subContent: [
          'ktorý sa premenil na vrchu Tábor.',
          'ktorý vzal so sebou Petra, Jakuba a Jána a vystúpil na vrch modliť sa.',
          'ktorý sa pred apoštolmi premenil.',
          'ktorému pri modlitbe zažiarila tvár ako slnko.',
          'ktorý sa rozprával s Mojžišom a Eliášom.',
          'ktorému Peter povedal: "Učiteľ, dobre je nám tu."',
          'ktorý povzbudil prestrašených apoštolov, aby sa nebáli.',
          'ktorý na vrchu Tábor zjavil apoštolom svoje božstvo.',
          'ktorý aj nás pozýva do ticha a samoty.',
          'ktorý sa premenil na vrchu Tábor.',
        ],
      },
      {
        subTitle: '5. tajomstvo - Ruženec svetla',
        subContent: [
          'ktorý ustanovil Oltárnu sviatosť.',
          'ktorý v Kafarnaume prisľúbil ustanovenie Oltárnej sviatosti.',
          'ktorý pri Poslednej večeri vzal chlieb a povedal: "Toto je moje telo, ktoré sa obetuje za vás."',
          'ktorý vzal kalich s vínom a povedal: "Toto je kalich mojej krvi, ktorá sa vylieva za vás i za všetkých."',
          'ktorý slovami: "Toto robte na moju pamiatku" zveril Eucharistiu kňazom.',
          'ktorý je pod spôsobom chleba a vína pokrmom slabých.',
          'ktorý sa v Eucharistii stáva duchovným pokrmom a nápojom pre našu cestu do večnosti.',
          'ktorý je v Eucharistii centrom života Cirkvi.',
          'ktorý v Eucharistii vyžaruje svetlo lásky na celú zem.',
          'ktorý ustanovil Oltárnu sviatosť.',
        ],
      },
    ],
    postContent: [endPrayer],
  },
  // Rosary - Sorrowful Mysteries
  {
    id: 5,
    type: 'rosary_sorrowful',
    title: 'Bolestný ruženec',
    note: 'Modlí sa v utorok a v piatok, v Pôstnom období aj v iné dni.',
    preContent: [apostlesCreed, theLordsPrayer, hailMary],
    content: [
      {
        subTitle: 'Prosby k preddesiatku',
        subContent: [
          '...ktorý nech osvecuje náš rozum.',
          '...ktorý nech upevňuje našu vôľu.',
          '...ktorý nech posilňuje našu pamäť.',
        ],
      },
      {
        subTitle: '1. tajomstvo - Bolestný ruženec',
        subContent: [
          'ktorý sa pre nás krvou potil.',
          'ktorý v Getsemanskej záhrade cítil slabosť ľudskej prirodzenosti.',
          'ktorý cítil úzkosť a hrôzu múk, ktoré mal podstúpiť.',
          'ktorý videl hriechy celého sveta.',
          'ktorý videl ľudí, pre ktorých jeho krv bude márne vyliata.',
          'ktorý videl, že ho budú nenávidieť napriek všetkej jeho láske.',
          'ktorý prosil: "Otče, ak chceš, vezmi odo mňa tento kalich!"',
          'ktorý volal: "Nie moja, ale tvoja vôľa nech sa stane!"',
          'ktorého anjel posilňoval v smrteľnej úzkosti.',
          'ktorý sa pre nás krvou potil.',
        ],
      },
      {
        subTitle: '2. tajomstvo - Bolestný ruženec',
        subContent: [
          'ktorý bol pre nás bičovaný.',
          'ktorý bol priviazaný k stĺpu na mučenie.',
          'ktorý bol zhanobený trestom určeným pre otrokov.',
          'ktorého hriešnici nemilosrdne týrali.',
          'ktorý znášal kruté údery korbáčom.',
          'na ktorom sa vyzúrila ľudská surovosť.',
          'z ktorého tiekli pramienky krvi.',
          'ktorý trpel za hriechy zmyselnosti páchané vo svete.',
          'ktorému sa vojaci posmievali.',
          'ktorý bol pre nás bičovaný.',
        ],
      },
      {
        subTitle: '3. tajomstvo - Bolestný ruženec',
        subContent: [
          'ktorý bol pre nás tŕním korunovaný.',
          'ktorého vojaci odeli do šarlátového plášťa.',
          'ktorému namiesto žezla dali do ruky trstinu.',
          'ktorému položili na hlavu tŕňovú korunu.',
          'ktorému sa posmešne klaňali ako kráľovi.',
          'ktorému pľuli do tváre a trstinou ho bili po hlave.',
          'o ktorom sa aj Pilát s hrôzou vyslovil: "Hľa, človek!"',
          'ktorého Židia zavrhli krikom: "Preč s ním!"',
          'ktorého vyvolený národ neprijal za kráľa.',
          'ktorý bol pre nás tŕním korunovaný.',
        ],
      },
      {
        subTitle: '4. tajomstvo - Bolestný ruženec',
        subContent: [
          'ktorý pre nás kríž niesol.',
          'ktorý vzal na plecia drevo kríža dobrovoľne a s láskou.',
          'ktorý klesol pod ťarchou kríža.',
          'ktorého cestou na Kalváriu bili a potupovali.',
          'ktorého si stretla na bolestnej ceste na Kalváriu.',
          'ktorý napomenul k pokániu ženy, čo ho oplákalvali.',
          'ktorému Veronika šatkou utrela zakrvavenú tvár.',
          'ktorému Šimon z Cyrény pomáhal niesť kríž.',
          'ktorý nás vyzval niesť s ním svoj každodenný kríž.',
          'ktorý pre nás kríž niesol.',
        ],
      },
      {
        subTitle: '5. tajomstvo - Bolestný ruženec',
        subContent: [
          'ktorý bol pre nás ukrižovaný.',
          'ktorému kati stŕhali šaty z rán.',
          'ktorému prerazili ruky a nohy klincami.',
          'ktorého vyzdvihli na kríž nad mestom.',
          'ktorý visel medzi dvoma lotrami.',
          'ktorému sa veľkňazi posmievali.',
          'ktorého všetci opustili, okrem Matky, Jána a žien.',
          'nad smrťou jeho triasla sa zem a zatmelo sa slnko.',
          'ktorého srdce prebodli kopijou.',
          'ktorý bol pre nás ukrižovaný.',
        ],
      },
    ],
    postContent: [endPrayer],
  },
  // Rosary - Glorious Mysteries
  {
    id: 6,
    type: 'rosary_glorious',
    title: 'Slávnostný ruženec',
    note: 'Modlí sa v stredu a nedeľu, vo Veľkonočnom období aj v iné dni.',
    preContent: [apostlesCreed, theLordsPrayer, hailMary],
    content: [
      {
        subTitle: 'Prosby k preddesiatku',
        subContent: [
          '...ktorý nech usporadúva naše myšlienky.',
          '...ktorý nech riadi naše slová.',
          '...ktorý nech spravuje naše skutky.',
        ],
      },
      {
        subTitle: '1. tajomstvo - Slávnostný ruženec',
        subContent: [
          'ktorý slávne vstal z mŕtvych.',
          'ktorý zostúpil k zosnulým a zjavil im vykúpenie.',
          'ktorý zvíťazil nad smrťou a hriechom.',
          'ktorý splnil svoju predpoveď, že tretieho dňa vstane z mŕtvych.',
          'ktorý sa zjavil Márii Magdaléne.',
          'ktorý sa zjavil apoštolom vo Večeradle a pozdravil ich: "Pokoj vám!"',
          'ktorý sa zjavil emauzským učeníkom.',
          'ktorý priviedol k viere neveriaceho Tomáša.',
          'ktorý dal apoštolom moc odpúšťať hriechy.',
          'ktorý slávne vstal z mŕtvych.',
        ],
      },
      {
        subTitle: '2. tajomstvo - Slávnostný ruženec',
        subContent: [
          'ktorý slávne vystúpil do neba.',
          'ktorý vyzval apoštolov, aby očakávali prisľúbeného Ducha Svätého.',
          'ktorý rozkázal apoštolom odísť do Galiley na vrch.',
          'ktorý poslal apoštolov do celého sveta, aby učili a krstili.',
          'ktorý je s osláveným telom po pravici Otca.',
          'ktorý sľúbil, že bude s nami po všetky dni až do skončenia sveta.',
          'ktorý nám šiel pripraviť miesto vo svojom kráľovstve.',
          'ktorý chce, aby tí čo ho milujú, boli s ním v nebeskej sláve.',
          'ktorý znova príde ako sudca živých i mŕtvych.',
          'ktorý slávne vystúpil do neba.',
        ],
      },
      {
        subTitle: '3. tajomstvo - Slávnostný ruženec',
        subContent: [
          'ktorý nám zoslal Ducha Svätého.',
          'ktorý zoslal svojho Ducha v podobe ohnivých jazykov.',
          'ktorý zoslal Ducha Svätého na tých, ktoríspolu s tebou jednomyseľne zotrvávali na modlitbách.',
          'ktorý zoslal Ducha Svätého na apoštolov, aby im pripomenul všetky jeho slová.',
          'ktorý zoslal Ducha Sily, aby dodal odvahu svojim učeníkom.',
          'ktorý zoslal Ducha Tešiteľa, aby sme sa necítili ako siroty.',
          'ktorý nám zoslal Ducha Oživovateľa, aby sme žili ako nové stvorenia.',
          'ktorý nám zoslal Ducha Posvätiteľa, aby nás viedol k Otcovi.',
          'ktorý nám zoslal Ducha Pravdy, aby riadil Cirkev.',
          'ktorý nám zoslal Ducha Svätého.',
        ],
      },
      {
        subTitle: '4. tajomstvo - Slávnostný ruženec',
        subContent: [
          'ktorý ťa, Panna, vzal do neba.',
          'ktorý ťa chránil od porušenia v hrobe.',
          'ktorý ťa ako prvú urobil účastnou na sláve zmŕtvychvstania.',
          'ktorý ťa urobil obrazom oslávenej Cirkvi.',
          'ktorý nás tvojím nanebovzatím posilňuje na pozemskej púti.',
          'ktorý ťa urobil našou Orodovníčkou v nebi.',
          'ktorý ochotne vypočuje tvoje prosby za nás.',
          'ktorý nám tvojím nanebovzatím ukázal, kde je naša pravá vlasť.',
          'ktorý nám tvojím nanebovzatím ukazuje, že sa oplatí žiť pre nebo i za cenu veľkých obetí.',
          'ktorý ťa, Panna, vzal do neba.',
        ],
      },
      {
        subTitle: '5. tajomstvo - Slávnostný ruženec',
        subContent: [
          'ktorý ťa, Panna, v nebi korunoval.',
          'ktorý ťa uviedol do svojho kráľovstva.',
          'ktorý ťa ustanovil za kráľovnú vesmíru.',
          'ktorý chce, aby si bola sprostredkovateľkou všetkých milostí.',
          'ktorý chce, aby si bola Matkou Cirkvi a pomocnicou kresťanov.',
          'ktorý ťa korunoval za kráľovnú anjelov a svätých.',
          'ktorý ťa urobil posilou mučeníkov.',
          'ktorý ťa urobil vzorom panenských duší.',
          'ktorý ťa urobil útočiskom hriešnikov.',
          'ktorý ťa, Panna, v nebi korunoval.',
        ],
      },
    ],
    postContent: [endPrayer],
  },
  {
    id: 7,
    type: '1000_souls_prayer',
    title: 'Modlitba pre vyslobodenie 1000 duší z očistca',
    note: 'Náš Pán povedal Svätej Gertrúde, že táto modlitba vyslobodzuje tisíc duší z očistca, kedykoľvek sa ju niekto pomodlí. Modlitba bola (čo do obsahu) rozšírená, aby boli zahrnutí aj žijúci hriešnici, a tak aby si zmenšovali už v tom to živote vinu, ktorú si nahromadili. ',
    preContent: [],
    content: [
      {
        subContent: [
          'Večný Otče, ',
          'obetujem Ti najdrahocennejšiu Krv',
          'Tvojho Božského Syna Ježiša',
          'v spojení so svätými omšami,',
          'ktoré sa dnes slávia na celom svete,',
          'za všetky duše v očistci,',
          'za hriešnikov na všetkých miestach,',
          'za hriešnikov v celej svetovej Cirkvi,',
          'za hriešnikov v mojom vlastnom domove',
          'a v mojej vlastnej rodine. Amen.',
        ],
      },
    ],
    postContent: [],
  },
  // Way of the Cross - for families
  {
    id: 8,
    type: 'cross_way_family',
    title: 'Krížová cesta za uzdravenie rodín',
    note: 'Boh tak miloval svet, že nám dal svojho Syna, aby nás vykúpil. Narodil sa a vyrástol v rodine, aby tak posvätil rodinu . Rodina je miestom, kde láska rodí život. Dnes sa rodina stále viac odkláňa od svojho pôvodného určenia, a to má hrozné následky pre ľudskú spoločnosť i pre Cirkev. Touto pobožnosťou krížovej cesty chceme vyprosovať uzdravenie našim rodinám.',
    preContent: [
      cross_way_family_day1,
      cross_way_family_day2,
      cross_way_family_day3,
      cross_way_family_day4,
      cross_way_family_day5,
      cross_way_family_day6,
      cross_way_family_day7,
      cross_way_family_day8,
      cross_way_family_day9,
      cross_way_family_day10,
      cross_way_family_day11,
      cross_way_family_day12,
      cross_way_family_day13,
      cross_way_family_day14,
      cross_way_family_end,
    ],
  },
  {
    id: 9,
    type: 'come_holy_spirit',
    title: 'Príď, Duchu Svätý, príď...',
    content: [
      {
        subContent: [
          '3x Príď, Duchu Svätý, príď, na mocný príhovor, Nepoškvrneného Srdca Panny Márie, tvojej milovanej Nevesty.'
        ],
      },
    ],
  },
];
