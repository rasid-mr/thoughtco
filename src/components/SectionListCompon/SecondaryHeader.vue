<template>
  <div class="secondary">
    <div class="secondary-start">
      <div class="secondary_header">
        <span>{{ typeId }}</span>

        <router-link
          :to="{
            name: 'ArticleDetail',
            params: { id: idOne },
            query: { type: typeId },
          }"
        >
          <h1 class="secondary_header-main">{{ header }}</h1></router-link
        >
      </div>
      <div class="seconday-image">
        <!-- <p>{{ link }}</p> -->
        <img
          :src="image"
          loading="lazy"
          alt="article"
          class="secondary-image-random"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["typeId", "header", "idOne", "image"],
};
</script>

<style lang="scss" scoped>
.secondary_header {
  padding: 2rem 0;

  & span {
    text-transform: uppercase;
    color: #757575;
  }
}
.secondary_header-main {
  text-decoration: none;
  color: black;
  position: relative;
  cursor: pointer;
  width: 30rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  // border-bottom: 2px solid red;
  
   
  &::after {
   content: '';
    display: block;
    position: relative;
    margin: 0;
    padding-bottom: .5rem;
 
    border-bottom: 1px solid #E9E9E9;
    
     
  }
}
.secondary-image {
  &-random {
    display: block;
    width: 30rem;
    height: 20rem;
    object-fit: cover;
  }
}
.secondary:not(:first-child) {
  margin: 2rem;
}
.secondary {
  margin: 0 2rem 0 0;
}
</style>
