import drawing1 from '../img/drawings/drawing1.jpg';
import drawing2 from '../img/drawings/drawing2.jpg';
import drawing3 from '../img/drawings/drawing3.jpg';
import drawing4 from '../img/drawings/drawing4.jpg';
import drawing5 from '../img/drawings/drawing5.jpg';
import drawing6 from '../img/drawings/drawing6.jpg';
import drawing7 from '../img/drawings/drawing7.jpg';
import drawing8 from '../img/drawings/drawing8.jpg';
import drawing9 from '../img/drawings/drawing9.jpg';
import drawing10 from '../img/drawings/drawing10.jpg';
import drawing11 from '../img/drawings/drawing11.jpg';
import drawing12 from '../img/drawings/drawing12.jpg';
import drawing13 from '../img/drawings/drawing13.jpg';
import drawing14 from '../img/drawings/drawing14.jpg';
import drawing15 from '../img/drawings/drawing15.jpg';
import drawing16 from '../img/drawings/drawing16.jpg';
import drawing17 from '../img/drawings/drawing17.jpg';

const drawings = [drawing1, drawing2, drawing3, drawing4, drawing5, drawing6, drawing7, drawing8, drawing9, drawing10, drawing11, drawing12, drawing13, drawing14, drawing15, drawing16, drawing17,];


const DrawingGallery = () => {
  return (
    <section className="drawing-gallery">
      <h2 className="gallery-title">Drawing 1 Gallery</h2>
      <div className="gallery-grid">
        {drawings.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt={`Drawing ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DrawingGallery;
