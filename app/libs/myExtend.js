(function (glo) {
    if (!glo.Extend) {
        glo.Extend = function (func, pro, init) {            
            if (typeof func === 'function') {
                var tmplFun = function () {
                    func.prototype.constructor.apply(this, [].slice.call(arguments));
                    if (typeof init === 'function') {
                        init.prototype.constructor.call(this);
                    }
                };
                tmplFun.prototype = new func();
                if (typeof pro === 'object') {                    
                    _.extend(tmplFun.prototype, pro);
                }
                tmplFun.prototype.constructor = tmplFun;
                return tmplFun;
            }
            return function () { };
        }

    }
})(window);