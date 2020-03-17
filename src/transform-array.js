module.exports = function transform(arr) {
    if (!(arr instanceof Array)) throw 'Bad params';
    const resultArray = [];

    for (let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case '--discard-next':
                i++;
                break;
            case '--discard-prev':
                resultArray.pop();
                break;
            case '--double-next':
                if (i !== arr.length - 1) resultArray.push(arr[i + 1]);
                break;
            case '--double-prev':
                if (i !== 0) resultArray.push(arr[i - 1]);
                break;
            default:
                resultArray.push(arr[i]);
                break;
        }
    }
    return resultArray;
};
