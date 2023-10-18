var spec1 = "flow_map.vg.json";


var spec2 = "usmexicomap.vg.json";


var spec3 = "sahara.vg.json";


function loadFullWorldMap() {
  vegaEmbed('#fullmap', spec1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
}

function loadUSMexicoMap() {
  vegaEmbed('#fullmap', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
}

function loadSaharaMap() {
  vegaEmbed('#fullmap', spec3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
}

// Load the default map when the page loads
window.onload = function() {
  loadFullWorldMap();
}
