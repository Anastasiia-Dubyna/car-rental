import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { lazy } from 'react';
import { Homepage } from 'pages/Homepage/Homepage';

const CarsCatalog = lazy(() => import('../../pages/CarsCatalog/CarsCatalog'));
const Favorites = lazy(() => import('../../pages/Favorites/Favorites'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/catalog" element={<CarsCatalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Homepage />} />
      </Route>
    </Routes>
  );
};
