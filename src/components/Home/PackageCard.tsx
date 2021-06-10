/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
interface PackageCardProps {
    image: string;
    title?: string;
    discription?: string;
    id: number;
    onVisiable: (id: number) => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ image, title, discription, id, onVisiable }) => {
    const cotainerRef = useRef<HTMLHeadingElement>(null);

    const visiableCallBack = (entries: any) => {
        const [entry] = entries;
        if (entry.intersectionRatio > 0.8) {
            onVisiable(id);
        }
    };

    const options: IntersectionObserverInit = {
        root: null,
        rootMargin: "10px",
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    };

    useEffect(() => {
        const observer = new IntersectionObserver(visiableCallBack, options);
        if (cotainerRef.current) observer.observe(cotainerRef.current);

        return () => {
            if (cotainerRef.current) observer.unobserve(cotainerRef.current);
        };
    }, [cotainerRef]);

    return (
        <div ref={cotainerRef} className="py-12 mb-2 max-w-md px-8 bg-white">
            <div className="relative rounded-3xl overflow-hidden">
                <div className="flex justify-center pt-6 left-0 right-0 absolute h-40 bg-gradient-to-b from-black to-transparent focus:outline-none ">
                    <h2 className="text-2xl font-normal text-white font-poppins ">{title}</h2>
                </div>
                <img className="object-cover" src={image} alt="cover_image" />
            </div>
            <p className="mt-6 px-2 text-justify	font-poppins text-gray-800">{discription}</p>
        </div>
    );
};
export default PackageCard;
