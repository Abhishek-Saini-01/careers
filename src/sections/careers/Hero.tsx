import Button from '@/components/Button'
import { BoxReveal } from '@/components/magicui/box-reveal'
import { SearchIcon } from 'lucide-react'
import React, { useState } from 'react'
import SearchDialog from './SearchDialog'

const Hero = () => {
    const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false)
    return (
        <section className="py-12 md:py-24 ">
            <div className="container">
                <div className="size-full max-w-2xl mx-auto items-center justify-center overflow-hidden pt-8">
                    <BoxReveal boxColor={"#5046e6"} width={"100%"} duration={0.5}>
                        <p className="text-6xl w-full text-center  font-semibold">
                            Career Navigator<span className="text-[#5046e6]">.</span>
                        </p>
                    </BoxReveal>

                    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                        <h2 className="mt-[.5rem] text-center text-[1rem]">
                            Helping you discover, explore, and achieve your ideal {" "}
                            <span className="text-[#5046e6]">career path.</span>
                        </h2>
                    </BoxReveal>

                    {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                        <div className="mt-6 text-center">
                            <p>
                                -&gt; Personalized Career Guidance: Offers tailored advice based on
                                <span className="font-semibold text-[#5046e6]"> Your Skills</span>,
                                <span className="font-semibold text-[#5046e6]"> Interests</span>,
                                and
                                <span className="font-semibold text-[#5046e6]"> Goals</span>
                                . <br />
                                -&gt; Job Search Tools and Resources: Provides resume tips, interview prep guides, and job opportunities. <br />
                            </p>
                        </div>
                    </BoxReveal> */}

                    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                        <div className='flex cursor-pointer items-center border h-14 p-1 rounded-full  justify-center  mt-[1.6rem] '>
                            <div onClick={() => setIsSearchDialogOpen(true)} className='w-full flex items-center justify-start h-full min-w-[14rem] pl-4 rounded-full  '>
                                <p className='text-gray-400'>Search Careers</p>
                            </div>
                            <Button
                                variant="primary"
                                type="submit"
                                className="whitespace-nowrap "
                                size="sm"
                                onClick={() => setIsSearchDialogOpen(true)}
                            ><SearchIcon /></Button>
                        </div>
                    </BoxReveal>
                </div>
            </div>
            <SearchDialog
                open={isSearchDialogOpen}
                onOpenChange={setIsSearchDialogOpen}
            />
        </section>
    )
}

export default Hero