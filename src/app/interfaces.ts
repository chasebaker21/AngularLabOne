export interface ITodo {
    task: string
    completed: boolean
}

export class Todo {
    id: number;
    task: string = "";
    completed: boolean = false;

    constructor(values: Object = {} ) {
        Object.assign(this, values);
    }
}