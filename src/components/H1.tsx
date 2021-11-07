import React, { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<'h1'> & {}

export const H1 = ({ children, ...rest }: Props) => {
    return <h1 style={{fontSize: 36, color: 'red'}} {...rest}>{children}</h1>
}
