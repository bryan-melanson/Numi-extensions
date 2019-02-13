var _pag = function (g,i,n) {
	var i0 = ((1+i)/(1+g)) - 1;
	return ((((1+i0)**n-1)/(i0*(1+i0)**n))*(1/(1+g)));
};

numi.addFunction({ "id": "PAgin", "phrases": "PAgin" }, function(values) {
	if (values.length === 3) {
		return { "double": _pag(values[0].double,values[1].double,values[2].double) };
	}
});
