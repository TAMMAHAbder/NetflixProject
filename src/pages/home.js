import React from 'react'
import FooterContainer from "../containers/footer"
import Form  from "../containers/form"
import JumbotronContainer from "../containers/jumbotron"
import FaqsContainer from "../containers/faqs"
import HeaderContainer from '../containers/header'
import FeatureContainer from '../containers/featureContainer'



const Home = () => {
  return (
    (<>
            <HeaderContainer>
              <FeatureContainer />
              <Form />
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer>
              <Form />
            </FaqsContainer>
            <FooterContainer /> 
        
    </> )
  )
}

export default Home