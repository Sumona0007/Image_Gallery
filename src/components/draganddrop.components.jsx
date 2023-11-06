import React from "react";
import GalleryImages from "./galleryimages.components";

function DragDrp({
  DragDropContext,
  Droppable,
  stores,
  Draggable,
  handleCheck,
  handleDragDrop,
  handlestatus,
}) {
  return (
    /* For image reordering , dragging and dropping i am using react-beautiful-dnd where 
       have DragDropContext,Draggable,Droppable
    */
    <DragDropContext onDragEnd={handleDragDrop}>
      <div>
        <Droppable droppableId="ROOT" type="group">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {stores.map(
                (
                  store,
                  index /* Here using a map function that is use for access the DATA list*/
                ) => (
                  /*This component showing images a*/
                  <GalleryImages
                    store={store}
                    index={index}
                    Draggable={Draggable}
                    handleCheck={handleCheck}
                    handlestatus={handlestatus}
                  />
                )
              )}
              
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}
export default DragDrp;
