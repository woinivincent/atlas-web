import type { Metadata } from "next";
import {
  BarChart3,
  BookOpen,
  Boxes,
  CloudDownload,
  HardDriveDownload,
  Scale,
  ShoppingBasket,
  Truck,
  UserCheck,
  Wallet,
  WifiOff,
} from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Plate from "@/components/Plate";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vendia — Sistema de ventas, caja y stock para comercios de barrio | Atlas",
  description:
    "Vendia es el sistema de mostrador de Atlas: ventas con lector y por peso, caja con control del cajón, stock con avisos y cuenta corriente. Funciona sin internet y se paga una vez.",
};

const WA_DEMO = waLink(
  "Hola Atlas, quiero ver Vendia funcionando en mi comercio"
);

const counter = [
  {
    icon: ShoppingBasket,
    title: "Vender y cobrar en el mostrador",
    text: "Se busca por nombre o con el lector de códigos, se arma el ticket y se cobra en efectivo, débito, crédito o transferencia. La venta queda registrada sola.",
  },
  {
    icon: Scale,
    title: "Venta por peso y fraccionados",
    text: "Se carga el peso en gramos y el importe sale solo. Si se compra una bolsa de 25 kg y se vende de a 100 g, el stock baja sin cuentas a mano.",
  },
  {
    icon: Wallet,
    title: "Caja con control del cajón",
    text: "Se abre con el fondo, se cierra contando el efectivo y el sistema muestra al momento si sobra o falta, de qué turno y quién estaba.",
  },
  {
    icon: Boxes,
    title: "Stock que avisa",
    text: "Baja con cada venta, sube con cada compra cargada y avisa qué hay que reponer antes de quedarse sin nada para vender.",
  },
  {
    icon: WifiOff,
    title: "Sin depender de internet",
    text: "El sistema y los datos están en la computadora del local. Si se corta la conexión, se sigue vendiendo igual.",
  },
  {
    icon: HardDriveDownload,
    title: "Copias todos los días",
    text: "Al abrir, guarda una copia de seguridad sola. Y con un botón se lleva otra a un pendrive.",
  },
];

const modules = [
  {
    icon: BookOpen,
    name: "Cuenta corriente",
    text: "La libreta de fiado: a quién se le anota, cuánto debe, hasta cuánto se le fía y qué fue pagando.",
  },
  {
    icon: Truck,
    name: "Proveedores",
    text: "Lo que se le compra a cada uno y a qué precio, y la actualización de precios de un proveedor o un rubro de una vez.",
  },
  {
    icon: BarChart3,
    name: "Informes",
    text: "Ventas del mes, el día más fuerte, lo que más se vende y cómo viene el año. Todo se pasa a Excel para el contador.",
  },
  {
    icon: UserCheck,
    name: "Usuarios",
    text: "Cada empleada entra con su PIN y ve solo lo suyo. Queda registrado quién hizo cada venta y quién tocó un precio.",
  },
];

const steps = [
  {
    n: "01",
    title: "Vamos al local",
    text: "Vemos cómo trabajan hoy, qué productos manejan y cómo cobran.",
  },
  {
    n: "02",
    title: "Cargamos el catálogo",
    text: "Fotografiamos los productos y los dejamos cargados con su precio y su forma de venta.",
  },
  {
    n: "03",
    title: "Instalamos y enseñamos",
    text: "Lo dejamos andando en la PC del mostrador y capacitamos a quienes lo van a usar.",
  },
  {
    n: "04",
    title: "Acompañamos",
    text: "Treinta días de consultas por WhatsApp y corrección de errores sin cargo durante tres meses.",
  },
];

