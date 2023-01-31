import { Route, Routes } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Layout from "./components/layout/Layout";
import Home from "./components/Home";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  </ChakraProvider>
);
