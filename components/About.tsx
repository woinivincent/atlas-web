const team = [
  {
    name: "Vicente Woinilowicz",
    role: "Desarrollo full-stack",
    text: "Del frontend al modelo de datos, del deploy al hand-off. Web, software de escritorio y aplicaciones móviles.",
    photo: null,
  },
  {
    name: "Minerva Santini",
    role: "Diseño UX/UI",
    text: "Define cómo se ve y cómo se usa cada pantalla, para que el sistema se entienda sin manual ni capacitación eterna.",
    photo: null,
  },
];

export default function About() {
  return (
    <section className="blueprint border-t border-line bg-bgalt">
      <div className="mx-auto max-w-[1120px] px-6 py-[88px]">
        <div className="mb-12 max-w-[680px]">
          <div className="mb-3.5 font-mono text-xs uppercase tracking-[0.18em] text-blue">
            Lámina 05 — El equipo
          </div>
          <h2 className="font-display text-[clamp(26px,4vw,38px)] font-bold leading-[1.15]">
            Quiénes estamos detrás de Atlas
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mute">
            Somos dos: desarrollo y diseño, trabajando sobre el mismo proyecto
            desde el primer día. El diseño no es una capa que se agrega al final
            — por eso lo que recibís no solo funciona, se entiende y se usa.
          </p>
          <p className="mt-4 text-base leading-relaxed text-mute">
            Tenés un referente asignado de la primera reunión a la entrega: no
            vas a repetir tu problema en cada llamada ni el proyecto va a pasar
            de mano en mano. Y la seguridad no es un extra: autenticación
            robusta, prevención de las vulnerabilidades habituales y buen manejo
            de datos son parte del diseño desde el primer commit.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {team.map((m) => (
            <article
              key={m.role}
              className="flex flex-col gap-4 rounded-[10px] border border-line bg-panel p-7 sm:flex-row sm:items-start"
            >
              <div
                role="img"
                aria-label={`Espacio reservado para foto de ${m.role}`}
                className="flex aspect-[4/5] w-full max-w-[120px] shrink-0 items-center justify-center rounded-lg border border-dashed border-line font-mono text-[10px] tracking-[0.08em] text-mute"
              >
                [ FOTO ]
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-blue">
                  {m.role}
                </div>
                <h3 className="mt-2 font-display text-[19px] font-semibold">
                  {m.name}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-mute">
                  {m.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
