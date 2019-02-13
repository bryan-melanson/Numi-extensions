var _fp = function (i,n) {
	return (1+i)**n;
};

numi.addFunction({ "id": "FPin", "phrases": "FPin" }, function(values) {
	if (values.length === 2) {
		return { "double": _fp(values[0].double,values[1].double) };
	}
});
