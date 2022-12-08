<template>
  <div>
    <hr class="border-top" />
    <!-- <div class="primary">
      
    </div> -->
    <div class="primary">
      <!-- <p>{{ article[0].id }}</p>
     <p>PrimaryContent</p>
    <div v-for="art in article" :key="art.id">
      <li v-if=art.type = 'science' @click="toFullArticle">{{ art.header }}</li>
    </div>
    <p>I am mohtasim.</p>

      -->
      <!-- science image -->
      <!-- <div>
      
      </div> -->
      <!-- finish science image -->
      <div class="primary_sub">
        <div>
          
          <img
            class="primary_sub-main-card-logo small-margin"
             
            src="../assets/image/hp-science,tech,math.png"
            alt="science logo"
          />
        </div>

        <div class="primary_sub-main">
          <div class="primary_sub-main-card">
            <router-link to="/section-list/science">
              <h3 class="primary_sub-main-card-header">
                Science,Tech,Math
              </h3></router-link
            >
            <!-- science sub logo -->
            <img
            src="https://picsum.photos/600/300?think"
              alt="science sub logo"
              class="science-sub-logo"
            />

            <!-- grid layout -->
            <div class="primary_sub-main-card-grid">
              <router-link-to
                v-for="art in article"
                class="border-middle science"
                :key="art.id"
                :id="art.id"
                :number="art.number"
                resources="science"
                :type="art.type"
                :subtype="art.subtype"
                :header="art.header"
              ></router-link-to>
            </div>
             <div class="page">
              
              <router-link to="/section-list/science"><button class="page_article">All Science</button></router-link>
             
              <img
                class="forward-arrow"
                src="../assets/image/forward-outline.svg"
                alt=">"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="primary_sub">
        <div>
          <img
            class="primary_sub-main-card-logo small-margin"
            src="../assets/image/hp-humanities.png"
            alt="humanities logo"
          />
        </div>
        <div class="primary_sub-main">
          <div class="primary_sub-main-card">
            <router-link to="/section-list/humanities">
              <h3 class="primary_sub-main-card-header">
                Humanities
              </h3></router-link
            >
            <img
            src="https://picsum.photos/600/300?action"
              alt="science sub logo"
              class="science-sub-logo"
            />
            <div class="primary_sub-main-card-grid">
              <router-link-to
                v-for="art in article"
                class="border-middle humanities"
                :key="art.id"
                :id="art.id"
                :number="art.number"
                resources="humanities"
                :type="art.type"
                :subtype="art.subtype"
                :header="art.header"
              ></router-link-to>
            </div>
             <div class="page">
              
              <router-link to="/section-list/humanities"><button class="page_article">All Humanities</button></router-link>
             
              <img
                class="forward-arrow"
                src="../assets/image/forward-outline.svg"
                alt=">"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="primary_sub">
        <div>
          <img
            class="primary_sub-main-card-logo small-margin"
            src="../assets/image/hp-languages.png"
            alt="languages logo"
          />
        </div>
        <div class="primary_sub-main">
          <div class="primary_sub-main-card">
            <router-link to="/section-list/language">
              <h3 class="primary_sub-main-card-header">
                Languages
              </h3></router-link
            >
            <img
            src="https://picsum.photos/600/300?life"
              alt="science sub logo"
              class="science-sub-logo"
            />
            <div class="primary_sub-main-card-grid">
              <!-- <router-link to="/">
                <div v-if="art.type == 'language'">
                  <h2 class="small">{{ art.type }}</h2>
                  <h2 class="big">{{ art.header }}</h2>
                </div>
              </router-link> -->
              <router-link-to
                v-for="art in article"
                :key="art.id"
                class="border-middle language"
                :id="art.id"
                :number="art.number"
                resources="language"
                
                :type="art.type"
                :subtype="art.subtype"
                :header="art.header"
              ></router-link-to>
            </div>
             <div class="page">
              
              <router-link to="/section-list/language"><button class="page_article">All Language</button></router-link>
             
              <img
                class="forward-arrow"
                src="../assets/image/forward-outline.svg"
                alt=">"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="primary_sub">
        <div>
          <img
            class="primary_sub-main-card-logo small-margin"
            src="../assets/image/hp-resources.png"
            alt="resources logo"
          />
        </div>
        <div class="primary_sub-main">
          <div class="primary_sub-main-card">
            <router-link to="/section-list/resources">
              <h3 class="primary_sub-main-card-header">
                Resources
              </h3></router-link
            >
            <img
              src="https://picsum.photos/600/300?love"
              alt="science sub logo"
              class="science-sub-logo"
            />

            <div>
              <div class="primary_sub-main-card-grid">
                <!-- <router-link :to="articleDetailLink">
                  <div v-if="art.type == 'resources'">
                    <h2 class="small">{{ art.type }}</h2>
                    <h2 class="big">
                      {{ art.header }}
                    </h2>
                  </div>
                </router-link> -->
                <router-link-to
                  v-for="art in article"
                  class="border-middle resources"
                  :key="art.id"
                  :id="art.id"
                  :number="art.number"
                  resources="resources"
                  :type="art.type"
                  :subtype="art.subtype"
                  :header="art.header"
                ></router-link-to>
              </div>
            </div>
            <div class="page">
              
              <router-link to="/section-list/resources"><button class="page_article">All resources</button></router-link>
             
              <img
                class="forward-arrow"
                src="../assets/image/forward-outline.svg"
                alt=">"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <email-card></email-card>
  <behind-news></behind-news>
