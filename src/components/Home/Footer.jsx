
import './Footer.css'

export default function Footer() {

    return (

        <>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Sobre Nós
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show   " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong><p>
                                Este site possui a hospedagem gratuíta e está em desenvolvimento para fins de estudo em programação
                            </p></strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}