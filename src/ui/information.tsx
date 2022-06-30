import classNames from 'classnames'
import { forwardRef } from 'react'

const InformationLabel = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<React.ComponentPropsWithRef<'div'>>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames('grid grid-cols-[1fr_2fr] gap-x-4', className)}
      {...props}
    >
      {children}
    </div>
  )
})

InformationLabel.displayName = 'InformationLabel'

export default InformationLabel
