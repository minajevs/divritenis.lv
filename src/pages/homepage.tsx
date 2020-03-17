import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import getBlock from '../utils/getWpBlockByName'

import { HomePageByIdQuery } from '../../graphql-types'
import News from '../components/homepage/news'
import Hero from '../components/homepage/hero'

import Infocard from '../components/homepage/infocard'

type Props = {
  data: HomePageByIdQuery
}

const HomePage: React.FC<Props> = ({ data }) => {
  const { wordpressPage: page } = data

  const heroBlock = getBlock('lazyblock/hero', page?.blocks ?? null)

  return (
    <Layout>
      <div className="columns">
        <div className="column">
          <News />
        </div>
        <div className="column is-one-quarter">
          <div className="box">
            Kalendārs
          </div>
          <div className="box">
            Aptauja
          </div>
        </div>
      </div>
      <Hero
        text={heroBlock?.attrs?.text ?? ''}
        leftButtonText={heroBlock?.attrs?.left_button_text ?? ''}
        leftButtonLink={heroBlock?.attrs?.left_button_link ?? ''}
        rightButtonText={heroBlock?.attrs?.right_button_text ?? ''}
        rightButtonLink={heroBlock?.attrs?.right_button_link ?? ''}
        img={JSON.parse(decodeURI(heroBlock?.attrs?.background_image ?? ''))['url']}
      />
      <br />
      <div className="columns has-text-centered">
        <div className="column is-half">
          <Infocard
            title="Velosipēda drošība"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
            img="https://www.diabetes.co.uk/wp-content/uploads/2019/01/iStock-1002107936.jpg"
            infoUrl="/"
          />
        </div>
        <div className="column is-half">
          <div className="box">
            Velobraucēju drošība
          </div>
        </div>
      </div>
      <div className="columns has-text-centered">
        <div className="column is-half">
          <div className="box">
            Jautājumi un atbildes
          </div>
        </div>
        <div className="column is-half">
          <div className="box">
            Velosipēda drošība
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
query HomePageById($id: String) {
  wordpressPage(id: {eq: $id}) {
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
      }
    }
  }
}
`
