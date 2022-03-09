var Columns = (function (divId, width, height, template) {
    var option = {
        legend: {
        },
        tooltip: {},
        dataset: [
            {
                source: []
            },
        ],
        xAxis: {
            type: 'category',
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name: 'score',
            type: 'bar',
            encode: {
                x: 'name',
                y: 'score',
                tooltip: [3, 1]
            }
        }

        ]
    };
    return new Utils(this, option, divId, width, height, template);
});