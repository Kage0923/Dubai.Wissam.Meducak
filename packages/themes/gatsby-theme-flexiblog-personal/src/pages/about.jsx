import React from 'react'
import { useStaticQuery, graphql, Link as GLink } from 'gatsby'
import { GatsbyImage as Img, getImage } from 'gatsby-plugin-image'
import { Box, Text, Card, Flex, Button } from 'theme-ui'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Section from '@components/Section'
import Seo from '@widgets/Seo'

/**
 * Shadow me to add your own content
 */

const styles = {
  imageWrapper: {
    borderRadius: `default`,
    overflow: `hidden`,
    position: `relative`
  },
  button: {
    display: [`none`, `block`],
    position: `absolute`,
    bottom: 4,
    right: 4
  },
  grid: {
    flexWrap: [`wrap`, null, `nowrap`],
    ' > div + div': {
      ml: [0, 0, 5]
    }
  },
  column: {
    flex: `auto`,
    flexBasis: [`full`, null, `1/2`]
  }
}

export default props => {
  const data = useStaticQuery(aboutQuery)
  const image = getImage(data.avatar)

  return (
    <Layout {...props}>
      <Seo title='About' />
      <Divider />
      <Stack>
        <Main>
          <PageTitle
            header='About Me'
            subheader='The future belongs to those who believe in the beauty of their dreams.'
          />
          <Divider />
          <Box sx={styles.imageWrapper}>
            <Img image={image} />
            <Button as={GLink} to='/contact' sx={styles.button}>
              Contact Me
            </Button>
          </Box>
          <Divider />
          <Flex sx={styles.grid}>
            <Box sx={styles.column}>
              <Section title='My Story'>
                <Text variant='p'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  ac elit nec felis faucibus pellentesque in sit amet neque.
                </Text>
                <Text variant='p'>
                  Nulla est elit, feugiat et lacinia nec, aliquam sit amet est.
                  Ut in consequat ipsum, in sagittis felis.
                </Text>
                <Text variant='p'>
                  Phasellus arcu mauris, fermentum ac dui quis, blandit pharetra
                  orci. lacus et eros suscipit malesuada. Suspendisse hendrerit
                  leo vitae. Sed in ipsum porttitor. Pellentesque sollicitudin
                  pharetra.
                </Text>
                <Text variant='p'>
                  Sed rutrum odio eu sapien aliquam, quis blandit mi lobortis.
                  Vivamus venenatis sem eu ante laoreet facilisis:
                </Text>
                <Text variant='p'>
                  <ul>
                    <li>Cotidieque reformidans</li>
                    <li>Mucius sensibus</li>
                    <li>Sit primis iudicabit</li>
                  </ul>
                </Text>
                <Text variant='p'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s. Fusce odio dolor,
                  rhoncus ac purus id, bibendum malesuada neque.
                </Text>

                <Text variant='p'>
                  At sit consul aperiri omittam ullum. Usu ut option tibique
                  maluisset, ornatus cum ad, pri tale cotidieque reformidans ut.
                </Text>
                <Text variant='p'>
                  Eum ludus iudico ne. Vel labitur habemus vituperata vix!
                </Text>
              </Section>
            </Box>
            <Box sx={styles.column}>
              <Section title='Art Directing'>
                <Card variant='paper'>
                  During the brainstorming process, art directors, co-workers,
                  and clients are engaged in imagining what the finished piece
                  or scene might look like.
                </Card>
              </Section>
              <Divider />
              <Section title='Digital Marketing'>
                <Card variant='paper'>
                  Digital marketing channels are systems based on the Internet
                  that can create, accelerate, and transmit product value from
                  producer to a consumer terminal, through digital networks
                </Card>
              </Section>
              <Divider />
              <Section title='Creative Designing'>
                <Card variant='paper'>
                  A core responsibility of the designer's job is to present
                  information in a way that is both accessible and memorable.
                </Card>
              </Section>
            </Box>
          </Flex>
        </Main>
      </Stack>
    </Layout>
  )
}

const aboutQuery = graphql`
  query AboutQuery {
    avatar: file(absolutePath: { regex: "/about.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1140
          height: 500
          transformOptions: { cropFocus: NORTH }
        )
      }
    }
  }
`
