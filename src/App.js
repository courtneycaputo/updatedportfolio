import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'



function App () {
    return <div>
        <main>
        <PortfolioContainer />
        </main>
        <Footer/>
    </div>
}

library.add(fas)

export default App;
