import React from "react"
import {Link} from "gatsby"
import LastUpdate from "./last-update";
import Sources from "./sources";

const Layout = ( { location, children } ) => {
  const rootPath = `${ __PATH_PREFIX__ }/`
  const isRootPath = location.pathname === rootPath
  const title = "Oggi Posso";

  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{ title }</Link>
      </h1>
    )
  }
  else {
    header = (
      <Link className="header-link-home" to="/">
        { title }
      </Link>
    )
  }

  // @todo: display site name?

  return (
    <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8 font-sans text-gray-900" data-is-root-path={ isRootPath }>
      <header/>
      <main>{ children }</main>
      <footer>
        <div>
          <Link to="/">Home</Link> - { ` ` }
          <Link to="/terms">Termini di utilizzo</Link> - { ` ` }
          <Link to="/privacy">Informativa sulla privacy</Link> - { ` ` }
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfiuthLNYyeeOd1n5J0dHclP-3mrRvv8K4lQGzkBlGem8-nzA/viewform">Contatti</a> - { ` ` }
          <a href="https://github.com/mmolinari/oggiposso">GitHub</a>
        </div>

        <LastUpdate></LastUpdate>
        <Sources></Sources>
        <div className="text-xs">Icon made by <a href="https://www.flaticon.com/authors/freepik"
                                                             title="Freepik">Freepik</a> from <a
          href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </footer>
    </div>
  )
}

export default Layout
