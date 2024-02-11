const dogsURL = 'https://dog.ceo/api/'

// TODO: Cache responses
const cacheMap = new Map();

const fetchDogContent = async (path: string): Promise<any> => {
    try {
        const response = await fetch(`${dogsURL}${path}`);
        const dogs = await response.json();
        return dogs.message;
    } catch(error) {
        // TODO: add error handling
        console.log(error);
        return ;
    }
};

export default fetchDogContent;