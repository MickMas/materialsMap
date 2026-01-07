# materialsMap
Map highlighting the major trade flows of the materials required for the construction of nuclear fusion power plants in Europe.


# Usage
In order to view the map it must be served over http. It can also be directly run from the file but this does ocassionaly introduce bugs. 

To serve over http: python3 -m http.server 8000
Click on Main and voila!


# Dependencies
In order to render the map, Leaflet is used.
Leaflet: [Website](https://leafletjs.com/)

To add arrowheads to the polylines, we use PolyLineDecorater.
Leaflet.PolyLineDecorater: [GitHub](https://github.com/bbecquet/Leaflet.PolylineDecorator)