import OptForm from "../components/opt-form";



export default function Form(){
return (
    <OptForm>
        <OptForm.Title>Ready to watch? Enter your email to create or restart your membership.</OptForm.Title>
        <OptForm.Frame>
            <OptForm.Input type="email" placeholder="Email adresse"/>
            <OptForm.Button>Get Started {">"}</OptForm.Button>    
        </OptForm.Frame>
       
    </OptForm>
)

}