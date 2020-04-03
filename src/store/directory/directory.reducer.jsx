const INITIAL_STATE = {
  sections: [
      {
          id: 1,
          url: "rings",
          title: "RINGS",
          image: "https://i.ibb.co/9HLwNvC/classy-silver-wedding-rings-made-white-gold-lie-crystal-bracelet-8353-8668.jpg"
      },
      {
          id: 2,
          url: "necklaces",
          title: "NECKLACES",
          image: "https://i.ibb.co/NChXFt8/pexels-photo-848541.jpg"
      },
      {
          id: 3,
          url: "accessories",
          title: "ACCESSORIES",
          image: "https://i.ibb.co/Jzg97wp/pexels-photo-1616096.jpg"
      },
      {
          id: 4,
          url: "women",
          title: "WOMEN'S",
          image: "https://i.ibb.co/hmy4bSL/pexels-photo-458766.jpg",
          size: "large"
      },
      {
          id: 5,
          url: "men",
          title: "MEN'S",
          image: "https://i.ibb.co/TmgfR35/mens-jewellery.jpg",
          offer: "30% off",
          size: "large"
      }
  ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default: return state;
  }
}

export default directoryReducer;