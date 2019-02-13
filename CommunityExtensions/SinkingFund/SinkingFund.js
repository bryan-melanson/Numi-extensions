var _af = function (i,n) {
	return (i/(i+1)**n-1);
};

numi.addFunction({ "id": "AFin", "phrases": "AFin" }, function(values) {
	if (values.length === 2) {
		return { "double": _af(values[0].double,values[1].double) };
	}
});
