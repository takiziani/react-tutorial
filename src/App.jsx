import Header from "./components/Header";
import Footer from "./components/Footer";
import Food from "./components/Food";
import Button from "./button/button";
import Counter from "./counter/counter";
import Onchange from "./onchange/onchange";
import UpdateObject from "./updateObject/updateObject";
import UpdateArray from "./updateArray/updateArray";
import { createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import Home from "./pages/home";
import About from "./pages/about";
import Lists from "./pages/list";
import RootLayout from "./layout/RootLayout";
import Contact from "./contact/contact";
import ContactInfo from "./contact/contactinfo";
import ContactForm from "./contact/contactform";
import Job from "./job/job";
import { jobsloader } from "./job/jobloader";
export default function App() {
    // const router = createBrowserRouter(
    //     createRoutesFromElements(
    //         <Route path="/" element={<RootLayout />}>
    //             <Route index element={<Home />} />
    //             <Route path="/about" element={<About />} />
    //             <Route path="/contact" element={<Contact />} />
    //             <Route path="/counter" element={<Counter />} />
    //             <Route path="/food" element={<Food />} />
    //             <Route path="/onchange" element={<Onchange />} />
    //             <Route path="/updateObject" element={<UpdateObject />} />
    //             <Route path="/updateArray" element={<UpdateArray />} />
    //         </Route>
    //     )
    // )
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/lists" element={<Lists />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/food" element={<Food />} />
                <Route path="/onchange" element={<Onchange />} />
                <Route path="/updateObject" element={<UpdateObject />} />
                <Route path="/updateArray" element={<UpdateArray />} />
                <Route path="/contact" element={<Contact />} >
                    <Route path="info" element={<ContactInfo />} />
                    <Route path="form" element={<ContactForm />} />
                </Route>
                <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
            <br />
            <Button />
            <Footer />
        </>
    );
}