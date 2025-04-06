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
    </div>
  );
};
