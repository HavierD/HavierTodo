import { ItemType } from "./item-type";

export interface IItem {
    id: number;
    type: ItemType;
    title: string;
    description: string;
    parentId: number;
    childId: number[];
}