var _pa = function (i,n) {
	return ((1+i)**n-1)/(i*(1+i)**n);
};

numi.addFunction({ "id": "PAin", "phrases": "PAin" }, function(values) {
	if (values.length === 2) {
		return { "double": _pa(values[0].double,values[1].double) };
	}
});
