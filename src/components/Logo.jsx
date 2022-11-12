import Image from 'next/future/image'

export function Logomark(props) {
  return <Image src={'/logomark.png'} width="80" height="80" {...props} />
}

export function Logo(props) {
  return <Image src={'/logo.png'} width="200" height="40" {...props} />
}
