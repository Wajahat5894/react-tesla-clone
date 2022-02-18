import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Online bestellen für sorgenfreie Lieferung"
        backgroundImg="model-s.jpg"
        leftBtnText="Individuelle Bestellung"
        rightBtnText="Vorhandenes Inventar"
      />
      <Section
        title="Model Y"
        description="Online bestellen für sorgenfreie Lieferung"
        backgroundImg="model-y.jpg"
        leftBtnText="Individuelle Bestellung"
        rightBtnText="Vorhandenes Inventar"
      />
      <Section
        title="Model 3"
        description="Online bestellen für sorgenfreie Lieferung"
        backgroundImg="model-3.jpg"
        leftBtnText="Individuelle Bestellung"
        rightBtnText="Vorhandenes Inventar"
      />
      <Section
        title="Model X"
        description="Online bestellen für sorgenfreie Lieferung"
        backgroundImg="model-x.jpg"
        leftBtnText="Individuelle Bestellung"
        rightBtnText="Vorhandenes Inventar"
      />
      <Section
        title="Niedrigste Kosten für Solarmodule in Amerika"
        description="Geld-zurück-Garantie"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Jetzt Bestellen"
        rightBtnText="Mehr Erfahren"
      />
      <Section
        title="Solaranlagen für neue Dächer"
        description="Solardach kostet weniger als ein neues Dach plus Solarmodule"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Jetzt Bestellen"
        rightBtnText="Mehr Erfahren"
      />
      <Section
        title="Zubehör"
        leftBtnText="Jetzt Kaufen"
        backgroundImg="accessories.jpg"
      />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
`;
