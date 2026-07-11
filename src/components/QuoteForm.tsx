"use client";

import { useState, type FormEvent } from "react";
import { IconArrowRight, IconCheck, IconWhatsapp } from "./Icons";
import { services, site } from "@/lib/data";

const serviceOptions = services.map((s) => s.title);

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();

    const text = [
      `Hola ${site.name}, quiero solicitar una cotización.`,
      name && `• Nombre: ${name}`,
      phone && `• Teléfono: ${phone}`,
      service && `• Servicio: ${service}`,
      message && `• Detalle: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const fieldClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 transition-colors focus:border-brand-400 focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-0";
  const labelClass = "mb-1.5 block text-sm font-medium text-navy-900";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card sm:p-8"
      aria-label="Formulario de cotización"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Tu nombre"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Teléfono / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="300 000 0000"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="service" className={labelClass}>
          Servicio de interés
        </label>
        <select id="service" name="service" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Selecciona un servicio
          </option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
          <option value="Otro">Otro / A la medida</option>
        </select>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className={labelClass}>
          Cuéntanos tu proyecto
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Medidas, cantidad, fecha estimada, ubicación…"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-7 py-3.5 text-base font-medium text-white shadow-[0_10px_30px_-8px_rgba(21,101,192,0.55)] transition-all duration-200 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
      >
        {sent ? (
          <>
            <IconCheck className="h-5 w-5" />
            Abriendo WhatsApp…
          </>
        ) : (
          <>
            <IconWhatsapp className="h-5 w-5" />
            Enviar y cotizar por WhatsApp
            <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </>
        )}
      </button>

      <p className="mt-3 text-center text-xs text-slate-500">
        Respondemos rápido en horario laboral. Sin compromiso.
      </p>
    </form>
  );
}
