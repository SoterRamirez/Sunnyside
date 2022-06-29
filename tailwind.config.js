
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    colors: {
      softred: "hsl(7,99%,70%)",
      desoftred: "hsl(10,87%,91%)",
      yellow: "hsl(51, 100%, 49%)",
      deyellow: "hsl(50,95%,85%)",
      decyan: "hsl(167,40%, 24%)",
      darkblue: "hsl(198, 62%, 26%)",
      modcyan: "hsl(168, 34%, 41%)",
      deblue: "hsl(212, 27%, 19%)",
      verygreyblue: "hsl(213, 9%, 39%)",
      greyblue: "hsl(210, 4%, 67%)",
      white: "hsl(0,0%,100%)",
      buttonhover: "hsl(200,99%,71%)",
    },
    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
      fraunces: ["Fraunces", "serif"],
    },
    extend: {
      backgroundImage: {
        mobile: "url('../images/mobile/image-header.jpg')",
        desktop: "url('../images/desktop/image-header.jpg')",
      },
    },
  },
  plugins: [],
};
