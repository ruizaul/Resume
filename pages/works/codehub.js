import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="CodeHub">
    <Container>
      <Title>
        CodeHub <Badge>2022-</Badge>
      </Title>
      <P>
        A FullStack admin dashboard CRUD with login ( work still in progress )
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://sf-codehub.vercel.app/">
            CodeHub
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Website Repo</Meta>
          <Link href="https://github.com/ruizaul/CodeHub">
            CodeHub Repo
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Chrome.</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Tailwind CSS, NodeJS, MongoDB, REST API</span>
        </ListItem>
        <ListItem>
          <Meta>API</Meta>
          <Link href="https://sf-rest-server.vercel.app/">
            REST API
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>API Repo</Meta>
          <Link href="https://github.com/ruizaul/rest-server">
            REST API Repo
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/codehub.png" alt="CodeHub" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
