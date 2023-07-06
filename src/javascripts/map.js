window.map = null;

if (location.pathname === '/map') {
    main();
}

document.addEventListener("location-change", () => {
    const map = document.getElementById('map');
    if (map) {
        main();
    }
});

async function main() {
    await ymaps3.ready;
    const {
        YMap,
        YMapDefaultSchemeLayer,
        YMapMarker,
        YMapControls,
        YMapDefaultFeaturesLayer
    } = ymaps3;

    const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
    const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');

    const LOCATION = {center: [34.100323, 44.948246], zoom: 8};

    map = new YMap(document.getElementById('map'), {location: LOCATION}, [
        new YMapDefaultSchemeLayer(),
        new YMapControls({position: 'right'}, [
            new YMapZoomControl({})
        ]),
    ]);

    map.addChild(new YMapDefaultFeaturesLayer({id: 'features'}));

    map.addChild(new YMapDefaultMarker({
        coordinates: [34.100323, 44.948246],
        title: 'Дом, здорово',
    }));


}
