var _pf = function (i,n) {
	return (1/(1+i)**n);
};

numi.addFunction({ "id": "PFin", "phrases": "PFin" }, function(values) {
	if (values.length === 2) {
		return { "double": _pf(values[0].double,values[1].double) };
	}
});
