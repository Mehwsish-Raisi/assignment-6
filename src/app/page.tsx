import Achievement from "@/components/Achievement";
import ExploreCourses from "@/components/Explore-Courses";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Team from "@/components/Team";

import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
<Header />
<Hero />
<ExploreCourses />
<Achievement />
<Courses />
<Team />
<Testimonials />

<Footer />
    </div>
  );
}
