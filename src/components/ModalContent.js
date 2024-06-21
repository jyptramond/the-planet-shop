import '../style/ModalContent.css';


function ModalContent({name, apsis, price, description, cover, artistic, closeModal, simplifyPrice}) {

    function isArtisticView() {

        if (artistic) {
            return <p className='artist'>(artist's impression)</p>
        } 
    }



    return (
                <div>
                    <div 
                    onClick={closeModal}
                    className='overlay'
                    >
                    </div>
                    <div className="modal">
                        <h2>{name.toUpperCase()}</h2>
                        { isArtisticView() }
                        
                        <img src={cover} alt={`${name} cover`}></img>
                        
                        <p className='price'>Price: {simplifyPrice(price)}  ¢</p>
                        <p className="apsis">Distance from the sun: <strong>{apsis} UA</strong></p>
                        <p className='description'><i>{description}</i></p>

                        
                    </div>
                </div>
    )
}

export default ModalContent