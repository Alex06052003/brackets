module.exports = function check(str, bracketsConfig) {
    const checkArr = [];
    const brackets = {};

    for (let item of bracketsConfig) brackets[item[0]] = item[1];

    console.log(str);

    for (let i = 0; i < str.length; i += 1) {
        if (brackets[str[i]]) {
            if (checkArr.at(-1) === str[i]) checkArr.pop();
            else checkArr.push(str[i]);
        } else if (Object.values(brackets).includes(str[i])) {
            if (brackets[checkArr.pop()] !== str[i]) return false;
        }
    }
    return checkArr.length === 0;
};
