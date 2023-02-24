import { FeatureContainer,Description,Title } from "./styles/feature"




export default function Feature({children, ...restProps}){

    return (<FeatureContainer {...restProps}>
                {children}
            </FeatureContainer>)
}

Feature.Title= function FeatureTitle({children, ...restProps}){

    return (<Title {...restProps}>
        {children}
    </Title>)
}

Feature.Description= function FeatureDescription({children, ...restProps}){
    
    return (<Description {...restProps}>
        {children}
    </Description>)
}