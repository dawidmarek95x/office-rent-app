import React from "react";

const offers = [
  {
    id: 1,
    content: (
      <>
        <h3>Biuro</h3>
        <p>od 1000 zł/msc</p>
      </>
    ),
    bgImage: require("../images/offers/01-OfferBg@2x.jpg"),
    bgImageLarge: require("../images/offers/01-OfferBg@2x.jpg"),
  },
  {
    id: 2,
    content: (
      <>
        <h3>Lorem ipsum</h3>
        <p>od 500 zł/msc</p>
      </>
    ),
    bgImage: require("../images/offers/02-OfferBg.jpg"),
    bgImageLarge: require("../images/offers/02-OfferBg@2x.jpg"),
  },
  {
    id: 3,
    content: (
      <>
        <h3>Biuro lorem</h3>
        <p>od 100 zł/h</p>
      </>
    ),
    position: "bottom",
    bgImage: require("../images/offers/03-OfferBg.jpg"),
    bgImageLarge: require("../images/offers/03-OfferBg@2x.jpg"),
  },
  {
    id: 4,
    content: (
      <>
        <h3>
          Biuro lorem ipsum <span>Lorem</span>
        </h3>
        <p>od 100 zł/h</p>
      </>
    ),
    position: "bottom",
    bgImage: require("../images/offers/04-OfferBg.jpg"),
    bgImageLarge: require("../images/offers/04-OfferBg@2x.jpg"),
  },
];

export default offers;
