import { forwardRef, useEffect, useRef, useState } from 'react'
import Flicking from '@egjs/react-flicking'
import '@egjs/react-flicking/dist/flicking.css'
import { NextICon, PrevIcon } from 'ui/icons'

const Carousel: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef<any>()

  useEffect(() => {
    const listener = (props: any) => {
      console.log(props)
      setCurrentIndex([...props.visiblePanels].pop().index)
    }
    const carousel = ref.current!
    carousel.on('visibleChange', listener)

    return () => carousel.off('visibleChange', listener)
  }, [])

  return (
    <div className="relative -mx-6 -my-6">
      <button
        onClick={async () => {
          // catch animation errors when user clicks next and the animation is still not finished
          try {
            await ref.current?.prev()
          } catch (error) {}
        }}
        className="absolute top-0 -left-2 bottom-0 disabled:opacity-60"
        disabled={currentIndex === 0}
      >
        <PrevIcon />
      </button>
      <button
        onClick={async () => {
          // catch animation errors when user clicks next and the animation is still not finished
          try {
            await ref.current?.next()
          } catch (error) {}
        }}
        className="absolute top-0 -right-2 bottom-0 disabled:opacity-50"
        disabled={currentIndex === 4}
      >
        <NextICon />
      </button>
      <Flicking
        useResizeObserver
        panelsPerView={3}
        ref={ref}
        align="prev"
        bound
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