const faq = [
  {
    q: "¿Hay que pagar todos los meses?",
    a: "No. El sistema se paga una vez y queda instalado en el local por tiempo indefinido. El soporte mensual es opcional: consultas, cambios menores y control de las copias.",
  },
  {
    q: "¿Qué pasa si después necesito algo más?",
    a: "Los módulos se activan con un código, sin reinstalar ni perder datos. Y cuando sale una versión nueva, el sistema avisa y se actualiza solo en un minuto, a distancia.",
  },
  {
    q: "¿Funciona con lector de códigos y balanza?",
    a: "El lector de códigos funciona desde el primer día. Con la balanza, hoy el peso se tipea en la pantalla de venta por peso y el importe sale solo.",
  },
  {
    q: "¿Qué computadora hace falta?",
    a: "Una PC con Windows 10 u 11. No necesita internet para vender; solo para recibir actualizaciones.",
  },
  {
    q: "¿De quién son los datos?",
    a: "Del comercio. Quedan en su computadora y, si algún día deja de usar el sistema, se le entrega toda la información exportada.",
  },
];

/** Ticket del mostrador, dibujado como el de la pantalla de venta. */
function TicketSketch() {
  const lines = [
    ["Almendras", "340 g a $ 14.800 el kilo", "5.032"],
    ["Miel pura 500 g", "2 unidades", "12.400"],
    ["Lentejas", "750 g a $ 4.300 el kilo", "3.225"],
  ];
  return (
    <div className="w-full max-w-[360px] justify-self-center">
      <div className="mb-3 flex items-center justify-between gap-3 rounded-lg border border-line bg-panel px-4 py-3">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-mute">
            Balanza
          </div>
          <div className="text-sm">Almendras, $ 14.800 el kilo</div>
        </div>
        <div className="shrink-0 whitespace-nowrap rounded bg-[#E2EAD6] px-3 py-1.5 font-mono text-base text-[#243328]">
          340 g <span className="mx-1 opacity-40">|</span> $ 5.032
        </div>
      </div>
      <div className="rounded-md bg-[#FBFAF7] p-5 text-[#1C2621] shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
        <div className="text-center font-display text-lg font-bold">Tu comercio</div>
        <div className="text-center font-mono text-[11px] text-[#66706A]">Ticket 0142</div>
        <div className="my-3 border-t border-dashed border-[#9AA19C]" />
        {lines.map(([name, detail, amount]) => (
          <div key={name} className="py-1.5">
            <div className="text-sm font-semibold">{name}</div>
            <div className="flex justify-between text-xs text-[#66706A]">
              <span>{detail}</span>
              <span className="font-mono text-[13px] text-[#1C2621]">$ {amount}</span>
            </div>
          </div>
        ))}
        <div className="my-3 border-t border-dashed border-[#9AA19C]" />
        <div className="flex items-baseline justify-between">
          <span className="font-display text-lg font-semibold">Total</span>
          <span className="font-display text-2xl font-extrabold">$ 20.657</span>
        </div>
      </div>
      <div className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-mute">
        así se ve el ticket en la pantalla de venta
      </div>
    </div>
  );
}

