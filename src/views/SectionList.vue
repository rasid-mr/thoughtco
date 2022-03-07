<template>
  <div class="parent">
    <div v-for="section in sectionData" :key="section.id">
      <secondary-header
        class="parent-secondary-header"
        :header="section.header"
        :typeId="type"
        :idOne="section.id"
        :image="section.imageLink"
      ></secondary-header>
      <!-- <left-sidebar class="parent-left" :typeId="type"> </left-sidebar>
      <base-card class="parent-base" :typeId="type"></base-card>
      <section-article-list
        class="parent-section-list"
        :typeId="type"
      ></section-article-list> -->
    </div>
  </div>
</template>

<script>
import SecondaryHeader from "../components/SectionListCompon/SecondaryHeader.vue";
import LeftSidebar from "../components/SectionListCompon/LeftSidebar.vue";
import BaseCard from "../components/SectionListCompon/BaseCard.vue";
import SectionArticleList from "../components/SectionListCompon/SectionArticleList.vue";

export default {
  props: ["type"],
  components: {
    SecondaryHeader,
    LeftSidebar,
    BaseCard,
    SectionArticleList,
  },
  computed: {
    sectionData() {
      return (this.selectedSection = this.$store.getters[
        "article/articles"
      ].filter((a) => a.type == this.type));
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/abstracts/_mixins.scss";
.about {
  font-size: 6rem;
  color: orangered;
  @include respond(tab-port) {
    font-size: 4rem;
    color: orchid;
  }
}
.parent {
  display: flex;
  flex-wrap: wrap;
   
  justify-content: center;
}
</style>
