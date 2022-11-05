import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a software engineer student based in México!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Saul Ruiz
          </Heading>
          <p>Software Engineer ( React / Node / MySQL )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/saul.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Former student of Information Systems Engineering at Universidad de
          Sonora, currently a full stack trainee at Necodex. I love to create
          new things and always be aware of new technologies.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="https://drive.google.com/file/d/1esxNiy0qJhLO18SYs0dpTYC1Pl748d--/view?usp=sharing">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Download CV
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Casas Grandes, Chihuahua, México.
        </BioSection>
        <BioSection>
          <BioYear>2018 - present</BioYear>
          Selected to study software engineering degree at Universidad of
          Sonora.
        </BioSection>
        <BioSection>
          <BioYear>2022 - present</BioYear>
          Trainee Full Stack (MERN) at Necodex.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>Art, Music, Gaming, Anime, Calisthenics</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/ruizaul" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @ruizaul
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/LlamameSaul" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @LlamameSaul
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/eduardosaul7" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @eduardosaul7
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/fimbressaul/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @fimbressaul
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
      <Box align="center" my={4} mb={10}>
        <NextLink href="/works" passHref scroll={false}>
          <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            Look at my work
          </Button>
        </NextLink>
      </Box>
    </Container>
  </Layout>
)

export default Home
