// // // // // // // // // //
//
//      CGoogle Maps
//
// // // // // // // // // //


function initMap() {
    var uluru = {lat: 40.669, lng: -75.155};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: uluru,
      styles: myMapStyles
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
}




module.exports = { initMap };