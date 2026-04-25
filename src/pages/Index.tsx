import { useState } from "react";
import Icon from "@/components/ui/icon";

const sections = [
  { id: "history", num: "I", title: "История и эволюция охотничьих ружей" },
  { id: "methods", num: "II", title: "Применение в охотничьей практике" },
  { id: "safety", num: "III", title: "Правила безопасности и нормативная база" },
  { id: "ecology", num: "IV", title: "Влияние охоты на экологический баланс" },
  { id: "economy", num: "V", title: "Экономический аспект охотничьей деятельности" },
];

const rifleData = [
  {
    type: "Гладкоствольное ружьё",
    caliber: "12, 16, 20 кал.",
    range: "до 60 м",
    purpose: "Птица, мелкий зверь",
    weight: "2.8–3.5 кг",
    price: "30–150 тыс. ₽",
    complexity: "Низкая",
  },
  {
    type: "Нарезное ружьё",
    caliber: ".308, .30-06, 7.62×54",
    range: "до 500 м",
    purpose: "Крупный зверь",
    weight: "3.2–4.5 кг",
    price: "60–400 тыс. ₽",
    complexity: "Высокая",
  },
  {
    type: "Комбинированное",
    caliber: "12 кал. + нарезной",
    range: "до 300 м",
    purpose: "Универсальное",
    weight: "3.5–5.0 кг",
    price: "80–300 тыс. ₽",
    complexity: "Средняя",
  },
  {
    type: "Штуцер",
    caliber: ".375, .458, .470",
    range: "до 150 м",
    purpose: "Крупный/опасный зверь",
    weight: "4.0–5.5 кг",
    price: "200–1500 тыс. ₽",
    complexity: "Высокая",
  },
  {
    type: "Карабин самозарядный",
    caliber: "5.56, 7.62×39",
    range: "до 400 м",
    purpose: "Средний зверь, загонная",
    weight: "3.0–4.0 кг",
    price: "50–200 тыс. ₽",
    complexity: "Средняя",
  },
];

