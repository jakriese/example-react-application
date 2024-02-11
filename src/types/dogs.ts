export interface DogList {
    [key: string]: string[],
}

export interface TreeModel {
    name: string;
    value: any;
    children?: TreeModel[]
}