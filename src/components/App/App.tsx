import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import GlobalStyles from '../../styles/globalStyles';
import theme from '../../styles/theme';

import { Container, Wrapper } from './App.styles';

import Auth from '../../pages/Auth/Auth';
import Profile from '../../pages/Profile/Profile';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Wrapper>
          <Container>
            <Switch>
              <Route exact path='/'>
                <Auth />
              </Route>
              <Route path='/profile'>
                <Profile />
              </Route>
            </Switch>
          </Container>
        </Wrapper>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
