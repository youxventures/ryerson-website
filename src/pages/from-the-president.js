import React, { useEffect } from 'react'
import { Container } from 'theme-ui'
import Layout from '../components/Layout'
import '../styles/article.css'

export default () => {
  useEffect(() => {
    document.body.style.height = '100%'
  }, [])

  return (
    <Layout>
      <Container>
        <div className="article-banner">
					<picture>
						<source media="(max-width: 800px)" srcset="https://media-ryu.youxventures.com/wp-content/uploads/2020/09/PM-Header-Mobile-r1.jpg" />
						<source media="(min-width: 801px)" srcset="https://media-ryu.youxventures.com/wp-content/uploads/2020/09/PM-Header.jpg" />
						<img src="https://media-ryu.youxventures.com/wp-content/uploads/2020/09/PM-Header.jpg" alt="" />
					</picture>
				</div>
				<div className="article-content" id="president">
					<div className="left">
						<div className="article-title">
							<h1>An innovative new model for modern cities</h1>
						</div>
					</div>
					<p>With the world at a critical crossroads, one of the most important questions we need to address is, can we build cities so that people, nature and economies thrive? It&rsquo;s a question Ryerson has long been focused on, but one that has become paramount as we shape our presence in a growing global city. Our new strategic vision, Ryerson 2030, our campus master plan, our academic plan, and our Strategic Research Plan together are setting a vision for the future of city building around the world.</p>
					<p>The stakes could not be higher. Already more than half the world&rsquo;s population lives in cities, with close to one-quarter concentrated in urban centres of more than a million people. By 2050, more than two-thirds of the world&rsquo;s population, or about 7 billion people, will live in cities. We&rsquo;re not ready. Approximately 60% of the area projected to be urban by 2050 is yet to be built. </p>
					<p>This is more than a story of mass migration. This is a story of cities as drivers of economic growth and agenda setters &mdash; and it is increasingly unfolding at an accelerating pace. As a leading university in Canada&rsquo;s largest and most culturally and economically diverse city, Ryerson has a unique understanding of what&rsquo;s at stake and a growing role in finding solutions to create a more sustainable way forward. </p>
					<blockquote>
				    <div>
				      <div className="pullquote-number">60%</div>
				      <div className="pullquote-src">Portion of area projected to be urbanized by 2050 that’s yet to be built</div>
				    </div>
				  </blockquote>
					<p>We do this as an institution dedicated to learning and knowledge mobilization &mdash; producing innovative, forward-looking research designed to address societal need and make life better for people. This link is clear in all we do and it&rsquo;s embodied in our vision for Ryerson 2030. We are creating a campus that reflects and advances the pillars of our research: sustainable urban design and infrastructure, urban health and wellbeing, governance and social justice, economic development, creativity and culture, migration and integration. </p>
					<p>For example, Ryerson researcher Seth Dworkin is working to improve and scale geothermal technologies as a sustainable alternative to fossil fuels. As COVID-19 emerged in Canada, our Creative Technology Lab quickly pivoted to innovate an origami inspired face shield design, reducing production time from hours to 40 seconds. Beyond pandemic response, many of the lab&rsquo;s activities are pushing the limits of how robotics can be used creatively. Professor Anna Triandafyllidou, the Canada Excellence Research Chair (CERC) in Migration and Integration, is studying the impact of migration at both ends of the labour market. The insights could help restart Canada&rsquo;s immigration post-pandemic, protect labour rights and support migrant entrepreneurship. </p>
					<figure>
				    <img src="https://media-ryu.youxventures.com/wp-content/uploads/2020/09/PM-Headshot.jpg" className="article-img" alt="Mohamed Lachemi" />
				    <figcaption><strong>Mohammed Lachemi,</strong> President & Vice-Chancellor, Ryerson University</figcaption>
				  </figure>
					<p>One of our newest initiatives, City Building Ryerson, will pull together all the innovative research being done across the university to facilitate co-operation and advance city building initiatives designed to address critical issues related to urban development, smart cities, social equity, urban sustainability and more. </p>
					<blockquote>
				    <div>
				      <div className="pullquote-text">As a leading university in Canada’s largest and most culturally and economically diverse city, Ryerson has a unique understanding of what’s at stake and a growing role in finding solutions to create a more sustainable way forward.</div>
				      <div className="pullquote-src"><strong>Mohammed Lachemi,</strong> President & Vice-Chancellor, Ryerson University</div>
				    </div>
				  </blockquote>
					<p>Critically, we also understand the power of a city&rsquo;s businesses to effect positive change. This is why we champion innovation by supporting entrepreneurship &mdash; a core tenet at Ryerson and one that is too-often overlooked by academia. We do this by taking a Zone Learning approach to sharing knowledge. This new model of experiential learning allows students to apply what they&rsquo;re learning in classrooms and labs to real-world startups creating solutions that will have impact both locally and globally.</p>
					<p>It&rsquo;s amazing to think it was just 10 years ago that humans officially became an urban species, with more of us living in cities than in rural settings than ever before. As you can see from these compelling stories, research at Ryerson is helping to create the cities of the future, cities that reflect the best of us, cities that serve all of us equally, that protect the planet, promote health, well-being and social justice, and that create economic stability and opportunity. </p>
					<p>I encourage you to explore the stories on this website to learn about the many ways Ryerson is shaping and building the cities of the future &mdash; the cities we all need. </p>
					<p><strong>Mohamed Lachemi</strong><br />
					President and Vice-Chancellor</p>
				</div>
      </Container>
    </Layout>
  )
}

