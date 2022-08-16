import {testFunction} from '.';

describe('Функция testFunction', () => {
    it('Валидный числовой ИНН ФЛ', () => {
        expect(testFunction(895502613880)).toBeTruthy();
    });

    it('Невалидный числовой ИНН ФЛ', () => {
        expect(testFunction(895502613881)).toBeFalsy();
    });

    it('Валидный строчный ИНН ФЛ', () => {
        expect(testFunction('895502613880')).toBeTruthy();
    });

    it('Невалидный строчный ИНН ФЛ', () => {
        expect(testFunction('895502613881')).toBeFalsy();
    });

    it('Валидный числовой ИНН ЮЛ', () => {
        expect(testFunction(2312271585)).toBeTruthy();
    });

    it('Невалидный числовой ИНН ЮЛ', () => {
        expect(testFunction(2312271586)).toBeFalsy();
    });

    it('Валидный строчный ИНН ЮЛ', () => {
        expect(testFunction('2312271585')).toBeTruthy();
    });

    it('Невалидный строчный ИНН ЮЛ', () => {
        expect(testFunction('2312271586')).toBeFalsy();
    });

    it('Объект', () => {
        expect(testFunction({})).toBeFalsy();
    });

    it('Длина не 10 и не 12', () => {
        expect(testFunction('2312271585111')).toBeFalsy();
        expect(testFunction('2312271')).toBeFalsy();
        expect(testFunction(2312271585111)).toBeFalsy();
        expect(testFunction(2312271)).toBeFalsy();
    });

    it('Валидный ИНН в 16ричном формате', () => {
        expect(testFunction(0x89D276E1)).toBeTruthy();
    })
});
