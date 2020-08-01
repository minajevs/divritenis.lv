import React from 'react'

export type Props = {
	text: string
}

export const SectionTitle: React.FC<Props> = ({ text }) => {
	return <h4 className="title is-4">{text}</h4>
}

export default SectionTitle
