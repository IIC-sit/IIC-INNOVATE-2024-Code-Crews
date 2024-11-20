import React from 'react'
import { useDispatch } from 'react-redux'
import { listProducts } from '../actions/productActions'

const SortProducts = () => {
  const dispatch = useDispatch()

  const handleSort = (e) => {
    const sortOption = e.target.value
    dispatch(listProducts('', 1, '', sortOption))
  }

  return (
    <div className="mb-3">
      <select 
        onChange={handleSort}
        className="form-control"
      >
        <option value="">Sort By</option>
        <option value="price,asc">Price: Low to High</option>
        <option value="price,desc">Price: High to Low</option>
        <option value="name,asc">Name: A to Z</option>
        <option value="name,desc">Name: Z to A</option>
        <option value="rating,desc">Highest Rated</option>
      </select>
    </div>
  )
}

export default SortProducts 