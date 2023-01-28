export enum Levels {
    "Info",
    "Urgent",
    "Blocking"
}

export interface ITask {
    title: string;
    desc?: string;
    completed: boolean;
    level: Levels;
}