import { Container, Title, Input, Button, Frame } from "./styles/opt-form"



export default function OptForm({children,...restProps}){
    return (<Container {...restProps}>
                {children}
            </Container>)
}
OptForm.Frame=function FrameForm({ children,...restProps}){
    return (<Frame {...restProps}>{children}</Frame>)
}

OptForm.Title=function TitleForm({ children,...restProps}){
    return (<Title {...restProps}>{children}</Title>)
}

OptForm.Input=function InputForm({ ...restProps}){
    return (<Input {...restProps}/>)
}

OptForm.Button=function ButtonForm({ children,...restProps}){
    return (<Button {...restProps}>{children}</Button>)
}