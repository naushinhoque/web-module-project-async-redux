import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBreeds } from './Action/actions';
import dogImage from './dog1.jpg';


const App = ({ breeds, fetchBreeds }) => {
  useEffect(() => {
    fetchBreeds();
  }, [fetchBreeds]);

  return (
    <div className="dog-container">
      {breeds.map((breed, index) => (
        <div className="dog-box" key={index}>
          <img src={dogImage} alt="Dog" />
          {/* <img
            src={`https://dog.ceo/api/img/${breed}.jpg`} 
            alt={breed}
            className="dog-image"
          /> */}
          <div className="breed-name">{breed}</div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    breeds:state.breeds
  };
};

export default connect(mapStateToProps, { fetchBreeds })(App);

// import { useDispatch, useSelector } from 'react-redux';
// import { fetchBreeds } from './Action/actions'
// import './App.css';

// function App() {
//   const dispatch = useDispatch();
//   const breeds = useSelector((state) => state.breeds);

//   useEffect(() => {
//     dispatch(fetchBreeds());
//   }, [dispatch]);

//   return (
//     <div className="App">
//       {breeds.map((breed) => (
//         <div key={breed}>{breed}</div>
//       ))}
//     </div>
//   );
// }