const express = require('express');
const router = express.Router()
const Card = require('./cardSchema');


router.post("/create", (req, res) => {
    const newCard = new Card({...req.body});
    newCard
    .save()
    .then((card) => {
        res.send(card)
    })
    .catch((err) =>{
        res.send(err)
    });
});

router.get("/getCards", (req, res) => {
  Card.find({})
  .then((card) => {
      res.send(card)
  })
  .catch((err) =>{
      res.send(err)
  });
});

module.exports = router;




//https://www.hdnicewallpapers.com/Walls/Big/Aamir%20Khan/Aamir_Khan_Indian_Actor_Wallpaper.jpg
//https://www.hdnicewallpapers.com/Walls/Big/Kareena%20Kapoor/Bollywood_Actress_Kareena_Kapoor.jpg
//https://www.hdnicewallpapers.com/Walls/Big/Scarlett%20Johansson/American_Actress_Scarlett_Johansson_Pics.jpg
//https://www.hdnicewallpapers.com/Walls/Big/Katrina%20Kaif/Katrina_Kaif_Hindi_Film_Actress_Photo.jpg
//https://www.hdnicewallpapers.com/Walls/Big/Other%20Actors/Hindi_Film_Actor_Kartik_Aaryan_Photo.jpg
//https://www.hdnicewallpapers.com/Walls/Big/Other%20Hollywood%20Actors/Armie_Hammer_Dashing_Actor_Look.jpg