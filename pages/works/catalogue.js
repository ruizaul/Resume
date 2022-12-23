import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Catalogue">
    <Container>
      <Title>
        Catalogue <Badge>2022-</Badge>
      </Title>
      <P>A catalogue of interns at Necodex.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://frontend-practica-necodex.vercel.app/">
            Catalogue
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Website Repo</Meta>
          <Link href="https://github.com/ruizaul/Frontend-Practica-Necodex">
            Catalogue Repo
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
          <Link href="https://backend-practica-necodex.vercel.app/">
            REST API
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>API Repo</Meta>
          <Link href="https://github.com/ruizaul/Backend-Practica-Necodex">
            REST API Repo
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/catalogo.png" alt="Catalogo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
