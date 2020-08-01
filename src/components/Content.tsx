import React from 'react'

type Props = {
  content: string,
  className: string
}

export const HTMLContent: React.FC<Props> = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content: React.FC<Props> = ({ content, className }) => (
  <div className={className}>{content}</div>
)

HTMLContent.propTypes = Content.propTypes

export default Content
