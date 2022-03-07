<template>
  <div>
    <h2 class="header">
      BEHIND THE NEWS
    </h2>
    <div class="behind">
      <img
        loading="lazy"
        src="https://www.thoughtco.com/thmb/JE0eluqBB-ujkSi4WF4ZXMwI4PY=/510x340/filters:no_upscale():max_bytes(150000):strip_icc()/AB65660-F-57a5b4ef3df78cf459cceae0.jpg"
        alt="thought-image"
        class="behind-image"
      />
      <div class="behind-explain">
        <h3 class="behind-explain-header">WHEN DID EID START IN BANGLADESH</h3>
        <p class="behind-explain-fulltext">
          Around the wourld, eid celebrated most sophisticatedl Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Distinctio, suscipit.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          Distinctio, suscipit. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Distinctio, suscipit. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Distinctio, suscipit. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
    <div class="last">
      <div class="last-one">
        <h5>Elementary Education</h5>
        <p>Fun and Qucik Activities and ideas</p>
      </div>
      <div class="last-two">
        <h5>
          Secondary Education
        </h5>
        <p>Natural Ability Grow up</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/abstracts/_functions.scss";
@import "../../assets/styles/abstracts/_mixins.scss";

$header-font-size: 3rem;
.header {
  display: grid;
  place-content: center;
  font-size: 3rem;
  box-sizing: border-box;
  margin: 15rem 0 8rem 0;
  // line-height: 5;
}
.behind {
  display: block;
  margin-top: 3rem;
  @media (max-width: 420px) {
    padding-bottom: 3rem;
  }
  &-image {
    display: block;
    height: 30rem;
    width: 30rem;
    margin-bottom: 2rem;
    float: left;

    clip-path: circle(50% at 50% 50%);
    -webkit-clip-path: circle(50% at 50% 50%);
    -webkit-shape-outside: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
    @include respond(tab-port) {
      height: 25rem;
      width: 25rem;
    }
    @include respond(phone) {
      height: 20rem;
      width: 20rem;
      margin-bottom: 5rem;
    }

    // &::after {
    //   content: "";
    //   clear: both;
    //   display: table;
    // }
  }
  &-explain {
    // margin-top: 5rem;
    width: 75%;
    min-height: 30rem;
    // margin: -2rem 0 0 4rem;
    transform: translate(4rem, -2rem);
    @include respond(tab-land) {
      width: 90%;
    }
    @include respond(tab-port) {
      width: 95%;
      transform: translate(2rem, -2rem);
    }

    &-header {
      font-size: 3rem;
      @include respond(tab-port) {
        font-size: 2.4rem;
      }
      &::before {
        content: "";
        position: relative;
        display: block;
        inset: 0;
        height: 2rem;
      }
    }
    &-fulltext {
      font-size: #{scaleValue(24)};
      color: rgb(59, 59, 59);
      margin-top: 3rem;
      line-height: 1.5;
      word-spacing: 1.5px;
      width: 96%;
      @include respond(tab-land) {
        font-size: 1.8rem;
      }
      @include respond(phone) {
        font-size: 1.4rem;
      }
    }
  }
}
.last {
  display: flex;
  margin-top: 7rem;
  @include respond(phone) {
    margin-left: 1.4rem;
  }
  &-one {
    margin-right: 8.5rem;
    @include respond(phone) {
      margin-right: 5rem;
    }
  }
  &-one > h5,
  &-two > h5 {
    font-size: 1.3rem;
    color: #757575;
    font-weight: 400;
    letter-spacing: 0.2;
  }
  &-one > p,
  &-two > p {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.2;
  }
}
</style>
