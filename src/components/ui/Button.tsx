import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: React.ReactNode;
}

export default function Button(props: Props) {
    return (
        <button
            {...props}
            className={`px-8 py-4 relative bg-theme-secondary/30 text-center m-auto flex justify-center text-xl cursor-pointer rounded-xl transition-all hover:bg-theme-secondary/40 disabled:pointer-events-none disabled:bg-theme-secondary/15 ${props.className}`}
        >
            {props.children}
        </button>
    );
}
