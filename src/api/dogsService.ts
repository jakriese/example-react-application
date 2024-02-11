const dogsURL = 'https://dog.ceo/api/'

// TODO: Cache responses
const cacheMap = new Map();

const fetchDogContent = async (path: string): Promise<any> => {
    if (cacheMap.has(path)) return cacheMap.get(path);
    try {
        const response = await fetch(`${dogsURL}${path}`);
        const dogs = await response.json();
        cacheMap.set(path, dogs.message);
        return dogs.message;
    } catch(error) {
        // TODO: add error handling
        console.log(error);
        return ;
    }
};

export default fetchDogContent;