import { MDXProvider, MDXProviderProps } from "@mdx-js/react";
import React from "react";
import { H1 } from "./H1";

type Props = MDXProviderProps & {}

export const StyledMDXProvider = ({ children, components, ...rest }: Props) => {
    return <MDXProvider components={{
        h1: props => <H1 {...props} />,
        p: (props) => <p {...props} style={{color: "blue"}} />,
        ...components,
    }} {...rest}>{children}</MDXProvider>
}
