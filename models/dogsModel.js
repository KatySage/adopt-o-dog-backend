const db = require("./conn");

class DogsList {
  constructor(id, temperment, weight, height, name, breed, sex, breed_id) {
    this.id = id;
    this.temperment = temperment;
    this.weight = weight;
    this.height = height;
    this.name = name;
    this.breed = breed;
    this.sex = sex;
    this.breed_id = breed_id;
  }
  static async showAllDogs() {
    try {
      const response = await db.any(
        `SELECT id, breed, name, breed_id FROM dogs;`
      );
      return response;
    } catch (error) {
      console.error("ERROR: ", error.message);
      return error.message;
    }
  }
  static async showDog(id) {
    try {
      const response = await db.result(
        `SELECT * from dogs WHERE id = $1;`, [id]
      );
      return response;
    } catch (error) {
      console.error("ERROR: ", error.message);
      return error.message;
    }
}}
module.exports = DogsList;