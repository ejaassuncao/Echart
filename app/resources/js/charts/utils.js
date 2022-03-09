var Utils =(function (el, option, divId, width, height, template) {
    el.option=option;
    el.elDiv = document.getElementById(divId);
    el.elDiv.style.width = width;
    el.elDiv.style.height = height;
    el.divChart = echarts.init(el.elDiv, template);

    
    function fncSetOption(prop, value) {
        var array = prop.replaceAll(".", "']['");
        if (value instanceof Object)
            eval(`el.option['${array}'] = ${JSON.stringify(value)}`);
        else
            eval(`el.option['${array}'] = '${value}'`);
        el.divChart.setOption(option);
    }

    function fncGetLoadData(url, callback) {
        $.getJSON(url, function (d) {
            fncSetOption('dataset.0.source', d);
            if (callback instanceof Function) callback(d);
        });
    }

    function fncGetOption(prop) {
        if (!prop) return option;
        fncIsValideProp(prop);
        var array = prop.replaceAll(".", "']['");
        var valor = eval(`el.option['${array}']`);
        return valor;
    };

    //adicona a propriedade caso não exista
    function fncIsValideProp(prop) {
        var campos = prop.split(".");
        var stringCampo = '';
        for (var i in campos) {
            var campo = campos[i];
            stringCampo += `['${campo}']`;
            var value = eval(`el.option${stringCampo}`);
            if (value != undefined) continue;
            //if(parseInt(campo)>=0)        
            //eval(`self.option${stringCampo} = []`);
            //else
            eval(`el.option${stringCampo} = {}`);
        }
    }

    function fncAddProp(prop, jsonAdd) {
        var obj1 = el.option;
        if (prop) {
            obj1 = fncGetOption(prop);
        }
        var obj2 = JSON.parse(jsonAdd);
        Object.assign(obj1, obj1, obj2);
        el.divChart.setOption(el.option);
    }

    function fncGetCopyOption(prop) {
        if (!prop) return $.extend(true, {}, el.option);
        var array = prop.replaceAll(".", "']['");
        var valor = eval(`el.option['${array}']`);
        return $.extend(true, {}, valor);
    };

    return {
        getOption: fncGetOption,
        setOption: fncSetOption,
        getLoadData: fncGetLoadData,
        addProp: fncAddProp,
        getCopyOption: fncGetCopyOption,        
    }
});