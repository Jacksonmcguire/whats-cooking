const chai = require('chai');
const expect = chai.expect;

const RecipeRepo = require('../src/RecipeRepo');
const Recipe = require('../src/Recipe');
const User = require('../src/User');

let recipeData = [{'id': 2021, 'image': 'https://i.pinimg.com/originals/ee/28/89/ee288996db69afeb8ec5cbf84f8c0d10.jpg',
                  'ingredients': [{'id': 23, 'quantity': {'amount': 42, 'unit': 'octoban'}}], 'instructions': [{
                    'instruction': 'Get a paddle and some marshmallows and peanut butter','number': 1}, {'instruction': 'Whip it good. With a Whisk. Whip it!', 'number': 2}],
                    'name': 'fluffer-nutter', 'tags': ['chocolate','cheese']}];

let userData = {
                  "name": "Bosphorous Immanuel",
                  "id": 42,
                  "pantry": [{"ingredient": 61, "amount": 6}, {"ingredient": 62, "amount": 6}]
                }

describe ('User', () => {
  let recipeRepo;
  let recipe;
  let user;


  beforeEach('create a recipe repository', () => {
    recipeRepo = new RecipeRepo(recipeData);
    recipeNumberOne = recipeRepo.recipes[0];
    user = new User(userData);

  });

  it('should instantiate a user', () => {

    expect(user).to.be.an.instanceOf(User);
  });

  it('should have a name', () => {

    expect(user.name).to.deep.equal(userData.name);
  });

  it('should have an id', () => {

    expect(user.id).to.deep.equal(userData.id);
  });

  it('should have a pantry', () => {

    expect(user.pantry).to.deep.equal(userData.pantry);
  });

  it('should have favorite recipes', () => {

    expect(user.favorites).to.have.lengthOf(0);
  });

  it('should have planned recipes', () => {

    expect(user.planned).to.have.lengthOf(0);
  });

  it('should be able to see a list of all recipes', () => {

    expect(recipeNumberOne).to.deep.equal(recipeRepo.recipes[0]);
  })

})