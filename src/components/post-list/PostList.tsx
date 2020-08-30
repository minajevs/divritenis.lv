import React from 'react'

import { parseISO } from 'date-fns'

import Card from './Card'

import './post-list.scss'

import { PostListFieldsFragment } from 'autogenerated/graphql-types'
import { Nullable } from 'src/utils/helperTypes'

const getMobileNewsCardStyle = (index: number) =>
  index > 0 ? 'is-half-mobile' : 'is-full-mobile'

const getMobileNewsCardExcerptStyle = (index: number) =>
  index > 0 ? 'is-hidden-mobile' : ''

const getRowClass = (itemsPerRow: 3 | 4) =>
  itemsPerRow === 3 ? 'is-one-third' : 'is-one-quarter'

export type Props = {
  posts: Nullable<PostListFieldsFragment>[]
  itemsPerRow: 3 | 4
}

export const PostList: React.FC<Props> = ({ posts, itemsPerRow }) => {
  const rowClass = getRowClass(itemsPerRow)
  return (
    <div className="post-list">
      <div className="container">
        <div className="columns is-multiline is-mobile">
          {posts.map((post, i) => (
            <div
              className={`column ${rowClass} ${getMobileNewsCardStyle(i)}`}
              key={i}
            >
              <Card
                title={post?.title ?? ''}
                excerpt={post?.post_preview?.excerpt ?? ''}
                image={{
                  url: post?.post_preview?.previewImage?.sourceUrl ?? '',
                  alt: post?.post_preview?.previewImage?.altText ?? ''
                }}
                path={post?.slug ?? ''}
                date={parseISO(post?.date) ?? new Date()}
                excerptClassName={getMobileNewsCardExcerptStyle(i)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostList