import {innTest} from '.';

describe('Функция innTest', () => {
    it('Валидный числовой ИНН ФЛ', () => {
        expect(innTest(895502613880)).toBeTruthy();
    });

    it('Невалидный числовой ИНН ФЛ', () => {
        expect(innTest(895502613881)).toBeFalsy();
    });

    it('Валидный строчный ИНН ФЛ', () => {
        expect(innTest('895502613880')).toBeTruthy();
    });

    it('Невалидный строчный ИНН ФЛ', () => {
        expect(innTest('895502613881')).toBeFalsy();
    });

    it('Валидный числовой ИНН ЮЛ', () => {
        expect(innTest(2312271585)).toBeTruthy();
    });

    it('Невалидный числовой ИНН ЮЛ', () => {
        expect(innTest(2312271586)).toBeFalsy();
    });

    it('Валидный строчный ИНН ЮЛ', () => {
        expect(innTest('2312271585')).toBeTruthy();
    });

    it('Невалидный строчный ИНН ЮЛ', () => {
        expect(innTest('2312271586')).toBeFalsy();
    });

    it('Объект', () => {
        expect(innTest({})).toBeFalsy();
    });

    it('Длина не 10 и не 12', () => {
        expect(innTest('2312271585111')).toBeFalsy();
        expect(innTest('2312271')).toBeFalsy();
        expect(innTest(2312271585111)).toBeFalsy();
        expect(innTest(2312271)).toBeFalsy();
    });

    it('Валидный ИНН в 16ричном формате', () => {
        expect(innTest(0x89D276E1)).toBeTruthy();
    })
});
