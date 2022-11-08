function shuffleArray(array) {
    let arrCopy = [...array]
    for (let i = arrCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
        // const arr = ['itemA', 'itemB']
        // let originalA = arr[0];
        // arr[0] = arr[1]
        // arr[1] = originalA;

    }
    return arrCopy
}

module.exports = {
    shuffleArray
}