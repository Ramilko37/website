import '@mantine/core/styles.css'
import { Flex } from '@mantine/core'
import { Header } from '../components/Header/Header'
import HeroBlock from '../components/Hero/HeroBlock'
import { Contacts } from '../components/Сontacts/Contacts'
import { ProjectsGallery } from '../components/PojectsGallery/ProjectsGallery'
import { PartnersCarousel } from '../components/PartnersCarousel/PartnersCarousel'
import { RussianMap } from '../components/RussianMap/RussianMap'
import { NewsSlider } from '../components/NewsSlider/NewsSlider'
import { useState } from 'react'
import { NewsComponent } from '../components/NewsComponent/NewsComponent'

export const HomePage = () => {
    const [isNews, setIsNews] = useState<boolean>(false)

    const handleNewsBtnClick = () => {
        setIsNews(!isNews)
    }

    return (
        <Flex
            bg={'#F8F9FB'}
            direction={'column'}
            w={'100vw'}
            gap={{ base: '90px', lg: '168px' }}
        >
            <Header isNews={isNews} handleNewsBtnClick={handleNewsBtnClick} />
            {isNews ? (
                <NewsComponent onClick={handleNewsBtnClick} />
            ) : (
                <>
                    <HeroBlock />
                    {/* <About /> */}
                    <RussianMap />
                    <ProjectsGallery />
                    <NewsSlider handleNewsBtnClick={handleNewsBtnClick} />
                    <Contacts />
                    <PartnersCarousel />
                </>
            )}
        </Flex>
    )
}
