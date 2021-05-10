//import logo from './logo.svg';
import Stock from './component/Stock';
import CompNotification from './component/CompNotification';
import PriceChart from './component/PriceChart';
import StockAccordData from './component/StockAccordData';
import CompAnalytics from './component/CompAnalytics';

import './App.css';
import './assets/output.css'


function App() {
  return (
 
    <>
    <div className="font-sans container-full bg-white p-3 md:p-5 antialiased sm:subpixel-antialiased md:antialiased">
    
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

          <div className="col-span-2">

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            
                <div className=""> <Stock></Stock> </div>
            
                <div className=""><PriceChart></PriceChart></div>

                <div class="col-start-1 col-end-3 mt-5"><StockAccordData></StockAccordData></div>

               


              
            </div> 

          </div>






  
          <div className="">
            <CompNotification></CompNotification>
            <div className="clear-both"></div>
            <CompAnalytics></CompAnalytics>

          </div>

        

    </div>
        

    </div>
    </>

       

  );
}

export default App;
