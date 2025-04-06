"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

function Blog() {
    return (
        <main className="">
            <div className="flex flex-col gap-15 max-w-4xl mx-auto mc-10">
                <h1 className="heading">
                    <span className="text-white">My Tech   </span>
                    {/* <span className="text-white">Out  </span> */}
                    <span className="text-purple">Highlights</span>
                </h1>
            </div>
            <CardContainer className="inter-var grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* Card 1 */}
                <div className="p-2">
                    <CardBody
                        className="bg-[#000319] relative group/card 
           dark:hover:shadow-lg dark:hover:shadow-blue-900/[9.9] 
           dark:bg-[#000319] dark:border-white/[0.2] border-black/[0.1] 
           w-auto sm:w-[18rem] h-auto rounded-lg p-4 border 
           sm:transform-gpu sm:perspective-1000 hover:scale-102 
           sm:hover:translateZ-[15px]">
                        <CardItem
                            translateZ="10"
                            className="text-lg font-bold text-neutral-600 dark:text-white"
                        >
                            Techlipse
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="5"
                            className="text-neutral-500 text-xs max-w-xs mt-2 dark:text-neutral-300"
                        >
                            Hosting Techlipse at St. Xavier’s College was an unforgettable experience. I had the opportunity to lead the event, engage with the audience, and keep the energy alive throughout the sessions.
                        </CardItem>
                        <CardItem
                            translateZ="20"
                            rotateX={10}
                            rotateZ={-5}
                            className="w-full mt-4"
                        >
                            <Image
                                src="/techlipse.png"
                                height="600"
                                width="600"
                                className="h-40 w-full object-cover rounded-lg group-hover/card:shadow-md"
                                alt="Project 1"
                            />
                        </CardItem>
                        <div className="flex justify-between items-center mt-10">
                            {/* <CardItem
                            translateZ={10}
                            translateX={-10}
                            as="button"
                            className="px-3 py-1 rounded-lg text-xs font-normal dark:text-white"
                        >
                            learn more →
                        </CardItem> */}
                            <CardItem
                                translateZ={10}
                                translateX={10}
                                as="button"
                                className="px-3 py-1 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Snapshots
                            </CardItem>
                        </div>
                    </CardBody>
                </div>

                {/* Card 2 */}
                <div className="p-2">
                    <CardBody
                        className="bg-[#000319] relative group/card 
           dark:hover:shadow-lg dark:hover:shadow-blue-900/[9.9] 
           dark:bg-[#000319] dark:border-white/[0.2] border-black/[0.1] 
           w-auto sm:w-[18rem] h-auto rounded-lg p-4 border 
           sm:transform-gpu sm:perspective-1000 hover:scale-102 
           sm:hover:translateZ-[15px]">
                        <CardItem
                            translateZ="10"
                            className="text-lg font-bold text-neutral-600 dark:text-white"
                        >
                            Technotronics
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="5"
                            className="text-neutral-500 text-xs max-w-xs mt-2 dark:text-neutral-300"
                        >
                            At Technotronics, hosted by DMC College, I stepped into the competitive world of Web Development. This event tested my coding abilities and creative thinking. Collaborating with like-minded techies.
                        </CardItem>
                        <CardItem
                            translateZ="20"
                            rotateX={10}
                            rotateZ={-5}
                            className="w-full mt-4"
                        >
                            <Image
                                src="/dmc.png"
                                height="600"
                                width="600"
                                className="h-40 w-full object-cover rounded-lg group-hover/card:shadow-md"
                                alt="Project 2"
                            />
                        </CardItem>
                        <div className="flex justify-between items-center mt-10">
                            {/* <CardItem
                                translateZ={10}
                                translateX={-10}
                                as="button"
                                className="px-3 py-1 rounded-lg text-xs font-normal dark:text-white"
                            >
                                learn more →
                            </CardItem> */}
                            <CardItem
                                translateZ={10}
                                translateX={10}
                                as="button"
                                className="px-3 py-1 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Snapshots
                            </CardItem>
                        </div>
                    </CardBody>
                </div>

                {/* Add additional cards manually following the same structure */}
                {/* Card 3 */}
                <div className="p-2">
                    <CardBody
                        className="bg-[#000319] relative group/card 
           dark:hover:shadow-lg dark:hover:shadow-blue-900/[9.9] 
           dark:bg-[#000319] dark:border-white/[0.2] border-black/[0.1] 
           w-auto sm:w-[18rem] h-auto rounded-lg p-4 border 
           sm:transform-gpu sm:perspective-1000 hover:scale-102 
           sm:hover:translateZ-[15px]">
                        <CardItem
                            translateZ="10"
                            className="text-lg font-bold text-neutral-600 dark:text-white"
                        >
                            Colossus
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="5"
                            className="text-neutral-500 text-xs max-w-xs mt-2 dark:text-neutral-300"
                        >
                            Colossus was all about pushing my limits. I participated in two categories: C Programming and Business Idea Pitch. Competing at Don Bosco College, Panjim, gave me exposure to sharp minds.


                        </CardItem>
                        <CardItem
                            translateZ="20"
                            rotateX={10}
                            rotateZ={-5}
                            className="w-full mt-4"
                        >
                            <Image
                                src="/colosus.png"
                                height="600"
                                width="600"
                                className="h-40 w-full object-cover rounded-lg group-hover/card:shadow-md"
                                alt="Project 3"
                            />
                        </CardItem>
                        <div className="flex justify-between items-center mt-10">
                            {/* <CardItem
                                translateZ={10}
                                translateX={-10}
                                as="button"
                                className="px-3 py-1 rounded-lg text-xs font-normal dark:text-white"
                            >
                                learn more →
                            </CardItem> */}
                            <CardItem
                                translateZ={10}
                                translateX={10}
                                as="button"
                                className="px-3 py-1 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Snapshots
                            </CardItem>
                        </div>
                    </CardBody>
                </div>


            </CardContainer>
        </main>
    );
}

export default Blog;