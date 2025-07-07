import H1 from "./components/element/H1";
import H2 from "./components/element/H2";
import H3 from "./components/element/H3";
import Paragraph from "./components/element/Paragraph";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

function App() {
  return (
    <>
      <div className="relative flex min-h-screen items-center justify-start lg:static lg:justify-between">
        <div className="w-3/4">
          <H1>Fullstack Web Developer | Digital Business Enthusiast</H1>
          <H2>
            Transforming your brilliant ideas into functional, beautiful, and
            business-oriented web solutions. From concept to deployment, I'm
            here for every step.
          </H2>
          <Button>View My Portofolio</Button>
        </div>
        <img
          className="aspect-square w-1/4 rounded-full object-cover object-center"
          src="/images/hero.jpg"
          alt=""
        />
      </div>
      <div>
        <H3>Who Am I?</H3>
        <div>
          <img src={undefined} alt="" />
          <Paragraph>
            As a Fullstack Web Developer and a Digital Business student at
            Lampung University, I combine technical expertise in building robust
            web applications with a deep understanding of business strategy. I
            am passionate about creating digital solutions that not only work
            but also drive your business's growth and efficiency.
          </Paragraph>
        </div>
      </div>
      <div>
        <H3>My Core Skill</H3>
        <Paragraph>
          Proficient in technologies from frontend to backend, ensuring
          comprehensive and integrated solutions.
        </Paragraph>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Frontend</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                <li>ReactJs</li>
                <li>NextJs</li>
                <li>Tailwind</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Backend</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                <li>ExpressJs</li>
                <li>Laravel</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Database</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                <li>MongoDB</li>
                <li>Postgresql</li>
                <li>Mysql</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                <li>Git</li>
                <li>Figma</li>
                <li>Vscode</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div>
        <h3></h3>
      </div>
    </>
  );
}

export default App;
