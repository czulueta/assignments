import React from "react"
import { Switch, Route, Link} from "react-router-dom"
import About from "./About"
import Home from './Home'
import Services from "./Services"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./styles.css"
import ProductsList from './ProductsList';
import Product from './Product';

const App = () => {

    return (
        <>  
            <Navbar />
                <Switch>
                    <Route exact path= "/" component={Home}/>
                    <Route path= "/about" component={About}/>
                    <Route path= "/services" component={Services}/>
                    <Route exact path="/products" component={ProductsList} />
                    <Route path="/products/:_id" component={Product} />
                </Switch>
            <Footer />
        </>
    )
}
export default App