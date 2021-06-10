import React, { useState, useEffect } from "react";
import PriceBar from "../components/Home/PriceBar";
import PackageCard from "../components/Home/PackageCard";
import Loading from "../components/Home/Loading";
import { CSSTransition } from "react-transition-group";

import wine_1 from "../assets/wine_1.jpg";
import wine_2 from "../assets/wine_2.jpg";

interface HomeProps {}

interface IClubPackages {
    name: string;
    price: string;
}

const clubPackages: IClubPackages[] = [
    { name: "Four Bottle Club", price: "300$-400$/ship" },
    { name: "Eight Bottle Club", price: "400$-500$/ship" },
    { name: "Twelve Bottle Club", price: "500$-600$/ship" },
];

const Home: React.FC<HomeProps> = ({}) => {
    const [activeCard, setActiveCard] = useState<number>(1);
    const [loading, setLoading] = useState(true);

    const onVisiable = (id: number) => {
        setActiveCard(id);
    };

    useEffect(() => {
        console.log(activeCard);
    }, [activeCard]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <div>
            <CSSTransition in={loading} timeout={{ appear: 3000, exit: 100 }} classNames="fade" unmountOnExit appear>
                <Loading />
            </CSSTransition>

            <CSSTransition in={!loading} timeout={1000} classNames="fade2" unmountOnExit>
                <div className="flex justify-center pt-10 pb-20 bg-white ">
                    <div className=" flex flex-col  bg-gray-100">
                        <div className="px-8 bg-white  max-w-xl">
                            <h1 className="text-3xl font-bold font-poppins mb-1">Pick a</h1>
                            <h1 className="text-3xl font-bold font-poppins">Membership</h1>
                        </div>
                        <PackageCard
                            discription="Ships every other month, four bottles of wine(each unique), 10% dusocunt on site, 10% siacount on
                    wine"
                            image={wine_1}
                            id={0}
                            onVisiable={onVisiable}
                            title="Four Bottle Club"
                        />

                        <PackageCard
                            discription="Ships every other month, four bottles of wine(each unique), 10% dusocunt on site, 10% siacount on
                    wine"
                            image={wine_2}
                            id={1}
                            onVisiable={onVisiable}
                            title="Eight Bottle Club"
                        />

                        <PackageCard
                            discription="Ships every other month, four bottles of wine(each unique), 10% dusocunt on site, 10% siacount on
                    wine"
                            image={wine_1}
                            id={2}
                            onVisiable={onVisiable}
                            title="Twelve Bottle Club"
                        />
                    </div>
                    <PriceBar name={clubPackages[activeCard].name} price={clubPackages[activeCard].price} />
                </div>
            </CSSTransition>
        </div>
    );
};
export default Home;
