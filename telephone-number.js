function telephoneCheck(str) {
    // make a regular expression for the valid formats
    let regEx1 = /^[0-9]{3}[-][0-9]{3}[-][0-9]{4}$/;
    let regEx2 = /^[(][0-9]{3}[)][0-9]{3}[-][0-9]{4}$/;
    let regEx3 = /^[(][0-9]{3}[)][ ][0-9]{3}[-][0-9]{4}$/;
    let regEx4 = /^[0-9]{3}[ ][0-9]{3}[ ][0-9]{4}$/;
    let regEx5 = /^[0-9]{10}$/;
    let regEx6 = /^[1][ ][0-9]{3}[ ][0-9]{3}[ ][0-9]{4}$/;
    let regEx7 = /^[1][ ][0-9]{3}[-][0-9]{3}[-][0-9]{4}$/;
    let regEx8 = /^[1][ ][(][0-9]{3}[)][ ][0-9]{3}[-][0-9]{4}$/;
    let regEx9 = /^[1][(][0-9]{3}[)][0-9]{3}[-][0-9]{4}$/;

    // test if there is a match in the string using each regular expression
    if (regEx1.test(str)) {
        return true;
    } else if (regEx2.test(str)) {
        return true;
    } else if (regEx3.test(str)) {
        return true;
    } else if (regEx4.test(str)) {
        return true;
    } else if (regEx5.test(str)) {
        return true;
    } else if (regEx6.test(str)) {
        return true;
    } else if (regEx7.test(str)) {
        return true;
    } else if (regEx8.test(str)) {
        return true;
    } else if (regEx9.test(str)) {
        return true;
    } else {
        return false;
    }
}
