import { useEffect, useState } from "react";

function NavBar({ setCity, err, setErr, theme, setTheme }) {
  //vars
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [toggleMenu, setToggleMenu] = useState(false);

  //Get city function
  function hendleGetCity(e) {
    e.preventDefault();

    const city = e.target.children.city.value;

    if (city) {
      if (city.match(/([A-Z])\w+/gi)) {
        const smallLettersCity = city.toLowerCase();

        setCity(smallLettersCity);
        localStorage.setItem("weather-city", smallLettersCity);
      } else {
        setErr("Enter latin letters without digits");
        console.log(err);
      }
    }

    e.target.reset();
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);

      setErr();
    };

    window.addEventListener("resize", changeWidth);
  }, []);

  return (
    <>
      <nav className="navBar">
        {(toggleMenu || screenWidth > 500) && (
          <>
            {/* Theme button */}
            <div
              className="themeBtn"
              onClick={() => {
                theme === "dark" ? setTheme("light") : setTheme("dark");
              }}
            >
              <img
                src={
                  theme === "dark"
                    ? "./img/theme-icons/moon.svg"
                    : "./img/theme-icons/sun.svg"
                }
                alt={`theme is ${theme}`}
              />
            </div>

            {/* form */}
            <form onSubmit={hendleGetCity} className="navBar__form">
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Enter city name"
                required
              />
              <button type="submit" className="navBar__searchBtn">
                <img src="./img/loupe.png" alt="loupe" />
              </button>
            </form>
          </>
        )}

        {/* err alert */}
        <div
          className="err"
          style={{
            color: theme === "dark" ? "rgb(255, 209, 59)" : "rgb(59, 85, 255)",
          }}
        >
          {err}
        </div>

        {/* menu button */}
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          style={{ display: screenWidth > 500 ? "none" : "block" }}
          className="navBar__menuBtn"
        >
          <img src="./img/icons8-menu.svg" alt="menu" />
        </button>
      </nav>
    </>
  );
}

export default NavBar;
