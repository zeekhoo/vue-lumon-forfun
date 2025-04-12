<template>
  <div class="about">
    <div class="table">
      <div>Project:</div>
      <div class="custom"></div>
    </div>
    <hr/>
    <div v-if="route.query.name=='allentown'"><Allentown /></div>
    <div v-if="route.query.name=='dranesville'"><Dranesville /></div>
    <div v-if="route.query.name=='siena'"><Siena /></div>
    <div v-if="route.query.name=='coldharbor'"><ColdHarbor /></div>
    
    <div class="home-link"><a href="/">Home</a></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';

import Allentown from '../views/AllentownView.vue'
import Dranesville from '../views/DranesvilleView.vue'
import Siena from '../views/SienaView.vue'
import ColdHarbor from '../views/ColdHarborView.vue'

const route = useRoute();

onMounted(() => {
  const title = 'Projects';
  document.title = title;
  const projectName = route.query.name;
  console.log('Project Name:', projectName);
  doThing(projectName);
});

const doThing = (projectName) => {
  const customHtml = document.querySelector('.custom');
  customHtml.innerHTML = `${projectName}`;
}

</script>

<style>
@media (min-width: 1024px) {
  .about {
    margin-top: 160px;
    min-height: 100vh;
    display: block;
    align-items: center;
  }
  .projects-list {
    margin-top: 20px;
  }
  .home-link {
    margin-top: 120px;
    text-align: center;
  }
  .table {
    display: flex;
    justify-content: left;
    align-items: center;
    margin-bottom: 10px;
  }
  .custom {
    margin-left: 20px;
    font-size: 20px;
    font-weight: bold;
    color: #7484d4;
    justify-content: left;
    align-items: center;
  }
}
</style>
