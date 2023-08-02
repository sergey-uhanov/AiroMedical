import './reset.css';
import MainePage from "./Components/MainePage";
import {BrowserRouter} from 'react-router-dom';
import RecipeDetails from "./Components/RecipeDetails";
import AppRouter from "./Components/AppRouter";
import Menu from "./Components/Menu";




function App() {


    return (
        <div>

            <BrowserRouter>
                <Menu/>
                <AppRouter/>
            </BrowserRouter>
        </div>
    );
}

export default App;
