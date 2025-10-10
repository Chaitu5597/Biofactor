// import React, { lazy } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LayoutPage from './Pages/Layout/LayoutPage';
// // import AgriculturePage from './Components/agriculture/AgriculturePage';
// import Posters from './Components/posters/posters';
// import SeeMorePage from './Components/posters/SeeMorePage';
// import Contactus from './Components/Contactus';
// import CareerPage from './Components/career/CareerPage';
// import Largemainpage from './Components/largeAnimals/Largemainpage';
// import OurCow from './Components/largeAnimals/LargeAnimalspage/OurCow';
// import Media from './Components/media/Media';
// import RetailerPage from './Components/retailer/RetailerPage';
// import ProductPage from './Components/product/ProductPage';
// import NutrientsTabs from './Components/agriculture/nutrients_page/NutrientsTabs';
// import SecondaryNutrientsTabs from './Components/agriculture/secondary_nutrients/SecondaryNutrientsTabs';

// // Lazy load pages
// const Home = lazy(() => import('./Pages/Home'));
// const AgriculturePage = lazy(() => import('./Components/agriculture/AgriculturePage'));

// const AppRoute = () => (
//   <Router>
//     <Routes>
//       <Route path="/" element={<LayoutPage />}>
//         <Route index element={<Home />} />
//         <Route path='/Home' element={<Home />} />
//         <Route path="/agriculturePage" element={<AgriculturePage />} />
//         <Route path="/Posters" element={<Posters/>}/>
//         <Route path="/seemore" element={<SeeMorePage/>}/>
//         <Route path="/Contactus" element={<Contactus/>}/>
//         <Route path="/CareerPage" element={<CareerPage/>}/>
//         <Route path="/largemainpage" element={<Largemainpage/>}/>
//         <Route path="/OurCow" element={<OurCow/>}/>
//         <Route path="/Media" element={<Media/>}/>
//         <Route path="/Dealer" element={<RetailerPage/>}/>
//         <Route path="/products" element={<ProductPage/>}/>
//         <Route path="/elements/Primary nutrients" element={<NutrientsTabs/>}/>
//         <Route path="/elements/SecondaryNutrientsTabs" element={<SecondaryNutrientsTabs/>}/>
//         <Route path="/product" element={<ProductPage />} />
         

//       </Route>
//     </Routes>
//   </Router>
// );

// export default AppRoute;


// import React, { lazy } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import LayoutPage from './Pages/Layout/LayoutPage';
// import Posters from './Components/posters/posters';
// import SeeMorePage from './Components/posters/SeeMorePage';
// import Contactus from './Components/Contactus';
// import CareerPage from './Components/career/CareerPage';
// import Largemainpage from './Components/largeAnimals/Largemainpage';
// import OurCow from './Components/largeAnimals/LargeAnimalspage/OurCow';
// import Media from './Components/media/Media';
// import RetailerPage from './Components/retailer/RetailerPage';
// import ProductPage from './Components/product/ProductPage';
// import NutrientsTabs from './Components/agriculture/nutrients_page/NutrientsTabs';
// import SecondaryNutrientsTabs from './Components/agriculture/secondary_nutrients/SecondaryNutrientsTabs';

// // Lazy load pages
// const Home = lazy(() => import('./Pages/Home'));
// const AgriculturePage = lazy(() => import('./Components/agriculture/AgriculturePage'));

// const AppRoute = () => (
//   <Routes>
//     <Route path="/" element={<LayoutPage />}>
//       <Route index element={<Home />} />
//       <Route path="/Home" element={<Home />} />
//       <Route path="/agriculturePage" element={<AgriculturePage />} />
//       <Route path="/Posters" element={<Posters />} />
//       <Route path="/seemore" element={<SeeMorePage />} />
//       <Route path="/Contactus" element={<Contactus />} />
//       <Route path="/CareerPage" element={<CareerPage />} />
//       <Route path="/largemainpage" element={<Largemainpage />} />
//       <Route path="/OurCow" element={<OurCow />} />
//       <Route path="/Media" element={<Media />} />
//       <Route path="/Dealer" element={<RetailerPage />} />
//       <Route path="/products" element={<ProductPage />} />
//       <Route path="/elements/Primary nutrients" element={<NutrientsTabs />} />
//       <Route path="/elements/SecondaryNutrientsTabs" element={<SecondaryNutrientsTabs />} />
//       <Route path="/product" element={<ProductPage />} />
//     </Route>
//   </Routes>
// );

// export default AppRoute;


import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutPage from './Pages/Layout/LayoutPage';
import Posters from './Components/posters/posters';
import SeeMorePage from './Components/posters/SeeMorePage';
import Contactus from './Components/Contactus';
import CareerPage from './Components/career/CareerPage';
import Largemainpage from './Components/largeAnimals/Largemainpage';
import OurCow from './Components/largeAnimals/LargeAnimalspage/OurCow';
import Media from './Components/media/Media';
import RetailerPage from './Components/retailer/RetailerPage';
import ProductPage from './Components/product/ProductPage';
import NutrientsTabs from './Components/agriculture/nutrients_page/NutrientsTabs';
import SecondaryNutrientsTabs from './Components/agriculture/secondary_nutrients/SecondaryNutrientsTabs';

const Home = lazy(() => import('./Pages/Home'));
const AgriculturePage = lazy(() => import('./Components/agriculture/AgriculturePage'));

const AppRoute = () => (
  <Routes>
    <Route path="/" element={<LayoutPage />}>
      <Route index element={<Home />} />
      <Route path="Home" element={<Home />} />
      <Route path="agriculturePage" element={<AgriculturePage />} />
      <Route path="Posters" element={<Posters />} />
      <Route path="seemore" element={<SeeMorePage />} />
      <Route path="Contactus" element={<Contactus />} />
      <Route path="CareerPage" element={<CareerPage />} />
      <Route path="largemainpage" element={<Largemainpage />} />
      <Route path="OurCow" element={<OurCow />} />
      <Route path="Media" element={<Media />} />
      <Route path="Dealer" element={<RetailerPage />} />
      <Route path="products" element={<ProductPage />} />
      <Route path="elements/Primary nutrients" element={<NutrientsTabs />} />
      <Route path="elements/SecondaryNutrientsTabs" element={<SecondaryNutrientsTabs />} />
      <Route path="product" element={<ProductPage />} />
    </Route>
  </Routes>
);

export default AppRoute;
