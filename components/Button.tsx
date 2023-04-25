import clsx from "clsx";

type ButtonProps = {
  label?: string
  small?: boolean
  className?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
};

export function Button(props: ButtonProps) {
  return (
    <button className={clsx({'text-xs': props.small}, "py-2 px-2 font-medium transition duration-400 lowercase bg-chambray-700 text-chambray-50 hover:bg-chambray-600 dark:bg-chambray-900 dark:hover:bg-chambray-800", props.className)} onClick={props.onClick}>
      {props.label}
    </button>
  );
}

