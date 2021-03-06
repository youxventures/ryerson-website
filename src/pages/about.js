import React, { useEffect } from 'react'
import { Container } from 'theme-ui'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PillarLinks from '../components/PillarLinks'
import '../styles/about.css'

export default () => {
  useEffect(() => {
    document.body.style.height = '100%'
  }, [])

  return (
    <Layout absoluteHeader>
			<SEO title="About" slug="/about" />

      <Container sx={{ mt: '-130px' }}>
	      <div className="about-banner">
					<picture>
						<source media="(max-width: 800px)" srcSet="https://media-ryu.youxventures.com/wp-content/uploads/2020/09/about-header-mobile.jpg" />
						<source media="(min-width: 801px)" srcSet="https://media-ryu.youxventures.com/wp-content/uploads/2020/09/about-header.jpg" />
							<img src="https://media-ryu.youxventures.com/wp-content/uploads/2020/09/about-header.jpg" alt="" />
						</picture>
				</div>
				<div className="about-content">
					<div className="lead">
	        	<h1>The Ryerson Way</h1>
	        	<p>Every university claims a culture of innovation, but at Ryerson it’s embedded in our DNA. It’s the strand that connects our investment in experiential learning, our culture of entrepreneurship and our commitment to city building. It’s why we believe inclusion is a strength that propels us forward. It’s also why we measure ourselves against real-world impact and apply our knowledge to improve lives. The drive to create positive change defines our mission and identity.</p>
	        </div>
	        <div className="video">
	        	<iframe title="ryerson at a glance" width="560" height="315" src="https://www.youtube.com/embed/vJnpw5Bz6zM?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
	        </div>
	        <div className="about-links">
	        	<div>
	        		<div>
		        		<img src="https://media-ryu.youxventures.com/wp-content/uploads/2020/09/about-1.jpg" alt="downtown toronto" />
		        		<h2><a href="https://www.ryerson.ca/facilities-management-development/campus-development/">Our Downtown Toronto Campus</a></h2>
		        		<p>Ryerson’s location in the centre of Canada’s most diverse city places us in a unique position to make an impact both locally and globally.</p>
	        		</div>
	        	</div>
	        	<div>
	        		<div>
		        		<img src="https://media-ryu.youxventures.com/wp-content/uploads/2020/09/about-2.jpg" alt="research & innovation" />
		        		<h2><a href="https://www.ryerson.ca/research/">Research & Innovation</a></h2>
		        		<p>Ryerson University engages in scholarly, research and creative (SRC) activity that addresses real-world challenges to drive economic growth and improve quality of life for Canadians.</p>
	        		</div>
	        	</div>
	        	<div>
		        	<div>
		        		<img src="https://media-ryu.youxventures.com/wp-content/uploads/2020/09/about-3.jpg" alt="leadership" />
		        		<h2><a href="https://www.ryerson.ca/about/leadership/">Leadership</a></h2>
		        		<p>Mohamed Lachemi, president and vice-chancellor of Ryerson University, is proud to lead our comprehensive innovation university.</p>
	        		</div>
	        		</div>
	        	<div>
		        	<div>
		        		<img src="https://media-ryu.youxventures.com/wp-content/uploads/2020/09/about-4.jpg" alt="zone learning" />
		        		<h2><a href="https://www.ryerson.ca/zone-learning/">Zone Learning</a></h2>
		        		<p>Ryerson has built an entrepreneurial culture through a unique model of experiential education we call Zone Learning.</p>
	        		</div>
	        	</div>
	        	<div>
		        	<div>
		        		<img src="https://media-ryu.youxventures.com/wp-content/uploads/2020/09/about-5.jpg" alt="social innovation" />
		        		<h2><a href="https://www.ryerson.ca/social-innovation/">Social Innovation</a></h2>
		        		<p>Ryerson has created an extensive network of research and community organizations, which enables the university to play an important role in building Canada’s culture of innovation.</p>
	        		</div>
	        	</div>
	        	<div>
		        	<div>
		        		<img src="https://media-ryu.youxventures.com/wp-content/uploads/2020/09/about-6.jpg" alt="academic plan" />
		        		<h2><a href="https://www.ryerson.ca/provost/strategic-plans/academic-plan/">Academic Plan</a></h2>
		        		<p>Ryerson’s five-year academic plan, establishes the university’s vision to become Canada’s leading comprehensive innovation university.</p>
		        	</div>
	        	</div>
	        </div>
	      	<h2>Explore our areas of research and innovation</h2>
        </div>
        <PillarLinks />
      </Container>
    </Layout>
  )
}

