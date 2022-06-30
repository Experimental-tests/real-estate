import Card from 'components/card'
import Carousel, { CarouselItem } from 'components/carousel'
import Chip from 'components/chip'
import IconButton from 'components/icon-button'
import type { GetServerSideProps, NextPage } from 'next'
import EstateCard from 'ui/estate-card'
import {
  CommentIcon,
  DownloadIcon,
  LoveIcon,
  PinIcon,
  ShareIcon,
} from 'ui/icons'
import InformationLabel from 'ui/information'
import Layout from 'ui/layout'
import axios from 'axios'

type Props = {
  details: {
    building: {
      image: string
      name: string
      address: string
      type: string
      class: string
      subMarket: string
      owner: string
      rsf: string
      plateSize: string
      yearBuilt: string
      floors: number
      status: 'existing' | 'construction' | 'proposed'
    }
    parking: {
      type: string
      ratio: string
      cost: string
    }
  }
  suggestions: {
    image: string
    name: string
    address: string
    status: 'existing' | 'construction' | 'proposed'
  }[]
}

const Home: NextPage<Props> = ({ details, suggestions }) => {
  return (
    <Layout>
      <div className="flex space-x-6 items-center">
        <div className="w-20 h-16 rounded-sm bg-pink-200/50 text-pink-700 font-bold flex items-center justify-center">
          Logo
        </div>

        <div className="space-y-1">
          <h2 className="text-4xl tracking-tight font-bold">
            Activision Survey
          </h2>
          <p className="line-clamp-1">
            50,000 SQ FT to 65,000 SQ FT, Central, Downtown, East, Northwest,
            Far Northwest.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <Carousel>
          {suggestions.map((estate, i) => (
            <CarouselItem key={i}>
              <EstateCard {...estate} />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
      <Card direction="horizontal" className="gap-x-6 mt-8 py-5 px-4">
        <img src="/big-picture.png" alt="" />
        <div className="flex-1">
          <div className="flex justify-end items-center space-x-1 ">
            <IconButton>
              <DownloadIcon />
            </IconButton>
            <IconButton>
              <LoveIcon />
            </IconButton>
            <IconButton>
              <CommentIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
          </div>
          <div>
            <h3 className="text-4xl tracking-tight font-bold">
              {details.building.name}
            </h3>
            <div className="space-x-4 mt-2 flex items-center">
              <PinIcon size="large" />
              <span>{details.building.address}</span>
            </div>
            <div className="flex items-baseline space-x-4">
              <h4 className="text-2xl mt-3 mb-1 tracking-tight font-bold">
                Building Information
              </h4>
              <Chip colorVariant={details.building.status}>
                {details.building.status}
              </Chip>
            </div>
            <InformationLabel>
              <span>Type</span>
              <span>: {details.building.type}</span>
            </InformationLabel>
            <InformationLabel>
              <span>Class</span>
              <span>: {details.building.class}</span>
            </InformationLabel>
            <InformationLabel>
              <span>Building Status</span>
              <span>: {details.building.status}</span>
            </InformationLabel>
            <InformationLabel>
              <span>Sub-Market</span>
              <span>: {details.building.subMarket}</span>
            </InformationLabel>
            <InformationLabel>
              <span>Owner</span>
              <span>: {details.building.owner}</span>
            </InformationLabel>
            <InformationLabel>
              <span>RSF</span>
              <span>: {details.building.rsf}</span>
            </InformationLabel>
            <InformationLabel>
              <span>Floor Plate Size</span>
              <span>: {details.building.plateSize}</span>
            </InformationLabel>
            <InformationLabel>
              <span>Year built</span>
              <span>: {details.building.yearBuilt}</span>
            </InformationLabel>
            <InformationLabel>
              <span># of Floors</span>
              <span>: {details.building.floors}</span>
            </InformationLabel>

            <h4 className="text-2xl mt-4 mb-2 tracking-tight font-bold">
              Parking
            </h4>

            <InformationLabel>
              <span>Type</span>
              <span>: {details.parking.type}</span>
            </InformationLabel>

            <InformationLabel>
              <span>Ratio</span>
              <span>: {details.parking.ratio}</span>
            </InformationLabel>
            <InformationLabel>
              <span>Cost</span>
              <span>: {details.parking.cost}</span>
            </InformationLabel>
          </div>
        </div>
      </Card>
    </Layout>
  )
}

const getServerSideProps: GetServerSideProps = async () => {
  const [suggestions, details] = await Promise.all([
    axios
      .get('https://mocki.io/v1/0861a817-722a-41fb-8beb-757af75da0fd')
      .then(({ data }) => data),
    axios
      .get('https://mocki.io/v1/33e4fc59-1fe0-4946-b925-95a8adb75c13')
      .then(({ data }) => data),
  ])

  return {
    props: { suggestions, details },
  }
}

export { getServerSideProps }
export default Home