</template>

<script>
// @ is an alias to /src
import RouterLinkTo from "../components/ArticleListCompon/RouterLinkTo.vue";
import EmailCard from "../components/ArticleListCompon/EmailCard.vue";
import BehindNews from "../components/ArticleListCompon/BehindNews.vue";
export default {
  components: {
    RouterLinkTo,
    EmailCard,
    BehindNews,
  },
  mounted() {
    const resource = document.querySelector(".resources");
    const science = document.querySelector(".science");
    const humanities = document.querySelector(".humanities");
    const language = document.querySelector(".language");

    [resource, science, humanities, language].forEach((el) => {
      el.childNodes[1].firstChild.classList.add("bold-font");
    });
  },
  computed: {
    article() {
      return this.$store.getters["article/articles"];
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/abstracts/_mixins.scss";
@import "../assets/styles/abstracts/_variables.scss";
@import "../assets/styles/abstracts/_functions.scss";

.border-top {
  border-top: 3px solid #232323;
}
a {
  text-decoration: none;
}

.primary {
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: repeat(4, minmax(25%, 15rem));

  // column-gap: 0.5rem;
  background-color: rgb(241, 241, 241);
  margin-top: -0.2rem; // for solid line after heading
  color: #232323;
  font-family: "Roboto", sans-serif;
  // height: 100%;

  @include respond(tab-land) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include respond(phone) {
    grid-template-columns: 1fr;
    gap: 8rem 0;
  }

  &_sub {
    justify-self: center;
    width: 90%;
    z-index: 0;

    @include respond(tab-land) {
      // max-width: 100%;
      width: 95%;
    }
    &-main {
      width: 100%;
      
    }
    &-main-card {
      background-color: rgb(255, 255, 255);
      padding: 1rem;
      // z-index: 0;
      width: 100%;

      &-grid {
        display: grid;
        grid-template-rows: repeat(4, minmax(10rem, 15vh));
        align-items: center;

        @include respond(tab-land) {
          grid-template-rows: repeat(4, minmax(7rem, 10vh));
        }
        @include respond(tab-port) {
          grid-template-rows: repeat(4, minmax(8rem, 9vh));
        }

        @include respond(phone) {
          grid-template-rows: repeat(4, minmax(5rem, 8vh));
        }
      }

      &-logo {
        display: block;
        height: 11.3rem;
        max-width: 19rem;
        margin: 0 auto;
        @include respond(tab-land) {
          width: 100%;
        }
      }
      &-header {
        text-align: center;
        color: #282828;

        font-size: 2rem;
        padding: 2rem 0;
      }
    }
  }
}
.small {
  font-size: 1rem;
  padding-top: 1rem;
  // columns: inherit;
  color: #5c5c5c;
}
.small-margin {
  margin-top: 5.4rem;
}

.science-sub-logo {
  display: block;
  margin: 0 auto;
  min-height: 16.9rem;
  max-width: 100%;

  object-fit: cover;

  @include respond(tab-land) {
    width: 80%;
    object-fit: cover;
  }
  @include respond(phone) {
    max-width: 350px;
    width: 80%;
    object-fit: cover;
  }
}
.border-middle {
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    top: 125%;
    left: 0;
    padding: 0;
    // width: 80%;
    // top: 20px;
    outline: 1px solid #e9e9e9;
    // border-bottom: 1px solid ;
    
  }
  // &:last-of-type {
  //    &::after {
  //      outline: none;
  //    }
  // }
}

.bold-font {
  font-weight: 700 !important;
  line-height: 1.5;
  font-size: 2.4rem !important;
}

// go to section article

.page {
   display: flex;
   padding: 1rem 0;
   align-items: center;
  
   
  &_article {
    background: #ffffff;
    border: none;
    outline: none;
    font-size: 1.6rem;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      color: red;
    }
   
  }
  .forward-arrow {
  width: 1.9rem;
  
   
}
}

</style>
