import clsx from "clsx";

export type SwitchProps = {
    label?: string
    small?: boolean
    className?: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
};

export function Switch(props: SwitchProps) {
    return (
        <button>
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" onChange={() => { }} />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
        </button>
    );
}

