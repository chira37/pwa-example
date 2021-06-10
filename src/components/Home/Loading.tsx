import React from "react";

const Loading: React.FC = () => {
    return (
        <div className="flex h-screen justify-center items-center">
            <div
                className="font-poppins text-lg font-bold border-blue-400
                        bg-blue-50 border-solid border-4 w-32 h-32 rounded-3xl flex
                        flex-col items-center justify-center"
            >
                <div>
                    <p>join the</p>
                    <p>club</p>
                </div>
            </div>
        </div>
    );
};
export default Loading;
