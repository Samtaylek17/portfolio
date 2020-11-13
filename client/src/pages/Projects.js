import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default () => {
	return (
		<>
			<div className='cases cases_main' id='cases'>
				<Tabs selectedTabClassName={'active'}>
					<div className='cases__center center'>
						<div className='cases__stage stage' data-aos='animation-scale-y'>
							Portfolio
						</div>
						<h2 className='cases__title h1' data-aos='animation-scale-y' data-aos-delay='150'>
							Look at My <br />
							Products.
						</h2>
						<TabList>
							<div className='cases__nav' data-aos='animation-scale-y' data-aos-delay='300'>
								<Tab className='cases__link' id='defaultOpen'>
									Websites
								</Tab>
								<Tab className='cases__link'>Designs</Tab>
								<Tab className='cases__link'>Tools and Technologies</Tab>
							</div>
						</TabList>
						<TabPanel>
							<div
								id='mobile'
								className='cases__list js-owl'
								data-items-mobile-portrait='1'
								data-items-mobile-album='1'
								data-autoheight>
								<Link
									className='cases__item'
									data-aos='animation-translate-y'
									data-aos-delay=''
									to={{ pathname: 'https://react-messaging-app-fb8ca.firebaseapp.com/' }}
									target='_blank'>
									<div className='cases__preview'>
										<img className='cases__pic' src='img/dev-chat.png' alt='' />
										<div className='cases__box'>
											Case <br />
											Study
										</div>
									</div>
									<div className='cases__body'>
										<h4 className='cases__info h4'>React Dev Chat</h4>
										<div className='cases__text'>A chat app that allow teams communicate.</div>
									</div>{' '}
								</Link>
								<Link
									className='cases__item'
									data-aos='animation-translate-y'
									data-aos-delay='200'
									to={{ pathname: 'http://rumi.africa/' }}
									target='_blank'>
									<div className='cases__preview'>
										<img className='cases__pic' src='img/rumi.png' alt='' />
										<div className='cases__box'>
											Case <br />
											Study
										</div>
									</div>
									<div className='cases__body'>
										<h4 className='cases__info h4'>Rumi Africa</h4>
										<div className='cases__text'>
											A platform to find someone to split your rent with. Find a roommate.
										</div>
									</div>{' '}
								</Link>
								<Link
									className='cases__item'
									data-aos='animation-translate-y'
									data-aos-delay=''
									to={{ pathname: 'https://diylaw.ng/' }}
									target='_blank'>
									<div className='cases__preview'>
										<img className='cases__pic' src='img/diylaw.png' alt='' />
										<div className='cases__box'>
											Case <br />
											Study
										</div>
									</div>
									<div className='cases__body'>
										<h4 className='cases__info h4'>DIYlaw</h4>
										<div className='cases__text'>
											DIYlaw is a platform enabling simple and convenient legal service based on user preference.
										</div>
									</div>{' '}
								</Link>
							</div>
						</TabPanel>

						<TabPanel>
							<div
								id='website'
								className='cases__list js-owl'
								data-items-mobile-portrait='1'
								data-items-mobile-album='1'
								data-autoheight>
								<Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='' to='case.html'>
									<div className='cases__preview'>
										<img className='cases__pic' src='img/case-7.png' alt='' />
										<div className='cases__box'>
											Case <br />
											Study
										</div>
									</div>
									{/* <div className='cases__body'>
                    <h4 className='cases__info h4'>Collab Landing Page</h4>
                    <div className='cases__text'>UI Kit, Coded Template</div>
                  </div>{" "} */}
								</Link>
								<Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='200' to='case.html'>
									<div className='cases__preview'>
										<img className='cases__pic' src='img/case-1.png' alt='' />
										<div className='cases__box'>
											Case <br />
											Study
										</div>
									</div>
									{/* <div className='cases__body'>
                    <h4 className='cases__info h4'>Arty</h4>
                    <div className='cases__text'>A platform to allow designers showcase their works</div>
                  </div>{" "} */}
								</Link>
								<Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='' to='case.html'>
									<div className='cases__preview'>
										<img className='cases__pic' src='img/case-3.png' alt='' />
										<div className='cases__box'>
											Case <br />
											Study
										</div>
									</div>
									{/* <div className='cases__body'>
                    <h4 className='cases__info h4'>A simple game design</h4>
                    <div className='cases__text'>UI Kit, Coded Template</div>
                  </div>{" "} */}
								</Link>
								<Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='200' to='case.html'>
									<div className='cases__preview'>
										<img className='cases__pic' src='img/case-6.png' alt='' />
										<div className='cases__box'>
											Case <br />
											Study
										</div>
									</div>
									{/* <div className='cases__body'>
                    <h4 className='cases__info h4'>A sample Neumorphic design</h4>
                    <div className='cases__text'></div>
                  </div>{" "} */}
								</Link>
								<Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='' to='case.html'>
									<div className='cases__preview'>
										<img className='cases__pic' src='img/case-4.png' alt='' />
										<div className='cases__box'>
											Case <br />
											Study
										</div>
									</div>
									{/* <div className='cases__body'>
                    <h4 className='cases__info h4'>Collab Landing Page</h4>
                    <div className='cases__text'>UI Kit, Coded Template</div>
                  </div>{" "} */}
								</Link>
								<Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='200' to='case.html'>
									<div className='cases__preview'>
										<img className='cases__pic' src='img/case-5.png' alt='' />
										<div className='cases__box'>
											Case <br />
											Study
										</div>
									</div>
									{/* <div className='cases__body'> */}
									{/* <h4 className='cases__info h4'>A simple dashboard design</h4> */}
									{/* <div className='cases__text'>UI Kit, Coded Template</div> */}
									{/* </div> */}
								</Link>
							</div>
						</TabPanel>
						<TabPanel>
							<div
								id='illustration'
								className='cases__list js-owl'
								data-items-mobile-portrait='1'
								data-items-mobile-album='1'
								data-autoheight>
								<Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='' to='case.html'>
									<div className='cases__preview'>
										<img className='cases__pic' src='img/programming-languages.png' alt='' />
										<div className='cases__box'>
											Case <br />
											Study
										</div>
									</div>
									<div className='cases__body'>
										<h4 className='cases__info h4'>Programming Languages</h4>
										<div className='cases__text'>
											I really love JavaScript and it is my favourite of the programming languages. Python is cool, PHP
											and Typescript are awesome too.
										</div>
									</div>{' '}
								</Link>
								<Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='200' to='case.html'>
									<div className='cases__preview'>
										<img className='cases__pic' src='img/frameworks.png' alt='' />
										<div className='cases__box'>
											Case <br />
											Study
										</div>
									</div>
									<div className='cases__body'>
										<h4 className='cases__info h4'>Frameworks</h4>
										<div className='cases__text'>
											I am proficient with Django and NodeJS(express) for server side development, React and Angular for
											Client side development. I'm cool with any CSS framework but my favourite is MDBootstrap.
										</div>
									</div>{' '}
								</Link>
								<Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='200' to='case.html'>
									<div className='cases__preview'>
										<img className='cases__pic' src='img/design.png' alt='' />
										<div className='cases__box'>
											Case <br />
											Study
										</div>
									</div>
									<div className='cases__body'>
										<h4 className='cases__info h4'>Design Tools</h4>
										<div className='cases__text'>Yeah, I love designing with these tools</div>
									</div>
								</Link>
							</div>
						</TabPanel>
					</div>
				</Tabs>
				<div className='cases__figures'>
					<div className='cases__figure'>
						<img
							className='cases__pic js-parallax'
							data-scale='2'
							data-orientation='down'
							src='img/figure-2.png'
							alt=''
						/>
					</div>
					<div className='cases__figure'>
						<img
							className='cases__pic js-parallax'
							data-scale='1.8'
							data-orientation='down'
							src='img/figure-3.png'
							alt=''
						/>
					</div>
				</div>
			</div>
		</>
	);
};
