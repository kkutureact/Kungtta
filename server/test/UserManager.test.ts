import UserManager from '../src/UserManager';

describe('UserManager', () => {
    test('유저 1명이 들어왔다.', () => {
        UserManager.addUser('uuid1', 'nickname1', 'profile1', {} as WebSocket);
        expect(UserManager.size()).toBe(1);
    });

    test('또 유저 1명이 들어왔다.', () => {
        UserManager.addUser('uuid2', 'nickname2', 'profile2', {} as WebSocket);
        expect(UserManager.size()).toBe(2);
    });

    test('첫번째로 들어온 유저가 나갔다.', () => {
        UserManager.removeUser('uuid1');
        expect(UserManager.size()).toBe(1);
    });

    test('두번째로 들어온 유저가 나갔다.', () => {
        UserManager.removeUser('uuid2');
        expect(UserManager.size()).toBe(0);
    });
});