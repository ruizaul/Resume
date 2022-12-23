import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbBlog from '../public/images/works/blog.png'
import thumbCatalogue from '../public/images/works/catalogo.png'
import thumbCodehub from '../public/images/works/codehub.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <Section delay={0.2}>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="blog" title="Blog" thumbnail={thumbBlog}>
              A Blog powered with Sanity CMS, built with Next.js and Tailwind.
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="catalogue"
              title="Catalogue"
              thumbnail={thumbCatalogue}
            >
              A catalogue of interns at Necodex.
            </WorkGridItem>
          </Section>

          <Section delay={0.3}>
            <WorkGridItem id="codehub" title="CodeHub" thumbnail={thumbCodehub}>
              A FullStack admin dashboard CRUD with login ( work still in
              progress )
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
