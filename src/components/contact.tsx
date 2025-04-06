import { useState } from "react";
import { IconTelegram } from "../assets/IconTelegram";
import { IconWhatsApp } from "../assets/IconWhatsApp";

export const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="px-4 py-16">
      <div
        className="px-10 py-6 border-[1px] rounded-3xl border-border flex flex-col items-center"
        style={{ background: "linear-gradient(to top, #d2e9f6, #FFFFFF)" }}
      >
        <h1 className="text-3xl font-bold mt-6">
          Свяжитесь с нами для консультации.
        </h1>
        <div className="mt-10">
          <em className="text-blue font-serif">
            Я была приятно удивлена качеством работы и вниманием к деталям.
            Рекомендую всем, кто хочет обновить свою мебель. - Екатерина
            Марченко
          </em>
        </div>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="mt-8 px-4 py-2 text-white rounded-md bg-background"
          >
            Напишите нам{" "}
          </button>
          {isOpen && (
            <div className="absolute bottom-14 w-48 flex gap-2">
              <a
                href="https://t.me/Marusia1024"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconTelegram />
              </a>
              <a
                href="https://wa.me/79772747353"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsApp />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
