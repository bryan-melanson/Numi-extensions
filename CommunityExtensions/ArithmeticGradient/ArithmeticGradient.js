var _ag = function (i,n) {
	return ((1/i)-(n/((1+i)**n-1)));
};

numi.addFunction({ "id": "AGin", "phrases": "AGin" }, function(values) {
	if (values.length === 2) {
		return { "double": _ag(values[0].double,values[1].double) };
	}
});
