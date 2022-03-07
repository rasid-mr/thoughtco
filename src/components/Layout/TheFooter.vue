<template>
  <footer>
    <div class="footer">
      <div class="footer-logo">
        <h1>Thought<span class="footer-logo-sub">Co.</span></h1>
        <form @submit.prevent="formSubmit" class="footer-email-form">
          <label for="footer-email"
            ><h2 class="footer-email-header">
              Learn Something New Everyday
            </h2></label
          >
          <div class="footer-inside-form">
            <the-email
              class="width-3"
              placeholder="Enter your Email"
            ></the-email>
          </div>
        </form>
        <div class="footer-follow">
          <label for="icon" class="footer-follow-us">Follow Us</label>
          <legend class="footer-follow-social">
            <img class="footer-follow-social-facebook" src="../../assets/image/facebook-svgrepo-com.svg" alt="Facebook Logo">
            <img class="footer-follow-social-flipboard" src="../../assets/image/flipboard-svgrepo-com.svg" alt="Flipboard Logo">

          </legend>
        </div>
      </div>
      <div class="footer-section">
        <router-link to="/section-list/science" class="routerHyperLink"
          ><h2 class="footer-section_science">
            Science,Tech,Math
          </h2></router-link
        >
        <router-link to="/section-list/humanities" class="routerHyperLink">
          <h2 class="footer-section_humanities">Humanities</h2></router-link
        >
        <router-link to="/section-list/language" class="routerHyperLink">
          <h2 class="footer-section_languages">Languages</h2></router-link
        >
        <router-link to="/section-list/resources" class="routerHyperLink">
          <h2 class="footer-section_resources">Resources</h2></router-link
        >
      </div>
    </div>
    <div class="footer-dotdash">
      <h1 class="footer-dotdash-header">DotDash</h1>
      <p class="footer-dotdash-fullText">
        ThoughtCo is part of the Dotdash publishing family.
      </p>
    </div>
  </footer>
</template>

<script>
import TheEmail from "../Layout/TheEmail.vue";
export default {
  components: {
    TheEmail,
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/abstracts/_mixins.scss";
@import "../../assets/styles/abstracts/_functions.scss";
 

  

.footer-dotdash {
  padding: 2rem 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  &-header {
    font-weight: 200;
  }

  &-fullText {
    margin-top: 0.7rem;
    margin-left: 1rem;
  }
}
.routerHyperLink {
  text-decoration: none;
  color: black;
}

.footer {
  margin-top: 10rem;
  color: white;
  background-color: #333;
   
   
  min-height: 24rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @include respond(tab-port) {
    grid-template-columns: 1fr;
    min-height: auto;
    grid-template-rows: minmax(30rem, 25vh) 15rem;
    grid-auto-flow: column;
    justify-items: center;
    // width: 100%;
  }
  &-section {
    font-size: 1.2rem;
    // margin-left: #{scaleValue(60)};
    display: grid;
     
    justify-items: center;
    align-content: center;


    @include respond(tab-port) {
      // font-size: 1rem;
     
      margin: 0;
      display: grid;
      grid-auto-flow: column;
      width: 70%;
       justify-content: center;
       align-items: center;
       grid-template-columns: repeat(2, 15rem);
       grid-template-rows: repeat(2, 1fr);
       
        
    }
    
   
    & * {
      // margin-bottom: 1.2rem;
       margin:.5rem 0 .5rem 0;
      color: white;

     @include respond(tab-port) {
       margin: 0;
       
     }
    }
  }

  &-email-header {
    font-size: 2rem;
    margin: 1rem 0;
  }

  &-follow {
    margin-top: 5rem;
  }

  &-follow-social {
    display: flex;
    margin: 1rem 0;

    &-facebook {
      color: rgb(255, 255, 255);
      background-color: #344e86;
      display: flex;
      width: 4.2rem;
      height: 4.2rem;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:focus {
        background-color: #578b9e;
      }
    }
    &-flipboard {
      margin-left: 0.4rem;
      color: white;
      background-color: #cd2900;
      display: flex;
      width: 4.2rem;
      height: 4.2rem;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:focus {
        background-color: rgb(182, 5, 5);
      }
    }
  }
}
.footer-logo {
  font-size: 2.5rem;
  margin-top: 1.5rem;

  &-sub {
    color: #ffe186;
  }
}
</style>
