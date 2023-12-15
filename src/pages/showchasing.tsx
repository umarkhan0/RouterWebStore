import DrawerAppBar from "../components/header.jsx";
import React from "react"
import SimpleBottomNavigation from "../components/bottomNav.jsx";
import { useRef , useState } from "react";
import SwipeableTextMobileStepper from "../components/carasol.js";
import ActionAreaCard from "../components/card.js";
import Footer from "../components/footer.jsx";
const ShowChasePage: React.FC = () => {
  
    return(
        <>
        <DrawerAppBar />
        <SwipeableTextMobileStepper />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3  xl:grid-cols-4 gap-4">
            <div className="mt-2 m-1">
    <ActionAreaCard />
    </div>
    <div className="mt-2 m-1">
    <ActionAreaCard />
    </div>
    <div className="mt-2 m-1">
    <ActionAreaCard />
    </div>
    <div className="mt-2 m-1">
    <ActionAreaCard />
    </div>
    <div className="mt-2 m-1">
    <ActionAreaCard />
    </div> <div className="mt-2 m-1">
    <ActionAreaCard />
    </div> <div className="mt-2 m-1">
    <ActionAreaCard />
    </div> <div className="mt-2 m-1">
    <ActionAreaCard />
    </div> <div className="mt-2 m-1">
    <ActionAreaCard />
    </div> <div className="mt-2 m-1">
    <ActionAreaCard />
    </div> <div className="mt-2 m-1">
    <ActionAreaCard />
    </div> <div className="mt-2 m-1">
    <ActionAreaCard />
    </div>
</div>

<Footer />
        <SimpleBottomNavigation />
       
        </>
    )
};
export default ShowChasePage;