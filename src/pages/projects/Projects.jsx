import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import SectionTitle from '../../components/SectionTitle';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <Container maxWidth='lg'>
      <SectionTitle title='Projects' />
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <ProjectCard 
            images={[
              'https://imgur.com/0rqrBzk.png',
              'https://imgur.com/1XvBat1.png',
              'https://imgur.com/F3LBRLT.png'
            ]}
            title='RTX Fitness'
            description='Front-End UI fitness web application.'
            skills={['JavaScript', 'React', 'MUI', 'Deployed']}
            points={[
              'Modern UI Design',
              'Responsive and Mobile Friendly'
            ]}
            gitLink='https://github.com/kelseythang/rtx-fitness'
            liveLink='kelseythang.github.io/rtx-fitness/'
          />
        </Grid>
        <Grid xs={12} md={6}>
          <ProjectCard 
            images={[
              'https://imgur.com/iBKoUVz.png', 
              'https://imgur.com/emFs4Nm.png',
              'https://imgur.com/cHvPjMQ.png',
              'https://imgur.com/Fci4tvP.png'
            ]}
            title='FFTCG Collector'
            description='Trading card application for the Final Fantasy Trading Card Game.'
            skills={['JavaScript', 'React', 'Ruby', 'Ruby on Rails', 'MUI', 'Active Storage', 'Deployed']}
            points={[
              'Users can create and login to an account via authentication', 
              'Users can create and delete cards from their collection',
              'Admins can create, update, and delete cards from the database',
              'Admins can create, update, and delete expansions from the database'
            ]}
            gitLink='https://github.com/kelseythang/fftcg-collector'
            liveLink='https://fftcg-collector.onrender.com/'
          />
        </Grid>
        <Grid xs={12} md={6}>
          <ProjectCard 
            images={[
              'https://imgur.com/VpQnVPI.png',
              'https://imgur.com/g5CxDfP.png'
            ]}
            title='Discover Flats'
            description='Apartment search application.'
            skills={['JavaScript', 'React', 'Ruby', 'Ruby on Rails', 'MUI']}
            points={[
              'Users can create and login to an account via authentication',
              'Users can create reviews on a listing'
            ]}
            gitLink='https://github.com/kelseythang/discover-flats'
          />
        </Grid>
        <Grid xs={12} md={6}>
          <ProjectCard 
            images={['https://imgur.com/LQSX48a.png']}
            title='Library Manager'
            description='Inventory and user management application for libraries.'
            skills={['JavaScript', 'React', 'Ruby', 'MUI', 'Sinatra']}
            points={[
              'Users can create and delete library members',
              'Users can create and delete book checkouts'
            ]}
            gitLink='https://github.com/kelseythang/library-manager-frontend'
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Projects;