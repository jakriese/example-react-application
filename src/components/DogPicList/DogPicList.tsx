import DogPic from '../DogPic';
import { DogList } from '../../types/dogs';
import './dog-pic-list.scss';

export default function DogPicList({ dogs, dogFilter = [] }: { dogs: DogList, dogFilter: string[] }) {
    // TODO: filter list
    // get to tuples with [breed, subBreed] to match the treeview

    const flatDogs = Object.keys(dogs).reduce((acc, cur) => {
        // check if it has any children, if not return [breed, undefined]
        if (!dogs[cur].length) {
            return [...acc, [cur, undefined]];
        } else {
            return [...acc, ...dogs[cur].map((subBreed) => {
                return [cur, subBreed];
            })]
        }
    }, []);

    const listContent = flatDogs.filter(([breed, subBreed]) => {
        if (!dogFilter.length) return true;
        if (breed === dogFilter[0] && subBreed === dogFilter[1]) return true;
    }).map(([breed, subBreed]) => {
        return (
            <div key={`${breed}${subBreed ? `-${subBreed}` : ''}`} className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <DogPic breed={breed} subBreed={subBreed} />
            </div>
        )
    })

    const emptyMessage = (
        <div className='col'>
            <p>No Doggos!</p>
        </div>
    );
    
    return (
        <div className='wf-dog-list'>
            <div className='row'>
                {
                    listContent.length ? listContent : emptyMessage
                }
            </div>
        </div>
    )
}