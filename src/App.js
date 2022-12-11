import './App.css';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {FiSettings} from "react-icons/fi"
import {Navbar, Footer,SideBar,ThemeSettings } from "./components/Index";
import {Ecommerce,Orders, Calender, Employees, Stacked,Pyramid,Customers,Kanban,Area,Bar,Pie,Financial,ColorPicker, ColorMapping,Editor, Line} from "./pages/Index"
import { useStateContext } from './contexts/ContextProvider';

function App() {

  const {activeMenu , themeSettings , setThemeSettings , currentColor, currentMode}=useStateContext();

  return (
    <div className="App">
      <div className={currentMode === "Dark" ? "dark" : ""}>

      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>

          <div className='fixed right-4 bottom-4' style={{ zindex: "1000"}}>

            <TooltipComponent content="Settings" position="Top">

              <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background:"blue" , borderRadius:"50%"}} onClick={()=> setThemeSettings(true) }>
                <FiSettings />
              </button>

            </TooltipComponent>

          </div>

          {activeMenu? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'> 
              <SideBar/>
              </div>
          ):
          (<div className='w-0 dark:bg-secondary-dark-bg'> 
            <SideBar /> 
          </div>)
          
          }

          <div className={ `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu? "md:ml-72" : "flex-2"}`}>

            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar'>
              <Navbar />
            </div>

          <div>
            { themeSettings && <ThemeSettings />}

            <Routes>
              {/*  dashboard */}
              <Route path='/' element={<Ecommerce />} />
              <Route path='/ecommerce' element={<Ecommerce />} />

              {/*   */}
              <Route path='/orders' element={<Orders />} />
              <Route path='/employees' element={<Employees />} />
              <Route path='/customers' element={<Customers />} />

              {/*  TABS*/}

              <Route path='/kanban' element={<Kanban />} />
              <Route path='/editor' element={<Editor />} />
              <Route path='/calendar' element={<Calender />} />
              <Route path='/color-picker' element={<ColorPicker />} />

              {/* caharts */}
              <Route path='/line' element={<Line />} />
              <Route path='/area' element={<Area />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/financial' element={<Financial />} />
              <Route path='/pyramid' element={<Pyramid />} />
              <Route path='/stacked' element={<Stacked />} />
              <Route path='/color-mapping' element={<ColorMapping />} />
              <Route path='/pie' element={<Pie />} />



            </Routes>
          </div>

          </div>


        </div>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
