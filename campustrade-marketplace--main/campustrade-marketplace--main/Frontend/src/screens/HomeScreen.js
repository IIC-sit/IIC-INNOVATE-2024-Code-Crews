import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import { listProducts } from '../actions/productActions'
import SortProducts from '../components/SortProducts'

const HomeScreen = () => {
  const { keyword = '', pageNumber = 1, category } = useParams()
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products = [], page, pages } = productList

  useEffect(() => {
    if (category) {
      dispatch(listProducts('', pageNumber, category))
    } else {
      dispatch(listProducts(keyword, pageNumber))
    }
  }, [dispatch, keyword, pageNumber, category])

  // Make sure to return the JSX
  return (
    <div>
      <h1>Latest Products</h1>
      <SortProducts />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products && products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </div>
  )
}

export default HomeScreen 