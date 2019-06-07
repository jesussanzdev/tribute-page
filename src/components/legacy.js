import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

if (typeof window !== `undefined`) {
    AOS.init(
        {
            duration: 3000,
        }
    );  
}

const Legacy = props => {
    return (
        <section>
            <div className="legacy" data-aos="zoom-in-left" >
            <h2 className="center">{props.Legacy}</h2>
                    <p>
                            Virginia Woolf is known for her contributions to twentieth          century literature and her essays.  She is also known due            to her feminist criticism. During her lifetime, she                  spoke about controversial issues that allowed to start a            debate in later years throughout the world.
                        </p>
                        <p>
                            Woolf was also one of the most notable members of The                Bloomsbury Group. The group was famous for being one of the          first literary groups that openly supported gay rights,              women in the arts, pacifism, uninhibited sexuality and many          other social and political issues.The other members                  included Leonard Woolf, Vanessa Bell, E.M. Forster, Lytton          Strachey, Roger Fry, Clive Bell, John Maynard Keynes,                Duncan Grant and Desmond McCarthy.
                        </p>
                        <p>
                            Nowadays, the writer is studied around the world, with               organisations such as the Virginia Woolf Society, and The           Virginia Woolf Society of Japan. Although she had no                 descendants, a number of her extended family are notable in         different fields such as: literature, biology, art,                 philosophy or economy.
                    </p>
            </div>
        </section>
    )
}

export default Legacy;
