import NextLink from 'next/link';
import { 
  Link,
  Button,
  Container, 
  Box, 
  Heading, 
  List,
  ListItem,
  useColorModeValue, 
  chakra
} from '@chakra-ui/react';
import Image from 'next/image';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { IoLogoGithub } from 'react-icons/io5';

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box 
        borderRadius="lg" 
        p={3} 
        mb={6} 
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
      >
        Hello, I&apos;m a junior full-stack developer based in Brazil!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Felipe Silva Santos
          </Heading>
          <p>Junior Developer</p>
        </Box>
        <Box 
          flexShrink={0} 
          mt={{base: 4, md: 0}} 
          ml={{md:6}} 
          textAlign="center"
        >
          <Box
            boderColor="whiteAlpha.800" 
            borderWidth={2} 
            borderStyle="solid" 
            w="100px" 
            h="100px" 
            display="inline-block" 
            borderRadius="full" 
            overflow='hidden'
            src="/images/felipe.jpg" 
            alt="Profile Image"
          >
            <ProfileImage 
              src="/images/felipe.jpg" 
              alt="Profile Image"
              borderRadius="full" 
              width="100%"
              height="100%"
            />
          </Box> 
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>Paragraph</Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in São Paulo (Santo André), Brazil.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked with cellphone maintenance in a startup.
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Started studying programming at Blue-Edtech.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/feeee-creator" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @feeee-creator
              </Button>
            </Link>
          </ListItem>
        </List>
        <Box align="center" my={4}>
          <NextLink href="/posts" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra';