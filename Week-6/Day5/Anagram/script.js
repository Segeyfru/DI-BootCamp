function anagramChecker(str1, str2) {
    let boolean = false;
    str1 = str1.toLowerCase().split(" ").join("");
    str2 = str2.toLowerCase().replace(/ /g, "");
    // console.log(str1.length);
    // console.log(str2);

    if (str1.length == str2.length) {
        for (let i = 0; i < str1.length;) {
            const char1 = str1[i];
            for (let j = 0; j < str2.length; j++) {
                const char2 = str2[j];
                if (char1 === char2) {
                    str1 = str1.replace(char1, "");
                    str2 = str2.replace(char2, "");
                    boolean = true
                    break;
                }else{ boolean = false}
            }
            if(!boolean){
                return false
            }
        }
    } else {
        return false;
    }
    return boolean
    // console.log('finaly'+str1);
    // console.log('finaly'+str2);
}
// anagramChecker("qwerty", "ytrewq");
console.log(anagramChecker('Astronomer','Moon starer'));
