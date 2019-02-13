var _ap = function (i,n) {
	return ((i*(1+i)**n)/((1+i)**n-1));
};

numi.addFunction({ "id": "APin", "phrases": "APin" }, function(values) {
	if (values.length === 2) {
		return { "double": _ap(values[0].double,values[1].double) };
	}
});
