function getElementId(payload) {

    return document.getElementById(payload);

};

function randomize(val1, val2) {

    if (val1 && val2) {
        return Math.floor(Math.random() * (val1 - val2 + 1));
    }


    if (val1) {
        return Math.floor(Math.random() * val1);
    }


    return Math.floor(Math.random() * 2)
};



export {
    getElementId,
    randomize
};