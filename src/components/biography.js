import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init(
    {
        duration: 3000,
    }
);

const Biography = props => {
    return (
        <section>
                <div className="biography" data-aos="zoom-in-right">
                    <h2 className="center">{props.Biography}</h2>
                    <p>
                        Virginia Woolf is considered one of the best of the Modernist writers. Also, the author is one of the most critical figures of the feminism due to the topics of her novels, essays and personal letters. Woolf’s                               novels were written with the stream of consciousness literary technique which focuses more on the character’s inner thoughts                   than on the plot.
                    </p>
                    <p>
                        The sudden death of her mother in 1895, when Virginia was 13, and that of her half-sister Stella two years                                     later, led to the first of Virginia's several nervous breakdowns. but it was the death of her father in 1904 provoked her                     most alarming collapse and she was briefly institutionalised. Some scholars have suggested that her mental instability was                     also due to the sexual abuse to which she and her sister Vanessa were subjected by their half-brothers George and Gerald                       Duckworth.
                    </p>
                    <p>
                        Troubled by these events for most of her life, Virginia composed her great works in bursts of manic                                     energy and with the support of her brilliant friends and family.
                        Despite her personal difficulties, Virginia Woolf's fiction represented a shift in both structure and style. The world was                     changing; literature needed to change too, if it was to properly and honestly convey the new                                                   realities.
                    </p>
                </div> 
        </section>
    )
}

export default Biography;
