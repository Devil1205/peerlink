"use client"
import React from 'react'
import ProjectContributor from './ProjectContributor'


const AboutUs = () => {
    const frontend_contributor = [
        "6645079c53d694699bd2a6a5",
        "6645079c53d694699bd2a6a5"
    ];

    const backend_contributor = [
        "6645079c53d694699bd2a6a5",
        "6645079c53d694699bd2a6a5"
    ];

    return (
        <div className='p-3 pl-5' >
            {/* ---- About Us --- */}
            <div className='mb-5' >
                <h1 className='text-sky-500 text-3xl underline font-bold mb-5 mt-3 after:min-w-fit after:bg-red-500' >About us</h1>
                <p className='' >
                    peerLink is an online platform that is designed to improve the connection between students and their alumnis. It has been a problem in recent years that the need for an online platform to improve the connection between students and alumnis.It is specially developed for B.Tech students of<span className='text-sky-500' >IT Department</span> to ask for guidance whether regarding academics or regarding jobs & placement.
                </p>
                <h1 className='underline text-sky-500 text-lg font-semibold mb-2 mt-3' >Our Main Goal</h1>
                <ul className='pl-5' >
                    <li className='list-decimal mt-1 mb-1' >Keeping all B.Tech, IT students under one hood including our Alumni. So that we can  organize <span className='text-sky-500' >Alumni meet</span> every year. This will allow us to be in touch with them & possibly could learn & grow.
                    </li>
                    <li className='list-decimal mt-1 mb-1' >Continuously putting efforts to make ourselves better in the field.</li>
                    <li className='list-decimal mt-1 mb-1' >Maintaining the reputations of B.Tech IT branch in the whole department.</li>
                </ul>
            </div>
            
            <div className='mb-3' >
                <h1 className='text-sky-500 text-3xl underline font-bold mb-3 mt-3 after:min-w-fit after:bg-red-500' >Our Contributors</h1>
                <p>Thanks to our team members who has been continuously putting their efforts & time to make this web application possible.</p>
                <div className='flex flex-wrap' >

                    {/* --- Frontend ---- */}
                    <ProjectContributor contributeField={"Frontend"} contributorIds={frontend_contributor} className={"lg:mr-10 mt-5 mb-5 border-l-2 border-sky-400 pl-1 md:pl-5"} />

                    {/* ---- Backend ---- */}
                    <ProjectContributor contributeField={"Backend"} contributorIds={backend_contributor} className={"lg:mr-10 mt-5 mb-5 border-l-2 border-sky-400 pl-1 md:pl-5"} />

                </div>
            </div>
        </div>
    )
}

export default AboutUs