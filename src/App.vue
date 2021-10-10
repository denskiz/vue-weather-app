<template>
  <div class="body">
    <h1>{{ name }}</h1>
    <p v-if="name">Today</p>
    <h1 v-if="error">{{ error }}</h1>
    <div v-else>
      <p>{{ temp }}</p>
    </div>

    <div class="image">
      <div v-if="weather === 'rain'">
        <skycon condition="rain" color="white" size="130" />
      </div>
      <div v-else-if="weather === 'sleet'">
        <skycon condition="sleet" color="white" size="130" />
      </div>
      <div v-else-if="weather === 'snow'">
        <skycon condition="snow" color="white" size="130" />
      </div>
      <div v-else-if="weather === 'fog'">
        <skycon condition="fog" color="white" size="130" />
      </div>
      <div v-else-if="weather === 'clear-day'">
        <skycon condition="clear-day" color="white" size="130" />
      </div>
      <div v-else-if="weather === 'partly-cloudy-day'">
        <skycon condition="partly-cloudy-day" color="white" size="130" />
      </div>
      <div v-else-if="weather === 'cloudy'">
        <skycon condition="cloudy" color="white" size="130" />
      </div>
      <div v-else-if="weather === 'wind'">
        <skycon condition="wind" color="white" size="130" />
      </div>
    </div>
    <weather
      v-if="name"
      :description="description"
      :cloud="cloud"
      :humidity="humidity"
      :min="min"
      :max="max"
      :wind="wind"
    />
  </div>
</template>

<script>
import axios from 'axios';
import { getIcon } from './utils/getIcon';
import Skycon from 'vue-skycons';
import weather from './components/weather.vue';

export default {
  name: 'App',
  components: { Skycon, weather },
  data() {
    return {
      lat: '',
      long: '',
      error: '',
      weather: '',
      name: '',
      temp: '',
      description: '',
      cloud: '',
      humidity: '',
      min: '',
      max: '',
      wind: '',
    };
  },
  mounted() {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        this.lat = success.coords.latitude;
        this.long = success.coords.longitude;
        const API_KEY = 'f904f314bb36070d99d69fd1df14fa8f';
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.long}&appid=${API_KEY}&units=metric`
          )
          .then((res) => {
            console.log(res.data);
            this.weather = getIcon(res.data.weather[0].id);
            this.name = res.data.name;
            this.description = res.data.weather[0].description;
            this.temp = `${Math.round(res.data.main.temp)}°C`;
            this.cloud = `${res.data.clouds.all}%`;
            this.min = `${Math.round(res.data.main.temp_min)}°C`;
            this.max = `${Math.round(res.data.main.temp_max)}°C`;
            this.wind = `${res.data.wind.speed}kph`;
            this.humidity = `${res.data.main.humidity}%`;
          });
      },
      (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        this.error = `Error: ${err.message}`;
      }
    );
  },
};
</script>

<style>
body {
  box-sizing: border-box;
  font-family: Abel, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background-color: rgba(76, 174, 76, 0.65);
  color: #fff;
}

.image {
  padding-top: 0px;
  text-align: center;
}

p {
  font-size: 30px;
  text-align: center;
}

h1 {
  font-size: 2.5em;
  margin: auto;
  text-align: center;
  padding-top: 15px;
  text-shadow: 0 0 5px #000;
}
</style>
