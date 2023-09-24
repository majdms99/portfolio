import { useContext, useState, useEffect } from "react";
import About from "./Components/About";
import Certificates from "./Components/Certificates";
import Contact from "./Components/Contact";
import FirstSection from "./Components/FirstSection";
import Work from "./Components/Work";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Projects from "./Components/Projects";
import Skiles from "./Components/Skiles";
import Global from "./Components/styles/Global";
import { ModeContext } from "./Context/Mode";
import RingLoader from "react-spinners/RingLoader";
import { Spinners } from "./Components/styles/Spinners.styled";

// colors[
//   main: #929DD9
// sec:  #7C89D1
// ]

function App() {

  const { dark } = useContext(ModeContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      {
        loading ?
          <>
            <Global dark={dark} />
            <Spinners>
              <RingLoader
                size={100}
                color={'#7C89D1'}
                loading={loading}
              />
            </Spinners>
          </>
          :
          <>
            <Global dark={dark} />
            <Header />
            <FirstSection />
            <About />
            <Skiles />
            <Work />
            <Projects />
            <Certificates />
            <Contact />
            <Menu />
          </>
      }

    </>
  );
}

export default App;
