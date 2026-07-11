import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/data";

/*
 * BORRADOR. Condiciones comerciales de referencia: los plazos, anticipos y
 * garantias deben ajustarse a la operacion real de la empresa y revisarse con un
 * abogado. Hasta entonces la pagina va con noindex. Al aprobarla, elimina el
 * bloque `robots` de abajo.
 */
export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Condiciones que rigen la contratación de servicios de impresión, fabricación e instalación con 24/7 Impresión Digital.",
  robots: { index: false, follow: true },
};

export default function Terminos() {
  return (
    <LegalPage title="Términos y Condiciones" updatedAt="9 de julio de 2026">
      <section>
        <h2>1. Alcance</h2>
        <p>
          Estas condiciones rigen la contratación de servicios de diseño, impresión,
          fabricación e instalación prestados por {site.name}. Al aprobar una cotización
          el cliente acepta lo aquí descrito.
        </p>
      </section>

      <section>
        <h2>2. Cotizaciones</h2>
        <p>
          Toda cotización se emite por escrito, detalla materiales y medidas, y tiene una
          vigencia limitada indicada en el documento. Los precios pueden variar si
          cambian las especificaciones, las medidas o el sitio de instalación.
        </p>
      </section>

      <section>
        <h2>3. Archivos y aprobación de arte</h2>
        <p>
          El cliente es responsable del contenido que entrega y declara contar con los
          derechos de uso sobre logotipos, imágenes y textos. Revisamos técnicamente cada
          archivo, pero no producimos hasta recibir la aprobación escrita del arte final.
          Los errores presentes en un arte aprobado por el cliente no dan lugar a
          reposición sin costo.
        </p>
      </section>

      <section>
        <h2>4. Tiempos de entrega</h2>
        <p>
          El plazo se cuenta en días hábiles desde la aprobación del arte y del anticipo,
          lo que ocurra al final. Las causas ajenas a nuestro control —permisos, acceso
          al sitio, condiciones climáticas en instalaciones exteriores— pueden extender
          el plazo, y se comunican al cliente tan pronto se conocen.
        </p>
      </section>

      <section>
        <h2>5. Pagos</h2>
        <p>
          Salvo acuerdo distinto por escrito, la producción inicia con un anticipo y el
          saldo se cancela contra entrega o antes de la instalación. La propiedad de las
          piezas se transfiere al cliente una vez cancelado el valor total.
        </p>
      </section>

      <section>
        <h2>6. Instalación</h2>
        <p>
          El cliente debe garantizar el acceso al sitio, las condiciones de seguridad y
          los permisos exigidos por la copropiedad o la autoridad competente. Las
          conexiones eléctricas de avisos luminosos deben estar disponibles en el punto
          acordado. Los desplazamientos fallidos por causas ajenas a nosotros pueden
          generar un costo adicional.
        </p>
      </section>

      <section>
        <h2>7. Garantía</h2>
        <p>
          Respondemos por defectos de fabricación y de instalación imputables a nuestro
          trabajo. La garantía no cubre el desgaste natural de los materiales, los daños
          por terceros, la manipulación indebida, los fenómenos naturales ni las
          alteraciones hechas por personal ajeno a la empresa.
        </p>
      </section>

      <section>
        <h2>8. Propiedad intelectual</h2>
        <p>
          Las propuestas de diseño elaboradas por nosotros y no contratadas siguen siendo
          de nuestra propiedad. Una vez cancelado el proyecto, el cliente recibe el uso
          del arte para los fines acordados.
        </p>
      </section>

      <section>
        <h2>9. Contacto</h2>
        <p>
          Para cualquier aclaración sobre estas condiciones, escríbenos a {site.email} o
          al {site.phoneDisplay}.
        </p>
      </section>
    </LegalPage>
  );
}
