import AddForm from './AddForm'
import { useState } from 'react'
import type { NewProduct } from '../types';


type ToggleableAddFormProps = {
  onSubmitProduct: (newProduct: NewProduct, reset?: () => void) => Promise<void>;
}

export default function ToggleableAddFrom({ onSubmitProduct }: ToggleableAddFormProps) {
  const [showAddButton, setShowAddButton] = useState(true);

  const handleToggleAddButton = () => {
    setShowAddButton(!showAddButton);
  }
  
  return (
    <>
      {showAddButton ? 
        (<p>
          <button className="add-product-button" onClick={handleToggleAddButton}>
            Add A Product
          </button>
        </p>) : 
        (<AddForm onToggleAddButton={handleToggleAddButton} onSubmitProduct={onSubmitProduct}/>)
      }
    </>
  )
}