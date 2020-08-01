import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import { getWpBlockByName, getWpBlocksByName } from '../utils/getWpBlockByName'

import { HomePageByIdQuery } from '../../graphql-types'
import News from '../components/homepage/news'
import Hero from '../components/homepage/hero'
import InfocardList from '../components/homepage/infocard'
import LoadableCalendar from '../components/homepage/calendar/LoadableCalendar'
import Poll from '../components/homepage/poll'

type Props = {
	data: HomePageByIdQuery
}

const HomePage: React.FC<Props> = ({ data }) => {
	const { wordpressPage: page } = data
	const heroBlock = getWpBlockByName('lazyblock/hero', page?.blocks ?? null)
	const infocardBlocks = getWpBlocksByName(
		'lazyblock/infocard',
		page?.blocks ?? null
	)

	return (
		<Layout breadcrumbs={['/', '']}>
			<div className="columns">
				<div className="column">
					<News />
				</div>
				<div className="column is-one-quarter">
					<div className="columns is-multiline">
						<div className="column is-full">
							<LoadableCalendar />
						</div>
						<div className="column is-full">
							<Poll />
						</div>
					</div>
				</div>
			</div>
			<Hero
				text={heroBlock?.attrs?.text ?? ''}
				leftButtonText={heroBlock?.attrs?.left_button_text ?? ''}
				leftButtonLink={heroBlock?.attrs?.left_button_link ?? ''}
				rightButtonText={heroBlock?.attrs?.right_button_text ?? ''}
				rightButtonLink={heroBlock?.attrs?.right_button_link ?? ''}
				img={
					JSON.parse(decodeURI(heroBlock?.attrs?.background_image ?? ''))['url']
				}
			/>
			<br />
			<InfocardList blocks={infocardBlocks} />
		</Layout>
	)
}

export default HomePage

export const pageQuery = graphql`
	query HomePageById($id: String) {
		wordpressPage(id: { eq: $id }) {
			title
			content
			blocks {
				blockName
				attrs {
					left_button_link
					left_button_text
					right_button_link
					right_button_text
					text
					background_image
					title
					image
					url
				}
			}
		}
	}
`
