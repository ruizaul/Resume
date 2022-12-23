import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Blog">
    <Container>
      <Title>
        Blog <Badge>2022-</Badge>
      </Title>
      <P>A Blog powered with Sanity CMS, built with Next.js and Tailwind.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://sf-nextjs-blog.vercel.app/">
            https://sf-nextjs-blog.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Chrome.</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Tailwind, Sanity CMS.</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/blog.png" alt="Blog" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
