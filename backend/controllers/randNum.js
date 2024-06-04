const min = 1;
const max = 15;

const getRandomNumber = () => {
    const floatRandom = Math.random()
  
    const difference = max - min
    
    const random = Math.round(difference * floatRandom)
  
    const randomWithinRange = random + min
  
    return randomWithinRange
};

module.exports = {
    getRandomNumber
};
