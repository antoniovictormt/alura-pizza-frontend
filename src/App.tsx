import { useEffect, useState } from "react"
import { Plates, TPlatesType } from "./components/Plates";
import { BannerContainer, Container, LogoContainer, Section } from "./styles/page"

function App() {
  const Banner = new URL("./assets/alura_pizza_banner.png", import.meta.url).href
  const Logo = new URL("./assets/alura_pizza_logo.png", import.meta.url).href

  const apiURL = import.meta.env.VITE_API_URL;

  const [plates, setPlates] = useState([]);

  useEffect(() => {
    fetch(apiURL)
      .then(response => response.json())
      .then(dados => {
        setPlates(dados)
      })
  }, []);

  return (
    <Container>
      <BannerContainer>
        <img src={Banner} alt="Banner da alura pizza" />
      </BannerContainer>

      <LogoContainer>
        <img src={Logo} alt="Logo da alura pizza" />
      </LogoContainer>

      <Section>
        {plates.map((plate: TPlatesType) => (
          <Plates
            key={plate.id}
            description={plate.description}
            id={plate.id}
            image={plate.image}
            name={plate.name}
            price={plate.price}
          />
        ))}
      </Section>
    </Container>
  )
}

export default App
