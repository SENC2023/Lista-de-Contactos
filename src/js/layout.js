import React, { useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { AddContact } from "./views/addContact";
import { Contact } from "./views/contact";
import injectContext, { Context } from "./store/appContext";
import { Navbar } from "./component/navbar";

const Layout = () => {
    const { actions } = useContext(Context);

    useEffect(() => {
        actions.loadContacts();
    }, []);

    return (
        <div>
            <BrowserRouter>
                <ScrollToTop />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Contact />} />
                    <Route path="/add" element={<AddContact />} />
					<Route path="/edit/:id" element={<AddContact />} />
                    <Route path="*" element={<h1>Not found!</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
