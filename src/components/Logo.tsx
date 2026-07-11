import Image from "next/image";
import logoMark from "../../public/logo-mark.png";

/**
 * Marca aislada, sin caja ni fondo: el logotipo original venia sobre una
 * plancha cian, aqui se usa la version troquelada en blanco puro para que
 * se integre con el vidrio translucido del navbar y el footer.
 */
export function Logo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={logoMark}
      alt="24/7 Impresión Digital"
      priority={priority}
      // `block` elimina el hueco del descendente que deja una imagen inline y
      // que desalinea verticalmente al logo frente al menu y al boton.
      className={`block w-auto ${className}`}
      sizes="(max-width: 640px) 88px, 104px"
    />
  );
}
