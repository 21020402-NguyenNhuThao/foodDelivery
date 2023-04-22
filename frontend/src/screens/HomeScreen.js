import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
// import data from '../data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Chicken VNU</title>
      </Helmet>

      <div className="row justify-content-between align-items-center">
        {/* <img src="images/heroBg.png" alt="Image" /> */}
        <div class="text-column col-xl-7 col-lg-7 col-md-7 col-sm-7">
          <h1 class="homepage-section__title">What's going on Today?</h1>
          <h2 class="homepage-section__des">
            Are you looking for something to eat, let check the menu of Chicken
            VNU shop, you will find a lot of special food. Let's enjoy it!
          </h2>

          <a className="go-to-menu" href="#homeScreenTitle">
            Go to the Menu
          </a>
        </div>
        <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 d-none d-sm-block">
          <div class="chef">
            <img src="/images/chef2.png" alt="" class="chef-img" />
          </div>
        </div>
      </div>

      <h1 className="homeScreenTitle" id="homeScreenTitle">
        Featured Products
      </h1>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={5} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}
export default HomeScreen;
