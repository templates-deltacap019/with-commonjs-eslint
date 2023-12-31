const {
  parseAffectionLevel,
  parseAdaptability,
  parseChildFriendly,
  parseDogFriendly,
  parseEnergyLevel,
  parseGrooming,
  parseHealthIssues,
  parseIntelligence,
  parseSheddingLevel,
  parseSocialNeeds,
  parseStrangerFriendly,
  parseVocalisation,
} = require('./attr-parser');

const parseDogAttributes = (dog) => {
  const affectionLevel = parseAffectionLevel(dog);
  const adaptability = parseAdaptability(dog);
  const childFriendly = parseChildFriendly(dog);
  const dogFriendly = parseDogFriendly(dog);
  const energyLevel = parseEnergyLevel(dog);
  const grooming = parseGrooming(dog);
  const healthIssues = parseHealthIssues(dog);
  const intelligence = parseIntelligence(dog);
  const sheddingLevel = parseSheddingLevel(dog);
  const socialNeeds = parseSocialNeeds(dog);
  const strangerFriendly = parseStrangerFriendly(dog);
  const vocalisation = parseVocalisation(dog);

  const parsedResult = {
    affectionLevel,
    adaptability,
    childFriendly,
    dogFriendly,
    energyLevel,
    grooming,
    healthIssues,
    intelligence,
    sheddingLevel,
    socialNeeds,
    strangerFriendly,
    vocalisation,
  };

  return parsedResult;
};

module.exports = { parseDogAttributes };
