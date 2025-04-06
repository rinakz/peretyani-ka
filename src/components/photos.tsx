import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const Photos = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="px-8 py-16 flex flex-col">
      <div className="flex justify-end w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
          />
        </svg>
      </div>

      <div ref={emblaRef} style={{ overflow: "hidden", borderRadius: "20px" }}>
        <div className="flex">
          {[
            {
              before: "1.jpeg",
              after: "2.jpeg",
            },
            { before: "3.jpeg", after: "4.jpeg" },
            { before: "5.jpeg", after: "6.jpeg" },
            { before: "7.jpeg", after: "8.jpeg" },
          ].map((el, index) => {
            return (
              <div key={index} style={{ minWidth: "100%" }} className="flex">
                <img style={{ width: "50%" }} src={el.before} alt="before" />
                <img style={{ width: "50%" }} src={el.after} alt="after" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-8 flex justify-between items-center">
        <span className="font-serif text-blue">
          Еще больше фото в нашем Телеграм-канале{" "}
        </span>{" "}
        <a href="https://t.me/mapina95" target="_blank" rel="noreferrer">
          <button className="px-4 py-2 text-white rounded-md bg-background">
            Перейти
          </button>
        </a>
      </div>
    </div>
  );
};
