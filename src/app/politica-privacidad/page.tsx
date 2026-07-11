import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/data";

/*
 * BORRADOR. El texto sigue la Ley 1581 de 2012 (Habeas Data, Colombia) pero debe
 * revisarlo un abogado antes de publicarlo. Hasta entonces la pagina va con
 * noindex: se puede visitar desde el footer, pero no entra al indice de Google.
 * Al aprobarlo, elimina el bloque `robots` de abajo.
 */
export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Cómo 24/7 Impresión Digital recolecta, usa y protege los datos personales de sus clientes.",
  robots: { index: false, follow: true },
};

export default function PoliticaPrivacidad() {
  return (
    <LegalPage title="Política de Privacidad" updatedAt="9 de julio de 2026">
      <section>
        <h2>1. Responsable del tratamiento</h2>
        <p>
          {site.name} es responsable del tratamiento de los datos personales que
          recolecta a través de este sitio web, del formulario de cotización y de los
          canales de contacto que aquí se publican.
        </p>
      </section>

      <section>
        <h2>2. Datos que recolectamos</h2>
        <p>
          Solo pedimos lo necesario para atender una solicitud de cotización:
        </p>
        <ul>
          <li>Nombre.</li>
          <li>Número de teléfono o WhatsApp.</li>
          <li>Servicio de interés y descripción del proyecto.</li>
          <li>Correo electrónico, si decides escribirnos por esa vía.</li>
        </ul>
        <p>
          Este sitio no instala cookies de publicidad ni de seguimiento de terceros.
        </p>
      </section>

      <section>
        <h2>3. Finalidad</h2>
        <p>
          Usamos tus datos únicamente para responder tu solicitud, elaborar la
          cotización, ejecutar el proyecto contratado y darle seguimiento posventa. No
          vendemos, alquilamos ni cedemos tu información a terceros con fines
          comerciales.
        </p>
      </section>

      <section>
        <h2>4. Formulario de cotización</h2>
        <p>
          El formulario de este sitio no almacena información en nuestros servidores:
          compone un mensaje con los datos que escribes y lo abre en WhatsApp para que
          tú decidas si lo envías. El tratamiento posterior de esa conversación se rige
          además por las políticas de WhatsApp.
        </p>
      </section>

      <section>
        <h2>5. Conservación</h2>
        <p>
          Conservamos los datos durante el tiempo necesario para cumplir la finalidad
          descrita y las obligaciones legales y contables aplicables. Después se
          eliminan de forma segura.
        </p>
      </section>

      <section>
        <h2>6. Tus derechos</h2>
        <p>
          Como titular de los datos puedes conocer, actualizar, rectificar y suprimir tu
          información, así como revocar la autorización otorgada. Para ejercer
          cualquiera de estos derechos escríbenos a {site.email}. Atenderemos tu
          solicitud dentro de los plazos previstos por la ley.
        </p>
      </section>

      <section>
        <h2>7. Seguridad</h2>
        <p>
          Adoptamos medidas razonables para proteger la información contra pérdida,
          acceso no autorizado o uso indebido. Ningún medio de transmisión por internet
          es completamente infalible, por lo que no podemos garantizar seguridad
          absoluta.
        </p>
      </section>

      <section>
        <h2>8. Cambios</h2>
        <p>
          Podemos actualizar esta política. Cualquier cambio se publicará en esta misma
          página, con su fecha de actualización.
        </p>
      </section>
    </LegalPage>
  );
}
