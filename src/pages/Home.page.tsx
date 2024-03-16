import '@mantine/core/styles.css'
import { Flex } from '@mantine/core'
import HeroBlock from '../components/Hero/HeroBlock'
import { Contacts } from '../components/Сontacts/Contacts'
import { ProjectsGallery } from '../components/PojectsGallery/ProjectsGallery'
import { PartnersCarousel } from '../components/PartnersCarousel/PartnersCarousel'
import { RussianMap } from '../components/RussianMap/RussianMap'
import { NewsSlider } from '../components/NewsSlider/NewsSlider'
import { useState } from 'react'

export enum ProjectsGalleryType {
    Perm,
    Ufa,
    Tumen,
    Arhangelsk,
}

export const HomePage = () => {
    const [galleryType, setGalleryType] = useState<ProjectsGalleryType>(
        ProjectsGalleryType.Perm
    )
    const [isNews, setIsNews] = useState<boolean>(false)

    const handleNewsBtnClick = () => {
        setIsNews(!isNews)
    }

    const galleryTypeClickHandler = (type: ProjectsGalleryType) => {
        setGalleryType(type)
    }

    return (
        <Flex
            bg={'#F8F9FB'}
            direction={'column'}
            w={'100vw'}
            gap={{ base: '90px', lg: '90px' }}
        >
            <HeroBlock />
            <RussianMap galleryTypeClickHandler={galleryTypeClickHandler} />
            <ProjectsGallery
                galleryType={galleryType}
                galleryTypeClickHandler={galleryTypeClickHandler}
            />
            <NewsSlider handleNewsBtnClick={handleNewsBtnClick} />
            <Contacts />
            <PartnersCarousel />
        </Flex>
    )
}
