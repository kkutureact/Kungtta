import { FilteringBadWord } from '../src/game/chat/filteringBadWord';

describe('욕설 필터링', () => {
    test('욕설 필터링#1', () => {
        expect(FilteringBadWord('병신')).toBe('**');
    });

    test('욕설 필터링#2', () => {
        expect(FilteringBadWord('ㅂㅅ')).toBe('**');
    });

    test('욕설 필터링#3', () => {
        expect(FilteringBadWord('ㅄ')).toBe('**');
    });
});