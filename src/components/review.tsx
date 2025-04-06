export const Review = () => {
  return (
    <div
      className="px-8 py-16"
      style={{ background: "linear-gradient(to bottom, #075985, #66A1C1)" }}
    >
      <div className="text-white flex flex-col items-center gap-8 text-center ">
        <p className=" text-[20px] font-semibold font-serif">
          "Благодаря услугам Перетяни-ка <br /> моя старая мебель преобрела
          новую жизнь и теперь выглядит потрясающе! <br /> Я сэкономил на
          покупке новой мебели 🥰"
        </p>
        <div
          className="w-20 h-20"
          style={{
            backgroundImage: "url(slava.jpeg)",
            backgroundSize: "cover",
            border: "2px solid",
            borderRadius: "50%",
          }}
        />
        <p className="text-lg font-semibold font-serif">Вячеслав Савельев</p>
      </div>
    </div>
  );
};
