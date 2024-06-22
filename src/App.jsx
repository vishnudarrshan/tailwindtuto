import React from "react";
import {
  Hero,
  SuperQuality,
  Services,
  Footer,
  PopularProducts,
  SpecialOffers,
  CustomerReviews,
  Subscribe,
} from "./sections";
import Nav from "./components/Nav";
const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />{" "}
    </section>
    <section className="padding">
      <SuperQuality />{" "}
    </section>
    <section className="padding-x py-10">
      <Services />{" "}
    </section>
    <section className="padding">
      <SpecialOffers />{" "}
    </section>{" "}
    <section className="bg-pale-blue padding">
      <CustomerReviews />{" "}
    </section>{" "}
    <section className="padding-x sm:py-32 w-full py-16">
      <Subscribe />
    </section>{" "}
    <section className="padding-x padding-t pb-10 bg-black">
      <Footer />
    </section>
  </main>
);

export default App;
