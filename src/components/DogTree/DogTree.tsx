import { DogList } from "../../types/dogs";
import TreeView from "../TreeView";

export default function DogTree({ dogs, onClick }: { dogs: DogList, onClick: (val: string[]) => void }) {
    // format data
    const formattedDogs = Object.keys(dogs).map((breed: string) => {
        let formattedChildren = [];

        if (dogs[breed].length) {
            formattedChildren = dogs[breed].map((subBreed) => {
                return {
                    name: `${subBreed}`,
                    value: [breed, subBreed],
                    children: [],
                }
            })
        }

        return {
            name: breed,
            value: [breed, undefined],
            children: formattedChildren,
        }
    })

    return <TreeView items={formattedDogs} onClick={onClick} />
}