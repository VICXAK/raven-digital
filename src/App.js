import Header from "./components/Header";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Service from "./components/Service";
import ServiceCard from "./UI/ServiceCard";
import { cardData } from "./data";
import { worksData } from "./data";
import { advanceData } from "./data";
import { ourTeamData } from "./data";
import { blogData } from "./data";
import { clientsData } from "./data";

import OurWorks from "./components/OurWorks";
import OurWorksCard from "./UI/OurWorksCard";
import Advance from "./components/Advance";
import AdvanceCard from "./components/AdvanceCard";
import Testimonials from "./components/Testimonials";
import OurTeam from "./components/OurTeam";
import TeamCard from "./UI/TeamCard";
import Blog from "./components/Blog";
import BlogCard from "./UI/BlogCard";
import Clients from "./components/Clients";
import ClientsCard from "./UI/ClientsCard";
import Contact from "./components/Contact";
import ContactForm from "./UI/ContactForm";
import ContactAddress from "./UI/ContactAddress";
import Footer from "./components/Footer";

function App() {
  const serviceCard = cardData.map((obj, i) => {
    return <ServiceCard key={i} {...obj} />;
  });

  const ourWorksCard = worksData.map((obj, i) => {
    return <OurWorksCard key={i} {...obj} />;
  });

  const advanceCard = advanceData.map((obj, i) => {
    return <AdvanceCard key={i} {...obj} />;
  });

  const teamCard = ourTeamData.map((obj, i) => {
    return <TeamCard key={i} {...obj} />;
  });

  const blogCard = blogData.map((obj, i) => {
    return <BlogCard key={i} {...obj} />;
  });

  const clientsCard = clientsData.map((obj, i) => {
    return <ClientsCard key={i} {...obj} />;
  });

  return (
    <div className="App">
      <div className="wrapper">
        <Header>
          <Nav />
          <Intro />
        </Header>
        <Main>
          <Service>{serviceCard}</Service>
          <OurWorks>{ourWorksCard}</OurWorks>
          <Advance>{advanceCard}</Advance>
          <Testimonials />
          <OurTeam>{teamCard}</OurTeam>
          <Blog>{blogCard}</Blog>
          <Clients>{clientsCard}</Clients>
          <Contact>
            <ContactForm />
            <ContactAddress />
          </Contact>
        </Main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
