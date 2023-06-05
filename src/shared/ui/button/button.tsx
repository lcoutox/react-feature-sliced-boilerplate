import { ReactNode } from "react"
import cn from 'classnames'
import styles from './button.module.css'

type ButtonTheme = 'primary'

export type Props = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    children: ReactNode
    theme?: ButtonTheme
    size?: 'sm' | 'md'
    type?: 'submit'
    isLoading?: boolean
    disabled?: boolean
}


export default function Button({
    onClick,
    children,
    size = 'md',
    disabled,
}: Props) {
    return (
        <button
            className={cn(
                styles.button,
                size === 'sm' && styles.sm
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
