const getBaseUrl = () => process.env.GATSBY_WP_URL?.replace('/graphql', '')

export default getBaseUrl
