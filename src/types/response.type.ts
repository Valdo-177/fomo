import { IEvent } from "./events";

export interface ResponseGetEvents {
    status: boolean;
    total_items: number;
    events: IEvent[]
}