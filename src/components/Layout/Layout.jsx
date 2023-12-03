import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Wrapper } from "./Layout.styled";
import { Loader } from "../Loader/Loader";

export const Layout = () => {
  return (
    <Wrapper>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
