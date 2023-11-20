import { FC, useMemo, useEffect } from "react";
            import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
            import Header from "./common/Header/Header.tsx";
            import Home from "./pages/Home/Home.tsx";
            import "./App.css";
            import About from "./pages/About/About.tsx";
            import { HomeData } from "./common/types/HomeData.tsx";
            import { AboutData } from "./common/types/AboutData.tsx";
            import Contact from "./pages/Contact/Contact.tsx";
            import ContactData from "./common/types/ContactData.tsx";
            import Projects from "./pages/Projects/Projects.tsx";
            import NotFound from "./NotFound.tsx";
            import Project from "./pages/Project/Project.tsx";
                        
            const App: FC = () => {
            
            useEffect(() => {
                const userTheme = window.localStorage.getItem('theme')
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                document.body.classList.add(userTheme || systemTheme)
                localStorage.setItem('theme', userTheme || systemTheme)
            }, []);
            
              const ProjectOr404 = () => {
                const { slug } = useParams();
                  if (slug && userData.slugs.length > 0 && userData.slugs.some((s: { slug: string }) => s.slug === slug)) {
                      return <Project userData={userData} />;
                  } else {
                      return <NotFound />;
                  }
              };
                        
              const userData = useMemo(() => ({
                name: "Marvic Tifora",
                email: "marvicstephen@gmail.com",
                phone: "+639273313918",
                company: "Springboard Ph",
                location: "Philippines",
                about: "Im a backend developer with more than 3 years of experience in web development and coding. I love to create innovative and intuitive websites using PHP, Laravel, CodeIgniter, JavaScript, jQuery, ReactJS, REST API and MySQL. I also do have experience as a Technical Project Manager and also do server deployments using Linux distros.",
                skills: ["PHP","Laravel","Codeigniter3","JavaScript","jQuery","REST API","ReactJS","JIRA","MySQL","MariaDB","Nginx","Apache","Linux"],
                projects: [{"name":"Alphera Marine","description":"ERP Maritime System","languages":["Php,Codeigniter,JavaScript,jQuery,MariaDB"],"updatedAt":"Current","image":"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","id":"386","slug":"alphera-marine"}, {"name":"Polland IMS","description":"Polland Inventory Management System","languages":["Php,Laravel,JavaScript,jQuery,MariaDB, REST API"],"updatedAt":"Current","image":"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","id":"387","slug":"polland-ims"},
                {"name":"Coeasy","description":"Quiz System","languages":["Php,Codeigniter,JavaScript,jQuery,MariaDB, Wordpress"],"updatedAt":"Current","image":"src/images/coeasy.png","id":"388","slug":"coeasy"},{"name":"Sipag","description":"Sipag Lending Web App","languages":["Php,Codeigniter,JavaScript,jQuery,MariaDB, REST API"],"updatedAt":"2022","image":"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","id":"389","slug":"sipag-lending"}], 
                work: [{"id":184,"company":"3S Security Solutions","position":"Web Developer","startDate":"05/2019","endDate":"12/2019","description":"Successfully maintained and improved the existing IMS and Accounting System using\nPHP CodeIgniter, e","orderId":1,"image":"https://picsum.photos/400/400"},{"id":185,"company":"Springboard Ph","position":"Web Developer","startDate":"02/2020","endDate":"Present","description":"Web Development and Project Management","orderId":2,"image":"https://picsum.photos/400/400"}],
                role: "USER",
                profession: "Web Developer",
                services: ["WEB_DEVELOPMENT","PROJECT_MANAGEMENT"],
                slugs: [{"slug":"alphera-marine","header":"Alphera Marine","description":"ERP system for a maritime company, streamlining their recruitment, crew deployment, and monitoring processes.","image":"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","overview":"Overview","platforms":"Web","link":"https://erp.alpheramarine.com/"}, {"slug":"polland-ims","header":"Polland Inventory Management System","description":"An Inventory Management System (IMS) for a famous Chinese goods and delicacies company, optimizing their inventory control and supply chain management.","image":"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","overview":"Overview","platforms":"Web","link":"https://pollandhopiainventory.com/"},
                {"slug":"coeasy","header":"Coeasy Quiz System","description":"A Quiz system that focuses on improving students cohesion,comprehension and collaboration.","image":"src/images/coeasy.png","overview":"Overview","platforms":"Web","link":"https://coeasy.website/landing/"},{"slug":"sipag-lending","header":"Sipag Lending App","description":"A inhouse system that manages loans by employees planned to be release by year 2022 but hurdled due to the pandemic, currently on boiler.","image":"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","overview":"Overview","platforms":"Web","link":"#"}]
              }),
              []
            );
            
            const homeData = useMemo(
                    () => ({
                      headerOne: "I'm Marvic Tifora, a Web Developer from Philippines",
                      descriptionOne: "Im a backend developer with more than 3 years of experience in web development and coding. I love to create innovative and intuitive websites using PHP, Laravel, CodeIgniter, JavaScript, jQuery, ReactJS, REST API and MySQL. I also do have experience as a Technical Project Manager and also do server deployments using Linux distros.",
                      profileImage: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/63407fbdc2d4ac5270385fd4_home-hero-image-paperfolio-webflow-template.svg",
                      sections: [                        {
                          type: "SKILL",
                          details: {
                            headerOne: "My broad set of services and skills",
                            order: 1
                          }
                        },
                      ],
                    }),
                    []
                  );
            
            const aboutData = useMemo(
                    () => ({
                      headerOne: "Hello, I'm Marvic Tifora",
                      iconOne: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b443e2bb8e12b5faf51a7_about-hero-rigth-image-paperfolio-webflow-template.png",
                      iconTwo: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b440128f648585c383865_about-hero-left-image-paperfolio-webflow-template.png",
                      iconThree: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b52d3639fb5250039e574_my-story-image-paperfolio-webflow-template.png",
                      headerTwo: "My story as a designer",
                      descriptionOne: "Im a backend developer with more than 3 years of experience in web development and coding. I love to create innovative and intuitive websites using PHP, Laravel, CodeIgniter, JavaScript, jQuery, ReactJS, REST API and MySQL.",
                      descriptionTwo: "Embarking on a journey fueled by curiosity and passion, I found solace in the world of code. From solving complex problems to creating user-friendly interfaces, every project has been a stepping stone in my development career. Continually learning and adapting, I've embraced new technologies and methodologies to build robust and efficient solutions. My path as a developer is more than a career; it's a lifelong pursuit of innovation, creativity, and technological advancement.",
                      sections: [
                        {
                          type: "STORY",
                          details: {
                            headerOne: "Designing since I was ? years old",
                            descriptionOne: "I started designing when I was ? years old. My first designs were for my school projects. I was fascinated by the idea of creating something that people can interact with. I studied design for 5 years in college and have been working as a designer for 3 years.",
                            bulletOne: "Passionate about design from a young age.",
                            bulletTwo: "Five years of design education, three professionally.",
                            bulletThree: "Strong advocate of user-centered design.",
                            imageOne: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b55bcb4baec57b75b66fd_desigining-experience-paperfolio-webflow-template.png",
                            order: 1
                          }
                        },
                        {
                          type: "RESUME",
                          details: {
                            headerOne: "Take a look at my resume",
                            order: 2
                          }
                        },
                        {
                          type: "VALUE",
                          details: {
                            headerOne: "the core values that drive my work.",
                            descriptionOne: "Steering the helm of my career is a deeply ingrained set of core values. These principles not only guide my work ethic but also shape the way I view and approach design. Let's delve into the convictions that drive my professional journey.",
                            values: [{"value":"HARD_WORK"},{"value":"TRANSPARENCY"},{"value":"INNOVATION"},{"value":"GROWTH"}],
                            order: 3
                          }
                        },
                      ],
                    }),
                    []
                  );
            
            const projectsPageData = useMemo(
                    () => ({
                      headerOne: "Projects",
                      descriptionOne: "Here are some of my recent projects. I've worked on a wide range of projects, from website and app design to branding and graphic design. Each project brings its own unique challenges and opportunities."
                    }),
                    []
                  );
            
            const contactData = useMemo(
                    () => ({
                      headerOne: "Contact Me",
                      descriptionOne: "Don't hesitate to get in touch! Whether you're looking for a web developer, interested in a collaboration, or just want to say hello, I'd be delighted to hear from you. I strive to respond promptly and look forward to our potential correspondence!",
                      sections: [
                        {
                          type: "FAQ",
                          details: {
                            headerOne: "Frequently Asked Questions",
                            descriptionOne: "From understanding my design process to discussing project timelines, I've gathered responses to questions often asked by clients and collaborators. If you can't find your answer here, feel free to reach out!",
                            faq: [],
                            order: 1
                          }
                        },
                      ],
                    }),
                    []
                  );
            
            return (
              <BrowserRouter>
                <Header />
                <Routes>
                  <Route
                    path="/"
                    element={<Home userData={userData} pageData={homeData as HomeData} />}
                  />
                  <Route
                    path="/contact"
                    element={
                      <Contact
                        pageData={contactData as ContactData}
                        userData={userData}
                      />
                    }
                  />
                  <Route
                    path="/projects"
                    element={<Projects pageData={projectsPageData} userData={userData} />}
                  />
                  <Route
                    path="/about"
                    element={
                      <About pageData={aboutData as AboutData} userData={userData} />
                    }
                  />
                  <Route path="/:slug" element={<ProjectOr404 />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            );
          };
                    
          export default App;