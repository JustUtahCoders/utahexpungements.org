import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import LazyRoute from "./lazy-route.component.js";
import Navbar from "./navbar/navbar.component.js";
import styleguide from "./styleguide.js";
import { Scoped } from "kremling";
import I18N from "./i18n.component.js";
import withAuthentication from "./authentication.component.js";
import About from "./about/about.component.js";
import NotFound from "./not-found/not-found.component";

class Root extends React.Component {
  render() {
    return (
      <I18N>
        {({ baseUrl, currentLanguage, translations }) => (
          <Scoped css={styleguide}>
            <div>
              <BrowserRouter basename={baseUrl}>
                <>
                  <Route children={props => <Navbar {...props} />} />
                  <Route path="/about" component={About} />
                  <LazyRoute
                    exact
                    path="/"
                    loadRoute={() =>
                      import(
                        /* webpackChunkName: "home" */ "./home/home.component.js"
                      )
                    }
                  />
                  <LazyRoute
                    path="/app"
                    loadRoute={() =>
                      import(
                        /* webpackChunkName: "app" */ "./app/app.component.js"
                      )
                    }
                  />
                  <Route path="*" component={NotFound} />
                </>
              </BrowserRouter>
            </div>
          </Scoped>
        )}
      </I18N>
    );
  }
}

export default withAuthentication(Root);
