import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init(
    {
        duration: 2400,
    }
);

const Quotes = props => {
    return (
        <section>
            <div className="quotes center" data-aos="zoom-in-right">
                <h2>{props.Quotes}</h2>
                <div className="align-content">
                    <p>“As long as she thinks of a man, nobody objects to a woman thinking.” ― Virginia Woolf, Orlando</p>
                    <p>“No need to hurry. No need to sparkle. No need to be anybody but oneself.” ― Virginia Woolf, A Room of One's Own / Three                   Guineas</p>  
                    <p>“A woman must have money and a room of her own if she is to write fiction.” 
                    ― Virginia Woolf, A Room of One's Own</p>
                    <p>“Second hand books are wild books, homeless books; they have come together in vast flocks of variegated feather, and have a charm which the domesticated volumes of the library lack.” </p>
                    <p>I can only note that the past is beautiful because one never realises an emotion at the time. It expands later, and thus we don't have complete emotions about the present, only about the past.” 
                    ― Virginia Woolf</p>
                    <p>“If you do not tell the truth about yourself you cannot tell it about other people.” ― Virginia Woolf   </p>
                    <p>“The truth is, I often like women. I like their unconventionality. I like their completeness. I like their anonymity. ” ― Virginia Woolf</p>
                </div>
            </div>
        </section>
    )
}

export default Quotes;
