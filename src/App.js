import { useContext, useState, useEffect } from "react";
import About from "./Components/About";
import Certificates from "./Components/Certificates";
import Contact from "./Components/Contact";
import FirstSection from "./Components/FirstSection";
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

  const { dark, setDark } = useContext(ModeContext);
  const [loading, setLoading] = useState(false);


  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  if (time >= '7:00:00' && time <= '19:00:00') {
    setDark(false);

  } else {
    setDark(true);
  }

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
