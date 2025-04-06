export const Price = () => {
  return (
    <div className="px-8 pt-8 overflow-scroll">
      <div className="flex gap-2 w-fit">
        <div className="w-40 h-50 flex text-center flex-col gap-4 items-center justify-center p-4 bg-white shadow-sm">
          перетяжка мебели
          <img src="furniture.svg" alt="furniture" />
          <span className="font-bold">от 950 Р</span>
        </div>
        <div className="w-40 h-50 flex text-center flex-col gap-4 items-center justify-center p-4 bg-white shadow-sm">
          перетяжка дивана
          <img src="sofa.svg" alt="sofa" />
          <span className="font-bold">от 7 000 ₽</span>
        </div>
        <div className="w-40 h-50 flex text-center flex-col gap-4 items-center justify-center p-4 bg-white shadow-sm">
          перетяжка кресла
          <img src="armchair.svg" alt="armchair" />
          <span className="font-bold">от 3 000 ₽</span>
        </div>
        <div className="w-40 h-50 flex text-center flex-col gap-4 items-center justify-center p-4 bg-white shadow-sm">
          перетяжка кровати
          <img src="bed.svg" alt="bed" />
          <span className="font-bold">от 5 000 ₽</span>
        </div>
        <div className="w-40 h-50 flex text-center flex-col gap-4 items-center justify-center p-4 bg-white shadow-sm">
          перетяжка <br />
          стула
          <img src="chair.svg" alt="chair" />
          <span className="font-bold">от 1 000 ₽</span>
        </div>
      </div>
    </div>
  );
};
