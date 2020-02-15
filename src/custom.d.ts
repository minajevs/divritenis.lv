// necessary to import .svg files as react components
declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

// workaround to enable ts in gatsby-node; gatsby-awesome-pagination has no types
declare module 'gatsby-awesome-pagination';