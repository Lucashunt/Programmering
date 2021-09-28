let personligBesked = {
    venner: {
      ven1: {
        navn: "sigurd",
        sang: "Hit me baby one more time",
      },
      ven2: {
          navn: "Tessa",
          sang: "Ben"
      },
      ven3: {
          navn: "Mia",
          sang: "Love will tear us apart"
      }
    },
  };
  for (let person in personligBesked.venner){
      console.log(`Yo ${personligBesked.venner[person].navn.``} vil du med til piratfest på reffen i aften? Adressen er piratvej 100`)
  }
  for (let musik in personligBesked.venner){
      console.log(personligBesked.venner[musik].sang)
  }

  console.log(personligBesked.venner.ven1.sang)