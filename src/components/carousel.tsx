import { forwardRef, useEffect, useRef, useState } from 'react'
import Flicking from '@egjs/react-flicking'
import '@egjs/react-flicking/dist/flicking.css'
import { NextICon, PrevIcon } from 'ui/icons'

const Carousel: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const ref = useRef<any>()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // run this component only the client side
    setMounted(true)
  }, [])

  // run this component only the client side
  if (!mounted) return null
  return (
    <div className="relative -mx-6 -my-6">
      <div className="absolute top-0 -left-2 w-6 bg-white z-50 flex items-center   bottom-0 ">
        <button
          onClick={async () => {
            // catch animation errors when user clicks next and the animation is still not finished
            try {
              await ref.current?.prev()
            } catch (error) {}
          }}
          className="z-50"
        >
          <PrevIcon />
        </button>
      </div>
      <div className="absolute top-0 -right-2 w-6 bg-white z-50 flex items-center justify-end  bottom-0 ">
        <button
          onClick={async () => {
            // catch animation errors when user clicks next and the animation is still not finished
            try {
              await ref.current?.next()
            } catch (error) {}
          }}
          className="z-50"
        >
          <NextICon />
        </button>
      </div>

      <Flicking
        useResizeObserver
        panelsPerView={3}
        ref={ref}
        align="prev"
        bound
        circular
      >
        {children}
      </Flicking>
    </div>
  )
}

const CarouselItem = forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>(
  ({ children }, ref) => {
    return (
      <div className="pr-6 pl-6 py-6" ref={ref}>
        {children}
      </div>
    )
  }
)

CarouselItem.displayName = 'CarouselItem'

export { CarouselItem }
export default Carousel
