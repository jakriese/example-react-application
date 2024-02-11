import { useEffect, useState } from 'react';
import fetchDogContent from '../../api/dogsService';
import './dog-pic.scss';

export default function DogPic({ breed, subBreed }: { breed: string, subBreed?: string }) {
    // how do I segment the breed name?
    // some breeds read better with the subBreed first, e.g. French Bulldog
    const [breedImg, setBreedImg] = useState('');

    useEffect(() => {
        fetchDogContent(`breed/${breed}/${subBreed && `${subBreed}/` || ''}images/random`)
            .then((data) => {
                setBreedImg(data);
            })
    }, [])

    return (
        <div className="wf-dog-pic">
            <div className="wf-dog-pic__image-container">
                <img
                    className='wf-dog-pic__image'
                    aria-describedby={`${breed}${subBreed ? `-${subBreed}` : ''}`}
                    style={{backgroundImage: `url(${breedImg})`}}
                />
            </div>
            <p className='wf-dog-pic__breed' id={`${breed}${subBreed ? `-${subBreed}` : ''}`}>
                {breed} {subBreed && subBreed}
            </p>
        </div>
    )
}