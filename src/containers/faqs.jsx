import Accordian from "../components/accordion";
import faqsData from "../fixtures/faqs";


 function FaqsContainer( {children} ){
        return(
            <Accordian>
                <Accordian.Frame>
                <Accordian.Title>Frequently Asked Questions</Accordian.Title> 
                {faqsData.map(item=>
                    (<Accordian.Item key={item.id}>
                        <Accordian.Header>{item.header}</Accordian.Header>
                        <Accordian.Body>{item.body}</Accordian.Body>
                    </Accordian.Item>))}
                </Accordian.Frame>
                {children} 
            </Accordian>
        )
}

export default FaqsContainer;
