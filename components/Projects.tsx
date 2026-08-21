import Plate from "./Plate";
import ProjectCard, { type ProjectCase } from "./ProjectCard";

// Para sumar capturas: dejá los archivos en public/proyectos/ y agregá las
// rutas al array `shots`. El carrusel aparece solo cuando hay más de una.
const cases: ProjectCase[] = [
  {
    type: "Portal de socios · ONG",
    name: "Campo Escuela Flandes",
    text: "El padrón de socios pasó de planillas manuales a un portal con área privada, registro y login propios, y reservas autogestionadas. Suma panel de administración con dos roles, mapa aéreo del campamento, fichas de flora por QR y biblioteca digital. Los miembros acceden a su información sin llamados ni correos.",
    url: "https://flandes.netlify.app/",
    shots: ["/proyectos/flandes-1.webp"],
  },
  {
    type: "Sitio institucional · Industria",
    name: "Nasello Cables",
    text: "Sitio rápido y estable en su propio hosting, con recepción de consultas y listas de precios exportables a Excel. La empresa dejó de depender de terceros para actualizar su presencia online.",
    url: "https://nasellocables.com/",
    shots: [
      "/proyectos/nasello-1.webp",
      "/proyectos/nasello-2.webp",
      "/proyectos/nasello-3.webp",
    ],
  },
  {
    type: "Aplicación móvil · Materiales y riego",
    name: "PedidoGo",
    text: "Los pedidos de materiales de riego y construcción se tomaban de forma informal, sin catálogo claro ni historial, y eso generaba errores y reprocesos. Hoy el cliente pide desde el celular, con catálogo, carrito e historial — y los datos quedan en el equipo, así la app se usa aunque no haya señal.",
    shots: ["/proyectos/pedidogo-1.webp"],
  },
  {
    type: "Punto de venta · Comercio",
    name: "Nueva Siembra",
    text: "Sistema de escritorio de ventas y stock que funciona aunque se corte internet, con cierres de caja y reportes en Excel y PDF. El control del negocio dejó de depender de anotaciones a mano.",
    shots: [
      "/proyectos/siembra-1.webp",
      "/proyectos/siembra-2.webp",
      "/proyectos/siembra-3.webp",
    ],
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="blueprint border-t border-line">
      <div className="mx-auto max-w-[1120px] px-6 py-[88px]">
        <Plate
          code="Lámina 04 — Obra ejecutada"
          title="Proyectos reales, funcionando hoy"
          lead="No son maquetas de portfolio: son sistemas en producción que clientes usan todos los días."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {cases.map((c) => (
            <ProjectCard key={c.name} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