const economicData = [
  { region: "Центральная Россия", licenses: "142 000", revenue: "2.4 млрд ₽", jobs: "18 400" },
  { region: "Сибирь и Дальний Восток", licenses: "98 000", revenue: "3.1 млрд ₽", jobs: "24 700" },
  { region: "Северо-Запад", licenses: "67 000", revenue: "1.8 млрд ₽", jobs: "11 200" },
  { region: "Юг России", licenses: "54 000", revenue: "1.2 млрд ₽", jobs: "8 600" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("history");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-ibm" style={{ background: "var(--hunt-paper)", color: "var(--hunt-text)" }}>
      {/* Header */}
      <header
        className="border-b"
        style={{ background: "var(--hunt-dark)", borderColor: "var(--hunt-gold)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div
              className="w-10 h-10 flex items-center justify-center border"
              style={{ borderColor: "var(--hunt-gold)", background: "rgba(201,168,76,0.1)" }}
            >
              <Icon name="BookOpen" size={18} style={{ color: "var(--hunt-gold)" }} />
            </div>
            <div>
              <div className="text-xs tracking-widest uppercase font-mono" style={{ color: "var(--hunt-gold)" }}>
                Научно-исследовательский документ
              </div>
              <div className="text-white font-cormorant text-xl font-semibold leading-none mt-0.5">
                Охотничьи ружья России
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs tracking-wider uppercase" style={{ color: "rgba(255,255,255,0.45)" }}>
            <span>Апрель 2026</span>
            <span className="w-px h-4 inline-block" style={{ background: "var(--hunt-gold)", opacity: 0.4 }} />
            <span>5 разделов</span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex gap-0">
        {/* Sidebar Navigation */}
        <aside
          className="hidden lg:block w-64 shrink-0 sticky top-0 h-screen overflow-y-auto border-r py-10"
          style={{ borderColor: "var(--hunt-border)" }}
        >
          <div className="mb-8 px-2">
            <div className="text-xs tracking-widest uppercase font-mono mb-4" style={{ color: "var(--hunt-muted)" }}>
              Содержание
            </div>
            <div className="space-y-1">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="w-full text-left flex items-start gap-3 px-3 py-2.5 rounded transition-all"
                  style={{
                    background: activeSection === s.id ? "rgba(45,74,34,0.08)" : "transparent",
                    borderLeft: activeSection === s.id ? "2px solid var(--hunt-green)" : "2px solid transparent",
                  }}
                >
                  <span
                    className="font-mono text-xs mt-0.5 shrink-0"
                    style={{ color: activeSection === s.id ? "var(--hunt-green)" : "var(--hunt-muted)" }}
                  >
                    {s.num}
                  </span>
                  <span
                    className="text-sm leading-snug"
                    style={{ color: activeSection === s.id ? "var(--hunt-text)" : "var(--hunt-muted)" }}
                  >
                    {s.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div
            className="mx-2 p-3 border text-xs"
            style={{ borderColor: "var(--hunt-gold)", background: "rgba(201,168,76,0.05)", color: "var(--hunt-muted)" }}
          >
            <div className="font-mono uppercase tracking-wider text-xs mb-1" style={{ color: "var(--hunt-gold)" }}>Документ</div>
            <div>Версия 1.0 · 2026</div>
            <div>Охота и природопользование</div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 py-10 lg:pl-10">

          {/* Hero Title Block */}
          <div
            className="border p-8 md:p-12 mb-10 relative overflow-hidden"
            style={{ borderColor: "var(--hunt-border)", background: "var(--hunt-cream)" }}
          >
            <div
              className="absolute top-0 right-0 w-48 h-full opacity-5 pointer-events-none"
              style={{
                backgroundImage: "repeating-linear-gradient(45deg, #2d4a22 0, #2d4a22 1px, transparent 0, transparent 50%)",
                backgroundSize: "10px 10px",
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1 max-w-12" style={{ background: "var(--hunt-gold)" }} />
                <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--hunt-gold)" }}>
                  Аналитический обзор
                </span>
              </div>
              <h1
                className="font-cormorant text-4xl md:text-6xl font-bold leading-tight mb-4"
                style={{ color: "var(--hunt-dark)" }}
              >
                Охотничьи ружья:<br />
                <span className="italic font-light" style={{ color: "var(--hunt-green-mid)" }}>
                  история, практика и право
                </span>
              </h1>
              <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "var(--hunt-muted)" }}>
                Комплексное научно-исследовательское исследование охотничьего оружия России: от исторических истоков до
                современных нормативных требований, экологического влияния и экономической роли отрасли.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                {["5 разделов", "Сравнительные таблицы", "Статистика 2026", "Нормативная база"].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-3 py-1 border"
                    style={{ borderColor: "var(--hunt-border)", color: "var(--hunt-muted)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div
            className="border mb-10 overflow-hidden"
            style={{ borderColor: "var(--hunt-border)", background: "white" }}
          >
            <div
              className="px-6 py-4 border-b flex items-center gap-3"
              style={{ borderColor: "var(--hunt-border)", background: "var(--hunt-cream)" }}
            >
              <Icon name="List" size={14} style={{ color: "var(--hunt-gold)" }} />
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--hunt-muted)" }}>
                Содержание
              </span>
            </div>
            <div className="divide-y" style={{ borderColor: "var(--hunt-border)" }}>
              {[
                { num: "I", title: "История развития охотничьих ружей и их эволюция", id: "history", sub: "Фитильные аркебузы · Кремнёвый замок · Унитарный патрон · Российская оружейная школа" },
                { num: "II", title: "Применение в охотничьей практике и методы", id: "methods", sub: "Сравнительная таблица ружей · Загонная охота · Засидка · Ходовая охота · Охота на птицу" },
                { num: "III", title: "Правила безопасности и нормативно-правовая база", id: "safety", sub: "150-ФЗ · 209-ФЗ · Требования к охотнику · Правила безопасного обращения" },
                { num: "IV", title: "Влияние охоты на экологический баланс", id: "ecology", sub: "Позитивное и негативное влияние · Динамика численности видов · Браконьерство" },
                { num: "V", title: "Экономический аспект охотничьей деятельности", id: "economy", sub: "Ключевые показатели · Таблица по регионам · Производство · Туризм · Экипировка" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="w-full text-left flex items-start gap-5 px-6 py-4 transition-colors hover:bg-opacity-50"
                  style={{ background: "transparent" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--hunt-cream)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <span
                    className="font-mono text-xs px-2 py-0.5 shrink-0 mt-0.5"
                    style={{ background: "var(--hunt-dark)", color: "var(--hunt-gold)" }}
                  >
                    {item.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="font-cormorant text-lg font-semibold leading-snug" style={{ color: "var(--hunt-dark)" }}>
                      {item.title}
                    </div>
                    <div className="text-xs mt-0.5 truncate" style={{ color: "var(--hunt-muted)" }}>
                      {item.sub}
                    </div>
                  </div>
                  <Icon name="ChevronRight" size={14} className="mt-1 shrink-0" style={{ color: "var(--hunt-border)" }} />
                </button>
              ))}
            </div>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <div
              className="border p-8 md:p-12 relative overflow-hidden"
              style={{ borderColor: "var(--hunt-border)", background: "white", minHeight: "90vh" }}
            >
              {/* Декоративный номер страницы */}
              <div
                className="absolute bottom-8 right-10 font-cormorant text-8xl font-bold select-none pointer-events-none"
                style={{ color: "var(--hunt-border)", lineHeight: 1 }}
              >
                01
              </div>

              {/* Заголовок введения */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-8" style={{ background: "var(--hunt-gold)" }} />
                  <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--hunt-gold)" }}>
                    Введение
                  </span>
                </div>
                <h2 className="font-cormorant text-3xl md:text-5xl font-bold leading-tight" style={{ color: "var(--hunt-dark)" }}>
                  Охотничье ружьё в контексте<br />
                  <span className="italic font-light" style={{ color: "var(--hunt-green-mid)" }}>
                    культуры и государства
                  </span>
                </h2>
              </div>

              {/* Основной текст: два столбца как в академической статье */}
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-5">
                  <p className="text-sm leading-7" style={{ color: "var(--hunt-text)" }}>
                    Охота — одна из древнейших форм взаимодействия человека с природой, неразрывно связанная с историей
                    расселения, выживания и культурного становления народов России. На протяжении столетий охотничье
                    ружьё служило не только орудием добычи пропитания, но и символом социального статуса, предметом
                    мастерства оружейников и объектом художественного оформления.
                  </p>
                  <p className="text-sm leading-7" style={{ color: "var(--hunt-text)" }}>
                    Сегодня охотничье оружие находится на пересечении нескольких сфер: права и государственного
                    регулирования, экологии и природоохраны, экономики и туризма, традиционной культуры и
                    современных технологий. Понимание этого контекста необходимо как практикующим охотникам,
                    так и специалистам в области охраны природы, законодательства и регионального развития.
                  </p>
                  <p className="text-sm leading-7" style={{ color: "var(--hunt-text)" }}>
                    Настоящий документ подготовлен с целью систематизировать актуальные знания об охотничьих
                    ружьях России: их историческом развитии, технических характеристиках, правовом статусе,
                    экологическом и экономическом значении.
                  </p>
                </div>
                <div className="space-y-5">
                  <p className="text-sm leading-7" style={{ color: "var(--hunt-text)" }}>
                    В работе используются данные Министерства природных ресурсов и экологии РФ, Росгвардии,
                    Росстата, а также открытые материалы профессиональных охотничьих объединений и
                    научных публикаций по охотоведению. Статистика актуализирована по состоянию на I квартал 2026 года.
                  </p>
                  <p className="text-sm leading-7" style={{ color: "var(--hunt-text)" }}>
                    Особое внимание уделено практическому аспекту: сравнительные таблицы типов ружей, требования
                    к охотнику, региональная экономика отрасли — всё это призвано сделать документ полезным
                    инструментом для принятия обоснованных решений как на уровне охотника-практика, так и
                    на уровне управленческих структур.
                  </p>
                </div>
              </div>

              {/* Разделительная линия */}
              <div className="border-t mb-8" style={{ borderColor: "var(--hunt-border)" }} />

              {/* Цели и задачи */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: "var(--hunt-gold)" }}>
                    Цель документа
                  </div>
                  <p className="text-sm leading-6" style={{ color: "var(--hunt-muted)" }}>
                    Сформировать комплексное и структурированное представление об охотничьем оружии России
                    для широкого круга заинтересованных лиц.
                  </p>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: "var(--hunt-gold)" }}>
                    Методология
                  </div>
                  <p className="text-sm leading-6" style={{ color: "var(--hunt-muted)" }}>
                    Анализ нормативных актов, систематизация открытых статистических данных,
                    сравнительный анализ технических характеристик и отраслевых показателей.
                  </p>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: "var(--hunt-gold)" }}>
                    Целевая аудитория
                  </div>
                  <p className="text-sm leading-6" style={{ color: "var(--hunt-muted)" }}>
                    Охотники-практики, специалисты охотхозяйств, юристы, экологи, а также студенты
                    профильных специальностей и все интересующиеся темой.
                  </p>
                </div>
              </div>

              {/* Эпиграф */}
              <div
                className="border-l-4 pl-6 py-1"
                style={{ borderColor: "var(--hunt-green)" }}
              >
                <blockquote className="font-cormorant text-xl italic leading-relaxed" style={{ color: "var(--hunt-dark)" }}>
                  «Охота есть не что иное, как образ войны»
                </blockquote>
                <cite className="block mt-2 font-mono text-xs not-italic" style={{ color: "var(--hunt-muted)" }}>
                  — Ксенофонт, «Киропедия», IV в. до н.э.
                </cite>
              </div>
            </div>
          </section>

          {/* Goals, Tasks & Relevance */}
          <section className="mb-12">
            <div
              className="border p-8 md:p-12"
              style={{ borderColor: "var(--hunt-border)", background: "white" }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8" style={{ background: "var(--hunt-gold)" }} />
                <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--hunt-gold)" }}>
                  Цели, задачи и актуальность
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-10 mb-10">
                {/* Цели */}
                <div>
                  <h3 className="font-cormorant text-2xl font-semibold mb-5" style={{ color: "var(--hunt-dark)" }}>
                    Цели исследования
                  </h3>
                  <div className="space-y-3">
                    {[
                      { n: "1", text: "Систематизировать сведения об охотничьих ружьях России — от исторических истоков до современных образцов." },
                      { n: "2", text: "Проанализировать действующую нормативно-правовую базу в сфере оборота охотничьего оружия." },
                      { n: "3", text: "Оценить экологическое воздействие охоты на популяции диких животных и биоразнообразие." },
                      { n: "4", text: "Определить экономическую роль охотничьей отрасли в разрезе регионов Российской Федерации." },
                    ].map((item) => (
                      <div key={item.n} className="flex items-start gap-4">
                        <span
                          className="font-mono text-xs px-2 py-0.5 shrink-0 mt-0.5"
                          style={{ background: "var(--hunt-dark)", color: "var(--hunt-gold)" }}
                        >
                          {item.n}
                        </span>
                        <p className="text-sm leading-6" style={{ color: "var(--hunt-text)" }}>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Задачи */}
                <div>
                  <h3 className="font-cormorant text-2xl font-semibold mb-5" style={{ color: "var(--hunt-dark)" }}>
                    Задачи исследования
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Изучить историю развития охотничьего оружия в России и мире",
                      "Составить сравнительную характеристику основных типов ружей по ключевым параметрам",
                      "Описать практические методы охоты и требования к оружию для каждого из них",
                      "Проанализировать федеральное законодательство и требования к охотнику",
                      "Выявить связь между охотой и динамикой численности ключевых видов животных",
                      "Представить количественные показатели охотничьей отрасли по регионам страны",
                    ].map((task) => (
                      <div key={task} className="flex items-start gap-3 text-sm py-2 border-b last:border-b-0" style={{ borderColor: "var(--hunt-border)", color: "var(--hunt-muted)" }}>
                        <Icon name="ChevronRight" size={13} className="shrink-0 mt-0.5" style={{ color: "var(--hunt-green)" }} />
                        {task}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Актуальность */}
              <div
                className="border-t pt-8"
                style={{ borderColor: "var(--hunt-border)" }}
              >
                <h3 className="font-cormorant text-2xl font-semibold mb-5" style={{ color: "var(--hunt-dark)" }}>
                  Актуальность
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-sm leading-7" style={{ color: "var(--hunt-text)" }}>
                      В последнее десятилетие охотничья отрасль России переживает период существенной
                      трансформации: ужесточение законодательства, цифровизация системы выдачи разрешений,
                      рост числа охотников среди городского населения и усиление общественного внимания
                      к вопросам экологии формируют новый облик охоты как социального явления.
                    </p>
                    <p className="text-sm leading-7" style={{ color: "var(--hunt-text)" }}>
                      По данным Росгвардии, количество зарегистрированного охотничьего оружия в стране
                      ежегодно растёт на 3–5%, тогда как требования к его хранению, транспортировке и
                      применению становятся всё более детализированными. В этих условиях дефицит
                      систематизированной информации ощущается как среди начинающих охотников,
                      так и среди специалистов смежных отраслей.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm leading-7" style={{ color: "var(--hunt-text)" }}>
                      Отдельную актуальность приобретает экологическое измерение охоты: в условиях
                      изменения климата и перестройки ареалов обитания видов грамотное управление
                      охотничьими угодьями становится инструментом сохранения биоразнообразия,
                      а не угрозой ему. Это требует переосмысления роли охотника как субъекта
                      природопользования.
                    </p>
                    <p className="text-sm leading-7" style={{ color: "var(--hunt-text)" }}>
                      Наконец, экономический потенциал отрасли — более 89 млрд рублей ежегодного оборота —
                      остаётся недооценённым на государственном уровне. Настоящий документ призван
                      восполнить информационный пробел и предоставить актуальную аналитическую базу
                      для всех участников охотничьей деятельности.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section I: History */}
          <section id="history" className="mb-12 scroll-mt-6">
            <SectionHeader num="I" title="История развития охотничьих ружей и их эволюция" />

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { period: "XIV–XVI вв.", title: "Фитильные аркебузы", desc: "Первые охотничьи ружья — модификации военных аркебуз. Калибр 15–20 мм, дальность до 30 м, перезарядка 1–2 мин." },
                { period: "XVII–XVIII вв.", title: "Кремнёвый замок", desc: "Революция в охоте: надёжное воспламенение, парные ружья, появление нарезного ствола. Дальность возросла до 80–120 м." },
                { period: "XIX–XX вв.", title: "Унитарный патрон", desc: "Изобретение Бердана и создание магазинных ружей. Дальность 400–800 м, скорострельность 10–15 выстр./мин." },
              ].map((card) => (
                <div
                  key={card.period}
                  className="border p-5"
                  style={{ borderColor: "var(--hunt-border)", background: "white" }}
                >
                  <div className="font-mono text-xs mb-2" style={{ color: "var(--hunt-gold)" }}>{card.period}</div>
                  <div className="font-cormorant text-xl font-semibold mb-2" style={{ color: "var(--hunt-dark)" }}>{card.title}</div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--hunt-muted)" }}>{card.desc}</p>
                </div>
              ))}
            </div>

            <TextBlock>
              Охотничье ружьё прошло путь от примитивных фитильных аркебуз XIV века до высокоточных современных
              карабинов с оптическими прицелами и регулируемой ложей. Ключевыми вехами стали изобретение кремнёвого
              замка в начале XVII века и появление унитарного патрона в 1850-х годах. Российская оружейная школа
              сформировалась вокруг Тульского оружейного завода, основанного в 1712 году по указу Петра I, и
              впоследствии — Ижевского завода (1807 г.). Отечественные модели МЦ-21, ИЖ-27 и ТОЗ-34 стали
              символами советской и российской охотничьей культуры, экспортировались в десятки стран мира.
            </TextBlock>

            <div className="mt-6 p-5 border-l-4" style={{ borderColor: "var(--hunt-green)", background: "rgba(45,74,34,0.04)" }}>
              <div className="font-mono text-xs uppercase tracking-wider mb-2" style={{ color: "var(--hunt-green)" }}>
                Ключевой факт
              </div>
              <p className="text-sm" style={{ color: "var(--hunt-text)" }}>
                К 2025 году в России зарегистрировано более <strong>6,8 млн единиц охотничьего оружия</strong>,
                из которых 74% составляют гладкоствольные ружья, 22% — нарезное оружие, 4% — прочие виды.
              </p>
            </div>
          </section>

          {/* Section II: Methods */}
          <section id="methods" className="mb-12 scroll-mt-6">
            <SectionHeader num="II" title="Применение в охотничьей практике и методы" />

            <TextBlock>
              Выбор охотничьего ружья определяется видом добычи, рельефом местности и методом охоты.
              В России практикуется несколько основных видов охоты, каждый из которых предъявляет специфические
              требования к оружию. Загонная охота требует короткоствольных, быстрых в обращении ружей;
              засидка у водопоя — высокоточного дальнобойного оружия; ходовая охота — лёгких, манёвренных моделей.
            </TextBlock>

            {/* Rifle Comparison Table */}
            <div className="my-6 overflow-x-auto">
              <div className="mb-3 flex items-center gap-2">
                <Icon name="Table" size={14} style={{ color: "var(--hunt-gold)" }} />
                <span className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--hunt-muted)" }}>
                  Таблица 1. Сравнительная характеристика типов охотничьих ружей
                </span>
              </div>
              <table className="w-full border-collapse text-sm" style={{ minWidth: 700 }}>
                <thead>
                  <tr style={{ background: "var(--hunt-dark)", color: "white" }}>
                    {["Тип оружия", "Калибр", "Дальность", "Назначение", "Масса", "Цена (РФ)", "Сложность"].map((h) => (
                      <th key={h} className="text-left px-4 py-3 font-ibm text-xs tracking-wider uppercase border-r last:border-r-0" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rifleData.map((row, i) => (
                    <tr
                      key={row.type}
                      style={{ background: i % 2 === 0 ? "white" : "var(--hunt-cream)", borderBottom: "1px solid var(--hunt-border)" }}
                    >
                      <td className="px-4 py-3 font-semibold" style={{ color: "var(--hunt-dark)" }}>{row.type}</td>
                      <td className="px-4 py-3 font-mono text-xs" style={{ color: "var(--hunt-text)" }}>{row.caliber}</td>
                      <td className="px-4 py-3" style={{ color: "var(--hunt-text)" }}>{row.range}</td>
                      <td className="px-4 py-3" style={{ color: "var(--hunt-text)" }}>{row.purpose}</td>
                      <td className="px-4 py-3 font-mono text-xs" style={{ color: "var(--hunt-text)" }}>{row.weight}</td>
                      <td className="px-4 py-3 font-mono text-xs" style={{ color: "var(--hunt-text)" }}>{row.price}</td>
                      <td className="px-4 py-3">
                        <ComplexityBadge level={row.complexity} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {[
                {
                  icon: "Target",
                  title: "Загонная охота",
                  items: ["Полуавтоматические ружья 12 калибра", "Скорострельность от 2–3 выстр./сек", "Дальность 30–50 м", "Длина ствола 50–65 см"],
                },
                {
                  icon: "Eye",
                  title: "Охота с засидки",
                  items: ["Нарезные карабины .308 Win", "Оптический прицел 4–16×", "Дальность 200–500 м", "Сошки или упор"],
                },
                {
                  icon: "Footprints",
                  title: "Ходовая охота",
                  items: ["Лёгкие одноствольные ружья", "Масса до 3 кг", "Дальность 40–80 м", "Короткий ствол 60–70 см"],
                },
                {
                  icon: "Wind",
                  title: "Охота на птицу",
                  items: ["Гладкоствольные 12/20 кал.", "Дробовые патроны №3–7", "Дальность 20–45 м", "Вентилированная планка"],
                },
              ].map((method) => (
                <div key={method.title} className="border p-5" style={{ borderColor: "var(--hunt-border)", background: "white" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 flex items-center justify-center" style={{ background: "var(--hunt-green)", borderRadius: 2 }}>
                      <Icon name={method.icon} size={14} style={{ color: "white" }} />
                    </div>
                    <span className="font-cormorant text-lg font-semibold" style={{ color: "var(--hunt-dark)" }}>{method.title}</span>
                  </div>
                  <ul className="space-y-1">
                    {method.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "var(--hunt-muted)" }}>
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "var(--hunt-gold)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section III: Safety */}
          <section id="safety" className="mb-12 scroll-mt-6">
            <SectionHeader num="III" title="Правила безопасности и нормативно-правовая база" />

            <TextBlock>
              Оборот охотничьего оружия в России регулируется Федеральным законом № 150-ФЗ «Об оружии» (1996 г.),
              Федеральным законом № 209-ФЗ «Об охоте» (2009 г.) и подзаконными актами Росгвардии и Минприроды.
              Разрешительная система включает получение охотничьего билета, лицензии на приобретение оружия
              и ежегодную перерегистрацию.
            </TextBlock>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div>
                <div className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: "var(--hunt-muted)" }}>
                  Нормативные документы
                </div>
                <div className="space-y-2">
                  {[
                    { code: "150-ФЗ", title: "Федеральный закон «Об оружии»", year: "1996" },
                    { code: "209-ФЗ", title: "Федеральный закон «Об охоте»", year: "2009" },
                    { code: "ГОСТ Р 51215", title: "Оружие охотничьее. Термины и определения", year: "1998" },
                    { code: "Прик. МВД № 595", title: "Правила оборота гражданского оружия", year: "2012" },
                    { code: "Прик. Минприр. № 512", title: "Правила охоты в РФ", year: "2010" },
                  ].map((doc) => (
                    <div key={doc.code} className="flex items-start gap-3 p-3 border" style={{ borderColor: "var(--hunt-border)", background: "white" }}>
                      <span className="font-mono text-xs px-2 py-0.5 shrink-0" style={{ background: "var(--hunt-dark)", color: "var(--hunt-gold)" }}>
                        {doc.year}
                      </span>
                      <div>
                        <div className="font-mono text-xs" style={{ color: "var(--hunt-green)" }}>{doc.code}</div>
                        <div className="text-sm" style={{ color: "var(--hunt-text)" }}>{doc.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: "var(--hunt-muted)" }}>
                  Требования к охотнику
                </div>
                <div className="space-y-2">
                  {[
                    { icon: "User", text: "Возраст от 18 лет (гладкоствол), от 21 года (нарезное)" },
                    { icon: "FileText", text: "Охотничий билет федерального образца" },
                    { icon: "Shield", text: "Лицензия на приобретение оружия (Росгвардия)" },
                    { icon: "BookOpen", text: "Прохождение курса безопасного обращения с оружием" },
                    { icon: "Heart", text: "Медицинская справка (форма 002-О/у)" },
                    { icon: "Home", text: "Наличие сейфа для хранения (от 8 кг или прикреплён)" },
                    { icon: "RefreshCw", text: "Перерегистрация оружия каждые 5 лет" },
                  ].map((req) => (
                    <div key={req.text} className="flex items-start gap-3 p-3 border" style={{ borderColor: "var(--hunt-border)", background: "white" }}>
                      <Icon name={req.icon} size={14} className="mt-0.5 shrink-0" style={{ color: "var(--hunt-green)" }} />
                      <span className="text-sm" style={{ color: "var(--hunt-text)" }}>{req.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 border" style={{ borderColor: "#e53e3e", background: "rgba(229,62,62,0.04)" }}>
              <div className="flex items-center gap-2 mb-3">
                <Icon name="AlertTriangle" size={16} style={{ color: "#e53e3e" }} />
                <span className="font-mono text-xs uppercase tracking-wider" style={{ color: "#e53e3e" }}>Правила безопасного обращения</span>
              </div>
              <div className="grid md:grid-cols-2 gap-2">
                {[
                  "Всегда обращайтесь с оружием как с заряженным",
                  "Никогда не направляйте ствол на людей",
                  "Держите палец вне спусковой скобы до выстрела",
                  "Убедитесь, что цель и пространство за ней в безопасности",
                  "Транспортировка — только в чехле, в разряженном виде",
                  "Хранение — в закрытом сейфе, отдельно от патронов",
                ].map((rule) => (
                  <div key={rule} className="flex items-start gap-2 text-sm" style={{ color: "var(--hunt-text)" }}>
                    <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ background: "#e53e3e" }} />
                    {rule}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section IV: Ecology */}
          <section id="ecology" className="mb-12 scroll-mt-6">
            <SectionHeader num="IV" title="Влияние охоты на экологический баланс" />

            <TextBlock>
              Охота является древнейшим инструментом регуляции численности диких животных. При грамотном
              управлении и соблюдении лимитов добычи охота способствует поддержанию здоровой популяционной
              структуры и предотвращает перенаселение угодий, ведущее к болезням и деградации местообитаний.
              Вместе с тем бесконтрольная охота исторически приводила к сокращению популяций ряда видов.
            </TextBlock>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              {[
                {
                  color: "var(--hunt-green)",
                  icon: "TrendingUp",
                  title: "Позитивное влияние",
                  items: [
                    "Регуляция численности кабана, лося, косули",
                    "Финансирование охраны природы",
                    "Контроль инвазивных видов",
                    "Сохранение охотничьих угодий",
                    "Мотивация к биотехнии",
                  ],
                },
                {
                  color: "#c9a84c",
                  icon: "Minus",
                  title: "Нейтральное / спорное",
                  items: [
                    "Трофейная охота на редкие виды",
                    "Влияние на миграционные пути",
                    "Использование свинцовых боеприпасов",
                    "Фрагментация местообитаний",
                  ],
                },
                {
                  color: "#e53e3e",
                  icon: "TrendingDown",
                  title: "Негативное (браконьерство)",
                  items: [
                    "Незаконный отстрел краснокнижных видов",
                    "Петлевая охота без разбора",
                    "Ночная охота с фарой",
                    "Превышение лимитов добычи",
                  ],
                },
              ].map((col) => (
                <div key={col.title} className="border p-5" style={{ borderColor: "var(--hunt-border)", background: "white" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name={col.icon} size={16} style={{ color: col.color }} />
                    <span className="font-cormorant text-lg font-semibold" style={{ color: "var(--hunt-dark)" }}>{col.title}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--hunt-muted)" }}>
                        <span className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: col.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="border p-6" style={{ borderColor: "var(--hunt-border)", background: "var(--hunt-cream)" }}>
              <div className="font-mono text-xs uppercase tracking-wider mb-4" style={{ color: "var(--hunt-muted)" }}>
                Динамика численности ключевых видов в России (тыс. голов)
              </div>
              <div className="space-y-4">
                {[
                  { animal: "Лось (Alces alces)", val2015: 730, val2020: 890, val2025: 980 },
                  { animal: "Кабан (Sus scrofa)", val2015: 310, val2020: 480, val2025: 540 },
                  { animal: "Косуля (Capreolus)", val2015: 940, val2020: 1050, val2025: 1120 },
                  { animal: "Бурый медведь", val2015: 200, val2020: 220, val2025: 240 },
                ].map((row) => {
                  const max = Math.max(row.val2015, row.val2020, row.val2025);
                  return (
                    <div key={row.animal}>
                      <div className="flex justify-between text-xs mb-1" style={{ color: "var(--hunt-muted)" }}>
                        <span>{row.animal}</span>
                        <span className="font-mono">{row.val2025} тыс.</span>
                      </div>
                      <div className="relative h-5 border" style={{ borderColor: "var(--hunt-border)", background: "white" }}>
                        <div
                          className="absolute top-0 left-0 h-full"
                          style={{ width: `${(row.val2015 / max) * 100}%`, background: "rgba(45,74,34,0.15)" }}
                        />
                        <div
                          className="absolute top-0 left-0 h-full"
                          style={{ width: `${(row.val2020 / max) * 100}%`, background: "rgba(45,74,34,0.35)" }}
                        />
                        <div
                          className="absolute top-0 left-0 h-full"
                          style={{ width: `${(row.val2025 / max) * 100}%`, background: "rgba(45,74,34,0.65)" }}
                        />
                      </div>
                      <div className="flex gap-6 text-xs mt-1" style={{ color: "var(--hunt-muted)", opacity: 0.7 }}>
                        <span>2015: {row.val2015}</span>
                        <span>2020: {row.val2020}</span>
                        <span>2025: {row.val2025}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Section V: Economy */}
          <section id="economy" className="mb-12 scroll-mt-6">
            <SectionHeader num="V" title="Экономический аспект охотничьей деятельности" />

            <TextBlock>
              Охотничья отрасль является значимым сектором российской экономики, обеспечивающим занятость,
              налоговые поступления и развитие смежных производств. По данным Минприроды РФ за 2025 год,
              совокупный вклад охотничьего хозяйства в ВВП составляет порядка 85–90 млрд рублей с учётом
              оружейного производства, экипировки, услуг охотхозяйств и туризма.
            </TextBlock>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
              {[
                { label: "Охотников в РФ", value: "3,8 млн", icon: "Users", sub: "+4% к 2024" },
                { label: "Объём рынка", value: "89 млрд ₽", icon: "TrendingUp", sub: "2025 год" },
                { label: "Охотхозяйств", value: "5 400+", icon: "MapPin", sub: "лицензированных" },
                { label: "Рабочих мест", value: "63 тыс.", icon: "Briefcase", sub: "прямых и смежных" },
              ].map((stat) => (
                <div key={stat.label} className="border p-5 text-center" style={{ borderColor: "var(--hunt-border)", background: "white" }}>
                  <Icon name={stat.icon} size={20} className="mx-auto mb-2" style={{ color: "var(--hunt-green)" }} />
                  <div className="font-cormorant text-2xl md:text-3xl font-bold" style={{ color: "var(--hunt-dark)" }}>{stat.value}</div>
                  <div className="text-xs mt-1" style={{ color: "var(--hunt-muted)" }}>{stat.label}</div>
                  <div className="font-mono text-xs mt-1" style={{ color: "var(--hunt-gold)" }}>{stat.sub}</div>
                </div>
              ))}
            </div>

            <div className="my-6 overflow-x-auto">
              <div className="mb-3 flex items-center gap-2">
                <Icon name="BarChart3" size={14} style={{ color: "var(--hunt-gold)" }} />
                <span className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--hunt-muted)" }}>
                  Таблица 2. Экономические показатели по регионам РФ (2025)
                </span>
              </div>
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr style={{ background: "var(--hunt-dark)", color: "white" }}>
                    {["Регион", "Выданных лицензий", "Выручка отрасли", "Рабочих мест"].map((h) => (
                      <th key={h} className="text-left px-4 py-3 text-xs tracking-wider uppercase border-r last:border-r-0" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {economicData.map((row, i) => (
                    <tr key={row.region} style={{ background: i % 2 === 0 ? "white" : "var(--hunt-cream)", borderBottom: "1px solid var(--hunt-border)" }}>
                      <td className="px-4 py-3 font-semibold" style={{ color: "var(--hunt-dark)" }}>{row.region}</td>
                      <td className="px-4 py-3 font-mono text-xs" style={{ color: "var(--hunt-text)" }}>{row.licenses}</td>
                      <td className="px-4 py-3 font-mono text-xs font-semibold" style={{ color: "var(--hunt-green-mid)" }}>{row.revenue}</td>
                      <td className="px-4 py-3 font-mono text-xs" style={{ color: "var(--hunt-text)" }}>{row.jobs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Производство оружия", desc: "Ижевск, Тула, Вятские Поляны — 3 крупнейших центра. Объём экспорта гражданского оружия — 12 млрд ₽/год." },
                { title: "Охотничий туризм", desc: "Иностранные охотники обеспечивают до 8% выручки отрасли. Средний чек охотничьего тура — 180–400 тыс. ₽." },
                { title: "Рынок экипировки", desc: "Ежегодный оборот рынка охотничьей одежды, обуви и снаряжения — около 28 млрд ₽ с ростом 6% в год." },
              ].map((card) => (
                <div key={card.title} className="border p-5" style={{ borderColor: "var(--hunt-border)", background: "white" }}>
                  <div className="font-cormorant text-xl font-semibold mb-2" style={{ color: "var(--hunt-dark)" }}>{card.title}</div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--hunt-muted)" }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t mt-8 pt-6 pb-10" style={{ borderColor: "var(--hunt-border)" }}>
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <div className="font-cormorant text-lg font-semibold" style={{ color: "var(--hunt-dark)" }}>
                  Охотничьи ружья России — НИД
                </div>
                <div className="text-xs mt-1" style={{ color: "var(--hunt-muted)" }}>
                  Научно-исследовательский документ · Версия 1.0 · Апрель 2026
                </div>
              </div>
              <div className="text-xs" style={{ color: "var(--hunt-muted)" }}>
                Данные: Минприроды РФ, Росгвардия, Росстат, МВД РФ
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--hunt-border)" }}>
      <div className="flex items-baseline gap-4">
        <span
          className="font-mono text-xs px-2 py-0.5 shrink-0"
          style={{ background: "var(--hunt-dark)", color: "var(--hunt-gold)" }}
        >
          {num}
        </span>
        <h2 className="font-cormorant text-2xl md:text-3xl font-semibold" style={{ color: "var(--hunt-dark)" }}>
          {title}
        </h2>
      </div>
    </div>
  );
}

function TextBlock({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm leading-7 mb-4" style={{ color: "var(--hunt-text)" }}>
      {children}
    </p>
  );
}

function ComplexityBadge({ level }: { level: string }) {
  const colors: Record<string, { bg: string; text: string }> = {
    "Низкая": { bg: "rgba(45,74,34,0.1)", text: "#2d4a22" },
    "Средняя": { bg: "rgba(201,168,76,0.15)", text: "#8a6d00" },
    "Высокая": { bg: "rgba(229,62,62,0.1)", text: "#c53030" },
  };
  const c = colors[level] || colors["Средняя"];
  return (
    <span
      className="px-2 py-0.5 text-xs font-mono"
      style={{ background: c.bg, color: c.text }}
    >
      {level}
    </span>
  );
}