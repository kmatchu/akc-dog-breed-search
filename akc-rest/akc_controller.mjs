import 'dotenv/config';
import express from 'express';
import * as breedDataFunctions from "./akc_model.mjs"
// Controller code loosely based on Oregon State CS290 Assignment 9 Accessed 5/6/24
// https://canvas.oregonstate.edu/courses/1945984/assignments/9475930?module_item_id=23863281

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.post("/breeds", (req, res) => {
    breedDataFunctions.createBreed(req.body.name, req.body.temperament, req.body.weight, req.body.grooming, req.body.energy, req.body.trainability, req.body.demeaner)
        .then(breed => {
            breed ? res.status(201).json(breed) : res.status(400).json({ Error: "Invalid Request" });  
        })
        .catch(error => {
            console.error(error)
            res.status(400).json({Error: "Invalid Request"})
        })
});

app.get('/allbreeds', (req, res) => {
    console.log("all get call")
    breedDataFunctions.allBreeds()
        .then(breeds => {
            res.json(breeds)
        })
        .catch(error => {
            console.error(error)
            restart.status(400).json({ Error: "Request Invalid" })
        })
});

app.get('/filteredbreeds/:category/:value', async (req,res) => {
    console.log("Filter Get worked")
    // To doL better to use query notation? ex 3000/filteredbreeds?category=energy&value=0.6
    const category = req.params.category
    const value = parseFloat(req.params.value)
    const filter = {[category]: value}
    const filteredBreedList = await breedDataFunctions.Breed.find(filter)
    console.log(filteredBreedList)
    res.json(filteredBreedList)
})

// filtered get function

// compare by id function

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});