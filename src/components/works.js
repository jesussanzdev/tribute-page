import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init(
    {
        duration: 2400,
    }
);


const Works = props => {
    return (
        <section>
            <div className="works center" data-aos="zoom-in-left">
                <h2>{props.Works}</h2>
                <div className="align-content">
                    <p>This list includes the primarily work published during              Wolf's lifetime:
                    </p>
                        <ul>
                            <li>The Voyage Out (26 March 1915, Duckworth; U.S. pub. by              Doran, May 1920)</li>
                            <li>Two Stories (1917)</li>
                            <li>Kew Gardens (12 May 1919)</li>
                            <li>Night and Day (20 Oct 1919, Duckworth; U.S. pub. Doran,              1920)</li>
                            <li>  
                            Monday or Tuesday (7 April 1921; U.S. pub. Harcourt Brace,          Nov. 1921)</li>
                            <li>Jacob’s Room (27 Oct 1922; U.S. pub. Harcourt Brace, 1922)</li>
                            <li>Mr. Bennett and Mrs. Brown (1923)</li>
                            <li>The Common Reader (First Series, 23 Apr 1925)</li>
                            <li>To the Lighthouse (5 May 1927)</li>
                            <li>Orlando (2 Oct 1928)</li>
                            <li>A Room of One’s Own (24 Oct 1929)</li>
                            <li>The Waves (October 1931)</li>
                            <li>The Common Reader (Second Series, 1932)</li>
                            <li>Flush (5 Oct 1933)</li>
                            <li>The Years (13 March 1937)</li>
                            <li>Three Guineas (4 June 1938)</li>
                            <li>Roger Fry (25 July 1940)</li>
                            <li>Between the Acts (17 July 1941)</li>
                            <li>A Writer’s Diary (UK 1953)</li>
                            <li>Moments of Being (US 1976, ed. Jeanne Schulkind)</li>  
                        </ul>
                </div>
            </div>
        </section>
    )
}

export default Works;
