/* ==========================================================================
   ODDWRLD — store configuration + product catalogue
   Everything you will want to edit lives in this file:
   brand contacts, announcement messages, menu links and every product.
   ========================================================================== */

window.ODDWRLD = {
  config: {
    brand: "ODDWRLD",
    tagline: "No Swag, No Motion.",

    // >>> REPLACE THESE with the real details <<<
    whatsapp: "2348000000000",          // country code + number, digits only (no +)
    email: "hello@oddwrld.com",
    instagram: "https://www.instagram.com/oddwrld",
    tiktok: "https://www.tiktok.com/@oddwrld",

    // Optional: paste a Formspree / Mailchimp / Basin endpoint to collect newsletter sign-ups.
    // Left empty, the form falls back to opening an email to the address above.
    newsletterEndpoint: "",

    currency: "₦",
    announcements: [
      "New drop live. No Swag, No Motion.",
      "Order in minutes. Pay and confirm on WhatsApp",
      "We deliver across Nigeria"
    ],
    menu: [
      { label: "New In",   href: "shop.html?c=new" },
      { label: "Tees",     href: "shop.html?c=tees" },
      { label: "Tops",     href: "shop.html?c=tops" },
      { label: "Sets",     href: "shop.html?c=sets" },
      { label: "Sale",     href: "shop.html?c=sale" },
      { label: "Shop All", href: "shop.html" }
    ],
    categories: [
      { key: "sale",  label: "Sale",  thumb: "p-set-brown.webp" },
      { key: "tees",  label: "Tees",  thumb: "p-pink-tee.webp" },
      { key: "tops",  label: "Tops",  thumb: "p-camo-long.webp" },
      { key: "shirts",label: "Shirts",thumb: "p-plaid-layer.webp" },
      { key: "sets",  label: "Sets",  thumb: "p-set-olive.webp" }
    ]
  },

  /* ---------------------------------------------------------------------
     Products.  price / was are in naira.  Set `was` to show a sale price.
     `img` is the card image, `gallery` are extra photos for the product page,
     `hover` is an on-body photo that fades in when you hover a card.
     --------------------------------------------------------------------- */
  products: [
    {
      id: "no-swag-no-motion-tee-pink", name: "No Swag, No Motion Tee — Pink", cat: "tees", colour: "Pink",
      price: 32000, sizes: ["S", "M", "L", "XL", "XXL"], tag: "new", best: true,
      img: "p-pink-tee.webp", hover: "look-mirror.webp", gallery: ["look-mirror.webp", "look-duo.webp"],
      blurb: "Our signature slogan in white brush script on bubblegum pink.",
      details: ["Pink tee with white “No Swag, No Motion.” brush print", "ODDWRLD signature at the hem", "Relaxed, boxy fit"]
    },
    {
      id: "no-swag-no-motion-ringer-tee", name: "No Swag, No Motion Ringer Tee — White / Red", cat: "tees", colour: "White / Red",
      price: 34500, sizes: ["S", "M", "L", "XL", "XXL"], tag: "new", best: true,
      img: "p-ringer-tee.webp", hover: "look-wall.webp", gallery: ["look-wall.webp", "banner-ringer.webp", "look-walk.webp"],
      blurb: "Clean white ringer tee with a red speed-line slogan.",
      details: ["White tee with red ringer neck and sleeve trim", "Red speed-line “No Swag, No Motion.” print", "ODDWRLD mark at the hem"]
    },
    {
      id: "acid-wash-sleeveless-tank-black", name: "Acid Wash Sleeveless Tank — Black", cat: "tops", colour: "Black",
      price: 28000, sizes: ["S", "M", "L", "XL"], tag: "new",
      img: "p-acid-tank.webp", gallery: [],
      blurb: "Sun-faded black tank with a distressed hem and raw edges.",
      details: ["Acid-wash black sleeveless tank", "Distressed hem and raw armholes", "ODDWRLD chest print with the slogan underneath"]
    },
    {
      id: "camo-bubble-logo-long-sleeve", name: "Camo Bubble Logo Long Sleeve", cat: "tops", colour: "Camo",
      price: 46000, was: 54000, sizes: ["S", "M", "L", "XL", "XXL"], tag: "new",
      img: "p-camo-long.webp", gallery: [],
      blurb: "Woodland camo long sleeve with the bubble-letter ODDWRLD print.",
      details: ["Camo long sleeve with brown ribbed collar", "Bubble-letter ODDWRLD front print", "Relaxed fit"]
    },
    {
      id: "distressed-plaid-layered-shirt", name: "Distressed Plaid Layered Shirt", cat: "shirts", colour: "Navy Plaid",
      price: 72000, was: 90000, sizes: ["S", "M", "L", "XL"], tag: "new",
      img: "p-plaid-layer.webp", gallery: [],
      blurb: "Plaid overshirt with built-in sweatshirt sleeves and a frayed hem.",
      details: ["Navy and cream plaid with layered grey sleeves", "Frayed raw hem and distressed detailing", "Chest pocket with ODDWRLD tab", "“No Swag, No Motion” print on the chest"]
    },
    {
      id: "washed-layered-tee-navy", name: "Washed Layered Tee — Navy", cat: "tees", colour: "Navy / Cream",
      price: 48500, sizes: ["S", "M", "L", "XL", "XXL"], tag: "new",
      img: "p-navy-layer.webp", gallery: [],
      blurb: "Washed navy tee layered over a cream long sleeve.",
      details: ["Washed navy tee over a cream long-sleeve layer", "Distressed ODDWRLD varsity print", "Script “No Swag, No Motion.” underline"]
    },
    {
      id: "pinstripe-varsity-polo-sky", name: "Pinstripe Varsity Polo — Sky", cat: "tops", colour: "Sky Blue",
      price: 52000, sizes: ["S", "M", "L", "XL"], tag: "new", best: true,
      img: "p-stripe-polo.webp", gallery: [],
      blurb: "Sky-blue pinstripe polo with a striped collar and a raw hem.",
      details: ["Sky-blue pinstripe polo with striped collar", "ODDWRLD varsity print with script tagline", "Frayed raw hem"]
    },
    {
      id: "flare-set-olive", name: "Flare Set — Olive", cat: "sets", colour: "Olive / Cream",
      price: 98000, sizes: ["XS", "S", "M", "L", "XL"], tag: "new", best: true,
      img: "p-set-olive.webp", gallery: [],
      blurb: "Zip-up hooded top with side lacing and matching flared bottoms.",
      details: ["Two-piece set: zip hoodie + flare bottoms", "Contrast cream panels with side lace-up detail", "ODDWRLD logo on the chest and waistband"]
    },
    {
      id: "flare-set-black-pink", name: "Flare Set — Black / Pink", cat: "sets", colour: "Black / Pink",
      price: 98000, sizes: ["XS", "S", "M", "L", "XL"], tag: "new",
      img: "p-set-pink.webp", gallery: [],
      blurb: "Black hoodie with a pink centre panel, paired with black flares.",
      details: ["Two-piece set: zip hoodie + flare bottoms", "Pink centre panel with side lace-up detail", "ODDWRLD logo on the chest and waistband"]
    },
    {
      id: "flare-set-chocolate", name: "Flare Set — Chocolate", cat: "sets", colour: "Chocolate / Cream",
      price: 78400, was: 98000, sizes: ["XS", "S", "M", "L", "XL"], tag: "new",
      img: "p-set-brown.webp", gallery: [],
      blurb: "Chocolate brown hoodie with cream panels and side stripes.",
      details: ["Two-piece set: zip hoodie + flare bottoms", "Cream centre panel with contrast side stripes", "ODDWRLD logo on the chest and waistband"]
    }
  ]
};
