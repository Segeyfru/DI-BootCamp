"use strict";
const validateUnionType = (value, allowedTypes) => {
    return allowedTypes.some(item => item === typeof value);
};
console.log(validateUnionType(true, ['string', 'number']));
console.log(validateUnionType(true, ['string', 'number', 'boolean']));
