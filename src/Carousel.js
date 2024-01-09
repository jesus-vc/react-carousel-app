import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

/** Carousel: displays images and arrows to navigate through them
 *
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 *
 * State:
 * - currCardIdx: integer for current card index
 *
 * App --> Carousel --> Card
 */

function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);
  const currCard = photos[currCardIdx];
  const total = photos.length;

  // Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  //Decrements currCardIdx state by 1
  function goBackward() {
    setCurrCardIdx(currCardIdx - 1);
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {currCardIdx !== 0 && ( //Option #1
          <i className="bi bi-arrow-left-circle" onClick={goBackward} />
        )}
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          className={`bi bi-arrow-right-circle ${
            //Option #2
            currCardIdx === total - 1 ? "hide-arrow" : ""
          }`}
          onClick={goForward}
        />
      </div>
    </div>
  );
}

//Option #3 - modify state of showLeftArrow and showRightArrow

// function Carousel({ photos, title }) {
//   const [currCardIdx, setCurrCardIdx] = useState(0);
//   const [showLeftArrow, setShowLeftArrow] = useState(false);
//   const [showRightArrow, setShowRightArrow] = useState(true);

//   const currCard = photos[currCardIdx];
//   const total = photos.length;

//   // Increments currCardIdx state by 1
//   function goForward() {
//     setCurrCardIdx((prevCurrCardIdx) => {
//       const newCurrCardIdx = prevCurrCardIdx + 1;

//       setShowLeftArrow(true); // Always show the left arrow when going forward

//       if (newCurrCardIdx === total - 1) {
//         setShowRightArrow(false); // Hide right arrow if at the last card
//       }

//       return newCurrCardIdx;
//     });
//   }

//   //Decrements currCardIdx state by 1
//   function goBackward() {
//     setCurrCardIdx((prevCurrCardIdx) => {
//       const newCurrCardIdx = prevCurrCardIdx - 1;

//       setShowRightArrow(true); // Always show the right arrow when going backward

//       if (newCurrCardIdx === 0) {
//         setShowLeftArrow(false); // Hide left arrow if at the first card
//       }
//       return newCurrCardIdx;
//     });
//   }

//   return (
//     <div className="Carousel">
//       <h1>{title}</h1>
//       <div className="Carousel-main">
//         {showLeftArrow && (
//           <i className="bi bi-arrow-left-circle" onClick={goBackward} />
//         )}

//         <Card
//           caption={currCard.caption}
//           src={currCard.src}
//           currNum={currCardIdx + 1}
//           totalNum={total}
//         />
//         {showRightArrow && (
//           <i className="bi bi-arrow-right-circle" onClick={goForward} />
//         )}
//       </div>
//     </div>
//   );
// }

export default Carousel;
