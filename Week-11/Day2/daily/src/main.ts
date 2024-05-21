

const validateUnionType = (value: any, allowedTypes: string[]) => {

   return allowedTypes.some(item => item === typeof value)
        
}

console.log(validateUnionType(true,['string','number']));
console.log(validateUnionType(true,['string','number','boolean']));
