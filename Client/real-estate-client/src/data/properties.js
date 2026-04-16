
// import penthouse1 from "../assets/images/0db5bbb5c7357fb2b60f6dba2e3a408dc.jpg"
// import penthouse2 from "../assets/images/1aab7f7bdcd73fdd95da3a61cdfc18d.jpg"
// import penthouse3 from "../assets/images/5b1df6e4b8aa0117ee672890c0f07dcc.jpg"
// import penthouse4 from "../assets/images/5d2ce8755355c98c706774a492819b0d.jpg"
// import penthouse5 from "../assets/images/6d2853ae161fb480950a36cddc9a6ce7.jpg"
// import penthouse6 from "../assets/images/7cfe1e69fbd8fad48ff42eddeb53699c.jpg"
// import penthouse7 from "../assets/images/7f2e7c088604a59cb594f148e5542ac.jpg"
// import penthouse8 from "../assets/images/265fd20df30cea6eb4f3c434bb8eb9c1.jpg"
// import penthouse9 from "../assets/images/509dce8b28b0dcc48a129e94ad4c74c.jpg"

// import penthouse10 from "../assets/images/624c7ec0197784014b20a96b950100da.jpg"
// import penthouse11 from "../assets/images/916ddfe6d7414bbc6ac3e6fc6ec1cf50.jpg"
// import penthouse12 from "../assets/images/980aced913dd85e0d317015087e71670.jpg"
// import penthouse13 from "../assets/images/40319dea5a4b006d36803e79f373751.jpg"
// import penthouse14 from "../assets/images/562904b719b208e0b4666403f4b68c2f.jpg"
// import penthouse15 from "../assets/images/a020cd3eed300d67c1d3cdf1726172f8.jpg"
// import penthouse16 from "../assets/images/a447693caaa302992d45acc30c2cebe.jpg"
// import penthouse17 from "../assets/images/ab3bfaa3f098933b6f78e644a32e264a.jpg"
// import penthouse18 from "../assets/images/b46dd4d58a721c0f8170868144dbd7fe.jpg"
// import penthouse19 from "../assets/images/bebda5ef0bd2b0de005a6d40746413d8.jpg"
// import penthouse20 from "../assets/images/c7c22b2f1fb268e41a638c1deadcc34d.jpg"
// import penthouse21 from "../assets/images/c78b40689ab8d17bd2805d28031eee38.jpg"
// import penthouse22 from "../assets/images/c90cbbb6c8862f5eedb283c5fb3e541a6.jpg"
// import penthouse23 from "../assets/images/df7b36d6709c6c2f3954e637d5f6508.jpg"
// import penthouse24 from "../assets/images/dfc620b55762904ce73ca0f83215607.jpg"
// import penthouse25 from "../assets/images/ff4cd2e47a0ac54b839aca69d7c8e3ed.jpg"


const images = import.meta.glob("../assets/images/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
})

const imageList = Object.values(images)











export const properties = [
  { id: 1, title: "Modern Villa - Tel Aviv", price: "₪8,500,000", rooms: 5, size: 320, description: "Luxury villa with private pool and sea view.",image: imageList[0] },
  { id: 2, title: "Penthouse - Jerusalem", price: "₪6,200,000", rooms: 4, size: 210, description: "Spacious penthouse with panoramic city view." ,image: imageList[1]},
  { id: 3, title: "Sea View Apartment - Herzliya", price: "₪4,900,000", rooms: 3, size: 140, description: "Apartment facing the beach with modern design.",image: imageList[2] },
  { id: 4, title: "Luxury Duplex - Netanya", price: "₪5,300,000", rooms: 5, size: 260, description: "Duplex in a high-end residential tower." ,image: imageList[3]},
  { id: 5, title: "Private Mansion - Caesarea", price: "₪12,800,000", rooms: 7, size: 480, description: "Exclusive mansion in a prestigious area.",image: imageList[4] },
    { id: 6, title: "Luxury Villa - Ramat Hasharon", price: "₪9,100,000", rooms: 6, size: 350, description: "Modern villa with garden and smart home system.", image: imageList[5] },
  { id: 7, title: "Beachfront Apartment - Tel Aviv", price: "₪7,800,000", rooms: 4, size: 190, description: "Apartment with full sea view and balcony.", image: imageList[6] },
  { id: 8, title: "Garden Duplex - Herzliya", price: "₪5,900,000", rooms: 5, size: 230, description: "Spacious duplex with private garden.", image:imageList[7] },
  { id: 9, title: "Sky Penthouse - Netanya", price: "₪8,300,000", rooms: 5, size: 270, description: "Top floor penthouse with open skyline view.", image: imageList[8] },
  { id: 10, title: "City Apartment - Jerusalem", price: "₪3,900,000", rooms: 3, size: 120, description: "Elegant apartment in central Jerusalem.", image: imageList[9] },

  { id: 11, title: "Luxury Villa - Savyon", price: "₪14,200,000", rooms: 8, size: 520, description: "Exclusive villa in a private neighborhood.", image: imageList[10] },
  { id: 12, title: "Modern Apartment - Givatayim", price: "₪3,200,000", rooms: 3, size: 110, description: "Brand new apartment near Tel Aviv.", image: imageList[11] },
  { id: 13, title: "Sea View Penthouse - Ashdod", price: "₪6,700,000", rooms: 4, size: 200, description: "Penthouse with large terrace facing the sea.", image:imageList[12] },
  { id: 14, title: "Private Villa - Raanana", price: "₪7,900,000", rooms: 6, size: 340, description: "Quiet villa in a green neighborhood.", image:imageList[13] },
  { id: 15, title: "Luxury Apartment - Bat Yam", price: "₪4,100,000", rooms: 4, size: 150, description: "High-floor apartment with city view.", image:imageList[14] },

  { id: 16, title: "Modern House - Kfar Saba", price: "₪6,300,000", rooms: 5, size: 280, description:"Family home with large backyard.", image:imageList[15] },
  { id: 17, title: "Boutique Apartment - Tel Aviv", price: "₪5,400,000", rooms: 3, size: 130, description: "Stylish apartment in a boutique building.", image: imageList[16] },
  { id: 18, title: "Luxury Villa - Herzliya Pituach", price: "₪18,000,000", rooms: 9, size: 600, description: "Premium villa with private pool and gym.", image: imageList[17] },
  { id: 19, title: "Garden Apartment - Modi'in", price: "₪3,600,000", rooms: 4, size: 160, description: "Ground floor apartment with garden.", image: imageList[18] },
  { id: 20, title: "Duplex Penthouse - Holon", price: "₪5,800,000", rooms: 5, size: 240, description: "Two-level penthouse with open terrace.", image:imageList[19] },

  { id: 21, title: "Luxury Villa - Caesarea", price: "₪15,900,000", rooms: 8, size: 550, description: "Prestigious villa near the sea.", image:imageList[20] },
  { id: 22, title: "City Apartment - Haifa", price: "₪2,900,000", rooms: 3, size: 115, description: "Apartment with panoramic bay view.", image:imageList[21] },
  { id: 23, title: "Modern Duplex - Petah Tikva", price: "₪4,700,000", rooms: 5, size: 220, description:"Spacious duplex in a new project.", image:imageList[22] },
  { id: 24, title:"Beach Villa - Ashkelon", price:"₪8,600,000", rooms :6 ,size :36 ,description:"Villa steps away from the beach.",image:imageList[23]},

]
