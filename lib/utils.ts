declare module 'tailwind-merge' {
    function twMerge(...classNames: (string | false | null | undefined)[]): string;
    export { twMerge };
    export default twMerge;
}