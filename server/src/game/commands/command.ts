export interface Command {
    run(command: string, args: string[], myuuid: string, myclient: WebSocket): void;
}