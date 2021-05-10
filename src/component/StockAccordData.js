import React from "react";


  function StockAccordData (){

    return (

      <>
        
        <div className="w-full">
      
         <div className="shadow-md">

            <div className="tab w-full overflow-hidden border-t">
               <input className="absolute opacity-0" id="tab-single-one" type="radio" name="tabs2"></input>
               <label className="block p-3 leading-normal cursor-pointer bg-white" for="tab-single-one">Company Summary</label>
               <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                  <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
               </div>
            </div>

            <div className="tab w-full overflow-hidden border-t">
               <input className="absolute opacity-0" id="tab-single-two" type="radio" name="tabs2"></input>
               <label className="block p-3 leading-normal cursor-pointer bg-white" for="tab-single-two">Details</label>
               <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                  <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
               </div>
            </div>
            
            <div className="tab w-full overflow-hidden border-t">
               <input className="absolute opacity-0" id="tab-single-three" type="radio" name="tabs2"></input>
               <label className="block p-3 leading-normal cursor-pointer bg-white" for="tab-single-three">Industry Classifications</label>
               <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                  <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
               </div>
            </div>

         </div>

</div>

      </>






    )

  };

  export default StockAccordData;