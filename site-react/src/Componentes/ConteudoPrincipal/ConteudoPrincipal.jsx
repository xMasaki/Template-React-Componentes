import FormContato from "../FormContato/FormContato";
import Habilidades from "../Habilidades/Habilidades";
import InfoPessoais from "../InfoPessoais/InfoPessoais";

function ConteudoPrincipal(){
    return(
        <div className="mainInfo">
            <section id="info">
                <InfoPessoais/>
                <Habilidades/>
            </section>    
            <FormContato/>
        </div>
    )
}

export default ConteudoPrincipal