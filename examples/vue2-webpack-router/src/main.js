import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

const Home = { template: '<div><h2>Home Page</h2></div>' }
const About = { template: '<div><h2>About Page</h2></div>' }
const Contact = { template: '<div><h2>Contact Page</h2></div>' }
const Blog = { template: '<div><h2>Blog Page</h2></div>' }
const Courses = { template: '<div><h2>Courses Page</h2></div>' }

//testing multiple routes error
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/blog', component: Blog },
  { path: '/courses', component: Courses }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted () {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
  }
})
