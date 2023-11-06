import React from "react";


function GalleryImages({ store, index, handleCheck, Draggable }) {
  return (
    /*this Draggable is a part of ract-beautiful-dnd */
    <Draggable draggableId={store.id} key={store.id} index={index}>
      {(provided) => (
        <div
          className="store-container"
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          
          <div key={index}>
            <a onClick={() => handleCheck(store.id)}>
              {store.selectImg  ? 
                 
              
              (
                <i class="bi bi-square"></i>
              ) : (
                store.status ?  <i class="bi bi-check-square-fill text-primary" /> :null
               
              )
              }

              
              {store.status ? (
                
                <img
                  src={store.name}
                 
                  alt={store.id}
                  height={index === 0 ? 
                      290 :180
                   }
                  width={index === 0 ? 290 : 180}
                 
                />
              ) : null}
             
            </a>
            </div>
          </div>
        
      )}
    </Draggable>
    
  );
}
export default GalleryImages;
