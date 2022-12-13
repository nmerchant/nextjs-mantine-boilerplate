// import { UserAuth } from '../context/AuthContext';
// import { useRouter } from 'next/router';
import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';

const MainContent = ({ component }) => {  
    console.log(component);
    // const 
    // const { user } = UserAuth();

    // if (!user) {

    // }

    return (
        <div className="flex flex-col w-full max-w-7xl grow p-4 !pt-0 xs:p-8 md:p-12 lg:p-16 2xl:p-0 md:pb-16">
            <main className="flex flex-col w-full max-w-7xl grow p-4 !pt-0 xs:p-8 md:p-12 lg:p-16 2xl:p-0 md:pb-16">
                <div data-name="outer-container" className="flex relative flex-col grow pt-5 mx-auto w-full text-xl content">
                    <div data-name="inner-container" className="flex relative flex-col grow pt-5 mx-auto w-full text-xl content">
                        {component}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MainContent;