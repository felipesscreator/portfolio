import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Menu">
    <Container>
      <Title>
        Restaurant System <Badge>2021-</Badge>
      </Title>
      <P>
        A system for restaurants with menu, order manager, and user account.
      </P>
      <P>
        I chose Javascript for the entire project, in the Frontend I used React.js and axios.js and in the Backend I used Nest.js. For the database, I used PostgreSQL with Prisma.
        I chose these frameworks because of their practicality.          
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://restaurantmenu.vercel.app/">
            Click for see in Web <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>FrontEnd</Meta>
          <span>NodeJS, React, Bootstrap, Styled-components</span>
        </ListItem>
        <ListItem>
          <Meta>BackEnd</Meta>
          <span>NodeJS, Nest.js, Prisma, PostgreSQL</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/menu.jpg" alt="menuwebsite" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'