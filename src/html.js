import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href={'/images/clover_transparent2.png'} type="image/png" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <script
          key="maximeheckel-theme"
          dangerouslySetInnerHTML={{
            __html: `(function() {
            document.body.classList.add('dark');
                  /*
                    try {
                      var mode = localStorage.getItem('mode');
                      var supportDarkMode =
                        window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                      if (!mode && supportDarkMode)
                        document.body.classList.add('theme-dark');
                      if (!mode) return;
                      document.body.classList.add('theme-' + mode);
                    } catch (e) {}
                    */
                  })();`,
          }}
        />

        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "7d1fc96c3c02441ca241e4eb6ca759ed"}'></script>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
