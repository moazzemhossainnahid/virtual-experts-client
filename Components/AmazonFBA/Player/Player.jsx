import React from 'react';
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Player = () => {
    return (
        <div className='h-full p-10'>
            <p className='text-center'>Here is my video!!</p>
            <div className="w-full w-md-75 mx-auto">
                <div className="mPlayer d-none d-md-block rounded mx-auto">
                    <ReactPlayer
                        width={"100%"}
                        height={"100%"}
                        controls
                        light={true}
                        url="https://www.youtube.com/watch?v=zohpogt56Bg"
                        playing
                        config={{
                            youtube: {
                                playerVars: {
                                    showinfo: 0,
                                    fs: 0,
                                },
                                modestbranding: 1,
                                preload: true,
                                rel: 0
                            },
                        }}
                    />
                </div>
                <div className="mPlayer2 d-block d-md-none rounded mx-auto">
                    <ReactPlayer
                        width={"100%"}
                        height={"100%"}
                        controls
                        light={true}
                        url="https://www.youtube.com/watch?v=zohpogt56Bg"
                        playing
                        config={{
                            youtube: {
                                playerVars: {
                                    showinfo: 0,
                                    fs: 0,
                                },
                                modestbranding: 1,
                                preload: true,
                                rel: 0
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Player;