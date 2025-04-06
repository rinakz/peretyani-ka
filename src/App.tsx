import { Contact } from "./components/contact";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Services } from "./components/services";
import { Price } from "./components/price";
import { Review } from "./components/review";
import { Photos } from "./components/photos";
import { Footer } from "./components/footer";

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
        <Services />
      </div>
      <Photos />
      <Review />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
