import { Routes, Route } from 'react-router-dom';
import { FC } from "react";

import NotFound from '@/pages/NotFound';
import { LoginRegister } from '@/pages/LoginRegister';

const AuthRouter: FC = () => {
  return (
    <Routes>
      <Route element={<LoginRegister />} path="/" />
      <Route element={<LoginRegister />} path="/login" />
      <Route element={<LoginRegister />} path="/logout" />
      <Route element={<LoginRegister />} path="/register" />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}


export default AuthRouter;