import React, { useEffect } from 'react';

import flavor1 from '../img/drink/orange.jpg';
import flavor2 from '../img/drink/yellow.jpg';
import flavor3 from '../img/drink/pink.jpg';

import allFlavors from '../img/drink/all.jpg';

import pair1 from '../img/drink/pair1.jpg';
import pair2 from '../img/drink/pair2.jpg';

import label1 from '../img/drink/label-pink.jpg';
import label2 from '../img/drink/label-orange.jpg';
import label3 from '../img/drink/label-yellow.jpg';

const Brand = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="brand-project-container">
            {/* All Drinks image with description beside it */}
            <div className="top-section">
                <div className="all-flavors-container">
                    <img src={allFlavors} alt="All Flavors Together" />
                </div>

                <div className="brand-description">
                    <h2>Drink Branding Project</h2>
                    <h3>Non-Alcoholic Drink Branding</h3>
                    <h4>Design Brief Description</h4>
                    <p>
                        Create a new look and feel for their new non-alcoholic range. Develop a new product range of non-alcoholic cocktails in a can for people that like the taste of cocktails while keeping a clear head.
                    </p>
                </div>
            </div>

            {/* Scrolling Logo Images */}
            <div className="scrolling-logos">
                <div className="logos-track">
                    <img src={label1} alt="Pink Label" />
                    <img src={label2} alt="Orange Label" />
                    <img src={label3} alt="Yellow Label" />
                    <img src={label1} alt="Pink Label" />
                    <img src={label2} alt="Orange Label" />
                    <img src={label3} alt="Yellow Label" />
                </div>
                <div>
                    <h4>Brand Name: Mix It Up</h4>
                    <p>
                        This project showcases the branding and packaging design for a new line of refreshing drinks offered in three distinct flavors.
                        The mockups highlight individual cans, group shots, and label designs to provide a comprehensive view of the brand identity.
                    </p>
                    <p>
                        The visual approach combines vibrant colors to convey energy and appeal to a youthful audience.
                        Each flavor label was carefully crafted to maintain a cohesive brand voice while allowing for unique personality traits.
                    </p>
                </div>
            </div>

            {/* Pair Images */}
            <div className="flavor-pairs">
                <img src={pair1} alt="Pair 1" />
                <img src={pair2} alt="Pair 2" />
            </div>

            {/* Single Flavor Images */}
            <div className="single-flavors">
                <img src={flavor1} alt="Orange Flavor" />
                <img src={flavor3} alt="Pink Flavor" />
                <img src={flavor2} alt="Yellow Flavor" />
            </div>
        </section>
    );
};

export default Brand;
