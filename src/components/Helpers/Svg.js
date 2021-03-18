export function UnpinSvg() {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            style={{
                transform: "scale(1.5)",
                backgroundColor: "transparent",
            }}
        >
            <path
                d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z"
                fill="currentColor"
            ></path>
        </svg>
    );
}

export function PinSvg() {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            style={{
                transform: "scale(1.5)",
                backgroundColor: "transparent",
            }}
        >
            <path
                d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2m-7.2 2l1.2-1.2V4h4v8.8l1.2 1.2H8.8z"
                fill="currentColor"
            ></path>
        </svg>
    );
}

export function ColourPalletSvg() {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="colour-pallet"
        >
            <path
                d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5c0 .12.05.23.13.33c.41.47.64 1.06.64 1.67A2.5 2.5 0 0 1 12 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 0 0-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 0 1 2.5-2.5H16c2.21 0 4-1.79 4-4c0-3.86-3.59-7-8-7z"
                fill="currentColor"
            ></path>
            <circle cx="6.5" cy="11.5" r="1.5" fill="currentColor"></circle>
            <circle cx="9.5" cy="7.5" r="1.5" fill="currentColor"></circle>
            <circle cx="14.5" cy="7.5" r="1.5" fill="currentColor"></circle>
            <circle cx="17.5" cy="11.5" r="1.5" fill="currentColor"></circle>
        </svg>
    );
}

export function DeleteSvg() {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" className="bin">
            <path
                d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2z"
                fill="rgb(204, 68, 68)"
            ></path>
        </svg>
    );
}

export function CheckSvg() {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="edit-label-done-icon"
        >
            <path
                d="M18 6.7l-8.48 8.48l-3.54-3.54a.996.996 0 1 0-1.41 1.41l4.24 4.24c.39.39 1.02.39 1.41 0l9.18-9.18a.999.999 0 0 0-.01-1.42c-.37-.38-1-.38-1.39.01z"
                fill="currentColor"
            ></path>
        </svg>
    );
}

export function LabelSvg() {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" className="tag-icons">
            <path
                d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"
                fill="currentColor"
            ></path>
        </svg>
    );
}

export function HomeSvg() {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="tag-icons home-icon"
        >
            <path
                d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM6 19h12V9.157l-6-5.454l-6 5.454V19z"
                fill="currentColor"
            ></path>
        </svg>
    );
}

export function EditSvg() {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="tag-icons edit-icon"
        >
            <path
                d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 5.63l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41z"
                fill="currentColor"
            ></path>
        </svg>
    );
}

export function MenuSvg() {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24">
            <path
                d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
                fill="currentColor"
            ></path>
        </svg>
    );
}
