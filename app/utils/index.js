export const endingWord = (number) => {
    const _ending = '';

    if (typeof number==='number'||typeof number==='string') {
        const _last = String(number).slice(-1);

        if (Number(_last)>1&&Number(_last)<5) {
            return 'а';
        }
        if (Number(_last)>4&&Number(_last)<10) {
            return 'ов';
        }
    }

    return _ending;
};
