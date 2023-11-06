import React from "react";

function GalleryHeader({ handleincrement, handleDeleteClick, stores , handlestatus }) {
  return (
    <div className="navbar bg-white">
      <div class="container-fluid">
        <a class="navbar-brand">
          {(handleincrement()-handlestatus() )=== 0 ? (
            "Gallery"
          ) : (
            <div>
              <i class="bi bi-check-square-fill text-primary" />
              {handleincrement()-handlestatus()} Files Selected
            </div>
          )}
        </a>

        <button
          onClick={() =>
            handleDeleteClick(
              stores.map((store) =>
                store.selectImg ? store.id : store.selectImg
              )
            )
          }
          class="navbar-brand text-danger"
        >
          {handleincrement() === 0 ? "" : "Delete Files"}
        </button>
      </div>
    </div>
  );
}
export default GalleryHeader;
