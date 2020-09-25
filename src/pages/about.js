import React from 'react'
import { Container } from 'theme-ui'
import Layout from '../components/Layout'
import PillarLinks from '../components/PillarLinks'
import '../styles/about.css'

// heading is not visible becuase
//
// main > div > h1 {
//   display: none;
// }
//
// is set in article.css

export default () => {
  return (
    <Layout>
      <Container>
	      <div className="about-banner">
					<picture>
						<source media="(max-width: 800px)" srcset="http://3.97.1.121/wp-content/uploads/2020/09/about-header-mobile.jpg" />
						<source media="(min-width: 801px)" srcset="http://3.97.1.121/wp-content/uploads/2020/09/about-header.jpg" />
							<img src="http://3.97.1.121/wp-content/uploads/2020/09/about-header.jpg" alt="" />
						</picture>
				</div>
				<div className="about-content">
					<div className="lead">
	        	<h1>The Ryerson Way</h1>
	        	<p>Every university claims a culture of innovation, but at Ryerson it’s embedded in our DNA. It’s the strand that connects our investment in experiential learning, our culture of entrepreneurship and our commitment to city building. It’s why we believe inclusion is a strength that propels us forward. It’s also why we measure ourselves against real-world impact and apply our knowledge to improve lives. The drive to create positive change defines our mission and identity.</p>
	        </div>
	        <div className="video">
	        	<iframe width="560" height="315" src="https://www.youtube.com/embed/vJnpw5Bz6zM?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>	       
	        </div>
	        <div className="about-links">
	        	<div>
	        		<img src="http://3.97.1.121/wp-content/uploads/2020/09/about-1.jpg" />
	        		<h2><a href="#">Our Downtown Toronto Campus</a></h2>
	        		<p>Ryerson’s location in the centre of Canada’s most diverse city places us in a unique position to make an impact both locally and globally.</p>
	        	</div>
	        	<div>
	        		<img src="http://3.97.1.121/wp-content/uploads/2020/09/about-2.jpg" />
	        		<h2><a href="#">Research & Innovation</a></h2>
	        		<p>Ryerson University engages in scholarly, research and creative (SRC) activity that addresses real-world challenges to drive economic growth and improve quality of life for Canadians.</p>
	        	</div>
	        	<div>
	        		<img src="http://3.97.1.121/wp-content/uploads/2020/09/about-3.jpg" />
	        		<h2><a href="#">Leadership</a></h2>
	        		<p>Mohamed Lachemi, president and vice-chancellor of Ryerson University, is proud to lead our comprehensive innovation university.</p>
	        	</div>
	        	<div>
	        		<img src="http://3.97.1.121/wp-content/uploads/2020/09/about-4.jpg" />
	        		<h2><a href="#">Zone Learning</a></h2>
	        		<p>Ryerson has built an entrepreneurial culture through a unique model of experiential education we call Zone Learning.</p>
	        	</div>
	        	<div>
	        		<img src="http://3.97.1.121/wp-content/uploads/2020/09/about-5.jpg" />
	        		<h2><a href="#">Social Innovation</a></h2>
	        		<p>Ryerson has created an extensive network of research and community organizations, which enables the university to play an important role in building Canada’s culture of innovation.</p>
	        	</div>
	        	<div>
	        		<img src="http://3.97.1.121/wp-content/uploads/2020/09/about-6.jpg" />
	        		<h2><a href="#">Academic Plan</a></h2>
	        		<p>Ryerson’s five-year academic plan, establishes the university’s vision to become Canada’s leading comprehensive innovation university.</p>
	        	</div>
	        </div>
	      <h2>Explore our areas of research and innovation</h2>
        </div>
        <PillarLinks />
      </Container>
    </Layout>
  )
}

