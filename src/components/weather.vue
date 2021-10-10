<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="detail-box">{{ description }}</div>
        </div>
        <div class="col-4">
          <div class="detail-box">Cloudiness: {{ cloud }}</div>
        </div>
        <div class="col-4">
          <div class="detail-box">Humidity: {{ humidity }}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <div class="detail-box">Min Temp: {{ min }}</div>
        </div>
        <div class="col-4">
          <div class="detail-box">Max Temp: {{ max }}</div>
        </div>
        <div class="col-4">
          <div class="detail-box">Wind: {{ wind }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['description', 'cloud', 'humidity', 'min', 'max', 'wind'],
};
</script>

<style scoped>
.row {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.col-4 {
  width: 33.333333333%;
  padding: 12px;
}
.detail-box {
  /* flex: 0 0 auto; */

  justify-content: center;
  margin: 5px 0;
  padding: 10px 0;
  text-align: center;
  background-color: rgb(56, 55, 55);
}
.container {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}
</style>
