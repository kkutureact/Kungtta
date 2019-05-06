const words = ['병신', '씨발', 'ㅅㅂ', 'ㅂㅅ', 'ㅂ1ㅅ', 'ㅂ!ㅅ', 'ㅆㅂ', 'ㅅ1ㅂ', 'ㅆ1ㅂ', 'ㅅ!ㅂ', 'ㅆ!ㅂ', '느금마', '느으금마', '새끼', '쌔끼', '섹스', 'sex', '니엠', '미친놈', '미친년', '미친', '지랄', '좆', '존나', '씹'];

export const FilteringBadWord = (word: string) => {
    if(words.includes(word)) {
        return '**';
    }

    return word;
};