import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./views/Dashboard";
import Products from "./views/Products";
import Addproducts from "./views/Addproducts";
import User from "./views/User";
import Slider from "./views/Slider";
import Setting from "./views/Setting";
import Coupon from "./views/Coupon";
import Addbrands from "./views/Addbrands";
import Brands from "./views/Brands";
import Categories from "./views/Categories";
import Addcategory from "./views/Addcategory";
import Orders from "./views/Orders";
import Ordertracking from "./views/Ordertracking";
import Orderdetail from "./views/Orderdetail";
import Addslide from "./views/Addslide";
import Addcoupon from "./views/Addcoupon";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addproducts" element={<Addproducts />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/addbrands" element={<Addbrands />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/addcategory" element={<Addcategory />} />
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/ordertracking" element={<Ordertracking/>}/>
        <Route path="/orderdetail" element={<Orderdetail/>}/>
        <Route path="/sliders" element={<Slider />} />
        <Route path="/addslide" element={<Addslide />} />
        <Route path="/coupons" element={<Coupon />} />
        <Route path="/addcoupons" element={<Addcoupon />} />
        <Route path="/users" element={<User />} />
        <Route path="/settings" element={<Setting />} />
      </Route>
    </Routes>
  );
}

export default App;