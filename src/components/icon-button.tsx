import classNames from 'classnames'
import { forwardRef } from 'react'

type Props = {}
const IconButton = forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<React.ComponentPropsWithRef<'button'> & Props>
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={classNames(
        'rounded-full p-2 hover:bg-pink-50 text-pink-600',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
})

IconButton.displayName = 'IconButton'

export default IconButton
