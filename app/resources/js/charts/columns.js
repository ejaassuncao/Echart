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
        series: []
    };
    return new Utils(this, option, divId, width, height, template);
});