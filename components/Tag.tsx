import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium uppercase text-purple-400 hover:text-purple-200">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
