import { faker } from '@faker-js/faker'

function getRandomStatus() {
  return ['existing', 'construction', 'proposed'][
    faker.datatype.number({ min: 0, max: 2 })
  ] as 'existing' | 'construction' | 'proposed'
}
function getSuggestions() {
  return Promise.resolve(
    new Array(faker.datatype.number({ min: 4, max: 8 })).fill(null).map(() => ({
      image: ['/estate-1.png', '/estate-2.png', '/estate-3.png'][
        faker.datatype.number({ min: 0, max: 2 })
      ],
      name: faker.commerce.productName(),
      address: faker.address.streetAddress(),
      status: getRandomStatus(),
    }))
  )
}

function getDetails(_id: string) {
  return Promise.resolve({
    building: {
      image: '/big-picture.png',
      name: 'Parkline At Lakeline',
      address: '11200 Lakeline Blvd, Austin, TX 78717, USA',
      type: 'Office',
      class: 'B',
      subMarket: 'Cedar Park',
      owner: 'Strategic Office Partners',
      rsf: '90,000 SQ FT',
      plateSize: '90,000 SQ FT',
      yearBuilt: '2009',
      floors: 1,
      status: getRandomStatus(),
    },
    parking: {
      type: 'Surface',
      ratio: '5.0 spaces / 1K RSF',
      cost: 'Free',
    },
  })
}

export { getSuggestions, getDetails }
