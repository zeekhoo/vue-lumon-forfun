<template>
  <div>
    <h1 class="">Cold Harbor</h1>
    <div class="inputarea">
      <p>Enter your refinement data:</p>
      <div>
        <input class="textarea" v-model="macrodata" placeholder="The work is mysterious and important..." />
      </div>
      <div>
        <button 
          class="submit-button"
          @click="submit">Submit</button>
      </div>
    </div>
    <!-- <div class="back-button">
      <RouterLink to="/">Back</RouterLink>
    </div> -->
  </div>  
</template>

<script setup>
const macrodata = defineModel();

async function submit(event) {
  const value = macrodata.value;
  const res = await fetch('/cold-harbor', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: value
    })
  });
}
</script>

<style scoped>
.about {
  display: flex;
  align-items: center;
  margin-top: -60px;
  /* border: 1px solid yellow; */
}
.back-button {
  text-align: center;
  margin-top: 120px;
  margin-bottom: 60px;
  align-items: bottom;
}
.submit-button {
  background-color: #04AA6D; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 20px;
  border-radius: 4px;
  transition-duration: 0.4s;
}
.submit-button:hover {
  background-color: white;
  color: #04AA6D;
  cursor: pointer;
}
.submit-button:active {
  background-color: #3e8e41;
  transform: translateY(4px);
}
.inputarea {
  width: 600px;
  text-align: top;
}
.textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
}
</style>
