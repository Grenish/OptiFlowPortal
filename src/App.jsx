import React from "react";

import {
  Benifits,
  ExtraServices,
  Footer,
  Hero,
  Imports,
  Locations,
  Navbar,
  Partners,
  Services,
  Technology,
  Temprature,
  Transportation,
  TransportServices,
} from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Locations />
      <Partners />
      <Technology />
      <ExtraServices />
      <Transportation />
      <TransportServices />
      <Benifits />
      <Temprature />
      <Imports />
      <Footer />
    </div>
  );
};

export default App;
