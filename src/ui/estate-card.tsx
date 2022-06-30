import Card from 'components/card'
import Chip from 'components/chip'
import { PinIcon } from './icons'

type Props = {
  image: string
  name: string
  address: string
  status: 'existing' | 'construction' | 'proposed'
}
const EstateCard: React.FC<
  React.PropsWithChildren<React.ComponentProps<typeof Card> & Props>
> = ({ children, image, address, name, status, ...props }) => {
  return (
    <Card {...props}>
      <img src={image} alt="real estate" />
      <h3 className="font-bold tracking-tight line-clamp-1">{name}</h3>
      <div className="flex space-x-1 items-baseline">
        <PinIcon />
        <span className="line-clamp-1 text-sm">{address}</span>
      </div>
      <div className="!mt-3">
        <Chip colorVariant={status}>{status}</Chip>
      </div>
    </Card>
  )
}

EstateCard.displayName = 'EstateCard'

export default EstateCard
