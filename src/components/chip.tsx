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
      className={classNames(
        'capitalize rounded-xl px-4 py-1.5 font-bold ',
        className,
        {
          'bg-status-existing-light text-status-existing':
            colorVariant === 'existing',
          'bg-status-construction-light text-status-construction':
            colorVariant === 'construction',
          'bg-status-proposed-light text-status-proposed':
            colorVariant === 'proposed',
        }
      )}
      {...props}
    >
      {children}
    </span>
  )
})

Chip.displayName = 'Chip'

export default Chip
