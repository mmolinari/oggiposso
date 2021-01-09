import React from "react"
import {Link} from "gatsby"
import LastUpdate from "./last-update";
import Sources from "./sources";
import SEO from "./seo";

const Layout = ( { location, children } ) => {
  const rootPath = `${ __PATH_PREFIX__ }/`
  const isRootPath = location.pathname === rootPath
  const [mode, setMode] = React.useState('light');

  // localStorage is unknown during server side rendering.
  React.useEffect(() => {
    setMode(localStorage.getItem('theme') ?? 'light');
  }, []);

  function switchMode () {
    let newMode;
    if (mode === 'light') {
      newMode = 'dark';
    }
    else {
      newMode = 'light';
    }
    localStorage.setItem('theme', newMode);
    setMode(newMode);
  }

  function separator() {
    return (
      <span>{ ` ` } - { ` ` }</span>
    );
  }

  return (
    <div className={mode === 'dark' ? 'dark' : ''}>
      <div className="bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-gray-300">
        <div className="container px-4 md:px-8 lg:px-12 font-sans" data-is-root-path={ isRootPath }>
          <SEO/>
          <header/>
          <main>
            { children }
          </main>
          <footer>
            <div className="text-center">
          <span className="underline">
            <Link to="/">Home</Link>
          </span>
              { separator() }
              <span className="underline">
            <Link to="/terms">Termini di utilizzo</Link>
          </span>
              { separator() }
              <span className="underline">
            <Link to="/privacy">Informativa sulla privacy</Link>
          </span>
              { separator() }
              <span className="underline">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfiuthLNYyeeOd1n5J0dHclP-3mrRvv8K4lQGzkBlGem8-nzA/viewform">Contatti</a>
          </span>
              { separator() }
              <span className="underline">
            <a href="https://github.com/mmolinari/oggiposso">GitHub</a>
          </span>
            </div>

            <div className="text-center">
              <LastUpdate></LastUpdate>
            </div>

            <div className="text-xs text-center">
              Icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a
              href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div>

            <div className="p-8">
              <Sources></Sources>
            </div>
            <span onClick={switchMode} className="text-xs fixed bottom-2 right-2 cursor-pointer p-3">{mode === 'light' ? '🌑' : '☀️'}</span>

          </footer>
        </div>
      </div>
    </div>
  )
}

export default Layout
