export interface Command {
    run(command: string, args: string[], myself: string): void;
}