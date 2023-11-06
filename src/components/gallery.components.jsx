import GalleryHeader from "./galleryheader.components";

import DragDrp from "./draganddrop.components";
import "./gallery.css";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from "react";


const DATA = [
  {
    id: "1",
    name: "image-1.webp",
    selectImg: true,
    status: true,
    featured: true 
  },
  {
    id: "2",
    name: "image-2.webp",
    selectImg: true,
    status: true,
    featured: true 
  },
  {
    id: "3",
    name: "image-3.webp",
    selectImg: true,
    status: true,
    featured: true 
  },
  {
    id: "4",
    name: "image-4.webp",
    selectImg: true,
    status: true,
  },
  {
    id: "5",
    name: "image-5.webp",
    selectImg: true,
    status: true,
  },
  {
    id: "6",
    name: "image-6.webp",
    selectImg: true,
    status: true,
  },
  {
    id: "7",
    name: "image-7.webp",
    selectImg: true,
    status: true,
  },
  {
    id: "8",
    name: "image-8.webp",
    selectImg: true,
    status: true,
  },
  {
    id: "9",
    name: "image-9.webp",
    selectImg: true,
    status: true,
  },
  {
    id: "10",
    name: "image-10.jpeg",
    selectImg: true,
    status: true,
  },
  {
    id: "11",
    name: "image-11.jpeg",
    selectImg: true,
    status: true,
  },
];

function Gallery() {

  const [stores, setStores] = useState(DATA);
  const [selectImg] = useState(DATA);
  const [check, setCheck] = useState(DATA);

/* handleDrag and Drop  */
  const handleDragDrop = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type == "group") {
      const reordered = [...stores];

      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedStore] = reordered.splice(sourceIndex, 1);
      reordered.splice(destinationIndex, 0, removedStore);
      return setStores(reordered);
    }
  };

  /*handle navbar value increment */
  const handleincrement = () => {
    let cnt = 0;

    selectImg.forEach((img) => {
      if (img.selectImg === false) cnt++;
    });

    return cnt;
  };

  /*handle check image select */
  const handleCheck = (id) => {
    const image = check.filter((img) => {
      if (img.id === id && img.selectImg === true) {
        return { selectImg: (img.selectImg = false) };
      } else if (img.id === id && img.selectImg === false) {
        return { selectImg: (img.selectImg = true) };
      }
      return { selectImg: img.selectImg };
    });
    return setCheck(image);
  };

  /*handle Delete multiplie images */
  const handleDeleteClick = (id, selectImg) => {
    const updateImg = stores.filter((img) => {
      if (img.id === id && img.selectImg === true) {
        return { status: (img.status = true) };
      } 
      else if (img.selectImg === false) {
        return { status: (img.status = false) };
      }
      return { status: img.selectImg };
    });
    return setStores(updateImg);
  };

  /*handle which image are selected */
  const handlestatus = ()=>{
    
      let cnt = 0;
  
      selectImg.forEach((img) => {
        if (img.status === false) cnt++;
      });
  
      return cnt;
    };
  

  return (
    <>
      <div className="container custom-container">
        <div className="image-wrapper">
          <GalleryHeader
            stores={stores}
            handleincrement={handleincrement}
            handleDeleteClick={handleDeleteClick}
            handlestatus={handlestatus}
          />

          <div className="Images">
            <div>
              <DragDrp
                DragDropContext={DragDropContext}
                Droppable={Droppable}
                stores={stores}
                Draggable={Draggable}
                handleCheck={handleCheck}
                handleDragDrop={handleDragDrop}
              
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
