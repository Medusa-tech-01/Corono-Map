function updateMap(){
    console.log("Updating Map with real time data")
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                longitude = element.longitude;
                latitude = element.latitude;
                cases = element.infected;
                color = `rgb(${cases},0,0)`;
                // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color,
                    scale: 0.7
                }).setLngLat([longitude, latitude])
                .addTo(map); 
            });
        })
}

let interval = 5000;
setInterval(updateMap,interval);