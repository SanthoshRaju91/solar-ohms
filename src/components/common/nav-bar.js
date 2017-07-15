import { mixin as onClickOutside } from 'vue-on-click-outside'

export default {
  mixins: [onClickOutside],
  template: `
  <header class="page_header theme_header cs">
    <div class="minimized-menu">
      <div class="mlogo">
        <img src="static/img/logo-light.png" alt="Solar Ohms" width="150" height="100">
        <span class="glyphicon glyphicon-align-justify" @click="toggleMobMenu()"></span>
      </div>
      <div class="mob-menu animated" v-bind:class="animateClass" v-if="isMobMenu"  v-on-click-outside="close">

      <div class="close">
        <span class="glyphicon glyphicon-align-justify" @click="toggleMobMenu()"></span>
      </div>
      <br>
      <ul class="nav">
        <!-- home -->
        <li class="active">
          <a href="" v-on:click.stop.prevent="navigate('Home', true)">Home</a>
        </li>
        <!-- eof home -->

        <!-- solar -->
        <li>
          <a href="#" v-scroll-to="'#solar'">Why Solar</a>
        </li>
        <!-- eof solar -->

        <!-- Solutions -->
        <li>
          <a href="#" v-scroll-to="'#solution'">Solutions</a>
        </li>
        <!-- eof solutions -->

        <!-- choose -->
        <li>
          <a href="#" v-scroll-to="'#choose'">Why Choose Us</a>
        </li>
        <!-- eof choose -->

        <!-- blog -->
        <li>
          <a href="" v-on:click.stop.prevent="navigate('Blog', true)">Blog</a>
        </li>
        <!-- eof blog -->

        <!-- contacts -->
        <li>
          <a href="#" v-scroll-to="'#contact'">Contact</a>
        </li>
        <!-- eof contacts -->
      </ul>
      </div>
    </div>
    <div class="logo">
      <img src="static/img/logo-light.png" alt="Solar Ohms" width="200" height="50">
    </div>
    <div class="container">
      <div class="row mainrow">
        <div class="col-md-11">
          <!-- main nav start -->
          <nav class="mainmenu_wrapper">
            <ul class="mainmenu nav sf-menu">
              <!-- home -->
              <li class="active">
                <a href="" v-on:click.stop.prevent="navigate('Home', true)">Home</a>
              </li>
              <!-- eof home -->

              <!-- solar -->
              <li>
                <a href="#" v-scroll-to="'#solar'">Why Solar</a>
              </li>
              <!-- eof solar -->

              <!-- Solutions -->
              <li>
                <a href="#" v-scroll-to="'#solution'">Solutions</a>
              </li>
              <!-- eof solutions -->

              <!-- choose -->
              <li>
                <a href="#" v-scroll-to="'#choose'">Why Choose Us</a>
              </li>
              <!-- eof choose -->

              <!-- blog -->
              <li>
                <a href="" v-on:click.stop.prevent="navigate('Blog', true)">Blog</a>
              </li>
              <!-- eof blog -->

              <!-- contacts -->
              <li>
                <a href="#" v-scroll-to="'#contact'">Contact</a>
              </li>
              <!-- eof contacts -->
            </ul>
          </nav>
          <!-- eof main nav -->
          <span class="toggle_menu">
            <span></span>
          </span>
        </div>
      </div>
    </div>
  </header>
  `,

  data () {
    return {
      isMobMenu: false,
      animateClass: ''
    }
  },

  methods: {
    navigate (param, nav = false) {
      this.$emit('navigate', param, nav)
    },
    toggleMobMenu () {
      this.isMobMenu = !this.isMobMenu
      if (this.isMobMenu) {
        this.animateClass = 'slideInRight'
      }
    },
    close () {
      this.isMobMenu = false
      this.animateClass = 'slideOutRight'
    }
  }
}
