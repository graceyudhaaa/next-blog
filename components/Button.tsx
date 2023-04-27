import clsx from "clsx";


type ButtonProps = {
  label?: string
  variant?: string
  small?: boolean
  className?: string
  icon?: JSX.Element
  iconPos?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
};

export function Button(props: ButtonProps) {
  return (
    <button className={clsx({ 'text-xs': props.small },
      "py-2 px-2 font-medium transition duration-400 lowercase", { "bg-chambray-700 text-chambray-50 hover:bg-chambray-600 dark:bg-chambray-900 dark:hover:bg-chambray-800": props.variant == undefined || props.variant == 'primary' }, { "bg-chambray-100 text-chambray-800 hover:bg-chambray-200 dark:bg-chambray-900 dark:hover:bg-chambray-800 dark:text-chambray-50": props.variant == 'secondary' },
      props.className)
    }
      onClick={props.onClick}>
      <div className={clsx("flex items-center gap-1", { 'flex-row': props.icon || props.iconPos == 'right' }, { 'flex-row-reverse': props.icon && props.iconPos == 'left' })}>
        {props.label}
        {props.icon}
      </div>
    </button>
  );
}

