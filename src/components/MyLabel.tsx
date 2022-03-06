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
}

export const MyLabel = ({
  allCaps = false,
  color = 'primary',
  label = 'No Label',
  size = 'normal',
  fontColor,
}: Props) => {
  return (
    <span
      className={`${size} text-${color} label`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
