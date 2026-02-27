<template>
  <div>
    <h1 class="">Cold Harbor</h1>
    <div v-if="showBanner" class="banner">
      {{ bannerMessage }}
    </div>
    <form>
      <div class="inputarea">
        <p>Please enter your macrodata refinement data:</p>
        <div>
          <input class="textarea" v-model="macrodata" placeholder="The work is mysterious and important..." />
        </div>
        <vue-turnstile
          class="turnstile"
          :site-key="sitekey"
          data-theme="light"
          data-size="normal"
          v-model="turnstileToken"
        ></vue-turnstile>
        <div>
          <button 
            :disabled="!turnstileToken"
            class="submit-button"
            @click="submit">Submit</button>
        </div>
      </div>
    </form>
  </div>  
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import VueTurnstile from 'vue-turnstile';

const macrodata = defineModel();

const sitekey = import.meta.env.VITE_TURNSTILE_SITE_KEY; // Ensure this is set in your .env file
const turnstileContainer = ref(null); // Reference to the HTML element
const turnstileToken = ref('');       // Where we store the successful token
const widgetId = ref(null);           // To track the widget instance (useful for resets)
const showBanner = ref(false);
const bannerMessage = ref('');

watch(turnstileToken, (newValue) => {
  if (newValue) {
    console.log("turnstileToken changed to:", newValue);
    bannerMessage.value = "Turnstile verification successful! token: " + newValue.substring(0, 55) + "...";
    showBanner.value = true;
    setTimeout(() => {
      showBanner.value = false;
    }, 5000);
  }
});

onMounted(() => {
  console.log("Mounted...");
});

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
.banner {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  margin-bottom: 20px;
  border-radius: 4px;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  animation: slideDown 0.3s ease-out;
}
@keyframes slideDown {
  from {
    transform: translateX(-50%) translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
}
.turnstile {
  margin-top: 20px;
}
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
.submit-button:disabled {
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
  opacity: 0.6;
}
.submit-button:disabled:hover {
  background-color: #cccccc;
  color: #666666;
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
