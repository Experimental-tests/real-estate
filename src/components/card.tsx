import classNames from 'classnames'
import { forwardRef } from 'react'

type Props = {
  direction?: 'horizontal' | 'vertical'
}
const Card = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<React.ComponentPropsWithRef<'div'> & Props>
>(({ children, className, direction = 'vertical', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames(
        'flex min-w-[200px] shadow-card bg-white rounded-lg px-5 py-4',
        {
          'space-x-4': direction === 'horizontal',
          'flex-col space-y-1.5': direction === 'vertical',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})

Card.displayName = 'Card'

export default Card
