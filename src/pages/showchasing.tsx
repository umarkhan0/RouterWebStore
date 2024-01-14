import DrawerAppBar from "../components/header.jsx";
import React from "react"
import SimpleBottomNavigation from "../components/bottomNav.jsx";
import { useRef, useState } from "react";
import SwipeableTextMobileStepper from "../components/carasol.js";
import ActionAreaCard from "../components/card.js";
import Footer from "../components/footer.jsx";
import { useNavigate } from "react-router-dom";
const ShowChasePage: React.FC = () => {
    const navigate =  useNavigate()
    const data =
        [
            {
                id: "1",
                image: "https://vmart.pk/wp-content/uploads/2010/12/TL-WR940N-Main.jpg",
                title: "TP-LINK TL-WR940N 450MBPS WIRELESS N ROUTER",
                price: "500"

            },
            {
                id: "2",
                image: "https://vmart.pk/wp-content/uploads/2010/12/TL-WR940N-Main.jpg",
                title: "TP-LINK TL-WR940N 450MBPS WIRELESS N ROUTER",
                price: "500"

            },
            {
                id: "3",
                image: "https://vmart.pk/wp-content/uploads/2010/12/TL-WR940N-Main.jpg",
                title: "TP-LINK TL-WR940N 450MBPS WIRELESS N ROUTER",
                price: "500"

            },
            {
                id: "4",
                image: "https://vmart.pk/wp-content/uploads/2010/12/TL-WR940N-Main.jpg",
                title: "TP-LINK TL-WR940N 450MBPS WIRELESS N ROUTER",
                price: "500"

            },
            {
                id: "5",
                image: "https://vmart.pk/wp-content/uploads/2010/12/TL-WR940N-Main.jpg",
                title: "TP-LINK TL-WR940N 450MBPS WIRELESS N ROUTER",
                price: "500"

            },
            {
                id: "6",
                image: "https://vmart.pk/wp-content/uploads/2010/12/TL-WR940N-Main.jpg",
                title: "TP-LINK TL-WR940N 450MBPS WIRELESS N ROUTER",
                price: "500"

            },
            {
                id: "7",
                image: "https://vmart.pk/wp-content/uploads/2010/12/TL-WR940N-Main.jpg",
                title: "TP-LINK TL-WR940N 450MBPS WIRELESS N ROUTER",
                price: "500"

            },
            {
                id: "8",
                image: "https://pk-live-21.slatic.net/kf/S4bfb43fb1e374f339a06d933b17b269bc.jpg",
                title: "TP-LINK TL-WR940N 450MBPS WIRELESS N ROUTER",
                price: "500"

            },
            {
                id: "9",
                image: "https://sg-test-11.slatic.net/other/roc/e4ef187305f8612cd9f444ed170c1746.jpg",
                title: "TP-LINK TL-WR940N 450MBPS WIRELESS N ROUTER",
                price: "500"

            },
            {
                id: "10",
                image: "https://sg-test-11.slatic.net/other/roc/3dae6151db68c57cd3eceff19fe09afe.jpg",
                title: "TP-LINK TL-WR940N 450MBPS WIRELESS N ROUTER",
                price: "500"

            }
        ]

    return (
        <>
            <DrawerAppBar />
            <SwipeableTextMobileStepper />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3  xl:grid-cols-4 gap-4">
                {
                    data.map((v , i) => (

                        <div onClick={() => navigate("/veiw?" + v.id)} key={i}  className="mt-2 m-1">
                        <ActionAreaCard key={i} image={v.image} title={v.title} price={v.price}  />
                    </div>
                    ))
                }
             
               
                  
               
            </div>

            <Footer />
            <SimpleBottomNavigation />

        </>
    )
};
export default ShowChasePage;