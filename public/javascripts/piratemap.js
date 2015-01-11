(function () {
    var myOSM;
    myOSM = L.tileLayer('http://ajax.pirates.42monkeys.co.uk/osm_tiles/{z}/{x}/{y}.png', 
	{
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    });
    var baseMaps = { "myOSM": myOSM };
    var southWest = L.latLng(50, -4), northEast = L.latLng(55, 4), bounds = L.latLngBounds(southWest, northEast);
    var map = L.map('map', 
    {
        center: [52.0565, -2.7160],
        zoom: 17,
        layers: [myOSM],
    });
    L.control.layers(baseMaps).addTo(map);
})();