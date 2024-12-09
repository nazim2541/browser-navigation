import { Route, Routes } from 'react-router-dom';
import ContactAddEdit from './components/ContactAddEdit';
import ContactDetails from './components/ContactDetails';
import ContactList from "./components/ContactList";
import QuoteAddEdit from "./components/QuoteAddEdit";
import QuoteDetails from './components/QuoteDetails';
import QuoteList from "./components/QuoteList";
import UserAddEdit from "./components/UserAddEdit";
import UserDetails from "./components/UserDetails";
import UserList from "./components/UserList";
import Navbar from "./Navbar";


const AppNavigator = () => {
  return (

      <Routes>
        <Route  element={<Navbar/>}>
        <Route path="/" element={<UserList />} />
        <Route path="/userAdd" element={<UserAddEdit />} />
        <Route path="/userEdit/:id" element={<UserAddEdit />} />
        <Route path="/userDetails/:id" element={<UserDetails />} />
        <Route path="/quotes" element={<QuoteList />} />
        <Route path="/quoteAdd" element={<QuoteAddEdit />} />
        <Route path="/quoteEdit/:id" element={<QuoteAddEdit />} />
        <Route path="/quoteDetails/:id" element={<QuoteDetails />} />
        <Route path="/contact" element={<ContactList />} />
        <Route path="/contactAdd" element={<ContactAddEdit />} />
        <Route path="/contactEdit/:id" element={<ContactAddEdit />} />
        <Route path="/contactDetails/:id" element={<ContactDetails />} />
        </Route>
      </Routes>

  );
}

export default AppNavigator;
