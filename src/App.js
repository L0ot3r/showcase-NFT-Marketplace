import React from 'react'

import {
  Download,
  SectionWrapper,
  Features, 
  Footer
} from './components'

import assets from './assets'

function App() {
  return (
    <>
      <SectionWrapper 
        title='You own store of Nifty NFTs Start Selling & Growing.'
        description='Buy, store, collect NTFs, exchange & earn crypto. Join 25+ million people using ProNef Marketplace.'
        showBtn
        mokupImg={assets.homeHero}
        banner='banner'
      />
      <SectionWrapper 
        title='Smart User Interface Marketplace'
        description='Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design.'
        mokupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title='Deployment'
        description="ProNef is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mokupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title='Creative way to showcase the store'
        description='The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT.'
        mokupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <Footer />
    </>
  )
}

export default App

