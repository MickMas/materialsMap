        const breedingBlanket = L.layerGroup();

        var arcticLithiumArrow = L.polyline([[35, 105], [66.3, 191.6], [77.7, 55.2], [63, 0], eindhoven], {color: 'black'}).bindPopup('Going through the arctic. Currently this is rarely done but climate change may make it more common.').addTo(breedingBlanket);
        var arcticLithiumDecorator = L.polylineDecorator(arcticLithiumArrow, {
            patterns: [
                {offset: '5%', repeat: 250, symbol: L.Symbol.arrowHead({pixelSize: 15, polygon: false, pathOptions: {stroke: true}})}
            ]
        }).addTo(breedingBlanket);

        var trainLithiumArrow = L.polyline([[35, 105], eindhoven], {color: 'black'}).bindPopup('A major rail network exists between China and Europe.').addTo(breedingBlanket);
        var trainLithiumDecorator = L.polylineDecorator(trainLithiumArrow, {
            patterns: [
                {offset: '5%', repeat: 250, symbol: L.Symbol.arrowHead({pixelSize: 15, polygon: false, pathOptions: {stroke: true}})}
            ]
        }).addTo(breedingBlanket);

        var suezLithiumArrow = L.polyline([[-35.3, 149.1], [14.1, 52.2], [11.43, 43.85], [34.6, 29.8], [36.2, -12], [49.45, -9], eindhoven], {color: 'black'}).bindPopup('The Suez canal. A potential bottleneck would be piracy around the Red Sea and the Gulf of Aden. Houthi attacks also a risk.').addTo(breedingBlanket);
        var suezLithiumDecorator = L.polylineDecorator(suezLithiumArrow, {
            patterns: [
                {offset: '5%', repeat: 250, symbol: L.Symbol.arrowHead({pixelSize: 15, polygon: false, pathOptions: {stroke: true}})}
            ]
        }).addTo(breedingBlanket);

        var capeLithiumArrow = L.polyline([[-35.3, 149.1], [-41.2, 19], [15.6, -22.5], [49.45, -9]], {color: 'black'}).bindPopup('The traditional sailing route around the Cape of Good Hope.').addTo(breedingBlanket);
        var capeLithiumDecorator = L.polylineDecorator(capeLithiumArrow, {
            patterns: [
                {offset: '5%', repeat: 250, symbol: L.Symbol.arrowHead({pixelSize: 15, polygon: false, pathOptions: {stroke: true}})}
            ]
        }).addTo(breedingBlanket);

        var atlanticLithiumArrow = L.polyline([[-33.5, -70.6], [-40, -42.5], [15.6, -22.5]], {color: 'black'}).bindPopup('Crossing the Atlantic Ocean.').addTo(breedingBlanket);
        var atlanticLithiumDecorator = L.polylineDecorator(atlanticLithiumArrow, {
            patterns: [
                {offset: '5%', repeat: 250, symbol: L.Symbol.arrowHead({pixelSize: 15, polygon: false, pathOptions: {stroke: true}})}
            ]
        }).addTo(breedingBlanket);

        var panamaLithiumArrow = L.polyline([[-33.5, -70.6], [-2.5, -84], [8.91, -79.54], [9.38, -79.94], [49.45, -9]], {color: 'black'}).bindPopup('The Panama Canal. A potential bottleneck would be water shortages. In 2025 the number of daily transits was halved due to water shortages.').addTo(breedingBlanket);
        var panamaLithiumDecorator = L.polylineDecorator(panamaLithiumArrow, {
            patterns: [
                {offset: '5%', repeat: 250, symbol: L.Symbol.arrowHead({pixelSize: 15, polygon: false, pathOptions: {stroke: true}})}
            ]
        }).addTo(breedingBlanket);

        const lithiumResources = [
            {location: [-33.5, -70.6], reserves: 9300000, production: 38000}, // Chile
            {location: [-35.3, 149.1], reserves: 6200000, production: 74700}, // Australia
            {location: [-34.6, -58.4], reserves: 3600000, production: 6500}, // Argentina
            {location: [35, 105], reserves: 3000000, production: 22600}, // China
            {location: [38, -97], reserves: 1100000, production: 1}, // US
            {location: [56, -106], reserves: 930000, production: 520}, // Canada
            {location: [-14, -51], reserves: 390000, production: 2630}, // Brazil
            {location: [-20, 30], reserves: 310000, production: 1030}, // Zimbabwe
            {location: [39.5, -8], reserves: 60000, production: 380}, // Portugal
        ];
        lithiumResources.forEach(element => {
            var innerRadius = Math.sqrt(element.production) * 500;
            L.circle(element.location, {
                color: 'transparent',
                fillColor: 'orange',
                fillOpacity: 0.7,
                radius: innerRadius
            }).addTo(breedingBlanket);
            var radius = Math.sqrt(element.reserves) * 500; // Scale radius for better visibility
            L.circle(element.location, {
                color: 'transparent',
                fillColor: 'blue',
                fillOpacity: 0.5,
                radius: radius
            }).bindPopup( `Lithium Reserves: ${element.reserves} tons. Lithium production: ${element.production} tons/year. These are the total reserves, out of this only 7,5\% is the Li-6 needed for a breeding blanket. For a fleet of 100 reactors, 50 tons of Li-6 are required each year. Currently enrichment of Li-6 is the biggest issue as all current processes use highly toxic mercury.`).addTo(breedingBlanket);
            
            
            
        });