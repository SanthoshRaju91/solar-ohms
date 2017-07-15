<template>
  <div id="app" v-bind:class="classNames">
    <nav-bar v-on:navigate="navigateTo"></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      classNames: ''
    }
  },
  methods: {
    navigateTo (param, nav) {
      if (nav) {
        this.$router.push({ name: param })
      }
    },

    scrolled () {
      if (window.scrollY > 500) {
        this.classNames = 'scrolled'
      } else {
        this.classNames = ''
      }
    }
  },

  created () {
    window.addEventListener('scroll', this.scrolled)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app .page_header_wrapper .page_header {
  width: 65%;
  float: right;
  left: auto;
  right: 0;
}

#app .page_header_wrapper .page_header .minimized-menu {
  display: none;
}

#app .page_header_wrapper .page_header .col-md-11 {
  margin: 0 auto;
  margin-left: 40px;
}


#app .page_header .logo {
  position: fixed;
  left: 0;
  margin-top: 10px;
  margin-left: 20px;
}

#app .mainmenu_wrapper {
    margin-left: 50px;
}

#app .mainmenu_wrapper li a {
  letter-spacing: 1px;
  font-size: 12px;
}

@media only screen and (min-width: 1280px)  {
  #app.scrolled .page_header_wrapper .page_header .container  {
    display: none;
  }

  #app.scrolled .page_header_wrapper .page_header .logo  {
    display: none;
  }

  #app.scrolled .page_header_wrapper .page_header {
    width: 30%;
    height: 70px;
    background: url('/static/img/menu-background.png');
    background-repeat: no-repeat;
    background-position: left;
  }
  #app.scrolled .page_header_wrapper .page_header .minimized-menu {
    display: block;
    margin-top: 10px;
  }

  #app.scrolled .page_header_wrapper .page_header .minimized-menu .mlogo {
      position: relative;
      left: 4em;
  }

  #app.scrolled .page_header_wrapper .page_header .minimized-menu .mlogo .glyphicon {
    position: relative;
    top: 10px;
    left: 15px;
    font-size: 22px;
    color: white;
    cursor: pointer;
  }

  #app .minimized-menu .mob-menu {
    height: 100vh;
    position: relative;
    top: -4em;
    right: -4em;
    z-index: 9999;
    background: black;
    width: 88%;
    background-color: #2c2c2c;
  }

  #app .minimized-menu .mob-menu .close {
      margin-right: 40px;
      margin-top: 10px;
      color: #fcca03;
      font-weight: 300 !important;
  }

  #app .minimized-menu .mob-menu li {
    margin: 10px 30px;
    padding: 5px 10px;
    border-bottom: 1px solid #fcca03;
  }
  #app .minimized-menu .mob-menu a {
    font-size: 18px;
    color: #fcca03;
  }
}
</style>
