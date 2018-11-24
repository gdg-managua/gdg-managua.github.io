import { Component } from 'preact'

import Intro from './sections/intro'
import About from './sections/about'
import Newsletter from './sections/newsletter'
import Sponsor from './sections/sponsor'
import Comment from './sections/comment'
import Contact from './sections/contact'


export default class App extends Component {
  render() {
    return (
      <main id="app">
        <Intro />
        <About />
        <Newsletter />
        <Sponsor />
        <Comment />
        <Contact />
      </main>
    )
  }
}
