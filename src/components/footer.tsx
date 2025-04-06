import { IconAvito } from "../assets/IconAvito";
import { IconTG } from "../assets/IconTG";
import { IconWhatsAppBlack } from "../assets/IconWhatsAppBlack";

export const Footer = () => {
  return (
    <div className="px-8 py-8 flex gap-8 justify-center text-border">
      <a
        href="https://t.me/Marusia1024"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconTG />
      </a>
      <a
        href="https://wa.me/79772747353"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconWhatsAppBlack />
      </a>
      <a
        href="https://www.avito.ru/moskva/predlozheniya_uslug/peretyazhka_myagkoy_mebeli_7274476475?utm_campaign=native&utm_medium=item_page_ios&utm_source=soc_sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconAvito />
      </a>
    </div>
  );
};
