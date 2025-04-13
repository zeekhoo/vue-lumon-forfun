<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import HelloWorld from './HelloWorld.vue'

import { useRouter } from 'vue-router';
const router = useRouter();

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')

const toView = (viewName) => {
  router.push({
    path: '/projects',
    query: {
      name: viewName
    }
  });
}
</script>

<template>
  <div class="parent">
    <header class="child">
      <img alt="Vue logo" class="logo" src="@/assets/Lumon.png" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="Welcome to AP2-LABS" />
      </div>
    </header>

    <div class="child">
      <WelcomeItem>
        <template #icon>
          <DocumentationIcon />
        </template>
        <template #heading>Handbook</template>

        <a href="https://vuejs.org/" target="_blank" rel="noopener">Official handbook</a>
        provides you with all information you need to get started with your innie life.
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <ToolingIcon />
        </template>
        <template #heading>Core Principles</template>

        <p>There are nine <b>Core Principles</b>, intended to unite the company's workforce. They are:</p>

        <li><a href="https://vite.dev/guide/features.html" target="_blank" rel="noopener">Vision</a></li>
        <li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener">Verve</a></li>
        <li><a href="https://github.com/vuejs/language-tools" target="_blank" rel="noopener">Wit</a></li>
        <li><a href="https://vitest.dev/" target="_blank" rel="noopener">Cheer</a></li>
        <li><a href="https://www.cypress.io/" target="_blank" rel="noopener">Humility</a></li>
        <li><a href="https://playwright.dev/" target="_blank" rel="noopener">Benevolence</a></li>
        <li><a href="">Nimbleness</a></li>
        <li><a href="">Probity</a></li>
        <li><a href="">Wiles</a></li>
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <EcosystemIcon />
        </template>
        <template #heading>Projects</template>

        Get official tools and libraries for your project:
        <!-- <RouterLink to="/allenstown">Allentown</RouterLink>,
        <RouterLink to="/dranewsville">Dranesville</RouterLink>,
        <RouterLink to="/siena">Siena</RouterLink>,
        <RouterLink to="/cold-harbor">Cold Harbor</RouterLink> -->
        <a href="" @click="toView('allentown')">Allentown</a>,
        <a href="" @click="toView('dranesville')">Dranesville</a>,
        <a href="" @click="toView('siena')">Siena</a>,
        <a href="" @click="toView('coldharbor')">Cold Harbor</a>.
        If you need more resources, we suggest paying
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Macrodata Refinement</a>
        a visit.
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <CommunityIcon />
        </template>
        <template #heading>Community</template>

        Got stuck? Ask your question on
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Severance Land</a>
        (our official Discord server), or
        <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener">StackOverflow</a>. You
        should also follow the official
        <a href="https://bsky.app/profile/vuejs.org" target="_blank" rel="noopener">@lumon.org</a>
        Bluesky account or the
        <a href="https://x.com/vuejs" target="_blank" rel="noopener">@severance</a>
        X account for latest news in the LUMON world.
      </WelcomeItem>

    </div>
  </div>  

</template>

<style scoped>
.parent {
  display: flex;
  min-width: 1200px;
}

.child {
  flex: 1;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