export default function VendiaPage() {
  return (
    <>
      <Nav />
      <main>
        <section id="inicio" className="blueprint border-t border-line">
          <div className="mx-auto max-w-[1120px] px-6 py-[88px]">
            <div className="grid items-center gap-14 md:grid-cols-[1.2fr_1fr]">
              <div>
                <div className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-blue">
                  Vendia — sistema de mostrador
                </div>
                <h1 className="font-display text-[clamp(34px,5vw,52px)] font-extrabold leading-[1.08]">
                  Ventas, caja y stock para el comercio de barrio
                </h1>
                <p className="mt-5 max-w-[600px] text-[19px] leading-relaxed text-mute">
                  Reemplaza el cuaderno, la calculadora y la memoria por una
                  sola pantalla que registra cada venta, descuenta el stock y
                  deja todo anotado. Se instala en el local, funciona sin
                  internet y se paga una vez.
                </p>
                <div className="mt-8 flex flex-wrap gap-3.5">
                  <a
                    href={WA_DEMO}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-blue px-[26px] py-3.5 font-display font-semibold text-dark transition hover:bg-blue-hover"
                  >
                    Pedir una demostración
                  </a>
                  <a
                    href="#modulos"
                    className="rounded-lg border border-line px-[26px] py-3.5 font-display font-semibold text-ink transition hover:border-blue"
                  >
                    Ver módulos
                  </a>
                </div>
                <div className="mt-11 flex flex-wrap gap-x-7 gap-y-2.5 border-t border-dashed border-line pt-6">
                  {["Pago único, sin abono", "Funciona sin internet", "Se actualiza a distancia"].map(
                    (t) => (
                      <span key={t} className="flex items-center gap-2 text-sm text-mute">
                        <span className="font-bold text-ok">✓</span> {t}
                      </span>
                    )
                  )}
                </div>
              </div>
              <TicketSketch />
            </div>
          </div>
        </section>

        <section className="blueprint border-t border-line bg-bgalt">
          <div className="mx-auto max-w-[1120px] px-6 py-[88px]">
            <Plate
              code="Lámina 01 — En el mostrador"
              title="Lo que hace todos los días"
              lead="La base del sistema. Viene en todas las instalaciones."
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {counter.map((f) => (
                <div key={f.title} className="rounded-[10px] border border-line bg-panel p-7">
                  <f.icon size={22} className="text-blue" />
                  <h3 className="mt-4 font-display text-[18px] font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="modulos" className="blueprint border-t border-line">
          <div className="mx-auto max-w-[1120px] px-6 py-[88px]">
            <Plate
              code="Lámina 02 — Módulos"
              title="Se suma lo que el negocio necesita"
              lead="Cada módulo se activa con un código, en el momento y sin reinstalar. Si más adelante hace falta otro, se agrega a distancia."
            />
            <div className="grid gap-px overflow-hidden rounded-[10px] border border-line bg-line md:grid-cols-2">
              {modules.map((m) => (
                <div key={m.name} className="flex gap-4 bg-panel p-7">
                  <m.icon size={22} className="mt-0.5 shrink-0 text-blue" />
                  <div>
                    <h3 className="font-display text-[18px] font-semibold">{m.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-mute">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-start gap-4 rounded-[10px] border border-dashed border-line p-6">
              <CloudDownload size={22} className="mt-0.5 shrink-0 text-blue" />
              <p className="text-sm leading-relaxed text-mute">
                <span className="font-semibold text-ink">Actualizaciones a distancia.</span>{" "}
                Cuando hay una versión nueva, el sistema avisa a la dueña y se
                instala en un minuto, sin tocar las ventas ni los datos. No hace
                falta que vayamos al local.
              </p>
            </div>
          </div>
        </section>

        <section className="blueprint border-t border-line bg-bgalt">
          <div className="mx-auto max-w-[1120px] px-6 py-[88px]">
            <Plate
              code="Lámina 03 — Puesta en marcha"
              title="Lo dejamos andando en el local"
              lead="De la primera visita a vender con el sistema, alrededor de cinco semanas."
            />
            <div className="grid gap-5 md:grid-cols-4">
              {steps.map((s) => (
                <div key={s.n} className="border-t-2 border-blue pt-5">
                  <div className="font-mono text-xs text-blue">{s.n}</div>
                  <h3 className="mt-2 font-display text-[17px] font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="blueprint border-t border-line">
          <div className="mx-auto max-w-[1120px] px-6 py-[88px]">
            <Plate code="Lámina 04 — Preguntas" title="Lo que suelen preguntar" />
            <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
              {faq.map((f) => (
                <div key={f.q}>
                  <h3 className="font-display text-[17px] font-semibold">{f.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-deep">
          <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-6 px-6 py-14">
            <div>
              <h2 className="font-display text-[clamp(24px,3.5vw,32px)] font-bold">
                ¿Lo querés ver funcionando?
              </h2>
              <p className="mt-2 text-mute">
                Te lo mostramos en tu local, sin cargo ni compromiso.
              </p>
            </div>
            <a
              href={WA_DEMO}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-blue px-[26px] py-3.5 font-display font-semibold text-dark transition hover:bg-blue-hover"
            >
              Coordinar una demostración
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
