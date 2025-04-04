import { Header } from "./components/header";
import { Main } from "./components/main";
import { Photos } from "./components/photos";
import { Price } from "./components/price";
import { Review } from "./components/review";

function App() {
  return (
    <main>
      <div
        style={{ background: "linear-gradient(to bottom, #b5dbf0, #FFFFFF)" }}
      >
        <Header />
        <Main />
      </div>
      <div className="bg-[#f2f9fc]">
        <Price />
        <Photos />
      </div>
      <Review />
    </main>
  );
}

export default App;
