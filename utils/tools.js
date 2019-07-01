const enums = {
    '0': '&#xeeac;',
    '1': '&#xeeae;',
    '2': '&#xeebe;',
    '3': '&#xeece;',
    '4': '&#xeede;',
    '5': '&#xeeee;',
    '6': '&#xeefe;',
    '7': '&#xeeaa;',
    '8': '&#xeafa;',
    '9': '&#xeebb;'
};

const changeStr = (str)=>{
    let newStr = str.replace(/"price":"(.*?)"/g,function (match) {
        console.log('aaa...',match);
        let s = '';
        for( let i in enums){
            if(match.indexOf(i)>-1){
                let reg = RegExp(i, "g");
                s = (s?s:match).replace(reg,enums[i]);
            }
        }
        console.log('sss..',s);
        return s;
    });
    return newStr;
}

module.exports = {changeStr};
