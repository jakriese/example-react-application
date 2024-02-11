export interface DogList {
    [key: string]: string[],
}

export interface TreeModel {
    icon?: string;
    name: string;
    value: any;
    children?: TreeModel[]
}