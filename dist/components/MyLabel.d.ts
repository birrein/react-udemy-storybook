/// <reference types="react" />
import './mylabel.css';
export interface Props {
    /**
     * The message to display.
     */
    label: string;
    /**
     * The size of the label.
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Convert the label to uppercase.
     */
    allCaps?: boolean;
    /**
     * The color of the label.
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Font color
     */
    fontColor?: string;
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor, }: Props) => JSX.Element;
