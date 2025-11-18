export type Listing = {
  id: string
  title: string
  year: number
  km: string
  city: string
  price?: string
  image?: string
  description?: string
}

const listings: Listing[] = [
  {
    id: 'cbr-600-2008',
    title: 'Honda CBR 600 RR',
    year: 2008,
    km: '28.000 km',
    city: 'São Paulo, SP',
    price: 'R$ 28.500',
    image: '/images/cbr600-2008.jpg',
    description: 'Honda CBR 600 RR ano 2008 em bom estado. Revisões em dia, pneus com boa vida útil e documentação ok.'
  }
]

export default listings
