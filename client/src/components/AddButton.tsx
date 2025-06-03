type AddButtonProps = {
  addButtonHandler: () => void;
}

export default function AddButton({ addButtonHandler }: AddButtonProps ) {
  return (
    <>
      <p>
        <button className="add-product-button" onClick={addButtonHandler}>
          Add A Product
        </button>
      </p>
    </>
  )
}