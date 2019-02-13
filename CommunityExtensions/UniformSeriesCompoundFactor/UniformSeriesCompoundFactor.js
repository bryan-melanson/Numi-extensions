function _fa(i, n) {
    return ((1+i)**n-1)/i;
};

numi.addFunction({ "id": "FAin", "phrases": "FAin" }, function(values) {
	if(values.length === 2 ) {
        return { "double": _fa(values[0].double, values[1].double) };
    };
});