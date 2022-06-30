import classNames from 'classnames'
import { forwardRef } from 'react'

type Props = {
  colorVariant: 'existing' | 'construction' | 'proposed'
}
const Chip = forwardRef<
  HTMLSpanElement,
  React.PropsWithChildren<React.ComponentPropsWithRef<'span'> & Props>
>(({ children, className, colorVariant, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={classNames('rounded-xl px-4 py-1.5 font-bold ', className, {
        'bg-teal-100 text-teal-500': colorVariant === 'existing',
        'bg-indigo-100 text-indigo-500': colorVariant === 'construction',
        'bg-orange-100 text-orange-500': colorVariant === 'proposed',
      })}
      {...props}
    >
      {children}
    </span>
  )
})

Chip.displayName = 'Chip'

export default Chip
