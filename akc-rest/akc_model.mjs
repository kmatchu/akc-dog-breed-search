import mongoose from 'mongoose';
import 'dotenv/config';
// Model code loosely based on Oregon State CS290 Assignment 9 Accessed 5/6/24
// https://canvas.oregonstate.edu/courses/1945984/assignments/9475930?module_item_id=23863281

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
)

// Connect
const db = mongoose.connection;

// Log successful connection
db.once("open", () => {
    console.log("Connected to MongoDB.")
});

// Schema

const breedSchema = mongoose.Schema({
    name: { type: String, required: true },
    temperament: { type: String, required: true },
    weight: { type: Number, required: true },
    grooming: { type: Number, required: true },
    energy: { type: Number, required: true },
    trainability: { type: Number, required: true},
    demeaner: { type: Number, required: true}
}, {collection: 'breeds'});

// Compile Model from Schema
const Breed = mongoose.model("Breed", breedSchema);

// Placeholder for adding some simplified data
const createBreed = async (name, temperament, weight, grooming, energy, trainability, demeaner) => {
    const breed = new Breed({ name: name, temperament: temperament, weight: weight, grooming: grooming, energy: energy, trainability: trainability, demeaner: demeaner });
        return breed.save()
    // To do: validity function checks for errors
}

const allBreeds = async() => {
    const query = Breed.find()
    return query.exec()
};

const filteredBreeds = async() => {
    // TO DO
}

const selectionBreeds = async() => {
    // TO DO
}

// To Do: Validation functions for requests to MongoDB

export { Breed, createBreed, allBreeds, filteredBreeds, selectionBreeds }