<template>
  <div class="map">
    <div class="google-map" id="map"></div>
  </div>
</template>

<script>
import firebase from 'firebase';
import db from '@/firebase/init';
export default {
  name: 'GMap',
  data() {
    return {
      lat: 20.8,
      lgn: -100.4,
    };
  },
  methods: {
    renderMap() {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: this.lat, lng: this.lgn },
        zoom: 15,
        maxZoom: 20,
        minZoom: 3,
        streetViewControl: false,
      });
    },
  },
  mounted() {
    // Get current user
    let user = firebase.auth().currentUser;

    console.log('USER:', user);
    // get logged in user geolocation:
    if (navigator.geolocation) {
      console.log('HERE1');
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log('HERE2');
          console.log('POSTION: ', position);
          this.lat = position.coords.latitude;
          this.lgn = position.coords.longitude;
          // Update user location in db
          db
            .collection('users')
            .where('user_id', '==', user.uid)
            .get()
            .then(snapshot => {
              snapshot.forEach(doc => {
                console.log(doc.id);
                db
                  .collection('users')
                  .doc(doc.id)
                  .update({
                    geolocation: {
                      lat: position.coords.latitude,
                      lgn: position.coords.longitude,
                    },
                  });
              });
            })
            .then(() => {
              this.renderMap();
            });
        },
        err => {
          console.error(err);
          this.renderMap();
        },
        {
          maximumAge: 60000,
          timeout: 3000,
        }
      );
    } else {
      // Position centered by default (hard coded) values
      this.renderMap();
    }
    console.log('CURRENT USER: ', firebase.auth().currentUser);
  },
};
</script>

<style>
.google-map {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>



