<template>
  <div>
    <div class="parent">
      <div>
        <div class="parent_type">
          {{ product.type  }} 
          <span>
          <img src="../assets/image/chevron-forward-outline.svg" class="parent_type-arrow" alt="forward">

          </span>
          {{ product.subtype }}
        </div>
        <h1 class="parent_header">{{ product.header }}</h1>
        <img :src="image" alt="article-hero-imgae" class="parent-image" />
        <p class="parent_date">{{ formatDate }}</p>
        <p class="parent_fulltext">{{ product.fullText }}</p>
      </div>
    </div>
    <div class="bottom">
      <div v-for="section in sectionData" :key="section.id">
        <secondary-header
          class="bottom-secondary-header"
          :header="section.header"
          :typeId="section.type"
          :idOne="section.id"
          :image="section.imageLink"
        ></secondary-header>
      </div>
    </div>

  </div>
</template>

<script>
import SecondaryHeader from "../components/SectionListCompon/SecondaryHeader.vue";
export default {
  components: {
    SecondaryHeader,
  }, 
  props: ["id"],
 
  data() {
    return {
      selectedArticle: null,
      selectedArticleSec: null,
      selectedSection: null,
    };
  },
  computed: {
    // product() {
    //   return (this.selectedArticle = this.$store.getters[
    //     "article/articles"
    //   ].find((a) => a.id == this.id));
    // },
    // header() {
    //   return this.product.header;
    // },
    comId() {
      return this.$route.params.id;
    },
    sectionData() {
      //  console.log('lost in woods');
      return (this.selectedSection = this.$store.getters[
        "article/articles"
      ].filter((a) => a.type == this.$route.query.type));
     
    },
    product() {
      
      return (this.selectedArticleSec = this.$store.getters[
        "article/articles"
      ].find((a) => a.id == this.$route.params.id));
    },
    image() {
      return this.product.imageLink;
    },
    date() {
      return new Date().toISOString();

      

 
    },
    formatDate() {
      const dateString = '2021-05-14T04:00:00Z'
       
   const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString(undefined, options)
   
    }
  },

  methods: {},
   

};
</script>

<style scoped lang="scss">
@import "../../src/assets/styles/abstracts/_functions.scss";
@import "../../src/assets/styles/abstracts/_mixins.scss";
.bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.parent {
     @include respond(phone) {
      margin-left: 2rem;
    }
  &_type {
    color: rgb(71, 71, 71);
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: underline;
    &-arrow {
     margin-top: 5rem;
    display: inline-block;
    width: 1.2rem;
    vertical-align: sub;

    }
  }
  &_header {
    font-size: 4rem;
    color: rgb(27, 27, 27);
    margin: 0 0 3rem 0;
  }
  &-image {
     display: block;
    width: #{scaleValue(800)};
    aspect-ratio: 10/9;
    object-fit: cover;
    @include respond(tab-land) {
     width: #{scaleValue(900)};
   }
   @include respond(phone) {
     width: #{scaleValue(1000)};
   }
     
  }
  &_date {
    margin-top: 4rem;
    font-size: 2rem;
    margin-bottom: .4rem;
    position: relative;
    width: fit-content;
     
    &::after {
      content: '';
    position: absolute;
    top: 100%;
    width: 100%;
    left: 0;
border-bottom: 1.8px solid rgb(110, 1, 1);
    }
  }
  &_fulltext {
    width: 70%;
    font-size: 1.8rem;
    margin-top: 5rem;
    line-height: 1.4;
    word-spacing: 1.6px;
    
       @include respond(phone) {
       width: 85%;
    }
 
  }
}

</style>
