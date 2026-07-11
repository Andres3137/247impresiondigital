import type { StaticImageData } from "next/image";

import cliente01 from "../../public/clientes/cliente-01.png";
import cliente02 from "../../public/clientes/cliente-02.png";
import cliente03 from "../../public/clientes/cliente-03.png";
import cliente04 from "../../public/clientes/cliente-04.png";
import cliente05 from "../../public/clientes/cliente-05.png";
import cliente06 from "../../public/clientes/cliente-06.png";
import cliente07 from "../../public/clientes/cliente-07.png";
import cliente08 from "../../public/clientes/cliente-08.png";

/**
 * Logotipos de la banda de confianza.
 *
 * ATENCION: los archivos actuales son marcas neutras de relleno, no empresas
 * reales. Para publicar, sobrescribe cada PNG en public/clientes/ con el logo
 * real —monocromo blanco sobre fondo transparente, alto util ~110px— y cambia
 * `name` por el nombre de la empresa (alimenta el texto alternativo).
 *
 * La banda necesita al menos 6 logos para que el bucle se lea continuo.
 */
export interface Client {
  name: string;
  logo: StaticImageData;
}

export const clients: Client[] = [
  { name: "Cliente 1", logo: cliente01 },
  { name: "Cliente 2", logo: cliente02 },
  { name: "Cliente 3", logo: cliente03 },
  { name: "Cliente 4", logo: cliente04 },
  { name: "Cliente 5", logo: cliente05 },
  { name: "Cliente 6", logo: cliente06 },
  { name: "Cliente 7", logo: cliente07 },
  { name: "Cliente 8", logo: cliente08 },
];
