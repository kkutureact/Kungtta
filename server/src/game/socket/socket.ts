export interface Socket {
    run(client: any, action: string, data: any): void;
}