import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import Layout from '../components/layouts/article';

import thumbMenu from '../public/images/works/menu.jpg';

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
          <WorkGridItem 
            id="menu" 
            title="Restaurant Menu" 
            thumbnail={thumbMenu}
          >
            A website for restaurants with menu, order manager and user account.
          </WorkGridItem>
        </Section>        
      </SimpleGrid>

      <SimpleGrid></SimpleGrid>
      
    </Container>
  </Layout>
)


export default Works