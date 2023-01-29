import { ContainerPayment } from "./styled"
import { CheckoutContainer } from "./styled"
import { useNavigate } from "react-router-dom"


export default function Payment(){
    const navigate = useNavigate()

    function voltaParaHome(e){
        e.preventDefault()

        navigate("/products")
    }

    return (
        <CheckoutContainer>
            <ContainerPayment>
                <section>
                    <div>
                        <p>Pagamento concluído <ion-icon name="checkmark-sharp"></ion-icon></p>
                    </div>
                    <div>
                        <button onClick={voltaParaHome}>Voltar</button>
                    </div>
                </section>
            </ContainerPayment>
        </CheckoutContainer>
    )
}