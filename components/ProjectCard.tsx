"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

export type ProjectCase = {
  type: string;
  name: string;
  text: string;
  /** Sitio en vivo, si el proyecto tiene uno. */
  url?: string;
  /** Rutas dentro de /public. Si está vacío, se muestra el placeholder. */
  shots: string[];
};

const INTERVALO = 4000;

export default function ProjectCard({ c }: { c: ProjectCase }) {
  const [i, setI] = useState(0);
  const [pausado, setPausado] = useState(false);
  const total = c.shots.length;

  const siguiente = useCallback(() => setI((n) => (n + 1) % total), [total]);
  const anterior = useCallback(() => setI((n) => (n - 1 + total) % total), [total]);

  useEffect(() => {
    if (total < 2 || pausado) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(siguiente, INTERVALO);
    return () => clearInterval(t);
  }, [total, pausado, siguiente]);

  return (
    <article className="group overflow-hidden rounded-[10px] border border-l-[3px] border-line border-l-blue bg-panel transition hover:border-blue">
      <div
        className="relative aspect-[16/10] overflow-hidden border-b border-line bg-deep"
        onMouseEnter={() => setPausado(true)}
        onMouseLeave={() => setPausado(false)}
        onFocus={() => setPausado(true)}
        onBlur={() => setPausado(false)}
      >
        {total > 0 ? (
          c.shots.map((src, n) => (
            <Image
              key={src}
              src={src}
              alt={`${c.name} — captura ${n + 1} de ${total}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-opacity duration-700"
              style={{ opacity: n === i ? 1 : 0 }}
              priority={false}
            />
          ))
        ) : (
          <div className="flex h-full items-center justify-center font-mono text-[11px] uppercase tracking-[0.14em] text-mute">
            captura pendiente
          </div>
        )}

        {/* Capa clickeable: al sitio si existe, si no avanza el carrusel */}
        {c.url ? (
          <a
            href={c.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visitar ${c.name} (se abre en una pestaña nueva)`}
            className="absolute inset-0 z-10"
          />
        ) : total > 1 ? (
          <button
            type="button"
            onClick={siguiente}
            aria-label={`Ver la siguiente captura de ${c.name}`}
            className="absolute inset-0 z-10"
          />
        ) : null}

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={anterior}
              aria-label="Captura anterior"
              className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-line bg-dark/70 p-1.5 text-ink opacity-0 transition-opacity hover:bg-dark focus-visible:opacity-100 group-hover:opacity-100"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={siguiente}
              aria-label="Captura siguiente"
              className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-line bg-dark/70 p-1.5 text-ink opacity-0 transition-opacity hover:bg-dark focus-visible:opacity-100 group-hover:opacity-100"
            >
              <ChevronRight size={16} />
            </button>
            <div className="absolute bottom-2.5 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
              {c.shots.map((src, n) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setI(n)}
                  aria-label={`Ver captura ${n + 1}`}
                  aria-current={n === i}
                  className={`h-1.5 rounded-full transition-all ${
                    n === i ? "w-4 bg-blue" : "w-1.5 bg-mute/60 hover:bg-mute"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-7">
        <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-blue">
          {c.type}
        </div>
        <h3 className="mt-3 font-display text-[19px] font-semibold">{c.name}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-mute">{c.text}</p>
        {c.url && (
          <a
            href={c.url}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-blue hover:underline"
          >
            Ver el sitio en vivo <ExternalLink size={14} />
          </a>
        )}
      </div>
    </article>
  );
}
