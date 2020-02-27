import React from 'react'

import SectionTitle from '../SectionTitle'
import Card from './Card'

import './news.sass'

export type Props = {}

export const News: React.FC<Props> = ({ }) => {
    return (
        <>
            <div className="news-body">
                <div className="container">
                    <div className="columns is-multiline">
                        <div className="column is-one-third">
                            <Card title="Ar velo uz darbu brauc 9% Latvijas iedzīvotāju" />
                        </div>
                        <div className="column is-one-third">
                            <Card title="Notiks Velo forums valsts pārvaldes un pašvaldību darbiniekiem" />
                        </div>
                        <div className="column is-one-third">
                            <Card title="Uzstādot sliežu velosipēdu attīstīs bijušo šaursliežu dzelzceļa līniju Zilākalnā" />
                        </div>
                        <div className="column is-one-third">
                            <Card title="Rīgas domes priekšsēdētājs vienojas par sadarbību ar Latvijas Riteņbraucēju apvienību" />
                        </div>
                        <div className="column is-one-third">
                            <Card title="18.XI Pasākums 'Izbraucam Latvijas kontūru' Ādažos" />
                        </div>
                        <div className="column is-one-third">
                            <Card title="Aicina svinēt Ērenpreisa 128. jubileju Mazsalacā" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News