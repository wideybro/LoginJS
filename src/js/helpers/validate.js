const regExpDic = {
    email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
    password: /^[0-9a-zA-Z]{4,}$/,
}

/**
 * Function validate. Check the input on the regular expression provided in RegExpDic, for input data-required type
 * @param {HTMLInputElement} el 
 * @returns {Boolean} - Returns true if the input data is valid or does not have the data-required attribute
 */
export function validate(el) {
    const regExpName = el.dataset.required;
    
    if (!regExpDic[regExpName]) return true;

    return regExpDic[regExpName].test(el.value);
}