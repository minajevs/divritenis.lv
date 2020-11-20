export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  hash?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'hash'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type IdQueryOperatorInput = {
  eq?: Maybe<Scalars['ID']>;
  ne?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type ImageCropFocus = 
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit = 
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat = 
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ImageLayout = 
  | 'FIXED'
  | 'FLUID'
  | 'CONSTRAINED';

export type ImagePlaceholder = 
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  transformOptions?: Maybe<TransformOptions>;
  background?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  wpContentNode?: Maybe<WpContentNode>;
  allWpContentNode: WpContentNodeConnection;
  wpBlockEditorContentNode?: Maybe<WpBlockEditorContentNode>;
  allWpBlockEditorContentNode: WpBlockEditorContentNodeConnection;
  wpTermNode?: Maybe<WpTermNode>;
  allWpTermNode: WpTermNodeConnection;
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  wpUser?: Maybe<WpUser>;
  allWpUser: WpUserConnection;
  wpNews?: Maybe<WpNews>;
  allWpNews: WpNewsConnection;
  wpContentType?: Maybe<WpContentType>;
  allWpContentType: WpContentTypeConnection;
  wpTaxonomy?: Maybe<WpTaxonomy>;
  allWpTaxonomy: WpTaxonomyConnection;
  wpMediaItem?: Maybe<WpMediaItem>;
  allWpMediaItem: WpMediaItemConnection;
  wpComment?: Maybe<WpComment>;
  allWpComment: WpCommentConnection;
  wpTag?: Maybe<WpTag>;
  allWpTag: WpTagConnection;
  wpPost?: Maybe<WpPost>;
  allWpPost: WpPostConnection;
  wpCategory?: Maybe<WpCategory>;
  allWpCategory: WpCategoryConnection;
  wpPostFormat?: Maybe<WpPostFormat>;
  allWpPostFormat: WpPostFormatConnection;
  wpBlockEditorPreview?: Maybe<WpBlockEditorPreview>;
  allWpBlockEditorPreview: WpBlockEditorPreviewConnection;
  wpPage?: Maybe<WpPage>;
  allWpPage: WpPageConnection;
  wpUserRole?: Maybe<WpUserRole>;
  allWpUserRole: WpUserRoleConnection;
  wpReusableBlock?: Maybe<WpReusableBlock>;
  allWpReusableBlock: WpReusableBlockConnection;
  wpEvent?: Maybe<WpEvent>;
  allWpEvent: WpEventConnection;
  wpMenu?: Maybe<WpMenu>;
  allWpMenu: WpMenuConnection;
  wpMenuItem?: Maybe<WpMenuItem>;
  allWpMenuItem: WpMenuItemConnection;
  wp?: Maybe<Wp>;
  allWp: WpConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryWpContentNodeArgs = {
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWpContentNodeArgs = {
  filter?: Maybe<WpContentNodeFilterInput>;
  sort?: Maybe<WpContentNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpBlockEditorContentNodeArgs = {
  blocks?: Maybe<WpBlockFilterListInput>;
  blocksJSON?: Maybe<StringQueryOperatorInput>;
  previewBlocks?: Maybe<WpBlockFilterListInput>;
  previewBlocksJSON?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWpBlockEditorContentNodeArgs = {
  filter?: Maybe<WpBlockEditorContentNodeFilterInput>;
  sort?: Maybe<WpBlockEditorContentNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpTermNodeArgs = {
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWpTermNodeArgs = {
  filter?: Maybe<WpTermNodeFilterInput>;
  sort?: Maybe<WpTermNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpUserArgs = {
  allNews?: Maybe<WpUserToNewsConnectionFilterInput>;
  avatar?: Maybe<WpAvatarFilterInput>;
  blockEditorPreviews?: Maybe<WpUserToBlockEditorPreviewConnectionFilterInput>;
  capKey?: Maybe<StringQueryOperatorInput>;
  capabilities?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpUserToCommentConnectionFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  extraCapabilities?: Maybe<StringQueryOperatorInput>;
  firstName?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastName?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nicename?: Maybe<StringQueryOperatorInput>;
  nickname?: Maybe<StringQueryOperatorInput>;
  pages?: Maybe<WpUserToPageConnectionFilterInput>;
  posts?: Maybe<WpUserToPostConnectionFilterInput>;
  registeredDate?: Maybe<StringQueryOperatorInput>;
  roles?: Maybe<WpUserToUserRoleConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpUserArgs = {
  filter?: Maybe<WpUserFilterInput>;
  sort?: Maybe<WpUserSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpNewsArgs = {
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  blocks?: Maybe<WpBlockFilterListInput>;
  blocksJSON?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<WpNewsToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  post_preview?: Maybe<WpNews_PostPreviewFilterInput>;
  previewBlocks?: Maybe<WpBlockFilterListInput>;
  previewBlocksJSON?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<WpNewsToTagConnectionFilterInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpNewsArgs = {
  filter?: Maybe<WpNewsFilterInput>;
  sort?: Maybe<WpNewsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpContentTypeArgs = {
  archivePath?: Maybe<StringQueryOperatorInput>;
  canExport?: Maybe<BooleanQueryOperatorInput>;
  connectedTaxonomies?: Maybe<WpContentTypeToTaxonomyConnectionFilterInput>;
  contentNodes?: Maybe<WpContentTypeToContentNodeConnectionFilterInput>;
  deleteWithUser?: Maybe<BooleanQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  excludeFromSearch?: Maybe<BooleanQueryOperatorInput>;
  graphqlPluralName?: Maybe<StringQueryOperatorInput>;
  graphqlSingleName?: Maybe<StringQueryOperatorInput>;
  hasArchive?: Maybe<BooleanQueryOperatorInput>;
  hierarchical?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  isFrontPage?: Maybe<BooleanQueryOperatorInput>;
  isPostsPage?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  labels?: Maybe<WpPostTypeLabelDetailsFilterInput>;
  menuIcon?: Maybe<StringQueryOperatorInput>;
  menuPosition?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  public?: Maybe<BooleanQueryOperatorInput>;
  publiclyQueryable?: Maybe<BooleanQueryOperatorInput>;
  restBase?: Maybe<StringQueryOperatorInput>;
  restControllerClass?: Maybe<StringQueryOperatorInput>;
  showInAdminBar?: Maybe<BooleanQueryOperatorInput>;
  showInGraphql?: Maybe<BooleanQueryOperatorInput>;
  showInMenu?: Maybe<BooleanQueryOperatorInput>;
  showInNavMenus?: Maybe<BooleanQueryOperatorInput>;
  showInRest?: Maybe<BooleanQueryOperatorInput>;
  showUi?: Maybe<BooleanQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpContentTypeArgs = {
  filter?: Maybe<WpContentTypeFilterInput>;
  sort?: Maybe<WpContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpTaxonomyArgs = {
  archivePath?: Maybe<StringQueryOperatorInput>;
  connectedContentTypes?: Maybe<WpTaxonomyToContentTypeConnectionFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  graphqlPluralName?: Maybe<StringQueryOperatorInput>;
  graphqlSingleName?: Maybe<StringQueryOperatorInput>;
  hierarchical?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  public?: Maybe<BooleanQueryOperatorInput>;
  restBase?: Maybe<StringQueryOperatorInput>;
  restControllerClass?: Maybe<StringQueryOperatorInput>;
  showCloud?: Maybe<BooleanQueryOperatorInput>;
  showInAdminColumn?: Maybe<BooleanQueryOperatorInput>;
  showInGraphql?: Maybe<BooleanQueryOperatorInput>;
  showInMenu?: Maybe<BooleanQueryOperatorInput>;
  showInNavMenus?: Maybe<BooleanQueryOperatorInput>;
  showInQuickEdit?: Maybe<BooleanQueryOperatorInput>;
  showInRest?: Maybe<BooleanQueryOperatorInput>;
  showUi?: Maybe<BooleanQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpTaxonomyArgs = {
  filter?: Maybe<WpTaxonomyFilterInput>;
  sort?: Maybe<WpTaxonomySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpMediaItemArgs = {
  altText?: Maybe<StringQueryOperatorInput>;
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  commentCount?: Maybe<IntQueryOperatorInput>;
  commentStatus?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpMediaItemToCommentConnectionFilterInput>;
  contentType?: Maybe<WpMediaItemToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  fileSize?: Maybe<IntQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  mediaDetails?: Maybe<WpMediaDetailsFilterInput>;
  mediaItemUrl?: Maybe<StringQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  sourceUrl?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  remoteFile?: Maybe<FileFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpMediaItemArgs = {
  filter?: Maybe<WpMediaItemFilterInput>;
  sort?: Maybe<WpMediaItemSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpCommentArgs = {
  agent?: Maybe<StringQueryOperatorInput>;
  approved?: Maybe<BooleanQueryOperatorInput>;
  author?: Maybe<WpCommentToCommenterConnectionEdgeFilterInput>;
  authorIp?: Maybe<StringQueryOperatorInput>;
  commentedOn?: Maybe<WpCommentToContentNodeConnectionEdgeFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  karma?: Maybe<IntQueryOperatorInput>;
  wpParent?: Maybe<WpCommentToParentCommentConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  replies?: Maybe<WpCommentToCommentConnectionFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpCommentArgs = {
  filter?: Maybe<WpCommentFilterInput>;
  sort?: Maybe<WpCommentSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpTagArgs = {
  allNews?: Maybe<WpTagToNewsConnectionFilterInput>;
  contentNodes?: Maybe<WpTagToContentNodeConnectionFilterInput>;
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  posts?: Maybe<WpTagToPostConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<WpTagToTaxonomyConnectionEdgeFilterInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpTagArgs = {
  filter?: Maybe<WpTagFilterInput>;
  sort?: Maybe<WpTagSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpPostArgs = {
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  blocks?: Maybe<WpBlockFilterListInput>;
  blocksJSON?: Maybe<StringQueryOperatorInput>;
  categories?: Maybe<WpPostToCategoryConnectionFilterInput>;
  commentCount?: Maybe<IntQueryOperatorInput>;
  commentStatus?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpPostToCommentConnectionFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<WpPostToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId?: Maybe<IntQueryOperatorInput>;
  featuredImageId?: Maybe<IdQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  isRevision?: Maybe<BooleanQueryOperatorInput>;
  isSticky?: Maybe<BooleanQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  pingStatus?: Maybe<StringQueryOperatorInput>;
  pinged?: Maybe<StringQueryOperatorInput>;
  postFormats?: Maybe<WpPostToPostFormatConnectionFilterInput>;
  post_preview?: Maybe<WpPost_PostPreviewFilterInput>;
  previewBlocks?: Maybe<WpBlockFilterListInput>;
  previewBlocksJSON?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<WpPostToTagConnectionFilterInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  terms?: Maybe<WpPostToTermNodeConnectionFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  toPing?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpPostArgs = {
  filter?: Maybe<WpPostFilterInput>;
  sort?: Maybe<WpPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpCategoryArgs = {
  ancestors?: Maybe<WpCategoryToAncestorsCategoryConnectionFilterInput>;
  wpChildren?: Maybe<WpCategoryToCategoryConnectionFilterInput>;
  contentNodes?: Maybe<WpCategoryToContentNodeConnectionFilterInput>;
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  wpParent?: Maybe<WpCategoryToParentCategoryConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  posts?: Maybe<WpCategoryToPostConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<WpCategoryToTaxonomyConnectionEdgeFilterInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpCategoryArgs = {
  filter?: Maybe<WpCategoryFilterInput>;
  sort?: Maybe<WpCategorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpPostFormatArgs = {
  contentNodes?: Maybe<WpPostFormatToContentNodeConnectionFilterInput>;
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  posts?: Maybe<WpPostFormatToPostConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<WpPostFormatToTaxonomyConnectionEdgeFilterInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpPostFormatArgs = {
  filter?: Maybe<WpPostFormatFilterInput>;
  sort?: Maybe<WpPostFormatSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpBlockEditorPreviewArgs = {
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  blocks?: Maybe<WpBlockFilterListInput>;
  blocksJSON?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<WpBlockEditorPreviewToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  lastUpdateTime?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  previewed?: Maybe<WpBlockEditorContentNodeFilterInput>;
  previewedDatabaseId?: Maybe<IntQueryOperatorInput>;
  previewedParentDatabaseId?: Maybe<IntQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpBlockEditorPreviewArgs = {
  filter?: Maybe<WpBlockEditorPreviewFilterInput>;
  sort?: Maybe<WpBlockEditorPreviewSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpPageArgs = {
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  blocks?: Maybe<WpBlockFilterListInput>;
  blocksJSON?: Maybe<StringQueryOperatorInput>;
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  commentCount?: Maybe<IntQueryOperatorInput>;
  commentStatus?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpPageToCommentConnectionFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<WpPageToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId?: Maybe<IntQueryOperatorInput>;
  featuredImageId?: Maybe<IdQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  isFrontPage?: Maybe<BooleanQueryOperatorInput>;
  isPostsPage?: Maybe<BooleanQueryOperatorInput>;
  isRevision?: Maybe<BooleanQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  menuOrder?: Maybe<IntQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  previewBlocks?: Maybe<WpBlockFilterListInput>;
  previewBlocksJSON?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpPageArgs = {
  filter?: Maybe<WpPageFilterInput>;
  sort?: Maybe<WpPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpUserRoleArgs = {
  capabilities?: Maybe<StringQueryOperatorInput>;
  displayName?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpUserRoleArgs = {
  filter?: Maybe<WpUserRoleFilterInput>;
  sort?: Maybe<WpUserRoleSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpReusableBlockArgs = {
  blocks?: Maybe<WpBlockFilterListInput>;
  blocksJSON?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<WpReusableBlockToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  previewBlocks?: Maybe<WpBlockFilterListInput>;
  previewBlocksJSON?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpReusableBlockArgs = {
  filter?: Maybe<WpReusableBlockFilterInput>;
  sort?: Maybe<WpReusableBlockSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpEventArgs = {
  contentType?: Maybe<WpEventToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  event?: Maybe<WpEvent_EventFilterInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpEventArgs = {
  filter?: Maybe<WpEventFilterInput>;
  sort?: Maybe<WpEventSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpMenuArgs = {
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  locations?: Maybe<WpMenuLocationEnumQueryOperatorInput>;
  menuItems?: Maybe<WpMenuToMenuItemConnectionFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpMenuArgs = {
  filter?: Maybe<WpMenuFilterInput>;
  sort?: Maybe<WpMenuSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpMenuItemArgs = {
  childItems?: Maybe<WpMenuItemToMenuItemConnectionFilterInput>;
  connectedNode?: Maybe<WpMenuItemToMenuItemLinkableConnectionEdgeFilterInput>;
  cssClasses?: Maybe<StringQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  linkRelationship?: Maybe<StringQueryOperatorInput>;
  locations?: Maybe<WpMenuLocationEnumQueryOperatorInput>;
  menu?: Maybe<WpMenuItemToMenuConnectionEdgeFilterInput>;
  order?: Maybe<IntQueryOperatorInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  target?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpMenuItemArgs = {
  filter?: Maybe<WpMenuItemFilterInput>;
  sort?: Maybe<WpMenuItemSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpArgs = {
  allSettings?: Maybe<WpSettingsFilterInput>;
  discussionSettings?: Maybe<WpDiscussionSettingsFilterInput>;
  generalSettings?: Maybe<WpGeneralSettingsFilterInput>;
  readingSettings?: Maybe<WpReadingSettingsFilterInput>;
  wpGatsby?: Maybe<WpWpGatsbyFilterInput>;
  writingSettings?: Maybe<WpWritingSettingsFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpArgs = {
  filter?: Maybe<WpFilterInput>;
  sort?: Maybe<WpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  id?: Maybe<Scalars['String']>;
  pageNumber?: Maybe<Scalars['Int']>;
  humanPageNumber?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  numberOfPages?: Maybe<Scalars['Int']>;
  previousPagePath?: Maybe<Scalars['String']>;
  nextPagePath?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  pageNumber?: Maybe<IntQueryOperatorInput>;
  humanPageNumber?: Maybe<IntQueryOperatorInput>;
  skip?: Maybe<IntQueryOperatorInput>;
  limit?: Maybe<IntQueryOperatorInput>;
  numberOfPages?: Maybe<IntQueryOperatorInput>;
  previousPagePath?: Maybe<StringQueryOperatorInput>;
  nextPagePath?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___id'
  | 'context___pageNumber'
  | 'context___humanPageNumber'
  | 'context___skip'
  | 'context___limit'
  | 'context___numberOfPages'
  | 'context___previousPagePath'
  | 'context___nextPagePath'
  | 'context___name'
  | 'context___slug'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___documentPaths'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___crossOrigin'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___indentedSyntax'
  | 'pluginCreator___pluginOptions___indentType'
  | 'pluginCreator___pluginOptions___indentWidth'
  | 'pluginCreator___pluginOptions___linefeed'
  | 'pluginCreator___pluginOptions___omitSourceMapUrl'
  | 'pluginCreator___pluginOptions___precision'
  | 'pluginCreator___pluginOptions___sourceComments'
  | 'pluginCreator___pluginOptions___sourceMapContents'
  | 'pluginCreator___pluginOptions___sourceMapEmbed'
  | 'pluginCreator___pluginOptions___cachePublic'
  | 'pluginCreator___pluginOptions___url'
  | 'pluginCreator___pluginOptions___verbose'
  | 'pluginCreator___pluginOptions___debug___timeBuildSteps'
  | 'pluginCreator___pluginOptions___debug___disableCompatibilityCheck'
  | 'pluginCreator___pluginOptions___debug___throwRefetchErrors'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___purgeOnly'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___fileName'
  | 'pluginOptions___documentPaths'
  | 'pluginOptions___name'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___crossOrigin'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___indentedSyntax'
  | 'pluginOptions___indentType'
  | 'pluginOptions___indentWidth'
  | 'pluginOptions___linefeed'
  | 'pluginOptions___omitSourceMapUrl'
  | 'pluginOptions___precision'
  | 'pluginOptions___sourceComments'
  | 'pluginOptions___sourceMapContents'
  | 'pluginOptions___sourceMapEmbed'
  | 'pluginOptions___cachePublic'
  | 'pluginOptions___url'
  | 'pluginOptions___verbose'
  | 'pluginOptions___debug___graphql___writeQueriesToDisk'
  | 'pluginOptions___debug___graphql___showQueryVarsOnError'
  | 'pluginOptions___debug___graphql___showQueryOnError'
  | 'pluginOptions___debug___graphql___copyQueryOnError'
  | 'pluginOptions___debug___graphql___panicOnError'
  | 'pluginOptions___debug___graphql___onlyReportCriticalErrors'
  | 'pluginOptions___debug___graphql___copyNodeSourcingQueryAndExit'
  | 'pluginOptions___debug___timeBuildSteps'
  | 'pluginOptions___debug___disableCompatibilityCheck'
  | 'pluginOptions___debug___throwRefetchErrors'
  | 'pluginOptions___type___Post___limit'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___purgeOnly'
  | 'pluginOptions___path'
  | 'pluginOptions___pathCheck'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  fileName?: Maybe<Scalars['String']>;
  documentPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  indentedSyntax?: Maybe<Scalars['Boolean']>;
  indentType?: Maybe<Scalars['String']>;
  indentWidth?: Maybe<Scalars['Int']>;
  linefeed?: Maybe<Scalars['String']>;
  omitSourceMapUrl?: Maybe<Scalars['Boolean']>;
  precision?: Maybe<Scalars['Int']>;
  sourceComments?: Maybe<Scalars['Boolean']>;
  sourceMapContents?: Maybe<Scalars['Boolean']>;
  sourceMapEmbed?: Maybe<Scalars['Boolean']>;
  cachePublic?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  verbose?: Maybe<Scalars['Boolean']>;
  debug?: Maybe<SitePluginPluginOptionsDebug>;
  type?: Maybe<SitePluginPluginOptionsType>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  purgeOnly?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsDebug = {
  graphql?: Maybe<SitePluginPluginOptionsDebugGraphql>;
  timeBuildSteps?: Maybe<Scalars['Boolean']>;
  disableCompatibilityCheck?: Maybe<Scalars['Boolean']>;
  throwRefetchErrors?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsDebugFilterInput = {
  graphql?: Maybe<SitePluginPluginOptionsDebugGraphqlFilterInput>;
  timeBuildSteps?: Maybe<BooleanQueryOperatorInput>;
  disableCompatibilityCheck?: Maybe<BooleanQueryOperatorInput>;
  throwRefetchErrors?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsDebugGraphql = {
  writeQueriesToDisk?: Maybe<Scalars['Boolean']>;
  showQueryVarsOnError?: Maybe<Scalars['Boolean']>;
  showQueryOnError?: Maybe<Scalars['Boolean']>;
  copyQueryOnError?: Maybe<Scalars['Boolean']>;
  panicOnError?: Maybe<Scalars['Boolean']>;
  onlyReportCriticalErrors?: Maybe<Scalars['Boolean']>;
  copyNodeSourcingQueryAndExit?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsDebugGraphqlFilterInput = {
  writeQueriesToDisk?: Maybe<BooleanQueryOperatorInput>;
  showQueryVarsOnError?: Maybe<BooleanQueryOperatorInput>;
  showQueryOnError?: Maybe<BooleanQueryOperatorInput>;
  copyQueryOnError?: Maybe<BooleanQueryOperatorInput>;
  panicOnError?: Maybe<BooleanQueryOperatorInput>;
  onlyReportCriticalErrors?: Maybe<BooleanQueryOperatorInput>;
  copyNodeSourcingQueryAndExit?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  fileName?: Maybe<StringQueryOperatorInput>;
  documentPaths?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  indentedSyntax?: Maybe<BooleanQueryOperatorInput>;
  indentType?: Maybe<StringQueryOperatorInput>;
  indentWidth?: Maybe<IntQueryOperatorInput>;
  linefeed?: Maybe<StringQueryOperatorInput>;
  omitSourceMapUrl?: Maybe<BooleanQueryOperatorInput>;
  precision?: Maybe<IntQueryOperatorInput>;
  sourceComments?: Maybe<BooleanQueryOperatorInput>;
  sourceMapContents?: Maybe<BooleanQueryOperatorInput>;
  sourceMapEmbed?: Maybe<BooleanQueryOperatorInput>;
  cachePublic?: Maybe<BooleanQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  verbose?: Maybe<BooleanQueryOperatorInput>;
  debug?: Maybe<SitePluginPluginOptionsDebugFilterInput>;
  type?: Maybe<SitePluginPluginOptionsTypeFilterInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  purgeOnly?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsType = {
  Post?: Maybe<SitePluginPluginOptionsTypePost>;
};

export type SitePluginPluginOptionsTypeFilterInput = {
  Post?: Maybe<SitePluginPluginOptionsTypePostFilterInput>;
};

export type SitePluginPluginOptionsTypePost = {
  limit?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsTypePostFilterInput = {
  limit?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

/** Non-node WPGraphQL root fields. */
export type Wp = Node & {
  /** Entry point to get all settings for the site */
  allSettings?: Maybe<WpSettings>;
  discussionSettings?: Maybe<WpDiscussionSettings>;
  generalSettings?: Maybe<WpGeneralSettings>;
  readingSettings?: Maybe<WpReadingSettings>;
  /** Information needed by gatsby-source-wordpress. */
  wpGatsby?: Maybe<WpWpGatsby>;
  writingSettings?: Maybe<WpWritingSettings>;
  nodeType?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

/** ACF Link field */
export type WpAcf_Link = {
  /** The target of the link (_blank, etc) */
  target?: Maybe<Scalars['String']>;
  /** The title of the link */
  title?: Maybe<Scalars['String']>;
  /** The url of the link */
  url?: Maybe<Scalars['String']>;
};

export type WpAcf_LinkFilterInput = {
  target?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type WpAvatar = {
  /**
   * URL for the default image or a default type. Accepts &#039;404&#039; (return a
   * 404 instead of a default image), &#039;retro&#039; (8bit),
   * &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face),
   * &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;,
   * &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039;
   * (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo).
   */
  default?: Maybe<Scalars['String']>;
  /** HTML attributes to insert in the IMG element. Is not sanitized. */
  extraAttr?: Maybe<Scalars['String']>;
  /** Whether to always show the default image, never the Gravatar. */
  forceDefault?: Maybe<Scalars['Boolean']>;
  /** Whether the avatar was successfully found. */
  foundAvatar?: Maybe<Scalars['Boolean']>;
  /** Height of the avatar image. */
  height?: Maybe<Scalars['Int']>;
  /**
   * What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;,
   * &#039;R&#039;, &#039;X&#039;, and are judged in that order.
   */
  rating?: Maybe<Scalars['String']>;
  /** Type of url scheme to use. Typically HTTP vs. HTTPS. */
  scheme?: Maybe<Scalars['String']>;
  /** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
  size?: Maybe<Scalars['Int']>;
  /** URL for the gravatar image source. */
  url?: Maybe<Scalars['String']>;
  /** Width of the avatar image. */
  width?: Maybe<Scalars['Int']>;
};

export type WpAvatarFilterInput = {
  default?: Maybe<StringQueryOperatorInput>;
  extraAttr?: Maybe<StringQueryOperatorInput>;
  forceDefault?: Maybe<BooleanQueryOperatorInput>;
  foundAvatar?: Maybe<BooleanQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  rating?: Maybe<StringQueryOperatorInput>;
  scheme?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type WpBlock = {
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpBlockEditorContentNode = {
  /** Gutenberg blocks */
  blocks?: Maybe<Array<WpBlock>>;
  /** Gutenberg blocks as json string */
  blocksJSON?: Maybe<Scalars['String']>;
  /** Previewed gutenberg blocks */
  previewBlocks?: Maybe<Array<WpBlock>>;
  /** Previewed Gutenberg blocks as json string */
  previewBlocksJSON?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
};

export type WpBlockEditorContentNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpBlockEditorContentNodeEdge>;
  nodes: Array<WpBlockEditorContentNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpBlockEditorContentNodeGroupConnection>;
};


export type WpBlockEditorContentNodeConnectionDistinctArgs = {
  field: WpBlockEditorContentNodeFieldsEnum;
};


export type WpBlockEditorContentNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpBlockEditorContentNodeFieldsEnum;
};

export type WpBlockEditorContentNodeEdge = {
  next?: Maybe<WpBlockEditorContentNode>;
  node: WpBlockEditorContentNode;
  previous?: Maybe<WpBlockEditorContentNode>;
};

export type WpBlockEditorContentNodeFieldsEnum = 
  | 'blocks'
  | 'blocks___dynamicContent'
  | 'blocks___innerBlocks'
  | 'blocks___innerBlocks___dynamicContent'
  | 'blocks___innerBlocks___innerBlocks'
  | 'blocks___innerBlocks___innerBlocks___dynamicContent'
  | 'blocks___innerBlocks___innerBlocks___innerBlocks'
  | 'blocks___innerBlocks___innerBlocks___isDynamic'
  | 'blocks___innerBlocks___innerBlocks___name'
  | 'blocks___innerBlocks___innerBlocks___order'
  | 'blocks___innerBlocks___innerBlocks___originalContent'
  | 'blocks___innerBlocks___innerBlocks___parentNodeDatabaseId'
  | 'blocks___innerBlocks___innerBlocks___saveContent'
  | 'blocks___innerBlocks___isDynamic'
  | 'blocks___innerBlocks___name'
  | 'blocks___innerBlocks___order'
  | 'blocks___innerBlocks___originalContent'
  | 'blocks___innerBlocks___parentNode___id'
  | 'blocks___innerBlocks___parentNodeDatabaseId'
  | 'blocks___innerBlocks___saveContent'
  | 'blocks___isDynamic'
  | 'blocks___name'
  | 'blocks___order'
  | 'blocks___originalContent'
  | 'blocks___parentNode___id'
  | 'blocks___parentNodeDatabaseId'
  | 'blocks___saveContent'
  | 'blocksJSON'
  | 'previewBlocks'
  | 'previewBlocks___dynamicContent'
  | 'previewBlocks___innerBlocks'
  | 'previewBlocks___innerBlocks___dynamicContent'
  | 'previewBlocks___innerBlocks___innerBlocks'
  | 'previewBlocks___innerBlocks___innerBlocks___dynamicContent'
  | 'previewBlocks___innerBlocks___innerBlocks___innerBlocks'
  | 'previewBlocks___innerBlocks___innerBlocks___isDynamic'
  | 'previewBlocks___innerBlocks___innerBlocks___name'
  | 'previewBlocks___innerBlocks___innerBlocks___order'
  | 'previewBlocks___innerBlocks___innerBlocks___originalContent'
  | 'previewBlocks___innerBlocks___innerBlocks___parentNodeDatabaseId'
  | 'previewBlocks___innerBlocks___innerBlocks___saveContent'
  | 'previewBlocks___innerBlocks___isDynamic'
  | 'previewBlocks___innerBlocks___name'
  | 'previewBlocks___innerBlocks___order'
  | 'previewBlocks___innerBlocks___originalContent'
  | 'previewBlocks___innerBlocks___parentNode___id'
  | 'previewBlocks___innerBlocks___parentNodeDatabaseId'
  | 'previewBlocks___innerBlocks___saveContent'
  | 'previewBlocks___isDynamic'
  | 'previewBlocks___name'
  | 'previewBlocks___order'
  | 'previewBlocks___originalContent'
  | 'previewBlocks___parentNode___id'
  | 'previewBlocks___parentNodeDatabaseId'
  | 'previewBlocks___saveContent'
  | 'previewBlocksJSON'
  | 'nodeType';

export type WpBlockEditorContentNodeFilterInput = {
  blocks?: Maybe<WpBlockFilterListInput>;
  blocksJSON?: Maybe<StringQueryOperatorInput>;
  previewBlocks?: Maybe<WpBlockFilterListInput>;
  previewBlocksJSON?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type WpBlockEditorContentNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpBlockEditorContentNodeEdge>;
  nodes: Array<WpBlockEditorContentNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpBlockEditorContentNodeSortInput = {
  fields?: Maybe<Array<Maybe<WpBlockEditorContentNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** The BlockEditorPreview type */
export type WpBlockEditorPreview = Node & WpNode & WpContentNode & WpDatabaseIdentifier & WpNodeWithTemplate & WpNodeWithTitle & WpNodeWithContentEditor & WpNodeWithAuthor & {
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  blocks?: Maybe<Array<WpBlock>>;
  blocksJSON?: Maybe<Scalars['String']>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the BlockEditorPreview type and the ContentType type */
  contentType?: Maybe<WpBlockEditorPreviewToContentTypeConnectionEdge>;
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  lastUpdateTime?: Maybe<Scalars['String']>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  modified?: Maybe<Scalars['Date']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['Date']>;
  previewed?: Maybe<WpBlockEditorContentNode>;
  previewedDatabaseId?: Maybe<Scalars['Int']>;
  previewedParentDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URI path for the resource */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


/** The BlockEditorPreview type */
export type WpBlockEditorPreviewDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The BlockEditorPreview type */
export type WpBlockEditorPreviewDateGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The BlockEditorPreview type */
export type WpBlockEditorPreviewModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The BlockEditorPreview type */
export type WpBlockEditorPreviewModifiedGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type WpBlockEditorPreviewConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpBlockEditorPreviewEdge>;
  nodes: Array<WpBlockEditorPreview>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpBlockEditorPreviewGroupConnection>;
};


export type WpBlockEditorPreviewConnectionDistinctArgs = {
  field: WpBlockEditorPreviewFieldsEnum;
};


export type WpBlockEditorPreviewConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpBlockEditorPreviewFieldsEnum;
};

export type WpBlockEditorPreviewEdge = {
  next?: Maybe<WpBlockEditorPreview>;
  node: WpBlockEditorPreview;
  previous?: Maybe<WpBlockEditorPreview>;
};

export type WpBlockEditorPreviewFieldsEnum = 
  | 'author___node___allNews___nodes'
  | 'author___node___avatar___default'
  | 'author___node___avatar___extraAttr'
  | 'author___node___avatar___forceDefault'
  | 'author___node___avatar___foundAvatar'
  | 'author___node___avatar___height'
  | 'author___node___avatar___rating'
  | 'author___node___avatar___scheme'
  | 'author___node___avatar___size'
  | 'author___node___avatar___url'
  | 'author___node___avatar___width'
  | 'author___node___blockEditorPreviews___nodes'
  | 'author___node___capKey'
  | 'author___node___capabilities'
  | 'author___node___comments___nodes'
  | 'author___node___databaseId'
  | 'author___node___description'
  | 'author___node___email'
  | 'author___node___extraCapabilities'
  | 'author___node___firstName'
  | 'author___node___id'
  | 'author___node___lastName'
  | 'author___node___locale'
  | 'author___node___name'
  | 'author___node___nicename'
  | 'author___node___nickname'
  | 'author___node___pages___nodes'
  | 'author___node___posts___nodes'
  | 'author___node___registeredDate'
  | 'author___node___roles___nodes'
  | 'author___node___slug'
  | 'author___node___uri'
  | 'author___node___url'
  | 'author___node___username'
  | 'author___node___nodeType'
  | 'author___node___parent___id'
  | 'author___node___parent___children'
  | 'author___node___children'
  | 'author___node___children___id'
  | 'author___node___children___children'
  | 'author___node___internal___content'
  | 'author___node___internal___contentDigest'
  | 'author___node___internal___description'
  | 'author___node___internal___fieldOwners'
  | 'author___node___internal___ignoreType'
  | 'author___node___internal___mediaType'
  | 'author___node___internal___owner'
  | 'author___node___internal___type'
  | 'authorDatabaseId'
  | 'authorId'
  | 'blocks'
  | 'blocks___dynamicContent'
  | 'blocks___innerBlocks'
  | 'blocks___innerBlocks___dynamicContent'
  | 'blocks___innerBlocks___innerBlocks'
  | 'blocks___innerBlocks___innerBlocks___dynamicContent'
  | 'blocks___innerBlocks___innerBlocks___innerBlocks'
  | 'blocks___innerBlocks___innerBlocks___isDynamic'
  | 'blocks___innerBlocks___innerBlocks___name'
  | 'blocks___innerBlocks___innerBlocks___order'
  | 'blocks___innerBlocks___innerBlocks___originalContent'
  | 'blocks___innerBlocks___innerBlocks___parentNodeDatabaseId'
  | 'blocks___innerBlocks___innerBlocks___saveContent'
  | 'blocks___innerBlocks___isDynamic'
  | 'blocks___innerBlocks___name'
  | 'blocks___innerBlocks___order'
  | 'blocks___innerBlocks___originalContent'
  | 'blocks___innerBlocks___parentNode___id'
  | 'blocks___innerBlocks___parentNodeDatabaseId'
  | 'blocks___innerBlocks___saveContent'
  | 'blocks___isDynamic'
  | 'blocks___name'
  | 'blocks___order'
  | 'blocks___originalContent'
  | 'blocks___parentNode___id'
  | 'blocks___parentNodeDatabaseId'
  | 'blocks___saveContent'
  | 'blocksJSON'
  | 'content'
  | 'contentType___node___archivePath'
  | 'contentType___node___canExport'
  | 'contentType___node___connectedTaxonomies___nodes'
  | 'contentType___node___contentNodes___nodes'
  | 'contentType___node___deleteWithUser'
  | 'contentType___node___description'
  | 'contentType___node___excludeFromSearch'
  | 'contentType___node___graphqlPluralName'
  | 'contentType___node___graphqlSingleName'
  | 'contentType___node___hasArchive'
  | 'contentType___node___hierarchical'
  | 'contentType___node___id'
  | 'contentType___node___isFrontPage'
  | 'contentType___node___isPostsPage'
  | 'contentType___node___label'
  | 'contentType___node___labels___addNew'
  | 'contentType___node___labels___addNewItem'
  | 'contentType___node___labels___allItems'
  | 'contentType___node___labels___archives'
  | 'contentType___node___labels___attributes'
  | 'contentType___node___labels___editItem'
  | 'contentType___node___labels___featuredImage'
  | 'contentType___node___labels___filterItemsList'
  | 'contentType___node___labels___insertIntoItem'
  | 'contentType___node___labels___itemsList'
  | 'contentType___node___labels___itemsListNavigation'
  | 'contentType___node___labels___menuName'
  | 'contentType___node___labels___name'
  | 'contentType___node___labels___newItem'
  | 'contentType___node___labels___notFound'
  | 'contentType___node___labels___notFoundInTrash'
  | 'contentType___node___labels___parentItemColon'
  | 'contentType___node___labels___removeFeaturedImage'
  | 'contentType___node___labels___searchItems'
  | 'contentType___node___labels___setFeaturedImage'
  | 'contentType___node___labels___singularName'
  | 'contentType___node___labels___uploadedToThisItem'
  | 'contentType___node___labels___useFeaturedImage'
  | 'contentType___node___labels___viewItem'
  | 'contentType___node___labels___viewItems'
  | 'contentType___node___menuIcon'
  | 'contentType___node___menuPosition'
  | 'contentType___node___name'
  | 'contentType___node___public'
  | 'contentType___node___publiclyQueryable'
  | 'contentType___node___restBase'
  | 'contentType___node___restControllerClass'
  | 'contentType___node___showInAdminBar'
  | 'contentType___node___showInGraphql'
  | 'contentType___node___showInMenu'
  | 'contentType___node___showInNavMenus'
  | 'contentType___node___showInRest'
  | 'contentType___node___showUi'
  | 'contentType___node___uri'
  | 'contentType___node___nodeType'
  | 'contentType___node___parent___id'
  | 'contentType___node___parent___children'
  | 'contentType___node___children'
  | 'contentType___node___children___id'
  | 'contentType___node___children___children'
  | 'contentType___node___internal___content'
  | 'contentType___node___internal___contentDigest'
  | 'contentType___node___internal___description'
  | 'contentType___node___internal___fieldOwners'
  | 'contentType___node___internal___ignoreType'
  | 'contentType___node___internal___mediaType'
  | 'contentType___node___internal___owner'
  | 'contentType___node___internal___type'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'desiredSlug'
  | 'enclosure'
  | 'guid'
  | 'id'
  | 'lastEditedBy___node___allNews___nodes'
  | 'lastEditedBy___node___avatar___default'
  | 'lastEditedBy___node___avatar___extraAttr'
  | 'lastEditedBy___node___avatar___forceDefault'
  | 'lastEditedBy___node___avatar___foundAvatar'
  | 'lastEditedBy___node___avatar___height'
  | 'lastEditedBy___node___avatar___rating'
  | 'lastEditedBy___node___avatar___scheme'
  | 'lastEditedBy___node___avatar___size'
  | 'lastEditedBy___node___avatar___url'
  | 'lastEditedBy___node___avatar___width'
  | 'lastEditedBy___node___blockEditorPreviews___nodes'
  | 'lastEditedBy___node___capKey'
  | 'lastEditedBy___node___capabilities'
  | 'lastEditedBy___node___comments___nodes'
  | 'lastEditedBy___node___databaseId'
  | 'lastEditedBy___node___description'
  | 'lastEditedBy___node___email'
  | 'lastEditedBy___node___extraCapabilities'
  | 'lastEditedBy___node___firstName'
  | 'lastEditedBy___node___id'
  | 'lastEditedBy___node___lastName'
  | 'lastEditedBy___node___locale'
  | 'lastEditedBy___node___name'
  | 'lastEditedBy___node___nicename'
  | 'lastEditedBy___node___nickname'
  | 'lastEditedBy___node___pages___nodes'
  | 'lastEditedBy___node___posts___nodes'
  | 'lastEditedBy___node___registeredDate'
  | 'lastEditedBy___node___roles___nodes'
  | 'lastEditedBy___node___slug'
  | 'lastEditedBy___node___uri'
  | 'lastEditedBy___node___url'
  | 'lastEditedBy___node___username'
  | 'lastEditedBy___node___nodeType'
  | 'lastEditedBy___node___parent___id'
  | 'lastEditedBy___node___parent___children'
  | 'lastEditedBy___node___children'
  | 'lastEditedBy___node___children___id'
  | 'lastEditedBy___node___children___children'
  | 'lastEditedBy___node___internal___content'
  | 'lastEditedBy___node___internal___contentDigest'
  | 'lastEditedBy___node___internal___description'
  | 'lastEditedBy___node___internal___fieldOwners'
  | 'lastEditedBy___node___internal___ignoreType'
  | 'lastEditedBy___node___internal___mediaType'
  | 'lastEditedBy___node___internal___owner'
  | 'lastEditedBy___node___internal___type'
  | 'lastUpdateTime'
  | 'link'
  | 'modified'
  | 'modifiedGmt'
  | 'previewed___blocks'
  | 'previewed___blocks___dynamicContent'
  | 'previewed___blocks___innerBlocks'
  | 'previewed___blocks___innerBlocks___dynamicContent'
  | 'previewed___blocks___innerBlocks___innerBlocks'
  | 'previewed___blocks___innerBlocks___isDynamic'
  | 'previewed___blocks___innerBlocks___name'
  | 'previewed___blocks___innerBlocks___order'
  | 'previewed___blocks___innerBlocks___originalContent'
  | 'previewed___blocks___innerBlocks___parentNodeDatabaseId'
  | 'previewed___blocks___innerBlocks___saveContent'
  | 'previewed___blocks___isDynamic'
  | 'previewed___blocks___name'
  | 'previewed___blocks___order'
  | 'previewed___blocks___originalContent'
  | 'previewed___blocks___parentNode___id'
  | 'previewed___blocks___parentNodeDatabaseId'
  | 'previewed___blocks___saveContent'
  | 'previewed___blocksJSON'
  | 'previewed___previewBlocks'
  | 'previewed___previewBlocks___dynamicContent'
  | 'previewed___previewBlocks___innerBlocks'
  | 'previewed___previewBlocks___innerBlocks___dynamicContent'
  | 'previewed___previewBlocks___innerBlocks___innerBlocks'
  | 'previewed___previewBlocks___innerBlocks___isDynamic'
  | 'previewed___previewBlocks___innerBlocks___name'
  | 'previewed___previewBlocks___innerBlocks___order'
  | 'previewed___previewBlocks___innerBlocks___originalContent'
  | 'previewed___previewBlocks___innerBlocks___parentNodeDatabaseId'
  | 'previewed___previewBlocks___innerBlocks___saveContent'
  | 'previewed___previewBlocks___isDynamic'
  | 'previewed___previewBlocks___name'
  | 'previewed___previewBlocks___order'
  | 'previewed___previewBlocks___originalContent'
  | 'previewed___previewBlocks___parentNode___id'
  | 'previewed___previewBlocks___parentNodeDatabaseId'
  | 'previewed___previewBlocks___saveContent'
  | 'previewed___previewBlocksJSON'
  | 'previewed___nodeType'
  | 'previewedDatabaseId'
  | 'previewedParentDatabaseId'
  | 'slug'
  | 'status'
  | 'template___templateName'
  | 'title'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpBlockEditorPreviewFilterInput = {
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  blocks?: Maybe<WpBlockFilterListInput>;
  blocksJSON?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<WpBlockEditorPreviewToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  lastUpdateTime?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  previewed?: Maybe<WpBlockEditorContentNodeFilterInput>;
  previewedDatabaseId?: Maybe<IntQueryOperatorInput>;
  previewedParentDatabaseId?: Maybe<IntQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpBlockEditorPreviewFilterListInput = {
  elemMatch?: Maybe<WpBlockEditorPreviewFilterInput>;
};

export type WpBlockEditorPreviewGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpBlockEditorPreviewEdge>;
  nodes: Array<WpBlockEditorPreview>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpBlockEditorPreviewSortInput = {
  fields?: Maybe<Array<Maybe<WpBlockEditorPreviewFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the BlockEditorPreview type and the ContentType type */
export type WpBlockEditorPreviewToContentTypeConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpContentType>;
};

export type WpBlockEditorPreviewToContentTypeConnectionEdgeFilterInput = {
  node?: Maybe<WpContentTypeFilterInput>;
};

export type WpBlockFilterInput = {
  dynamicContent?: Maybe<StringQueryOperatorInput>;
  innerBlocks?: Maybe<WpBlockFilterListInput>;
  isDynamic?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
  originalContent?: Maybe<StringQueryOperatorInput>;
  parentNode?: Maybe<WpNodeFilterInput>;
  parentNodeDatabaseId?: Maybe<IntQueryOperatorInput>;
  saveContent?: Maybe<StringQueryOperatorInput>;
};

export type WpBlockFilterListInput = {
  elemMatch?: Maybe<WpBlockFilterInput>;
};

/** The category type */
export type WpCategory = Node & WpNode & WpTermNode & WpDatabaseIdentifier & WpUniformResourceIdentifiable & WpHierarchicalTermNode & WpMenuItemLinkable & {
  /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<WpCategoryToAncestorsCategoryConnection>;
  /** Connection between the category type and the category type */
  wpChildren?: Maybe<WpCategoryToCategoryConnection>;
  /** Connection between the category type and the ContentNode type */
  contentNodes?: Maybe<WpCategoryToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the category type and the category type */
  wpParent?: Maybe<WpCategoryToParentCategoryConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Connection between the category type and the post type */
  posts?: Maybe<WpCategoryToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the category type and the Taxonomy type */
  taxonomy?: Maybe<WpCategoryToTaxonomyConnectionEdge>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpCategoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpCategoryEdge>;
  nodes: Array<WpCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpCategoryGroupConnection>;
};


export type WpCategoryConnectionDistinctArgs = {
  field: WpCategoryFieldsEnum;
};


export type WpCategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpCategoryFieldsEnum;
};

export type WpCategoryEdge = {
  next?: Maybe<WpCategory>;
  node: WpCategory;
  previous?: Maybe<WpCategory>;
};

export type WpCategoryFieldsEnum = 
  | 'ancestors___nodes'
  | 'ancestors___nodes___ancestors___nodes'
  | 'ancestors___nodes___wpChildren___nodes'
  | 'ancestors___nodes___contentNodes___nodes'
  | 'ancestors___nodes___count'
  | 'ancestors___nodes___databaseId'
  | 'ancestors___nodes___description'
  | 'ancestors___nodes___id'
  | 'ancestors___nodes___link'
  | 'ancestors___nodes___name'
  | 'ancestors___nodes___parentDatabaseId'
  | 'ancestors___nodes___parentId'
  | 'ancestors___nodes___posts___nodes'
  | 'ancestors___nodes___slug'
  | 'ancestors___nodes___termGroupId'
  | 'ancestors___nodes___termTaxonomyId'
  | 'ancestors___nodes___uri'
  | 'ancestors___nodes___nodeType'
  | 'ancestors___nodes___parent___id'
  | 'ancestors___nodes___parent___children'
  | 'ancestors___nodes___children'
  | 'ancestors___nodes___children___id'
  | 'ancestors___nodes___children___children'
  | 'ancestors___nodes___internal___content'
  | 'ancestors___nodes___internal___contentDigest'
  | 'ancestors___nodes___internal___description'
  | 'ancestors___nodes___internal___fieldOwners'
  | 'ancestors___nodes___internal___ignoreType'
  | 'ancestors___nodes___internal___mediaType'
  | 'ancestors___nodes___internal___owner'
  | 'ancestors___nodes___internal___type'
  | 'wpChildren___nodes'
  | 'wpChildren___nodes___ancestors___nodes'
  | 'wpChildren___nodes___wpChildren___nodes'
  | 'wpChildren___nodes___contentNodes___nodes'
  | 'wpChildren___nodes___count'
  | 'wpChildren___nodes___databaseId'
  | 'wpChildren___nodes___description'
  | 'wpChildren___nodes___id'
  | 'wpChildren___nodes___link'
  | 'wpChildren___nodes___name'
  | 'wpChildren___nodes___parentDatabaseId'
  | 'wpChildren___nodes___parentId'
  | 'wpChildren___nodes___posts___nodes'
  | 'wpChildren___nodes___slug'
  | 'wpChildren___nodes___termGroupId'
  | 'wpChildren___nodes___termTaxonomyId'
  | 'wpChildren___nodes___uri'
  | 'wpChildren___nodes___nodeType'
  | 'wpChildren___nodes___parent___id'
  | 'wpChildren___nodes___parent___children'
  | 'wpChildren___nodes___children'
  | 'wpChildren___nodes___children___id'
  | 'wpChildren___nodes___children___children'
  | 'wpChildren___nodes___internal___content'
  | 'wpChildren___nodes___internal___contentDigest'
  | 'wpChildren___nodes___internal___description'
  | 'wpChildren___nodes___internal___fieldOwners'
  | 'wpChildren___nodes___internal___ignoreType'
  | 'wpChildren___nodes___internal___mediaType'
  | 'wpChildren___nodes___internal___owner'
  | 'wpChildren___nodes___internal___type'
  | 'contentNodes___nodes'
  | 'contentNodes___nodes___databaseId'
  | 'contentNodes___nodes___date'
  | 'contentNodes___nodes___dateGmt'
  | 'contentNodes___nodes___desiredSlug'
  | 'contentNodes___nodes___enclosure'
  | 'contentNodes___nodes___guid'
  | 'contentNodes___nodes___id'
  | 'contentNodes___nodes___link'
  | 'contentNodes___nodes___modified'
  | 'contentNodes___nodes___modifiedGmt'
  | 'contentNodes___nodes___slug'
  | 'contentNodes___nodes___status'
  | 'contentNodes___nodes___template___templateName'
  | 'contentNodes___nodes___uri'
  | 'contentNodes___nodes___nodeType'
  | 'count'
  | 'databaseId'
  | 'description'
  | 'id'
  | 'link'
  | 'name'
  | 'wpParent___node___ancestors___nodes'
  | 'wpParent___node___wpChildren___nodes'
  | 'wpParent___node___contentNodes___nodes'
  | 'wpParent___node___count'
  | 'wpParent___node___databaseId'
  | 'wpParent___node___description'
  | 'wpParent___node___id'
  | 'wpParent___node___link'
  | 'wpParent___node___name'
  | 'wpParent___node___parentDatabaseId'
  | 'wpParent___node___parentId'
  | 'wpParent___node___posts___nodes'
  | 'wpParent___node___slug'
  | 'wpParent___node___termGroupId'
  | 'wpParent___node___termTaxonomyId'
  | 'wpParent___node___uri'
  | 'wpParent___node___nodeType'
  | 'wpParent___node___parent___id'
  | 'wpParent___node___parent___children'
  | 'wpParent___node___children'
  | 'wpParent___node___children___id'
  | 'wpParent___node___children___children'
  | 'wpParent___node___internal___content'
  | 'wpParent___node___internal___contentDigest'
  | 'wpParent___node___internal___description'
  | 'wpParent___node___internal___fieldOwners'
  | 'wpParent___node___internal___ignoreType'
  | 'wpParent___node___internal___mediaType'
  | 'wpParent___node___internal___owner'
  | 'wpParent___node___internal___type'
  | 'parentDatabaseId'
  | 'parentId'
  | 'posts___nodes'
  | 'posts___nodes___authorDatabaseId'
  | 'posts___nodes___authorId'
  | 'posts___nodes___blocks'
  | 'posts___nodes___blocks___dynamicContent'
  | 'posts___nodes___blocks___innerBlocks'
  | 'posts___nodes___blocks___isDynamic'
  | 'posts___nodes___blocks___name'
  | 'posts___nodes___blocks___order'
  | 'posts___nodes___blocks___originalContent'
  | 'posts___nodes___blocks___parentNodeDatabaseId'
  | 'posts___nodes___blocks___saveContent'
  | 'posts___nodes___blocksJSON'
  | 'posts___nodes___categories___nodes'
  | 'posts___nodes___commentCount'
  | 'posts___nodes___commentStatus'
  | 'posts___nodes___comments___nodes'
  | 'posts___nodes___content'
  | 'posts___nodes___databaseId'
  | 'posts___nodes___date'
  | 'posts___nodes___dateGmt'
  | 'posts___nodes___desiredSlug'
  | 'posts___nodes___enclosure'
  | 'posts___nodes___excerpt'
  | 'posts___nodes___featuredImageDatabaseId'
  | 'posts___nodes___featuredImageId'
  | 'posts___nodes___guid'
  | 'posts___nodes___id'
  | 'posts___nodes___isRevision'
  | 'posts___nodes___isSticky'
  | 'posts___nodes___link'
  | 'posts___nodes___modified'
  | 'posts___nodes___modifiedGmt'
  | 'posts___nodes___pingStatus'
  | 'posts___nodes___pinged'
  | 'posts___nodes___postFormats___nodes'
  | 'posts___nodes___post_preview___excerpt'
  | 'posts___nodes___post_preview___fieldGroupName'
  | 'posts___nodes___previewBlocks'
  | 'posts___nodes___previewBlocks___dynamicContent'
  | 'posts___nodes___previewBlocks___innerBlocks'
  | 'posts___nodes___previewBlocks___isDynamic'
  | 'posts___nodes___previewBlocks___name'
  | 'posts___nodes___previewBlocks___order'
  | 'posts___nodes___previewBlocks___originalContent'
  | 'posts___nodes___previewBlocks___parentNodeDatabaseId'
  | 'posts___nodes___previewBlocks___saveContent'
  | 'posts___nodes___previewBlocksJSON'
  | 'posts___nodes___slug'
  | 'posts___nodes___status'
  | 'posts___nodes___tags___nodes'
  | 'posts___nodes___template___templateName'
  | 'posts___nodes___terms___nodes'
  | 'posts___nodes___title'
  | 'posts___nodes___toPing'
  | 'posts___nodes___uri'
  | 'posts___nodes___nodeType'
  | 'posts___nodes___parent___id'
  | 'posts___nodes___parent___children'
  | 'posts___nodes___children'
  | 'posts___nodes___children___id'
  | 'posts___nodes___children___children'
  | 'posts___nodes___internal___content'
  | 'posts___nodes___internal___contentDigest'
  | 'posts___nodes___internal___description'
  | 'posts___nodes___internal___fieldOwners'
  | 'posts___nodes___internal___ignoreType'
  | 'posts___nodes___internal___mediaType'
  | 'posts___nodes___internal___owner'
  | 'posts___nodes___internal___type'
  | 'slug'
  | 'taxonomy___node___archivePath'
  | 'taxonomy___node___connectedContentTypes___nodes'
  | 'taxonomy___node___description'
  | 'taxonomy___node___graphqlPluralName'
  | 'taxonomy___node___graphqlSingleName'
  | 'taxonomy___node___hierarchical'
  | 'taxonomy___node___id'
  | 'taxonomy___node___label'
  | 'taxonomy___node___name'
  | 'taxonomy___node___public'
  | 'taxonomy___node___restBase'
  | 'taxonomy___node___restControllerClass'
  | 'taxonomy___node___showCloud'
  | 'taxonomy___node___showInAdminColumn'
  | 'taxonomy___node___showInGraphql'
  | 'taxonomy___node___showInMenu'
  | 'taxonomy___node___showInNavMenus'
  | 'taxonomy___node___showInQuickEdit'
  | 'taxonomy___node___showInRest'
  | 'taxonomy___node___showUi'
  | 'taxonomy___node___nodeType'
  | 'taxonomy___node___parent___id'
  | 'taxonomy___node___parent___children'
  | 'taxonomy___node___children'
  | 'taxonomy___node___children___id'
  | 'taxonomy___node___children___children'
  | 'taxonomy___node___internal___content'
  | 'taxonomy___node___internal___contentDigest'
  | 'taxonomy___node___internal___description'
  | 'taxonomy___node___internal___fieldOwners'
  | 'taxonomy___node___internal___ignoreType'
  | 'taxonomy___node___internal___mediaType'
  | 'taxonomy___node___internal___owner'
  | 'taxonomy___node___internal___type'
  | 'termGroupId'
  | 'termTaxonomyId'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpCategoryFilterInput = {
  ancestors?: Maybe<WpCategoryToAncestorsCategoryConnectionFilterInput>;
  wpChildren?: Maybe<WpCategoryToCategoryConnectionFilterInput>;
  contentNodes?: Maybe<WpCategoryToContentNodeConnectionFilterInput>;
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  wpParent?: Maybe<WpCategoryToParentCategoryConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  posts?: Maybe<WpCategoryToPostConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<WpCategoryToTaxonomyConnectionEdgeFilterInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpCategoryFilterListInput = {
  elemMatch?: Maybe<WpCategoryFilterInput>;
};

export type WpCategoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpCategoryEdge>;
  nodes: Array<WpCategory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpCategorySortInput = {
  fields?: Maybe<Array<Maybe<WpCategoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the category type and the category type */
export type WpCategoryToAncestorsCategoryConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpCategory>>>;
};

export type WpCategoryToAncestorsCategoryConnectionFilterInput = {
  nodes?: Maybe<WpCategoryFilterListInput>;
};

/** Connection between the category type and the category type */
export type WpCategoryToCategoryConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpCategory>>>;
};

export type WpCategoryToCategoryConnectionFilterInput = {
  nodes?: Maybe<WpCategoryFilterListInput>;
};

/** Connection between the category type and the ContentNode type */
export type WpCategoryToContentNodeConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

export type WpCategoryToContentNodeConnectionFilterInput = {
  nodes?: Maybe<WpContentNodeFilterListInput>;
};

/** Connection between the category type and the category type */
export type WpCategoryToParentCategoryConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpCategory>;
};

export type WpCategoryToParentCategoryConnectionEdgeFilterInput = {
  node?: Maybe<WpCategoryFilterInput>;
};

/** Connection between the category type and the post type */
export type WpCategoryToPostConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPost>>>;
};

export type WpCategoryToPostConnectionFilterInput = {
  nodes?: Maybe<WpPostFilterListInput>;
};

/** Connection between the category type and the Taxonomy type */
export type WpCategoryToTaxonomyConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpTaxonomy>;
};

export type WpCategoryToTaxonomyConnectionEdgeFilterInput = {
  node?: Maybe<WpTaxonomyFilterInput>;
};

/** A Comment object */
export type WpComment = Node & WpNode & WpDatabaseIdentifier & {
  /**
   * User agent used to post the comment. This field is equivalent to
   * WP_Comment-&gt;comment_agent and the value matching the
   * &quot;comment_agent&quot; column in SQL.
   */
  agent?: Maybe<Scalars['String']>;
  /**
   * The approval status of the comment. This field is equivalent to
   * WP_Comment-&gt;comment_approved and the value matching the
   * &quot;comment_approved&quot; column in SQL.
   */
  approved?: Maybe<Scalars['Boolean']>;
  /** The author of the comment */
  author?: Maybe<WpCommentToCommenterConnectionEdge>;
  /**
   * IP address for the author. This field is equivalent to
   * WP_Comment-&gt;comment_author_IP and the value matching the
   * &quot;comment_author_IP&quot; column in SQL.
   */
  authorIp?: Maybe<Scalars['String']>;
  /** Connection between the Comment type and the ContentNode type */
  commentedOn?: Maybe<WpCommentToContentNodeConnectionEdge>;
  /**
   * Content of the comment. This field is equivalent to
   * WP_Comment-&gt;comment_content and the value matching the
   * &quot;comment_content&quot; column in SQL.
   */
  content?: Maybe<Scalars['String']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /**
   * Date the comment was posted in local time. This field is equivalent to
   * WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL.
   */
  date?: Maybe<Scalars['Date']>;
  /**
   * Date the comment was posted in GMT. This field is equivalent to
   * WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL.
   */
  dateGmt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  /**
   * Karma value for the comment. This field is equivalent to
   * WP_Comment-&gt;comment_karma and the value matching the
   * &quot;comment_karma&quot; column in SQL.
   */
  karma?: Maybe<Scalars['Int']>;
  /** Connection between the Comment type and the Comment type */
  wpParent?: Maybe<WpCommentToParentCommentConnectionEdge>;
  /** The database id of the parent comment node or null if it is the root comment */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent comment node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Connection between the Comment type and the Comment type */
  replies?: Maybe<WpCommentToCommentConnection>;
  /**
   * Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and
   * the value matching the &quot;comment_type&quot; column in SQL.
   */
  type?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


/** A Comment object */
export type WpCommentDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** A Comment object */
export type WpCommentDateGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type WpCommentConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpCommentEdge>;
  nodes: Array<WpComment>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpCommentGroupConnection>;
};


export type WpCommentConnectionDistinctArgs = {
  field: WpCommentFieldsEnum;
};


export type WpCommentConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpCommentFieldsEnum;
};

export type WpCommentEdge = {
  next?: Maybe<WpComment>;
  node: WpComment;
  previous?: Maybe<WpComment>;
};

export type WpCommenter = {
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The email address of the author of a comment. */
  email?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment author. */
  id: Scalars['ID'];
  /** The name of the author of a comment. */
  name?: Maybe<Scalars['String']>;
  /** The url of the author of a comment. */
  url?: Maybe<Scalars['String']>;
};

export type WpCommenterFilterInput = {
  databaseId?: Maybe<IntQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<IdQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type WpCommentFieldsEnum = 
  | 'agent'
  | 'approved'
  | 'author___node___databaseId'
  | 'author___node___email'
  | 'author___node___id'
  | 'author___node___name'
  | 'author___node___url'
  | 'authorIp'
  | 'commentedOn___node___databaseId'
  | 'commentedOn___node___date'
  | 'commentedOn___node___dateGmt'
  | 'commentedOn___node___desiredSlug'
  | 'commentedOn___node___enclosure'
  | 'commentedOn___node___guid'
  | 'commentedOn___node___id'
  | 'commentedOn___node___link'
  | 'commentedOn___node___modified'
  | 'commentedOn___node___modifiedGmt'
  | 'commentedOn___node___slug'
  | 'commentedOn___node___status'
  | 'commentedOn___node___template___templateName'
  | 'commentedOn___node___uri'
  | 'commentedOn___node___nodeType'
  | 'content'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'id'
  | 'karma'
  | 'wpParent___node___agent'
  | 'wpParent___node___approved'
  | 'wpParent___node___authorIp'
  | 'wpParent___node___content'
  | 'wpParent___node___databaseId'
  | 'wpParent___node___date'
  | 'wpParent___node___dateGmt'
  | 'wpParent___node___id'
  | 'wpParent___node___karma'
  | 'wpParent___node___parentDatabaseId'
  | 'wpParent___node___parentId'
  | 'wpParent___node___replies___nodes'
  | 'wpParent___node___type'
  | 'wpParent___node___nodeType'
  | 'wpParent___node___parent___id'
  | 'wpParent___node___parent___children'
  | 'wpParent___node___children'
  | 'wpParent___node___children___id'
  | 'wpParent___node___children___children'
  | 'wpParent___node___internal___content'
  | 'wpParent___node___internal___contentDigest'
  | 'wpParent___node___internal___description'
  | 'wpParent___node___internal___fieldOwners'
  | 'wpParent___node___internal___ignoreType'
  | 'wpParent___node___internal___mediaType'
  | 'wpParent___node___internal___owner'
  | 'wpParent___node___internal___type'
  | 'parentDatabaseId'
  | 'parentId'
  | 'replies___nodes'
  | 'replies___nodes___agent'
  | 'replies___nodes___approved'
  | 'replies___nodes___authorIp'
  | 'replies___nodes___content'
  | 'replies___nodes___databaseId'
  | 'replies___nodes___date'
  | 'replies___nodes___dateGmt'
  | 'replies___nodes___id'
  | 'replies___nodes___karma'
  | 'replies___nodes___parentDatabaseId'
  | 'replies___nodes___parentId'
  | 'replies___nodes___replies___nodes'
  | 'replies___nodes___type'
  | 'replies___nodes___nodeType'
  | 'replies___nodes___parent___id'
  | 'replies___nodes___parent___children'
  | 'replies___nodes___children'
  | 'replies___nodes___children___id'
  | 'replies___nodes___children___children'
  | 'replies___nodes___internal___content'
  | 'replies___nodes___internal___contentDigest'
  | 'replies___nodes___internal___description'
  | 'replies___nodes___internal___fieldOwners'
  | 'replies___nodes___internal___ignoreType'
  | 'replies___nodes___internal___mediaType'
  | 'replies___nodes___internal___owner'
  | 'replies___nodes___internal___type'
  | 'type'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpCommentFilterInput = {
  agent?: Maybe<StringQueryOperatorInput>;
  approved?: Maybe<BooleanQueryOperatorInput>;
  author?: Maybe<WpCommentToCommenterConnectionEdgeFilterInput>;
  authorIp?: Maybe<StringQueryOperatorInput>;
  commentedOn?: Maybe<WpCommentToContentNodeConnectionEdgeFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  karma?: Maybe<IntQueryOperatorInput>;
  wpParent?: Maybe<WpCommentToParentCommentConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  replies?: Maybe<WpCommentToCommentConnectionFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpCommentFilterListInput = {
  elemMatch?: Maybe<WpCommentFilterInput>;
};

export type WpCommentGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpCommentEdge>;
  nodes: Array<WpComment>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpCommentSortInput = {
  fields?: Maybe<Array<Maybe<WpCommentFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the Comment type and the Comment type */
export type WpCommentToCommentConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

export type WpCommentToCommentConnectionFilterInput = {
  nodes?: Maybe<WpCommentFilterListInput>;
};

/** Connection between the Comment type and the Commenter type */
export type WpCommentToCommenterConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpCommenter>;
};

export type WpCommentToCommenterConnectionEdgeFilterInput = {
  node?: Maybe<WpCommenterFilterInput>;
};

/** Connection between the Comment type and the ContentNode type */
export type WpCommentToContentNodeConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpContentNode>;
};

export type WpCommentToContentNodeConnectionEdgeFilterInput = {
  node?: Maybe<WpContentNodeFilterInput>;
};

/** Connection between the Comment type and the Comment type */
export type WpCommentToParentCommentConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpComment>;
};

export type WpCommentToParentCommentConnectionEdgeFilterInput = {
  node?: Maybe<WpCommentFilterInput>;
};

export type WpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpEdge>;
  nodes: Array<Wp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpGroupConnection>;
};


export type WpConnectionDistinctArgs = {
  field: WpFieldsEnum;
};


export type WpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpFieldsEnum;
};

export type WpContentNode = {
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post->guid and the guid column in the "post_objects" database table.
   */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the node. */
  id: Scalars['ID'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  modified?: Maybe<Scalars['Date']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['Date']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post->post_name field
   * and the post_name column in the database for the "post_objects" table.
   */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** URI path for the resource */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
};


export type WpContentNodeDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type WpContentNodeDateGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type WpContentNodeModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type WpContentNodeModifiedGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type WpContentNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpContentNodeEdge>;
  nodes: Array<WpContentNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpContentNodeGroupConnection>;
};


export type WpContentNodeConnectionDistinctArgs = {
  field: WpContentNodeFieldsEnum;
};


export type WpContentNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpContentNodeFieldsEnum;
};

export type WpContentNodeEdge = {
  next?: Maybe<WpContentNode>;
  node: WpContentNode;
  previous?: Maybe<WpContentNode>;
};

export type WpContentNodeFieldsEnum = 
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'desiredSlug'
  | 'enclosure'
  | 'guid'
  | 'id'
  | 'lastEditedBy___node___allNews___nodes'
  | 'lastEditedBy___node___avatar___default'
  | 'lastEditedBy___node___avatar___extraAttr'
  | 'lastEditedBy___node___avatar___forceDefault'
  | 'lastEditedBy___node___avatar___foundAvatar'
  | 'lastEditedBy___node___avatar___height'
  | 'lastEditedBy___node___avatar___rating'
  | 'lastEditedBy___node___avatar___scheme'
  | 'lastEditedBy___node___avatar___size'
  | 'lastEditedBy___node___avatar___url'
  | 'lastEditedBy___node___avatar___width'
  | 'lastEditedBy___node___blockEditorPreviews___nodes'
  | 'lastEditedBy___node___capKey'
  | 'lastEditedBy___node___capabilities'
  | 'lastEditedBy___node___comments___nodes'
  | 'lastEditedBy___node___databaseId'
  | 'lastEditedBy___node___description'
  | 'lastEditedBy___node___email'
  | 'lastEditedBy___node___extraCapabilities'
  | 'lastEditedBy___node___firstName'
  | 'lastEditedBy___node___id'
  | 'lastEditedBy___node___lastName'
  | 'lastEditedBy___node___locale'
  | 'lastEditedBy___node___name'
  | 'lastEditedBy___node___nicename'
  | 'lastEditedBy___node___nickname'
  | 'lastEditedBy___node___pages___nodes'
  | 'lastEditedBy___node___posts___nodes'
  | 'lastEditedBy___node___registeredDate'
  | 'lastEditedBy___node___roles___nodes'
  | 'lastEditedBy___node___slug'
  | 'lastEditedBy___node___uri'
  | 'lastEditedBy___node___url'
  | 'lastEditedBy___node___username'
  | 'lastEditedBy___node___nodeType'
  | 'lastEditedBy___node___parent___id'
  | 'lastEditedBy___node___parent___children'
  | 'lastEditedBy___node___children'
  | 'lastEditedBy___node___children___id'
  | 'lastEditedBy___node___children___children'
  | 'lastEditedBy___node___internal___content'
  | 'lastEditedBy___node___internal___contentDigest'
  | 'lastEditedBy___node___internal___description'
  | 'lastEditedBy___node___internal___fieldOwners'
  | 'lastEditedBy___node___internal___ignoreType'
  | 'lastEditedBy___node___internal___mediaType'
  | 'lastEditedBy___node___internal___owner'
  | 'lastEditedBy___node___internal___type'
  | 'link'
  | 'modified'
  | 'modifiedGmt'
  | 'slug'
  | 'status'
  | 'template___templateName'
  | 'uri'
  | 'nodeType';

export type WpContentNodeFilterInput = {
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type WpContentNodeFilterListInput = {
  elemMatch?: Maybe<WpContentNodeFilterInput>;
};

export type WpContentNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpContentNodeEdge>;
  nodes: Array<WpContentNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpContentNodeSortInput = {
  fields?: Maybe<Array<Maybe<WpContentNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the ContentNode type and the User type */
export type WpContentNodeToEditLastConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpUser>;
};

export type WpContentNodeToEditLastConnectionEdgeFilterInput = {
  node?: Maybe<WpUserFilterInput>;
};

/** Connection between the ContentNode type and the User type */
export type WpContentNodeToEditLockConnectionEdge = {
  /** The timestamp for when the node was last edited */
  lockTimestamp?: Maybe<Scalars['String']>;
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpUser>;
};

export type WpContentTemplate = {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

export type WpContentTemplateFilterInput = {
  templateName?: Maybe<StringQueryOperatorInput>;
};

/** An Post Type object */
export type WpContentType = Node & WpNode & WpUniformResourceIdentifiable & {
  /** The url path of the first page of the archive page for this content type. */
  archivePath?: Maybe<Scalars['String']>;
  /** Whether this content type should can be exported. */
  canExport?: Maybe<Scalars['Boolean']>;
  /** Connection between the ContentType type and the Taxonomy type */
  connectedTaxonomies?: Maybe<WpContentTypeToTaxonomyConnection>;
  /** Connection between the ContentType type and the ContentNode type */
  contentNodes?: Maybe<WpContentTypeToContentNodeConnection>;
  /** Whether content of this type should be deleted when the author of it is deleted from the system. */
  deleteWithUser?: Maybe<Scalars['Boolean']>;
  /** Description of the content type. */
  description?: Maybe<Scalars['String']>;
  /** Whether to exclude nodes of this content type from front end search results. */
  excludeFromSearch?: Maybe<Scalars['Boolean']>;
  /** The plural name of the content type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /** The singular name of the content type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /** Whether this content type should have archives. Content archives are generated by type and by date. */
  hasArchive?: Maybe<Scalars['Boolean']>;
  /** Whether the content type is hierarchical, for example pages. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  /** Whether this page is set to the static front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether this page is set to the blog posts page. */
  isPostsPage: Scalars['Boolean'];
  /** Display name of the content type. */
  label?: Maybe<Scalars['String']>;
  /** Details about the content type labels. */
  labels?: Maybe<WpPostTypeLabelDetails>;
  /** The name of the icon file to display as a menu icon. */
  menuIcon?: Maybe<Scalars['String']>;
  /** The position of this post type in the menu. Only applies if show_in_menu is true. */
  menuPosition?: Maybe<Scalars['Int']>;
  /** The internal name of the post type. This should not be used for display purposes. */
  name?: Maybe<Scalars['String']>;
  /**
   * Whether a content type is intended for use publicly either via the admin
   * interface or by front-end users. While the default settings of
   * exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are
   * inherited from public, each does not rely on this relationship and controls a
   * very specific intention.
   */
  public?: Maybe<Scalars['Boolean']>;
  /** Whether queries can be performed on the front end for the content type as part of parse_request(). */
  publiclyQueryable?: Maybe<Scalars['Boolean']>;
  /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']>;
  /** Makes this content type available via the admin bar. */
  showInAdminBar?: Maybe<Scalars['Boolean']>;
  /** Whether to add the content type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /**
   * Where to show the content type in the admin menu. To work, $show_ui must be
   * true. If true, the post type is shown in its own top level menu. If false, no
   * menu is shown. If a string of an existing top level menu (eg.
   * &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type
   * will be placed as a sub-menu of that.
   */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /** Makes this content type available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing this content type in the admin. */
  showUi?: Maybe<Scalars['Boolean']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpContentTypeEdge>;
  nodes: Array<WpContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpContentTypeGroupConnection>;
};


export type WpContentTypeConnectionDistinctArgs = {
  field: WpContentTypeFieldsEnum;
};


export type WpContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpContentTypeFieldsEnum;
};

export type WpContentTypeEdge = {
  next?: Maybe<WpContentType>;
  node: WpContentType;
  previous?: Maybe<WpContentType>;
};

export type WpContentTypeFieldsEnum = 
  | 'archivePath'
  | 'canExport'
  | 'connectedTaxonomies___nodes'
  | 'connectedTaxonomies___nodes___archivePath'
  | 'connectedTaxonomies___nodes___connectedContentTypes___nodes'
  | 'connectedTaxonomies___nodes___description'
  | 'connectedTaxonomies___nodes___graphqlPluralName'
  | 'connectedTaxonomies___nodes___graphqlSingleName'
  | 'connectedTaxonomies___nodes___hierarchical'
  | 'connectedTaxonomies___nodes___id'
  | 'connectedTaxonomies___nodes___label'
  | 'connectedTaxonomies___nodes___name'
  | 'connectedTaxonomies___nodes___public'
  | 'connectedTaxonomies___nodes___restBase'
  | 'connectedTaxonomies___nodes___restControllerClass'
  | 'connectedTaxonomies___nodes___showCloud'
  | 'connectedTaxonomies___nodes___showInAdminColumn'
  | 'connectedTaxonomies___nodes___showInGraphql'
  | 'connectedTaxonomies___nodes___showInMenu'
  | 'connectedTaxonomies___nodes___showInNavMenus'
  | 'connectedTaxonomies___nodes___showInQuickEdit'
  | 'connectedTaxonomies___nodes___showInRest'
  | 'connectedTaxonomies___nodes___showUi'
  | 'connectedTaxonomies___nodes___nodeType'
  | 'connectedTaxonomies___nodes___parent___id'
  | 'connectedTaxonomies___nodes___parent___children'
  | 'connectedTaxonomies___nodes___children'
  | 'connectedTaxonomies___nodes___children___id'
  | 'connectedTaxonomies___nodes___children___children'
  | 'connectedTaxonomies___nodes___internal___content'
  | 'connectedTaxonomies___nodes___internal___contentDigest'
  | 'connectedTaxonomies___nodes___internal___description'
  | 'connectedTaxonomies___nodes___internal___fieldOwners'
  | 'connectedTaxonomies___nodes___internal___ignoreType'
  | 'connectedTaxonomies___nodes___internal___mediaType'
  | 'connectedTaxonomies___nodes___internal___owner'
  | 'connectedTaxonomies___nodes___internal___type'
  | 'contentNodes___nodes'
  | 'contentNodes___nodes___databaseId'
  | 'contentNodes___nodes___date'
  | 'contentNodes___nodes___dateGmt'
  | 'contentNodes___nodes___desiredSlug'
  | 'contentNodes___nodes___enclosure'
  | 'contentNodes___nodes___guid'
  | 'contentNodes___nodes___id'
  | 'contentNodes___nodes___link'
  | 'contentNodes___nodes___modified'
  | 'contentNodes___nodes___modifiedGmt'
  | 'contentNodes___nodes___slug'
  | 'contentNodes___nodes___status'
  | 'contentNodes___nodes___template___templateName'
  | 'contentNodes___nodes___uri'
  | 'contentNodes___nodes___nodeType'
  | 'deleteWithUser'
  | 'description'
  | 'excludeFromSearch'
  | 'graphqlPluralName'
  | 'graphqlSingleName'
  | 'hasArchive'
  | 'hierarchical'
  | 'id'
  | 'isFrontPage'
  | 'isPostsPage'
  | 'label'
  | 'labels___addNew'
  | 'labels___addNewItem'
  | 'labels___allItems'
  | 'labels___archives'
  | 'labels___attributes'
  | 'labels___editItem'
  | 'labels___featuredImage'
  | 'labels___filterItemsList'
  | 'labels___insertIntoItem'
  | 'labels___itemsList'
  | 'labels___itemsListNavigation'
  | 'labels___menuName'
  | 'labels___name'
  | 'labels___newItem'
  | 'labels___notFound'
  | 'labels___notFoundInTrash'
  | 'labels___parentItemColon'
  | 'labels___removeFeaturedImage'
  | 'labels___searchItems'
  | 'labels___setFeaturedImage'
  | 'labels___singularName'
  | 'labels___uploadedToThisItem'
  | 'labels___useFeaturedImage'
  | 'labels___viewItem'
  | 'labels___viewItems'
  | 'menuIcon'
  | 'menuPosition'
  | 'name'
  | 'public'
  | 'publiclyQueryable'
  | 'restBase'
  | 'restControllerClass'
  | 'showInAdminBar'
  | 'showInGraphql'
  | 'showInMenu'
  | 'showInNavMenus'
  | 'showInRest'
  | 'showUi'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpContentTypeFilterInput = {
  archivePath?: Maybe<StringQueryOperatorInput>;
  canExport?: Maybe<BooleanQueryOperatorInput>;
  connectedTaxonomies?: Maybe<WpContentTypeToTaxonomyConnectionFilterInput>;
  contentNodes?: Maybe<WpContentTypeToContentNodeConnectionFilterInput>;
  deleteWithUser?: Maybe<BooleanQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  excludeFromSearch?: Maybe<BooleanQueryOperatorInput>;
  graphqlPluralName?: Maybe<StringQueryOperatorInput>;
  graphqlSingleName?: Maybe<StringQueryOperatorInput>;
  hasArchive?: Maybe<BooleanQueryOperatorInput>;
  hierarchical?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  isFrontPage?: Maybe<BooleanQueryOperatorInput>;
  isPostsPage?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  labels?: Maybe<WpPostTypeLabelDetailsFilterInput>;
  menuIcon?: Maybe<StringQueryOperatorInput>;
  menuPosition?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  public?: Maybe<BooleanQueryOperatorInput>;
  publiclyQueryable?: Maybe<BooleanQueryOperatorInput>;
  restBase?: Maybe<StringQueryOperatorInput>;
  restControllerClass?: Maybe<StringQueryOperatorInput>;
  showInAdminBar?: Maybe<BooleanQueryOperatorInput>;
  showInGraphql?: Maybe<BooleanQueryOperatorInput>;
  showInMenu?: Maybe<BooleanQueryOperatorInput>;
  showInNavMenus?: Maybe<BooleanQueryOperatorInput>;
  showInRest?: Maybe<BooleanQueryOperatorInput>;
  showUi?: Maybe<BooleanQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpContentTypeFilterListInput = {
  elemMatch?: Maybe<WpContentTypeFilterInput>;
};

export type WpContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpContentTypeEdge>;
  nodes: Array<WpContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<WpContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the ContentType type and the ContentNode type */
export type WpContentTypeToContentNodeConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

export type WpContentTypeToContentNodeConnectionFilterInput = {
  nodes?: Maybe<WpContentNodeFilterListInput>;
};

/** Connection between the ContentType type and the Taxonomy type */
export type WpContentTypeToTaxonomyConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpTaxonomy>>>;
};

export type WpContentTypeToTaxonomyConnectionFilterInput = {
  nodes?: Maybe<WpTaxonomyFilterListInput>;
};

/** core/archives block */
export type WpCoreArchivesBlock = WpBlock & {
  attributes?: Maybe<WpCoreArchivesBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreArchivesBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  displayAsDropdown: Scalars['Boolean'];
  showPostCounts: Scalars['Boolean'];
};

/** core/audio block */
export type WpCoreAudioBlock = WpBlock & {
  attributes?: Maybe<WpCoreAudioBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreAudioBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  autoplay?: Maybe<Scalars['Boolean']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  loop?: Maybe<Scalars['Boolean']>;
  preload?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
};

export type WpCoreAudioBlockAttributesUnion = WpCoreAudioBlockAttributes | WpCoreAudioBlockDeprecatedV1Attributes;

export type WpCoreAudioBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  autoplay?: Maybe<Scalars['Boolean']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  loop?: Maybe<Scalars['Boolean']>;
  preload?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
};

/** core/block block */
export type WpCoreBlock = WpBlock & {
  attributes?: Maybe<WpCoreBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  reusableBlock: WpNode;
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreBlockAttributes = {
  ref?: Maybe<Scalars['Float']>;
};

/** core/button block */
export type WpCoreButtonBlock = WpBlock & {
  attributes?: Maybe<WpCoreButtonBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreButtonBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  borderRadius?: Maybe<Scalars['Float']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  text?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreButtonBlockAttributesUnion = WpCoreButtonBlockAttributes | WpCoreButtonBlockDeprecatedV1Attributes | WpCoreButtonBlockDeprecatedV2Attributes | WpCoreButtonBlockDeprecatedV3Attributes | WpCoreButtonBlockDeprecatedV4Attributes | WpCoreButtonBlockDeprecatedV5Attributes | WpCoreButtonBlockDeprecatedV6Attributes;

export type WpCoreButtonBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  borderRadius?: Maybe<Scalars['Float']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  text?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreButtonBlockDeprecatedV2Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  borderRadius?: Maybe<Scalars['Float']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  text?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreButtonBlockDeprecatedV3Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  borderRadius?: Maybe<Scalars['Float']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  text?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreButtonBlockDeprecatedV4Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  borderRadius?: Maybe<Scalars['Float']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  text?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreButtonBlockDeprecatedV5Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  borderRadius?: Maybe<Scalars['Float']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  text?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreButtonBlockDeprecatedV6Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  borderRadius?: Maybe<Scalars['Float']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  text?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core/buttons block */
export type WpCoreButtonsBlock = WpBlock & {
  attributes?: Maybe<WpCoreButtonsBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreButtonsBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
};

/** core/calendar block */
export type WpCoreCalendarBlock = WpBlock & {
  attributes?: Maybe<WpCoreCalendarBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreCalendarBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

/** core/categories block */
export type WpCoreCategoriesBlock = WpBlock & {
  attributes?: Maybe<WpCoreCategoriesBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreCategoriesBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  displayAsDropdown: Scalars['Boolean'];
  showHierarchy: Scalars['Boolean'];
  showPostCounts: Scalars['Boolean'];
};

/** core/code block */
export type WpCoreCodeBlock = WpBlock & {
  attributes?: Maybe<WpCoreCodeBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreCodeBlockAttributes = {
  anchor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

/** core/column block */
export type WpCoreColumnBlock = WpBlock & {
  attributes?: Maybe<WpCoreColumnBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreColumnBlockAttributes = {
  anchor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  verticalAlignment?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

/** core/columns block */
export type WpCoreColumnsBlock = WpBlock & {
  attributes?: Maybe<WpCoreColumnsBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreColumnsBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  verticalAlignment?: Maybe<Scalars['String']>;
};

export type WpCoreColumnsBlockAttributesUnion = WpCoreColumnsBlockAttributes | WpCoreColumnsBlockDeprecatedV1Attributes | WpCoreColumnsBlockDeprecatedV2Attributes | WpCoreColumnsBlockDeprecatedV3Attributes;

export type WpCoreColumnsBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  verticalAlignment?: Maybe<Scalars['String']>;
};

export type WpCoreColumnsBlockDeprecatedV2Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  verticalAlignment?: Maybe<Scalars['String']>;
};

export type WpCoreColumnsBlockDeprecatedV3Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  verticalAlignment?: Maybe<Scalars['String']>;
};

/** core/cover block */
export type WpCoreCoverBlock = WpBlock & {
  attributes?: Maybe<WpCoreCoverBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreCoverBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundType: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  contentPosition?: Maybe<Scalars['String']>;
  customGradient?: Maybe<Scalars['String']>;
  customOverlayColor?: Maybe<Scalars['String']>;
  dimRatio: Scalars['Float'];
  focalPoint?: Maybe<Scalars['JSON']>;
  gradient?: Maybe<Scalars['String']>;
  hasParallax: Scalars['Boolean'];
  id?: Maybe<Scalars['Float']>;
  minHeight?: Maybe<Scalars['Float']>;
  minHeightUnit?: Maybe<Scalars['String']>;
  overlayColor?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreCoverBlockAttributesUnion = WpCoreCoverBlockAttributes | WpCoreCoverBlockDeprecatedV1Attributes | WpCoreCoverBlockDeprecatedV2Attributes | WpCoreCoverBlockDeprecatedV3Attributes | WpCoreCoverBlockDeprecatedV4Attributes | WpCoreCoverBlockDeprecatedV5Attributes;

export type WpCoreCoverBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundType: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  contentPosition?: Maybe<Scalars['String']>;
  customGradient?: Maybe<Scalars['String']>;
  customOverlayColor?: Maybe<Scalars['String']>;
  dimRatio: Scalars['Float'];
  focalPoint?: Maybe<Scalars['JSON']>;
  gradient?: Maybe<Scalars['String']>;
  hasParallax: Scalars['Boolean'];
  id?: Maybe<Scalars['Float']>;
  minHeight?: Maybe<Scalars['Float']>;
  minHeightUnit?: Maybe<Scalars['String']>;
  overlayColor?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreCoverBlockDeprecatedV2Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundType: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  contentPosition?: Maybe<Scalars['String']>;
  customGradient?: Maybe<Scalars['String']>;
  customOverlayColor?: Maybe<Scalars['String']>;
  dimRatio: Scalars['Float'];
  focalPoint?: Maybe<Scalars['JSON']>;
  gradient?: Maybe<Scalars['String']>;
  hasParallax: Scalars['Boolean'];
  id?: Maybe<Scalars['Float']>;
  minHeight?: Maybe<Scalars['Float']>;
  minHeightUnit?: Maybe<Scalars['String']>;
  overlayColor?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreCoverBlockDeprecatedV3Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundType: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  contentPosition?: Maybe<Scalars['String']>;
  customGradient?: Maybe<Scalars['String']>;
  customOverlayColor?: Maybe<Scalars['String']>;
  dimRatio: Scalars['Float'];
  focalPoint?: Maybe<Scalars['JSON']>;
  gradient?: Maybe<Scalars['String']>;
  hasParallax: Scalars['Boolean'];
  id?: Maybe<Scalars['Float']>;
  minHeight?: Maybe<Scalars['Float']>;
  minHeightUnit?: Maybe<Scalars['String']>;
  overlayColor?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreCoverBlockDeprecatedV4Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundType: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  contentPosition?: Maybe<Scalars['String']>;
  customGradient?: Maybe<Scalars['String']>;
  customOverlayColor?: Maybe<Scalars['String']>;
  dimRatio: Scalars['Float'];
  focalPoint?: Maybe<Scalars['JSON']>;
  gradient?: Maybe<Scalars['String']>;
  hasParallax: Scalars['Boolean'];
  id?: Maybe<Scalars['Float']>;
  minHeight?: Maybe<Scalars['Float']>;
  minHeightUnit?: Maybe<Scalars['String']>;
  overlayColor?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreCoverBlockDeprecatedV5Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundType: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  contentPosition?: Maybe<Scalars['String']>;
  customGradient?: Maybe<Scalars['String']>;
  customOverlayColor?: Maybe<Scalars['String']>;
  dimRatio: Scalars['Float'];
  focalPoint?: Maybe<Scalars['JSON']>;
  gradient?: Maybe<Scalars['String']>;
  hasParallax: Scalars['Boolean'];
  id?: Maybe<Scalars['Float']>;
  minHeight?: Maybe<Scalars['Float']>;
  minHeightUnit?: Maybe<Scalars['String']>;
  overlayColor?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/amazon-kindle block */
export type WpCoreEmbedAmazonKindleBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedAmazonKindleBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedAmazonKindleBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedAmazonKindleBlockAttributesUnion = WpCoreEmbedAmazonKindleBlockAttributes | WpCoreEmbedAmazonKindleBlockDeprecatedV1Attributes;

export type WpCoreEmbedAmazonKindleBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/animoto block */
export type WpCoreEmbedAnimotoBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedAnimotoBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedAnimotoBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedAnimotoBlockAttributesUnion = WpCoreEmbedAnimotoBlockAttributes | WpCoreEmbedAnimotoBlockDeprecatedV1Attributes;

export type WpCoreEmbedAnimotoBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core/embed block */
export type WpCoreEmbedBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedBlockAttributesUnion = WpCoreEmbedBlockAttributes | WpCoreEmbedBlockDeprecatedV1Attributes;

export type WpCoreEmbedBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/cloudup block */
export type WpCoreEmbedCloudupBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedCloudupBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedCloudupBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedCloudupBlockAttributesUnion = WpCoreEmbedCloudupBlockAttributes | WpCoreEmbedCloudupBlockDeprecatedV1Attributes;

export type WpCoreEmbedCloudupBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/collegehumor block */
export type WpCoreEmbedCollegehumorBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedCollegehumorBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedCollegehumorBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedCollegehumorBlockAttributesUnion = WpCoreEmbedCollegehumorBlockAttributes | WpCoreEmbedCollegehumorBlockDeprecatedV1Attributes;

export type WpCoreEmbedCollegehumorBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/crowdsignal block */
export type WpCoreEmbedCrowdsignalBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedCrowdsignalBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedCrowdsignalBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedCrowdsignalBlockAttributesUnion = WpCoreEmbedCrowdsignalBlockAttributes | WpCoreEmbedCrowdsignalBlockDeprecatedV1Attributes;

export type WpCoreEmbedCrowdsignalBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/dailymotion block */
export type WpCoreEmbedDailymotionBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedDailymotionBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedDailymotionBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedDailymotionBlockAttributesUnion = WpCoreEmbedDailymotionBlockAttributes | WpCoreEmbedDailymotionBlockDeprecatedV1Attributes;

export type WpCoreEmbedDailymotionBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/facebook block */
export type WpCoreEmbedFacebookBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedFacebookBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedFacebookBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedFacebookBlockAttributesUnion = WpCoreEmbedFacebookBlockAttributes | WpCoreEmbedFacebookBlockDeprecatedV1Attributes;

export type WpCoreEmbedFacebookBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/flickr block */
export type WpCoreEmbedFlickrBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedFlickrBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedFlickrBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedFlickrBlockAttributesUnion = WpCoreEmbedFlickrBlockAttributes | WpCoreEmbedFlickrBlockDeprecatedV1Attributes;

export type WpCoreEmbedFlickrBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/imgur block */
export type WpCoreEmbedImgurBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedImgurBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedImgurBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedImgurBlockAttributesUnion = WpCoreEmbedImgurBlockAttributes | WpCoreEmbedImgurBlockDeprecatedV1Attributes;

export type WpCoreEmbedImgurBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/instagram block */
export type WpCoreEmbedInstagramBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedInstagramBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedInstagramBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedInstagramBlockAttributesUnion = WpCoreEmbedInstagramBlockAttributes | WpCoreEmbedInstagramBlockDeprecatedV1Attributes;

export type WpCoreEmbedInstagramBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/issuu block */
export type WpCoreEmbedIssuuBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedIssuuBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedIssuuBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedIssuuBlockAttributesUnion = WpCoreEmbedIssuuBlockAttributes | WpCoreEmbedIssuuBlockDeprecatedV1Attributes;

export type WpCoreEmbedIssuuBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/kickstarter block */
export type WpCoreEmbedKickstarterBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedKickstarterBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedKickstarterBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedKickstarterBlockAttributesUnion = WpCoreEmbedKickstarterBlockAttributes | WpCoreEmbedKickstarterBlockDeprecatedV1Attributes;

export type WpCoreEmbedKickstarterBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/meetup-com block */
export type WpCoreEmbedMeetupComBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedMeetupComBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedMeetupComBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedMeetupComBlockAttributesUnion = WpCoreEmbedMeetupComBlockAttributes | WpCoreEmbedMeetupComBlockDeprecatedV1Attributes;

export type WpCoreEmbedMeetupComBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/mixcloud block */
export type WpCoreEmbedMixcloudBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedMixcloudBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedMixcloudBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedMixcloudBlockAttributesUnion = WpCoreEmbedMixcloudBlockAttributes | WpCoreEmbedMixcloudBlockDeprecatedV1Attributes;

export type WpCoreEmbedMixcloudBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/polldaddy block */
export type WpCoreEmbedPolldaddyBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedPolldaddyBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedPolldaddyBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedPolldaddyBlockAttributesUnion = WpCoreEmbedPolldaddyBlockAttributes | WpCoreEmbedPolldaddyBlockDeprecatedV1Attributes;

export type WpCoreEmbedPolldaddyBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/reddit block */
export type WpCoreEmbedRedditBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedRedditBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedRedditBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedRedditBlockAttributesUnion = WpCoreEmbedRedditBlockAttributes | WpCoreEmbedRedditBlockDeprecatedV1Attributes;

export type WpCoreEmbedRedditBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/reverbnation block */
export type WpCoreEmbedReverbnationBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedReverbnationBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedReverbnationBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedReverbnationBlockAttributesUnion = WpCoreEmbedReverbnationBlockAttributes | WpCoreEmbedReverbnationBlockDeprecatedV1Attributes;

export type WpCoreEmbedReverbnationBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/screencast block */
export type WpCoreEmbedScreencastBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedScreencastBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedScreencastBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedScreencastBlockAttributesUnion = WpCoreEmbedScreencastBlockAttributes | WpCoreEmbedScreencastBlockDeprecatedV1Attributes;

export type WpCoreEmbedScreencastBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/scribd block */
export type WpCoreEmbedScribdBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedScribdBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedScribdBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedScribdBlockAttributesUnion = WpCoreEmbedScribdBlockAttributes | WpCoreEmbedScribdBlockDeprecatedV1Attributes;

export type WpCoreEmbedScribdBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/slideshare block */
export type WpCoreEmbedSlideshareBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedSlideshareBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedSlideshareBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedSlideshareBlockAttributesUnion = WpCoreEmbedSlideshareBlockAttributes | WpCoreEmbedSlideshareBlockDeprecatedV1Attributes;

export type WpCoreEmbedSlideshareBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/smugmug block */
export type WpCoreEmbedSmugmugBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedSmugmugBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedSmugmugBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedSmugmugBlockAttributesUnion = WpCoreEmbedSmugmugBlockAttributes | WpCoreEmbedSmugmugBlockDeprecatedV1Attributes;

export type WpCoreEmbedSmugmugBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/soundcloud block */
export type WpCoreEmbedSoundcloudBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedSoundcloudBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedSoundcloudBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedSoundcloudBlockAttributesUnion = WpCoreEmbedSoundcloudBlockAttributes | WpCoreEmbedSoundcloudBlockDeprecatedV1Attributes;

export type WpCoreEmbedSoundcloudBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/speaker block */
export type WpCoreEmbedSpeakerBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedSpeakerBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedSpeakerBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedSpeakerBlockAttributesUnion = WpCoreEmbedSpeakerBlockAttributes | WpCoreEmbedSpeakerBlockDeprecatedV1Attributes;

export type WpCoreEmbedSpeakerBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/speaker-deck block */
export type WpCoreEmbedSpeakerDeckBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedSpeakerDeckBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedSpeakerDeckBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedSpeakerDeckBlockAttributesUnion = WpCoreEmbedSpeakerDeckBlockAttributes | WpCoreEmbedSpeakerDeckBlockDeprecatedV1Attributes;

export type WpCoreEmbedSpeakerDeckBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/spotify block */
export type WpCoreEmbedSpotifyBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedSpotifyBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedSpotifyBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedSpotifyBlockAttributesUnion = WpCoreEmbedSpotifyBlockAttributes | WpCoreEmbedSpotifyBlockDeprecatedV1Attributes;

export type WpCoreEmbedSpotifyBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/ted block */
export type WpCoreEmbedTedBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedTedBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedTedBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedTedBlockAttributesUnion = WpCoreEmbedTedBlockAttributes | WpCoreEmbedTedBlockDeprecatedV1Attributes;

export type WpCoreEmbedTedBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/tiktok block */
export type WpCoreEmbedTiktokBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedTiktokBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedTiktokBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedTiktokBlockAttributesUnion = WpCoreEmbedTiktokBlockAttributes | WpCoreEmbedTiktokBlockDeprecatedV1Attributes;

export type WpCoreEmbedTiktokBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/tumblr block */
export type WpCoreEmbedTumblrBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedTumblrBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedTumblrBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedTumblrBlockAttributesUnion = WpCoreEmbedTumblrBlockAttributes | WpCoreEmbedTumblrBlockDeprecatedV1Attributes;

export type WpCoreEmbedTumblrBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/twitter block */
export type WpCoreEmbedTwitterBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedTwitterBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedTwitterBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedTwitterBlockAttributesUnion = WpCoreEmbedTwitterBlockAttributes | WpCoreEmbedTwitterBlockDeprecatedV1Attributes;

export type WpCoreEmbedTwitterBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/videopress block */
export type WpCoreEmbedVideopressBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedVideopressBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedVideopressBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedVideopressBlockAttributesUnion = WpCoreEmbedVideopressBlockAttributes | WpCoreEmbedVideopressBlockDeprecatedV1Attributes;

export type WpCoreEmbedVideopressBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/vimeo block */
export type WpCoreEmbedVimeoBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedVimeoBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedVimeoBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedVimeoBlockAttributesUnion = WpCoreEmbedVimeoBlockAttributes | WpCoreEmbedVimeoBlockDeprecatedV1Attributes;

export type WpCoreEmbedVimeoBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/wordpress block */
export type WpCoreEmbedWordpressBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedWordpressBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedWordpressBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedWordpressBlockAttributesUnion = WpCoreEmbedWordpressBlockAttributes | WpCoreEmbedWordpressBlockDeprecatedV1Attributes;

export type WpCoreEmbedWordpressBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/wordpress-tv block */
export type WpCoreEmbedWordpressTvBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedWordpressTvBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedWordpressTvBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedWordpressTvBlockAttributesUnion = WpCoreEmbedWordpressTvBlockAttributes | WpCoreEmbedWordpressTvBlockDeprecatedV1Attributes;

export type WpCoreEmbedWordpressTvBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core-embed/youtube block */
export type WpCoreEmbedYoutubeBlock = WpBlock & {
  attributes?: Maybe<WpCoreEmbedYoutubeBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedYoutubeBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedYoutubeBlockAttributesUnion = WpCoreEmbedYoutubeBlockAttributes | WpCoreEmbedYoutubeBlockDeprecatedV1Attributes;

export type WpCoreEmbedYoutubeBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  providerNameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core/file block */
export type WpCoreFileBlock = WpBlock & {
  attributes?: Maybe<WpCoreFileBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreFileBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  downloadButtonText?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  showDownloadButton: Scalars['Boolean'];
  textLinkHref?: Maybe<Scalars['String']>;
  textLinkTarget?: Maybe<Scalars['String']>;
};

/** core/freeform block */
export type WpCoreFreeformBlock = WpBlock & {
  attributes?: Maybe<WpCoreFreeformBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreFreeformBlockAttributes = {
  content?: Maybe<Scalars['String']>;
};

/** core/gallery block */
export type WpCoreGalleryBlock = WpBlock & {
  attributes?: Maybe<WpCoreGalleryBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreGalleryBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  columns?: Maybe<Scalars['Float']>;
  ids: Array<Maybe<Scalars['Float']>>;
  imageCrop: Scalars['Boolean'];
  images: Array<Maybe<WpCoreGalleryBlockAttributesImages>>;
  linkTo: Scalars['String'];
  sizeSlug: Scalars['String'];
};

export type WpCoreGalleryBlockAttributesImages = {
  alt: Scalars['String'];
  caption?: Maybe<Scalars['String']>;
  fullUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreGalleryBlockAttributesUnion = WpCoreGalleryBlockAttributes | WpCoreGalleryBlockDeprecatedV1Attributes | WpCoreGalleryBlockDeprecatedV2Attributes | WpCoreGalleryBlockDeprecatedV3Attributes | WpCoreGalleryBlockDeprecatedV4Attributes;

export type WpCoreGalleryBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  columns?: Maybe<Scalars['Float']>;
  ids: Array<Maybe<Scalars['Float']>>;
  imageCrop: Scalars['Boolean'];
  images: Array<Maybe<WpCoreGalleryBlockDeprecatedV1AttributesImages>>;
  linkTo: Scalars['String'];
  sizeSlug: Scalars['String'];
};

export type WpCoreGalleryBlockDeprecatedV1AttributesImages = {
  alt: Scalars['String'];
  caption?: Maybe<Scalars['String']>;
  fullUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreGalleryBlockDeprecatedV2Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  columns?: Maybe<Scalars['Float']>;
  ids: Array<Maybe<Scalars['Float']>>;
  imageCrop: Scalars['Boolean'];
  images: Array<Maybe<WpCoreGalleryBlockDeprecatedV2AttributesImages>>;
  linkTo: Scalars['String'];
  sizeSlug: Scalars['String'];
};

export type WpCoreGalleryBlockDeprecatedV2AttributesImages = {
  alt: Scalars['String'];
  caption?: Maybe<Scalars['String']>;
  fullUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreGalleryBlockDeprecatedV3Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  columns?: Maybe<Scalars['Float']>;
  ids: Array<Maybe<Scalars['Float']>>;
  imageCrop: Scalars['Boolean'];
  images: Array<Maybe<WpCoreGalleryBlockDeprecatedV3AttributesImages>>;
  linkTo: Scalars['String'];
  sizeSlug: Scalars['String'];
};

export type WpCoreGalleryBlockDeprecatedV3AttributesImages = {
  alt: Scalars['String'];
  caption?: Maybe<Scalars['String']>;
  fullUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreGalleryBlockDeprecatedV4Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  columns?: Maybe<Scalars['Float']>;
  ids: Array<Maybe<Scalars['Float']>>;
  imageCrop: Scalars['Boolean'];
  images: Array<Maybe<WpCoreGalleryBlockDeprecatedV4AttributesImages>>;
  linkTo: Scalars['String'];
  sizeSlug: Scalars['String'];
};

export type WpCoreGalleryBlockDeprecatedV4AttributesImages = {
  alt: Scalars['String'];
  caption?: Maybe<Scalars['String']>;
  fullUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core/group block */
export type WpCoreGroupBlock = WpBlock & {
  attributes?: Maybe<WpCoreGroupBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreGroupBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  tagName: Scalars['String'];
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreGroupBlockAttributesUnion = WpCoreGroupBlockAttributes | WpCoreGroupBlockDeprecatedV1Attributes | WpCoreGroupBlockDeprecatedV2Attributes | WpCoreGroupBlockDeprecatedV3Attributes;

export type WpCoreGroupBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  tagName: Scalars['String'];
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreGroupBlockDeprecatedV2Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  tagName: Scalars['String'];
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreGroupBlockDeprecatedV3Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  tagName: Scalars['String'];
  textColor?: Maybe<Scalars['String']>;
};

/** core/heading block */
export type WpCoreHeadingBlock = WpBlock & {
  attributes?: Maybe<WpCoreHeadingBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreHeadingBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  fontSize?: Maybe<Scalars['String']>;
  level: Scalars['Float'];
  placeholder?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreHeadingBlockAttributesUnion = WpCoreHeadingBlockAttributes | WpCoreHeadingBlockDeprecatedV1Attributes | WpCoreHeadingBlockDeprecatedV2Attributes | WpCoreHeadingBlockDeprecatedV3Attributes;

export type WpCoreHeadingBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  fontSize?: Maybe<Scalars['String']>;
  level: Scalars['Float'];
  placeholder?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreHeadingBlockDeprecatedV2Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  fontSize?: Maybe<Scalars['String']>;
  level: Scalars['Float'];
  placeholder?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreHeadingBlockDeprecatedV3Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  fontSize?: Maybe<Scalars['String']>;
  level: Scalars['Float'];
  placeholder?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
};

/** core/html block */
export type WpCoreHtmlBlock = WpBlock & {
  attributes?: Maybe<WpCoreHtmlBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreHtmlBlockAttributes = {
  content?: Maybe<Scalars['String']>;
};

/** core/image block */
export type WpCoreImageBlock = WpBlock & {
  attributes?: Maybe<WpCoreImageBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreImageBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  alt: Scalars['String'];
  anchor?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  linkClass?: Maybe<Scalars['String']>;
  linkDestination: Scalars['String'];
  linkTarget?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  sizeSlug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type WpCoreImageBlockAttributesUnion = WpCoreImageBlockAttributes | WpCoreImageBlockDeprecatedV1Attributes | WpCoreImageBlockDeprecatedV2Attributes | WpCoreImageBlockDeprecatedV3Attributes;

export type WpCoreImageBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  alt: Scalars['String'];
  anchor?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  linkClass?: Maybe<Scalars['String']>;
  linkDestination: Scalars['String'];
  linkTarget?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  sizeSlug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type WpCoreImageBlockDeprecatedV2Attributes = {
  align?: Maybe<Scalars['String']>;
  alt: Scalars['String'];
  anchor?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  linkClass?: Maybe<Scalars['String']>;
  linkDestination: Scalars['String'];
  linkTarget?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  sizeSlug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type WpCoreImageBlockDeprecatedV3Attributes = {
  align?: Maybe<Scalars['String']>;
  alt: Scalars['String'];
  anchor?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  linkClass?: Maybe<Scalars['String']>;
  linkDestination: Scalars['String'];
  linkTarget?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  sizeSlug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

/** core/latest-comments block */
export type WpCoreLatestCommentsBlock = WpBlock & {
  attributes?: Maybe<WpCoreLatestCommentsBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreLatestCommentsBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  commentsToShow: Scalars['Float'];
  displayAvatar: Scalars['Boolean'];
  displayDate: Scalars['Boolean'];
  displayExcerpt: Scalars['Boolean'];
};

/** core/latest-posts block */
export type WpCoreLatestPostsBlock = WpBlock & {
  attributes?: Maybe<WpCoreLatestPostsBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreLatestPostsBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  className?: Maybe<Scalars['String']>;
  columns: Scalars['Float'];
  displayAuthor: Scalars['Boolean'];
  displayFeaturedImage: Scalars['Boolean'];
  displayPostContent: Scalars['Boolean'];
  displayPostContentRadio: Scalars['String'];
  displayPostDate: Scalars['Boolean'];
  excerptLength: Scalars['Float'];
  featuredImageAlign?: Maybe<Scalars['String']>;
  featuredImageSizeHeight?: Maybe<Scalars['Float']>;
  featuredImageSizeSlug: Scalars['String'];
  featuredImageSizeWidth?: Maybe<Scalars['Float']>;
  order: Scalars['String'];
  orderBy: Scalars['String'];
  postLayout: Scalars['String'];
  postsToShow: Scalars['Float'];
  selectedAuthor?: Maybe<Scalars['Float']>;
};

export type WpCoreLatestPostsBlockAttributesUnion = WpCoreLatestPostsBlockAttributes | WpCoreLatestPostsBlockDeprecatedV1Attributes;

export type WpCoreLatestPostsBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  className?: Maybe<Scalars['String']>;
  columns: Scalars['Float'];
  displayAuthor: Scalars['Boolean'];
  displayFeaturedImage: Scalars['Boolean'];
  displayPostContent: Scalars['Boolean'];
  displayPostContentRadio: Scalars['String'];
  displayPostDate: Scalars['Boolean'];
  excerptLength: Scalars['Float'];
  featuredImageAlign?: Maybe<Scalars['String']>;
  featuredImageSizeHeight?: Maybe<Scalars['Float']>;
  featuredImageSizeSlug: Scalars['String'];
  featuredImageSizeWidth?: Maybe<Scalars['Float']>;
  order: Scalars['String'];
  orderBy: Scalars['String'];
  postLayout: Scalars['String'];
  postsToShow: Scalars['Float'];
  selectedAuthor?: Maybe<Scalars['Float']>;
};

/** core/list block */
export type WpCoreListBlock = WpBlock & {
  attributes?: Maybe<WpCoreListBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreListBlockAttributes = {
  anchor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  ordered: Scalars['Boolean'];
  reversed?: Maybe<Scalars['Boolean']>;
  start?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  values: Scalars['String'];
};

/** core/media-text block */
export type WpCoreMediaTextBlock = WpBlock & {
  attributes?: Maybe<WpCoreMediaTextBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreMediaTextBlockAttributes = {
  align: Scalars['String'];
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  focalPoint?: Maybe<Scalars['JSON']>;
  gradient?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  imageFill?: Maybe<Scalars['Boolean']>;
  isStackedOnMobile: Scalars['Boolean'];
  linkClass?: Maybe<Scalars['String']>;
  linkDestination?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  mediaAlt: Scalars['String'];
  mediaId?: Maybe<Scalars['Float']>;
  mediaLink?: Maybe<Scalars['String']>;
  mediaPosition: Scalars['String'];
  mediaType?: Maybe<Scalars['String']>;
  mediaUrl?: Maybe<Scalars['String']>;
  mediaWidth: Scalars['Float'];
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  verticalAlignment?: Maybe<Scalars['String']>;
};

export type WpCoreMediaTextBlockAttributesUnion = WpCoreMediaTextBlockAttributes | WpCoreMediaTextBlockDeprecatedV1Attributes | WpCoreMediaTextBlockDeprecatedV2Attributes | WpCoreMediaTextBlockDeprecatedV3Attributes;

export type WpCoreMediaTextBlockDeprecatedV1Attributes = {
  align: Scalars['String'];
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  focalPoint?: Maybe<Scalars['JSON']>;
  gradient?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  imageFill?: Maybe<Scalars['Boolean']>;
  isStackedOnMobile: Scalars['Boolean'];
  linkClass?: Maybe<Scalars['String']>;
  linkDestination?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  mediaAlt: Scalars['String'];
  mediaId?: Maybe<Scalars['Float']>;
  mediaLink?: Maybe<Scalars['String']>;
  mediaPosition: Scalars['String'];
  mediaType?: Maybe<Scalars['String']>;
  mediaUrl?: Maybe<Scalars['String']>;
  mediaWidth: Scalars['Float'];
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  verticalAlignment?: Maybe<Scalars['String']>;
};

export type WpCoreMediaTextBlockDeprecatedV2Attributes = {
  align: Scalars['String'];
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  focalPoint?: Maybe<Scalars['JSON']>;
  gradient?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  imageFill?: Maybe<Scalars['Boolean']>;
  isStackedOnMobile: Scalars['Boolean'];
  linkClass?: Maybe<Scalars['String']>;
  linkDestination?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  mediaAlt: Scalars['String'];
  mediaId?: Maybe<Scalars['Float']>;
  mediaLink?: Maybe<Scalars['String']>;
  mediaPosition: Scalars['String'];
  mediaType?: Maybe<Scalars['String']>;
  mediaUrl?: Maybe<Scalars['String']>;
  mediaWidth: Scalars['Float'];
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  verticalAlignment?: Maybe<Scalars['String']>;
};

export type WpCoreMediaTextBlockDeprecatedV3Attributes = {
  align: Scalars['String'];
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  focalPoint?: Maybe<Scalars['JSON']>;
  gradient?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  imageFill?: Maybe<Scalars['Boolean']>;
  isStackedOnMobile: Scalars['Boolean'];
  linkClass?: Maybe<Scalars['String']>;
  linkDestination?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  mediaAlt: Scalars['String'];
  mediaId?: Maybe<Scalars['Float']>;
  mediaLink?: Maybe<Scalars['String']>;
  mediaPosition: Scalars['String'];
  mediaType?: Maybe<Scalars['String']>;
  mediaUrl?: Maybe<Scalars['String']>;
  mediaWidth: Scalars['Float'];
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  verticalAlignment?: Maybe<Scalars['String']>;
};

/** core/missing block */
export type WpCoreMissingBlock = WpBlock & {
  attributes?: Maybe<WpCoreMissingBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreMissingBlockAttributes = {
  originalContent?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  originalUndelimitedContent?: Maybe<Scalars['String']>;
};

/** core/more block */
export type WpCoreMoreBlock = WpBlock & {
  attributes?: Maybe<WpCoreMoreBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreMoreBlockAttributes = {
  customText?: Maybe<Scalars['String']>;
  noTeaser: Scalars['Boolean'];
};

/** core/nextpage block */
export type WpCoreNextpageBlock = WpBlock & {
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

/** core/paragraph block */
export type WpCoreParagraphBlock = WpBlock & {
  attributes?: Maybe<WpCoreParagraphBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreParagraphBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  direction?: Maybe<Scalars['String']>;
  dropCap: Scalars['Boolean'];
  fontSize?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreParagraphBlockAttributesUnion = WpCoreParagraphBlockAttributes | WpCoreParagraphBlockDeprecatedV1Attributes | WpCoreParagraphBlockDeprecatedV2Attributes | WpCoreParagraphBlockDeprecatedV3Attributes | WpCoreParagraphBlockDeprecatedV4Attributes | WpCoreParagraphBlockDeprecatedV5Attributes;

export type WpCoreParagraphBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  direction?: Maybe<Scalars['String']>;
  dropCap: Scalars['Boolean'];
  fontSize?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreParagraphBlockDeprecatedV2Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  direction?: Maybe<Scalars['String']>;
  dropCap: Scalars['Boolean'];
  fontSize?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreParagraphBlockDeprecatedV3Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  direction?: Maybe<Scalars['String']>;
  dropCap: Scalars['Boolean'];
  fontSize?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreParagraphBlockDeprecatedV4Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  direction?: Maybe<Scalars['String']>;
  dropCap: Scalars['Boolean'];
  fontSize?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreParagraphBlockDeprecatedV5Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  direction?: Maybe<Scalars['String']>;
  dropCap: Scalars['Boolean'];
  fontSize?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
};

/** core/preformatted block */
export type WpCorePreformattedBlock = WpBlock & {
  attributes?: Maybe<WpCorePreformattedBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCorePreformattedBlockAttributes = {
  anchor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
};

/** core/pullquote block */
export type WpCorePullquoteBlock = WpBlock & {
  attributes?: Maybe<WpCorePullquoteBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCorePullquoteBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  citation: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  customMainColor?: Maybe<Scalars['String']>;
  customTextColor?: Maybe<Scalars['String']>;
  mainColor?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type WpCorePullquoteBlockAttributesUnion = WpCorePullquoteBlockAttributes | WpCorePullquoteBlockDeprecatedV1Attributes | WpCorePullquoteBlockDeprecatedV2Attributes | WpCorePullquoteBlockDeprecatedV3Attributes | WpCorePullquoteBlockDeprecatedV4Attributes;

export type WpCorePullquoteBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  citation: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  customMainColor?: Maybe<Scalars['String']>;
  customTextColor?: Maybe<Scalars['String']>;
  mainColor?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type WpCorePullquoteBlockDeprecatedV2Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  citation: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  customMainColor?: Maybe<Scalars['String']>;
  customTextColor?: Maybe<Scalars['String']>;
  mainColor?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type WpCorePullquoteBlockDeprecatedV3Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  citation: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  customMainColor?: Maybe<Scalars['String']>;
  customTextColor?: Maybe<Scalars['String']>;
  mainColor?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type WpCorePullquoteBlockDeprecatedV4Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  citation: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  customMainColor?: Maybe<Scalars['String']>;
  customTextColor?: Maybe<Scalars['String']>;
  mainColor?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** core/quote block */
export type WpCoreQuoteBlock = WpBlock & {
  attributes?: Maybe<WpCoreQuoteBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreQuoteBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  citation: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

export type WpCoreQuoteBlockAttributesUnion = WpCoreQuoteBlockAttributes | WpCoreQuoteBlockDeprecatedV1Attributes | WpCoreQuoteBlockDeprecatedV2Attributes | WpCoreQuoteBlockDeprecatedV3Attributes;

export type WpCoreQuoteBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  citation: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

export type WpCoreQuoteBlockDeprecatedV2Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  citation: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

export type WpCoreQuoteBlockDeprecatedV3Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  citation: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** core/rss block */
export type WpCoreRssBlock = WpBlock & {
  attributes?: Maybe<WpCoreRssBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreRssBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  blockLayout: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  columns: Scalars['Float'];
  displayAuthor: Scalars['Boolean'];
  displayDate: Scalars['Boolean'];
  displayExcerpt: Scalars['Boolean'];
  excerptLength: Scalars['Float'];
  feedURL: Scalars['String'];
  itemsToShow: Scalars['Float'];
};

/** core/search block */
export type WpCoreSearchBlock = WpBlock & {
  attributes?: Maybe<WpCoreSearchBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreSearchBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  buttonText?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder: Scalars['String'];
};

/** core/separator block */
export type WpCoreSeparatorBlock = WpBlock & {
  attributes?: Maybe<WpCoreSeparatorBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreSeparatorBlockAttributes = {
  anchor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  customColor?: Maybe<Scalars['String']>;
};

/** core/shortcode block */
export type WpCoreShortcodeBlock = WpBlock & {
  attributes?: Maybe<WpCoreShortcodeBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreShortcodeBlockAttributes = {
  text?: Maybe<Scalars['String']>;
};

/** core/social-link block */
export type WpCoreSocialLinkBlock = WpBlock & {
  attributes?: Maybe<WpCoreSocialLinkBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreSocialLinkBlockAttributes = {
  className?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  service?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core/social-links block */
export type WpCoreSocialLinksBlock = WpBlock & {
  attributes?: Maybe<WpCoreSocialLinksBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreSocialLinksBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
};

/** core/spacer block */
export type WpCoreSpacerBlock = WpBlock & {
  attributes?: Maybe<WpCoreSpacerBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreSpacerBlockAttributes = {
  anchor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  height: Scalars['Float'];
};

/** core/subhead block */
export type WpCoreSubheadBlock = WpBlock & {
  attributes?: Maybe<WpCoreSubheadBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreSubheadBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

/** core/table block */
export type WpCoreTableBlock = WpBlock & {
  attributes?: Maybe<WpCoreTableBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreTableBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  body: Array<Maybe<WpCoreTableBlockAttributesBody>>;
  caption: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  foot: Array<Maybe<WpCoreTableBlockAttributesFoot>>;
  hasFixedLayout: Scalars['Boolean'];
  head: Array<Maybe<WpCoreTableBlockAttributesHead>>;
};

export type WpCoreTableBlockAttributesBody = {
  cells: Array<Maybe<WpCoreTableBlockAttributesBodyCells>>;
};

export type WpCoreTableBlockAttributesBodyCells = {
  align?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

export type WpCoreTableBlockAttributesFoot = {
  cells: Array<Maybe<WpCoreTableBlockAttributesFootCells>>;
};

export type WpCoreTableBlockAttributesFootCells = {
  align?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

export type WpCoreTableBlockAttributesHead = {
  cells: Array<Maybe<WpCoreTableBlockAttributesHeadCells>>;
};

export type WpCoreTableBlockAttributesHeadCells = {
  align?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

export type WpCoreTableBlockAttributesUnion = WpCoreTableBlockAttributes | WpCoreTableBlockDeprecatedV1Attributes;

export type WpCoreTableBlockDeprecatedV1Attributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  body: Array<Maybe<WpCoreTableBlockDeprecatedV1AttributesBody>>;
  caption: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  foot: Array<Maybe<WpCoreTableBlockDeprecatedV1AttributesFoot>>;
  hasFixedLayout: Scalars['Boolean'];
  head: Array<Maybe<WpCoreTableBlockDeprecatedV1AttributesHead>>;
};

export type WpCoreTableBlockDeprecatedV1AttributesBody = {
  cells: Array<Maybe<WpCoreTableBlockDeprecatedV1AttributesBodyCells>>;
};

export type WpCoreTableBlockDeprecatedV1AttributesBodyCells = {
  align?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

export type WpCoreTableBlockDeprecatedV1AttributesFoot = {
  cells: Array<Maybe<WpCoreTableBlockDeprecatedV1AttributesFootCells>>;
};

export type WpCoreTableBlockDeprecatedV1AttributesFootCells = {
  align?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

export type WpCoreTableBlockDeprecatedV1AttributesHead = {
  cells: Array<Maybe<WpCoreTableBlockDeprecatedV1AttributesHeadCells>>;
};

export type WpCoreTableBlockDeprecatedV1AttributesHeadCells = {
  align?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

/** core/tag-cloud block */
export type WpCoreTagCloudBlock = WpBlock & {
  attributes?: Maybe<WpCoreTagCloudBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreTagCloudBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  showTagCounts: Scalars['Boolean'];
  taxonomy: Scalars['String'];
};

/** core/text-columns block */
export type WpCoreTextColumnsBlock = WpBlock & {
  attributes?: Maybe<WpCoreTextColumnsBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreTextColumnsBlockAttributes = {
  className?: Maybe<Scalars['String']>;
  columns: Scalars['Float'];
  content: Array<Maybe<WpCoreTextColumnsBlockAttributesContent>>;
  width?: Maybe<Scalars['String']>;
};

export type WpCoreTextColumnsBlockAttributesContent = {
  wpChildren?: Maybe<Scalars['String']>;
};

/** core/verse block */
export type WpCoreVerseBlock = WpBlock & {
  attributes?: Maybe<WpCoreVerseBlockAttributesUnion>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreVerseBlockAttributes = {
  anchor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  textAlign?: Maybe<Scalars['String']>;
};

export type WpCoreVerseBlockAttributesUnion = WpCoreVerseBlockAttributes | WpCoreVerseBlockDeprecatedV1Attributes;

export type WpCoreVerseBlockDeprecatedV1Attributes = {
  anchor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  textAlign?: Maybe<Scalars['String']>;
};

/** core/video block */
export type WpCoreVideoBlock = WpBlock & {
  attributes?: Maybe<WpCoreVideoBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreVideoBlockAttributes = {
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  autoplay?: Maybe<Scalars['Boolean']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  controls: Scalars['Boolean'];
  id?: Maybe<Scalars['Float']>;
  loop?: Maybe<Scalars['Boolean']>;
  muted?: Maybe<Scalars['Boolean']>;
  playsInline?: Maybe<Scalars['Boolean']>;
  poster?: Maybe<Scalars['String']>;
  preload: Scalars['String'];
  src?: Maybe<Scalars['String']>;
};

export type WpDatabaseIdentifier = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
};

/** The discussion setting type */
export type WpDiscussionSettings = {
  /** Atļaut lietotājiem pievienot komentārus jauniem rakstiem. */
  defaultCommentStatus?: Maybe<Scalars['String']>;
  /** Atļaut saites paziņojumus no citiem blogiem (atpakaļziņojumus un atpakaļsaites) jaunajiem rakstiem. */
  defaultPingStatus?: Maybe<Scalars['String']>;
};

export type WpDiscussionSettingsFilterInput = {
  defaultCommentStatus?: Maybe<StringQueryOperatorInput>;
  defaultPingStatus?: Maybe<StringQueryOperatorInput>;
};

export type WpEdge = {
  next?: Maybe<Wp>;
  node: Wp;
  previous?: Maybe<Wp>;
};

/** The event type */
export type WpEvent = Node & WpNode & WpContentNode & WpDatabaseIdentifier & WpNodeWithTemplate & WpUniformResourceIdentifiable & WpNodeWithTitle & WpMenuItemLinkable & {
  /** Connection between the event type and the ContentType type */
  contentType?: Maybe<WpEventToContentTypeConnectionEdge>;
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  event?: Maybe<WpEvent_Event>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  modified?: Maybe<Scalars['Date']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['Date']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URI path for the resource */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


/** The event type */
export type WpEventDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The event type */
export type WpEventDateGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The event type */
export type WpEventModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The event type */
export type WpEventModifiedGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Field Group */
export type WpEvent_Event = {
  date?: Maybe<Scalars['Date']>;
  fieldGroupName?: Maybe<Scalars['String']>;
  link?: Maybe<WpAcf_Link>;
};


/** Field Group */
export type WpEvent_EventDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type WpEvent_EventFilterInput = {
  date?: Maybe<DateQueryOperatorInput>;
  fieldGroupName?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<WpAcf_LinkFilterInput>;
};

export type WpEventConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpEventEdge>;
  nodes: Array<WpEvent>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpEventGroupConnection>;
};


export type WpEventConnectionDistinctArgs = {
  field: WpEventFieldsEnum;
};


export type WpEventConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpEventFieldsEnum;
};

export type WpEventEdge = {
  next?: Maybe<WpEvent>;
  node: WpEvent;
  previous?: Maybe<WpEvent>;
};

export type WpEventFieldsEnum = 
  | 'contentType___node___archivePath'
  | 'contentType___node___canExport'
  | 'contentType___node___connectedTaxonomies___nodes'
  | 'contentType___node___contentNodes___nodes'
  | 'contentType___node___deleteWithUser'
  | 'contentType___node___description'
  | 'contentType___node___excludeFromSearch'
  | 'contentType___node___graphqlPluralName'
  | 'contentType___node___graphqlSingleName'
  | 'contentType___node___hasArchive'
  | 'contentType___node___hierarchical'
  | 'contentType___node___id'
  | 'contentType___node___isFrontPage'
  | 'contentType___node___isPostsPage'
  | 'contentType___node___label'
  | 'contentType___node___labels___addNew'
  | 'contentType___node___labels___addNewItem'
  | 'contentType___node___labels___allItems'
  | 'contentType___node___labels___archives'
  | 'contentType___node___labels___attributes'
  | 'contentType___node___labels___editItem'
  | 'contentType___node___labels___featuredImage'
  | 'contentType___node___labels___filterItemsList'
  | 'contentType___node___labels___insertIntoItem'
  | 'contentType___node___labels___itemsList'
  | 'contentType___node___labels___itemsListNavigation'
  | 'contentType___node___labels___menuName'
  | 'contentType___node___labels___name'
  | 'contentType___node___labels___newItem'
  | 'contentType___node___labels___notFound'
  | 'contentType___node___labels___notFoundInTrash'
  | 'contentType___node___labels___parentItemColon'
  | 'contentType___node___labels___removeFeaturedImage'
  | 'contentType___node___labels___searchItems'
  | 'contentType___node___labels___setFeaturedImage'
  | 'contentType___node___labels___singularName'
  | 'contentType___node___labels___uploadedToThisItem'
  | 'contentType___node___labels___useFeaturedImage'
  | 'contentType___node___labels___viewItem'
  | 'contentType___node___labels___viewItems'
  | 'contentType___node___menuIcon'
  | 'contentType___node___menuPosition'
  | 'contentType___node___name'
  | 'contentType___node___public'
  | 'contentType___node___publiclyQueryable'
  | 'contentType___node___restBase'
  | 'contentType___node___restControllerClass'
  | 'contentType___node___showInAdminBar'
  | 'contentType___node___showInGraphql'
  | 'contentType___node___showInMenu'
  | 'contentType___node___showInNavMenus'
  | 'contentType___node___showInRest'
  | 'contentType___node___showUi'
  | 'contentType___node___uri'
  | 'contentType___node___nodeType'
  | 'contentType___node___parent___id'
  | 'contentType___node___parent___children'
  | 'contentType___node___children'
  | 'contentType___node___children___id'
  | 'contentType___node___children___children'
  | 'contentType___node___internal___content'
  | 'contentType___node___internal___contentDigest'
  | 'contentType___node___internal___description'
  | 'contentType___node___internal___fieldOwners'
  | 'contentType___node___internal___ignoreType'
  | 'contentType___node___internal___mediaType'
  | 'contentType___node___internal___owner'
  | 'contentType___node___internal___type'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'desiredSlug'
  | 'enclosure'
  | 'event___date'
  | 'event___fieldGroupName'
  | 'event___link___target'
  | 'event___link___title'
  | 'event___link___url'
  | 'guid'
  | 'id'
  | 'lastEditedBy___node___allNews___nodes'
  | 'lastEditedBy___node___avatar___default'
  | 'lastEditedBy___node___avatar___extraAttr'
  | 'lastEditedBy___node___avatar___forceDefault'
  | 'lastEditedBy___node___avatar___foundAvatar'
  | 'lastEditedBy___node___avatar___height'
  | 'lastEditedBy___node___avatar___rating'
  | 'lastEditedBy___node___avatar___scheme'
  | 'lastEditedBy___node___avatar___size'
  | 'lastEditedBy___node___avatar___url'
  | 'lastEditedBy___node___avatar___width'
  | 'lastEditedBy___node___blockEditorPreviews___nodes'
  | 'lastEditedBy___node___capKey'
  | 'lastEditedBy___node___capabilities'
  | 'lastEditedBy___node___comments___nodes'
  | 'lastEditedBy___node___databaseId'
  | 'lastEditedBy___node___description'
  | 'lastEditedBy___node___email'
  | 'lastEditedBy___node___extraCapabilities'
  | 'lastEditedBy___node___firstName'
  | 'lastEditedBy___node___id'
  | 'lastEditedBy___node___lastName'
  | 'lastEditedBy___node___locale'
  | 'lastEditedBy___node___name'
  | 'lastEditedBy___node___nicename'
  | 'lastEditedBy___node___nickname'
  | 'lastEditedBy___node___pages___nodes'
  | 'lastEditedBy___node___posts___nodes'
  | 'lastEditedBy___node___registeredDate'
  | 'lastEditedBy___node___roles___nodes'
  | 'lastEditedBy___node___slug'
  | 'lastEditedBy___node___uri'
  | 'lastEditedBy___node___url'
  | 'lastEditedBy___node___username'
  | 'lastEditedBy___node___nodeType'
  | 'lastEditedBy___node___parent___id'
  | 'lastEditedBy___node___parent___children'
  | 'lastEditedBy___node___children'
  | 'lastEditedBy___node___children___id'
  | 'lastEditedBy___node___children___children'
  | 'lastEditedBy___node___internal___content'
  | 'lastEditedBy___node___internal___contentDigest'
  | 'lastEditedBy___node___internal___description'
  | 'lastEditedBy___node___internal___fieldOwners'
  | 'lastEditedBy___node___internal___ignoreType'
  | 'lastEditedBy___node___internal___mediaType'
  | 'lastEditedBy___node___internal___owner'
  | 'lastEditedBy___node___internal___type'
  | 'link'
  | 'modified'
  | 'modifiedGmt'
  | 'slug'
  | 'status'
  | 'template___templateName'
  | 'title'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpEventFilterInput = {
  contentType?: Maybe<WpEventToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  event?: Maybe<WpEvent_EventFilterInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpEventGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpEventEdge>;
  nodes: Array<WpEvent>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpEventSortInput = {
  fields?: Maybe<Array<Maybe<WpEventFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the event type and the ContentType type */
export type WpEventToContentTypeConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpContentType>;
};

export type WpEventToContentTypeConnectionEdgeFilterInput = {
  node?: Maybe<WpContentTypeFilterInput>;
};

export type WpFieldsEnum = 
  | 'allSettings___discussionSettingsDefaultCommentStatus'
  | 'allSettings___discussionSettingsDefaultPingStatus'
  | 'allSettings___generalSettingsDateFormat'
  | 'allSettings___generalSettingsDescription'
  | 'allSettings___generalSettingsEmail'
  | 'allSettings___generalSettingsLanguage'
  | 'allSettings___generalSettingsStartOfWeek'
  | 'allSettings___generalSettingsTimeFormat'
  | 'allSettings___generalSettingsTimezone'
  | 'allSettings___generalSettingsTitle'
  | 'allSettings___generalSettingsUrl'
  | 'allSettings___readingSettingsPostsPerPage'
  | 'allSettings___writingSettingsDefaultCategory'
  | 'allSettings___writingSettingsDefaultPostFormat'
  | 'allSettings___writingSettingsUseSmilies'
  | 'discussionSettings___defaultCommentStatus'
  | 'discussionSettings___defaultPingStatus'
  | 'generalSettings___dateFormat'
  | 'generalSettings___description'
  | 'generalSettings___email'
  | 'generalSettings___language'
  | 'generalSettings___startOfWeek'
  | 'generalSettings___timeFormat'
  | 'generalSettings___timezone'
  | 'generalSettings___title'
  | 'generalSettings___url'
  | 'readingSettings___postsPerPage'
  | 'wpGatsby___arePrettyPermalinksEnabled'
  | 'writingSettings___defaultCategory'
  | 'writingSettings___defaultPostFormat'
  | 'writingSettings___useSmilies'
  | 'nodeType'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpFilterInput = {
  allSettings?: Maybe<WpSettingsFilterInput>;
  discussionSettings?: Maybe<WpDiscussionSettingsFilterInput>;
  generalSettings?: Maybe<WpGeneralSettingsFilterInput>;
  readingSettings?: Maybe<WpReadingSettingsFilterInput>;
  wpGatsby?: Maybe<WpWpGatsbyFilterInput>;
  writingSettings?: Maybe<WpWritingSettingsFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

/** The general setting type */
export type WpGeneralSettings = {
  /** Datuma formāts visām datumu virknēm. */
  dateFormat?: Maybe<Scalars['String']>;
  /** Vietnes sauklis (moto). */
  description?: Maybe<Scalars['String']>;
  /** Šī adrese tiek izmantota administrēšanas mērķiem, piem. jauna lietotāja apziņošanai. */
  email?: Maybe<Scalars['String']>;
  /** WordPress locales kods. */
  language?: Maybe<Scalars['String']>;
  /** Nedēļas dienas numurs, kurā nedēļa sākas. */
  startOfWeek?: Maybe<Scalars['Int']>;
  /** Laika formāts visiem laika rādījumiem. */
  timeFormat?: Maybe<Scalars['String']>;
  /** Pilsēta jūsu laika joslā. */
  timezone?: Maybe<Scalars['String']>;
  /** Vietnes nosaukums. */
  title?: Maybe<Scalars['String']>;
  /** Vietnes URL. */
  url?: Maybe<Scalars['String']>;
};

export type WpGeneralSettingsFilterInput = {
  dateFormat?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  startOfWeek?: Maybe<IntQueryOperatorInput>;
  timeFormat?: Maybe<StringQueryOperatorInput>;
  timezone?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type WpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpEdge>;
  nodes: Array<Wp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpHierarchicalContentNode = {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The parent of the node. The parent object can be of various types */
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type WpHierarchicalContentNodeToContentNodeAncestorsConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

export type WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput = {
  nodes?: Maybe<WpContentNodeFilterListInput>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type WpHierarchicalContentNodeToContentNodeChildrenConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

export type WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput = {
  nodes?: Maybe<WpContentNodeFilterListInput>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type WpHierarchicalContentNodeToParentContentNodeConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpContentNode>;
};

export type WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput = {
  node?: Maybe<WpContentNodeFilterInput>;
};

export type WpHierarchicalTermNode = {
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
};

/** lazyblock-core/free block */
export type WpLazyblockCoreFreeBlock = WpBlock & {
  attributes?: Maybe<WpLazyblockCoreFreeBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpLazyblockCoreFreeBlockAttributes = {
  className?: Maybe<Scalars['String']>;
};

/** lazyblock/header block */
export type WpLazyblockHeaderBlock = WpBlock & {
  attributes?: Maybe<WpLazyblockHeaderBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpLazyblockHeaderBlockAttributes = {
  align: Scalars['String'];
  anchor: Scalars['String'];
  blockId: Scalars['String'];
  blockUniqueClass: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  ghostkitSR: Scalars['String'];
  ghostkitSpacings: Scalars['JSON'];
  lazyblock: Scalars['JSON'];
  links: Scalars['String'];
  logo: Scalars['String'];
};

/** lazyblock/hero block */
export type WpLazyblockHeroBlock = WpBlock & {
  attributes?: Maybe<WpLazyblockHeroBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpLazyblockHeroBlockAttributes = {
  align: Scalars['String'];
  anchor: Scalars['String'];
  backgroundImage: Scalars['String'];
  blockId: Scalars['String'];
  blockUniqueClass: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  ghostkitSR: Scalars['String'];
  ghostkitSpacings: Scalars['JSON'];
  lazyblock: Scalars['JSON'];
  leftButtonLink: Scalars['String'];
  leftButtonText: Scalars['String'];
  rightButtonLink: Scalars['String'];
  rightButtonText: Scalars['String'];
  text: Scalars['String'];
};

/** lazyblock/infocard block */
export type WpLazyblockInfocardBlock = WpBlock & {
  attributes?: Maybe<WpLazyblockInfocardBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpLazyblockInfocardBlockAttributes = {
  align: Scalars['String'];
  anchor: Scalars['String'];
  blockId: Scalars['String'];
  blockUniqueClass: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  ghostkitSR: Scalars['String'];
  ghostkitSpacings: Scalars['JSON'];
  image: Scalars['String'];
  lazyblock: Scalars['JSON'];
  text: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};

/** lazyblock/news-preview block */
export type WpLazyblockNewsPreviewBlock = WpBlock & {
  attributes?: Maybe<WpLazyblockNewsPreviewBlockAttributes>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpLazyblockNewsPreviewBlockAttributes = {
  align: Scalars['String'];
  anchor: Scalars['String'];
  blockId: Scalars['String'];
  blockUniqueClass: Scalars['String'];
  className: Scalars['String'];
  excerpt: Scalars['String'];
  ghostkitSR: Scalars['String'];
  ghostkitSpacings: Scalars['JSON'];
  image: Scalars['String'];
  lazyblock: Scalars['JSON'];
};

/** File details for a Media Item */
export type WpMediaDetails = {
  /** The height of the mediaItem */
  file?: Maybe<Scalars['String']>;
  /** The height of the mediaItem */
  height?: Maybe<Scalars['Int']>;
  meta?: Maybe<WpMediaItemMeta>;
  /** The available sizes of the mediaItem */
  sizes?: Maybe<Array<Maybe<WpMediaSize>>>;
  /** The width of the mediaItem */
  width?: Maybe<Scalars['Int']>;
};

export type WpMediaDetailsFilterInput = {
  file?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  meta?: Maybe<WpMediaItemMetaFilterInput>;
  sizes?: Maybe<WpMediaSizeFilterListInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

/** The mediaItem type */
export type WpMediaItem = Node & WpNode & WpContentNode & WpDatabaseIdentifier & WpNodeWithTemplate & WpUniformResourceIdentifiable & WpNodeWithTitle & WpNodeWithAuthor & WpNodeWithComments & WpHierarchicalContentNode & {
  /** Alternative text to display when resource is not displayed */
  altText?: Maybe<Scalars['String']>;
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** The caption for the resource */
  caption?: Maybe<Scalars['String']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnection>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for compatibility.
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the mediaItem type and the Comment type */
  comments?: Maybe<WpMediaItemToCommentConnection>;
  /** Connection between the mediaItem type and the ContentType type */
  contentType?: Maybe<WpMediaItemToContentTypeConnectionEdge>;
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** Description of the image (stored as post_content) */
  description?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** The filesize in bytes of the resource */
  fileSize?: Maybe<Scalars['Int']>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** Details about the mediaItem */
  mediaDetails?: Maybe<WpMediaDetails>;
  /** Url of the mediaItem */
  mediaItemUrl?: Maybe<Scalars['String']>;
  /** Type of resource */
  mediaType?: Maybe<Scalars['String']>;
  /** The mime type of the mediaItem */
  mimeType?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  modified?: Maybe<Scalars['Date']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['Date']>;
  /** The parent of the node. The parent object can be of various types */
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** The sizes attribute value for an image. */
  sizes?: Maybe<Scalars['String']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  slug?: Maybe<Scalars['String']>;
  /** Url of the mediaItem */
  sourceUrl?: Maybe<Scalars['String']>;
  /**
   * The srcset attribute specifies the URL of the image to use in different
   * situations. It is a comma separated string of urls and their widths.
   */
  srcSet?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URI path for the resource */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  /** @deprecated MediaItem.remoteFile was renamed to localFile */
  remoteFile?: Maybe<File>;
  localFile?: Maybe<File>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


/** The mediaItem type */
export type WpMediaItemDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The mediaItem type */
export type WpMediaItemDateGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The mediaItem type */
export type WpMediaItemModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The mediaItem type */
export type WpMediaItemModifiedGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type WpMediaItemConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpMediaItemEdge>;
  nodes: Array<WpMediaItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpMediaItemGroupConnection>;
};


export type WpMediaItemConnectionDistinctArgs = {
  field: WpMediaItemFieldsEnum;
};


export type WpMediaItemConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpMediaItemFieldsEnum;
};

export type WpMediaItemEdge = {
  next?: Maybe<WpMediaItem>;
  node: WpMediaItem;
  previous?: Maybe<WpMediaItem>;
};

export type WpMediaItemFieldsEnum = 
  | 'altText'
  | 'ancestors___nodes'
  | 'ancestors___nodes___databaseId'
  | 'ancestors___nodes___date'
  | 'ancestors___nodes___dateGmt'
  | 'ancestors___nodes___desiredSlug'
  | 'ancestors___nodes___enclosure'
  | 'ancestors___nodes___guid'
  | 'ancestors___nodes___id'
  | 'ancestors___nodes___link'
  | 'ancestors___nodes___modified'
  | 'ancestors___nodes___modifiedGmt'
  | 'ancestors___nodes___slug'
  | 'ancestors___nodes___status'
  | 'ancestors___nodes___template___templateName'
  | 'ancestors___nodes___uri'
  | 'ancestors___nodes___nodeType'
  | 'author___node___allNews___nodes'
  | 'author___node___avatar___default'
  | 'author___node___avatar___extraAttr'
  | 'author___node___avatar___forceDefault'
  | 'author___node___avatar___foundAvatar'
  | 'author___node___avatar___height'
  | 'author___node___avatar___rating'
  | 'author___node___avatar___scheme'
  | 'author___node___avatar___size'
  | 'author___node___avatar___url'
  | 'author___node___avatar___width'
  | 'author___node___blockEditorPreviews___nodes'
  | 'author___node___capKey'
  | 'author___node___capabilities'
  | 'author___node___comments___nodes'
  | 'author___node___databaseId'
  | 'author___node___description'
  | 'author___node___email'
  | 'author___node___extraCapabilities'
  | 'author___node___firstName'
  | 'author___node___id'
  | 'author___node___lastName'
  | 'author___node___locale'
  | 'author___node___name'
  | 'author___node___nicename'
  | 'author___node___nickname'
  | 'author___node___pages___nodes'
  | 'author___node___posts___nodes'
  | 'author___node___registeredDate'
  | 'author___node___roles___nodes'
  | 'author___node___slug'
  | 'author___node___uri'
  | 'author___node___url'
  | 'author___node___username'
  | 'author___node___nodeType'
  | 'author___node___parent___id'
  | 'author___node___parent___children'
  | 'author___node___children'
  | 'author___node___children___id'
  | 'author___node___children___children'
  | 'author___node___internal___content'
  | 'author___node___internal___contentDigest'
  | 'author___node___internal___description'
  | 'author___node___internal___fieldOwners'
  | 'author___node___internal___ignoreType'
  | 'author___node___internal___mediaType'
  | 'author___node___internal___owner'
  | 'author___node___internal___type'
  | 'authorDatabaseId'
  | 'authorId'
  | 'caption'
  | 'wpChildren___nodes'
  | 'wpChildren___nodes___databaseId'
  | 'wpChildren___nodes___date'
  | 'wpChildren___nodes___dateGmt'
  | 'wpChildren___nodes___desiredSlug'
  | 'wpChildren___nodes___enclosure'
  | 'wpChildren___nodes___guid'
  | 'wpChildren___nodes___id'
  | 'wpChildren___nodes___link'
  | 'wpChildren___nodes___modified'
  | 'wpChildren___nodes___modifiedGmt'
  | 'wpChildren___nodes___slug'
  | 'wpChildren___nodes___status'
  | 'wpChildren___nodes___template___templateName'
  | 'wpChildren___nodes___uri'
  | 'wpChildren___nodes___nodeType'
  | 'commentCount'
  | 'commentStatus'
  | 'comments___nodes'
  | 'comments___nodes___agent'
  | 'comments___nodes___approved'
  | 'comments___nodes___authorIp'
  | 'comments___nodes___content'
  | 'comments___nodes___databaseId'
  | 'comments___nodes___date'
  | 'comments___nodes___dateGmt'
  | 'comments___nodes___id'
  | 'comments___nodes___karma'
  | 'comments___nodes___parentDatabaseId'
  | 'comments___nodes___parentId'
  | 'comments___nodes___replies___nodes'
  | 'comments___nodes___type'
  | 'comments___nodes___nodeType'
  | 'comments___nodes___parent___id'
  | 'comments___nodes___parent___children'
  | 'comments___nodes___children'
  | 'comments___nodes___children___id'
  | 'comments___nodes___children___children'
  | 'comments___nodes___internal___content'
  | 'comments___nodes___internal___contentDigest'
  | 'comments___nodes___internal___description'
  | 'comments___nodes___internal___fieldOwners'
  | 'comments___nodes___internal___ignoreType'
  | 'comments___nodes___internal___mediaType'
  | 'comments___nodes___internal___owner'
  | 'comments___nodes___internal___type'
  | 'contentType___node___archivePath'
  | 'contentType___node___canExport'
  | 'contentType___node___connectedTaxonomies___nodes'
  | 'contentType___node___contentNodes___nodes'
  | 'contentType___node___deleteWithUser'
  | 'contentType___node___description'
  | 'contentType___node___excludeFromSearch'
  | 'contentType___node___graphqlPluralName'
  | 'contentType___node___graphqlSingleName'
  | 'contentType___node___hasArchive'
  | 'contentType___node___hierarchical'
  | 'contentType___node___id'
  | 'contentType___node___isFrontPage'
  | 'contentType___node___isPostsPage'
  | 'contentType___node___label'
  | 'contentType___node___labels___addNew'
  | 'contentType___node___labels___addNewItem'
  | 'contentType___node___labels___allItems'
  | 'contentType___node___labels___archives'
  | 'contentType___node___labels___attributes'
  | 'contentType___node___labels___editItem'
  | 'contentType___node___labels___featuredImage'
  | 'contentType___node___labels___filterItemsList'
  | 'contentType___node___labels___insertIntoItem'
  | 'contentType___node___labels___itemsList'
  | 'contentType___node___labels___itemsListNavigation'
  | 'contentType___node___labels___menuName'
  | 'contentType___node___labels___name'
  | 'contentType___node___labels___newItem'
  | 'contentType___node___labels___notFound'
  | 'contentType___node___labels___notFoundInTrash'
  | 'contentType___node___labels___parentItemColon'
  | 'contentType___node___labels___removeFeaturedImage'
  | 'contentType___node___labels___searchItems'
  | 'contentType___node___labels___setFeaturedImage'
  | 'contentType___node___labels___singularName'
  | 'contentType___node___labels___uploadedToThisItem'
  | 'contentType___node___labels___useFeaturedImage'
  | 'contentType___node___labels___viewItem'
  | 'contentType___node___labels___viewItems'
  | 'contentType___node___menuIcon'
  | 'contentType___node___menuPosition'
  | 'contentType___node___name'
  | 'contentType___node___public'
  | 'contentType___node___publiclyQueryable'
  | 'contentType___node___restBase'
  | 'contentType___node___restControllerClass'
  | 'contentType___node___showInAdminBar'
  | 'contentType___node___showInGraphql'
  | 'contentType___node___showInMenu'
  | 'contentType___node___showInNavMenus'
  | 'contentType___node___showInRest'
  | 'contentType___node___showUi'
  | 'contentType___node___uri'
  | 'contentType___node___nodeType'
  | 'contentType___node___parent___id'
  | 'contentType___node___parent___children'
  | 'contentType___node___children'
  | 'contentType___node___children___id'
  | 'contentType___node___children___children'
  | 'contentType___node___internal___content'
  | 'contentType___node___internal___contentDigest'
  | 'contentType___node___internal___description'
  | 'contentType___node___internal___fieldOwners'
  | 'contentType___node___internal___ignoreType'
  | 'contentType___node___internal___mediaType'
  | 'contentType___node___internal___owner'
  | 'contentType___node___internal___type'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'description'
  | 'desiredSlug'
  | 'enclosure'
  | 'fileSize'
  | 'guid'
  | 'id'
  | 'lastEditedBy___node___allNews___nodes'
  | 'lastEditedBy___node___avatar___default'
  | 'lastEditedBy___node___avatar___extraAttr'
  | 'lastEditedBy___node___avatar___forceDefault'
  | 'lastEditedBy___node___avatar___foundAvatar'
  | 'lastEditedBy___node___avatar___height'
  | 'lastEditedBy___node___avatar___rating'
  | 'lastEditedBy___node___avatar___scheme'
  | 'lastEditedBy___node___avatar___size'
  | 'lastEditedBy___node___avatar___url'
  | 'lastEditedBy___node___avatar___width'
  | 'lastEditedBy___node___blockEditorPreviews___nodes'
  | 'lastEditedBy___node___capKey'
  | 'lastEditedBy___node___capabilities'
  | 'lastEditedBy___node___comments___nodes'
  | 'lastEditedBy___node___databaseId'
  | 'lastEditedBy___node___description'
  | 'lastEditedBy___node___email'
  | 'lastEditedBy___node___extraCapabilities'
  | 'lastEditedBy___node___firstName'
  | 'lastEditedBy___node___id'
  | 'lastEditedBy___node___lastName'
  | 'lastEditedBy___node___locale'
  | 'lastEditedBy___node___name'
  | 'lastEditedBy___node___nicename'
  | 'lastEditedBy___node___nickname'
  | 'lastEditedBy___node___pages___nodes'
  | 'lastEditedBy___node___posts___nodes'
  | 'lastEditedBy___node___registeredDate'
  | 'lastEditedBy___node___roles___nodes'
  | 'lastEditedBy___node___slug'
  | 'lastEditedBy___node___uri'
  | 'lastEditedBy___node___url'
  | 'lastEditedBy___node___username'
  | 'lastEditedBy___node___nodeType'
  | 'lastEditedBy___node___parent___id'
  | 'lastEditedBy___node___parent___children'
  | 'lastEditedBy___node___children'
  | 'lastEditedBy___node___children___id'
  | 'lastEditedBy___node___children___children'
  | 'lastEditedBy___node___internal___content'
  | 'lastEditedBy___node___internal___contentDigest'
  | 'lastEditedBy___node___internal___description'
  | 'lastEditedBy___node___internal___fieldOwners'
  | 'lastEditedBy___node___internal___ignoreType'
  | 'lastEditedBy___node___internal___mediaType'
  | 'lastEditedBy___node___internal___owner'
  | 'lastEditedBy___node___internal___type'
  | 'link'
  | 'mediaDetails___file'
  | 'mediaDetails___height'
  | 'mediaDetails___meta___aperture'
  | 'mediaDetails___meta___camera'
  | 'mediaDetails___meta___caption'
  | 'mediaDetails___meta___copyright'
  | 'mediaDetails___meta___createdTimestamp'
  | 'mediaDetails___meta___credit'
  | 'mediaDetails___meta___focalLength'
  | 'mediaDetails___meta___iso'
  | 'mediaDetails___meta___keywords'
  | 'mediaDetails___meta___orientation'
  | 'mediaDetails___meta___shutterSpeed'
  | 'mediaDetails___meta___title'
  | 'mediaDetails___sizes'
  | 'mediaDetails___sizes___file'
  | 'mediaDetails___sizes___fileSize'
  | 'mediaDetails___sizes___height'
  | 'mediaDetails___sizes___mimeType'
  | 'mediaDetails___sizes___name'
  | 'mediaDetails___sizes___sourceUrl'
  | 'mediaDetails___sizes___width'
  | 'mediaDetails___width'
  | 'mediaItemUrl'
  | 'mediaType'
  | 'mimeType'
  | 'modified'
  | 'modifiedGmt'
  | 'wpParent___node___databaseId'
  | 'wpParent___node___date'
  | 'wpParent___node___dateGmt'
  | 'wpParent___node___desiredSlug'
  | 'wpParent___node___enclosure'
  | 'wpParent___node___guid'
  | 'wpParent___node___id'
  | 'wpParent___node___link'
  | 'wpParent___node___modified'
  | 'wpParent___node___modifiedGmt'
  | 'wpParent___node___slug'
  | 'wpParent___node___status'
  | 'wpParent___node___template___templateName'
  | 'wpParent___node___uri'
  | 'wpParent___node___nodeType'
  | 'parentDatabaseId'
  | 'parentId'
  | 'sizes'
  | 'slug'
  | 'sourceUrl'
  | 'srcSet'
  | 'status'
  | 'template___templateName'
  | 'title'
  | 'uri'
  | 'nodeType'
  | 'remoteFile___sourceInstanceName'
  | 'remoteFile___absolutePath'
  | 'remoteFile___relativePath'
  | 'remoteFile___extension'
  | 'remoteFile___size'
  | 'remoteFile___prettySize'
  | 'remoteFile___modifiedTime'
  | 'remoteFile___accessTime'
  | 'remoteFile___changeTime'
  | 'remoteFile___birthTime'
  | 'remoteFile___root'
  | 'remoteFile___dir'
  | 'remoteFile___base'
  | 'remoteFile___ext'
  | 'remoteFile___name'
  | 'remoteFile___relativeDirectory'
  | 'remoteFile___dev'
  | 'remoteFile___mode'
  | 'remoteFile___nlink'
  | 'remoteFile___uid'
  | 'remoteFile___gid'
  | 'remoteFile___rdev'
  | 'remoteFile___ino'
  | 'remoteFile___atimeMs'
  | 'remoteFile___mtimeMs'
  | 'remoteFile___ctimeMs'
  | 'remoteFile___atime'
  | 'remoteFile___mtime'
  | 'remoteFile___ctime'
  | 'remoteFile___birthtime'
  | 'remoteFile___birthtimeMs'
  | 'remoteFile___blksize'
  | 'remoteFile___blocks'
  | 'remoteFile___hash'
  | 'remoteFile___childImageSharp___fixed___base64'
  | 'remoteFile___childImageSharp___fixed___tracedSVG'
  | 'remoteFile___childImageSharp___fixed___aspectRatio'
  | 'remoteFile___childImageSharp___fixed___width'
  | 'remoteFile___childImageSharp___fixed___height'
  | 'remoteFile___childImageSharp___fixed___src'
  | 'remoteFile___childImageSharp___fixed___srcSet'
  | 'remoteFile___childImageSharp___fixed___srcWebp'
  | 'remoteFile___childImageSharp___fixed___srcSetWebp'
  | 'remoteFile___childImageSharp___fixed___originalName'
  | 'remoteFile___childImageSharp___resolutions___base64'
  | 'remoteFile___childImageSharp___resolutions___tracedSVG'
  | 'remoteFile___childImageSharp___resolutions___aspectRatio'
  | 'remoteFile___childImageSharp___resolutions___width'
  | 'remoteFile___childImageSharp___resolutions___height'
  | 'remoteFile___childImageSharp___resolutions___src'
  | 'remoteFile___childImageSharp___resolutions___srcSet'
  | 'remoteFile___childImageSharp___resolutions___srcWebp'
  | 'remoteFile___childImageSharp___resolutions___srcSetWebp'
  | 'remoteFile___childImageSharp___resolutions___originalName'
  | 'remoteFile___childImageSharp___fluid___base64'
  | 'remoteFile___childImageSharp___fluid___tracedSVG'
  | 'remoteFile___childImageSharp___fluid___aspectRatio'
  | 'remoteFile___childImageSharp___fluid___src'
  | 'remoteFile___childImageSharp___fluid___srcSet'
  | 'remoteFile___childImageSharp___fluid___srcWebp'
  | 'remoteFile___childImageSharp___fluid___srcSetWebp'
  | 'remoteFile___childImageSharp___fluid___sizes'
  | 'remoteFile___childImageSharp___fluid___originalImg'
  | 'remoteFile___childImageSharp___fluid___originalName'
  | 'remoteFile___childImageSharp___fluid___presentationWidth'
  | 'remoteFile___childImageSharp___fluid___presentationHeight'
  | 'remoteFile___childImageSharp___sizes___base64'
  | 'remoteFile___childImageSharp___sizes___tracedSVG'
  | 'remoteFile___childImageSharp___sizes___aspectRatio'
  | 'remoteFile___childImageSharp___sizes___src'
  | 'remoteFile___childImageSharp___sizes___srcSet'
  | 'remoteFile___childImageSharp___sizes___srcWebp'
  | 'remoteFile___childImageSharp___sizes___srcSetWebp'
  | 'remoteFile___childImageSharp___sizes___sizes'
  | 'remoteFile___childImageSharp___sizes___originalImg'
  | 'remoteFile___childImageSharp___sizes___originalName'
  | 'remoteFile___childImageSharp___sizes___presentationWidth'
  | 'remoteFile___childImageSharp___sizes___presentationHeight'
  | 'remoteFile___childImageSharp___gatsbyImageData'
  | 'remoteFile___childImageSharp___original___width'
  | 'remoteFile___childImageSharp___original___height'
  | 'remoteFile___childImageSharp___original___src'
  | 'remoteFile___childImageSharp___resize___src'
  | 'remoteFile___childImageSharp___resize___tracedSVG'
  | 'remoteFile___childImageSharp___resize___width'
  | 'remoteFile___childImageSharp___resize___height'
  | 'remoteFile___childImageSharp___resize___aspectRatio'
  | 'remoteFile___childImageSharp___resize___originalName'
  | 'remoteFile___childImageSharp___id'
  | 'remoteFile___childImageSharp___parent___id'
  | 'remoteFile___childImageSharp___parent___children'
  | 'remoteFile___childImageSharp___children'
  | 'remoteFile___childImageSharp___children___id'
  | 'remoteFile___childImageSharp___children___children'
  | 'remoteFile___childImageSharp___internal___content'
  | 'remoteFile___childImageSharp___internal___contentDigest'
  | 'remoteFile___childImageSharp___internal___description'
  | 'remoteFile___childImageSharp___internal___fieldOwners'
  | 'remoteFile___childImageSharp___internal___ignoreType'
  | 'remoteFile___childImageSharp___internal___mediaType'
  | 'remoteFile___childImageSharp___internal___owner'
  | 'remoteFile___childImageSharp___internal___type'
  | 'remoteFile___id'
  | 'remoteFile___parent___id'
  | 'remoteFile___parent___parent___id'
  | 'remoteFile___parent___parent___children'
  | 'remoteFile___parent___children'
  | 'remoteFile___parent___children___id'
  | 'remoteFile___parent___children___children'
  | 'remoteFile___parent___internal___content'
  | 'remoteFile___parent___internal___contentDigest'
  | 'remoteFile___parent___internal___description'
  | 'remoteFile___parent___internal___fieldOwners'
  | 'remoteFile___parent___internal___ignoreType'
  | 'remoteFile___parent___internal___mediaType'
  | 'remoteFile___parent___internal___owner'
  | 'remoteFile___parent___internal___type'
  | 'remoteFile___children'
  | 'remoteFile___children___id'
  | 'remoteFile___children___parent___id'
  | 'remoteFile___children___parent___children'
  | 'remoteFile___children___children'
  | 'remoteFile___children___children___id'
  | 'remoteFile___children___children___children'
  | 'remoteFile___children___internal___content'
  | 'remoteFile___children___internal___contentDigest'
  | 'remoteFile___children___internal___description'
  | 'remoteFile___children___internal___fieldOwners'
  | 'remoteFile___children___internal___ignoreType'
  | 'remoteFile___children___internal___mediaType'
  | 'remoteFile___children___internal___owner'
  | 'remoteFile___children___internal___type'
  | 'remoteFile___internal___content'
  | 'remoteFile___internal___contentDigest'
  | 'remoteFile___internal___description'
  | 'remoteFile___internal___fieldOwners'
  | 'remoteFile___internal___ignoreType'
  | 'remoteFile___internal___mediaType'
  | 'remoteFile___internal___owner'
  | 'remoteFile___internal___type'
  | 'localFile___sourceInstanceName'
  | 'localFile___absolutePath'
  | 'localFile___relativePath'
  | 'localFile___extension'
  | 'localFile___size'
  | 'localFile___prettySize'
  | 'localFile___modifiedTime'
  | 'localFile___accessTime'
  | 'localFile___changeTime'
  | 'localFile___birthTime'
  | 'localFile___root'
  | 'localFile___dir'
  | 'localFile___base'
  | 'localFile___ext'
  | 'localFile___name'
  | 'localFile___relativeDirectory'
  | 'localFile___dev'
  | 'localFile___mode'
  | 'localFile___nlink'
  | 'localFile___uid'
  | 'localFile___gid'
  | 'localFile___rdev'
  | 'localFile___ino'
  | 'localFile___atimeMs'
  | 'localFile___mtimeMs'
  | 'localFile___ctimeMs'
  | 'localFile___atime'
  | 'localFile___mtime'
  | 'localFile___ctime'
  | 'localFile___birthtime'
  | 'localFile___birthtimeMs'
  | 'localFile___blksize'
  | 'localFile___blocks'
  | 'localFile___hash'
  | 'localFile___childImageSharp___fixed___base64'
  | 'localFile___childImageSharp___fixed___tracedSVG'
  | 'localFile___childImageSharp___fixed___aspectRatio'
  | 'localFile___childImageSharp___fixed___width'
  | 'localFile___childImageSharp___fixed___height'
  | 'localFile___childImageSharp___fixed___src'
  | 'localFile___childImageSharp___fixed___srcSet'
  | 'localFile___childImageSharp___fixed___srcWebp'
  | 'localFile___childImageSharp___fixed___srcSetWebp'
  | 'localFile___childImageSharp___fixed___originalName'
  | 'localFile___childImageSharp___resolutions___base64'
  | 'localFile___childImageSharp___resolutions___tracedSVG'
  | 'localFile___childImageSharp___resolutions___aspectRatio'
  | 'localFile___childImageSharp___resolutions___width'
  | 'localFile___childImageSharp___resolutions___height'
  | 'localFile___childImageSharp___resolutions___src'
  | 'localFile___childImageSharp___resolutions___srcSet'
  | 'localFile___childImageSharp___resolutions___srcWebp'
  | 'localFile___childImageSharp___resolutions___srcSetWebp'
  | 'localFile___childImageSharp___resolutions___originalName'
  | 'localFile___childImageSharp___fluid___base64'
  | 'localFile___childImageSharp___fluid___tracedSVG'
  | 'localFile___childImageSharp___fluid___aspectRatio'
  | 'localFile___childImageSharp___fluid___src'
  | 'localFile___childImageSharp___fluid___srcSet'
  | 'localFile___childImageSharp___fluid___srcWebp'
  | 'localFile___childImageSharp___fluid___srcSetWebp'
  | 'localFile___childImageSharp___fluid___sizes'
  | 'localFile___childImageSharp___fluid___originalImg'
  | 'localFile___childImageSharp___fluid___originalName'
  | 'localFile___childImageSharp___fluid___presentationWidth'
  | 'localFile___childImageSharp___fluid___presentationHeight'
  | 'localFile___childImageSharp___sizes___base64'
  | 'localFile___childImageSharp___sizes___tracedSVG'
  | 'localFile___childImageSharp___sizes___aspectRatio'
  | 'localFile___childImageSharp___sizes___src'
  | 'localFile___childImageSharp___sizes___srcSet'
  | 'localFile___childImageSharp___sizes___srcWebp'
  | 'localFile___childImageSharp___sizes___srcSetWebp'
  | 'localFile___childImageSharp___sizes___sizes'
  | 'localFile___childImageSharp___sizes___originalImg'
  | 'localFile___childImageSharp___sizes___originalName'
  | 'localFile___childImageSharp___sizes___presentationWidth'
  | 'localFile___childImageSharp___sizes___presentationHeight'
  | 'localFile___childImageSharp___gatsbyImageData'
  | 'localFile___childImageSharp___original___width'
  | 'localFile___childImageSharp___original___height'
  | 'localFile___childImageSharp___original___src'
  | 'localFile___childImageSharp___resize___src'
  | 'localFile___childImageSharp___resize___tracedSVG'
  | 'localFile___childImageSharp___resize___width'
  | 'localFile___childImageSharp___resize___height'
  | 'localFile___childImageSharp___resize___aspectRatio'
  | 'localFile___childImageSharp___resize___originalName'
  | 'localFile___childImageSharp___id'
  | 'localFile___childImageSharp___parent___id'
  | 'localFile___childImageSharp___parent___children'
  | 'localFile___childImageSharp___children'
  | 'localFile___childImageSharp___children___id'
  | 'localFile___childImageSharp___children___children'
  | 'localFile___childImageSharp___internal___content'
  | 'localFile___childImageSharp___internal___contentDigest'
  | 'localFile___childImageSharp___internal___description'
  | 'localFile___childImageSharp___internal___fieldOwners'
  | 'localFile___childImageSharp___internal___ignoreType'
  | 'localFile___childImageSharp___internal___mediaType'
  | 'localFile___childImageSharp___internal___owner'
  | 'localFile___childImageSharp___internal___type'
  | 'localFile___id'
  | 'localFile___parent___id'
  | 'localFile___parent___parent___id'
  | 'localFile___parent___parent___children'
  | 'localFile___parent___children'
  | 'localFile___parent___children___id'
  | 'localFile___parent___children___children'
  | 'localFile___parent___internal___content'
  | 'localFile___parent___internal___contentDigest'
  | 'localFile___parent___internal___description'
  | 'localFile___parent___internal___fieldOwners'
  | 'localFile___parent___internal___ignoreType'
  | 'localFile___parent___internal___mediaType'
  | 'localFile___parent___internal___owner'
  | 'localFile___parent___internal___type'
  | 'localFile___children'
  | 'localFile___children___id'
  | 'localFile___children___parent___id'
  | 'localFile___children___parent___children'
  | 'localFile___children___children'
  | 'localFile___children___children___id'
  | 'localFile___children___children___children'
  | 'localFile___children___internal___content'
  | 'localFile___children___internal___contentDigest'
  | 'localFile___children___internal___description'
  | 'localFile___children___internal___fieldOwners'
  | 'localFile___children___internal___ignoreType'
  | 'localFile___children___internal___mediaType'
  | 'localFile___children___internal___owner'
  | 'localFile___children___internal___type'
  | 'localFile___internal___content'
  | 'localFile___internal___contentDigest'
  | 'localFile___internal___description'
  | 'localFile___internal___fieldOwners'
  | 'localFile___internal___ignoreType'
  | 'localFile___internal___mediaType'
  | 'localFile___internal___owner'
  | 'localFile___internal___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpMediaItemFilterInput = {
  altText?: Maybe<StringQueryOperatorInput>;
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  commentCount?: Maybe<IntQueryOperatorInput>;
  commentStatus?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpMediaItemToCommentConnectionFilterInput>;
  contentType?: Maybe<WpMediaItemToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  fileSize?: Maybe<IntQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  mediaDetails?: Maybe<WpMediaDetailsFilterInput>;
  mediaItemUrl?: Maybe<StringQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  sourceUrl?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  remoteFile?: Maybe<FileFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpMediaItemGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpMediaItemEdge>;
  nodes: Array<WpMediaItem>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

/** Meta connected to a MediaItem */
export type WpMediaItemMeta = {
  aperture?: Maybe<Scalars['Float']>;
  camera?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  createdTimestamp?: Maybe<Scalars['Int']>;
  credit?: Maybe<Scalars['String']>;
  focalLength?: Maybe<Scalars['Float']>;
  iso?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  orientation?: Maybe<Scalars['String']>;
  shutterSpeed?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type WpMediaItemMetaFilterInput = {
  aperture?: Maybe<FloatQueryOperatorInput>;
  camera?: Maybe<StringQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  createdTimestamp?: Maybe<IntQueryOperatorInput>;
  credit?: Maybe<StringQueryOperatorInput>;
  focalLength?: Maybe<FloatQueryOperatorInput>;
  iso?: Maybe<IntQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  orientation?: Maybe<StringQueryOperatorInput>;
  shutterSpeed?: Maybe<FloatQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type WpMediaItemSortInput = {
  fields?: Maybe<Array<Maybe<WpMediaItemFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the mediaItem type and the Comment type */
export type WpMediaItemToCommentConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

export type WpMediaItemToCommentConnectionFilterInput = {
  nodes?: Maybe<WpCommentFilterListInput>;
};

/** Connection between the mediaItem type and the ContentType type */
export type WpMediaItemToContentTypeConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpContentType>;
};

export type WpMediaItemToContentTypeConnectionEdgeFilterInput = {
  node?: Maybe<WpContentTypeFilterInput>;
};

/** Details of an available size for a media item */
export type WpMediaSize = {
  /** The file of the for the referenced size */
  file?: Maybe<Scalars['String']>;
  /** The filesize of the resource */
  fileSize?: Maybe<Scalars['Int']>;
  /** The height of the for the referenced size */
  height?: Maybe<Scalars['String']>;
  /** The mime type of the resource */
  mimeType?: Maybe<Scalars['String']>;
  /** The referenced size name */
  name?: Maybe<Scalars['String']>;
  /** The url of the for the referenced size */
  sourceUrl?: Maybe<Scalars['String']>;
  /** The width of the for the referenced size */
  width?: Maybe<Scalars['String']>;
};

export type WpMediaSizeFilterInput = {
  file?: Maybe<StringQueryOperatorInput>;
  fileSize?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  sourceUrl?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<StringQueryOperatorInput>;
};

export type WpMediaSizeFilterListInput = {
  elemMatch?: Maybe<WpMediaSizeFilterInput>;
};

/**
 * Menus are the containers for navigation items. Menus can be assigned to menu
 * locations, which are typically registered by the active theme.
 */
export type WpMenu = Node & WpNode & WpDatabaseIdentifier & {
  /** The number of items in the menu */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  id: Scalars['ID'];
  locations?: Maybe<Array<Maybe<WpMenuLocationEnum>>>;
  /** Connection between the Menu type and the MenuItem type */
  menuItems?: Maybe<WpMenuToMenuItemConnection>;
  /** Display name of the menu. Equivalent to WP_Term-&gt;name. */
  name?: Maybe<Scalars['String']>;
  /** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
  slug?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpMenuConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpMenuEdge>;
  nodes: Array<WpMenu>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpMenuGroupConnection>;
};


export type WpMenuConnectionDistinctArgs = {
  field: WpMenuFieldsEnum;
};


export type WpMenuConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpMenuFieldsEnum;
};

export type WpMenuEdge = {
  next?: Maybe<WpMenu>;
  node: WpMenu;
  previous?: Maybe<WpMenu>;
};

export type WpMenuFieldsEnum = 
  | 'count'
  | 'databaseId'
  | 'id'
  | 'locations'
  | 'menuItems___nodes'
  | 'menuItems___nodes___childItems___nodes'
  | 'menuItems___nodes___cssClasses'
  | 'menuItems___nodes___databaseId'
  | 'menuItems___nodes___description'
  | 'menuItems___nodes___id'
  | 'menuItems___nodes___label'
  | 'menuItems___nodes___linkRelationship'
  | 'menuItems___nodes___locations'
  | 'menuItems___nodes___order'
  | 'menuItems___nodes___parentDatabaseId'
  | 'menuItems___nodes___parentId'
  | 'menuItems___nodes___path'
  | 'menuItems___nodes___target'
  | 'menuItems___nodes___title'
  | 'menuItems___nodes___url'
  | 'menuItems___nodes___nodeType'
  | 'menuItems___nodes___parent___id'
  | 'menuItems___nodes___parent___children'
  | 'menuItems___nodes___children'
  | 'menuItems___nodes___children___id'
  | 'menuItems___nodes___children___children'
  | 'menuItems___nodes___internal___content'
  | 'menuItems___nodes___internal___contentDigest'
  | 'menuItems___nodes___internal___description'
  | 'menuItems___nodes___internal___fieldOwners'
  | 'menuItems___nodes___internal___ignoreType'
  | 'menuItems___nodes___internal___mediaType'
  | 'menuItems___nodes___internal___owner'
  | 'menuItems___nodes___internal___type'
  | 'name'
  | 'slug'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpMenuFilterInput = {
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  locations?: Maybe<WpMenuLocationEnumQueryOperatorInput>;
  menuItems?: Maybe<WpMenuToMenuItemConnectionFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpMenuGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpMenuEdge>;
  nodes: Array<WpMenu>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type WpMenuItem = Node & WpNode & WpDatabaseIdentifier & {
  /** Connection between the MenuItem type and the MenuItem type */
  childItems?: Maybe<WpMenuItemToMenuItemConnection>;
  /** Connection from MenuItem to it&#039;s connected node */
  connectedNode?: Maybe<WpMenuItemToMenuItemLinkableConnectionEdge>;
  /** Class attribute for the menu item link */
  cssClasses?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Description of the menu item. */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Label or title of the menu item. */
  label?: Maybe<Scalars['String']>;
  /** Link relationship (XFN) of the menu item. */
  linkRelationship?: Maybe<Scalars['String']>;
  locations?: Maybe<Array<Maybe<WpMenuLocationEnum>>>;
  /** The Menu a MenuItem is part of */
  menu?: Maybe<WpMenuItemToMenuConnectionEdge>;
  /** Menu item order */
  order?: Maybe<Scalars['Int']>;
  /** The database id of the parent menu item or null if it is the root */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent nav menu item object. */
  parentId?: Maybe<Scalars['ID']>;
  /** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
  path: Scalars['String'];
  /** Target attribute for the menu item link. */
  target?: Maybe<Scalars['String']>;
  /** Title attribute for the menu item link */
  title?: Maybe<Scalars['String']>;
  /** URL or destination of the menu item. */
  url?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpMenuItemConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpMenuItemEdge>;
  nodes: Array<WpMenuItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpMenuItemGroupConnection>;
};


export type WpMenuItemConnectionDistinctArgs = {
  field: WpMenuItemFieldsEnum;
};


export type WpMenuItemConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpMenuItemFieldsEnum;
};

export type WpMenuItemEdge = {
  next?: Maybe<WpMenuItem>;
  node: WpMenuItem;
  previous?: Maybe<WpMenuItem>;
};

export type WpMenuItemFieldsEnum = 
  | 'childItems___nodes'
  | 'childItems___nodes___childItems___nodes'
  | 'childItems___nodes___cssClasses'
  | 'childItems___nodes___databaseId'
  | 'childItems___nodes___description'
  | 'childItems___nodes___id'
  | 'childItems___nodes___label'
  | 'childItems___nodes___linkRelationship'
  | 'childItems___nodes___locations'
  | 'childItems___nodes___order'
  | 'childItems___nodes___parentDatabaseId'
  | 'childItems___nodes___parentId'
  | 'childItems___nodes___path'
  | 'childItems___nodes___target'
  | 'childItems___nodes___title'
  | 'childItems___nodes___url'
  | 'childItems___nodes___nodeType'
  | 'childItems___nodes___parent___id'
  | 'childItems___nodes___parent___children'
  | 'childItems___nodes___children'
  | 'childItems___nodes___children___id'
  | 'childItems___nodes___children___children'
  | 'childItems___nodes___internal___content'
  | 'childItems___nodes___internal___contentDigest'
  | 'childItems___nodes___internal___description'
  | 'childItems___nodes___internal___fieldOwners'
  | 'childItems___nodes___internal___ignoreType'
  | 'childItems___nodes___internal___mediaType'
  | 'childItems___nodes___internal___owner'
  | 'childItems___nodes___internal___type'
  | 'connectedNode___node___databaseId'
  | 'connectedNode___node___id'
  | 'connectedNode___node___uri'
  | 'cssClasses'
  | 'databaseId'
  | 'description'
  | 'id'
  | 'label'
  | 'linkRelationship'
  | 'locations'
  | 'menu___node___count'
  | 'menu___node___databaseId'
  | 'menu___node___id'
  | 'menu___node___locations'
  | 'menu___node___menuItems___nodes'
  | 'menu___node___name'
  | 'menu___node___slug'
  | 'menu___node___nodeType'
  | 'menu___node___parent___id'
  | 'menu___node___parent___children'
  | 'menu___node___children'
  | 'menu___node___children___id'
  | 'menu___node___children___children'
  | 'menu___node___internal___content'
  | 'menu___node___internal___contentDigest'
  | 'menu___node___internal___description'
  | 'menu___node___internal___fieldOwners'
  | 'menu___node___internal___ignoreType'
  | 'menu___node___internal___mediaType'
  | 'menu___node___internal___owner'
  | 'menu___node___internal___type'
  | 'order'
  | 'parentDatabaseId'
  | 'parentId'
  | 'path'
  | 'target'
  | 'title'
  | 'url'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpMenuItemFilterInput = {
  childItems?: Maybe<WpMenuItemToMenuItemConnectionFilterInput>;
  connectedNode?: Maybe<WpMenuItemToMenuItemLinkableConnectionEdgeFilterInput>;
  cssClasses?: Maybe<StringQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  linkRelationship?: Maybe<StringQueryOperatorInput>;
  locations?: Maybe<WpMenuLocationEnumQueryOperatorInput>;
  menu?: Maybe<WpMenuItemToMenuConnectionEdgeFilterInput>;
  order?: Maybe<IntQueryOperatorInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  target?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpMenuItemFilterListInput = {
  elemMatch?: Maybe<WpMenuItemFilterInput>;
};

export type WpMenuItemGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpMenuItemEdge>;
  nodes: Array<WpMenuItem>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpMenuItemLinkable = {
  /** The unique resource identifier path */
  databaseId: Scalars['Int'];
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** The unique resource identifier path */
  uri: Scalars['String'];
};

export type WpMenuItemLinkableFilterInput = {
  databaseId?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<IdQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type WpMenuItemSortInput = {
  fields?: Maybe<Array<Maybe<WpMenuItemFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the MenuItem type and the Menu type */
export type WpMenuItemToMenuConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpMenu>;
};

export type WpMenuItemToMenuConnectionEdgeFilterInput = {
  node?: Maybe<WpMenuFilterInput>;
};

/** Connection between the MenuItem type and the MenuItem type */
export type WpMenuItemToMenuItemConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpMenuItem>>>;
};

export type WpMenuItemToMenuItemConnectionFilterInput = {
  nodes?: Maybe<WpMenuItemFilterListInput>;
};

/** Connection between the MenuItem type and the MenuItemLinkable type */
export type WpMenuItemToMenuItemLinkableConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpMenuItemLinkable>;
};

export type WpMenuItemToMenuItemLinkableConnectionEdgeFilterInput = {
  node?: Maybe<WpMenuItemLinkableFilterInput>;
};

/** Registered menu locations */
export type WpMenuLocationEnum = 
  | 'GATSBY_FOOTER_MENU'
  | 'GATSBY_HEADER_MENU'
  | 'PRIMARY';

export type WpMenuLocationEnumQueryOperatorInput = {
  eq?: Maybe<WpMenuLocationEnum>;
  ne?: Maybe<WpMenuLocationEnum>;
  in?: Maybe<Array<Maybe<WpMenuLocationEnum>>>;
  nin?: Maybe<Array<Maybe<WpMenuLocationEnum>>>;
};

export type WpMenuSortInput = {
  fields?: Maybe<Array<Maybe<WpMenuFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the Menu type and the MenuItem type */
export type WpMenuToMenuItemConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpMenuItem>>>;
};

export type WpMenuToMenuItemConnectionFilterInput = {
  nodes?: Maybe<WpMenuItemFilterListInput>;
};

/** The news type */
export type WpNews = Node & WpNode & WpContentNode & WpDatabaseIdentifier & WpNodeWithTemplate & WpUniformResourceIdentifiable & WpNodeWithTitle & WpNodeWithContentEditor & WpNodeWithAuthor & WpMenuItemLinkable & WpBlockEditorContentNode & {
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** Gutenberg blocks */
  blocks?: Maybe<Array<WpBlock>>;
  /** Gutenberg blocks as json string */
  blocksJSON?: Maybe<Scalars['String']>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the news type and the ContentType type */
  contentType?: Maybe<WpNewsToContentTypeConnectionEdge>;
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  modified?: Maybe<Scalars['Date']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['Date']>;
  post_preview?: Maybe<WpNews_PostPreview>;
  /** Previewed gutenberg blocks */
  previewBlocks?: Maybe<Array<WpBlock>>;
  /** Previewed Gutenberg blocks as json string */
  previewBlocksJSON?: Maybe<Scalars['String']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** Connection between the news type and the tag type */
  tags?: Maybe<WpNewsToTagConnection>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URI path for the resource */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


/** The news type */
export type WpNewsDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The news type */
export type WpNewsDateGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The news type */
export type WpNewsModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The news type */
export type WpNewsModifiedGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Field Group */
export type WpNews_PostPreview = {
  excerpt?: Maybe<Scalars['String']>;
  fieldGroupName?: Maybe<Scalars['String']>;
  previewImage?: Maybe<WpMediaItem>;
};

export type WpNews_PostPreviewFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>;
  fieldGroupName?: Maybe<StringQueryOperatorInput>;
  previewImage?: Maybe<WpMediaItemFilterInput>;
};

export type WpNewsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpNewsEdge>;
  nodes: Array<WpNews>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpNewsGroupConnection>;
};


export type WpNewsConnectionDistinctArgs = {
  field: WpNewsFieldsEnum;
};


export type WpNewsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpNewsFieldsEnum;
};

export type WpNewsEdge = {
  next?: Maybe<WpNews>;
  node: WpNews;
  previous?: Maybe<WpNews>;
};

export type WpNewsFieldsEnum = 
  | 'author___node___allNews___nodes'
  | 'author___node___avatar___default'
  | 'author___node___avatar___extraAttr'
  | 'author___node___avatar___forceDefault'
  | 'author___node___avatar___foundAvatar'
  | 'author___node___avatar___height'
  | 'author___node___avatar___rating'
  | 'author___node___avatar___scheme'
  | 'author___node___avatar___size'
  | 'author___node___avatar___url'
  | 'author___node___avatar___width'
  | 'author___node___blockEditorPreviews___nodes'
  | 'author___node___capKey'
  | 'author___node___capabilities'
  | 'author___node___comments___nodes'
  | 'author___node___databaseId'
  | 'author___node___description'
  | 'author___node___email'
  | 'author___node___extraCapabilities'
  | 'author___node___firstName'
  | 'author___node___id'
  | 'author___node___lastName'
  | 'author___node___locale'
  | 'author___node___name'
  | 'author___node___nicename'
  | 'author___node___nickname'
  | 'author___node___pages___nodes'
  | 'author___node___posts___nodes'
  | 'author___node___registeredDate'
  | 'author___node___roles___nodes'
  | 'author___node___slug'
  | 'author___node___uri'
  | 'author___node___url'
  | 'author___node___username'
  | 'author___node___nodeType'
  | 'author___node___parent___id'
  | 'author___node___parent___children'
  | 'author___node___children'
  | 'author___node___children___id'
  | 'author___node___children___children'
  | 'author___node___internal___content'
  | 'author___node___internal___contentDigest'
  | 'author___node___internal___description'
  | 'author___node___internal___fieldOwners'
  | 'author___node___internal___ignoreType'
  | 'author___node___internal___mediaType'
  | 'author___node___internal___owner'
  | 'author___node___internal___type'
  | 'authorDatabaseId'
  | 'authorId'
  | 'blocks'
  | 'blocks___dynamicContent'
  | 'blocks___innerBlocks'
  | 'blocks___innerBlocks___dynamicContent'
  | 'blocks___innerBlocks___innerBlocks'
  | 'blocks___innerBlocks___innerBlocks___dynamicContent'
  | 'blocks___innerBlocks___innerBlocks___innerBlocks'
  | 'blocks___innerBlocks___innerBlocks___isDynamic'
  | 'blocks___innerBlocks___innerBlocks___name'
  | 'blocks___innerBlocks___innerBlocks___order'
  | 'blocks___innerBlocks___innerBlocks___originalContent'
  | 'blocks___innerBlocks___innerBlocks___parentNodeDatabaseId'
  | 'blocks___innerBlocks___innerBlocks___saveContent'
  | 'blocks___innerBlocks___isDynamic'
  | 'blocks___innerBlocks___name'
  | 'blocks___innerBlocks___order'
  | 'blocks___innerBlocks___originalContent'
  | 'blocks___innerBlocks___parentNode___id'
  | 'blocks___innerBlocks___parentNodeDatabaseId'
  | 'blocks___innerBlocks___saveContent'
  | 'blocks___isDynamic'
  | 'blocks___name'
  | 'blocks___order'
  | 'blocks___originalContent'
  | 'blocks___parentNode___id'
  | 'blocks___parentNodeDatabaseId'
  | 'blocks___saveContent'
  | 'blocksJSON'
  | 'content'
  | 'contentType___node___archivePath'
  | 'contentType___node___canExport'
  | 'contentType___node___connectedTaxonomies___nodes'
  | 'contentType___node___contentNodes___nodes'
  | 'contentType___node___deleteWithUser'
  | 'contentType___node___description'
  | 'contentType___node___excludeFromSearch'
  | 'contentType___node___graphqlPluralName'
  | 'contentType___node___graphqlSingleName'
  | 'contentType___node___hasArchive'
  | 'contentType___node___hierarchical'
  | 'contentType___node___id'
  | 'contentType___node___isFrontPage'
  | 'contentType___node___isPostsPage'
  | 'contentType___node___label'
  | 'contentType___node___labels___addNew'
  | 'contentType___node___labels___addNewItem'
  | 'contentType___node___labels___allItems'
  | 'contentType___node___labels___archives'
  | 'contentType___node___labels___attributes'
  | 'contentType___node___labels___editItem'
  | 'contentType___node___labels___featuredImage'
  | 'contentType___node___labels___filterItemsList'
  | 'contentType___node___labels___insertIntoItem'
  | 'contentType___node___labels___itemsList'
  | 'contentType___node___labels___itemsListNavigation'
  | 'contentType___node___labels___menuName'
  | 'contentType___node___labels___name'
  | 'contentType___node___labels___newItem'
  | 'contentType___node___labels___notFound'
  | 'contentType___node___labels___notFoundInTrash'
  | 'contentType___node___labels___parentItemColon'
  | 'contentType___node___labels___removeFeaturedImage'
  | 'contentType___node___labels___searchItems'
  | 'contentType___node___labels___setFeaturedImage'
  | 'contentType___node___labels___singularName'
  | 'contentType___node___labels___uploadedToThisItem'
  | 'contentType___node___labels___useFeaturedImage'
  | 'contentType___node___labels___viewItem'
  | 'contentType___node___labels___viewItems'
  | 'contentType___node___menuIcon'
  | 'contentType___node___menuPosition'
  | 'contentType___node___name'
  | 'contentType___node___public'
  | 'contentType___node___publiclyQueryable'
  | 'contentType___node___restBase'
  | 'contentType___node___restControllerClass'
  | 'contentType___node___showInAdminBar'
  | 'contentType___node___showInGraphql'
  | 'contentType___node___showInMenu'
  | 'contentType___node___showInNavMenus'
  | 'contentType___node___showInRest'
  | 'contentType___node___showUi'
  | 'contentType___node___uri'
  | 'contentType___node___nodeType'
  | 'contentType___node___parent___id'
  | 'contentType___node___parent___children'
  | 'contentType___node___children'
  | 'contentType___node___children___id'
  | 'contentType___node___children___children'
  | 'contentType___node___internal___content'
  | 'contentType___node___internal___contentDigest'
  | 'contentType___node___internal___description'
  | 'contentType___node___internal___fieldOwners'
  | 'contentType___node___internal___ignoreType'
  | 'contentType___node___internal___mediaType'
  | 'contentType___node___internal___owner'
  | 'contentType___node___internal___type'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'desiredSlug'
  | 'enclosure'
  | 'guid'
  | 'id'
  | 'lastEditedBy___node___allNews___nodes'
  | 'lastEditedBy___node___avatar___default'
  | 'lastEditedBy___node___avatar___extraAttr'
  | 'lastEditedBy___node___avatar___forceDefault'
  | 'lastEditedBy___node___avatar___foundAvatar'
  | 'lastEditedBy___node___avatar___height'
  | 'lastEditedBy___node___avatar___rating'
  | 'lastEditedBy___node___avatar___scheme'
  | 'lastEditedBy___node___avatar___size'
  | 'lastEditedBy___node___avatar___url'
  | 'lastEditedBy___node___avatar___width'
  | 'lastEditedBy___node___blockEditorPreviews___nodes'
  | 'lastEditedBy___node___capKey'
  | 'lastEditedBy___node___capabilities'
  | 'lastEditedBy___node___comments___nodes'
  | 'lastEditedBy___node___databaseId'
  | 'lastEditedBy___node___description'
  | 'lastEditedBy___node___email'
  | 'lastEditedBy___node___extraCapabilities'
  | 'lastEditedBy___node___firstName'
  | 'lastEditedBy___node___id'
  | 'lastEditedBy___node___lastName'
  | 'lastEditedBy___node___locale'
  | 'lastEditedBy___node___name'
  | 'lastEditedBy___node___nicename'
  | 'lastEditedBy___node___nickname'
  | 'lastEditedBy___node___pages___nodes'
  | 'lastEditedBy___node___posts___nodes'
  | 'lastEditedBy___node___registeredDate'
  | 'lastEditedBy___node___roles___nodes'
  | 'lastEditedBy___node___slug'
  | 'lastEditedBy___node___uri'
  | 'lastEditedBy___node___url'
  | 'lastEditedBy___node___username'
  | 'lastEditedBy___node___nodeType'
  | 'lastEditedBy___node___parent___id'
  | 'lastEditedBy___node___parent___children'
  | 'lastEditedBy___node___children'
  | 'lastEditedBy___node___children___id'
  | 'lastEditedBy___node___children___children'
  | 'lastEditedBy___node___internal___content'
  | 'lastEditedBy___node___internal___contentDigest'
  | 'lastEditedBy___node___internal___description'
  | 'lastEditedBy___node___internal___fieldOwners'
  | 'lastEditedBy___node___internal___ignoreType'
  | 'lastEditedBy___node___internal___mediaType'
  | 'lastEditedBy___node___internal___owner'
  | 'lastEditedBy___node___internal___type'
  | 'link'
  | 'modified'
  | 'modifiedGmt'
  | 'post_preview___excerpt'
  | 'post_preview___fieldGroupName'
  | 'post_preview___previewImage___altText'
  | 'post_preview___previewImage___ancestors___nodes'
  | 'post_preview___previewImage___authorDatabaseId'
  | 'post_preview___previewImage___authorId'
  | 'post_preview___previewImage___caption'
  | 'post_preview___previewImage___wpChildren___nodes'
  | 'post_preview___previewImage___commentCount'
  | 'post_preview___previewImage___commentStatus'
  | 'post_preview___previewImage___comments___nodes'
  | 'post_preview___previewImage___databaseId'
  | 'post_preview___previewImage___date'
  | 'post_preview___previewImage___dateGmt'
  | 'post_preview___previewImage___description'
  | 'post_preview___previewImage___desiredSlug'
  | 'post_preview___previewImage___enclosure'
  | 'post_preview___previewImage___fileSize'
  | 'post_preview___previewImage___guid'
  | 'post_preview___previewImage___id'
  | 'post_preview___previewImage___link'
  | 'post_preview___previewImage___mediaDetails___file'
  | 'post_preview___previewImage___mediaDetails___height'
  | 'post_preview___previewImage___mediaDetails___sizes'
  | 'post_preview___previewImage___mediaDetails___width'
  | 'post_preview___previewImage___mediaItemUrl'
  | 'post_preview___previewImage___mediaType'
  | 'post_preview___previewImage___mimeType'
  | 'post_preview___previewImage___modified'
  | 'post_preview___previewImage___modifiedGmt'
  | 'post_preview___previewImage___parentDatabaseId'
  | 'post_preview___previewImage___parentId'
  | 'post_preview___previewImage___sizes'
  | 'post_preview___previewImage___slug'
  | 'post_preview___previewImage___sourceUrl'
  | 'post_preview___previewImage___srcSet'
  | 'post_preview___previewImage___status'
  | 'post_preview___previewImage___template___templateName'
  | 'post_preview___previewImage___title'
  | 'post_preview___previewImage___uri'
  | 'post_preview___previewImage___nodeType'
  | 'post_preview___previewImage___remoteFile___sourceInstanceName'
  | 'post_preview___previewImage___remoteFile___absolutePath'
  | 'post_preview___previewImage___remoteFile___relativePath'
  | 'post_preview___previewImage___remoteFile___extension'
  | 'post_preview___previewImage___remoteFile___size'
  | 'post_preview___previewImage___remoteFile___prettySize'
  | 'post_preview___previewImage___remoteFile___modifiedTime'
  | 'post_preview___previewImage___remoteFile___accessTime'
  | 'post_preview___previewImage___remoteFile___changeTime'
  | 'post_preview___previewImage___remoteFile___birthTime'
  | 'post_preview___previewImage___remoteFile___root'
  | 'post_preview___previewImage___remoteFile___dir'
  | 'post_preview___previewImage___remoteFile___base'
  | 'post_preview___previewImage___remoteFile___ext'
  | 'post_preview___previewImage___remoteFile___name'
  | 'post_preview___previewImage___remoteFile___relativeDirectory'
  | 'post_preview___previewImage___remoteFile___dev'
  | 'post_preview___previewImage___remoteFile___mode'
  | 'post_preview___previewImage___remoteFile___nlink'
  | 'post_preview___previewImage___remoteFile___uid'
  | 'post_preview___previewImage___remoteFile___gid'
  | 'post_preview___previewImage___remoteFile___rdev'
  | 'post_preview___previewImage___remoteFile___ino'
  | 'post_preview___previewImage___remoteFile___atimeMs'
  | 'post_preview___previewImage___remoteFile___mtimeMs'
  | 'post_preview___previewImage___remoteFile___ctimeMs'
  | 'post_preview___previewImage___remoteFile___atime'
  | 'post_preview___previewImage___remoteFile___mtime'
  | 'post_preview___previewImage___remoteFile___ctime'
  | 'post_preview___previewImage___remoteFile___birthtime'
  | 'post_preview___previewImage___remoteFile___birthtimeMs'
  | 'post_preview___previewImage___remoteFile___blksize'
  | 'post_preview___previewImage___remoteFile___blocks'
  | 'post_preview___previewImage___remoteFile___hash'
  | 'post_preview___previewImage___remoteFile___id'
  | 'post_preview___previewImage___remoteFile___children'
  | 'post_preview___previewImage___localFile___sourceInstanceName'
  | 'post_preview___previewImage___localFile___absolutePath'
  | 'post_preview___previewImage___localFile___relativePath'
  | 'post_preview___previewImage___localFile___extension'
  | 'post_preview___previewImage___localFile___size'
  | 'post_preview___previewImage___localFile___prettySize'
  | 'post_preview___previewImage___localFile___modifiedTime'
  | 'post_preview___previewImage___localFile___accessTime'
  | 'post_preview___previewImage___localFile___changeTime'
  | 'post_preview___previewImage___localFile___birthTime'
  | 'post_preview___previewImage___localFile___root'
  | 'post_preview___previewImage___localFile___dir'
  | 'post_preview___previewImage___localFile___base'
  | 'post_preview___previewImage___localFile___ext'
  | 'post_preview___previewImage___localFile___name'
  | 'post_preview___previewImage___localFile___relativeDirectory'
  | 'post_preview___previewImage___localFile___dev'
  | 'post_preview___previewImage___localFile___mode'
  | 'post_preview___previewImage___localFile___nlink'
  | 'post_preview___previewImage___localFile___uid'
  | 'post_preview___previewImage___localFile___gid'
  | 'post_preview___previewImage___localFile___rdev'
  | 'post_preview___previewImage___localFile___ino'
  | 'post_preview___previewImage___localFile___atimeMs'
  | 'post_preview___previewImage___localFile___mtimeMs'
  | 'post_preview___previewImage___localFile___ctimeMs'
  | 'post_preview___previewImage___localFile___atime'
  | 'post_preview___previewImage___localFile___mtime'
  | 'post_preview___previewImage___localFile___ctime'
  | 'post_preview___previewImage___localFile___birthtime'
  | 'post_preview___previewImage___localFile___birthtimeMs'
  | 'post_preview___previewImage___localFile___blksize'
  | 'post_preview___previewImage___localFile___blocks'
  | 'post_preview___previewImage___localFile___hash'
  | 'post_preview___previewImage___localFile___id'
  | 'post_preview___previewImage___localFile___children'
  | 'post_preview___previewImage___parent___id'
  | 'post_preview___previewImage___parent___children'
  | 'post_preview___previewImage___children'
  | 'post_preview___previewImage___children___id'
  | 'post_preview___previewImage___children___children'
  | 'post_preview___previewImage___internal___content'
  | 'post_preview___previewImage___internal___contentDigest'
  | 'post_preview___previewImage___internal___description'
  | 'post_preview___previewImage___internal___fieldOwners'
  | 'post_preview___previewImage___internal___ignoreType'
  | 'post_preview___previewImage___internal___mediaType'
  | 'post_preview___previewImage___internal___owner'
  | 'post_preview___previewImage___internal___type'
  | 'previewBlocks'
  | 'previewBlocks___dynamicContent'
  | 'previewBlocks___innerBlocks'
  | 'previewBlocks___innerBlocks___dynamicContent'
  | 'previewBlocks___innerBlocks___innerBlocks'
  | 'previewBlocks___innerBlocks___innerBlocks___dynamicContent'
  | 'previewBlocks___innerBlocks___innerBlocks___innerBlocks'
  | 'previewBlocks___innerBlocks___innerBlocks___isDynamic'
  | 'previewBlocks___innerBlocks___innerBlocks___name'
  | 'previewBlocks___innerBlocks___innerBlocks___order'
  | 'previewBlocks___innerBlocks___innerBlocks___originalContent'
  | 'previewBlocks___innerBlocks___innerBlocks___parentNodeDatabaseId'
  | 'previewBlocks___innerBlocks___innerBlocks___saveContent'
  | 'previewBlocks___innerBlocks___isDynamic'
  | 'previewBlocks___innerBlocks___name'
  | 'previewBlocks___innerBlocks___order'
  | 'previewBlocks___innerBlocks___originalContent'
  | 'previewBlocks___innerBlocks___parentNode___id'
  | 'previewBlocks___innerBlocks___parentNodeDatabaseId'
  | 'previewBlocks___innerBlocks___saveContent'
  | 'previewBlocks___isDynamic'
  | 'previewBlocks___name'
  | 'previewBlocks___order'
  | 'previewBlocks___originalContent'
  | 'previewBlocks___parentNode___id'
  | 'previewBlocks___parentNodeDatabaseId'
  | 'previewBlocks___saveContent'
  | 'previewBlocksJSON'
  | 'slug'
  | 'status'
  | 'tags___nodes'
  | 'tags___nodes___allNews___nodes'
  | 'tags___nodes___contentNodes___nodes'
  | 'tags___nodes___count'
  | 'tags___nodes___databaseId'
  | 'tags___nodes___description'
  | 'tags___nodes___id'
  | 'tags___nodes___link'
  | 'tags___nodes___name'
  | 'tags___nodes___posts___nodes'
  | 'tags___nodes___slug'
  | 'tags___nodes___termGroupId'
  | 'tags___nodes___termTaxonomyId'
  | 'tags___nodes___uri'
  | 'tags___nodes___nodeType'
  | 'tags___nodes___parent___id'
  | 'tags___nodes___parent___children'
  | 'tags___nodes___children'
  | 'tags___nodes___children___id'
  | 'tags___nodes___children___children'
  | 'tags___nodes___internal___content'
  | 'tags___nodes___internal___contentDigest'
  | 'tags___nodes___internal___description'
  | 'tags___nodes___internal___fieldOwners'
  | 'tags___nodes___internal___ignoreType'
  | 'tags___nodes___internal___mediaType'
  | 'tags___nodes___internal___owner'
  | 'tags___nodes___internal___type'
  | 'template___templateName'
  | 'title'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpNewsFilterInput = {
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  blocks?: Maybe<WpBlockFilterListInput>;
  blocksJSON?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<WpNewsToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  post_preview?: Maybe<WpNews_PostPreviewFilterInput>;
  previewBlocks?: Maybe<WpBlockFilterListInput>;
  previewBlocksJSON?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<WpNewsToTagConnectionFilterInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpNewsFilterListInput = {
  elemMatch?: Maybe<WpNewsFilterInput>;
};

export type WpNewsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpNewsEdge>;
  nodes: Array<WpNews>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpNewsSortInput = {
  fields?: Maybe<Array<Maybe<WpNewsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the news type and the ContentType type */
export type WpNewsToContentTypeConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpContentType>;
};

export type WpNewsToContentTypeConnectionEdgeFilterInput = {
  node?: Maybe<WpContentTypeFilterInput>;
};

/** Connection between the news type and the tag type */
export type WpNewsToTagConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpTag>>>;
};

export type WpNewsToTagConnectionFilterInput = {
  nodes?: Maybe<WpTagFilterListInput>;
};

export type WpNode = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};

export type WpNodeFilterInput = {
  id?: Maybe<IdQueryOperatorInput>;
};

export type WpNodeWithAuthor = {
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
};

/** Connection between the NodeWithAuthor type and the User type */
export type WpNodeWithAuthorToUserConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpUser>;
};

export type WpNodeWithAuthorToUserConnectionEdgeFilterInput = {
  node?: Maybe<WpUserFilterInput>;
};

export type WpNodeWithComments = {
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for compatibility.
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
};

export type WpNodeWithContentEditor = {
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
};

export type WpNodeWithExcerpt = {
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
};

export type WpNodeWithFeaturedImage = {
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
};

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export type WpNodeWithFeaturedImageToMediaItemConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpMediaItem>;
};

export type WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput = {
  node?: Maybe<WpMediaItemFilterInput>;
};

export type WpNodeWithPageAttributes = {
  /**
   * A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  menuOrder?: Maybe<Scalars['Int']>;
};

export type WpNodeWithRevisions = {
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
};

/** Connection between the NodeWithRevisions type and the ContentNode type */
export type WpNodeWithRevisionsToContentNodeConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpContentNode>;
};

export type WpNodeWithTemplate = {
  /** The template assigned to the node */
  template?: Maybe<WpContentTemplate>;
};

export type WpNodeWithTitle = {
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
};

export type WpNodeWithTrackbacks = {
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The page type */
export type WpPage = Node & WpNode & WpContentNode & WpDatabaseIdentifier & WpNodeWithTemplate & WpUniformResourceIdentifiable & WpNodeWithTitle & WpNodeWithContentEditor & WpNodeWithAuthor & WpNodeWithFeaturedImage & WpNodeWithComments & WpNodeWithRevisions & WpNodeWithPageAttributes & WpHierarchicalContentNode & WpMenuItemLinkable & WpBlockEditorContentNode & {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** Gutenberg blocks */
  blocks?: Maybe<Array<WpBlock>>;
  /** Gutenberg blocks as json string */
  blocksJSON?: Maybe<Scalars['String']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnection>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for compatibility.
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the page type and the Comment type */
  comments?: Maybe<WpPageToCommentConnection>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the page type and the ContentType type */
  contentType?: Maybe<WpPageToContentTypeConnectionEdge>;
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Whether this page is set to the static front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether this page is set to the blog posts page. */
  isPostsPage: Scalars['Boolean'];
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /**
   * A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  modified?: Maybe<Scalars['Date']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['Date']>;
  /** The parent of the node. The parent object can be of various types */
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Previewed gutenberg blocks */
  previewBlocks?: Maybe<Array<WpBlock>>;
  /** Previewed Gutenberg blocks as json string */
  previewBlocksJSON?: Maybe<Scalars['String']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URI path for the resource */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


/** The page type */
export type WpPageDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The page type */
export type WpPageDateGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The page type */
export type WpPageModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The page type */
export type WpPageModifiedGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type WpPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpPageEdge>;
  nodes: Array<WpPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpPageGroupConnection>;
};


export type WpPageConnectionDistinctArgs = {
  field: WpPageFieldsEnum;
};


export type WpPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpPageFieldsEnum;
};

export type WpPageEdge = {
  next?: Maybe<WpPage>;
  node: WpPage;
  previous?: Maybe<WpPage>;
};

export type WpPageFieldsEnum = 
  | 'ancestors___nodes'
  | 'ancestors___nodes___databaseId'
  | 'ancestors___nodes___date'
  | 'ancestors___nodes___dateGmt'
  | 'ancestors___nodes___desiredSlug'
  | 'ancestors___nodes___enclosure'
  | 'ancestors___nodes___guid'
  | 'ancestors___nodes___id'
  | 'ancestors___nodes___link'
  | 'ancestors___nodes___modified'
  | 'ancestors___nodes___modifiedGmt'
  | 'ancestors___nodes___slug'
  | 'ancestors___nodes___status'
  | 'ancestors___nodes___template___templateName'
  | 'ancestors___nodes___uri'
  | 'ancestors___nodes___nodeType'
  | 'author___node___allNews___nodes'
  | 'author___node___avatar___default'
  | 'author___node___avatar___extraAttr'
  | 'author___node___avatar___forceDefault'
  | 'author___node___avatar___foundAvatar'
  | 'author___node___avatar___height'
  | 'author___node___avatar___rating'
  | 'author___node___avatar___scheme'
  | 'author___node___avatar___size'
  | 'author___node___avatar___url'
  | 'author___node___avatar___width'
  | 'author___node___blockEditorPreviews___nodes'
  | 'author___node___capKey'
  | 'author___node___capabilities'
  | 'author___node___comments___nodes'
  | 'author___node___databaseId'
  | 'author___node___description'
  | 'author___node___email'
  | 'author___node___extraCapabilities'
  | 'author___node___firstName'
  | 'author___node___id'
  | 'author___node___lastName'
  | 'author___node___locale'
  | 'author___node___name'
  | 'author___node___nicename'
  | 'author___node___nickname'
  | 'author___node___pages___nodes'
  | 'author___node___posts___nodes'
  | 'author___node___registeredDate'
  | 'author___node___roles___nodes'
  | 'author___node___slug'
  | 'author___node___uri'
  | 'author___node___url'
  | 'author___node___username'
  | 'author___node___nodeType'
  | 'author___node___parent___id'
  | 'author___node___parent___children'
  | 'author___node___children'
  | 'author___node___children___id'
  | 'author___node___children___children'
  | 'author___node___internal___content'
  | 'author___node___internal___contentDigest'
  | 'author___node___internal___description'
  | 'author___node___internal___fieldOwners'
  | 'author___node___internal___ignoreType'
  | 'author___node___internal___mediaType'
  | 'author___node___internal___owner'
  | 'author___node___internal___type'
  | 'authorDatabaseId'
  | 'authorId'
  | 'blocks'
  | 'blocks___dynamicContent'
  | 'blocks___innerBlocks'
  | 'blocks___innerBlocks___dynamicContent'
  | 'blocks___innerBlocks___innerBlocks'
  | 'blocks___innerBlocks___innerBlocks___dynamicContent'
  | 'blocks___innerBlocks___innerBlocks___innerBlocks'
  | 'blocks___innerBlocks___innerBlocks___isDynamic'
  | 'blocks___innerBlocks___innerBlocks___name'
  | 'blocks___innerBlocks___innerBlocks___order'
  | 'blocks___innerBlocks___innerBlocks___originalContent'
  | 'blocks___innerBlocks___innerBlocks___parentNodeDatabaseId'
  | 'blocks___innerBlocks___innerBlocks___saveContent'
  | 'blocks___innerBlocks___isDynamic'
  | 'blocks___innerBlocks___name'
  | 'blocks___innerBlocks___order'
  | 'blocks___innerBlocks___originalContent'
  | 'blocks___innerBlocks___parentNode___id'
  | 'blocks___innerBlocks___parentNodeDatabaseId'
  | 'blocks___innerBlocks___saveContent'
  | 'blocks___isDynamic'
  | 'blocks___name'
  | 'blocks___order'
  | 'blocks___originalContent'
  | 'blocks___parentNode___id'
  | 'blocks___parentNodeDatabaseId'
  | 'blocks___saveContent'
  | 'blocksJSON'
  | 'wpChildren___nodes'
  | 'wpChildren___nodes___databaseId'
  | 'wpChildren___nodes___date'
  | 'wpChildren___nodes___dateGmt'
  | 'wpChildren___nodes___desiredSlug'
  | 'wpChildren___nodes___enclosure'
  | 'wpChildren___nodes___guid'
  | 'wpChildren___nodes___id'
  | 'wpChildren___nodes___link'
  | 'wpChildren___nodes___modified'
  | 'wpChildren___nodes___modifiedGmt'
  | 'wpChildren___nodes___slug'
  | 'wpChildren___nodes___status'
  | 'wpChildren___nodes___template___templateName'
  | 'wpChildren___nodes___uri'
  | 'wpChildren___nodes___nodeType'
  | 'commentCount'
  | 'commentStatus'
  | 'comments___nodes'
  | 'comments___nodes___agent'
  | 'comments___nodes___approved'
  | 'comments___nodes___authorIp'
  | 'comments___nodes___content'
  | 'comments___nodes___databaseId'
  | 'comments___nodes___date'
  | 'comments___nodes___dateGmt'
  | 'comments___nodes___id'
  | 'comments___nodes___karma'
  | 'comments___nodes___parentDatabaseId'
  | 'comments___nodes___parentId'
  | 'comments___nodes___replies___nodes'
  | 'comments___nodes___type'
  | 'comments___nodes___nodeType'
  | 'comments___nodes___parent___id'
  | 'comments___nodes___parent___children'
  | 'comments___nodes___children'
  | 'comments___nodes___children___id'
  | 'comments___nodes___children___children'
  | 'comments___nodes___internal___content'
  | 'comments___nodes___internal___contentDigest'
  | 'comments___nodes___internal___description'
  | 'comments___nodes___internal___fieldOwners'
  | 'comments___nodes___internal___ignoreType'
  | 'comments___nodes___internal___mediaType'
  | 'comments___nodes___internal___owner'
  | 'comments___nodes___internal___type'
  | 'content'
  | 'contentType___node___archivePath'
  | 'contentType___node___canExport'
  | 'contentType___node___connectedTaxonomies___nodes'
  | 'contentType___node___contentNodes___nodes'
  | 'contentType___node___deleteWithUser'
  | 'contentType___node___description'
  | 'contentType___node___excludeFromSearch'
  | 'contentType___node___graphqlPluralName'
  | 'contentType___node___graphqlSingleName'
  | 'contentType___node___hasArchive'
  | 'contentType___node___hierarchical'
  | 'contentType___node___id'
  | 'contentType___node___isFrontPage'
  | 'contentType___node___isPostsPage'
  | 'contentType___node___label'
  | 'contentType___node___labels___addNew'
  | 'contentType___node___labels___addNewItem'
  | 'contentType___node___labels___allItems'
  | 'contentType___node___labels___archives'
  | 'contentType___node___labels___attributes'
  | 'contentType___node___labels___editItem'
  | 'contentType___node___labels___featuredImage'
  | 'contentType___node___labels___filterItemsList'
  | 'contentType___node___labels___insertIntoItem'
  | 'contentType___node___labels___itemsList'
  | 'contentType___node___labels___itemsListNavigation'
  | 'contentType___node___labels___menuName'
  | 'contentType___node___labels___name'
  | 'contentType___node___labels___newItem'
  | 'contentType___node___labels___notFound'
  | 'contentType___node___labels___notFoundInTrash'
  | 'contentType___node___labels___parentItemColon'
  | 'contentType___node___labels___removeFeaturedImage'
  | 'contentType___node___labels___searchItems'
  | 'contentType___node___labels___setFeaturedImage'
  | 'contentType___node___labels___singularName'
  | 'contentType___node___labels___uploadedToThisItem'
  | 'contentType___node___labels___useFeaturedImage'
  | 'contentType___node___labels___viewItem'
  | 'contentType___node___labels___viewItems'
  | 'contentType___node___menuIcon'
  | 'contentType___node___menuPosition'
  | 'contentType___node___name'
  | 'contentType___node___public'
  | 'contentType___node___publiclyQueryable'
  | 'contentType___node___restBase'
  | 'contentType___node___restControllerClass'
  | 'contentType___node___showInAdminBar'
  | 'contentType___node___showInGraphql'
  | 'contentType___node___showInMenu'
  | 'contentType___node___showInNavMenus'
  | 'contentType___node___showInRest'
  | 'contentType___node___showUi'
  | 'contentType___node___uri'
  | 'contentType___node___nodeType'
  | 'contentType___node___parent___id'
  | 'contentType___node___parent___children'
  | 'contentType___node___children'
  | 'contentType___node___children___id'
  | 'contentType___node___children___children'
  | 'contentType___node___internal___content'
  | 'contentType___node___internal___contentDigest'
  | 'contentType___node___internal___description'
  | 'contentType___node___internal___fieldOwners'
  | 'contentType___node___internal___ignoreType'
  | 'contentType___node___internal___mediaType'
  | 'contentType___node___internal___owner'
  | 'contentType___node___internal___type'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'desiredSlug'
  | 'enclosure'
  | 'featuredImage___node___altText'
  | 'featuredImage___node___ancestors___nodes'
  | 'featuredImage___node___authorDatabaseId'
  | 'featuredImage___node___authorId'
  | 'featuredImage___node___caption'
  | 'featuredImage___node___wpChildren___nodes'
  | 'featuredImage___node___commentCount'
  | 'featuredImage___node___commentStatus'
  | 'featuredImage___node___comments___nodes'
  | 'featuredImage___node___databaseId'
  | 'featuredImage___node___date'
  | 'featuredImage___node___dateGmt'
  | 'featuredImage___node___description'
  | 'featuredImage___node___desiredSlug'
  | 'featuredImage___node___enclosure'
  | 'featuredImage___node___fileSize'
  | 'featuredImage___node___guid'
  | 'featuredImage___node___id'
  | 'featuredImage___node___link'
  | 'featuredImage___node___mediaDetails___file'
  | 'featuredImage___node___mediaDetails___height'
  | 'featuredImage___node___mediaDetails___sizes'
  | 'featuredImage___node___mediaDetails___width'
  | 'featuredImage___node___mediaItemUrl'
  | 'featuredImage___node___mediaType'
  | 'featuredImage___node___mimeType'
  | 'featuredImage___node___modified'
  | 'featuredImage___node___modifiedGmt'
  | 'featuredImage___node___parentDatabaseId'
  | 'featuredImage___node___parentId'
  | 'featuredImage___node___sizes'
  | 'featuredImage___node___slug'
  | 'featuredImage___node___sourceUrl'
  | 'featuredImage___node___srcSet'
  | 'featuredImage___node___status'
  | 'featuredImage___node___template___templateName'
  | 'featuredImage___node___title'
  | 'featuredImage___node___uri'
  | 'featuredImage___node___nodeType'
  | 'featuredImage___node___remoteFile___sourceInstanceName'
  | 'featuredImage___node___remoteFile___absolutePath'
  | 'featuredImage___node___remoteFile___relativePath'
  | 'featuredImage___node___remoteFile___extension'
  | 'featuredImage___node___remoteFile___size'
  | 'featuredImage___node___remoteFile___prettySize'
  | 'featuredImage___node___remoteFile___modifiedTime'
  | 'featuredImage___node___remoteFile___accessTime'
  | 'featuredImage___node___remoteFile___changeTime'
  | 'featuredImage___node___remoteFile___birthTime'
  | 'featuredImage___node___remoteFile___root'
  | 'featuredImage___node___remoteFile___dir'
  | 'featuredImage___node___remoteFile___base'
  | 'featuredImage___node___remoteFile___ext'
  | 'featuredImage___node___remoteFile___name'
  | 'featuredImage___node___remoteFile___relativeDirectory'
  | 'featuredImage___node___remoteFile___dev'
  | 'featuredImage___node___remoteFile___mode'
  | 'featuredImage___node___remoteFile___nlink'
  | 'featuredImage___node___remoteFile___uid'
  | 'featuredImage___node___remoteFile___gid'
  | 'featuredImage___node___remoteFile___rdev'
  | 'featuredImage___node___remoteFile___ino'
  | 'featuredImage___node___remoteFile___atimeMs'
  | 'featuredImage___node___remoteFile___mtimeMs'
  | 'featuredImage___node___remoteFile___ctimeMs'
  | 'featuredImage___node___remoteFile___atime'
  | 'featuredImage___node___remoteFile___mtime'
  | 'featuredImage___node___remoteFile___ctime'
  | 'featuredImage___node___remoteFile___birthtime'
  | 'featuredImage___node___remoteFile___birthtimeMs'
  | 'featuredImage___node___remoteFile___blksize'
  | 'featuredImage___node___remoteFile___blocks'
  | 'featuredImage___node___remoteFile___hash'
  | 'featuredImage___node___remoteFile___id'
  | 'featuredImage___node___remoteFile___children'
  | 'featuredImage___node___localFile___sourceInstanceName'
  | 'featuredImage___node___localFile___absolutePath'
  | 'featuredImage___node___localFile___relativePath'
  | 'featuredImage___node___localFile___extension'
  | 'featuredImage___node___localFile___size'
  | 'featuredImage___node___localFile___prettySize'
  | 'featuredImage___node___localFile___modifiedTime'
  | 'featuredImage___node___localFile___accessTime'
  | 'featuredImage___node___localFile___changeTime'
  | 'featuredImage___node___localFile___birthTime'
  | 'featuredImage___node___localFile___root'
  | 'featuredImage___node___localFile___dir'
  | 'featuredImage___node___localFile___base'
  | 'featuredImage___node___localFile___ext'
  | 'featuredImage___node___localFile___name'
  | 'featuredImage___node___localFile___relativeDirectory'
  | 'featuredImage___node___localFile___dev'
  | 'featuredImage___node___localFile___mode'
  | 'featuredImage___node___localFile___nlink'
  | 'featuredImage___node___localFile___uid'
  | 'featuredImage___node___localFile___gid'
  | 'featuredImage___node___localFile___rdev'
  | 'featuredImage___node___localFile___ino'
  | 'featuredImage___node___localFile___atimeMs'
  | 'featuredImage___node___localFile___mtimeMs'
  | 'featuredImage___node___localFile___ctimeMs'
  | 'featuredImage___node___localFile___atime'
  | 'featuredImage___node___localFile___mtime'
  | 'featuredImage___node___localFile___ctime'
  | 'featuredImage___node___localFile___birthtime'
  | 'featuredImage___node___localFile___birthtimeMs'
  | 'featuredImage___node___localFile___blksize'
  | 'featuredImage___node___localFile___blocks'
  | 'featuredImage___node___localFile___hash'
  | 'featuredImage___node___localFile___id'
  | 'featuredImage___node___localFile___children'
  | 'featuredImage___node___parent___id'
  | 'featuredImage___node___parent___children'
  | 'featuredImage___node___children'
  | 'featuredImage___node___children___id'
  | 'featuredImage___node___children___children'
  | 'featuredImage___node___internal___content'
  | 'featuredImage___node___internal___contentDigest'
  | 'featuredImage___node___internal___description'
  | 'featuredImage___node___internal___fieldOwners'
  | 'featuredImage___node___internal___ignoreType'
  | 'featuredImage___node___internal___mediaType'
  | 'featuredImage___node___internal___owner'
  | 'featuredImage___node___internal___type'
  | 'featuredImageDatabaseId'
  | 'featuredImageId'
  | 'guid'
  | 'id'
  | 'isFrontPage'
  | 'isPostsPage'
  | 'isRevision'
  | 'lastEditedBy___node___allNews___nodes'
  | 'lastEditedBy___node___avatar___default'
  | 'lastEditedBy___node___avatar___extraAttr'
  | 'lastEditedBy___node___avatar___forceDefault'
  | 'lastEditedBy___node___avatar___foundAvatar'
  | 'lastEditedBy___node___avatar___height'
  | 'lastEditedBy___node___avatar___rating'
  | 'lastEditedBy___node___avatar___scheme'
  | 'lastEditedBy___node___avatar___size'
  | 'lastEditedBy___node___avatar___url'
  | 'lastEditedBy___node___avatar___width'
  | 'lastEditedBy___node___blockEditorPreviews___nodes'
  | 'lastEditedBy___node___capKey'
  | 'lastEditedBy___node___capabilities'
  | 'lastEditedBy___node___comments___nodes'
  | 'lastEditedBy___node___databaseId'
  | 'lastEditedBy___node___description'
  | 'lastEditedBy___node___email'
  | 'lastEditedBy___node___extraCapabilities'
  | 'lastEditedBy___node___firstName'
  | 'lastEditedBy___node___id'
  | 'lastEditedBy___node___lastName'
  | 'lastEditedBy___node___locale'
  | 'lastEditedBy___node___name'
  | 'lastEditedBy___node___nicename'
  | 'lastEditedBy___node___nickname'
  | 'lastEditedBy___node___pages___nodes'
  | 'lastEditedBy___node___posts___nodes'
  | 'lastEditedBy___node___registeredDate'
  | 'lastEditedBy___node___roles___nodes'
  | 'lastEditedBy___node___slug'
  | 'lastEditedBy___node___uri'
  | 'lastEditedBy___node___url'
  | 'lastEditedBy___node___username'
  | 'lastEditedBy___node___nodeType'
  | 'lastEditedBy___node___parent___id'
  | 'lastEditedBy___node___parent___children'
  | 'lastEditedBy___node___children'
  | 'lastEditedBy___node___children___id'
  | 'lastEditedBy___node___children___children'
  | 'lastEditedBy___node___internal___content'
  | 'lastEditedBy___node___internal___contentDigest'
  | 'lastEditedBy___node___internal___description'
  | 'lastEditedBy___node___internal___fieldOwners'
  | 'lastEditedBy___node___internal___ignoreType'
  | 'lastEditedBy___node___internal___mediaType'
  | 'lastEditedBy___node___internal___owner'
  | 'lastEditedBy___node___internal___type'
  | 'link'
  | 'menuOrder'
  | 'modified'
  | 'modifiedGmt'
  | 'wpParent___node___databaseId'
  | 'wpParent___node___date'
  | 'wpParent___node___dateGmt'
  | 'wpParent___node___desiredSlug'
  | 'wpParent___node___enclosure'
  | 'wpParent___node___guid'
  | 'wpParent___node___id'
  | 'wpParent___node___link'
  | 'wpParent___node___modified'
  | 'wpParent___node___modifiedGmt'
  | 'wpParent___node___slug'
  | 'wpParent___node___status'
  | 'wpParent___node___template___templateName'
  | 'wpParent___node___uri'
  | 'wpParent___node___nodeType'
  | 'parentDatabaseId'
  | 'parentId'
  | 'previewBlocks'
  | 'previewBlocks___dynamicContent'
  | 'previewBlocks___innerBlocks'
  | 'previewBlocks___innerBlocks___dynamicContent'
  | 'previewBlocks___innerBlocks___innerBlocks'
  | 'previewBlocks___innerBlocks___innerBlocks___dynamicContent'
  | 'previewBlocks___innerBlocks___innerBlocks___innerBlocks'
  | 'previewBlocks___innerBlocks___innerBlocks___isDynamic'
  | 'previewBlocks___innerBlocks___innerBlocks___name'
  | 'previewBlocks___innerBlocks___innerBlocks___order'
  | 'previewBlocks___innerBlocks___innerBlocks___originalContent'
  | 'previewBlocks___innerBlocks___innerBlocks___parentNodeDatabaseId'
  | 'previewBlocks___innerBlocks___innerBlocks___saveContent'
  | 'previewBlocks___innerBlocks___isDynamic'
  | 'previewBlocks___innerBlocks___name'
  | 'previewBlocks___innerBlocks___order'
  | 'previewBlocks___innerBlocks___originalContent'
  | 'previewBlocks___innerBlocks___parentNode___id'
  | 'previewBlocks___innerBlocks___parentNodeDatabaseId'
  | 'previewBlocks___innerBlocks___saveContent'
  | 'previewBlocks___isDynamic'
  | 'previewBlocks___name'
  | 'previewBlocks___order'
  | 'previewBlocks___originalContent'
  | 'previewBlocks___parentNode___id'
  | 'previewBlocks___parentNodeDatabaseId'
  | 'previewBlocks___saveContent'
  | 'previewBlocksJSON'
  | 'slug'
  | 'status'
  | 'template___templateName'
  | 'title'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpPageFilterInput = {
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  blocks?: Maybe<WpBlockFilterListInput>;
  blocksJSON?: Maybe<StringQueryOperatorInput>;
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  commentCount?: Maybe<IntQueryOperatorInput>;
  commentStatus?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpPageToCommentConnectionFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<WpPageToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId?: Maybe<IntQueryOperatorInput>;
  featuredImageId?: Maybe<IdQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  isFrontPage?: Maybe<BooleanQueryOperatorInput>;
  isPostsPage?: Maybe<BooleanQueryOperatorInput>;
  isRevision?: Maybe<BooleanQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  menuOrder?: Maybe<IntQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  previewBlocks?: Maybe<WpBlockFilterListInput>;
  previewBlocksJSON?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpPageFilterListInput = {
  elemMatch?: Maybe<WpPageFilterInput>;
};

export type WpPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpPageEdge>;
  nodes: Array<WpPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpPageSortInput = {
  fields?: Maybe<Array<Maybe<WpPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the page type and the Comment type */
export type WpPageToCommentConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

export type WpPageToCommentConnectionFilterInput = {
  nodes?: Maybe<WpCommentFilterListInput>;
};

/** Connection between the page type and the ContentType type */
export type WpPageToContentTypeConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpContentType>;
};

export type WpPageToContentTypeConnectionEdgeFilterInput = {
  node?: Maybe<WpContentTypeFilterInput>;
};

/** The post type */
export type WpPost = Node & WpNode & WpContentNode & WpDatabaseIdentifier & WpNodeWithTemplate & WpUniformResourceIdentifiable & WpNodeWithTitle & WpNodeWithContentEditor & WpNodeWithAuthor & WpNodeWithFeaturedImage & WpNodeWithExcerpt & WpNodeWithComments & WpNodeWithTrackbacks & WpNodeWithRevisions & WpMenuItemLinkable & WpBlockEditorContentNode & {
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** Gutenberg blocks */
  blocks?: Maybe<Array<WpBlock>>;
  /** Gutenberg blocks as json string */
  blocksJSON?: Maybe<Scalars['String']>;
  /** Connection between the post type and the category type */
  categories?: Maybe<WpPostToCategoryConnection>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for compatibility.
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the post type and the Comment type */
  comments?: Maybe<WpPostToCommentConnection>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the post type and the ContentType type */
  contentType?: Maybe<WpPostToContentTypeConnectionEdge>;
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Whether this page is sticky */
  isSticky: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  modified?: Maybe<Scalars['Date']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['Date']>;
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Connection between the post type and the postFormat type */
  postFormats?: Maybe<WpPostToPostFormatConnection>;
  post_preview?: Maybe<WpPost_PostPreview>;
  /** Previewed gutenberg blocks */
  previewBlocks?: Maybe<Array<WpBlock>>;
  /** Previewed Gutenberg blocks as json string */
  previewBlocksJSON?: Maybe<Scalars['String']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** Connection between the post type and the tag type */
  tags?: Maybe<WpPostToTagConnection>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** Connection between the post type and the TermNode type */
  terms?: Maybe<WpPostToTermNodeConnection>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** URI path for the resource */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


/** The post type */
export type WpPostDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The post type */
export type WpPostDateGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The post type */
export type WpPostModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The post type */
export type WpPostModifiedGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Field Group */
export type WpPost_PostPreview = {
  excerpt?: Maybe<Scalars['String']>;
  fieldGroupName?: Maybe<Scalars['String']>;
  previewImage?: Maybe<WpMediaItem>;
};

export type WpPost_PostPreviewFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>;
  fieldGroupName?: Maybe<StringQueryOperatorInput>;
  previewImage?: Maybe<WpMediaItemFilterInput>;
};

export type WpPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpPostEdge>;
  nodes: Array<WpPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpPostGroupConnection>;
};


export type WpPostConnectionDistinctArgs = {
  field: WpPostFieldsEnum;
};


export type WpPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpPostFieldsEnum;
};

export type WpPostEdge = {
  next?: Maybe<WpPost>;
  node: WpPost;
  previous?: Maybe<WpPost>;
};

export type WpPostFieldsEnum = 
  | 'author___node___allNews___nodes'
  | 'author___node___avatar___default'
  | 'author___node___avatar___extraAttr'
  | 'author___node___avatar___forceDefault'
  | 'author___node___avatar___foundAvatar'
  | 'author___node___avatar___height'
  | 'author___node___avatar___rating'
  | 'author___node___avatar___scheme'
  | 'author___node___avatar___size'
  | 'author___node___avatar___url'
  | 'author___node___avatar___width'
  | 'author___node___blockEditorPreviews___nodes'
  | 'author___node___capKey'
  | 'author___node___capabilities'
  | 'author___node___comments___nodes'
  | 'author___node___databaseId'
  | 'author___node___description'
  | 'author___node___email'
  | 'author___node___extraCapabilities'
  | 'author___node___firstName'
  | 'author___node___id'
  | 'author___node___lastName'
  | 'author___node___locale'
  | 'author___node___name'
  | 'author___node___nicename'
  | 'author___node___nickname'
  | 'author___node___pages___nodes'
  | 'author___node___posts___nodes'
  | 'author___node___registeredDate'
  | 'author___node___roles___nodes'
  | 'author___node___slug'
  | 'author___node___uri'
  | 'author___node___url'
  | 'author___node___username'
  | 'author___node___nodeType'
  | 'author___node___parent___id'
  | 'author___node___parent___children'
  | 'author___node___children'
  | 'author___node___children___id'
  | 'author___node___children___children'
  | 'author___node___internal___content'
  | 'author___node___internal___contentDigest'
  | 'author___node___internal___description'
  | 'author___node___internal___fieldOwners'
  | 'author___node___internal___ignoreType'
  | 'author___node___internal___mediaType'
  | 'author___node___internal___owner'
  | 'author___node___internal___type'
  | 'authorDatabaseId'
  | 'authorId'
  | 'blocks'
  | 'blocks___dynamicContent'
  | 'blocks___innerBlocks'
  | 'blocks___innerBlocks___dynamicContent'
  | 'blocks___innerBlocks___innerBlocks'
  | 'blocks___innerBlocks___innerBlocks___dynamicContent'
  | 'blocks___innerBlocks___innerBlocks___innerBlocks'
  | 'blocks___innerBlocks___innerBlocks___isDynamic'
  | 'blocks___innerBlocks___innerBlocks___name'
  | 'blocks___innerBlocks___innerBlocks___order'
  | 'blocks___innerBlocks___innerBlocks___originalContent'
  | 'blocks___innerBlocks___innerBlocks___parentNodeDatabaseId'
  | 'blocks___innerBlocks___innerBlocks___saveContent'
  | 'blocks___innerBlocks___isDynamic'
  | 'blocks___innerBlocks___name'
  | 'blocks___innerBlocks___order'
  | 'blocks___innerBlocks___originalContent'
  | 'blocks___innerBlocks___parentNode___id'
  | 'blocks___innerBlocks___parentNodeDatabaseId'
  | 'blocks___innerBlocks___saveContent'
  | 'blocks___isDynamic'
  | 'blocks___name'
  | 'blocks___order'
  | 'blocks___originalContent'
  | 'blocks___parentNode___id'
  | 'blocks___parentNodeDatabaseId'
  | 'blocks___saveContent'
  | 'blocksJSON'
  | 'categories___nodes'
  | 'categories___nodes___ancestors___nodes'
  | 'categories___nodes___wpChildren___nodes'
  | 'categories___nodes___contentNodes___nodes'
  | 'categories___nodes___count'
  | 'categories___nodes___databaseId'
  | 'categories___nodes___description'
  | 'categories___nodes___id'
  | 'categories___nodes___link'
  | 'categories___nodes___name'
  | 'categories___nodes___parentDatabaseId'
  | 'categories___nodes___parentId'
  | 'categories___nodes___posts___nodes'
  | 'categories___nodes___slug'
  | 'categories___nodes___termGroupId'
  | 'categories___nodes___termTaxonomyId'
  | 'categories___nodes___uri'
  | 'categories___nodes___nodeType'
  | 'categories___nodes___parent___id'
  | 'categories___nodes___parent___children'
  | 'categories___nodes___children'
  | 'categories___nodes___children___id'
  | 'categories___nodes___children___children'
  | 'categories___nodes___internal___content'
  | 'categories___nodes___internal___contentDigest'
  | 'categories___nodes___internal___description'
  | 'categories___nodes___internal___fieldOwners'
  | 'categories___nodes___internal___ignoreType'
  | 'categories___nodes___internal___mediaType'
  | 'categories___nodes___internal___owner'
  | 'categories___nodes___internal___type'
  | 'commentCount'
  | 'commentStatus'
  | 'comments___nodes'
  | 'comments___nodes___agent'
  | 'comments___nodes___approved'
  | 'comments___nodes___authorIp'
  | 'comments___nodes___content'
  | 'comments___nodes___databaseId'
  | 'comments___nodes___date'
  | 'comments___nodes___dateGmt'
  | 'comments___nodes___id'
  | 'comments___nodes___karma'
  | 'comments___nodes___parentDatabaseId'
  | 'comments___nodes___parentId'
  | 'comments___nodes___replies___nodes'
  | 'comments___nodes___type'
  | 'comments___nodes___nodeType'
  | 'comments___nodes___parent___id'
  | 'comments___nodes___parent___children'
  | 'comments___nodes___children'
  | 'comments___nodes___children___id'
  | 'comments___nodes___children___children'
  | 'comments___nodes___internal___content'
  | 'comments___nodes___internal___contentDigest'
  | 'comments___nodes___internal___description'
  | 'comments___nodes___internal___fieldOwners'
  | 'comments___nodes___internal___ignoreType'
  | 'comments___nodes___internal___mediaType'
  | 'comments___nodes___internal___owner'
  | 'comments___nodes___internal___type'
  | 'content'
  | 'contentType___node___archivePath'
  | 'contentType___node___canExport'
  | 'contentType___node___connectedTaxonomies___nodes'
  | 'contentType___node___contentNodes___nodes'
  | 'contentType___node___deleteWithUser'
  | 'contentType___node___description'
  | 'contentType___node___excludeFromSearch'
  | 'contentType___node___graphqlPluralName'
  | 'contentType___node___graphqlSingleName'
  | 'contentType___node___hasArchive'
  | 'contentType___node___hierarchical'
  | 'contentType___node___id'
  | 'contentType___node___isFrontPage'
  | 'contentType___node___isPostsPage'
  | 'contentType___node___label'
  | 'contentType___node___labels___addNew'
  | 'contentType___node___labels___addNewItem'
  | 'contentType___node___labels___allItems'
  | 'contentType___node___labels___archives'
  | 'contentType___node___labels___attributes'
  | 'contentType___node___labels___editItem'
  | 'contentType___node___labels___featuredImage'
  | 'contentType___node___labels___filterItemsList'
  | 'contentType___node___labels___insertIntoItem'
  | 'contentType___node___labels___itemsList'
  | 'contentType___node___labels___itemsListNavigation'
  | 'contentType___node___labels___menuName'
  | 'contentType___node___labels___name'
  | 'contentType___node___labels___newItem'
  | 'contentType___node___labels___notFound'
  | 'contentType___node___labels___notFoundInTrash'
  | 'contentType___node___labels___parentItemColon'
  | 'contentType___node___labels___removeFeaturedImage'
  | 'contentType___node___labels___searchItems'
  | 'contentType___node___labels___setFeaturedImage'
  | 'contentType___node___labels___singularName'
  | 'contentType___node___labels___uploadedToThisItem'
  | 'contentType___node___labels___useFeaturedImage'
  | 'contentType___node___labels___viewItem'
  | 'contentType___node___labels___viewItems'
  | 'contentType___node___menuIcon'
  | 'contentType___node___menuPosition'
  | 'contentType___node___name'
  | 'contentType___node___public'
  | 'contentType___node___publiclyQueryable'
  | 'contentType___node___restBase'
  | 'contentType___node___restControllerClass'
  | 'contentType___node___showInAdminBar'
  | 'contentType___node___showInGraphql'
  | 'contentType___node___showInMenu'
  | 'contentType___node___showInNavMenus'
  | 'contentType___node___showInRest'
  | 'contentType___node___showUi'
  | 'contentType___node___uri'
  | 'contentType___node___nodeType'
  | 'contentType___node___parent___id'
  | 'contentType___node___parent___children'
  | 'contentType___node___children'
  | 'contentType___node___children___id'
  | 'contentType___node___children___children'
  | 'contentType___node___internal___content'
  | 'contentType___node___internal___contentDigest'
  | 'contentType___node___internal___description'
  | 'contentType___node___internal___fieldOwners'
  | 'contentType___node___internal___ignoreType'
  | 'contentType___node___internal___mediaType'
  | 'contentType___node___internal___owner'
  | 'contentType___node___internal___type'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'desiredSlug'
  | 'enclosure'
  | 'excerpt'
  | 'featuredImage___node___altText'
  | 'featuredImage___node___ancestors___nodes'
  | 'featuredImage___node___authorDatabaseId'
  | 'featuredImage___node___authorId'
  | 'featuredImage___node___caption'
  | 'featuredImage___node___wpChildren___nodes'
  | 'featuredImage___node___commentCount'
  | 'featuredImage___node___commentStatus'
  | 'featuredImage___node___comments___nodes'
  | 'featuredImage___node___databaseId'
  | 'featuredImage___node___date'
  | 'featuredImage___node___dateGmt'
  | 'featuredImage___node___description'
  | 'featuredImage___node___desiredSlug'
  | 'featuredImage___node___enclosure'
  | 'featuredImage___node___fileSize'
  | 'featuredImage___node___guid'
  | 'featuredImage___node___id'
  | 'featuredImage___node___link'
  | 'featuredImage___node___mediaDetails___file'
  | 'featuredImage___node___mediaDetails___height'
  | 'featuredImage___node___mediaDetails___sizes'
  | 'featuredImage___node___mediaDetails___width'
  | 'featuredImage___node___mediaItemUrl'
  | 'featuredImage___node___mediaType'
  | 'featuredImage___node___mimeType'
  | 'featuredImage___node___modified'
  | 'featuredImage___node___modifiedGmt'
  | 'featuredImage___node___parentDatabaseId'
  | 'featuredImage___node___parentId'
  | 'featuredImage___node___sizes'
  | 'featuredImage___node___slug'
  | 'featuredImage___node___sourceUrl'
  | 'featuredImage___node___srcSet'
  | 'featuredImage___node___status'
  | 'featuredImage___node___template___templateName'
  | 'featuredImage___node___title'
  | 'featuredImage___node___uri'
  | 'featuredImage___node___nodeType'
  | 'featuredImage___node___remoteFile___sourceInstanceName'
  | 'featuredImage___node___remoteFile___absolutePath'
  | 'featuredImage___node___remoteFile___relativePath'
  | 'featuredImage___node___remoteFile___extension'
  | 'featuredImage___node___remoteFile___size'
  | 'featuredImage___node___remoteFile___prettySize'
  | 'featuredImage___node___remoteFile___modifiedTime'
  | 'featuredImage___node___remoteFile___accessTime'
  | 'featuredImage___node___remoteFile___changeTime'
  | 'featuredImage___node___remoteFile___birthTime'
  | 'featuredImage___node___remoteFile___root'
  | 'featuredImage___node___remoteFile___dir'
  | 'featuredImage___node___remoteFile___base'
  | 'featuredImage___node___remoteFile___ext'
  | 'featuredImage___node___remoteFile___name'
  | 'featuredImage___node___remoteFile___relativeDirectory'
  | 'featuredImage___node___remoteFile___dev'
  | 'featuredImage___node___remoteFile___mode'
  | 'featuredImage___node___remoteFile___nlink'
  | 'featuredImage___node___remoteFile___uid'
  | 'featuredImage___node___remoteFile___gid'
  | 'featuredImage___node___remoteFile___rdev'
  | 'featuredImage___node___remoteFile___ino'
  | 'featuredImage___node___remoteFile___atimeMs'
  | 'featuredImage___node___remoteFile___mtimeMs'
  | 'featuredImage___node___remoteFile___ctimeMs'
  | 'featuredImage___node___remoteFile___atime'
  | 'featuredImage___node___remoteFile___mtime'
  | 'featuredImage___node___remoteFile___ctime'
  | 'featuredImage___node___remoteFile___birthtime'
  | 'featuredImage___node___remoteFile___birthtimeMs'
  | 'featuredImage___node___remoteFile___blksize'
  | 'featuredImage___node___remoteFile___blocks'
  | 'featuredImage___node___remoteFile___hash'
  | 'featuredImage___node___remoteFile___id'
  | 'featuredImage___node___remoteFile___children'
  | 'featuredImage___node___localFile___sourceInstanceName'
  | 'featuredImage___node___localFile___absolutePath'
  | 'featuredImage___node___localFile___relativePath'
  | 'featuredImage___node___localFile___extension'
  | 'featuredImage___node___localFile___size'
  | 'featuredImage___node___localFile___prettySize'
  | 'featuredImage___node___localFile___modifiedTime'
  | 'featuredImage___node___localFile___accessTime'
  | 'featuredImage___node___localFile___changeTime'
  | 'featuredImage___node___localFile___birthTime'
  | 'featuredImage___node___localFile___root'
  | 'featuredImage___node___localFile___dir'
  | 'featuredImage___node___localFile___base'
  | 'featuredImage___node___localFile___ext'
  | 'featuredImage___node___localFile___name'
  | 'featuredImage___node___localFile___relativeDirectory'
  | 'featuredImage___node___localFile___dev'
  | 'featuredImage___node___localFile___mode'
  | 'featuredImage___node___localFile___nlink'
  | 'featuredImage___node___localFile___uid'
  | 'featuredImage___node___localFile___gid'
  | 'featuredImage___node___localFile___rdev'
  | 'featuredImage___node___localFile___ino'
  | 'featuredImage___node___localFile___atimeMs'
  | 'featuredImage___node___localFile___mtimeMs'
  | 'featuredImage___node___localFile___ctimeMs'
  | 'featuredImage___node___localFile___atime'
  | 'featuredImage___node___localFile___mtime'
  | 'featuredImage___node___localFile___ctime'
  | 'featuredImage___node___localFile___birthtime'
  | 'featuredImage___node___localFile___birthtimeMs'
  | 'featuredImage___node___localFile___blksize'
  | 'featuredImage___node___localFile___blocks'
  | 'featuredImage___node___localFile___hash'
  | 'featuredImage___node___localFile___id'
  | 'featuredImage___node___localFile___children'
  | 'featuredImage___node___parent___id'
  | 'featuredImage___node___parent___children'
  | 'featuredImage___node___children'
  | 'featuredImage___node___children___id'
  | 'featuredImage___node___children___children'
  | 'featuredImage___node___internal___content'
  | 'featuredImage___node___internal___contentDigest'
  | 'featuredImage___node___internal___description'
  | 'featuredImage___node___internal___fieldOwners'
  | 'featuredImage___node___internal___ignoreType'
  | 'featuredImage___node___internal___mediaType'
  | 'featuredImage___node___internal___owner'
  | 'featuredImage___node___internal___type'
  | 'featuredImageDatabaseId'
  | 'featuredImageId'
  | 'guid'
  | 'id'
  | 'isRevision'
  | 'isSticky'
  | 'lastEditedBy___node___allNews___nodes'
  | 'lastEditedBy___node___avatar___default'
  | 'lastEditedBy___node___avatar___extraAttr'
  | 'lastEditedBy___node___avatar___forceDefault'
  | 'lastEditedBy___node___avatar___foundAvatar'
  | 'lastEditedBy___node___avatar___height'
  | 'lastEditedBy___node___avatar___rating'
  | 'lastEditedBy___node___avatar___scheme'
  | 'lastEditedBy___node___avatar___size'
  | 'lastEditedBy___node___avatar___url'
  | 'lastEditedBy___node___avatar___width'
  | 'lastEditedBy___node___blockEditorPreviews___nodes'
  | 'lastEditedBy___node___capKey'
  | 'lastEditedBy___node___capabilities'
  | 'lastEditedBy___node___comments___nodes'
  | 'lastEditedBy___node___databaseId'
  | 'lastEditedBy___node___description'
  | 'lastEditedBy___node___email'
  | 'lastEditedBy___node___extraCapabilities'
  | 'lastEditedBy___node___firstName'
  | 'lastEditedBy___node___id'
  | 'lastEditedBy___node___lastName'
  | 'lastEditedBy___node___locale'
  | 'lastEditedBy___node___name'
  | 'lastEditedBy___node___nicename'
  | 'lastEditedBy___node___nickname'
  | 'lastEditedBy___node___pages___nodes'
  | 'lastEditedBy___node___posts___nodes'
  | 'lastEditedBy___node___registeredDate'
  | 'lastEditedBy___node___roles___nodes'
  | 'lastEditedBy___node___slug'
  | 'lastEditedBy___node___uri'
  | 'lastEditedBy___node___url'
  | 'lastEditedBy___node___username'
  | 'lastEditedBy___node___nodeType'
  | 'lastEditedBy___node___parent___id'
  | 'lastEditedBy___node___parent___children'
  | 'lastEditedBy___node___children'
  | 'lastEditedBy___node___children___id'
  | 'lastEditedBy___node___children___children'
  | 'lastEditedBy___node___internal___content'
  | 'lastEditedBy___node___internal___contentDigest'
  | 'lastEditedBy___node___internal___description'
  | 'lastEditedBy___node___internal___fieldOwners'
  | 'lastEditedBy___node___internal___ignoreType'
  | 'lastEditedBy___node___internal___mediaType'
  | 'lastEditedBy___node___internal___owner'
  | 'lastEditedBy___node___internal___type'
  | 'link'
  | 'modified'
  | 'modifiedGmt'
  | 'pingStatus'
  | 'pinged'
  | 'postFormats___nodes'
  | 'postFormats___nodes___contentNodes___nodes'
  | 'postFormats___nodes___count'
  | 'postFormats___nodes___databaseId'
  | 'postFormats___nodes___description'
  | 'postFormats___nodes___id'
  | 'postFormats___nodes___link'
  | 'postFormats___nodes___name'
  | 'postFormats___nodes___posts___nodes'
  | 'postFormats___nodes___slug'
  | 'postFormats___nodes___termGroupId'
  | 'postFormats___nodes___termTaxonomyId'
  | 'postFormats___nodes___uri'
  | 'postFormats___nodes___nodeType'
  | 'postFormats___nodes___parent___id'
  | 'postFormats___nodes___parent___children'
  | 'postFormats___nodes___children'
  | 'postFormats___nodes___children___id'
  | 'postFormats___nodes___children___children'
  | 'postFormats___nodes___internal___content'
  | 'postFormats___nodes___internal___contentDigest'
  | 'postFormats___nodes___internal___description'
  | 'postFormats___nodes___internal___fieldOwners'
  | 'postFormats___nodes___internal___ignoreType'
  | 'postFormats___nodes___internal___mediaType'
  | 'postFormats___nodes___internal___owner'
  | 'postFormats___nodes___internal___type'
  | 'post_preview___excerpt'
  | 'post_preview___fieldGroupName'
  | 'post_preview___previewImage___altText'
  | 'post_preview___previewImage___ancestors___nodes'
  | 'post_preview___previewImage___authorDatabaseId'
  | 'post_preview___previewImage___authorId'
  | 'post_preview___previewImage___caption'
  | 'post_preview___previewImage___wpChildren___nodes'
  | 'post_preview___previewImage___commentCount'
  | 'post_preview___previewImage___commentStatus'
  | 'post_preview___previewImage___comments___nodes'
  | 'post_preview___previewImage___databaseId'
  | 'post_preview___previewImage___date'
  | 'post_preview___previewImage___dateGmt'
  | 'post_preview___previewImage___description'
  | 'post_preview___previewImage___desiredSlug'
  | 'post_preview___previewImage___enclosure'
  | 'post_preview___previewImage___fileSize'
  | 'post_preview___previewImage___guid'
  | 'post_preview___previewImage___id'
  | 'post_preview___previewImage___link'
  | 'post_preview___previewImage___mediaDetails___file'
  | 'post_preview___previewImage___mediaDetails___height'
  | 'post_preview___previewImage___mediaDetails___sizes'
  | 'post_preview___previewImage___mediaDetails___width'
  | 'post_preview___previewImage___mediaItemUrl'
  | 'post_preview___previewImage___mediaType'
  | 'post_preview___previewImage___mimeType'
  | 'post_preview___previewImage___modified'
  | 'post_preview___previewImage___modifiedGmt'
  | 'post_preview___previewImage___parentDatabaseId'
  | 'post_preview___previewImage___parentId'
  | 'post_preview___previewImage___sizes'
  | 'post_preview___previewImage___slug'
  | 'post_preview___previewImage___sourceUrl'
  | 'post_preview___previewImage___srcSet'
  | 'post_preview___previewImage___status'
  | 'post_preview___previewImage___template___templateName'
  | 'post_preview___previewImage___title'
  | 'post_preview___previewImage___uri'
  | 'post_preview___previewImage___nodeType'
  | 'post_preview___previewImage___remoteFile___sourceInstanceName'
  | 'post_preview___previewImage___remoteFile___absolutePath'
  | 'post_preview___previewImage___remoteFile___relativePath'
  | 'post_preview___previewImage___remoteFile___extension'
  | 'post_preview___previewImage___remoteFile___size'
  | 'post_preview___previewImage___remoteFile___prettySize'
  | 'post_preview___previewImage___remoteFile___modifiedTime'
  | 'post_preview___previewImage___remoteFile___accessTime'
  | 'post_preview___previewImage___remoteFile___changeTime'
  | 'post_preview___previewImage___remoteFile___birthTime'
  | 'post_preview___previewImage___remoteFile___root'
  | 'post_preview___previewImage___remoteFile___dir'
  | 'post_preview___previewImage___remoteFile___base'
  | 'post_preview___previewImage___remoteFile___ext'
  | 'post_preview___previewImage___remoteFile___name'
  | 'post_preview___previewImage___remoteFile___relativeDirectory'
  | 'post_preview___previewImage___remoteFile___dev'
  | 'post_preview___previewImage___remoteFile___mode'
  | 'post_preview___previewImage___remoteFile___nlink'
  | 'post_preview___previewImage___remoteFile___uid'
  | 'post_preview___previewImage___remoteFile___gid'
  | 'post_preview___previewImage___remoteFile___rdev'
  | 'post_preview___previewImage___remoteFile___ino'
  | 'post_preview___previewImage___remoteFile___atimeMs'
  | 'post_preview___previewImage___remoteFile___mtimeMs'
  | 'post_preview___previewImage___remoteFile___ctimeMs'
  | 'post_preview___previewImage___remoteFile___atime'
  | 'post_preview___previewImage___remoteFile___mtime'
  | 'post_preview___previewImage___remoteFile___ctime'
  | 'post_preview___previewImage___remoteFile___birthtime'
  | 'post_preview___previewImage___remoteFile___birthtimeMs'
  | 'post_preview___previewImage___remoteFile___blksize'
  | 'post_preview___previewImage___remoteFile___blocks'
  | 'post_preview___previewImage___remoteFile___hash'
  | 'post_preview___previewImage___remoteFile___id'
  | 'post_preview___previewImage___remoteFile___children'
  | 'post_preview___previewImage___localFile___sourceInstanceName'
  | 'post_preview___previewImage___localFile___absolutePath'
  | 'post_preview___previewImage___localFile___relativePath'
  | 'post_preview___previewImage___localFile___extension'
  | 'post_preview___previewImage___localFile___size'
  | 'post_preview___previewImage___localFile___prettySize'
  | 'post_preview___previewImage___localFile___modifiedTime'
  | 'post_preview___previewImage___localFile___accessTime'
  | 'post_preview___previewImage___localFile___changeTime'
  | 'post_preview___previewImage___localFile___birthTime'
  | 'post_preview___previewImage___localFile___root'
  | 'post_preview___previewImage___localFile___dir'
  | 'post_preview___previewImage___localFile___base'
  | 'post_preview___previewImage___localFile___ext'
  | 'post_preview___previewImage___localFile___name'
  | 'post_preview___previewImage___localFile___relativeDirectory'
  | 'post_preview___previewImage___localFile___dev'
  | 'post_preview___previewImage___localFile___mode'
  | 'post_preview___previewImage___localFile___nlink'
  | 'post_preview___previewImage___localFile___uid'
  | 'post_preview___previewImage___localFile___gid'
  | 'post_preview___previewImage___localFile___rdev'
  | 'post_preview___previewImage___localFile___ino'
  | 'post_preview___previewImage___localFile___atimeMs'
  | 'post_preview___previewImage___localFile___mtimeMs'
  | 'post_preview___previewImage___localFile___ctimeMs'
  | 'post_preview___previewImage___localFile___atime'
  | 'post_preview___previewImage___localFile___mtime'
  | 'post_preview___previewImage___localFile___ctime'
  | 'post_preview___previewImage___localFile___birthtime'
  | 'post_preview___previewImage___localFile___birthtimeMs'
  | 'post_preview___previewImage___localFile___blksize'
  | 'post_preview___previewImage___localFile___blocks'
  | 'post_preview___previewImage___localFile___hash'
  | 'post_preview___previewImage___localFile___id'
  | 'post_preview___previewImage___localFile___children'
  | 'post_preview___previewImage___parent___id'
  | 'post_preview___previewImage___parent___children'
  | 'post_preview___previewImage___children'
  | 'post_preview___previewImage___children___id'
  | 'post_preview___previewImage___children___children'
  | 'post_preview___previewImage___internal___content'
  | 'post_preview___previewImage___internal___contentDigest'
  | 'post_preview___previewImage___internal___description'
  | 'post_preview___previewImage___internal___fieldOwners'
  | 'post_preview___previewImage___internal___ignoreType'
  | 'post_preview___previewImage___internal___mediaType'
  | 'post_preview___previewImage___internal___owner'
  | 'post_preview___previewImage___internal___type'
  | 'previewBlocks'
  | 'previewBlocks___dynamicContent'
  | 'previewBlocks___innerBlocks'
  | 'previewBlocks___innerBlocks___dynamicContent'
  | 'previewBlocks___innerBlocks___innerBlocks'
  | 'previewBlocks___innerBlocks___innerBlocks___dynamicContent'
  | 'previewBlocks___innerBlocks___innerBlocks___innerBlocks'
  | 'previewBlocks___innerBlocks___innerBlocks___isDynamic'
  | 'previewBlocks___innerBlocks___innerBlocks___name'
  | 'previewBlocks___innerBlocks___innerBlocks___order'
  | 'previewBlocks___innerBlocks___innerBlocks___originalContent'
  | 'previewBlocks___innerBlocks___innerBlocks___parentNodeDatabaseId'
  | 'previewBlocks___innerBlocks___innerBlocks___saveContent'
  | 'previewBlocks___innerBlocks___isDynamic'
  | 'previewBlocks___innerBlocks___name'
  | 'previewBlocks___innerBlocks___order'
  | 'previewBlocks___innerBlocks___originalContent'
  | 'previewBlocks___innerBlocks___parentNode___id'
  | 'previewBlocks___innerBlocks___parentNodeDatabaseId'
  | 'previewBlocks___innerBlocks___saveContent'
  | 'previewBlocks___isDynamic'
  | 'previewBlocks___name'
  | 'previewBlocks___order'
  | 'previewBlocks___originalContent'
  | 'previewBlocks___parentNode___id'
  | 'previewBlocks___parentNodeDatabaseId'
  | 'previewBlocks___saveContent'
  | 'previewBlocksJSON'
  | 'slug'
  | 'status'
  | 'tags___nodes'
  | 'tags___nodes___allNews___nodes'
  | 'tags___nodes___contentNodes___nodes'
  | 'tags___nodes___count'
  | 'tags___nodes___databaseId'
  | 'tags___nodes___description'
  | 'tags___nodes___id'
  | 'tags___nodes___link'
  | 'tags___nodes___name'
  | 'tags___nodes___posts___nodes'
  | 'tags___nodes___slug'
  | 'tags___nodes___termGroupId'
  | 'tags___nodes___termTaxonomyId'
  | 'tags___nodes___uri'
  | 'tags___nodes___nodeType'
  | 'tags___nodes___parent___id'
  | 'tags___nodes___parent___children'
  | 'tags___nodes___children'
  | 'tags___nodes___children___id'
  | 'tags___nodes___children___children'
  | 'tags___nodes___internal___content'
  | 'tags___nodes___internal___contentDigest'
  | 'tags___nodes___internal___description'
  | 'tags___nodes___internal___fieldOwners'
  | 'tags___nodes___internal___ignoreType'
  | 'tags___nodes___internal___mediaType'
  | 'tags___nodes___internal___owner'
  | 'tags___nodes___internal___type'
  | 'template___templateName'
  | 'terms___nodes'
  | 'terms___nodes___count'
  | 'terms___nodes___databaseId'
  | 'terms___nodes___description'
  | 'terms___nodes___id'
  | 'terms___nodes___link'
  | 'terms___nodes___name'
  | 'terms___nodes___slug'
  | 'terms___nodes___termGroupId'
  | 'terms___nodes___termTaxonomyId'
  | 'terms___nodes___uri'
  | 'terms___nodes___nodeType'
  | 'title'
  | 'toPing'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpPostFilterInput = {
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  blocks?: Maybe<WpBlockFilterListInput>;
  blocksJSON?: Maybe<StringQueryOperatorInput>;
  categories?: Maybe<WpPostToCategoryConnectionFilterInput>;
  commentCount?: Maybe<IntQueryOperatorInput>;
  commentStatus?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpPostToCommentConnectionFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<WpPostToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId?: Maybe<IntQueryOperatorInput>;
  featuredImageId?: Maybe<IdQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  isRevision?: Maybe<BooleanQueryOperatorInput>;
  isSticky?: Maybe<BooleanQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  pingStatus?: Maybe<StringQueryOperatorInput>;
  pinged?: Maybe<StringQueryOperatorInput>;
  postFormats?: Maybe<WpPostToPostFormatConnectionFilterInput>;
  post_preview?: Maybe<WpPost_PostPreviewFilterInput>;
  previewBlocks?: Maybe<WpBlockFilterListInput>;
  previewBlocksJSON?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<WpPostToTagConnectionFilterInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  terms?: Maybe<WpPostToTermNodeConnectionFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  toPing?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpPostFilterListInput = {
  elemMatch?: Maybe<WpPostFilterInput>;
};

/** The postFormat type */
export type WpPostFormat = Node & WpNode & WpTermNode & WpDatabaseIdentifier & WpUniformResourceIdentifiable & {
  /** Connection between the postFormat type and the ContentNode type */
  contentNodes?: Maybe<WpPostFormatToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the postFormat type and the post type */
  posts?: Maybe<WpPostFormatToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the postFormat type and the Taxonomy type */
  taxonomy?: Maybe<WpPostFormatToTaxonomyConnectionEdge>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpPostFormatConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpPostFormatEdge>;
  nodes: Array<WpPostFormat>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpPostFormatGroupConnection>;
};


export type WpPostFormatConnectionDistinctArgs = {
  field: WpPostFormatFieldsEnum;
};


export type WpPostFormatConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpPostFormatFieldsEnum;
};

export type WpPostFormatEdge = {
  next?: Maybe<WpPostFormat>;
  node: WpPostFormat;
  previous?: Maybe<WpPostFormat>;
};

export type WpPostFormatFieldsEnum = 
  | 'contentNodes___nodes'
  | 'contentNodes___nodes___databaseId'
  | 'contentNodes___nodes___date'
  | 'contentNodes___nodes___dateGmt'
  | 'contentNodes___nodes___desiredSlug'
  | 'contentNodes___nodes___enclosure'
  | 'contentNodes___nodes___guid'
  | 'contentNodes___nodes___id'
  | 'contentNodes___nodes___link'
  | 'contentNodes___nodes___modified'
  | 'contentNodes___nodes___modifiedGmt'
  | 'contentNodes___nodes___slug'
  | 'contentNodes___nodes___status'
  | 'contentNodes___nodes___template___templateName'
  | 'contentNodes___nodes___uri'
  | 'contentNodes___nodes___nodeType'
  | 'count'
  | 'databaseId'
  | 'description'
  | 'id'
  | 'link'
  | 'name'
  | 'posts___nodes'
  | 'posts___nodes___authorDatabaseId'
  | 'posts___nodes___authorId'
  | 'posts___nodes___blocks'
  | 'posts___nodes___blocks___dynamicContent'
  | 'posts___nodes___blocks___innerBlocks'
  | 'posts___nodes___blocks___isDynamic'
  | 'posts___nodes___blocks___name'
  | 'posts___nodes___blocks___order'
  | 'posts___nodes___blocks___originalContent'
  | 'posts___nodes___blocks___parentNodeDatabaseId'
  | 'posts___nodes___blocks___saveContent'
  | 'posts___nodes___blocksJSON'
  | 'posts___nodes___categories___nodes'
  | 'posts___nodes___commentCount'
  | 'posts___nodes___commentStatus'
  | 'posts___nodes___comments___nodes'
  | 'posts___nodes___content'
  | 'posts___nodes___databaseId'
  | 'posts___nodes___date'
  | 'posts___nodes___dateGmt'
  | 'posts___nodes___desiredSlug'
  | 'posts___nodes___enclosure'
  | 'posts___nodes___excerpt'
  | 'posts___nodes___featuredImageDatabaseId'
  | 'posts___nodes___featuredImageId'
  | 'posts___nodes___guid'
  | 'posts___nodes___id'
  | 'posts___nodes___isRevision'
  | 'posts___nodes___isSticky'
  | 'posts___nodes___link'
  | 'posts___nodes___modified'
  | 'posts___nodes___modifiedGmt'
  | 'posts___nodes___pingStatus'
  | 'posts___nodes___pinged'
  | 'posts___nodes___postFormats___nodes'
  | 'posts___nodes___post_preview___excerpt'
  | 'posts___nodes___post_preview___fieldGroupName'
  | 'posts___nodes___previewBlocks'
  | 'posts___nodes___previewBlocks___dynamicContent'
  | 'posts___nodes___previewBlocks___innerBlocks'
  | 'posts___nodes___previewBlocks___isDynamic'
  | 'posts___nodes___previewBlocks___name'
  | 'posts___nodes___previewBlocks___order'
  | 'posts___nodes___previewBlocks___originalContent'
  | 'posts___nodes___previewBlocks___parentNodeDatabaseId'
  | 'posts___nodes___previewBlocks___saveContent'
  | 'posts___nodes___previewBlocksJSON'
  | 'posts___nodes___slug'
  | 'posts___nodes___status'
  | 'posts___nodes___tags___nodes'
  | 'posts___nodes___template___templateName'
  | 'posts___nodes___terms___nodes'
  | 'posts___nodes___title'
  | 'posts___nodes___toPing'
  | 'posts___nodes___uri'
  | 'posts___nodes___nodeType'
  | 'posts___nodes___parent___id'
  | 'posts___nodes___parent___children'
  | 'posts___nodes___children'
  | 'posts___nodes___children___id'
  | 'posts___nodes___children___children'
  | 'posts___nodes___internal___content'
  | 'posts___nodes___internal___contentDigest'
  | 'posts___nodes___internal___description'
  | 'posts___nodes___internal___fieldOwners'
  | 'posts___nodes___internal___ignoreType'
  | 'posts___nodes___internal___mediaType'
  | 'posts___nodes___internal___owner'
  | 'posts___nodes___internal___type'
  | 'slug'
  | 'taxonomy___node___archivePath'
  | 'taxonomy___node___connectedContentTypes___nodes'
  | 'taxonomy___node___description'
  | 'taxonomy___node___graphqlPluralName'
  | 'taxonomy___node___graphqlSingleName'
  | 'taxonomy___node___hierarchical'
  | 'taxonomy___node___id'
  | 'taxonomy___node___label'
  | 'taxonomy___node___name'
  | 'taxonomy___node___public'
  | 'taxonomy___node___restBase'
  | 'taxonomy___node___restControllerClass'
  | 'taxonomy___node___showCloud'
  | 'taxonomy___node___showInAdminColumn'
  | 'taxonomy___node___showInGraphql'
  | 'taxonomy___node___showInMenu'
  | 'taxonomy___node___showInNavMenus'
  | 'taxonomy___node___showInQuickEdit'
  | 'taxonomy___node___showInRest'
  | 'taxonomy___node___showUi'
  | 'taxonomy___node___nodeType'
  | 'taxonomy___node___parent___id'
  | 'taxonomy___node___parent___children'
  | 'taxonomy___node___children'
  | 'taxonomy___node___children___id'
  | 'taxonomy___node___children___children'
  | 'taxonomy___node___internal___content'
  | 'taxonomy___node___internal___contentDigest'
  | 'taxonomy___node___internal___description'
  | 'taxonomy___node___internal___fieldOwners'
  | 'taxonomy___node___internal___ignoreType'
  | 'taxonomy___node___internal___mediaType'
  | 'taxonomy___node___internal___owner'
  | 'taxonomy___node___internal___type'
  | 'termGroupId'
  | 'termTaxonomyId'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpPostFormatFilterInput = {
  contentNodes?: Maybe<WpPostFormatToContentNodeConnectionFilterInput>;
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  posts?: Maybe<WpPostFormatToPostConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<WpPostFormatToTaxonomyConnectionEdgeFilterInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpPostFormatFilterListInput = {
  elemMatch?: Maybe<WpPostFormatFilterInput>;
};

export type WpPostFormatGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpPostFormatEdge>;
  nodes: Array<WpPostFormat>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpPostFormatSortInput = {
  fields?: Maybe<Array<Maybe<WpPostFormatFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the postFormat type and the ContentNode type */
export type WpPostFormatToContentNodeConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

export type WpPostFormatToContentNodeConnectionFilterInput = {
  nodes?: Maybe<WpContentNodeFilterListInput>;
};

/** Connection between the postFormat type and the post type */
export type WpPostFormatToPostConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPost>>>;
};

export type WpPostFormatToPostConnectionFilterInput = {
  nodes?: Maybe<WpPostFilterListInput>;
};

/** Connection between the postFormat type and the Taxonomy type */
export type WpPostFormatToTaxonomyConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpTaxonomy>;
};

export type WpPostFormatToTaxonomyConnectionEdgeFilterInput = {
  node?: Maybe<WpTaxonomyFilterInput>;
};

export type WpPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpPostEdge>;
  nodes: Array<WpPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpPostSortInput = {
  fields?: Maybe<Array<Maybe<WpPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the post type and the category type */
export type WpPostToCategoryConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpCategory>>>;
};

export type WpPostToCategoryConnectionFilterInput = {
  nodes?: Maybe<WpCategoryFilterListInput>;
};

/** Connection between the post type and the Comment type */
export type WpPostToCommentConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

export type WpPostToCommentConnectionFilterInput = {
  nodes?: Maybe<WpCommentFilterListInput>;
};

/** Connection between the post type and the ContentType type */
export type WpPostToContentTypeConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpContentType>;
};

export type WpPostToContentTypeConnectionEdgeFilterInput = {
  node?: Maybe<WpContentTypeFilterInput>;
};

/** Connection between the post type and the postFormat type */
export type WpPostToPostFormatConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPostFormat>>>;
};

export type WpPostToPostFormatConnectionFilterInput = {
  nodes?: Maybe<WpPostFormatFilterListInput>;
};

/** Connection between the post type and the tag type */
export type WpPostToTagConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpTag>>>;
};

export type WpPostToTagConnectionFilterInput = {
  nodes?: Maybe<WpTagFilterListInput>;
};

/** Connection between the post type and the TermNode type */
export type WpPostToTermNodeConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpTermNode>>>;
};

export type WpPostToTermNodeConnectionFilterInput = {
  nodes?: Maybe<WpTermNodeFilterListInput>;
};

/** Details for labels of the PostType */
export type WpPostTypeLabelDetails = {
  /** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
  addNew?: Maybe<Scalars['String']>;
  /** Label for adding a new singular item. */
  addNewItem?: Maybe<Scalars['String']>;
  /** Label to signify all items in a submenu link. */
  allItems?: Maybe<Scalars['String']>;
  /** Label for archives in nav menus */
  archives?: Maybe<Scalars['String']>;
  /** Label for the attributes meta box. */
  attributes?: Maybe<Scalars['String']>;
  /** Label for editing a singular item. */
  editItem?: Maybe<Scalars['String']>;
  /** Label for the Featured Image meta box title. */
  featuredImage?: Maybe<Scalars['String']>;
  /** Label for the table views hidden heading. */
  filterItemsList?: Maybe<Scalars['String']>;
  /** Label for the media frame button. */
  insertIntoItem?: Maybe<Scalars['String']>;
  /** Label for the table hidden heading. */
  itemsList?: Maybe<Scalars['String']>;
  /** Label for the table pagination hidden heading. */
  itemsListNavigation?: Maybe<Scalars['String']>;
  /** Label for the menu name. */
  menuName?: Maybe<Scalars['String']>;
  /** General name for the post type, usually plural. */
  name?: Maybe<Scalars['String']>;
  /** Label for the new item page title. */
  newItem?: Maybe<Scalars['String']>;
  /** Label used when no items are found. */
  notFound?: Maybe<Scalars['String']>;
  /** Label used when no items are in the trash. */
  notFoundInTrash?: Maybe<Scalars['String']>;
  /** Label used to prefix parents of hierarchical items. */
  parentItemColon?: Maybe<Scalars['String']>;
  /** Label for removing the featured image. */
  removeFeaturedImage?: Maybe<Scalars['String']>;
  /** Label for searching plural items. */
  searchItems?: Maybe<Scalars['String']>;
  /** Label for setting the featured image. */
  setFeaturedImage?: Maybe<Scalars['String']>;
  /** Name for one object of this post type. */
  singularName?: Maybe<Scalars['String']>;
  /** Label for the media frame filter. */
  uploadedToThisItem?: Maybe<Scalars['String']>;
  /** Label in the media frame for using a featured image. */
  useFeaturedImage?: Maybe<Scalars['String']>;
  /** Label for viewing a singular item. */
  viewItem?: Maybe<Scalars['String']>;
  /** Label for viewing post type archives. */
  viewItems?: Maybe<Scalars['String']>;
};

export type WpPostTypeLabelDetailsFilterInput = {
  addNew?: Maybe<StringQueryOperatorInput>;
  addNewItem?: Maybe<StringQueryOperatorInput>;
  allItems?: Maybe<StringQueryOperatorInput>;
  archives?: Maybe<StringQueryOperatorInput>;
  attributes?: Maybe<StringQueryOperatorInput>;
  editItem?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<StringQueryOperatorInput>;
  filterItemsList?: Maybe<StringQueryOperatorInput>;
  insertIntoItem?: Maybe<StringQueryOperatorInput>;
  itemsList?: Maybe<StringQueryOperatorInput>;
  itemsListNavigation?: Maybe<StringQueryOperatorInput>;
  menuName?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  newItem?: Maybe<StringQueryOperatorInput>;
  notFound?: Maybe<StringQueryOperatorInput>;
  notFoundInTrash?: Maybe<StringQueryOperatorInput>;
  parentItemColon?: Maybe<StringQueryOperatorInput>;
  removeFeaturedImage?: Maybe<StringQueryOperatorInput>;
  searchItems?: Maybe<StringQueryOperatorInput>;
  setFeaturedImage?: Maybe<StringQueryOperatorInput>;
  singularName?: Maybe<StringQueryOperatorInput>;
  uploadedToThisItem?: Maybe<StringQueryOperatorInput>;
  useFeaturedImage?: Maybe<StringQueryOperatorInput>;
  viewItem?: Maybe<StringQueryOperatorInput>;
  viewItems?: Maybe<StringQueryOperatorInput>;
};

/** The reading setting type */
export type WpReadingSettings = {
  /** Parādāmo bloga lapu skaits. */
  postsPerPage?: Maybe<Scalars['Int']>;
};

export type WpReadingSettingsFilterInput = {
  postsPerPage?: Maybe<IntQueryOperatorInput>;
};

/** The ReusableBlock type */
export type WpReusableBlock = Node & WpNode & WpContentNode & WpDatabaseIdentifier & WpNodeWithTemplate & WpNodeWithTitle & WpNodeWithContentEditor & WpBlockEditorContentNode & {
  /** Gutenberg blocks */
  blocks?: Maybe<Array<WpBlock>>;
  /** Gutenberg blocks as json string */
  blocksJSON?: Maybe<Scalars['String']>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ReusableBlock type and the ContentType type */
  contentType?: Maybe<WpReusableBlockToContentTypeConnectionEdge>;
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  modified?: Maybe<Scalars['Date']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['Date']>;
  /** Previewed gutenberg blocks */
  previewBlocks?: Maybe<Array<WpBlock>>;
  /** Previewed Gutenberg blocks as json string */
  previewBlocksJSON?: Maybe<Scalars['String']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URI path for the resource */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


/** The ReusableBlock type */
export type WpReusableBlockDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The ReusableBlock type */
export type WpReusableBlockDateGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The ReusableBlock type */
export type WpReusableBlockModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The ReusableBlock type */
export type WpReusableBlockModifiedGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type WpReusableBlockConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpReusableBlockEdge>;
  nodes: Array<WpReusableBlock>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpReusableBlockGroupConnection>;
};


export type WpReusableBlockConnectionDistinctArgs = {
  field: WpReusableBlockFieldsEnum;
};


export type WpReusableBlockConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpReusableBlockFieldsEnum;
};

export type WpReusableBlockEdge = {
  next?: Maybe<WpReusableBlock>;
  node: WpReusableBlock;
  previous?: Maybe<WpReusableBlock>;
};

export type WpReusableBlockFieldsEnum = 
  | 'blocks'
  | 'blocks___dynamicContent'
  | 'blocks___innerBlocks'
  | 'blocks___innerBlocks___dynamicContent'
  | 'blocks___innerBlocks___innerBlocks'
  | 'blocks___innerBlocks___innerBlocks___dynamicContent'
  | 'blocks___innerBlocks___innerBlocks___innerBlocks'
  | 'blocks___innerBlocks___innerBlocks___isDynamic'
  | 'blocks___innerBlocks___innerBlocks___name'
  | 'blocks___innerBlocks___innerBlocks___order'
  | 'blocks___innerBlocks___innerBlocks___originalContent'
  | 'blocks___innerBlocks___innerBlocks___parentNodeDatabaseId'
  | 'blocks___innerBlocks___innerBlocks___saveContent'
  | 'blocks___innerBlocks___isDynamic'
  | 'blocks___innerBlocks___name'
  | 'blocks___innerBlocks___order'
  | 'blocks___innerBlocks___originalContent'
  | 'blocks___innerBlocks___parentNode___id'
  | 'blocks___innerBlocks___parentNodeDatabaseId'
  | 'blocks___innerBlocks___saveContent'
  | 'blocks___isDynamic'
  | 'blocks___name'
  | 'blocks___order'
  | 'blocks___originalContent'
  | 'blocks___parentNode___id'
  | 'blocks___parentNodeDatabaseId'
  | 'blocks___saveContent'
  | 'blocksJSON'
  | 'content'
  | 'contentType___node___archivePath'
  | 'contentType___node___canExport'
  | 'contentType___node___connectedTaxonomies___nodes'
  | 'contentType___node___contentNodes___nodes'
  | 'contentType___node___deleteWithUser'
  | 'contentType___node___description'
  | 'contentType___node___excludeFromSearch'
  | 'contentType___node___graphqlPluralName'
  | 'contentType___node___graphqlSingleName'
  | 'contentType___node___hasArchive'
  | 'contentType___node___hierarchical'
  | 'contentType___node___id'
  | 'contentType___node___isFrontPage'
  | 'contentType___node___isPostsPage'
  | 'contentType___node___label'
  | 'contentType___node___labels___addNew'
  | 'contentType___node___labels___addNewItem'
  | 'contentType___node___labels___allItems'
  | 'contentType___node___labels___archives'
  | 'contentType___node___labels___attributes'
  | 'contentType___node___labels___editItem'
  | 'contentType___node___labels___featuredImage'
  | 'contentType___node___labels___filterItemsList'
  | 'contentType___node___labels___insertIntoItem'
  | 'contentType___node___labels___itemsList'
  | 'contentType___node___labels___itemsListNavigation'
  | 'contentType___node___labels___menuName'
  | 'contentType___node___labels___name'
  | 'contentType___node___labels___newItem'
  | 'contentType___node___labels___notFound'
  | 'contentType___node___labels___notFoundInTrash'
  | 'contentType___node___labels___parentItemColon'
  | 'contentType___node___labels___removeFeaturedImage'
  | 'contentType___node___labels___searchItems'
  | 'contentType___node___labels___setFeaturedImage'
  | 'contentType___node___labels___singularName'
  | 'contentType___node___labels___uploadedToThisItem'
  | 'contentType___node___labels___useFeaturedImage'
  | 'contentType___node___labels___viewItem'
  | 'contentType___node___labels___viewItems'
  | 'contentType___node___menuIcon'
  | 'contentType___node___menuPosition'
  | 'contentType___node___name'
  | 'contentType___node___public'
  | 'contentType___node___publiclyQueryable'
  | 'contentType___node___restBase'
  | 'contentType___node___restControllerClass'
  | 'contentType___node___showInAdminBar'
  | 'contentType___node___showInGraphql'
  | 'contentType___node___showInMenu'
  | 'contentType___node___showInNavMenus'
  | 'contentType___node___showInRest'
  | 'contentType___node___showUi'
  | 'contentType___node___uri'
  | 'contentType___node___nodeType'
  | 'contentType___node___parent___id'
  | 'contentType___node___parent___children'
  | 'contentType___node___children'
  | 'contentType___node___children___id'
  | 'contentType___node___children___children'
  | 'contentType___node___internal___content'
  | 'contentType___node___internal___contentDigest'
  | 'contentType___node___internal___description'
  | 'contentType___node___internal___fieldOwners'
  | 'contentType___node___internal___ignoreType'
  | 'contentType___node___internal___mediaType'
  | 'contentType___node___internal___owner'
  | 'contentType___node___internal___type'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'desiredSlug'
  | 'enclosure'
  | 'guid'
  | 'id'
  | 'lastEditedBy___node___allNews___nodes'
  | 'lastEditedBy___node___avatar___default'
  | 'lastEditedBy___node___avatar___extraAttr'
  | 'lastEditedBy___node___avatar___forceDefault'
  | 'lastEditedBy___node___avatar___foundAvatar'
  | 'lastEditedBy___node___avatar___height'
  | 'lastEditedBy___node___avatar___rating'
  | 'lastEditedBy___node___avatar___scheme'
  | 'lastEditedBy___node___avatar___size'
  | 'lastEditedBy___node___avatar___url'
  | 'lastEditedBy___node___avatar___width'
  | 'lastEditedBy___node___blockEditorPreviews___nodes'
  | 'lastEditedBy___node___capKey'
  | 'lastEditedBy___node___capabilities'
  | 'lastEditedBy___node___comments___nodes'
  | 'lastEditedBy___node___databaseId'
  | 'lastEditedBy___node___description'
  | 'lastEditedBy___node___email'
  | 'lastEditedBy___node___extraCapabilities'
  | 'lastEditedBy___node___firstName'
  | 'lastEditedBy___node___id'
  | 'lastEditedBy___node___lastName'
  | 'lastEditedBy___node___locale'
  | 'lastEditedBy___node___name'
  | 'lastEditedBy___node___nicename'
  | 'lastEditedBy___node___nickname'
  | 'lastEditedBy___node___pages___nodes'
  | 'lastEditedBy___node___posts___nodes'
  | 'lastEditedBy___node___registeredDate'
  | 'lastEditedBy___node___roles___nodes'
  | 'lastEditedBy___node___slug'
  | 'lastEditedBy___node___uri'
  | 'lastEditedBy___node___url'
  | 'lastEditedBy___node___username'
  | 'lastEditedBy___node___nodeType'
  | 'lastEditedBy___node___parent___id'
  | 'lastEditedBy___node___parent___children'
  | 'lastEditedBy___node___children'
  | 'lastEditedBy___node___children___id'
  | 'lastEditedBy___node___children___children'
  | 'lastEditedBy___node___internal___content'
  | 'lastEditedBy___node___internal___contentDigest'
  | 'lastEditedBy___node___internal___description'
  | 'lastEditedBy___node___internal___fieldOwners'
  | 'lastEditedBy___node___internal___ignoreType'
  | 'lastEditedBy___node___internal___mediaType'
  | 'lastEditedBy___node___internal___owner'
  | 'lastEditedBy___node___internal___type'
  | 'link'
  | 'modified'
  | 'modifiedGmt'
  | 'previewBlocks'
  | 'previewBlocks___dynamicContent'
  | 'previewBlocks___innerBlocks'
  | 'previewBlocks___innerBlocks___dynamicContent'
  | 'previewBlocks___innerBlocks___innerBlocks'
  | 'previewBlocks___innerBlocks___innerBlocks___dynamicContent'
  | 'previewBlocks___innerBlocks___innerBlocks___innerBlocks'
  | 'previewBlocks___innerBlocks___innerBlocks___isDynamic'
  | 'previewBlocks___innerBlocks___innerBlocks___name'
  | 'previewBlocks___innerBlocks___innerBlocks___order'
  | 'previewBlocks___innerBlocks___innerBlocks___originalContent'
  | 'previewBlocks___innerBlocks___innerBlocks___parentNodeDatabaseId'
  | 'previewBlocks___innerBlocks___innerBlocks___saveContent'
  | 'previewBlocks___innerBlocks___isDynamic'
  | 'previewBlocks___innerBlocks___name'
  | 'previewBlocks___innerBlocks___order'
  | 'previewBlocks___innerBlocks___originalContent'
  | 'previewBlocks___innerBlocks___parentNode___id'
  | 'previewBlocks___innerBlocks___parentNodeDatabaseId'
  | 'previewBlocks___innerBlocks___saveContent'
  | 'previewBlocks___isDynamic'
  | 'previewBlocks___name'
  | 'previewBlocks___order'
  | 'previewBlocks___originalContent'
  | 'previewBlocks___parentNode___id'
  | 'previewBlocks___parentNodeDatabaseId'
  | 'previewBlocks___saveContent'
  | 'previewBlocksJSON'
  | 'slug'
  | 'status'
  | 'template___templateName'
  | 'title'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpReusableBlockFilterInput = {
  blocks?: Maybe<WpBlockFilterListInput>;
  blocksJSON?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<WpReusableBlockToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  previewBlocks?: Maybe<WpBlockFilterListInput>;
  previewBlocksJSON?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpReusableBlockGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpReusableBlockEdge>;
  nodes: Array<WpReusableBlock>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpReusableBlockSortInput = {
  fields?: Maybe<Array<Maybe<WpReusableBlockFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the ReusableBlock type and the ContentType type */
export type WpReusableBlockToContentTypeConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpContentType>;
};

export type WpReusableBlockToContentTypeConnectionEdgeFilterInput = {
  node?: Maybe<WpContentTypeFilterInput>;
};

/** All of the registered settings */
export type WpSettings = {
  /** Atļaut lietotājiem pievienot komentārus jauniem rakstiem. */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
  /** Atļaut saites paziņojumus no citiem blogiem (atpakaļziņojumus un atpakaļsaites) jaunajiem rakstiem. */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
  /** Datuma formāts visām datumu virknēm. */
  generalSettingsDateFormat?: Maybe<Scalars['String']>;
  /** Vietnes sauklis (moto). */
  generalSettingsDescription?: Maybe<Scalars['String']>;
  /** Šī adrese tiek izmantota administrēšanas mērķiem, piem. jauna lietotāja apziņošanai. */
  generalSettingsEmail?: Maybe<Scalars['String']>;
  /** WordPress locales kods. */
  generalSettingsLanguage?: Maybe<Scalars['String']>;
  /** Nedēļas dienas numurs, kurā nedēļa sākas. */
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
  /** Laika formāts visiem laika rādījumiem. */
  generalSettingsTimeFormat?: Maybe<Scalars['String']>;
  /** Pilsēta jūsu laika joslā. */
  generalSettingsTimezone?: Maybe<Scalars['String']>;
  /** Vietnes nosaukums. */
  generalSettingsTitle?: Maybe<Scalars['String']>;
  /** Vietnes URL. */
  generalSettingsUrl?: Maybe<Scalars['String']>;
  /** Parādāmo bloga lapu skaits. */
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
  /** Ziņas noklusējuma kategorija. */
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
  /** Ziņas noklusējuma formāts */
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
  /** Pārvērst emocijas kā :-) un :-P par grafiskiem smaidiņiem. */
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
};

export type WpSettingsFilterInput = {
  discussionSettingsDefaultCommentStatus?: Maybe<StringQueryOperatorInput>;
  discussionSettingsDefaultPingStatus?: Maybe<StringQueryOperatorInput>;
  generalSettingsDateFormat?: Maybe<StringQueryOperatorInput>;
  generalSettingsDescription?: Maybe<StringQueryOperatorInput>;
  generalSettingsEmail?: Maybe<StringQueryOperatorInput>;
  generalSettingsLanguage?: Maybe<StringQueryOperatorInput>;
  generalSettingsStartOfWeek?: Maybe<IntQueryOperatorInput>;
  generalSettingsTimeFormat?: Maybe<StringQueryOperatorInput>;
  generalSettingsTimezone?: Maybe<StringQueryOperatorInput>;
  generalSettingsTitle?: Maybe<StringQueryOperatorInput>;
  generalSettingsUrl?: Maybe<StringQueryOperatorInput>;
  readingSettingsPostsPerPage?: Maybe<IntQueryOperatorInput>;
  writingSettingsDefaultCategory?: Maybe<IntQueryOperatorInput>;
  writingSettingsDefaultPostFormat?: Maybe<StringQueryOperatorInput>;
  writingSettingsUseSmilies?: Maybe<BooleanQueryOperatorInput>;
};

export type WpSortInput = {
  fields?: Maybe<Array<Maybe<WpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** The tag type */
export type WpTag = Node & WpNode & WpTermNode & WpDatabaseIdentifier & WpUniformResourceIdentifiable & WpMenuItemLinkable & {
  /** Connection between the tag type and the news type */
  allNews?: Maybe<WpTagToNewsConnection>;
  /** Connection between the tag type and the ContentNode type */
  contentNodes?: Maybe<WpTagToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the tag type and the post type */
  posts?: Maybe<WpTagToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the tag type and the Taxonomy type */
  taxonomy?: Maybe<WpTagToTaxonomyConnectionEdge>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpTagConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpTagEdge>;
  nodes: Array<WpTag>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpTagGroupConnection>;
};


export type WpTagConnectionDistinctArgs = {
  field: WpTagFieldsEnum;
};


export type WpTagConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpTagFieldsEnum;
};

export type WpTagEdge = {
  next?: Maybe<WpTag>;
  node: WpTag;
  previous?: Maybe<WpTag>;
};

export type WpTagFieldsEnum = 
  | 'allNews___nodes'
  | 'allNews___nodes___authorDatabaseId'
  | 'allNews___nodes___authorId'
  | 'allNews___nodes___blocks'
  | 'allNews___nodes___blocks___dynamicContent'
  | 'allNews___nodes___blocks___innerBlocks'
  | 'allNews___nodes___blocks___isDynamic'
  | 'allNews___nodes___blocks___name'
  | 'allNews___nodes___blocks___order'
  | 'allNews___nodes___blocks___originalContent'
  | 'allNews___nodes___blocks___parentNodeDatabaseId'
  | 'allNews___nodes___blocks___saveContent'
  | 'allNews___nodes___blocksJSON'
  | 'allNews___nodes___content'
  | 'allNews___nodes___databaseId'
  | 'allNews___nodes___date'
  | 'allNews___nodes___dateGmt'
  | 'allNews___nodes___desiredSlug'
  | 'allNews___nodes___enclosure'
  | 'allNews___nodes___guid'
  | 'allNews___nodes___id'
  | 'allNews___nodes___link'
  | 'allNews___nodes___modified'
  | 'allNews___nodes___modifiedGmt'
  | 'allNews___nodes___post_preview___excerpt'
  | 'allNews___nodes___post_preview___fieldGroupName'
  | 'allNews___nodes___previewBlocks'
  | 'allNews___nodes___previewBlocks___dynamicContent'
  | 'allNews___nodes___previewBlocks___innerBlocks'
  | 'allNews___nodes___previewBlocks___isDynamic'
  | 'allNews___nodes___previewBlocks___name'
  | 'allNews___nodes___previewBlocks___order'
  | 'allNews___nodes___previewBlocks___originalContent'
  | 'allNews___nodes___previewBlocks___parentNodeDatabaseId'
  | 'allNews___nodes___previewBlocks___saveContent'
  | 'allNews___nodes___previewBlocksJSON'
  | 'allNews___nodes___slug'
  | 'allNews___nodes___status'
  | 'allNews___nodes___tags___nodes'
  | 'allNews___nodes___template___templateName'
  | 'allNews___nodes___title'
  | 'allNews___nodes___uri'
  | 'allNews___nodes___nodeType'
  | 'allNews___nodes___parent___id'
  | 'allNews___nodes___parent___children'
  | 'allNews___nodes___children'
  | 'allNews___nodes___children___id'
  | 'allNews___nodes___children___children'
  | 'allNews___nodes___internal___content'
  | 'allNews___nodes___internal___contentDigest'
  | 'allNews___nodes___internal___description'
  | 'allNews___nodes___internal___fieldOwners'
  | 'allNews___nodes___internal___ignoreType'
  | 'allNews___nodes___internal___mediaType'
  | 'allNews___nodes___internal___owner'
  | 'allNews___nodes___internal___type'
  | 'contentNodes___nodes'
  | 'contentNodes___nodes___databaseId'
  | 'contentNodes___nodes___date'
  | 'contentNodes___nodes___dateGmt'
  | 'contentNodes___nodes___desiredSlug'
  | 'contentNodes___nodes___enclosure'
  | 'contentNodes___nodes___guid'
  | 'contentNodes___nodes___id'
  | 'contentNodes___nodes___link'
  | 'contentNodes___nodes___modified'
  | 'contentNodes___nodes___modifiedGmt'
  | 'contentNodes___nodes___slug'
  | 'contentNodes___nodes___status'
  | 'contentNodes___nodes___template___templateName'
  | 'contentNodes___nodes___uri'
  | 'contentNodes___nodes___nodeType'
  | 'count'
  | 'databaseId'
  | 'description'
  | 'id'
  | 'link'
  | 'name'
  | 'posts___nodes'
  | 'posts___nodes___authorDatabaseId'
  | 'posts___nodes___authorId'
  | 'posts___nodes___blocks'
  | 'posts___nodes___blocks___dynamicContent'
  | 'posts___nodes___blocks___innerBlocks'
  | 'posts___nodes___blocks___isDynamic'
  | 'posts___nodes___blocks___name'
  | 'posts___nodes___blocks___order'
  | 'posts___nodes___blocks___originalContent'
  | 'posts___nodes___blocks___parentNodeDatabaseId'
  | 'posts___nodes___blocks___saveContent'
  | 'posts___nodes___blocksJSON'
  | 'posts___nodes___categories___nodes'
  | 'posts___nodes___commentCount'
  | 'posts___nodes___commentStatus'
  | 'posts___nodes___comments___nodes'
  | 'posts___nodes___content'
  | 'posts___nodes___databaseId'
  | 'posts___nodes___date'
  | 'posts___nodes___dateGmt'
  | 'posts___nodes___desiredSlug'
  | 'posts___nodes___enclosure'
  | 'posts___nodes___excerpt'
  | 'posts___nodes___featuredImageDatabaseId'
  | 'posts___nodes___featuredImageId'
  | 'posts___nodes___guid'
  | 'posts___nodes___id'
  | 'posts___nodes___isRevision'
  | 'posts___nodes___isSticky'
  | 'posts___nodes___link'
  | 'posts___nodes___modified'
  | 'posts___nodes___modifiedGmt'
  | 'posts___nodes___pingStatus'
  | 'posts___nodes___pinged'
  | 'posts___nodes___postFormats___nodes'
  | 'posts___nodes___post_preview___excerpt'
  | 'posts___nodes___post_preview___fieldGroupName'
  | 'posts___nodes___previewBlocks'
  | 'posts___nodes___previewBlocks___dynamicContent'
  | 'posts___nodes___previewBlocks___innerBlocks'
  | 'posts___nodes___previewBlocks___isDynamic'
  | 'posts___nodes___previewBlocks___name'
  | 'posts___nodes___previewBlocks___order'
  | 'posts___nodes___previewBlocks___originalContent'
  | 'posts___nodes___previewBlocks___parentNodeDatabaseId'
  | 'posts___nodes___previewBlocks___saveContent'
  | 'posts___nodes___previewBlocksJSON'
  | 'posts___nodes___slug'
  | 'posts___nodes___status'
  | 'posts___nodes___tags___nodes'
  | 'posts___nodes___template___templateName'
  | 'posts___nodes___terms___nodes'
  | 'posts___nodes___title'
  | 'posts___nodes___toPing'
  | 'posts___nodes___uri'
  | 'posts___nodes___nodeType'
  | 'posts___nodes___parent___id'
  | 'posts___nodes___parent___children'
  | 'posts___nodes___children'
  | 'posts___nodes___children___id'
  | 'posts___nodes___children___children'
  | 'posts___nodes___internal___content'
  | 'posts___nodes___internal___contentDigest'
  | 'posts___nodes___internal___description'
  | 'posts___nodes___internal___fieldOwners'
  | 'posts___nodes___internal___ignoreType'
  | 'posts___nodes___internal___mediaType'
  | 'posts___nodes___internal___owner'
  | 'posts___nodes___internal___type'
  | 'slug'
  | 'taxonomy___node___archivePath'
  | 'taxonomy___node___connectedContentTypes___nodes'
  | 'taxonomy___node___description'
  | 'taxonomy___node___graphqlPluralName'
  | 'taxonomy___node___graphqlSingleName'
  | 'taxonomy___node___hierarchical'
  | 'taxonomy___node___id'
  | 'taxonomy___node___label'
  | 'taxonomy___node___name'
  | 'taxonomy___node___public'
  | 'taxonomy___node___restBase'
  | 'taxonomy___node___restControllerClass'
  | 'taxonomy___node___showCloud'
  | 'taxonomy___node___showInAdminColumn'
  | 'taxonomy___node___showInGraphql'
  | 'taxonomy___node___showInMenu'
  | 'taxonomy___node___showInNavMenus'
  | 'taxonomy___node___showInQuickEdit'
  | 'taxonomy___node___showInRest'
  | 'taxonomy___node___showUi'
  | 'taxonomy___node___nodeType'
  | 'taxonomy___node___parent___id'
  | 'taxonomy___node___parent___children'
  | 'taxonomy___node___children'
  | 'taxonomy___node___children___id'
  | 'taxonomy___node___children___children'
  | 'taxonomy___node___internal___content'
  | 'taxonomy___node___internal___contentDigest'
  | 'taxonomy___node___internal___description'
  | 'taxonomy___node___internal___fieldOwners'
  | 'taxonomy___node___internal___ignoreType'
  | 'taxonomy___node___internal___mediaType'
  | 'taxonomy___node___internal___owner'
  | 'taxonomy___node___internal___type'
  | 'termGroupId'
  | 'termTaxonomyId'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpTagFilterInput = {
  allNews?: Maybe<WpTagToNewsConnectionFilterInput>;
  contentNodes?: Maybe<WpTagToContentNodeConnectionFilterInput>;
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  posts?: Maybe<WpTagToPostConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<WpTagToTaxonomyConnectionEdgeFilterInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpTagFilterListInput = {
  elemMatch?: Maybe<WpTagFilterInput>;
};

export type WpTagGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpTagEdge>;
  nodes: Array<WpTag>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpTagSortInput = {
  fields?: Maybe<Array<Maybe<WpTagFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the tag type and the ContentNode type */
export type WpTagToContentNodeConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

export type WpTagToContentNodeConnectionFilterInput = {
  nodes?: Maybe<WpContentNodeFilterListInput>;
};

/** Connection between the tag type and the news type */
export type WpTagToNewsConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpNews>>>;
};

export type WpTagToNewsConnectionFilterInput = {
  nodes?: Maybe<WpNewsFilterListInput>;
};

/** Connection between the tag type and the post type */
export type WpTagToPostConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPost>>>;
};

export type WpTagToPostConnectionFilterInput = {
  nodes?: Maybe<WpPostFilterListInput>;
};

/** Connection between the tag type and the Taxonomy type */
export type WpTagToTaxonomyConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpTaxonomy>;
};

export type WpTagToTaxonomyConnectionEdgeFilterInput = {
  node?: Maybe<WpTaxonomyFilterInput>;
};

/** A taxonomy object */
export type WpTaxonomy = Node & WpNode & {
  /** The url path of the first page of the archive page for this content type. */
  archivePath?: Maybe<Scalars['String']>;
  /** List of Content Types associated with the Taxonomy */
  connectedContentTypes?: Maybe<WpTaxonomyToContentTypeConnection>;
  /** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
  description?: Maybe<Scalars['String']>;
  /** The plural name of the post type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /** The singular name of the post type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /** Whether the taxonomy is hierarchical */
  hierarchical?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  /** Name of the taxonomy shown in the menu. Usually plural. */
  label?: Maybe<Scalars['String']>;
  /** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
  name?: Maybe<Scalars['String']>;
  /** Whether the taxonomy is publicly queryable */
  public?: Maybe<Scalars['Boolean']>;
  /** Name of content type to diplay in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']>;
  /** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
  showCloud?: Maybe<Scalars['Boolean']>;
  /** Whether to display a column for the taxonomy on its post type listing screens. */
  showInAdminColumn?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the admin menu */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /** Whether the taxonomy is available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the quick/bulk edit panel. */
  showInQuickEdit?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
  showUi?: Maybe<Scalars['Boolean']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpTaxonomyConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpTaxonomyEdge>;
  nodes: Array<WpTaxonomy>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpTaxonomyGroupConnection>;
};


export type WpTaxonomyConnectionDistinctArgs = {
  field: WpTaxonomyFieldsEnum;
};


export type WpTaxonomyConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpTaxonomyFieldsEnum;
};

export type WpTaxonomyEdge = {
  next?: Maybe<WpTaxonomy>;
  node: WpTaxonomy;
  previous?: Maybe<WpTaxonomy>;
};

export type WpTaxonomyFieldsEnum = 
  | 'archivePath'
  | 'connectedContentTypes___nodes'
  | 'connectedContentTypes___nodes___archivePath'
  | 'connectedContentTypes___nodes___canExport'
  | 'connectedContentTypes___nodes___connectedTaxonomies___nodes'
  | 'connectedContentTypes___nodes___contentNodes___nodes'
  | 'connectedContentTypes___nodes___deleteWithUser'
  | 'connectedContentTypes___nodes___description'
  | 'connectedContentTypes___nodes___excludeFromSearch'
  | 'connectedContentTypes___nodes___graphqlPluralName'
  | 'connectedContentTypes___nodes___graphqlSingleName'
  | 'connectedContentTypes___nodes___hasArchive'
  | 'connectedContentTypes___nodes___hierarchical'
  | 'connectedContentTypes___nodes___id'
  | 'connectedContentTypes___nodes___isFrontPage'
  | 'connectedContentTypes___nodes___isPostsPage'
  | 'connectedContentTypes___nodes___label'
  | 'connectedContentTypes___nodes___labels___addNew'
  | 'connectedContentTypes___nodes___labels___addNewItem'
  | 'connectedContentTypes___nodes___labels___allItems'
  | 'connectedContentTypes___nodes___labels___archives'
  | 'connectedContentTypes___nodes___labels___attributes'
  | 'connectedContentTypes___nodes___labels___editItem'
  | 'connectedContentTypes___nodes___labels___featuredImage'
  | 'connectedContentTypes___nodes___labels___filterItemsList'
  | 'connectedContentTypes___nodes___labels___insertIntoItem'
  | 'connectedContentTypes___nodes___labels___itemsList'
  | 'connectedContentTypes___nodes___labels___itemsListNavigation'
  | 'connectedContentTypes___nodes___labels___menuName'
  | 'connectedContentTypes___nodes___labels___name'
  | 'connectedContentTypes___nodes___labels___newItem'
  | 'connectedContentTypes___nodes___labels___notFound'
  | 'connectedContentTypes___nodes___labels___notFoundInTrash'
  | 'connectedContentTypes___nodes___labels___parentItemColon'
  | 'connectedContentTypes___nodes___labels___removeFeaturedImage'
  | 'connectedContentTypes___nodes___labels___searchItems'
  | 'connectedContentTypes___nodes___labels___setFeaturedImage'
  | 'connectedContentTypes___nodes___labels___singularName'
  | 'connectedContentTypes___nodes___labels___uploadedToThisItem'
  | 'connectedContentTypes___nodes___labels___useFeaturedImage'
  | 'connectedContentTypes___nodes___labels___viewItem'
  | 'connectedContentTypes___nodes___labels___viewItems'
  | 'connectedContentTypes___nodes___menuIcon'
  | 'connectedContentTypes___nodes___menuPosition'
  | 'connectedContentTypes___nodes___name'
  | 'connectedContentTypes___nodes___public'
  | 'connectedContentTypes___nodes___publiclyQueryable'
  | 'connectedContentTypes___nodes___restBase'
  | 'connectedContentTypes___nodes___restControllerClass'
  | 'connectedContentTypes___nodes___showInAdminBar'
  | 'connectedContentTypes___nodes___showInGraphql'
  | 'connectedContentTypes___nodes___showInMenu'
  | 'connectedContentTypes___nodes___showInNavMenus'
  | 'connectedContentTypes___nodes___showInRest'
  | 'connectedContentTypes___nodes___showUi'
  | 'connectedContentTypes___nodes___uri'
  | 'connectedContentTypes___nodes___nodeType'
  | 'connectedContentTypes___nodes___parent___id'
  | 'connectedContentTypes___nodes___parent___children'
  | 'connectedContentTypes___nodes___children'
  | 'connectedContentTypes___nodes___children___id'
  | 'connectedContentTypes___nodes___children___children'
  | 'connectedContentTypes___nodes___internal___content'
  | 'connectedContentTypes___nodes___internal___contentDigest'
  | 'connectedContentTypes___nodes___internal___description'
  | 'connectedContentTypes___nodes___internal___fieldOwners'
  | 'connectedContentTypes___nodes___internal___ignoreType'
  | 'connectedContentTypes___nodes___internal___mediaType'
  | 'connectedContentTypes___nodes___internal___owner'
  | 'connectedContentTypes___nodes___internal___type'
  | 'description'
  | 'graphqlPluralName'
  | 'graphqlSingleName'
  | 'hierarchical'
  | 'id'
  | 'label'
  | 'name'
  | 'public'
  | 'restBase'
  | 'restControllerClass'
  | 'showCloud'
  | 'showInAdminColumn'
  | 'showInGraphql'
  | 'showInMenu'
  | 'showInNavMenus'
  | 'showInQuickEdit'
  | 'showInRest'
  | 'showUi'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpTaxonomyFilterInput = {
  archivePath?: Maybe<StringQueryOperatorInput>;
  connectedContentTypes?: Maybe<WpTaxonomyToContentTypeConnectionFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  graphqlPluralName?: Maybe<StringQueryOperatorInput>;
  graphqlSingleName?: Maybe<StringQueryOperatorInput>;
  hierarchical?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  public?: Maybe<BooleanQueryOperatorInput>;
  restBase?: Maybe<StringQueryOperatorInput>;
  restControllerClass?: Maybe<StringQueryOperatorInput>;
  showCloud?: Maybe<BooleanQueryOperatorInput>;
  showInAdminColumn?: Maybe<BooleanQueryOperatorInput>;
  showInGraphql?: Maybe<BooleanQueryOperatorInput>;
  showInMenu?: Maybe<BooleanQueryOperatorInput>;
  showInNavMenus?: Maybe<BooleanQueryOperatorInput>;
  showInQuickEdit?: Maybe<BooleanQueryOperatorInput>;
  showInRest?: Maybe<BooleanQueryOperatorInput>;
  showUi?: Maybe<BooleanQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpTaxonomyFilterListInput = {
  elemMatch?: Maybe<WpTaxonomyFilterInput>;
};

export type WpTaxonomyGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpTaxonomyEdge>;
  nodes: Array<WpTaxonomy>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpTaxonomySortInput = {
  fields?: Maybe<Array<Maybe<WpTaxonomyFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the Taxonomy type and the ContentType type */
export type WpTaxonomyToContentTypeConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentType>>>;
};

export type WpTaxonomyToContentTypeConnectionFilterInput = {
  nodes?: Maybe<WpContentTypeFilterListInput>;
};

export type WpTermNode = {
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Unique identifier for the term */
  id: Scalars['ID'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
};

export type WpTermNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpTermNodeEdge>;
  nodes: Array<WpTermNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpTermNodeGroupConnection>;
};


export type WpTermNodeConnectionDistinctArgs = {
  field: WpTermNodeFieldsEnum;
};


export type WpTermNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpTermNodeFieldsEnum;
};

export type WpTermNodeEdge = {
  next?: Maybe<WpTermNode>;
  node: WpTermNode;
  previous?: Maybe<WpTermNode>;
};

export type WpTermNodeFieldsEnum = 
  | 'count'
  | 'databaseId'
  | 'description'
  | 'id'
  | 'link'
  | 'name'
  | 'slug'
  | 'termGroupId'
  | 'termTaxonomyId'
  | 'uri'
  | 'nodeType';

export type WpTermNodeFilterInput = {
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type WpTermNodeFilterListInput = {
  elemMatch?: Maybe<WpTermNodeFilterInput>;
};

export type WpTermNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpTermNodeEdge>;
  nodes: Array<WpTermNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpTermNodeSortInput = {
  fields?: Maybe<Array<Maybe<WpTermNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpUniformResourceIdentifiable = {
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

/** A User object */
export type WpUser = Node & WpNode & WpUniformResourceIdentifiable & WpCommenter & WpDatabaseIdentifier & {
  /** Connection between the User type and the news type */
  allNews?: Maybe<WpUserToNewsConnection>;
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<WpAvatar>;
  /** Connection between the User type and the BlockEditorPreview type */
  blockEditorPreviews?: Maybe<WpUserToBlockEditorPreviewConnection>;
  /** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
  capKey?: Maybe<Scalars['String']>;
  /** A list of capabilities (permissions) granted to the user */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Connection between the User type and the Comment type */
  comments?: Maybe<WpUserToCommentConnection>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** Description of the user. */
  description?: Maybe<Scalars['String']>;
  /** Email address of the user. This is equivalent to the WP_User-&gt;user_email property. */
  email?: Maybe<Scalars['String']>;
  /**
   * A complete list of capabilities including capabilities inherited from a role.
   * This is equivalent to the array keys of WP_User-&gt;allcaps.
   */
  extraCapabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
  lastName?: Maybe<Scalars['String']>;
  /** The preferred language locale set for the user. Value derived from get_user_locale(). */
  locale?: Maybe<Scalars['String']>;
  /** Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property. */
  name?: Maybe<Scalars['String']>;
  /** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
  nicename?: Maybe<Scalars['String']>;
  /** Nickname of the user. */
  nickname?: Maybe<Scalars['String']>;
  /** Connection between the User type and the page type */
  pages?: Maybe<WpUserToPageConnection>;
  /** Connection between the User type and the post type */
  posts?: Maybe<WpUserToPostConnection>;
  /** The date the user registered or was created. The field follows a full ISO8601 date string format. */
  registeredDate?: Maybe<Scalars['String']>;
  /** Connection between the User type and the UserRole type */
  roles?: Maybe<WpUserToUserRoleConnection>;
  /** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
  slug?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  /** A website url that is associated with the user. */
  url?: Maybe<Scalars['String']>;
  /** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
  username?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpUserConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpUserEdge>;
  nodes: Array<WpUser>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpUserGroupConnection>;
};


export type WpUserConnectionDistinctArgs = {
  field: WpUserFieldsEnum;
};


export type WpUserConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpUserFieldsEnum;
};

export type WpUserEdge = {
  next?: Maybe<WpUser>;
  node: WpUser;
  previous?: Maybe<WpUser>;
};

export type WpUserFieldsEnum = 
  | 'allNews___nodes'
  | 'allNews___nodes___authorDatabaseId'
  | 'allNews___nodes___authorId'
  | 'allNews___nodes___blocks'
  | 'allNews___nodes___blocks___dynamicContent'
  | 'allNews___nodes___blocks___innerBlocks'
  | 'allNews___nodes___blocks___isDynamic'
  | 'allNews___nodes___blocks___name'
  | 'allNews___nodes___blocks___order'
  | 'allNews___nodes___blocks___originalContent'
  | 'allNews___nodes___blocks___parentNodeDatabaseId'
  | 'allNews___nodes___blocks___saveContent'
  | 'allNews___nodes___blocksJSON'
  | 'allNews___nodes___content'
  | 'allNews___nodes___databaseId'
  | 'allNews___nodes___date'
  | 'allNews___nodes___dateGmt'
  | 'allNews___nodes___desiredSlug'
  | 'allNews___nodes___enclosure'
  | 'allNews___nodes___guid'
  | 'allNews___nodes___id'
  | 'allNews___nodes___link'
  | 'allNews___nodes___modified'
  | 'allNews___nodes___modifiedGmt'
  | 'allNews___nodes___post_preview___excerpt'
  | 'allNews___nodes___post_preview___fieldGroupName'
  | 'allNews___nodes___previewBlocks'
  | 'allNews___nodes___previewBlocks___dynamicContent'
  | 'allNews___nodes___previewBlocks___innerBlocks'
  | 'allNews___nodes___previewBlocks___isDynamic'
  | 'allNews___nodes___previewBlocks___name'
  | 'allNews___nodes___previewBlocks___order'
  | 'allNews___nodes___previewBlocks___originalContent'
  | 'allNews___nodes___previewBlocks___parentNodeDatabaseId'
  | 'allNews___nodes___previewBlocks___saveContent'
  | 'allNews___nodes___previewBlocksJSON'
  | 'allNews___nodes___slug'
  | 'allNews___nodes___status'
  | 'allNews___nodes___tags___nodes'
  | 'allNews___nodes___template___templateName'
  | 'allNews___nodes___title'
  | 'allNews___nodes___uri'
  | 'allNews___nodes___nodeType'
  | 'allNews___nodes___parent___id'
  | 'allNews___nodes___parent___children'
  | 'allNews___nodes___children'
  | 'allNews___nodes___children___id'
  | 'allNews___nodes___children___children'
  | 'allNews___nodes___internal___content'
  | 'allNews___nodes___internal___contentDigest'
  | 'allNews___nodes___internal___description'
  | 'allNews___nodes___internal___fieldOwners'
  | 'allNews___nodes___internal___ignoreType'
  | 'allNews___nodes___internal___mediaType'
  | 'allNews___nodes___internal___owner'
  | 'allNews___nodes___internal___type'
  | 'avatar___default'
  | 'avatar___extraAttr'
  | 'avatar___forceDefault'
  | 'avatar___foundAvatar'
  | 'avatar___height'
  | 'avatar___rating'
  | 'avatar___scheme'
  | 'avatar___size'
  | 'avatar___url'
  | 'avatar___width'
  | 'blockEditorPreviews___nodes'
  | 'blockEditorPreviews___nodes___authorDatabaseId'
  | 'blockEditorPreviews___nodes___authorId'
  | 'blockEditorPreviews___nodes___blocks'
  | 'blockEditorPreviews___nodes___blocks___dynamicContent'
  | 'blockEditorPreviews___nodes___blocks___innerBlocks'
  | 'blockEditorPreviews___nodes___blocks___isDynamic'
  | 'blockEditorPreviews___nodes___blocks___name'
  | 'blockEditorPreviews___nodes___blocks___order'
  | 'blockEditorPreviews___nodes___blocks___originalContent'
  | 'blockEditorPreviews___nodes___blocks___parentNodeDatabaseId'
  | 'blockEditorPreviews___nodes___blocks___saveContent'
  | 'blockEditorPreviews___nodes___blocksJSON'
  | 'blockEditorPreviews___nodes___content'
  | 'blockEditorPreviews___nodes___databaseId'
  | 'blockEditorPreviews___nodes___date'
  | 'blockEditorPreviews___nodes___dateGmt'
  | 'blockEditorPreviews___nodes___desiredSlug'
  | 'blockEditorPreviews___nodes___enclosure'
  | 'blockEditorPreviews___nodes___guid'
  | 'blockEditorPreviews___nodes___id'
  | 'blockEditorPreviews___nodes___lastUpdateTime'
  | 'blockEditorPreviews___nodes___link'
  | 'blockEditorPreviews___nodes___modified'
  | 'blockEditorPreviews___nodes___modifiedGmt'
  | 'blockEditorPreviews___nodes___previewed___blocks'
  | 'blockEditorPreviews___nodes___previewed___blocksJSON'
  | 'blockEditorPreviews___nodes___previewed___previewBlocks'
  | 'blockEditorPreviews___nodes___previewed___previewBlocksJSON'
  | 'blockEditorPreviews___nodes___previewed___nodeType'
  | 'blockEditorPreviews___nodes___previewedDatabaseId'
  | 'blockEditorPreviews___nodes___previewedParentDatabaseId'
  | 'blockEditorPreviews___nodes___slug'
  | 'blockEditorPreviews___nodes___status'
  | 'blockEditorPreviews___nodes___template___templateName'
  | 'blockEditorPreviews___nodes___title'
  | 'blockEditorPreviews___nodes___uri'
  | 'blockEditorPreviews___nodes___nodeType'
  | 'blockEditorPreviews___nodes___parent___id'
  | 'blockEditorPreviews___nodes___parent___children'
  | 'blockEditorPreviews___nodes___children'
  | 'blockEditorPreviews___nodes___children___id'
  | 'blockEditorPreviews___nodes___children___children'
  | 'blockEditorPreviews___nodes___internal___content'
  | 'blockEditorPreviews___nodes___internal___contentDigest'
  | 'blockEditorPreviews___nodes___internal___description'
  | 'blockEditorPreviews___nodes___internal___fieldOwners'
  | 'blockEditorPreviews___nodes___internal___ignoreType'
  | 'blockEditorPreviews___nodes___internal___mediaType'
  | 'blockEditorPreviews___nodes___internal___owner'
  | 'blockEditorPreviews___nodes___internal___type'
  | 'capKey'
  | 'capabilities'
  | 'comments___nodes'
  | 'comments___nodes___agent'
  | 'comments___nodes___approved'
  | 'comments___nodes___authorIp'
  | 'comments___nodes___content'
  | 'comments___nodes___databaseId'
  | 'comments___nodes___date'
  | 'comments___nodes___dateGmt'
  | 'comments___nodes___id'
  | 'comments___nodes___karma'
  | 'comments___nodes___parentDatabaseId'
  | 'comments___nodes___parentId'
  | 'comments___nodes___replies___nodes'
  | 'comments___nodes___type'
  | 'comments___nodes___nodeType'
  | 'comments___nodes___parent___id'
  | 'comments___nodes___parent___children'
  | 'comments___nodes___children'
  | 'comments___nodes___children___id'
  | 'comments___nodes___children___children'
  | 'comments___nodes___internal___content'
  | 'comments___nodes___internal___contentDigest'
  | 'comments___nodes___internal___description'
  | 'comments___nodes___internal___fieldOwners'
  | 'comments___nodes___internal___ignoreType'
  | 'comments___nodes___internal___mediaType'
  | 'comments___nodes___internal___owner'
  | 'comments___nodes___internal___type'
  | 'databaseId'
  | 'description'
  | 'email'
  | 'extraCapabilities'
  | 'firstName'
  | 'id'
  | 'lastName'
  | 'locale'
  | 'name'
  | 'nicename'
  | 'nickname'
  | 'pages___nodes'
  | 'pages___nodes___ancestors___nodes'
  | 'pages___nodes___authorDatabaseId'
  | 'pages___nodes___authorId'
  | 'pages___nodes___blocks'
  | 'pages___nodes___blocks___dynamicContent'
  | 'pages___nodes___blocks___innerBlocks'
  | 'pages___nodes___blocks___isDynamic'
  | 'pages___nodes___blocks___name'
  | 'pages___nodes___blocks___order'
  | 'pages___nodes___blocks___originalContent'
  | 'pages___nodes___blocks___parentNodeDatabaseId'
  | 'pages___nodes___blocks___saveContent'
  | 'pages___nodes___blocksJSON'
  | 'pages___nodes___wpChildren___nodes'
  | 'pages___nodes___commentCount'
  | 'pages___nodes___commentStatus'
  | 'pages___nodes___comments___nodes'
  | 'pages___nodes___content'
  | 'pages___nodes___databaseId'
  | 'pages___nodes___date'
  | 'pages___nodes___dateGmt'
  | 'pages___nodes___desiredSlug'
  | 'pages___nodes___enclosure'
  | 'pages___nodes___featuredImageDatabaseId'
  | 'pages___nodes___featuredImageId'
  | 'pages___nodes___guid'
  | 'pages___nodes___id'
  | 'pages___nodes___isFrontPage'
  | 'pages___nodes___isPostsPage'
  | 'pages___nodes___isRevision'
  | 'pages___nodes___link'
  | 'pages___nodes___menuOrder'
  | 'pages___nodes___modified'
  | 'pages___nodes___modifiedGmt'
  | 'pages___nodes___parentDatabaseId'
  | 'pages___nodes___parentId'
  | 'pages___nodes___previewBlocks'
  | 'pages___nodes___previewBlocks___dynamicContent'
  | 'pages___nodes___previewBlocks___innerBlocks'
  | 'pages___nodes___previewBlocks___isDynamic'
  | 'pages___nodes___previewBlocks___name'
  | 'pages___nodes___previewBlocks___order'
  | 'pages___nodes___previewBlocks___originalContent'
  | 'pages___nodes___previewBlocks___parentNodeDatabaseId'
  | 'pages___nodes___previewBlocks___saveContent'
  | 'pages___nodes___previewBlocksJSON'
  | 'pages___nodes___slug'
  | 'pages___nodes___status'
  | 'pages___nodes___template___templateName'
  | 'pages___nodes___title'
  | 'pages___nodes___uri'
  | 'pages___nodes___nodeType'
  | 'pages___nodes___parent___id'
  | 'pages___nodes___parent___children'
  | 'pages___nodes___children'
  | 'pages___nodes___children___id'
  | 'pages___nodes___children___children'
  | 'pages___nodes___internal___content'
  | 'pages___nodes___internal___contentDigest'
  | 'pages___nodes___internal___description'
  | 'pages___nodes___internal___fieldOwners'
  | 'pages___nodes___internal___ignoreType'
  | 'pages___nodes___internal___mediaType'
  | 'pages___nodes___internal___owner'
  | 'pages___nodes___internal___type'
  | 'posts___nodes'
  | 'posts___nodes___authorDatabaseId'
  | 'posts___nodes___authorId'
  | 'posts___nodes___blocks'
  | 'posts___nodes___blocks___dynamicContent'
  | 'posts___nodes___blocks___innerBlocks'
  | 'posts___nodes___blocks___isDynamic'
  | 'posts___nodes___blocks___name'
  | 'posts___nodes___blocks___order'
  | 'posts___nodes___blocks___originalContent'
  | 'posts___nodes___blocks___parentNodeDatabaseId'
  | 'posts___nodes___blocks___saveContent'
  | 'posts___nodes___blocksJSON'
  | 'posts___nodes___categories___nodes'
  | 'posts___nodes___commentCount'
  | 'posts___nodes___commentStatus'
  | 'posts___nodes___comments___nodes'
  | 'posts___nodes___content'
  | 'posts___nodes___databaseId'
  | 'posts___nodes___date'
  | 'posts___nodes___dateGmt'
  | 'posts___nodes___desiredSlug'
  | 'posts___nodes___enclosure'
  | 'posts___nodes___excerpt'
  | 'posts___nodes___featuredImageDatabaseId'
  | 'posts___nodes___featuredImageId'
  | 'posts___nodes___guid'
  | 'posts___nodes___id'
  | 'posts___nodes___isRevision'
  | 'posts___nodes___isSticky'
  | 'posts___nodes___link'
  | 'posts___nodes___modified'
  | 'posts___nodes___modifiedGmt'
  | 'posts___nodes___pingStatus'
  | 'posts___nodes___pinged'
  | 'posts___nodes___postFormats___nodes'
  | 'posts___nodes___post_preview___excerpt'
  | 'posts___nodes___post_preview___fieldGroupName'
  | 'posts___nodes___previewBlocks'
  | 'posts___nodes___previewBlocks___dynamicContent'
  | 'posts___nodes___previewBlocks___innerBlocks'
  | 'posts___nodes___previewBlocks___isDynamic'
  | 'posts___nodes___previewBlocks___name'
  | 'posts___nodes___previewBlocks___order'
  | 'posts___nodes___previewBlocks___originalContent'
  | 'posts___nodes___previewBlocks___parentNodeDatabaseId'
  | 'posts___nodes___previewBlocks___saveContent'
  | 'posts___nodes___previewBlocksJSON'
  | 'posts___nodes___slug'
  | 'posts___nodes___status'
  | 'posts___nodes___tags___nodes'
  | 'posts___nodes___template___templateName'
  | 'posts___nodes___terms___nodes'
  | 'posts___nodes___title'
  | 'posts___nodes___toPing'
  | 'posts___nodes___uri'
  | 'posts___nodes___nodeType'
  | 'posts___nodes___parent___id'
  | 'posts___nodes___parent___children'
  | 'posts___nodes___children'
  | 'posts___nodes___children___id'
  | 'posts___nodes___children___children'
  | 'posts___nodes___internal___content'
  | 'posts___nodes___internal___contentDigest'
  | 'posts___nodes___internal___description'
  | 'posts___nodes___internal___fieldOwners'
  | 'posts___nodes___internal___ignoreType'
  | 'posts___nodes___internal___mediaType'
  | 'posts___nodes___internal___owner'
  | 'posts___nodes___internal___type'
  | 'registeredDate'
  | 'roles___nodes'
  | 'roles___nodes___capabilities'
  | 'roles___nodes___displayName'
  | 'roles___nodes___id'
  | 'roles___nodes___name'
  | 'roles___nodes___nodeType'
  | 'roles___nodes___parent___id'
  | 'roles___nodes___parent___children'
  | 'roles___nodes___children'
  | 'roles___nodes___children___id'
  | 'roles___nodes___children___children'
  | 'roles___nodes___internal___content'
  | 'roles___nodes___internal___contentDigest'
  | 'roles___nodes___internal___description'
  | 'roles___nodes___internal___fieldOwners'
  | 'roles___nodes___internal___ignoreType'
  | 'roles___nodes___internal___mediaType'
  | 'roles___nodes___internal___owner'
  | 'roles___nodes___internal___type'
  | 'slug'
  | 'uri'
  | 'url'
  | 'username'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpUserFilterInput = {
  allNews?: Maybe<WpUserToNewsConnectionFilterInput>;
  avatar?: Maybe<WpAvatarFilterInput>;
  blockEditorPreviews?: Maybe<WpUserToBlockEditorPreviewConnectionFilterInput>;
  capKey?: Maybe<StringQueryOperatorInput>;
  capabilities?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpUserToCommentConnectionFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  extraCapabilities?: Maybe<StringQueryOperatorInput>;
  firstName?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastName?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nicename?: Maybe<StringQueryOperatorInput>;
  nickname?: Maybe<StringQueryOperatorInput>;
  pages?: Maybe<WpUserToPageConnectionFilterInput>;
  posts?: Maybe<WpUserToPostConnectionFilterInput>;
  registeredDate?: Maybe<StringQueryOperatorInput>;
  roles?: Maybe<WpUserToUserRoleConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpUserGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpUserEdge>;
  nodes: Array<WpUser>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

/** A user role object */
export type WpUserRole = Node & WpNode & {
  /** The capabilities that belong to this role */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The display name of the role */
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The registered name of the role */
  name?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpUserRoleConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpUserRoleEdge>;
  nodes: Array<WpUserRole>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpUserRoleGroupConnection>;
};


export type WpUserRoleConnectionDistinctArgs = {
  field: WpUserRoleFieldsEnum;
};


export type WpUserRoleConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpUserRoleFieldsEnum;
};

export type WpUserRoleEdge = {
  next?: Maybe<WpUserRole>;
  node: WpUserRole;
  previous?: Maybe<WpUserRole>;
};

export type WpUserRoleFieldsEnum = 
  | 'capabilities'
  | 'displayName'
  | 'id'
  | 'name'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpUserRoleFilterInput = {
  capabilities?: Maybe<StringQueryOperatorInput>;
  displayName?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpUserRoleFilterListInput = {
  elemMatch?: Maybe<WpUserRoleFilterInput>;
};

export type WpUserRoleGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpUserRoleEdge>;
  nodes: Array<WpUserRole>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpUserRoleSortInput = {
  fields?: Maybe<Array<Maybe<WpUserRoleFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpUserSortInput = {
  fields?: Maybe<Array<Maybe<WpUserFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the User type and the BlockEditorPreview type */
export type WpUserToBlockEditorPreviewConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpBlockEditorPreview>>>;
};

export type WpUserToBlockEditorPreviewConnectionFilterInput = {
  nodes?: Maybe<WpBlockEditorPreviewFilterListInput>;
};

/** Connection between the User type and the Comment type */
export type WpUserToCommentConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

export type WpUserToCommentConnectionFilterInput = {
  nodes?: Maybe<WpCommentFilterListInput>;
};

/** Connection between the User type and the news type */
export type WpUserToNewsConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpNews>>>;
};

export type WpUserToNewsConnectionFilterInput = {
  nodes?: Maybe<WpNewsFilterListInput>;
};

/** Connection between the User type and the page type */
export type WpUserToPageConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPage>>>;
};

export type WpUserToPageConnectionFilterInput = {
  nodes?: Maybe<WpPageFilterListInput>;
};

/** Connection between the User type and the post type */
export type WpUserToPostConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPost>>>;
};

export type WpUserToPostConnectionFilterInput = {
  nodes?: Maybe<WpPostFilterListInput>;
};

/** Connection between the User type and the UserRole type */
export type WpUserToUserRoleConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpUserRole>>>;
};

export type WpUserToUserRoleConnectionFilterInput = {
  nodes?: Maybe<WpUserRoleFilterListInput>;
};

/** Information needed by gatsby-source-wordpress. */
export type WpWpGatsby = {
  /** Returns wether or not pretty permalinks are enabled. */
  arePrettyPermalinksEnabled?: Maybe<Scalars['Boolean']>;
};

export type WpWpGatsbyFilterInput = {
  arePrettyPermalinksEnabled?: Maybe<BooleanQueryOperatorInput>;
};

/** The writing setting type */
export type WpWritingSettings = {
  /** Ziņas noklusējuma kategorija. */
  defaultCategory?: Maybe<Scalars['Int']>;
  /** Ziņas noklusējuma formāts */
  defaultPostFormat?: Maybe<Scalars['String']>;
  /** Pārvērst emocijas kā :-) un :-P par grafiskiem smaidiņiem. */
  useSmilies?: Maybe<Scalars['Boolean']>;
};

export type WpWritingSettingsFilterInput = {
  defaultCategory?: Maybe<IntQueryOperatorInput>;
  defaultPostFormat?: Maybe<StringQueryOperatorInput>;
  useSmilies?: Maybe<BooleanQueryOperatorInput>;
};

export type EventsQueryVariables = Exact<{ [key: string]: never; }>;


export type EventsQuery = { allWpEvent: { nodes: Array<(
      Pick<WpEvent, 'title'>
      & { event?: Maybe<(
        Pick<WpEvent_Event, 'date'>
        & { link?: Maybe<Pick<WpAcf_Link, 'url' | 'title' | 'target'>> }
      )> }
    )> } };

export type LatestNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestNewsQuery = { allWpNews: { edges: Array<{ node: PostListFieldsFragment }> } };

export type MenuDataQueryVariables = Exact<{ [key: string]: never; }>;


export type MenuDataQuery = { allWpMenuItem: { nodes: Array<Pick<WpMenuItem, 'label' | 'url'>> } };

export type PostListFieldsFragment = (
  Pick<WpNews, 'id' | 'title' | 'date' | 'slug'>
  & { post_preview?: Maybe<(
    Pick<WpNews_PostPreview, 'excerpt'>
    & { previewImage?: Maybe<Pick<WpMediaItem, 'sourceUrl' | 'altText'>> }
  )> }
);

export type RecommendedPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type RecommendedPostsQuery = { allWpNews: { edges: Array<{ node: (
        Pick<WpNews, 'title' | 'slug' | 'date'>
        & { post_preview?: Maybe<{ previewImage?: Maybe<Pick<WpMediaItem, 'sourceUrl' | 'altText'>> }> }
      ) }> } };

export type HomePageByIdQueryVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;


export type HomePageByIdQuery = { wpPage?: Maybe<(
    Pick<WpPage, 'title' | 'content'>
    & { blocks?: Maybe<Array<Pick<WpCoreArchivesBlock, 'name'> | Pick<WpCoreAudioBlock, 'name'> | Pick<WpCoreBlock, 'name'> | Pick<WpCoreButtonBlock, 'name'> | Pick<WpCoreButtonsBlock, 'name'> | Pick<WpCoreCalendarBlock, 'name'> | Pick<WpCoreCategoriesBlock, 'name'> | Pick<WpCoreCodeBlock, 'name'> | Pick<WpCoreColumnBlock, 'name'> | Pick<WpCoreColumnsBlock, 'name'> | Pick<WpCoreCoverBlock, 'name'> | Pick<WpCoreEmbedAmazonKindleBlock, 'name'> | Pick<WpCoreEmbedAnimotoBlock, 'name'> | Pick<WpCoreEmbedBlock, 'name'> | Pick<WpCoreEmbedCloudupBlock, 'name'> | Pick<WpCoreEmbedCollegehumorBlock, 'name'> | Pick<WpCoreEmbedCrowdsignalBlock, 'name'> | Pick<WpCoreEmbedDailymotionBlock, 'name'> | Pick<WpCoreEmbedFacebookBlock, 'name'> | Pick<WpCoreEmbedFlickrBlock, 'name'> | Pick<WpCoreEmbedImgurBlock, 'name'> | Pick<WpCoreEmbedInstagramBlock, 'name'> | Pick<WpCoreEmbedIssuuBlock, 'name'> | Pick<WpCoreEmbedKickstarterBlock, 'name'> | Pick<WpCoreEmbedMeetupComBlock, 'name'> | Pick<WpCoreEmbedMixcloudBlock, 'name'> | Pick<WpCoreEmbedPolldaddyBlock, 'name'> | Pick<WpCoreEmbedRedditBlock, 'name'> | Pick<WpCoreEmbedReverbnationBlock, 'name'> | Pick<WpCoreEmbedScreencastBlock, 'name'> | Pick<WpCoreEmbedScribdBlock, 'name'> | Pick<WpCoreEmbedSlideshareBlock, 'name'> | Pick<WpCoreEmbedSmugmugBlock, 'name'> | Pick<WpCoreEmbedSoundcloudBlock, 'name'> | Pick<WpCoreEmbedSpeakerBlock, 'name'> | Pick<WpCoreEmbedSpeakerDeckBlock, 'name'> | Pick<WpCoreEmbedSpotifyBlock, 'name'> | Pick<WpCoreEmbedTedBlock, 'name'> | Pick<WpCoreEmbedTiktokBlock, 'name'> | Pick<WpCoreEmbedTumblrBlock, 'name'> | Pick<WpCoreEmbedTwitterBlock, 'name'> | Pick<WpCoreEmbedVideopressBlock, 'name'> | Pick<WpCoreEmbedVimeoBlock, 'name'> | Pick<WpCoreEmbedWordpressBlock, 'name'> | Pick<WpCoreEmbedWordpressTvBlock, 'name'> | Pick<WpCoreEmbedYoutubeBlock, 'name'> | Pick<WpCoreFileBlock, 'name'> | Pick<WpCoreFreeformBlock, 'name'> | Pick<WpCoreGalleryBlock, 'name'> | Pick<WpCoreGroupBlock, 'name'> | Pick<WpCoreHeadingBlock, 'name'> | Pick<WpCoreHtmlBlock, 'name'> | Pick<WpCoreImageBlock, 'name'> | Pick<WpCoreLatestCommentsBlock, 'name'> | Pick<WpCoreLatestPostsBlock, 'name'> | Pick<WpCoreListBlock, 'name'> | Pick<WpCoreMediaTextBlock, 'name'> | Pick<WpCoreMissingBlock, 'name'> | Pick<WpCoreMoreBlock, 'name'> | Pick<WpCoreNextpageBlock, 'name'> | Pick<WpCoreParagraphBlock, 'name'> | Pick<WpCorePreformattedBlock, 'name'> | Pick<WpCorePullquoteBlock, 'name'> | Pick<WpCoreQuoteBlock, 'name'> | Pick<WpCoreRssBlock, 'name'> | Pick<WpCoreSearchBlock, 'name'> | Pick<WpCoreSeparatorBlock, 'name'> | Pick<WpCoreShortcodeBlock, 'name'> | Pick<WpCoreSocialLinkBlock, 'name'> | Pick<WpCoreSocialLinksBlock, 'name'> | Pick<WpCoreSpacerBlock, 'name'> | Pick<WpCoreSubheadBlock, 'name'> | Pick<WpCoreTableBlock, 'name'> | Pick<WpCoreTagCloudBlock, 'name'> | Pick<WpCoreTextColumnsBlock, 'name'> | Pick<WpCoreVerseBlock, 'name'> | Pick<WpCoreVideoBlock, 'name'> | Pick<WpLazyblockCoreFreeBlock, 'name'> | Pick<WpLazyblockHeaderBlock, 'name'> | (
      Pick<WpLazyblockHeroBlock, 'name'>
      & { attributes?: Maybe<Pick<WpLazyblockHeroBlockAttributes, 'leftButtonLink' | 'leftButtonText' | 'rightButtonLink' | 'rightButtonText' | 'text' | 'backgroundImage'>> }
    ) | (
      Pick<WpLazyblockInfocardBlock, 'dynamicContent' | 'originalContent' | 'name'>
      & { attributes?: Maybe<Pick<WpLazyblockInfocardBlockAttributes, 'text' | 'title' | 'url' | 'image'>> }
    ) | Pick<WpLazyblockNewsPreviewBlock, 'name'>>> }
  )> };

export type NewsPageQueryVariables = Exact<{
  limit: Scalars['Int'];
  skip: Scalars['Int'];
}>;


export type NewsPageQuery = { allWpNews: { edges: Array<{ node: PostListFieldsFragment }> } };

export type PageByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PageByIdQuery = { wpPage?: Maybe<Pick<WpPage, 'title' | 'content'>> };

export type BlogPostByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type BlogPostByIdQuery = { wpNews?: Maybe<(
    Pick<WpNews, 'id' | 'title' | 'slug' | 'content' | 'date'>
    & { tags?: Maybe<{ nodes?: Maybe<Array<Maybe<Pick<WpTag, 'name' | 'slug'>>>> }> }
  )> };

export type TagPageQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type TagPageQuery = { allWpNews: (
    Pick<WpNewsConnection, 'totalCount'>
    & { edges: Array<{ node: PostListFieldsFragment }> }
  ) };
