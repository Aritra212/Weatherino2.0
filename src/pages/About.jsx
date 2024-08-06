function About() {
  return (
    <div className="text-text1 w-4/5 mx-auto mt-4">
      <div className="text-2xl font-bold">About -</div>
      <div className="text-xs">
        <p className="leading-4 my-2 text-justify">
          Welcome to{" "}
          <span className="text-text2 font-semibold text-sm">
            Weatherino2.0
          </span>
          , a weather forecasting website. This project was initially developed
          in 2022 as a college project by a dedicated team of six members
          (Soumita Ganguly, Aritra Paul, Sourav Roy Dalai, Rejaul Karim, Somnath
          Das and Himangshu Ghosh). Our primary goal was to create a
          user-friendly platform that provides accurate and timely weather
          information using the OpenWeatherMap API. The original version was
          built with HTML, CSS, and JavaScript.
        </p>
        <p className="leading-4 my-2 text-justify">
          In this updated version ( Weatherino2.0), I ( Aritra Paul ) have
          revamped the website using React and Tailwind CSS to enhance its
          functionality and user experience. The commitment to providing
          reliable weather forecasts remains stronger than ever. With React, I
          have improved the interactivity and performance of the website, while
          Tailwind CSS has allowed me to create a modern and responsive design.
        </p>
      </div>
      <div className="my-7">
        <p className="text-lg font-bold leading-6 my-2">
          All the features provided by this site are described below -
        </p>
        <ul className="list-disc list-outside ml-9">
          <li className="text-xs leading-5 text-justify">
            It can help you to find out the current weather conditions of your
            area through GPS coordinates or by searching through the area name.
          </li>
          <li className="text-xs leading-5 text-justify">
            It not only shows you just the current weather status but also shows
            the weather data for the next Seven days.
          </li>
          <li className="text-xs leading-5 text-justify">
            Get up-to-date weather information from the OpenWeatherMap API.
          </li>
          <li className="text-xs leading-5 text-justify">
            Enjoy a clean and responsive design thanks to Tailwind CSS.
            Experience faster load times and smoother interactions with React.
          </li>
        </ul>
        <p className="text-sm mt-3">Older version link -</p>
        <a
          href="https://project-weatherino.netlify.app"
          target="_blank"
          className="cursor-pointer font-semibold text-text2 text-xs"
        >
          project-weatherino.netlify.app
        </a>
      </div>
    </div>
  );
}

export default About;
