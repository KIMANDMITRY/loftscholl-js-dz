/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
    for(var i = 0; i < array.length; i++){
         fn(array[i], i, array);
    }
}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
    var res = [];
    for(var i = 0; i < array.length; i++){
        res[i] = fn(array[i], i, array);
    }
    return res;
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
    var i = 0;

    if (typeof initial === 'undefined') {
        initial = array[0];
        i = 1
    }

    for (i; i < array.length; i++) {
        initial = fn(initial, array[i], i, array);
    }

    return initial;
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
    for (var key in obj) {
        if (key === prop) {
            delete obj[prop];
        }
    }
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
    for (var key in obj) {
        if (key === prop) {
            return true;
        }else{
            return false;
        }
    }
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
    var res = [];
    for (var key in obj) {
        res.push(key);
    }
    return res;
}

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
    var res = [];
    for (var key in obj) {
        res.push(key.toUpperCase());
    }
    return res;
}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from = 0, to = array.length) {
    var res = [];

    if (from < 0) {
        from += array.length;
    }
    if (to < 0) {
        to += array.length;
    }

    for (var i = 0; i < array.length; i++) {
        if (i >= from && i < to) {

            res.push(array[i]);
        }
    }

    return res;

}

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    obj = new Proxy(obj, {
        set(target, prop, value) {
            if (typeof value !== 'number') {
                throw new Error('value is not a number');
            }
            target[prop] = value * value;

            return true;
        }
    });

    return obj;
}

export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    createProxy
};