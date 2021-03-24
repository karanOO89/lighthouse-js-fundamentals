const vegetables = [
    {
        submitter: 'Old Man Franklin',
        redness: 10,
        plumpness: 5
    },
    {
        submitter: 'Sally Tomato-Grower',
        redness: 2,
        plumpness: 8
    },
    {
        submitter: 'Hamid Hamidson',
        redness: 40,
        plumpness: 3
    }
]

const metric = 'plumpness'
const judgeVegetable = function (vegetables, metric) {
    let value = 0;
    let submitter = "";
    for (let i = 0; i < vegetables.length; i++) {
        if (value < vegetables[i][metric]) {
            value = vegetables[i][metric]
            submitter = vegetables[i].submitter
        }

    }
    return submitter;
}


console.log(judgeVegetable(vegetables, metric))