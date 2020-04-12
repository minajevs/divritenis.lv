import React, { createContext, useState, useContext, useCallback, useEffect } from 'react'

export type BreadcrumbsItem = {
    title: string
    path: string
}

type ContextType = {
    items: BreadcrumbsItem[]
    setBreadcrumbs: (items: BreadcrumbsItem[]) => void
}

export const context = createContext<ContextType>({
    items: [],
    setBreadcrumbs: console.log
})

export const BreadcrumbsProvider: React.FC = props => {
    // Dirty hack which is called "Two pass rendering"
    // Read more about it here: https://github.com/gatsbyjs/gatsby/issues/17914
    const [twoPassRender, setTwoPassRender] = useState(0)
    useEffect(() => setTwoPassRender(1))

    const [state, setState] = useState<BreadcrumbsItem[]>([])

    const setBreadcrumbs = (items: BreadcrumbsItem[]) => {
        console.log(123)
        setState(items)
    }

    return (
        <context.Provider value={{
            items: state,
            setBreadcrumbs: setBreadcrumbs
        }} key={twoPassRender}>
            {props.children}
        </context.Provider>
    )
}

// Maps all page codes to corresponding page titles
const pages = {
    '/': 'Sākumlapa'
}

export const useBreadcrumbs = (...args: (keyof typeof pages)[]) => {
    const { setBreadcrumbs } = useContext(context)

    const breadcrumbs = args.map<BreadcrumbsItem>(x => ({
        path: x,
        title: pages[x]
    }))

    console.log(breadcrumbs)

    setBreadcrumbs(breadcrumbs)
}