import { Box } from '@chakra-ui/react'
import Link from 'next/link'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Saul Fimbres. All Rights Reserved -
      Built based on Takuya Matsuyama
      <Link href="https://www.craftz.dog/">
        <a
          style={{
            color: 'green'
          }}
        >
          {' '}
          Website
        </a>
      </Link>
    </Box>
  )
}

export default Footer
