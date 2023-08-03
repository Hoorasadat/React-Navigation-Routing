import Layout from "../Layout";
import "./About.css";

function About() {
  return (
    <div className="About">
      <Layout>
        <main>
          <section className="aboutSection">
            <h1>Welcome to Our Todo App</h1>
            Welcome to our Todo App! We provide a simple and efficient way to
            manage your tasks and stay organized. Our app is designed to help
            you keep track of your to-do list and accomplish your goals with
            ease.
          </section>

          <section className="aboutSection">
            <h1>Features</h1>
            Our Todo App comes with a range of features to enhance your
            productivity:
            <ul className="aboutList">
              <li>Easy task entry and management</li>
              <li>Prioritize tasks using categories and due dates</li>
              <li>
                Mark tasks as completed and keep a record of your
                accomplishments
              </li>
            </ul>
          </section>
        </main>
      </Layout>
    </div>
  );
}

export default About;
